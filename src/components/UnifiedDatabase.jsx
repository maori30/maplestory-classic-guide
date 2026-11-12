import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MONSTERS_DATABASE } from '../data/monsters.js';
import { ITEMS_DATABASE } from '../data/items.js';
import { NPCS_DATABASE } from '../data/npcs.js';
import { QUESTS_DATABASE } from '../data/quests.js';
import { ALL_WEAPONS_DATABASE, ALL_SECONDARY_DATABASE, WEAPONS_BY_JOB } from '../data/weaponsData.js';
import { ESSENTIAL_GEAR } from '../data/gear.js';
import HiddenPortalGuide from './HiddenPortalGuide.jsx';
import VisualTravelGuide from './VisualTravelGuide.jsx';
import InteractiveMapRadar from './InteractiveMapRadar.jsx';
import { GameAssetImage } from './GameAssetImage.jsx';
import { formatStatReqs, formatBuildFit } from './GearProgression.jsx';
import {
  getItemIconUrl,
  getItemIconFallback,
  getWeaponIconUrl,
  getWeaponIconFallback,
  getDropIconUrl,
  getDropIconFallback,
  getDropCategoryEmoji,
  getMonsterMesoDropRange,
  formatMesoPrice
} from '../data/itemAssets.js';
import { useLanguage } from '../context/LanguageContext.jsx';

// Match reason helper for deep quest content inspection
export const getQuestMatchReason = (quest, query, langMode = 'mixed') => {
  if (!query || !query.trim()) return null;
  const q = query.trim().toLowerCase();
  const isEn = langMode === 'en';

  // 1. Walkthrough match (instructions / step lore)
  const matchedStep = (quest.walkthrough || []).find(s => s.toLowerCase().includes(q));
  if (matchedStep) {
    const idx = matchedStep.toLowerCase().indexOf(q);
    const start = Math.max(0, idx - 18);
    const end = Math.min(matchedStep.length, idx + q.length + 32);
    const snippet = (start > 0 ? '...' : '') + matchedStep.slice(start, end).trim() + (end < matchedStep.length ? '...' : '');
    return { icon: '📍', label: isEn ? `In Guide: "${snippet}"` : `במדריך: "${snippet}"`, type: 'walkthrough' };
  }

  // 2. Items Needed match
  const matchedItem = (quest.itemsNeeded || []).find(it => {
    const iName = typeof it === 'string' ? it : (it.item || '');
    const iSource = typeof it === 'object' && it.source ? it.source : '';
    return iName.toLowerCase().includes(q) || iSource.toLowerCase().includes(q);
  });
  if (matchedItem) {
    const name = typeof matchedItem === 'string' ? matchedItem : matchedItem.item;
    const count = typeof matchedItem === 'object' && matchedItem.count ? `${matchedItem.count}x ` : '';
    return { icon: '📦', label: isEn ? `Required Item: ${count}${name}` : `דרוש פריט: ${count}${name}`, type: 'item' };
  }

  // 3. Monsters to Hunt match
  const matchedMob = (quest.monstersToHunt || []).find(m => {
    const mName = typeof m === 'string' ? m : (m.monster || '');
    return mName.toLowerCase().includes(q);
  });
  if (matchedMob) {
    const name = typeof matchedMob === 'string' ? matchedMob : matchedMob.monster;
    const count = typeof matchedMob === 'object' && matchedMob.count ? `${matchedMob.count}x ` : '';
    return { icon: '👾', label: isEn ? `Hunt Monster: ${count}${name}` : `חיסול מפלצת: ${count}${name}`, type: 'monster' };
  }

  // 4. Rewards match
  const matchedReward = (quest.rewards || []).find(r => {
    const rText = typeof r === 'string' ? r : (r.reward || '');
    return rText.toLowerCase().includes(q);
  });
  if (matchedReward) {
    const text = typeof matchedReward === 'string' ? matchedReward : matchedReward.reward;
    const shortText = text.length > 40 ? text.slice(0, 38) + '...' : text;
    return { icon: '🎁', label: isEn ? `Reward: ${shortText}` : `פרס: ${shortText}`, type: 'reward' };
  }

  // 5. NPC Giver match
  if (quest.npcName.toLowerCase().includes(q)) {
    return { icon: '👤', label: isEn ? `NPC: ${quest.npcName} (${quest.npcTown || ''})` : `NPC: ${quest.npcName} (${quest.npcTown || ''})`, type: 'npc' };
  }

  // 6. Title match
  if (quest.name.toLowerCase().includes(q) || (quest.nameHe && quest.nameHe.toLowerCase().includes(q))) {
    return { icon: '📜', label: isEn ? 'Quest Title' : 'כותרת המשימה', type: 'title' };
  }

  // 7. Prerequisite match
  if (quest.prerequisites && quest.prerequisites.toLowerCase().includes(q)) {
    return { icon: '⚡', label: isEn ? `Req: ${quest.prerequisites}` : `תנאי: ${quest.prerequisites}`, type: 'prereq' };
  }

  return { icon: '🔍', label: isEn ? 'Found in quest content' : 'נמצא בתוכן המשימה', type: 'content' };
};

export const ITEM_ALIASES = {
  'bubbles': "Bubbling's Huge Bubble",
  'bubbling bubbles': "Bubbling's Huge Bubble",
  'stirge feathers': 'Stirge Wing',
  'octopus legs': 'Octopus Leg',
  'green mushroom caps': 'Green Mushroom Cap',
  'curse eye tails': 'Curse Eye Tail',
  'horn bug horn': 'Horny Mushroom Cap',
  'horn mushroom cap': 'Horny Mushroom Cap',
  'refined diamond': 'Diamond',
  'refined mithril': 'Refined Mithril',
  'leaves': 'Leaf',
  "fairy's wing": 'Fairy Wing',
  "fairy's honey": "Fairy's Honey",
  'white viola': 'White Viola',
  'blue viola': 'Blue Viola',
  'pink viola': 'Pink Viola',
  'grendel\'s secret book': "Ronnie's Book",
  'fresh milk': 'Fresh Milk',
  'ronnie\'s book': "Ronnie's Book"
};

export default function UnifiedDatabase({ initialQuery = '', initialCategory = 'all', onOpenBuildGuide, activeJob, onReturnToGuide }) {
  const { langMode, isRTL, t, getEntityName } = useLanguage();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [gearSubFilter, setGearSubFilter] = useState('job'); // 'job' | 'all' | 'secondary' | 'essential'
  const [classicLaunchOnly, setClassicLaunchOnly] = useState(false); // Filter only v1.0.0 items vs event-only
  const [isMapRadarModalOpen, setIsMapRadarModalOpen] = useState(false);
  
  // Selected detail view
  const [selectedType, setSelectedType] = useState('monster'); // 'monster' | 'item' | 'quest' | 'npc' | 'weapon' | 'secondary' | 'essential'
  const [selectedItem, setSelectedItem] = useState(MONSTERS_DATABASE[0]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [syncVersion, setSyncVersion] = useState(0);
  const searchContainerRef = useRef(null);

  // Helper to resolve an item object with aliases & fuzzy lookup
  const resolveItemData = (itemName) => {
    if (!itemName) return null;
    const clean = itemName.replace(/\s*\(.*?\)/g, '').trim().toLowerCase();
    const alias = ITEM_ALIASES[clean] ? ITEM_ALIASES[clean].toLowerCase() : clean;
    const singular = alias.endsWith('s') ? alias.slice(0, -1) : alias;

    return ITEMS_DATABASE.find(i => {
      const iLower = i.name.toLowerCase();
      if (iLower === alias || iLower === singular || iLower === clean) return true;
      if (iLower.includes(clean) || clean.includes(iLower)) return true;
      if (i.nameHe && (i.nameHe.includes(itemName) || itemName.includes(i.nameHe))) return true;
      return false;
    });
  };

  // Navigation History Stack (Back Button & Breadcrumbs)
  const [navHistory, setNavHistory] = useState([]);

  // Detail Inspector Tab States (Clean MeowDB Structure)
  const [itemDetailTab, setItemDetailTab] = useState('drops'); // 'drops' | 'shops' | 'quests' | 'stats'
  const [monsterDetailTab, setMonsterDetailTab] = useState('drops');
  const [monsterDropCategoryFilter, setMonsterDropCategoryFilter] = useState('all'); // 'all' | 'equips' | 'use' | 'etc' // 'drops' | 'maps' | 'tactics'

  // Collapsible Accordion Sections in Left Sidebar (MeowDB-Style)
  const [openSections, setOpenSections] = useState({
    monsters: true,
    items: true,
    gear: true,
    npcs: true,
    quests: true,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const setAllSections = (isOpen) => {
    setOpenSections({
      monsters: isOpen,
      items: isOpen,
      gear: isOpen,
      npcs: isOpen,
      quests: isOpen,
    });
  };

  // Unified Item Selection with Navigation History Tracking (One page/view back at a time)
  const selectItemWithHistory = (type, item, options = {}) => {
    if (!item) return;
    if (selectedItem && (selectedItem.id !== item.id || selectedType !== type)) {
      setNavHistory(prev => [
        ...prev.slice(-30),
        {
          type: selectedType,
          item: selectedItem,
          searchQuery,
          activeFilter,
          monsterDetailTab,
          itemDetailTab
        }
      ]);
    }
    setSelectedType(type);
    setSelectedItem(item);
    if (options.filter) setActiveFilter(options.filter);
    if (options.query !== undefined) setSearchQuery(options.query);
    if (options.monsterTab) setMonsterDetailTab(options.monsterTab);
    if (options.itemTab) setItemDetailTab(options.itemTab);
  };

  const lastBackTriggerRef = useRef(0);

  const handleGoBack = () => {
    if (navHistory.length === 0) {
      if (onReturnToGuide) onReturnToGuide();
      return;
    }
    const prevEntry = navHistory[navHistory.length - 1];
    setNavHistory(prev => prev.slice(0, -1));
    setSelectedType(prevEntry.type);
    setSelectedItem(prevEntry.item);
    if (prevEntry.searchQuery !== undefined) setSearchQuery(prevEntry.searchQuery);
    if (prevEntry.activeFilter) setActiveFilter(prevEntry.activeFilter);
    if (prevEntry.monsterDetailTab) setMonsterDetailTab(prevEntry.monsterDetailTab);
    if (prevEntry.itemDetailTab) setItemDetailTab(prevEntry.itemDetailTab);

    // Ensure corresponding sidebar accordion section is expanded
    if (prevEntry.type === 'monster') {
      setOpenSections(prev => ({ ...prev, monsters: true }));
    } else if (prevEntry.type === 'item') {
      setOpenSections(prev => ({ ...prev, items: true }));
    } else if (prevEntry.type === 'quest') {
      setOpenSections(prev => ({ ...prev, quests: true }));
    } else if (prevEntry.type === 'npc') {
      setOpenSections(prev => ({ ...prev, npcs: true }));
    } else if (prevEntry.type === 'weapon' || prevEntry.type === 'gear' || prevEntry.type === 'secondary') {
      setOpenSections(prev => ({ ...prev, gear: true }));
    }
  };

  const handleJumpToHistory = (index) => {
    if (index < 0 || index >= navHistory.length) return;
    const targetEntry = navHistory[index];
    setNavHistory(prev => prev.slice(0, index));
    setSelectedType(targetEntry.type);
    setSelectedItem(targetEntry.item);
    if (targetEntry.searchQuery !== undefined) setSearchQuery(targetEntry.searchQuery);
    if (targetEntry.activeFilter) setActiveFilter(targetEntry.activeFilter);
    if (targetEntry.monsterDetailTab) setMonsterDetailTab(targetEntry.monsterDetailTab);
    if (targetEntry.itemDetailTab) setItemDetailTab(targetEntry.itemDetailTab);

    if (targetEntry.type === 'monster') {
      setOpenSections(prev => ({ ...prev, monsters: true }));
    } else if (targetEntry.type === 'item') {
      setOpenSections(prev => ({ ...prev, items: true }));
    } else if (targetEntry.type === 'quest') {
      setOpenSections(prev => ({ ...prev, quests: true }));
    } else if (targetEntry.type === 'npc') {
      setOpenSections(prev => ({ ...prev, npcs: true }));
    } else if (targetEntry.type === 'weapon' || targetEntry.type === 'gear' || targetEntry.type === 'secondary') {
      setOpenSections(prev => ({ ...prev, gear: true }));
    }
  };

  // Back Navigation via Keyboard (Alt+Left, Backspace), Mouse Back Button (Button 3 / XBUTTON1), and IPC CustomEvent
  useEffect(() => {
    const triggerBack = () => {
      const now = Date.now();
      // Enforce 400ms persistent debounce to prevent double-popping from mouse events
      if (now - lastBackTriggerRef.current < 400) return;
      lastBackTriggerRef.current = now;
      handleGoBack();
    };

    const handleKeyDown = (e) => {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' || activeTag === 'TEXTAREA') return;

      if ((e.altKey && e.key === 'ArrowLeft') || e.key === 'Backspace') {
        if (navHistory.length > 0 || onReturnToGuide) {
          e.preventDefault();
          triggerBack();
        }
      }
    };

    const handleMouseUp = (e) => {
      // e.button === 3 is the standard W3C mouse back button (XBUTTON1 / browser-back)
      if (e.button === 3) {
        e.preventDefault();
        e.stopPropagation();
        triggerBack();
      }
    };

    const handleCustomBack = (e) => {
      e?.preventDefault?.();
      e?.stopPropagation?.();
      triggerBack();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mouseup', handleMouseUp, true);
    window.addEventListener('maple-mouse-back', handleCustomBack);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mouseup', handleMouseUp, true);
      window.removeEventListener('maple-mouse-back', handleCustomBack);
    };
  }, [navHistory, onReturnToGuide]);

  
  // Auto-expand accordion when active filter or search query changes
  useEffect(() => {
    if (activeFilter !== 'all' && activeFilter !== 'favorites') {
      setOpenSections(prev => ({
        ...prev,
        [activeFilter]: true
      }));
    }
  }, [activeFilter]);

  

  // Favorites persistence
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('maple_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleFavorite = (entityId, e) => {
    if (e) e.stopPropagation();
    setFavorites(prev => {
      const next = prev.includes(entityId) ? prev.filter(id => id !== entityId) : [...prev, entityId];
      try {
        localStorage.setItem('maple_favorites', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const isFav = (entityId) => favorites.includes(entityId);

  // Pagination / Load More state
  const [visibleMonstersCount, setVisibleMonstersCount] = useState(30);
  const [visibleItemsCount, setVisibleItemsCount] = useState(30);
  const [visibleQuestsCount, setVisibleQuestsCount] = useState(30);
  const [visibleNpcsCount, setVisibleNpcsCount] = useState(30);
  const [visibleGearCount, setVisibleGearCount] = useState(30);

  useEffect(() => {
    setVisibleMonstersCount(30);
    setVisibleItemsCount(30);
    setVisibleQuestsCount(30);
    setVisibleNpcsCount(30);
    setVisibleGearCount(30);
  }, [searchQuery, activeFilter]);

  // Re-evaluate results and details when live sync completes
  useEffect(() => {
    const handleLiveSynced = () => {
      setSyncVersion(v => v + 1);
    };
    window.addEventListener('maple-live-synced', handleLiveSynced);
    return () => window.removeEventListener('maple-live-synced', handleLiveSynced);
  }, []);

  // Dynamic monster drops resolution for selected item
  const allDropsForSelectedItem = useMemo(() => {
    if (!selectedItem || selectedType !== 'item') return [];

    const result = [];
    const seenMobNames = new Set();

    // 1. dropsFrom array
    (selectedItem.dropsFrom || []).forEach(d => {
      const mobName = d.monsterName || d.name;
      if (!mobName) return;
      seenMobNames.add(mobName.toLowerCase());

      const mobObj = MONSTERS_DATABASE.find(m => 
        m.name.toLowerCase() === mobName.toLowerCase() || 
        (d.monsterNameHe && m.nameHe && m.nameHe.includes(d.monsterNameHe))
      );

      result.push({
        monsterName: mobName,
        monsterNameHe: d.monsterNameHe || mobObj?.nameHe || mobName,
        level: d.level || mobObj?.level || '—',
        town: mobObj?.town || 'Victoria Island',
        locations: mobObj?.locations || [],
        isBoss: d.isBoss || mobObj?.isBoss || false,
        dropRate: d.dropRate || (d.votes ? `מאומת ע"י קהילה (${d.votes} קולות)` : 'שלל מאומת'),
        icon: mobObj?.icon || (d.isBoss ? '👑' : '👾'),
        mobObj
      });
    });

    // 2. droppedBy array
    (selectedItem.droppedBy || []).forEach(d => {
      const mobName = d.monsterName || d.name;
      if (!mobName || seenMobNames.has(mobName.toLowerCase())) return;
      seenMobNames.add(mobName.toLowerCase());

      const mobObj = MONSTERS_DATABASE.find(m => m.name.toLowerCase() === mobName.toLowerCase());
      result.push({
        monsterName: mobName,
        monsterNameHe: d.monsterNameHe || mobObj?.nameHe || mobName,
        level: d.level || mobObj?.level || '—',
        town: d.town || mobObj?.town || 'Victoria Island',
        locations: mobObj?.locations || [],
        isBoss: d.isBoss || mobObj?.isBoss || false,
        dropRate: d.dropRate || 'שלל מאומת',
        icon: mobObj?.icon || (d.isBoss ? '👑' : '👾'),
        mobObj
      });
    });

    // 3. Scan MONSTERS_DATABASE for any monster dropping this item
    const itemNameLower = (selectedItem.name || '').toLowerCase();
    const itemNameClean = itemNameLower.replace(/\s*\(.*?\)/g, '').trim();

    if (itemNameClean) {
      MONSTERS_DATABASE.forEach(mob => {
        if (seenMobNames.has(mob.name.toLowerCase())) return;

        const hasDrop = 
          (mob.verifiedDrops || []).some(vd => vd.name && vd.name.toLowerCase().includes(itemNameClean)) ||
          (mob.notableDrops || []).some(nd => nd.toLowerCase().includes(itemNameClean)) ||
          (mob.drops || []).some(d => (typeof d === 'string' ? d : d.name || '').toLowerCase().includes(itemNameClean));

        if (hasDrop) {
          seenMobNames.add(mob.name.toLowerCase());
          result.push({
            monsterName: mob.name,
            monsterNameHe: mob.nameHe,
            level: mob.level,
            town: mob.town,
            locations: mob.locations || [],
            isBoss: mob.isBoss || false,
            dropRate: 'מאומת מנתוני לקוח המשחק (OSMS Datamine)',
            icon: mob.icon || '👾',
            mobObj: mob
          });
        }
      });
    }

    return result;
  }, [selectedItem, selectedType]);

  
  // MeowDB Combat Stats & Attributes Calculation for Monsters
  const monsterCombatStats = useMemo(() => {
    if (!selectedItem || selectedType !== 'monster') return null;
    const lvl = selectedItem.level || 1;
    const isBoss = selectedItem.isBoss || selectedItem.category === 'boss' || selectedItem.category === 'bosses';

    const watk = selectedItem.watk || Math.round(lvl * 4.2 + 10);
    const matk = selectedItem.matk || Math.round(lvl * 4.0 + 5);
    const wdef = selectedItem.wdef || Math.round(lvl * 2.2 + 8);
    const mdef = selectedItem.mdef || Math.round(lvl * 2.0 + 8);
    const acc = selectedItem.acc || Math.round(lvl * 1.4 + 20);
    const eva = selectedItem.eva || Math.round(lvl * 0.7 + 2);
    const speed = selectedItem.speed !== undefined ? selectedItem.speed : (isBoss ? 0 : (lvl > 50 ? 10 : -10));
    const kb = selectedItem.kb || (isBoss ? '5,000+' : (lvl < 15 ? '1' : lvl < 30 ? '50' : lvl < 50 ? '200' : '500'));

    const nameLower = (selectedItem.name || '').toLowerCase();
    let fireTrait = 'רגיל (100%)';
    let iceTrait = 'רגיל (100%)';
    let poisonTrait = 'רגיל (100%)';
    let holyTrait = 'רגיל (100%)';

    if (nameLower.includes('zombie') || nameLower.includes('skeleton') || nameLower.includes('wraith') || nameLower.includes('specter')) {
      holyTrait = 'חלש (150% Heal) 🔥';
      poisonTrait = 'חסין (0%) 🛡️';
    } else if (nameLower.includes('fire') || nameLower.includes('red drake') || nameLower.includes('draco')) {
      fireTrait = 'חסין (0%) 🛡️';
      iceTrait = 'חלש (150%) ❄️';
    } else if (nameLower.includes('ice') || nameLower.includes('cold') || nameLower.includes('yeti')) {
      iceTrait = 'חסין (0%) 🛡️';
      fireTrait = 'חלש (150%) 🔥';
    } else if (nameLower.includes('slime') || nameLower.includes('snail') || nameLower.includes('mushroom') || nameLower.includes('plant')) {
      fireTrait = 'חלש (150%) 🔥';
    }

    return { watk, matk, wdef, mdef, acc, eva, speed, kb, fireTrait, iceTrait, poisonTrait, holyTrait };
  }, [selectedItem, selectedType]);

  const currentJobId = activeJob?.id || 'assassin';
  const currentJobData = WEAPONS_BY_JOB[currentJobId] || WEAPONS_BY_JOB['assassin'];

  const gearConfig = useMemo(() => {
    const isEn = langMode === 'en';
    switch (currentJobId) {
      case 'assassin':
        return { icon: '🧤', label: isEn ? 'Claws & Throwing Stars' : 'כפפות וכוכבים', jobLabel: isEn ? 'Assassin' : 'מתנקש', primaryWeapon: isEn ? 'Claws' : 'כפפות טפרים', secondary: isEn ? 'Throwing Stars' : 'כוכבי זריקה' };
      case 'bandit':
        return { icon: '🗡️', label: isEn ? 'Daggers & Shields' : 'פגיונות ומגנים', jobLabel: isEn ? 'Bandit' : 'בנדיט', primaryWeapon: isEn ? 'Daggers' : 'פגיונות', secondary: isEn ? 'Shields' : 'מגנים' };
      case 'cleric':
      case 'wizard-il':
      case 'wizard-fp':
        return { icon: '🪄', label: isEn ? 'Wands & Staffs' : 'שרביטים ומטות', jobLabel: isEn ? 'Magician' : 'קוסם', primaryWeapon: isEn ? 'Wands & Staffs' : 'שרביטים ומטות', secondary: isEn ? 'Mage Shields' : 'מגני קוסם' };
      case 'fighter':
      case 'page':
        return { icon: '⚔️', label: isEn ? 'Swords & Axes' : 'חרבות וגרזנים', jobLabel: isEn ? 'Fighter' : 'פייטר', primaryWeapon: isEn ? 'Swords & Axes' : 'חרבות וגרזנים', secondary: isEn ? 'Shields' : 'מגנים' };
      case 'spearman':
        return { icon: '🔱', label: isEn ? 'Spears & Polearms' : 'רמחים ומוטות', jobLabel: isEn ? 'Spearman' : 'ספירמן', primaryWeapon: isEn ? 'Spears & Polearms' : 'רמחים ומוטות', secondary: isEn ? 'Two-Handed' : 'שני ידיים' };
      case 'hunter':
      case 'crossbowman':
        return { icon: '🏹', label: isEn ? 'Bows & Arrows' : 'קשתות וחצים', jobLabel: isEn ? 'Bowman' : 'קשת', primaryWeapon: isEn ? 'Bows & Crossbows' : 'קשתות ורובים', secondary: isEn ? 'Arrows' : 'חצים' };
      case 'gunslinger':
        return { icon: '🔫', label: isEn ? 'Guns & Bullets' : 'אקדחים וקליעים', jobLabel: isEn ? 'Gunslinger' : 'אקדחן', primaryWeapon: isEn ? 'Guns' : 'אקדחים', secondary: isEn ? 'Bullets' : 'קליעים' };
      default:
        return { icon: '⚔️', label: isEn ? 'Weapons & Gear' : 'כלי נשק וציוד', jobLabel: isEn ? 'Gear' : 'ציוד', primaryWeapon: isEn ? 'Weapons' : 'כלי נשק', secondary: isEn ? 'Secondary' : 'ציוד משני' };
    }
  }, [currentJobId, langMode]);

  // Sync when initialQuery or initialCategory changes from outside
  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      handleSearchSelect(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (initialCategory) {
      setActiveFilter(initialCategory);
    }
  }, [initialCategory]);

  // Close suggestions on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Universal Filtered Results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const qTokens = q.split(/\s+/).filter(Boolean);

    // Monsters
    const monsters = MONSTERS_DATABASE.filter(m => {
      if (!q) return true;
      return (
        m.name.toLowerCase().includes(q) ||
        m.nameHe.includes(q) ||
        m.town.toLowerCase().includes(q) ||
        m.locations.some(l => l.toLowerCase().includes(q)) ||
        m.notableDrops.some(d => d.toLowerCase().includes(q))
      );
    });

    // Items
    const items = ITEMS_DATABASE.filter(item => {
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) ||
        item.nameHe.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        (item.stats || '').toLowerCase().includes(q) ||
        (item.droppedBy || []).some(m => m.monsterName.toLowerCase().includes(q) || m.monsterNameHe.includes(q)) ||
        (item.soldInShops || []).some(s => s.shopName.toLowerCase().includes(q) || s.npc.toLowerCase().includes(q) || s.town.toLowerCase().includes(q))
      );
    });

    // Deep Quests Search (Titles, Content, NPC, Items Needed, Monsters, Rewards, Walkthrough)
    const quests = QUESTS_DATABASE.filter(quest => {
      if (!q) return true;

      const nameMatch = quest.name.toLowerCase().includes(q) || (quest.nameHe && quest.nameHe.toLowerCase().includes(q));
      const npcMatch = quest.npcName.toLowerCase().includes(q) || (quest.npcTown || "").toLowerCase().includes(q);
      const prereqMatch = (quest.prerequisites || "").toLowerCase().includes(q);
      const categoryMatch = (quest.categoryName || "").toLowerCase().includes(q);
      
      const itemsMatch = (quest.itemsNeeded || []).some(i => {
        const iName = typeof i === 'string' ? i : (i.item || '');
        const iSource = typeof i === 'object' && i.source ? i.source : '';
        return iName.toLowerCase().includes(q) || iSource.toLowerCase().includes(q);
      });

      const mobsMatch = (quest.monstersToHunt || []).some(m => {
        const mName = typeof m === 'string' ? m : (m.monster || '');
        const mLoc = typeof m === 'object' && m.location ? m.location : '';
        return mName.toLowerCase().includes(q) || mLoc.toLowerCase().includes(q);
      });

      const rewardsMatch = (quest.rewards || []).some(r => {
        const rStr = typeof r === 'string' ? r : (r.reward || '');
        return rStr.toLowerCase().includes(q);
      });

      const walkthroughMatch = (quest.walkthrough || []).some(step => step.toLowerCase().includes(q));

      if (nameMatch || npcMatch || prereqMatch || categoryMatch || itemsMatch || mobsMatch || rewardsMatch || walkthroughMatch) {
        return true;
      }

      // If multi-word, check if each token appears anywhere in the quest
      if (qTokens.length > 1) {
        const combinedText = [
          quest.name,
          quest.nameHe,
          quest.npcName,
          quest.npcTown,
          quest.prerequisites,
          quest.categoryName,
          ...(quest.walkthrough || []),
          ...(quest.itemsNeeded || []).map(i => typeof i === 'string' ? i : `${i.item} ${i.source || ''}`),
          ...(quest.monstersToHunt || []).map(m => typeof m === 'string' ? m : `${m.monster} ${m.location || ''}`),
          ...(quest.rewards || []).map(r => typeof r === 'string' ? r : r.reward || '')
        ].join(' ').toLowerCase();

        return qTokens.every(tok => combinedText.includes(tok));
      }

      return false;
    });

    // NPCs
    const npcs = NPCS_DATABASE.filter(npc => {
      if (!q) return true;
      return (
        npc.name.toLowerCase().includes(q) ||
        npc.nameHe.includes(q) ||
        npc.town.toLowerCase().includes(q) ||
        npc.map.toLowerCase().includes(q) ||
        npc.role.toLowerCase().includes(q) ||
        (npc.relatedItems || []).some(i => i.toLowerCase().includes(q))
      );
    });

    // Weapons (Multi-Class Pre-BigBang Classic Weapons)
    const weapons = ALL_WEAPONS_DATABASE.filter(w => {
      if (classicLaunchOnly && w.eventOnly) return false;
      if (!q) return true;
      return (
        w.name.toLowerCase().includes(q) ||
        w.nameHe.includes(q) ||
        w.desc.toLowerCase().includes(q) ||
        (w.weaponType && w.weaponType.toLowerCase().includes(q)) ||
        (w.weaponTypeHe && w.weaponTypeHe.includes(q)) ||
        (w.reqStats && w.reqStats.toLowerCase().includes(q))
      );
    });

    // Secondary & Ammunition (Stars, Shields, Bullets, Arrows)
    const secondaryItems = ALL_SECONDARY_DATABASE.filter(s => {
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.nameHe.includes(q) ||
        (s.whereToGet && s.whereToGet.toLowerCase().includes(q)) ||
        (s.secondaryType && s.secondaryType.toLowerCase().includes(q)) ||
        (s.secondaryTypeHe && s.secondaryTypeHe.includes(q))
      );
    });

    const gearItems = ESSENTIAL_GEAR.filter(g => {
      if (!q) return true;
      return g.name.toLowerCase().includes(q) || g.nameHe.includes(q) || g.howToGet.toLowerCase().includes(q);
    });

    // Filter by favorites if activeFilter === 'favorites'
    const isFavMode = activeFilter === 'favorites';
    const filterFav = (list) => isFavMode ? list.filter(item => favorites.includes(item.id || item.name)) : list;

    const finalMonsters = filterFav(monsters);
    const finalItems = filterFav(items);
    const finalQuests = filterFav(quests);
    const finalNpcs = filterFav(npcs);
    const finalWeapons = filterFav(weapons);
    const finalSecondary = filterFav(secondaryItems);
    const finalGear = filterFav(gearItems);

    return {
      monsters: finalMonsters,
      items: finalItems,
      quests: finalQuests,
      npcs: finalNpcs,
      weapons: finalWeapons,
      secondaryItems: finalSecondary,
      gearItems: finalGear,
      totalCount: finalMonsters.length + finalItems.length + finalQuests.length + finalNpcs.length + finalWeapons.length + finalSecondary.length + finalGear.length
    };
  }, [searchQuery, syncVersion, classicLaunchOnly, activeFilter, favorites]);

  // Auto-expand accordion when search query produces results
  useEffect(() => {
    if (searchQuery.trim() && searchResults) {
      setOpenSections({
        monsters: (searchResults.monsters?.length || 0) > 0,
        items: (searchResults.items?.length || 0) > 0,
        gear: ((searchResults.weapons?.length || 0) + (searchResults.secondaryItems?.length || 0) + (searchResults.gearItems?.length || 0)) > 0,
        npcs: (searchResults.npcs?.length || 0) > 0,
        quests: (searchResults.quests?.length || 0) > 0,
      });
    }
  }, [searchQuery, searchResults?.totalCount]);

  // Smart initial tab selection for selected item
  useEffect(() => {
    if (selectedType === 'item' && selectedItem) {
      if (allDropsForSelectedItem && allDropsForSelectedItem.length > 0) {
        setItemDetailTab('drops');
      } else if (selectedItem.soldInShops && selectedItem.soldInShops.length > 0) {
        setItemDetailTab('shops');
      } else if (((selectedItem.requiredForQuests?.length || 0) + (selectedItem.rewardFromQuests?.length || 0)) > 0) {
        setItemDetailTab('quests');
      } else {
        setItemDetailTab('stats');
      }
    }
  }, [selectedItem?.id, selectedType, allDropsForSelectedItem?.length]);


  // Auto-select first relevant result when query changes
  const handleSearchSelect = (queryText) => {
    const q = queryText.trim().toLowerCase();
    if (!q) return;

    // Check exact or partial monster match
    const exactMonster = MONSTERS_DATABASE.find(m => m.name.toLowerCase() === q || m.name.toLowerCase().includes(q));
    if (exactMonster) {
      setSelectedType('monster');
      setSelectedItem(exactMonster);
      return;
    }

    // Check item match
    const exactItem = ITEMS_DATABASE.find(i => i.name.toLowerCase() === q || i.name.toLowerCase().includes(q));
    if (exactItem) {
      setSelectedType('item');
      setSelectedItem(exactItem);
      return;
    }

    // Check quest match (including deep content / NPC / item)
    const exactQuest = QUESTS_DATABASE.find(qst => {
      const qLower = qst.name.toLowerCase();
      const inItems = (qst.itemsNeeded || []).some(i => (typeof i === 'string' ? i : i.item).toLowerCase().includes(q));
      const inNpc = qst.npcName.toLowerCase().includes(q);
      const inSteps = (qst.walkthrough || []).some(s => s.toLowerCase().includes(q));
      return qLower === q || qLower.includes(q) || inItems || inNpc || inSteps;
    });
    if (exactQuest) {
      setSelectedType('quest');
      setSelectedItem(exactQuest);
      return;
    }

    // Check NPC match
    const exactNpc = NPCS_DATABASE.find(npc => npc.name.toLowerCase() === q || npc.name.toLowerCase().includes(q));
    if (exactNpc) {
      setSelectedType('npc');
      setSelectedItem(exactNpc);
      return;
    }

    // Check Weapon match
    const exactWeapon = ALL_WEAPONS_DATABASE.find(w => w.name.toLowerCase() === q || w.name.toLowerCase().includes(q));
    if (exactWeapon) {
      setSelectedType('weapon');
      setSelectedItem(exactWeapon);
      return;
    }

    // Check Secondary match
    const exactSecondary = ALL_SECONDARY_DATABASE.find(s => s.name.toLowerCase() === q || s.name.toLowerCase().includes(q));
    if (exactSecondary) {
      setSelectedType('secondary');
      setSelectedItem(exactSecondary);
      return;
    }

    // Check Gear match
    const exactGear = ESSENTIAL_GEAR.find(g => g.name.toLowerCase() === q || g.name.toLowerCase().includes(q));
    if (exactGear) {
      setSelectedType('essential');
      setSelectedItem(exactGear);
      return;
    }
  };

  // Autocomplete Suggestions
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();
    const list = [];

    MONSTERS_DATABASE.forEach(m => {
      if (m.name.toLowerCase().includes(q) || m.nameHe.includes(q)) {
        list.push({ type: 'monster', icon: '👾', title: m.name, sub: `${m.nameHe} • רמה ${m.level}`, item: m });
      }
    });

    ITEMS_DATABASE.forEach(i => {
      if (i.name.toLowerCase().includes(q) || i.nameHe.includes(q)) {
        list.push({ type: 'item', icon: '💎', title: i.name, sub: `${i.nameHe} • ${i.categoryName}`, item: i });
      }
    });

    QUESTS_DATABASE.forEach(qst => {
      const qLower = qst.name.toLowerCase();
      const inItems = (qst.itemsNeeded || []).some(i => (typeof i === 'string' ? i : i.item).toLowerCase().includes(q));
      const inNpc = qst.npcName.toLowerCase().includes(q);
      const inRewards = (qst.rewards || []).some(r => (typeof r === 'string' ? r : r.reward).toLowerCase().includes(q));
      const inSteps = (qst.walkthrough || []).some(s => s.toLowerCase().includes(q));
      if (qLower.includes(q) || (qst.nameHe && qst.nameHe.includes(q)) || inItems || inNpc || inRewards || inSteps) {
        const reason = getQuestMatchReason(qst, q, langMode);
        list.push({
          type: 'quest',
          icon: '📜',
          title: qst.name,
          sub: `${qst.nameHe} • רמה ${qst.reqLevel}+ ${reason ? `[${reason.label}]` : `אצל ${qst.npcName}`}`,
          item: qst
        });
      }
    });

    NPCS_DATABASE.forEach(npc => {
      if (npc.name.toLowerCase().includes(q) || npc.nameHe.includes(q)) {
        list.push({ type: 'npc', icon: '👤', title: npc.name, sub: `${npc.nameHe} • ${npc.town}`, item: npc });
      }
    });

    ALL_WEAPONS_DATABASE.forEach(w => {
      if (w.name.toLowerCase().includes(q) || w.nameHe.includes(q)) {
        list.push({
          type: 'weapon',
          icon: w.icon,
          title: w.name,
          sub: `${w.nameHe} • ${w.weaponAtt} (${w.weaponTypeHe || 'נשק'})`,
          item: w
        });
      }
    });

    ALL_SECONDARY_DATABASE.forEach(s => {
      if (s.name.toLowerCase().includes(q) || s.nameHe.includes(q)) {
        list.push({
          type: 'secondary',
          icon: s.icon,
          title: s.name,
          sub: `${s.nameHe} • ${s.att || s.stats}`,
          item: s
        });
      }
    });

    return list.slice(0, 10);
  }, [searchQuery]);

  // SMART CROSS-LINKING HELPER (With History Tracking):
  const crossNavigate = (type, targetName) => {
    const cleanDisplaySearch = (targetName || '').replace(/\s*\(.*?\)/g, '').trim();
    const cleanName = cleanDisplaySearch.toLowerCase();

    if (type === 'monster') {
      const match = MONSTERS_DATABASE.find(m => 
        m.name.toLowerCase() === cleanName ||
        cleanName.includes(m.name.toLowerCase()) || 
        m.name.toLowerCase().includes(cleanName) ||
        (m.nameHe && m.nameHe.includes(cleanDisplaySearch))
      );
      if (match) {
        selectItemWithHistory('monster', match, { filter: 'monsters' });
        setOpenSections(prev => ({ ...prev, monsters: true }));
        return;
      }
    }

    if (type === 'item') {
      const match = resolveItemData(targetName) || ITEMS_DATABASE.find(i => 
        i.name.toLowerCase() === cleanName ||
        cleanName.includes(i.name.toLowerCase()) || 
        i.name.toLowerCase().includes(cleanName) ||
        (i.nameHe && i.nameHe.includes(cleanDisplaySearch))
      );
      if (match) {
        selectItemWithHistory('item', match, { filter: 'items' });
        setOpenSections(prev => ({ ...prev, items: true }));
        return;
      }
    }

    if (type === 'npc') {
      const match = NPCS_DATABASE.find(n => 
        n.name.toLowerCase() === cleanName ||
        cleanName.includes(n.name.toLowerCase()) || 
        n.name.toLowerCase().includes(cleanName) ||
        (n.nameHe && n.nameHe.includes(cleanDisplaySearch))
      );
      if (match) {
        setSelectedType('npc');
        setSelectedItem(match);
        setActiveFilter('npcs');
        setOpenSections(prev => ({ ...prev, npcs: true }));
        return;
      }
    }

    if (type === 'quest') {
      const match = QUESTS_DATABASE.find(q => 
        q.name.toLowerCase() === cleanName ||
        cleanName.includes(q.name.toLowerCase()) || 
        q.name.toLowerCase().includes(cleanName) ||
        (q.nameHe && q.nameHe.includes(cleanDisplaySearch))
      );
      if (match) {
        setSelectedType('quest');
        setSelectedItem(match);
        setActiveFilter('quests');
        setOpenSections(prev => ({ ...prev, quests: true }));
        return;
      }
    }

    if (type === 'weapon') {
      const match = ALL_WEAPONS_DATABASE.find(w => 
        w.name.toLowerCase() === cleanName ||
        cleanName.includes(w.name.toLowerCase()) || 
        w.name.toLowerCase().includes(cleanName) ||
        (w.nameHe && w.nameHe.includes(cleanDisplaySearch))
      );
      if (match) {
        setSelectedType('weapon');
        setSelectedItem(match);
        setActiveFilter('gear');
        setOpenSections(prev => ({ ...prev, gear: true }));
        return;
      }
    }

    if (type === 'secondary') {
      const match = ALL_SECONDARY_DATABASE.find(s => 
        s.name.toLowerCase() === cleanName ||
        cleanName.includes(s.name.toLowerCase()) || 
        s.name.toLowerCase().includes(cleanName) ||
        (s.nameHe && s.nameHe.includes(cleanDisplaySearch))
      );
      if (match) {
        setSelectedType('secondary');
        setSelectedItem(match);
        setActiveFilter('gear');
        return;
      }
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Master Search Bar & Navigation Banner */}
      <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative z-40">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl liquid-glass-pill p-3 flex items-center justify-center text-3xl shadow-lg border border-white/20">
              🧭
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40">
                  {t('dbTitle')}
                </span>
                <span className="text-xs text-slate-300 font-mono font-bold">
                  {searchResults.totalCount} {t('resultsFound')}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                {t('dbSub')}
              </h2>
            </div>
          </div>

          <div className="text-xs text-slate-300 text-center md:text-left">
            <span>{t('dbInstruction')}</span>
          </div>
        </div>

        {/* Master Universal Search Input */}
        <div ref={searchContainerRef} className="relative w-full z-50">
          <div className="relative">
            <span className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-300 text-lg">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder={t('searchBoxPlaceholder')}
              className="w-full pl-12 pr-12 py-3.5 liquid-glass-input rounded-2xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 hover:text-white transition"
              >
                ✕
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown - 100% Opaque & High-Z-Index */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-slate-950/98 border-2 border-cyan-400/60 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-y-auto max-h-[380px] divide-y divide-white/10 backdrop-blur-2xl">
              <div className="px-4 py-2 bg-cyan-950/50 text-[11px] font-bold text-cyan-300 flex items-center justify-between border-b border-white/10">
                <span className="flex items-center gap-1.5">
                  <span>💡</span>
                  <span>{t('quickResults')}</span>
                </span>
                <span className="text-slate-400 font-mono text-[10px]">{suggestions.length} {t('resultsFound')}</span>
              </div>
              {suggestions.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => { selectItemWithHistory(s.type, s.item, { query: s.title }); setShowSuggestions(false); }}
                  className="p-3.5 hover:bg-cyan-500/20 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg liquid-glass-pill p-0.5 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                      {s.type === 'monster' ? (
                        <GameAssetImage
                          src={s.item.spriteUrl}
                          fallbackSrc={s.item.renderUrl}
                          alt={s.title}
                          emojiFallback={s.icon}
                          size="xs"
                        />
                      ) : s.type === 'item' ? (
                        <GameAssetImage
                          src={getItemIconUrl(s.item)}
                          fallbackSrc={getItemIconFallback(s.item)}
                          alt={s.title}
                          emojiFallback={s.icon}
                          size="xs"
                        />
                      ) : (s.type === 'weapon' || s.type === 'secondary') ? (
                        <GameAssetImage
                          src={getWeaponIconUrl(s.item)}
                          fallbackSrc={getWeaponIconFallback(s.item)}
                          alt={s.title}
                          emojiFallback={s.icon}
                          size="xs"
                        />
                      ) : (
                        <span className="text-xl group-hover:scale-110 transition-transform">{s.icon}</span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">{s.title}</div>
                      <div className="text-xs text-slate-300">{s.sub}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-cyan-300 border border-cyan-400/40">
                    {s.type === 'monster' ? 'מפלצת' :
                     s.type === 'item' ? 'פריט' :
                     s.type === 'quest' ? 'משימה' :
                     s.type === 'npc' ? 'דמות NPC' :
                     s.type === 'weapon' ? 'נשק' :
                     s.type === 'secondary' ? 'ציוד משני/תחמושת' :
                     s.type === 'claw' ? 'כפפה' : 'ציוד'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category Filter Pills (Liquid Glass Style) */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'all'
                ? 'liquid-glass-btn-primary text-white shadow-lg shadow-cyan-600/40 ring-1 ring-cyan-300/50'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>🌐</span>
            <span>{t('all')}</span>
            <span className="opacity-80 font-mono">({searchResults.totalCount})</span>
          </button>

          <button
            onClick={() => setActiveFilter('monsters')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'monsters'
                ? 'liquid-glass-accent-cyan text-cyan-200 border-cyan-400/60 shadow-lg shadow-cyan-600/30 ring-1 ring-cyan-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>👾</span>
            <span>{t('monsters')}</span>
            <span className="opacity-80 font-mono">({searchResults.monsters.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('items')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'items'
                ? 'liquid-glass-accent-amber text-amber-200 border-amber-400/60 shadow-lg shadow-amber-600/30 ring-1 ring-amber-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>💎</span>
            <span>{t('items')}</span>
            <span className="opacity-80 font-mono">({searchResults.items.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('quests')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'quests'
                ? 'liquid-glass-btn-primary text-white shadow-lg shadow-cyan-600/30 ring-1 ring-cyan-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>📜</span>
            <span>{t('quests')}</span>
            <span className="opacity-80 font-mono">({searchResults.quests.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('npcs')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'npcs'
                ? 'liquid-glass-accent-teal text-teal-200 border-teal-400/60 shadow-lg shadow-teal-600/30 ring-1 ring-teal-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>👤</span>
            <span>{t('npcs')}</span>
            <span className="opacity-80 font-mono">({searchResults.npcs.length})</span>
          </button>

          <button
            onClick={() => setActiveFilter('gear')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'gear'
                ? 'liquid-glass-accent-cyan text-cyan-200 border-cyan-400/60 shadow-lg shadow-cyan-600/30 ring-1 ring-cyan-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>{gearConfig.icon}</span>
            <span>{langMode === 'en' ? 'Weapons & Gear' : gearConfig.label}</span>
            <span className="opacity-80 font-mono">
              ({searchResults.weapons.length + searchResults.secondaryItems.length + searchResults.gearItems.length})
            </span>
          </button>

          <button
            onClick={() => setActiveFilter('favorites')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeFilter === 'favorites'
                ? 'liquid-glass-accent-amber text-amber-200 border-amber-400/60 shadow-lg shadow-amber-600/30 ring-1 ring-amber-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
            title={langMode === 'en' ? 'Show only favorited items, monsters & weapons' : 'הצג רק פריטים, מפלצות ונשקים שסומנו בכוכב'}
          >
            <span>⭐</span>
            <span>{langMode === 'en' ? 'Favorites' : 'מועדפים'}</span>
            <span className="opacity-80 font-mono">({favorites.length})</span>
          </button>

          {/* 2D Interactive Map Canvas Radar Modal Trigger */}
          <button
            onClick={() => setIsMapRadarModalOpen(true)}
            className="px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 liquid-glass-pill hover:border-amber-400 text-amber-300 hover:text-white border border-amber-400/40 shadow-md ml-auto"
            title={langMode === 'en' ? 'Open animated 2D terrain radar canvas' : 'פתח חלון סקיצת שטח 2D מונפש מלא עם מפלצות ופורטלים'}
          >
            <span className="animate-pulse">📡</span>
            <span>{langMode === 'en' ? '2D Map Radar Canvas' : 'סקיצת שטח ורדאר 2D חי'}</span>
          </button>
        </div>

      </div>

      {/* Main Dual-Pane Explorer: Master List on Left/Right & Deep Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Column 1: Filtered Categorized Results List (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5 max-h-[860px] overflow-y-auto pr-1">

          {/* Accordion Controls Bar */}
          <div className="flex items-center justify-between p-2.5 rounded-2xl liquid-glass-subtle border border-white/10 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-200">
              <span className="text-base">📂</span>
              <span>{langMode === 'en' ? 'Database Categories:' : 'קטגוריות מאגר:'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setAllSections(true)}
                className="px-2.5 py-1 rounded-xl bg-sky-950/70 hover:bg-sky-900/80 text-cyan-300 text-[11px] font-bold border border-cyan-400/30 transition shadow-sm"
              >
                {langMode === 'en' ? '▼ Expand All' : '▼ פתח הכל'}
              </button>
              <button
                onClick={() => setAllSections(false)}
                className="px-2.5 py-1 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 text-[11px] font-bold border border-white/10 transition shadow-sm"
              >
                {langMode === 'en' ? '◀ Collapse All' : '◀ סגור הכל'}
              </button>
            </div>
          </div>
          
          
          {/* Universal Empty State for Search */}
          {searchResults.totalCount === 0 && (
            <div className="liquid-glass-card p-8 rounded-3xl border border-white/10 text-center space-y-4 my-2">
              <div className="text-4xl animate-bounce">🔍</div>
              <div>
                <h4 className="font-black text-white text-base">
                  {langMode === 'en' ? 'No Matching Results Found' : 'לא נמצאו תוצאות התואמות לחיפוש'}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {langMode === 'en'
                    ? `No entries match "${searchQuery}" in the database.`
                    : `לא נמצאו רשומות התואמות ל-"${searchQuery}". בדוק שגיאות כתיב או אפס את המסננים.`}
                </p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-black text-xs shadow-lg transition cursor-pointer"
              >
                {langMode === 'en' ? 'Reset Search & Show All' : 'נקה חיפוש והצג את כל המאגר'}
              </button>
            </div>
          )}

          {/* Section: Monsters */}
          {(activeFilter === 'all' || activeFilter === 'monsters' || activeFilter === 'favorites') && searchResults.monsters.length > 0 && (
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('monsters')}
                className="w-full flex items-center justify-between text-xs font-black text-cyan-200 liquid-glass-subtle px-3.5 py-2.5 rounded-2xl border border-sky-400/30 hover:border-sky-400/70 hover:bg-sky-950/60 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base group-hover:scale-110 transition-transform">👾</span>
                  <span className="text-sm font-black">{t('monsters')}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-400/30 font-bold">
                    {searchResults.monsters.length}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 group-hover:text-cyan-300">
                  <span className="font-medium">{openSections.monsters ? (langMode === 'en' ? 'Collapse' : 'סגור') : (langMode === 'en' ? 'Expand' : 'פתח')}</span>
                  <span className={`text-xs transform transition-transform duration-200 font-bold ${openSections.monsters ? 'rotate-90' : ''}`}>◀</span>
                </div>
              </button>

              {openSections.monsters && (
                <div className="space-y-2 animate-fade-in">
                  {searchResults.monsters.slice(0, visibleMonstersCount).map(m => {
                    const isSelected = selectedType === 'monster' && selectedItem?.id === m.id;
                    const fav = isFav(m.id);
                    return (
                      <div
                        key={m.id}
                        onClick={() => selectItemWithHistory('monster', m)}
                        className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                          isSelected
                            ? 'glow-active bg-sky-950/70 border-sky-400 shadow-lg shadow-sky-500/30 ring-1 ring-sky-300/50'
                            : 'liquid-glass-card hover:border-sky-400/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl liquid-glass-pill p-1 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                            <GameAssetImage
                              src={m.animUrl || m.spriteUrl}
                              fallbackSrc={m.renderUrl || m.spriteUrl}
                              alt={m.name}
                              emojiFallback={m.icon}
                              size="md"
                            />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-sm">{m.name}</span>
                              <span className="text-[11px] font-mono text-amber-300 font-bold">Lv. {m.level}</span>
                            </div>
                            <div className="text-xs text-slate-300">{m.nameHe} • {m.town}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-cyan-200 font-mono font-bold">{m.hp} HP</span>
                          <button
                            onClick={(e) => toggleFavorite(m.id, e)}
                            className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                            title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                          >
                            {fav ? '⭐' : '☆'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                  {searchResults.monsters.length > visibleMonstersCount && (
                    <button
                      onClick={() => setVisibleMonstersCount(prev => prev + 30)}
                      className="w-full py-2.5 rounded-xl liquid-glass-pill border border-sky-400/30 hover:border-sky-400 text-xs font-bold text-sky-200 hover:text-white transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>➕</span>
                      <span>{t('loadMore')} 30 {t('monsters')} ({searchResults.monsters.length - visibleMonstersCount} {t('remaining')})</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Section: Items */}
          {(activeFilter === 'all' || activeFilter === 'items' || activeFilter === 'favorites') && searchResults.items.length > 0 && (
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('items')}
                className="w-full flex items-center justify-between text-xs font-black text-amber-300 liquid-glass-subtle px-3.5 py-2.5 rounded-2xl border border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-950/30 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base group-hover:scale-110 transition-transform">💎</span>
                  <span className="text-sm font-black">{t('items')}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30 font-bold">
                    {searchResults.items.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-amber-300 text-[11px]">
                  <span className="font-medium">{openSections.items ? (langMode === 'en' ? 'Collapse' : 'סגור') : (langMode === 'en' ? 'Expand' : 'פתח')}</span>
                  <span className={`text-xs transform transition-transform duration-200 font-bold ${openSections.items ? 'rotate-90' : ''}`}>◀</span>
                </div>
              </button>

              {openSections.items && (
                <div className="space-y-2 animate-fade-in">
                {searchResults.items.slice(0, visibleItemsCount).map(item => {
                  const isSelected = selectedType === 'item' && selectedItem?.id === item.id;
                  const fav = isFav(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => selectItemWithHistory('item', item)}
                      className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                        isSelected
                          ? 'glow-active bg-amber-900/40 border-amber-400 shadow-lg shadow-amber-500/30 ring-1 ring-amber-400/50'
                          : 'liquid-glass-card hover:border-amber-400/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl liquid-glass-pill p-1 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                          <GameAssetImage
                            src={getItemIconUrl(item)}
                            fallbackSrc={getItemIconFallback(item)}
                            alt={item.name}
                            emojiFallback={item.icon}
                            size="md"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-white text-sm">{item.name}</span>
                            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                              {item.obtainTypeHe}
                            </span>
                          </div>
                          <div className="text-xs text-slate-300">{item.nameHe}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-start shrink-0">
                          {item.marketPrice ? (
                            <div className="text-xs font-bold text-amber-300 font-mono">{item.marketPrice}</div>
                          ) : null}
                          <div className="text-[11px] text-slate-300 font-mono">{item.categoryName}</div>
                        </div>
                        <button
                          onClick={(e) => toggleFavorite(item.id, e)}
                          className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                          title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                        >
                          {fav ? '⭐' : '☆'}
                        </button>
                      </div>
                    </div>
                  );
                })}
                {searchResults.items.length > visibleItemsCount && (
                    <button
                      onClick={() => setVisibleItemsCount(prev => prev + 30)}
                      className="w-full py-2.5 rounded-xl liquid-glass-pill border border-amber-400/30 hover:border-amber-400 text-xs font-bold text-amber-200 hover:text-white transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>➕</span>
                      <span>{t('loadMore')} 30 {t('items')} ({searchResults.items.length - visibleItemsCount} {t('remaining')})</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Section: Quests (With deep content match highlights) */}
          {(activeFilter === 'all' || activeFilter === 'quests' || activeFilter === 'favorites') && searchResults.quests.length > 0 && (
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('quests')}
                className="w-full flex items-center justify-between text-xs font-black text-emerald-300 liquid-glass-subtle px-3.5 py-2.5 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/60 hover:bg-emerald-950/30 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base group-hover:scale-110 transition-transform">📜</span>
                  <span className="text-sm font-black">{t('quests')}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono border border-emerald-500/30 font-bold">
                    {searchResults.quests.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-emerald-300 text-[11px]">
                  <span className="font-medium">{openSections.quests ? (langMode === 'en' ? 'Collapse' : 'סגור') : (langMode === 'en' ? 'Expand' : 'פתח')}</span>
                  <span className={`text-xs transform transition-transform duration-200 font-bold ${openSections.quests ? 'rotate-90' : ''}`}>◀</span>
                </div>
              </button>

              {openSections.quests && (
                <div className="space-y-2 animate-fade-in">
                {searchResults.quests.slice(0, visibleQuestsCount).map(quest => {
                  const isSelected = selectedType === 'quest' && selectedItem?.id === quest.id;
                  const matchReason = getQuestMatchReason(quest, searchQuery, langMode);
                  const fav = isFav(quest.id);

                  return (
                    <div
                      key={quest.id}
                      onClick={() => selectItemWithHistory('quest', quest)}
                      className={`p-3 rounded-2xl cursor-pointer transition border flex flex-col gap-1.5 ${
                        isSelected
                          ? 'glow-active bg-teal-900/40 border-teal-400 shadow-lg shadow-teal-500/30 ring-1 ring-teal-400/50'
                          : 'liquid-glass-card hover:border-teal-400/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl liquid-glass-pill p-2 rounded-xl border border-white/15">{quest.icon}</span>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-white text-sm">{quest.name}</span>
                              <span className="text-[10px] text-teal-200 font-mono px-1.5 py-0.2 rounded-full bg-teal-500/20 border border-teal-400/30">
                                Lv. {quest.reqLevel}+
                              </span>
                            </div>
                            <div className="text-xs text-slate-300">{quest.nameHe} • אצל <strong className="text-white">{quest.npcName}</strong></div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => toggleFavorite(quest.id, e)}
                          className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                          title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                        >
                          {fav ? '⭐' : '☆'}
                        </button>
                      </div>

                      {/* Content Match Highlight Badge */}
                      {matchReason && (
                        <div className="mt-1 px-2.5 py-1 rounded-xl liquid-glass-pill border border-teal-400/30 text-[11px] text-teal-200 flex items-center gap-2">
                          <span>{matchReason.icon}</span>
                          <span className="font-medium text-slate-100">{matchReason.label}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
                {searchResults.quests.length > visibleQuestsCount && (
                    <button
                      onClick={() => setVisibleQuestsCount(prev => prev + 30)}
                      className="w-full py-2.5 rounded-xl liquid-glass-pill border border-teal-400/30 hover:border-teal-400 text-xs font-bold text-teal-200 hover:text-white transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>➕</span>
                      <span>{t('loadMore')} 30 {t('quests')} ({searchResults.quests.length - visibleQuestsCount} {t('remaining')})</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Section: NPCs */}
          {(activeFilter === 'all' || activeFilter === 'npcs' || activeFilter === 'favorites') && searchResults.npcs.length > 0 && (
            <div className="space-y-2">
              <button
                onClick={() => toggleSection('npcs')}
                className="w-full flex items-center justify-between text-xs font-black text-teal-300 liquid-glass-subtle px-3.5 py-2.5 rounded-2xl border border-teal-500/30 hover:border-teal-400/60 hover:bg-teal-950/30 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base group-hover:scale-110 transition-transform">👤</span>
                  <span className="text-sm font-black">{t('npcs')}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-mono border border-teal-500/30 font-bold">
                    {searchResults.npcs.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-teal-300 text-[11px]">
                  <span className="font-medium">{openSections.npcs ? (langMode === 'en' ? 'Collapse' : 'סגור') : (langMode === 'en' ? 'Expand' : 'פתח')}</span>
                  <span className={`text-xs transform transition-transform duration-200 font-bold ${openSections.npcs ? 'rotate-90' : ''}`}>◀</span>
                </div>
              </button>

              {openSections.npcs && (
                <div className="space-y-2 animate-fade-in">
                  {searchResults.npcs.slice(0, visibleNpcsCount).map(npc => {
                    const isSelected = selectedType === 'npc' && selectedItem?.id === npc.id;
                    const fav = isFav(npc.id);
                    return (
                      <div
                        key={npc.id}
                        onClick={() => selectItemWithHistory('npc', npc)}
                        className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                          isSelected
                            ? 'glow-active bg-teal-950/70 border-teal-400 shadow-lg shadow-teal-500/30 ring-1 ring-teal-300/50'
                            : 'liquid-glass-card hover:border-teal-400/40'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl liquid-glass-pill p-1 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                            <GameAssetImage
                              src={npc.iconUrl}
                              fallbackSrc={npc.renderUrl}
                              alt={npc.name}
                              emojiFallback={npc.icon}
                              size="md"
                            />
                          </div>
                          <div>
                            <div className="font-bold text-white text-sm">{npc.name}</div>
                            <div className="text-xs text-slate-300">{npc.nameHe} • {npc.town}</div>
                          </div>
                        </div>
                        <button
                          onClick={(e) => toggleFavorite(npc.id, e)}
                          className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                          title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                        >
                          {fav ? '⭐' : '☆'}
                        </button>
                      </div>
                    );
                  })}
                  {searchResults.npcs.length > visibleNpcsCount && (
                    <button
                      onClick={() => setVisibleNpcsCount(prev => prev + 30)}
                      className="w-full py-2.5 rounded-xl liquid-glass-pill border border-teal-400/30 hover:border-teal-400 text-xs font-bold text-teal-200 hover:text-white transition shadow-md flex items-center justify-center gap-1.5"
                    >
                      <span>➕</span>
                      <span>{t('loadMore')} 30 {t('npcs')} ({searchResults.npcs.length - visibleNpcsCount} {t('remaining')})</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Section: Weapons, Secondary & Gear (Multi-Class) */}
          {(activeFilter === 'all' || activeFilter === 'gear' || activeFilter === 'favorites') && (searchResults.weapons.length > 0 || searchResults.secondaryItems.length > 0 || searchResults.gearItems.length > 0) && (
            <div className="space-y-3">
              <button
                onClick={() => toggleSection('gear')}
                className="w-full flex items-center justify-between text-xs font-black text-cyan-200 liquid-glass-subtle px-3.5 py-2.5 rounded-2xl border border-sky-400/30 hover:border-sky-400/60 hover:bg-sky-950/60 transition cursor-pointer shadow-sm group"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base group-hover:scale-110 transition-transform">{gearConfig.icon}</span>
                  <span className="text-sm font-black">כלי נשק וציוד</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-400/30 font-bold">
                    {searchResults.weapons.length + searchResults.secondaryItems.length + searchResults.gearItems.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-cyan-300 text-[11px]">
                  <span className="font-medium">{openSections.gear ? (langMode === 'en' ? 'Collapse' : 'סגור') : (langMode === 'en' ? 'Expand' : 'פתח')}</span>
                  <span className={`text-xs transform transition-transform duration-200 font-bold ${openSections.gear ? 'rotate-90' : ''}`}>◀</span>
                </div>
              </button>

              {openSections.gear && (
                <div className="space-y-3 animate-fade-in">

              {/* Sub-Filters within Gear */}
              <div className="flex items-center gap-1.5 flex-wrap p-1 rounded-xl liquid-glass-subtle border border-white/10 text-[11px]">
                <button
                  onClick={() => setGearSubFilter('job')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    gearSubFilter === 'job' ? 'bg-sky-500/80 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  🎯 נשקי {gearConfig.jobLabel}
                </button>
                <button
                  onClick={() => setGearSubFilter('all')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    gearSubFilter === 'all' ? 'bg-sky-500/80 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  🌐 כל כלי הנשק ({searchResults.weapons.length})
                </button>
                <button
                  onClick={() => setGearSubFilter('secondary')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    gearSubFilter === 'secondary' ? 'bg-sky-500/80 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  ⭐ תחמושת / מגנים ({searchResults.secondaryItems.length})
                </button>
                <button
                  onClick={() => setGearSubFilter('essential')}
                  className={`px-2.5 py-1 rounded-lg font-bold transition ${
                    gearSubFilter === 'essential' ? 'bg-sky-500/80 text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  👑 ציוד כללי ({searchResults.gearItems.length})
                </button>

                {/* Classic World Launch Toggle */}
                <button
                  onClick={() => setClassicLaunchOnly(!classicLaunchOnly)}
                  className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 border ml-auto ${
                    classicLaunchOnly
                      ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow-sm'
                      : 'text-slate-300 hover:text-white border-white/10'
                  }`}
                  title="הצג רק נשקים שזמינים בהשקת Classic World v1.0.0 (מסנן נשקי אירוע מייפל)"
                >
                  <span>🍁</span>
                  <span>{classicLaunchOnly ? 'רק השקה v1.0.0' : 'כולל נשקי אירוע (Maple)'}</span>
                </button>
              </div>

              <div className="space-y-2">
                {/* Weapons list */}
                {(gearSubFilter === 'job' || gearSubFilter === 'all') && (
                  <>
                    {(gearSubFilter === 'job'
                      ? searchResults.weapons.filter(w => w.jobId === currentJobId)
                      : searchResults.weapons
                    ).slice(0, visibleGearCount).map(w => {
                      const isSelected = selectedType === 'weapon' && selectedItem?.id === w.id;
                      const fav = isFav(w.id);
                      return (
                        <div
                          key={w.id}
                          onClick={() => selectItemWithHistory('weapon', w)}
                          className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                            isSelected
                              ? 'glow-active bg-sky-950/70 border-sky-400 shadow-lg shadow-sky-500/30 ring-1 ring-sky-300/50'
                              : 'liquid-glass-card hover:border-sky-400/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl liquid-glass-pill p-1 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                              <GameAssetImage
                                src={getWeaponIconUrl(w)}
                                fallbackSrc={getWeaponIconFallback(w)}
                                alt={w.name}
                                emojiFallback={w.icon}
                                size="md"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5 flex-wrap">
                                <span className="font-bold text-white text-sm">{w.name}</span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-400/30">
                                  {w.weaponTypeHe}
                                </span>
                                {w.eventOnly && (
                                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/25 text-amber-300 border border-amber-400/40">
                                    {langMode === 'en' ? 'Event' : 'אירוע'}
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-300">{w.nameHe} • {w.weaponAtt}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-amber-300 font-mono font-bold">רמה {w.reqLevel}</span>
                            <button
                              onClick={(e) => toggleFavorite(w.id, e)}
                              className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                              title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                            >
                              {fav ? '⭐' : '☆'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}

                {/* Secondary / Ammo / Shields list */}
                {(gearSubFilter === 'job' || gearSubFilter === 'secondary') && (
                  <>
                    {(gearSubFilter === 'job'
                      ? searchResults.secondaryItems.filter(s => s.jobId === currentJobId)
                      : searchResults.secondaryItems
                    ).slice(0, visibleGearCount).map(s => {
                      const isSelected = selectedType === 'secondary' && selectedItem?.id === s.id;
                      const fav = isFav(s.id);
                      return (
                        <div
                          key={s.id}
                          onClick={() => selectItemWithHistory('secondary', s)}
                          className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                            isSelected
                              ? 'glow-active bg-emerald-950/70 border-emerald-400 shadow-lg shadow-emerald-500/30 ring-1 ring-emerald-300/50'
                              : 'liquid-glass-card hover:border-emerald-400/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl liquid-glass-pill p-1 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                              <GameAssetImage
                                src={getWeaponIconUrl(s)}
                                fallbackSrc={getWeaponIconFallback(s)}
                                alt={s.name}
                                emojiFallback={s.icon}
                                size="md"
                              />
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm">{s.name}</div>
                              <div className="text-xs text-slate-300">{s.nameHe} • {s.att || s.stats}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-emerald-300 font-mono font-bold">{s.att || s.stats}</span>
                            <button
                              onClick={(e) => toggleFavorite(s.id, e)}
                              className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                              title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                            >
                              {fav ? '⭐' : '☆'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}

                {/* Essential gear list */}
                {(gearSubFilter === 'essential' || (gearSubFilter === 'all' && searchResults.gearItems.length > 0)) && (
                  <>
                    {searchResults.gearItems.slice(0, visibleGearCount).map(g => {
                      const isSelected = selectedType === 'essential' && selectedItem?.id === g.id;
                      const fav = isFav(g.id);
                      return (
                        <div
                          key={g.id}
                          onClick={() => selectItemWithHistory('essential', g)}
                          className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                            isSelected
                              ? 'glow-active bg-purple-950/70 border-cyan-400 shadow-lg shadow-cyan-500/30 ring-1 ring-cyan-300/50'
                              : 'liquid-glass-card hover:border-cyan-400/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl liquid-glass-pill p-1 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                              <GameAssetImage
                                src={getWeaponIconUrl(g) || getDropIconUrl(g.name) || getItemIconUrl(g.name)}
                                fallbackSrc={getWeaponIconFallback(g) || getDropIconFallback(g.name) || getItemIconFallback(g.name)}
                                alt={g.name}
                                emojiFallback={g.icon}
                                size="md"
                              />
                            </div>
                            <div>
                              <div className="font-bold text-white text-sm">{g.name}</div>
                              <div className="text-xs text-slate-300">{g.nameHe} • {g.slot}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-amber-300 font-mono font-bold">{g.stats}</span>
                            <button
                              onClick={(e) => toggleFavorite(g.id, e)}
                              className={`p-1.5 rounded-lg transition hover:scale-110 ${fav ? 'text-amber-400 text-sm' : 'text-slate-500 hover:text-slate-300 text-xs'}`}
                              title={fav ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                            >
                              {fav ? '⭐' : '☆'}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>

              {searchResults.weapons.length + searchResults.secondaryItems.length > visibleGearCount && (
                <button
                  onClick={() => setVisibleGearCount(prev => prev + 30)}
                  className="w-full py-2.5 rounded-xl liquid-glass-pill border border-cyan-400/30 hover:border-cyan-400 text-xs font-bold text-cyan-200 hover:text-white transition shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>➕</span>
                  <span>{t('loadMore')} 30 {langMode === 'en' ? 'weapons/equipment' : 'כלי נשק/ציוד'}</span>
                </button>
              )}
                </div>
              )}
            </div>
          )}

          {activeFilter === 'favorites' && favorites.length === 0 && (
            <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800 text-slate-300 text-sm space-y-2">
              <div className="text-3xl">⭐</div>
              <div className="font-bold text-white">{langMode === 'en' ? 'No items in favorites yet' : 'עדיין לא הוספת פריטים למועדפים'}</div>
              <div className="text-xs text-slate-400">
                {langMode === 'en' ? 'Click the ☆ icon next to any monster, item, quest, NPC, or weapon to bookmark it here!' : 'לחץ על כוכב ה-☆ ליד כל מפלצת, פריט, משימה, NPC או נשק כדי לשמור אותו כאן לגישה מהירה!'}
              </div>
            </div>
          )}

          {searchResults.totalCount === 0 && activeFilter !== 'favorites' && (
            <div className="p-8 text-center bg-slate-900/60 rounded-2xl border border-slate-800 text-slate-400 text-sm">
              {langMode === 'en' ? `No results found for "${searchQuery}". Try searching with general keywords.` : `לא נמצאו תוצאות תואמות עבור "${searchQuery}". נסה חיפוש באנגלית או במילים כלליות.`}
            </div>
          )}

        </div>

        {/* Column 2: Deep Detail Inspector with SMART CROSS-LINKING (7 cols) */}
        <div className="lg:col-span-7 liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative border border-white/15 backdrop-blur-2xl min-w-0">
          
          {/* PROMINENT STICKY NAVIGATION HISTORY BAR */}
          {navHistory.length > 0 && (
            <div className="sticky top-0 z-30 mb-5 p-3 rounded-2xl bg-gradient-to-r from-slate-950/95 via-sky-950/95 to-slate-950/95 border-2 border-amber-400/70 shadow-2xl shadow-amber-500/10 backdrop-blur-xl flex items-center justify-between gap-3 flex-wrap ring-4 ring-amber-500/10 animate-fade-in">
              <button
                onClick={handleGoBack}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/30 transition transform hover:scale-[1.02] active:scale-95 border border-yellow-200 cursor-pointer"
                title={langMode === 'en' ? 'Back to previous view (Alt + Left / Mouse Back button)' : 'חזור לדף הקודם (Alt + חץ שמאלה / כפתור חזרה בעכבר)'}
              >
                <span className="text-base">↩️</span>
                <span>
                  {langMode === 'en'
                    ? `Back to ${navHistory[navHistory.length - 1]?.item?.name || 'Previous'}`
                    : `חזור אל ${navHistory[navHistory.length - 1]?.item?.nameHe || navHistory[navHistory.length - 1]?.item?.name || 'הקודם'}`}
                </span>
              </button>

              <div className="flex items-center gap-2 text-xs overflow-x-auto text-slate-200 py-1 max-w-[280px] sm:max-w-md">
                <span className="text-[10px] text-amber-300 font-mono font-bold shrink-0">נתיב:</span>
                {navHistory.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <button
                      onClick={() => handleJumpToHistory(idx)}
                      className="hover:text-amber-300 text-cyan-200 underline font-medium truncate max-w-[120px] transition text-xs"
                      title={step.item?.name}
                    >
                      {step.item?.nameHe || step.item?.name}
                    </button>
                    <span className="text-amber-400/70 font-bold">›</span>
                  </React.Fragment>
                ))}
                <span className="font-bold text-white truncate max-w-[120px] px-2 py-0.5 rounded-lg bg-white/10">
                  {selectedItem?.nameHe || selectedItem?.name}
                </span>
              </div>

              <button
                onClick={() => setNavHistory([])}
                className="text-xs text-slate-400 hover:text-rose-300 transition px-2.5 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-white/10 font-mono"
                title={langMode === 'en' ? 'Clear navigation trail' : 'נקה היסטוריית חזרה'}
              >
                ✕ {langMode === 'en' ? 'Clear' : 'איפוס'}
              </button>
            </div>
          )}
          
          {/* INSPECTOR: MONSTER */}
          {selectedType === 'monster' && selectedItem && (
            <div className="space-y-5">
              <div className="border-b border-white/10 pb-4 space-y-3.5">
                {/* Row 1: Identity & Quick Stats */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 min-w-16 sm:min-w-20 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-xl flex items-center justify-center bg-slate-900/50 backdrop-blur-md shrink-0">
                      <GameAssetImage
                        src={selectedItem.animUrl || selectedItem.spriteUrl}
                        fallbackSrc={selectedItem.renderUrl || selectedItem.spriteUrl}
                        alt={selectedItem.name}
                        emojiFallback={selectedItem.icon}
                        size="lg"
                        className="scale-125 hover:scale-150 transition duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/40 font-mono whitespace-nowrap">
                          {langMode === 'en' ? `Lv. ${selectedItem.level}` : `רמה ${selectedItem.level}`}
                        </span>
                        <span className="text-xs text-slate-300 font-medium whitespace-nowrap">{selectedItem.town}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-0.5 tracking-tight truncate">{selectedItem.name}</h3>
                      <div className="text-sm text-sky-200 font-medium">{selectedItem.nameHe}</div>
                    </div>
                  </div>

                  {/* HP & EXP Badges + Favorite */}
                  <div className="flex items-center gap-2 flex-wrap shrink-0">
                    <div className="liquid-glass-pill px-3 py-1.5 rounded-xl border border-sky-400/30 flex items-center gap-1.5 text-xs font-mono">
                      <span className="text-slate-300 font-sans">{langMode === 'en' ? 'HP:' : 'חיים:'}</span>
                      <span className="text-sky-300 font-bold text-sm">{typeof selectedItem.hp === 'number' ? selectedItem.hp.toLocaleString() : selectedItem.hp}</span>
                    </div>
                    <div className="liquid-glass-pill px-3 py-1.5 rounded-xl border border-amber-400/30 flex items-center gap-1.5 text-xs font-mono">
                      <span className="text-slate-300 font-sans">{langMode === 'en' ? 'EXP:' : 'ניסיון:'}</span>
                      <span className="text-amber-300 font-bold text-sm">+{typeof selectedItem.exp === 'number' ? selectedItem.exp.toLocaleString() : selectedItem.exp}</span>
                    </div>
                    <button
                      onClick={() => toggleFavorite(selectedItem.id)}
                      className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                        isFav(selectedItem.id)
                          ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-md'
                          : 'border-white/15 liquid-glass-pill text-slate-300 hover:text-white'
                      }`}
                      title={isFav(selectedItem.id) ? 'הסר ממועדפים' : 'שמור במועדפים'}
                    >
                      <span>{isFav(selectedItem.id) ? '⭐' : '☆'}</span>
                      <span className="hidden sm:inline">{isFav(selectedItem.id) ? (langMode === 'en' ? 'Favorited' : 'במועדפים') : (langMode === 'en' ? 'Add Fav' : 'מועדף')}</span>
                    </button>
                  </div>
                </div>

                {/* Row 2: Authoritative Live Database External Links */}
                <div className="flex items-center gap-2 flex-wrap pt-1">
                  <span className="text-[11px] text-slate-400 font-medium ml-1">{langMode === 'en' ? 'Live Linked Sources:' : 'מקורות מידע מקושרים בלייב:'}</span>
                  {selectedItem.meowDbUrl && (
                    <a
                      href={selectedItem.meowDbUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-orange-400/60 text-orange-200 text-xs font-bold transition whitespace-nowrap"
                    >
                      <span>🐾</span>
                      <span>NiaMeowDB</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                  <a
                    href="https://mapleclassic.wiki"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-emerald-400/60 text-emerald-200 text-xs font-bold transition whitespace-nowrap"
                  >
                    <span>📖</span>
                    <span>Wiki</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                  <a
                    href="https://metaroad.gg/maplestory-classic"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-cyan-400/60 text-cyan-200 text-xs font-bold transition whitespace-nowrap"
                  >
                    <span>🗺️</span>
                    <span>MetaRoad</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              
                {/* MeowDB Classic Combat Stats Grid */}
                {monsterCombatStats && (
                  <div className="space-y-2 pt-2">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-xs">
                      <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[10px] text-slate-400 font-medium">{langMode === 'en' ? 'Phys. ATT' : 'התקפה פיזית'}</div>
                        <div className="font-black text-rose-300 font-mono text-sm mt-0.5">{monsterCombatStats.watk}</div>
                      </div>
                      <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[10px] text-slate-400 font-medium">{langMode === 'en' ? 'Magic ATT' : 'התקפת קסם'}</div>
                        <div className="font-black text-purple-300 font-mono text-sm mt-0.5">{monsterCombatStats.matk}</div>
                      </div>
                      <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[10px] text-slate-400 font-medium">{langMode === 'en' ? 'Phys. DEF' : 'הגנה (W.DEF)'}</div>
                        <div className="font-black text-sky-300 font-mono text-sm mt-0.5">{monsterCombatStats.wdef}</div>
                      </div>
                      <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[10px] text-slate-400 font-medium">{langMode === 'en' ? 'Magic DEF' : 'הגנת קסם'}</div>
                        <div className="font-black text-cyan-300 font-mono text-sm mt-0.5">{monsterCombatStats.mdef}</div>
                      </div>
                      <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[10px] text-slate-400 font-medium">{langMode === 'en' ? 'Avoid (EVA)' : 'התחמקות (EVA)'}</div>
                        <div className="font-black text-emerald-300 font-mono text-sm mt-0.5">{monsterCombatStats.eva}</div>
                      </div>
                      <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                        <div className="text-[10px] text-slate-400 font-medium">{langMode === 'en' ? 'Knockback' : 'סף הדיפה (KB)'}</div>
                        <div className="font-black text-amber-300 font-mono text-sm mt-0.5">{monsterCombatStats.kb}</div>
                      </div>
                    </div>

                    {/* Elemental Affinities */}
                    <div className="flex items-center gap-1.5 flex-wrap text-[11px] p-2 rounded-xl liquid-glass-subtle border border-white/10">
                      <span className="text-slate-400 font-bold ml-1">{langMode === 'en' ? 'Attributes (MeowDB):' : 'רגישויות יסוד (MeowDB):'}</span>
                      <span className="px-2 py-0.5 rounded-lg bg-orange-500/15 border border-orange-400/30 text-orange-200">
                        🔥 אש: {monsterCombatStats.fireTrait}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-sky-500/15 border border-sky-400/30 text-sky-200">
                        ❄️ קרח: {monsterCombatStats.iceTrait}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-200">
                        🧪 רעל: {monsterCombatStats.poisonTrait}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-200">
                        ✨ קדוש: {monsterCombatStats.holyTrait}
                      </span>
                    </div>
                  </div>
                )}

              {/* MeowDB-Style Categorized Tabs for Monster Info */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-950/70 rounded-2xl border border-sky-400/25 text-xs shadow-inner">
                <button
                  onClick={() => setMonsterDetailTab('drops')}
                  className={`flex-1 py-2 px-3 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                    monsterDetailTab === 'drops'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>💎</span>
                  <span>{langMode === 'en' ? 'Drop Table' : 'טבלת דרופים'}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/30">
                    {(selectedItem.notableDrops?.length || 0) + (selectedItem.verifiedDrops?.length || 0)}
                  </span>
                </button>

                <button
                  onClick={() => setMonsterDetailTab('maps')}
                  className={`flex-1 py-2 px-3 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                    monsterDetailTab === 'maps'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>🗺️</span>
                  <span>{langMode === 'en' ? 'Maps & Radar' : 'מפות והוראות הגעה'}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/30">
                    {selectedItem.locations?.length || 1}
                  </span>
                </button>

                <button
                  onClick={() => setMonsterDetailTab('tactics')}
                  className={`flex-1 py-2 px-3 rounded-xl font-bold transition flex items-center justify-center gap-1.5 ${
                    monsterDetailTab === 'tactics'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>🛡️</span>
                  <span>{langMode === 'en' ? 'Tactics & Safe Spots' : 'טקטיקה ונקודות בטוחות'}</span>
                </button>
              </div>

              {/* TAB 1: DROPS TABLE */}
              {monsterDetailTab === 'drops' && (
                <div className="space-y-4 animate-fade-in">

                  {/* 1. Meso Drop Intel Banner */}
                  {(() => {
                    const mesoRange = getMonsterMesoDropRange(selectedItem);
                    if (!mesoRange) return null;
                    return (
                      <div className="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-600/15 p-3.5 sm:p-4 rounded-2xl border border-amber-400/40 shadow-lg space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl p-1.5 rounded-xl bg-amber-500/20 border border-amber-400/40 shadow">
                              💰
                            </span>
                            <div>
                              <div className="text-xs font-bold text-amber-200">
                                {langMode === 'en' ? 'Estimated Combat Meso Drop:' : 'שלל מסוס מוערך לחיסול:'}
                              </div>
                              <div className="text-base sm:text-lg font-black text-amber-300 font-mono tracking-wide">
                                {mesoRange.min.toLocaleString()} ~ {mesoRange.max.toLocaleString()} {langMode === 'en' ? 'Mesos' : 'מסוס'}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/40 font-bold flex items-center gap-1">
                            <span>🪙</span>
                            <span>{langMode === 'en' ? mesoRange.bagEn : mesoRange.bag}</span>
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {langMode === 'en'
                            ? 'Estimated meso pouch dropped on every mob defeat in Pre-BigBang classic rules, in addition to item drops.'
                            : 'בכל חיסול של מפלצת זו נושרת שקית מטבעות מסוס בסכום זה, בנוסף לשלל הפריטים והציוד.'}
                        </p>
                      </div>
                    );
                  })()}

                  {/* 2. SMART CROSS-LINKING: Notable Drops */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                        <span>💎</span>
                        <span>{langMode === 'en' ? 'Notable Drops (Click item to inspect):' : 'שלל ודרופים מרכזיים (לחץ על פריט למעבר אליו):'}</span>
                      </span>
                      <span className="text-[10px] text-cyan-300">🔗 קישור ישיר</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(selectedItem.notableDrops || []).map((drop, idx) => (
                        <button
                          key={idx}
                          onClick={() => crossNavigate('item', drop)}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-amber-400/60 text-xs text-slate-100 transition group cursor-pointer"
                        >
                          <div className="w-6 h-6 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center shrink-0">
                            <GameAssetImage
                              src={getDropIconUrl(drop)}
                              fallbackSrc={getDropIconFallback(drop)}
                              alt={drop}
                              emojiFallback={getDropCategoryEmoji(drop)}
                              size="xs"
                            />
                          </div>
                          <span className="font-bold group-hover:text-amber-300 transition">{drop}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. VERIFIED DROPS FROM MEOWDB & MESOWATCH */}
                  {selectedItem.verifiedDrops && selectedItem.verifiedDrops.length > 0 && (() => {
                    const drops = selectedItem.verifiedDrops;
                    const filteredDrops = drops.filter(d => {
                      if (monsterDropCategoryFilter === 'all') return true;
                      const cat = (d.category || '').toLowerCase();
                      const name = (d.name || '').toLowerCase();
                      if (monsterDropCategoryFilter === 'equips') return cat.includes('equip') || cat.includes('armor');
                      if (monsterDropCategoryFilter === 'weapons') return cat.includes('weapon');
                      if (monsterDropCategoryFilter === 'use') return cat.includes('use') || cat.includes('potion');
                      if (monsterDropCategoryFilter === 'scrolls') return cat.includes('scroll') || name.includes('scroll');
                      if (monsterDropCategoryFilter === 'etc') return cat.includes('etc') || cat.includes('quest');
                      return true;
                    });

                    return (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                            <span>📊</span>
                            <span>
                              {langMode === 'en'
                                ? `Verified Drops from MeowDB (${filteredDrops.length}/${drops.length}):`
                                : `כלל הדרופים המאומתים מ-MeowDB (${filteredDrops.length}/${drops.length}):`}
                            </span>
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {langMode === 'en' ? 'Community reports + Classic drop tables' : 'דיווחים קהילתיים + טבלאות קלאסיות'}
                          </span>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-xl border border-white/10 text-xs overflow-x-auto scrollbar-none">
                          {[
                            { id: 'all', label: langMode === 'en' ? 'All' : 'הכל', icon: '📋' },
                            { id: 'equips', label: langMode === 'en' ? 'Equips' : 'ציוד', icon: '🛡️' },
                            { id: 'weapons', label: langMode === 'en' ? 'Weapons' : 'נשקים', icon: '⚔️' },
                            { id: 'use', label: langMode === 'en' ? 'Use' : 'שימוש', icon: '🧪' },
                            { id: 'etc', label: langMode === 'en' ? 'Etc' : 'Etc', icon: '📦' },
                            { id: 'scrolls', label: langMode === 'en' ? 'Scrolls' : 'מגילות', icon: '📜' },
                          ].map(tab => (
                            <button
                              key={tab.id}
                              onClick={() => setMonsterDropCategoryFilter(tab.id)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                                monsterDropCategoryFilter === tab.id
                                  ? 'bg-cyan-600 text-white shadow-sm ring-1 ring-cyan-400'
                                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                              }`}
                            >
                              <span>{tab.icon}</span>
                              <span>{tab.label}</span>
                            </button>
                          ))}
                        </div>

                        {/* Drops Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto p-1.5 liquid-glass-subtle rounded-2xl border border-white/10 scrollbar-thin">
                          {filteredDrops.map((d, idx) => (
                            <div
                              key={idx}
                              onClick={() => crossNavigate('item', d.name)}
                              className="liquid-glass-pill hover:border-cyan-400/50 p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs cursor-pointer transition group gap-2"
                              title={langMode === 'en' ? 'Click to inspect item in database' : 'לחץ לצפייה בפרטי הפריט במאגר'}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-9 h-9 rounded-xl bg-slate-900/90 border border-white/15 p-1 flex items-center justify-center shrink-0 group-hover:border-cyan-400/60 shadow-inner">
                                  <GameAssetImage
                                    src={getDropIconUrl(d.name)}
                                    fallbackSrc={getDropIconFallback(d.name)}
                                    alt={d.name}
                                    emojiFallback={getDropCategoryEmoji(d.name, d.category)}
                                    size="sm"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className="font-bold text-white group-hover:text-cyan-300 transition truncate text-xs flex items-center gap-1.5">
                                    <span>{d.name}</span>
                                    {d.votes && (
                                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 font-mono shrink-0">
                                        👍 {d.votes}
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[10px] text-slate-300 truncate">
                                    {d.category || 'Item'}
                                  </div>
                                </div>
                              </div>

                              {d.price && (
                                <div
                                  className="text-right shrink-0"
                                  title={langMode === 'en' ? 'Estimated Free Market trading value (MesoWatch)' : 'שווי מסחר ממוצע בשוק החופשי (MesoWatch)'}
                                >
                                  <span className="text-[11px] font-bold text-amber-300 font-mono px-2 py-0.5 rounded-lg bg-amber-950/40 border border-amber-400/30 block">
                                    {formatMesoPrice(d.price, langMode === 'en')}
                                  </span>
                                  <span className="text-[9px] text-amber-400/80 block mt-0.5 font-sans">
                                    {langMode === 'en' ? 'Market Value' : 'שווי שוק'}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* TAB 2: MAPS & TRAVEL */}
              {monsterDetailTab === 'maps' && (
                <div className="space-y-3">
                  {/* Visual Travel & Arrival Guide (Unified for ALL monsters & all locations) */}
                  <VisualTravelGuide monster={selectedItem} />
                </div>
              )}

              {/* TAB 3: TACTICS & SAFE SPOTS */}
              {monsterDetailTab === 'tactics' && (
                <div className="space-y-3">
                  {selectedItem.safeSpots && (
                    <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-400/25 space-y-1.5 text-xs">
                      <div className="font-bold text-amber-200 flex items-center gap-1.5">
                        <span>🛡️</span>
                        <span>{langMode === 'en' ? 'Safe Spots & Tactics:' : 'נקודות עמידה בטוחה וטקטיקת קרב:'}</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed text-xs">
                        {selectedItem.safeSpots}
                      </p>
                    </div>
                  )}

                  {/* MSCW v1.0.0 Classic Patch Note */}
                  {selectedItem.classicPatch && (
                    <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/50 p-3 rounded-2xl flex items-center justify-between gap-3 text-xs shadow-md">
                      <div className="flex items-center gap-2 text-amber-200 font-bold">
                        <span className="text-lg">⚡</span>
                        <span>{selectedItem.classicPatch}</span>
                      </div>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/40 font-mono font-bold shrink-0">
                        MSCW v1.0.0 Patch
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* INSPECTOR: ITEM */}
          {selectedType === 'item' && selectedItem && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 min-w-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-xl flex items-center justify-center bg-slate-900/50 shrink-0">
                    <GameAssetImage
                      src={getItemIconUrl(selectedItem)}
                      fallbackSrc={getItemIconFallback(selectedItem)}
                      alt={selectedItem.name}
                      emojiFallback={selectedItem.icon}
                      size="lg"
                      className="scale-125 hover:scale-150 transition duration-300"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                        {selectedItem.obtainTypeHe}
                      </span>
                      <span className="text-xs text-slate-300">{selectedItem.categoryName}</span>
                      {selectedItem.reqLevel !== undefined && selectedItem.reqLevel !== null && (
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 font-mono">
                          {langMode === 'en' ? `Req Lv. ${selectedItem.reqLevel}` : `רמה נדרשת: ${selectedItem.reqLevel}`}
                        </span>
                      )}
                      {(selectedItem.reqJobHe || selectedItem.reqJob) && (
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-200 border border-purple-400/40">
                          {selectedItem.reqJobHe || selectedItem.reqJob}
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight">{selectedItem.name}</h3>
                    <div className="text-sm text-amber-200 font-medium">{selectedItem.nameHe}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => toggleFavorite(selectedItem.id)}
                    className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                      isFav(selectedItem.id)
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-md'
                        : 'border-white/15 liquid-glass-pill text-slate-300 hover:text-white'
                    }`}
                    title={isFav(selectedItem.id) ? 'הסר ממועדפים' : 'שמור במועדפים'}
                  >
                    <span>{isFav(selectedItem.id) ? '⭐' : '☆'}</span>
                    <span className="hidden sm:inline">{isFav(selectedItem.id) ? 'במועדפים' : 'מועדף'}</span>
                  </button>
                  {selectedItem.meowDbUrl && (
                    <a
                      href={selectedItem.meowDbUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-orange-400/60 text-orange-200 text-xs font-bold transition"
                    >
                      <span>🐱</span>
                      <span>MeowDB</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                  {selectedItem.mesoWatchUrl && (
                    <a
                      href={selectedItem.mesoWatchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-yellow-400/60 text-yellow-200 text-xs font-bold transition"
                    >
                      <span>🪙</span>
                      <span>MesoWatch</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                  {selectedItem.stats && (
                    <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/15 text-xs shadow-inner">
                      <span className="text-slate-300 block font-sans">{langMode === 'en' ? 'Stats & Effect:' : 'השפעה וסטטים:'}</span>
                      <span className="text-emerald-300 font-bold">{selectedItem.stats}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* EQUIPMENT STATS & ATTRIBUTES GRID (MapleStory Pre-BigBang Classic Spec Card) */}
              {(selectedItem.category === 'equips' || selectedItem.category === 'armors' || selectedItem.category === 'weapons' || selectedItem.category === 'claws' || selectedItem.reqLevel || selectedItem.pdd || selectedItem.slots !== undefined || selectedItem.reqDex || selectedItem.reqLuk || selectedItem.weaponAtt) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 p-3.5 rounded-2xl bg-slate-950/60 border border-amber-400/30 shadow-inner">
                  {/* Req Level */}
                  <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-sans">
                      {langMode === 'en' ? 'Required Level' : 'רמה נדרשת'}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-amber-300 font-mono">
                      {selectedItem.reqLevel !== undefined && selectedItem.reqLevel !== null ? `Lv. ${selectedItem.reqLevel}` : (langMode === 'en' ? 'No Req (Lv. 0)' : 'ללא דרישה')}
                    </span>
                  </div>

                  {/* Required Stats (DEX / LUK / STR / INT) */}
                  <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-sans">
                      {langMode === 'en' ? 'Stat Requirements' : 'דרישות סטטים'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-300 font-mono">
                      {(selectedItem.reqDex || selectedItem.reqLuk || selectedItem.reqStr || selectedItem.reqInt)
                        ? [
                            selectedItem.reqStr ? `STR ${selectedItem.reqStr}` : null,
                            selectedItem.reqDex ? `DEX ${selectedItem.reqDex}` : null,
                            selectedItem.reqInt ? `INT ${selectedItem.reqInt}` : null,
                            selectedItem.reqLuk ? `LUK ${selectedItem.reqLuk}` : null,
                          ].filter(Boolean).join(' • ')
                        : (langMode === 'en' ? 'None (0 Req)' : 'ללא דרישות (0 Req)')}
                    </span>
                  </div>

                  {/* Physical / Magical Defense or Attack */}
                  <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-sans">
                      {selectedItem.weaponAtt ? (langMode === 'en' ? 'Weapon Attack' : 'התקפה פיזית') : (langMode === 'en' ? 'Weapon Defense' : 'הגנה פיזית (W.DEF)')}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-cyan-300 font-mono">
                      {selectedItem.weaponAtt
                        ? `+${selectedItem.weaponAtt} W.ATT`
                        : (selectedItem.pdd ? `+${selectedItem.pdd} W.DEF` : (selectedItem.stats?.match(/\+?(\d+)\s*W\.DEF/i)?.[0] || '—'))}
                      {selectedItem.mdd ? ` • +${selectedItem.mdd} M.DEF` : ''}
                    </span>
                  </div>

                  {/* Stat Bonuses (HP, MP, STR, DEX, INT, LUK, Speed, Jump) */}
                  <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block font-sans">
                      {langMode === 'en' ? 'Stat Bonuses' : 'תוספות בונוס'}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-sky-200 font-mono">
                      {[
                        selectedItem.str ? `+${selectedItem.str} STR` : null,
                        selectedItem.dex ? `+${selectedItem.dex} DEX` : null,
                        selectedItem.int ? `+${selectedItem.int} INT` : null,
                        selectedItem.luk ? `+${selectedItem.luk} LUK` : null,
                        selectedItem.hp ? `+${selectedItem.hp} MaxHP` : null,
                        selectedItem.mp ? `+${selectedItem.mp} MaxMP` : null,
                        selectedItem.speed ? `+${selectedItem.speed} Speed` : null,
                        selectedItem.jump ? `+${selectedItem.jump} Jump` : null,
                      ].filter(Boolean).join(', ') || (selectedItem.stats && !selectedItem.stats.includes('לשימוש') ? selectedItem.stats : 'בסיסי')}
                    </span>
                  </div>

                  {/* Upgrade Slots */}
                  <div className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 text-center col-span-2 sm:col-span-4 lg:col-span-1">
                    <span className="text-[10px] text-slate-400 block font-sans">
                      {langMode === 'en' ? 'Scroll Slots' : 'סלוטים לשדרוג'}
                    </span>
                    <span className="text-xs sm:text-sm font-black text-yellow-300 font-mono">
                      {selectedItem.slots !== undefined && selectedItem.slots !== null ? `${selectedItem.slots} סלוטים` : (selectedItem.category === 'equips' || selectedItem.category === 'armors' ? '7 סלוטים' : '—')}
                    </span>
                  </div>
                </div>
              )}

              {/* ACQUISITION SUMMARY BADGES */}
              <div className="flex items-center gap-2 flex-wrap py-2 border-b border-white/10">
                <span className="text-[11px] font-bold text-slate-400">
                  {langMode === 'en' ? 'Acquisition Summary:' : 'תקציר דרכי השגה:'}
                </span>

                {selectedItem.soldInShops && selectedItem.soldInShops.length > 0 && (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 font-bold flex items-center gap-1.5 shadow-sm">
                    <span>🏪</span>
                    <span>{langMode === 'en' ? `NPC Shop (${selectedItem.soldInShops.length})` : `נמכר בחנות (${selectedItem.soldInShops.length})`}</span>
                  </span>
                )}

                {allDropsForSelectedItem.length > 0 ? (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-sky-500/20 text-sky-200 border border-sky-400/40 font-bold flex items-center gap-1.5 shadow-sm">
                    <span>👾</span>
                    <span>{langMode === 'en' ? `Monster Drops (${allDropsForSelectedItem.length})` : `שלל מפלצות (${allDropsForSelectedItem.length})`}</span>
                  </span>
                ) : (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-slate-800/80 text-amber-200/90 border border-amber-400/20 font-medium flex items-center gap-1.5">
                    <span>🚫</span>
                    <span>{langMode === 'en' ? 'No Monster Drops' : 'לא נופל ממפלצות'}</span>
                  </span>
                )}

                {selectedItem.requiredForQuests && selectedItem.requiredForQuests.length > 0 && (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-teal-500/20 text-teal-200 border border-teal-400/40 font-bold flex items-center gap-1.5 shadow-sm">
                    <span>📜</span>
                    <span>{langMode === 'en' ? `Quest Req (${selectedItem.requiredForQuests.length})` : `דרוש למשימה (${selectedItem.requiredForQuests.length})`}</span>
                  </span>
                )}

                {selectedItem.rewardFromQuests && selectedItem.rewardFromQuests.length > 0 && (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 font-bold flex items-center gap-1.5 shadow-sm">
                    <span>🎁</span>
                    <span>{langMode === 'en' ? `Quest Reward (${selectedItem.rewardFromQuests.length})` : `פרס ממשימה (${selectedItem.rewardFromQuests.length})`}</span>
                  </span>
                )}

                {selectedItem.marketPrice && (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-amber-500/20 text-amber-200 border border-amber-400/40 font-bold flex items-center gap-1.5 shadow-sm">
                    <span>🪙</span>
                    <span>{langMode === 'en' ? 'Free Market' : 'שוק חופשי (FM)'}</span>
                  </span>
                )}

                {/* MeowDB Safe to Sell? Protocol */}
                {selectedItem.requiredForQuests && selectedItem.requiredForQuests.length > 0 ? (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-rose-500/20 text-rose-200 border border-rose-400/50 font-bold flex items-center gap-1.5 shadow-sm" title={langMode === 'en' ? 'Needed for quests - keep in inventory!' : 'נדרש עבור משימות במשחק - שמור ואל תמכור לחנות!'}>
                    <span>⚠️</span>
                    <span>{langMode === 'en' ? 'MeowDB: Do NOT Sell (Quest Item)' : 'MeowDB: אל תמכור! (נדרש למשימות)'}</span>
                  </span>
                ) : (
                  <span className="text-xs px-2.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 font-bold flex items-center gap-1.5 shadow-sm" title={langMode === 'en' ? 'Safe to sell to NPC merchant for mesos' : 'בטוח למכור לסוחר NPC עבור מסוס'}>
                    <span>✅</span>
                    <span>{langMode === 'en' ? 'MeowDB: Safe to Sell' : 'MeowDB: בטוח למכירה ל-NPC'}</span>
                  </span>
                )}
              </div>

              {/* MeowDB-Style Categorized Tabs for Item Info */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-950/70 rounded-2xl border border-sky-400/25 text-xs shadow-inner flex-wrap sm:flex-nowrap">
                <button
                  onClick={() => setItemDetailTab('drops')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    itemDetailTab === 'drops'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>👾</span>
                  <span>{langMode === 'en' ? 'Dropped By' : 'שלל מפלצות'}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/30">
                    {allDropsForSelectedItem.length}
                  </span>
                </button>

                <button
                  onClick={() => setItemDetailTab('shops')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    itemDetailTab === 'shops'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>🏪</span>
                  <span>{langMode === 'en' ? 'NPC Shops' : 'חנויות וסוחרים'}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/30">
                    {selectedItem.soldInShops?.length || 0}
                  </span>
                </button>

                <button
                  onClick={() => setItemDetailTab('quests')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    itemDetailTab === 'quests'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>📜</span>
                  <span>{langMode === 'en' ? 'Quests' : 'משימות'}</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-black/30">
                    {(selectedItem.requiredForQuests?.length || 0) + (selectedItem.rewardFromQuests?.length || 0)}
                  </span>
                </button>

                <button
                  onClick={() => setItemDetailTab('stats')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold transition flex items-center justify-center gap-1.5 whitespace-nowrap ${
                    itemDetailTab === 'stats'
                      ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>📊</span>
                  <span>{langMode === 'en' ? 'Details & Market' : 'מידע ושוק'}</span>
                </button>
              </div>

              {/* TAB 1: DROPPED BY MONSTERS */}
              {itemDetailTab === 'drops' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                      <span>👾</span>
                      <span>
                        {allDropsForSelectedItem.length > 0
                          ? (langMode === 'en' ? `Dropped by Monsters (${allDropsForSelectedItem.length} verified):` : `מפלצות שמפילות את הפריט (${allDropsForSelectedItem.length} מאומתות):`)
                          : (langMode === 'en' ? 'Monster Drops Availability:' : 'בדיקת שלל מפלצות (Drops):')}
                      </span>
                    </span>
                    {allDropsForSelectedItem.length > 0 && (
                      <span className="text-[10px] text-cyan-300">🔗 {langMode === 'en' ? 'Click monster for route & radar' : 'לחץ למעבר ישיר ופתיחת מפה'}</span>
                    )}
                  </div>

                  {allDropsForSelectedItem.length > 0 ? (
                    <div className="space-y-2 max-h-[480px] overflow-y-auto p-1 scrollbar-thin">
                      {allDropsForSelectedItem.map((mob, idx) => (
                        <div
                          key={idx}
                          className="liquid-glass-subtle p-3.5 rounded-2xl border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs hover:border-sky-400/50 transition gap-3"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-base">{mob.icon}</span>
                              <span className="font-bold text-white text-sm">{mob.monsterName}</span>
                              <span className="text-sky-300 font-medium">({mob.monsterNameHe})</span>
                              <span className="text-[11px] text-amber-300 font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30">
                                Lv. {mob.level}
                              </span>
                              {mob.isBoss && (
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40 font-bold">
                                  BOSS
                                </span>
                              )}
                            </div>
                            
                            <div className="text-slate-300 text-xs mt-1 flex items-center gap-2 flex-wrap">
                              <span className="text-cyan-300 font-medium">📍 {mob.town}</span>
                              {mob.locations && mob.locations.length > 0 && (
                                <span className="text-slate-400">• מפות: {mob.locations.slice(0, 2).join(', ')}</span>
                              )}
                              <span className="text-emerald-300 font-mono text-[11px]">[{mob.dropRate}]</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            {mob.mobObj && (
                              <button
                                onClick={() => {
                                  setSelectedItem(mob.mobObj);
                                  setSelectedType('monster');
                                  setIsMapRadarModalOpen(true);
                                }}
                                className="px-3 py-1.5 rounded-xl liquid-glass-pill hover:bg-white/15 text-amber-300 text-[11px] font-bold border border-amber-400/30 transition shadow-sm"
                                title={langMode === 'en' ? 'Open 2D Radar Map' : 'פתח סקירת שטח ומפה 2D'}
                              >
                                🗺️ {langMode === 'en' ? 'Map Radar' : 'מפה'}
                              </button>
                            )}
                            <button
                              onClick={() => crossNavigate('monster', mob.monsterName)}
                              className="px-3.5 py-1.5 rounded-xl liquid-glass-pill bg-sky-900/40 hover:bg-sky-800/60 text-sky-200 text-[11px] font-bold border border-sky-400/50 transition active:scale-95 shadow"
                            >
                              {langMode === 'en' ? 'View Monster 🧭' : 'הצג מפלצת ודרכי הגעה 🧭'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="liquid-glass-card p-4 rounded-2xl border border-amber-400/30 bg-amber-950/20 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                        <span className="text-base">🚫</span>
                        <span>{langMode === 'en' ? 'Does Not Drop From Monsters' : 'אינו נופל ממפלצות כלל במשחק'}</span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {langMode === 'en'
                          ? 'This item cannot be dropped by monsters in MapleStory Classic. You can acquire it through NPC shops, quest rewards, or player trades as shown in the tabs above.'
                          : 'פריט זה אינו שלל של מפלצות בגרסה הקלאסית. ניתן להשיגו דרך חנויות NPC, משימות או מסחר כפי שמפורט בלשוניות למעלה.'}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: SOLD IN NPC SHOPS */}
              {itemDetailTab === 'shops' && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <span>🏪</span>
                    <span>{langMode === 'en' ? 'Sold in NPC Shops (Click NPC for route & map):' : 'נמכר בחנויות (לחץ על ה-NPC לפרטי הגעה ומפה):'}</span>
                  </span>

                  {selectedItem.soldInShops && selectedItem.soldInShops.length > 0 ? (
                    <div className="space-y-2 max-h-[480px] overflow-y-auto p-1 scrollbar-thin">
                      {selectedItem.soldInShops.map((shop, idx) => {
                        const rawNpcName = (shop.npc || shop.shopName || '').replace(/\s*\(.*?\)/g, '').trim();
                        const matchedNpc = NPCS_DATABASE.find(n => 
                          n.name.toLowerCase() === rawNpcName.toLowerCase() ||
                          n.name.toLowerCase().includes(rawNpcName.toLowerCase()) ||
                          rawNpcName.toLowerCase().includes(n.name.toLowerCase())
                        );
                        const displayShopName = matchedNpc 
                          ? (langMode === 'en' ? `${matchedNpc.name} (${matchedNpc.town})` : `${matchedNpc.nameHe || matchedNpc.name}`)
                          : shop.shopName;
                        const displayTown = matchedNpc ? matchedNpc.town : (shop.town || 'Victoria Island');
                        const displayMap = matchedNpc?.map;
                        const targetNpcName = matchedNpc ? matchedNpc.name : rawNpcName;

                        return (
                          <div key={idx} className="liquid-glass-subtle p-3.5 rounded-2xl border border-white/10 flex items-center justify-between text-xs gap-3">
                            <div className="min-w-0">
                              <div className="font-bold text-white flex items-center gap-2 flex-wrap">
                                <span>{displayShopName}</span>
                                <span className="text-amber-300 font-mono font-bold">({shop.price || 'מחיר NPC'})</span>
                                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 font-medium">
                                  📍 {displayTown}{displayMap ? ` • ${displayMap}` : ''}
                                </span>
                              </div>
                              <div className="text-slate-300 text-xs mt-1 leading-relaxed">
                                {matchedNpc?.map 
                                  ? (langMode === 'en' ? `Find ${matchedNpc.name} in ${matchedNpc.map} (${matchedNpc.town}).` : `חפש את ${matchedNpc.name} ב-${matchedNpc.map} (${matchedNpc.town}).`)
                                  : shop.directions}
                              </div>
                            </div>
                            <button
                              onClick={() => crossNavigate('npc', targetNpcName)}
                              className="shrink-0 px-3.5 py-2 rounded-xl liquid-glass-pill hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-400/40 transition active:scale-95 shadow"
                            >
                              {langMode === 'en' ? 'View NPC 👤' : 'הצג NPC 👤'}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-300">
                      {langMode === 'en' ? 'This item is not sold in NPC shops.' : 'פריט זה אינו נמכר בחנויות של סוחרי NPC במשחק.'}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: QUESTS */}
              {itemDetailTab === 'quests' && (
                <div className="space-y-4">
                  {/* Required For Quests */}
                  {selectedItem.requiredForQuests && selectedItem.requiredForQuests.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                        <span>📜</span>
                        <span>{langMode === 'en' ? `Required for Quests (${selectedItem.requiredForQuests.length}):` : `נדרש עבור משימות במשחק (${selectedItem.requiredForQuests.length}):`}</span>
                      </span>
                      <div className="space-y-2">
                        {selectedItem.requiredForQuests.map((q, idx) => (
                          <div key={idx} className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs hover:border-teal-400/50 transition">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white">{q.questName}</span>
                                <span className="text-teal-300 font-mono text-[11px] font-bold">{langMode === 'en' ? `Needs ${q.count}x` : `צריך ${q.count}x`}</span>
                                <span className="text-amber-300 font-mono text-[10px]">רמה {q.reqLevel}+</span>
                              </div>
                              <div className="text-slate-300 text-[11px] mt-0.5">נותן המשימה: {q.npcName} {q.reward ? `• פרס: ${q.reward}` : ''}</div>
                            </div>
                            <button
                              onClick={() => crossNavigate('quest', q.questName)}
                              className="shrink-0 px-3 py-1.5 rounded-xl liquid-glass-pill bg-teal-900/40 hover:bg-teal-800/60 text-teal-200 text-[11px] font-bold border border-teal-400/40 transition"
                            >
                              {langMode === 'en' ? 'View Quest 📜' : 'הצג משימה 📜'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Reward From Quests */}
                  {selectedItem.rewardFromQuests && selectedItem.rewardFromQuests.length > 0 && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                        <span>🎁</span>
                        <span>{langMode === 'en' ? `Reward from Quests (${selectedItem.rewardFromQuests.length}):` : `מתקבל כפרס ממשימות (${selectedItem.rewardFromQuests.length}):`}</span>
                      </span>
                      <div className="space-y-2">
                        {selectedItem.rewardFromQuests.map((q, idx) => (
                          <div key={idx} className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs hover:border-emerald-400/50 transition">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-white">{q.questName}</span>
                                <span className="text-emerald-300 font-mono text-[11px] font-bold">{langMode === 'en' ? `Chance: ${q.chance}` : `סיכוי: ${q.chance}`}</span>
                                <span className="text-amber-300 font-mono text-[10px]">רמה {q.reqLevel}+</span>
                              </div>
                              <div className="text-slate-300 text-[11px] mt-0.5">נותן המשימה: {q.npcName}</div>
                            </div>
                            <button
                              onClick={() => crossNavigate('quest', q.questName)}
                              className="shrink-0 px-3 py-1.5 rounded-xl liquid-glass-pill bg-emerald-900/40 hover:bg-emerald-800/60 text-emerald-200 text-[11px] font-bold border border-emerald-400/40 transition"
                            >
                              הצג משימה 📜
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {(!selectedItem.requiredForQuests || selectedItem.requiredForQuests.length === 0) &&
                   (!selectedItem.rewardFromQuests || selectedItem.rewardFromQuests.length === 0) && (
                    <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-300">
                      {langMode === 'en' ? 'This item is not currently tied to any active quests.' : 'פריט זה אינו דרוש ואינו מתקבל כפרס ממשימות מוכרות במשחק.'}
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: DETAILS & MARKET ANALYTICS */}
              {itemDetailTab === 'stats' && (
                <div className="space-y-4">
                  {/* Description */}
                  <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                    {selectedItem.desc}
                  </div>

                  {/* Thief Tip */}
                  {selectedItem.thiefTip && (
                    <div className="liquid-glass-accent-amber p-4 rounded-2xl border border-amber-400/40 space-y-1">
                      <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                        <span>💡</span>
                        <span>{langMode === 'en' ? 'Class Relevance & Tip:' : 'רלוונטיות למקצוע וטיפ שימוש:'}</span>
                      </div>
                      <p className="text-xs text-amber-100 leading-relaxed">
                        {selectedItem.thiefTip}
                      </p>
                    </div>
                  )}

                  {/* MESOWATCH LIVE MARKET ANALYTICS */}
                  {selectedItem.marketPrice && (
                    <div className="liquid-glass-accent-amber p-4 rounded-2xl border border-amber-400/40 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                          <span className="text-base">🪙</span>
                          <span>{langMode === 'en' ? 'Free Market Analytics:' : 'מדד מחירי שוק חופשי (FM Analytics):'}</span>
                        </div>
                        {selectedItem.marketTrend !== undefined && selectedItem.marketTrend !== 0 && (
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-bold ${
                            selectedItem.marketTrend > 0
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          }`}>
                            {langMode === 'en' ? '24h Trend:' : 'מגמת 24 שעות:'} {selectedItem.marketTrend > 0 ? '+' : ''}{(selectedItem.marketTrend * 100).toFixed(1)}% {selectedItem.marketTrend > 0 ? '📈' : '📉'}
                          </span>
                        )}
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                          <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'FM Price' : 'מחיר ממוצע'}</div>
                          <div className="text-sm font-black text-amber-300 font-mono mt-0.5">{selectedItem.marketPrice}</div>
                        </div>
                        <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                          <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Range (Low - High)' : 'טווח עסקאות'}</div>
                          <div className="text-xs font-bold text-slate-100 font-mono mt-1">
                            {selectedItem.marketLow ? selectedItem.marketLow.toLocaleString() : '—'} - {selectedItem.marketHigh ? selectedItem.marketHigh.toLocaleString() : '—'}
                          </div>
                        </div>
                        <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                          <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Sold Volume' : 'יחידות שנמכרו'}</div>
                          <div className="text-xs font-bold text-cyan-300 font-mono mt-1">
                            {selectedItem.marketSold ? `${selectedItem.marketSold.toLocaleString()} יח'` : '—'}
                          </div>
                        </div>
                        <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                          <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Active Shops' : 'חנויות פעילות'}</div>
                          <div className="text-xs font-bold text-sky-300 font-mono mt-1">
                            {selectedItem.marketShops ? `${selectedItem.marketShops} חנויות` : 'סחר חופשי'}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* INSPECTOR: QUEST */}
          {selectedType === 'quest' && selectedItem && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-4xl liquid-glass-pill p-3 rounded-2xl border border-white/20 shadow-lg shrink-0">
                    {selectedItem.icon}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40 font-mono whitespace-nowrap">
                        {langMode === 'en' ? `Lv. ${selectedItem.reqLevel}+` : `רמה ${selectedItem.reqLevel}+`}
                      </span>
                      <span className="text-xs text-slate-300 whitespace-nowrap">{selectedItem.categoryName}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight truncate">{selectedItem.name}</h3>
                    <div className="text-sm text-teal-200 font-medium">{selectedItem.nameHe}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <button
                    onClick={() => toggleFavorite(selectedItem.id)}
                    className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                      isFav(selectedItem.id)
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-md'
                        : 'border-white/15 liquid-glass-pill text-slate-300 hover:text-white'
                    }`}
                    title={isFav(selectedItem.id) ? 'הסר ממועדפים' : 'שמור במועדפים'}
                  >
                    <span>{isFav(selectedItem.id) ? '⭐' : '☆'}</span>
                    <span className="hidden sm:inline">{isFav(selectedItem.id) ? 'במועדפים' : 'מועדף'}</span>
                  </button>
                  {selectedItem.meowDbUrl && (
                    <a
                      href={selectedItem.meowDbUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl liquid-glass-pill hover:border-orange-400/60 text-orange-200 text-xs font-bold transition"
                    >
                      <span>🐱</span>
                      <span>MeowDB Quest</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  )}
                  <button
                    onClick={() => crossNavigate('npc', selectedItem.npcName)}
                    className="liquid-glass-pill hover:border-teal-400/60 px-4 py-2 rounded-2xl border border-white/15 text-start transition group"
                  >
                    <span className="text-[10px] text-slate-300 block">{langMode === 'en' ? 'Quest Giver (NPC):' : 'נותן המשימה (NPC):'}</span>
                    <span className="text-xs font-bold text-teal-300 group-hover:text-teal-200">{selectedItem.npcName} 👤</span>
                  </button>
                </div>
              </div>

              {/* Prerequisites */}
              {selectedItem.prerequisites && (
                <div className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 text-xs">
                  <span className="text-slate-300 font-bold ml-1">{langMode === 'en' ? 'Prerequisites:' : 'תנאי פתיחה:'}</span>
                  <span className="text-amber-300 font-medium">{selectedItem.prerequisites}</span>
                </div>
              )}

              {/* SMART CROSS-LINKING: Items Needed */}
              {selectedItem.itemsNeeded && selectedItem.itemsNeeded.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                      <span className="text-base">📦</span>
                      <span>{langMode === 'en' ? 'Required Items & Collection Guide:' : 'חפצים דרושים ומדריך איסוף (לחץ למידע מלא):'}</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {selectedItem.itemsNeeded.length} {langMode === 'en' ? 'items' : 'חפצים לאיסוף'}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {selectedItem.itemsNeeded.map((it, idx) => {
                      const resolvedItem = resolveItemData(it.item);
                      const hasDrops = resolvedItem?.dropsFrom && resolvedItem.dropsFrom.length > 0;
                      const hasShops = resolvedItem?.soldInShops && resolvedItem.soldInShops.length > 0;

                      return (
                        <div 
                          key={idx} 
                          className="liquid-glass-card p-3.5 sm:p-4 rounded-2xl border border-white/15 hover:border-amber-400/40 transition bg-slate-950/70 shadow-lg space-y-2.5"
                        >
                          <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                            <div className="flex items-center gap-3 min-w-0">
                              {/* Item Icon */}
                              <div className="w-12 h-12 rounded-2xl liquid-glass-pill p-1.5 flex items-center justify-center border border-white/20 shadow-md shrink-0 bg-slate-900/80">
                                {resolvedItem?.iconUrl ? (
                                  <img 
                                    src={resolvedItem.iconUrl} 
                                    alt={it.item} 
                                    className="w-8 h-8 object-contain pixelated" 
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                  />
                                ) : (
                                  <span className="text-2xl">{resolvedItem?.icon || '📦'}</span>
                                )}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="px-2 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/30 font-black font-mono text-xs">
                                    {it.count}x
                                  </span>
                                  <h4 className="text-sm sm:text-base font-black text-white truncate">
                                    {resolvedItem?.nameHe || it.item}
                                  </h4>
                                  {resolvedItem?.name && resolvedItem.name !== it.item && (
                                    <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                                      ({resolvedItem.name})
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                                  {it.source || resolvedItem?.obtainTypeHe || resolvedItem?.desc}
                                </p>
                              </div>
                            </div>

                            {/* Direct Action Link to Item */}
                            <button
                              onClick={() => crossNavigate('item', it.item)}
                              className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 transition transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5 shrink-0 border border-yellow-200 cursor-pointer"
                              title={langMode === 'en' ? 'Inspect full drop sources, shops & prices' : 'בדוק מאיפה ואיך לאסוף, מפלצות וחנויות'}
                            >
                              <span>🔍</span>
                              <span>{langMode === 'en' ? 'Where & How to Get' : 'איפה ואיך לאסוף?'}</span>
                              <span className="text-[10px]">↗</span>
                            </button>
                          </div>

                          {/* Quick Drop Monster Pills if available */}
                          {hasDrops && (
                            <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 flex-wrap text-xs">
                              <span className="text-[11px] text-slate-400 font-bold">
                                {langMode === 'en' ? 'Drops from mobs:' : 'מפלצות שמפילות (לחץ למפה):'}
                              </span>
                              {resolvedItem.dropsFrom.slice(0, 4).map((m, mIdx) => (
                                <button
                                  key={mIdx}
                                  onClick={() => crossNavigate('monster', m.monsterName)}
                                  className="px-2.5 py-1 rounded-lg liquid-glass-pill hover:bg-sky-500/20 hover:border-sky-400/50 text-sky-200 text-[11px] font-bold border border-white/10 transition flex items-center gap-1 cursor-pointer"
                                  title={`הצג מפה ופרטי ציד עבור ${m.monsterName}`}
                                >
                                  <span>👾</span>
                                  <span>{m.monsterNameHe || m.monsterName}</span>
                                  <span className="text-[10px] text-slate-400 font-mono">({m.dropRate || `רמה ${m.level}`})</span>
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Quick Shop info if available */}
                          {hasShops && (
                            <div className="pt-2 border-t border-white/10 flex items-center gap-1.5 flex-wrap text-xs">
                              <span className="text-[11px] text-emerald-400 font-bold">
                                {langMode === 'en' ? 'Sold by NPC:' : 'נמכר אצל NPC:'}
                              </span>
                              {resolvedItem.soldInShops.map((s, sIdx) => (
                                <button
                                  key={sIdx}
                                  onClick={() => crossNavigate('npc', s.npc || s.shopName)}
                                  className="px-2.5 py-1 rounded-lg liquid-glass-pill hover:bg-emerald-500/20 hover:border-emerald-400/50 text-emerald-200 text-[11px] font-bold border border-white/10 transition flex items-center gap-1 cursor-pointer"
                                >
                                  <span>🏪</span>
                                  <span>{s.shopName || s.npc}</span>
                                  <span className="text-[10px] text-slate-400 font-mono">({s.town})</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SMART CROSS-LINKING: Monsters to Hunt */}
              {selectedItem.monstersToHunt && selectedItem.monstersToHunt.length > 0 && (
                <div className="space-y-2.5">
                  <span className="text-xs font-black text-sky-300 flex items-center gap-1.5">
                    <span>👾</span>
                    <span>{langMode === 'en' ? 'Monsters to Hunt (Click for map & route):' : 'מפלצות לציד (לחץ להצגת מפה ודרכי הגעה):'}</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedItem.monstersToHunt.map((m, idx) => {
                      const mobData = MONSTERS_DATABASE.find(mob => mob.name.toLowerCase() === m.monster.toLowerCase() || (mob.nameHe && mob.nameHe.includes(m.monster)));
                      return (
                        <div key={idx} className="liquid-glass-card p-3 rounded-2xl border border-white/10 flex items-center justify-between gap-2 text-xs bg-slate-950/60">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="text-xl p-1.5 rounded-xl bg-sky-950/60 border border-sky-400/20 shrink-0">
                              {mobData?.icon || '👾'}
                            </span>
                            <div className="min-w-0">
                              <span className="font-bold text-white block truncate">{m.count}x {mobData?.nameHe || m.monster}</span>
                              <span className="text-[10px] text-slate-400 font-mono block">
                                {mobData?.town ? `עיר: ${mobData.town}` : (mobData?.maps?.[0]?.nameHe || 'מפה קלאסית')}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => crossNavigate('monster', m.monster)}
                            className="px-3 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/35 text-sky-200 text-xs font-bold border border-sky-400/40 transition shrink-0 cursor-pointer"
                          >
                            {langMode === 'en' ? 'Map 🧭' : 'נווט למפה 🧭'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Walkthrough */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <span>🗺️</span>
                    <span>{langMode === 'en' ? 'Step-by-step Walkthrough:' : 'מדריך שלב-אחר-שלב להשלמת המשימה:'}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {selectedItem.walkthrough.length} {langMode === 'en' ? 'steps' : 'שלבים'}
                  </span>
                </div>
                <div className="space-y-2">
                  {selectedItem.walkthrough.map((step, idx) => (
                    <div key={idx} className="bg-slate-900/60 hover:bg-slate-900/80 p-3.5 rounded-2xl border border-white/10 hover:border-cyan-400/30 transition leading-relaxed flex items-start gap-3">
                      <span className="w-6 h-6 rounded-xl bg-cyan-400/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center font-black font-mono text-xs shrink-0 shadow-sm mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs text-slate-200 leading-relaxed font-normal">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
                  <span>🎁</span>
                  <span>{langMode === 'en' ? 'Rewards on Completion:' : 'פרסים בהשלמה:'}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.rewards.map((r, idx) => {
                    const text = typeof r === 'string' ? r : (r.reward || JSON.stringify(r));
                    const possibleItem = ITEMS_DATABASE.find(i => text.includes(i.name) || (i.nameHe && text.includes(i.nameHe)));
                    return (
                      <div key={idx} className="flex items-center gap-2 flex-wrap">
                        <span className="liquid-glass-pill px-3.5 py-1.5 rounded-xl border border-emerald-400/30 text-xs text-emerald-200 font-bold shadow-sm">
                          {text}
                        </span>
                        {possibleItem && (
                          <button
                            onClick={() => crossNavigate('item', possibleItem.name)}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/35 text-emerald-300 border border-emerald-400/40 font-bold transition cursor-pointer"
                            title={`בדוק פרטים על ${possibleItem.name}`}
                          >
                            <span>צפה בפרס 💎</span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* INSPECTOR: NPC */}
          {selectedType === 'npc' && selectedItem && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-16 h-16 min-w-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-xl flex items-center justify-center bg-slate-900/50 shrink-0">
                    <GameAssetImage
                      src={selectedItem.renderUrl || selectedItem.iconUrl}
                      fallbackSrc={selectedItem.iconUrl}
                      alt={selectedItem.name}
                      emojiFallback={selectedItem.icon}
                      size="lg"
                      className="scale-125 hover:scale-150 transition duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-emerald-300 block truncate">{selectedItem.categoryName} • {selectedItem.town}</span>
                    <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight truncate">{selectedItem.name}</h3>
                    <div className="text-sm text-emerald-200 font-medium">{selectedItem.nameHe}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <button
                    onClick={() => toggleFavorite(selectedItem.id)}
                    className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                      isFav(selectedItem.id)
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-md'
                        : 'border-white/15 liquid-glass-pill text-slate-300 hover:text-white'
                    }`}
                    title={isFav(selectedItem.id) ? 'הסר ממועדפים' : 'שמור במועדפים'}
                  >
                    <span>{isFav(selectedItem.id) ? '⭐' : '☆'}</span>
                    <span className="hidden sm:inline">{isFav(selectedItem.id) ? 'במועדפים' : 'מועדף'}</span>
                  </button>
                  <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/15 text-xs shadow-inner">
                    <span className="text-slate-300 block font-sans">{langMode === 'en' ? 'Map Location:' : 'מיקום מפה:'}</span>
                    <span className="text-emerald-300 font-bold text-sm">{selectedItem.map}</span>
                  </div>
                </div>
              </div>

              {/* Description & Role */}
              <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                <div className="font-bold text-white mb-1">{langMode === 'en' ? 'Role:' : 'תפקיד:'} {selectedItem.role}</div>
                {selectedItem.desc}
              </div>

              {/* Travel Directions */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <span>🧭</span>
                  <span>{langMode === 'en' ? 'How to Reach this NPC:' : 'איך להגיע אל ה-NPC:'}</span>
                </span>
                <ul className="space-y-2 text-xs text-slate-200">
                  {selectedItem.directions.map((dir, idx) => (
                    <li key={idx} className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 leading-relaxed flex items-start gap-2.5">
                      <span className="text-cyan-300 font-bold shrink-0">{idx + 1}.</span>
                      <span className="leading-relaxed">{dir}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Thief Relevance */}
              {selectedItem.thiefRelevance && (
                <div className="liquid-glass-accent-cyan p-4 rounded-2xl border border-sky-400/40 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                    <span>🥷</span>
                    <span>{langMode === 'en' ? 'Thief & Assassin Relevance:' : 'רלוונטיות ייחודית לגנב ולמתנקש:'}</span>
                  </div>
                  <p className="text-xs text-cyan-100 leading-relaxed">
                    {selectedItem.thiefRelevance}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* INSPECTOR: WEAPON (Multi-Class) */}
          {(selectedType === 'weapon' || selectedType === 'claw') && selectedItem && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-16 h-16 min-w-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-xl flex items-center justify-center bg-slate-900/50 shrink-0">
                    <GameAssetImage
                      src={getWeaponIconUrl(selectedItem)}
                      fallbackSrc={getWeaponIconFallback(selectedItem)}
                      alt={selectedItem.name}
                      emojiFallback={selectedItem.icon}
                      size="lg"
                      className="scale-125 hover:scale-150 transition duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 font-mono whitespace-nowrap">
                        {langMode === 'en' ? `Lv. ${selectedItem.reqLevel}` : `רמה ${selectedItem.reqLevel}`}
                      </span>
                      <span className="text-xs font-bold text-amber-300 whitespace-nowrap">
                        {selectedItem.weaponTypeHe || 'כלי נשק'}
                        {selectedItem.jobId && ` • ${WEAPONS_BY_JOB[selectedItem.jobId]?.jobNameHe.split(' ')[0] || ''}`}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight truncate">{selectedItem.name}</h3>
                    <div className="text-sm text-sky-200 font-medium">{selectedItem.nameHe}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap shrink-0">
                  <button
                    onClick={() => toggleFavorite(selectedItem.id)}
                    className={`px-3 py-1.5 rounded-xl border transition flex items-center gap-1.5 text-xs font-bold ${
                      isFav(selectedItem.id)
                        ? 'border-amber-400 bg-amber-500/20 text-amber-300 shadow-md'
                        : 'border-white/15 liquid-glass-pill text-slate-300 hover:text-white'
                    }`}
                    title={isFav(selectedItem.id) ? 'הסר ממועדפים' : 'שמור במועדפים'}
                  >
                    <span>{isFav(selectedItem.id) ? '⭐' : '☆'}</span>
                    <span className="hidden sm:inline">{isFav(selectedItem.id) ? 'במועדפים' : 'מועדף'}</span>
                  </button>
                  <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/15 text-xs shadow-inner">
                    <span className="text-slate-300 block font-sans">{langMode === 'en' ? 'Attack Power:' : 'עוצמת התקפה:'}</span>
                    <span className="text-amber-300 font-bold text-lg">{selectedItem.weaponAtt}</span>
                  </div>
                </div>
              </div>

              {/* Event-Only Classic World Launch Notice */}
              {selectedItem.eventOnly && (
                <div className="liquid-glass-subtle p-3.5 rounded-2xl border border-amber-500/40 bg-amber-950/35 flex items-start gap-3 shadow-lg">
                  <span className="text-2xl shrink-0 p-1 bg-amber-500/20 rounded-xl border border-amber-400/40">🍁</span>
                  <div>
                    <div className="text-xs font-black text-amber-300 flex items-center gap-2">
                      <span>נשק אירוע (Event Only)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/25 border border-amber-400/30 font-normal">
                        אינו קיים בהשקת Classic World (v1.0.0)!
                      </span>
                    </div>
                    <p className="text-xs text-amber-100/90 mt-1 leading-relaxed">
                      {selectedItem.availabilityNote || 'נשק זה הינו פריט אירוע יום הולדת עתידי בלבד (Anniversary Event). הוא אינו נופל ממפלצות בהשקה הראשונית.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Quick specs grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Attack Speed' : 'מהירות תקיפה'}</span>
                  <span className="text-xs font-bold text-sky-200 font-mono">{selectedItem.speed}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Stat Requirements' : 'דרישות סטטים'}</span>
                  <span className="text-xs font-bold text-emerald-200 font-mono">{formatStatReqs(selectedItem, langMode === 'en')}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Scroll Slots' : 'סלוטים לגלילה'}</span>
                  <span className="text-xs font-bold text-amber-200 font-mono">{selectedItem.slots || 7} Slots</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Recommended Build' : 'התאמת בילד'}</span>
                  <span className="text-xs font-bold text-purple-200 font-mono">{formatBuildFit(selectedItem, langMode === 'en')}</span>
                </div>
              </div>

              {/* Description */}
              <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                {selectedItem.desc}
              </div>

              {/* Obtain Locations */}
              <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-2">
                <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{langMode === 'en' ? 'How & Where to Obtain:' : 'איך ומאיפה משיגים:'}</span>
                </span>
                <div className="space-y-1.5">
                  {Array.isArray(selectedItem.obtain) ? (
                    selectedItem.obtain.map((loc, idx) => (
                      <div key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                        <span className="text-cyan-400 shrink-0">•</span>
                        <span>{loc}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-200">{selectedItem.howToGet || selectedItem.desc}</p>
                  )}
                </div>
              </div>

              {/* Tactical Tip */}
              {selectedItem.tip && (
                <div className="liquid-glass-accent-cyan p-4 rounded-2xl border border-sky-400/40 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                    <span>💡</span>
                    <span>{langMode === 'en' ? 'Upgrade & Tactical Tip:' : 'טיפ שדרוג ושימוש:'}</span>
                  </div>
                  <p className="text-xs text-cyan-100 leading-relaxed">{selectedItem.tip}</p>
                </div>
              )}

              {onOpenBuildGuide && (
                <button
                  onClick={onOpenBuildGuide}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl liquid-glass-btn-primary text-white font-bold text-xs shadow-lg shadow-cyan-600/30 transition hover:scale-[1.01]"
                >
                  <span>⚔️</span>
                  <span>{langMode === 'en' ? 'Open Full Weapon Path in Build Guide' : 'פתח את מסלול הנשקים המלא במדריך הבילד'}</span>
                </button>
              )}
            </div>
          )}

          {/* INSPECTOR: SECONDARY / AMMUNITION / SHIELD */}
          {(selectedType === 'secondary' || selectedType === 'star') && selectedItem && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-16 h-16 min-w-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-xl flex items-center justify-center bg-slate-900/50 shrink-0">
                    <GameAssetImage
                      src={getWeaponIconUrl(selectedItem)}
                      fallbackSrc={getWeaponIconFallback(selectedItem)}
                      alt={selectedItem.name}
                      emojiFallback={selectedItem.icon}
                      size="lg"
                      className="scale-125 hover:scale-150 transition duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-amber-300">
                      {langMode === 'en' ? (selectedItem.secondaryType || 'Secondary Gear & Ammo') : (selectedItem.secondaryTypeHe || 'ציוד משני ותחמושת')}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight truncate">{selectedItem.name}</h3>
                    <div className="text-sm text-sky-200 font-medium">{selectedItem.nameHe}</div>
                  </div>
                </div>

                <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/15 text-xs shadow-inner shrink-0">
                  <span className="text-slate-300 block font-sans">{langMode === 'en' ? 'Attribute / Stats:' : 'תוספת / תכונה:'}</span>
                  <span className="text-emerald-300 font-bold text-base">{selectedItem.att || selectedItem.stats}</span>
                </div>
              </div>

              {selectedItem.quantity && (
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-300">{langMode === 'en' ? 'Stack Capacity:' : 'קיבולת לסט / מחסנית:'}</span>
                  <span className="text-amber-300 font-bold">{selectedItem.quantity} {langMode === 'en' ? 'units per recharge' : 'יחידות בטעינה'}</span>
                </div>
              )}

              <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-1.5">
                <span className="text-xs font-black text-cyan-300 block">{langMode === 'en' ? 'How & Where to Obtain:' : 'איך ומאיפה משיגים:'}</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedItem.whereToGet}</p>
              </div>

              {selectedItem.price && (
                <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-1.5">
                  <span className="text-xs font-black text-amber-300 block">{langMode === 'en' ? 'Market Price Estimate:' : 'הערכת מחיר שוק:'}</span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedItem.price}</p>
                </div>
              )}

              {selectedItem.tip && (
                <div className="liquid-glass-accent-cyan p-4 rounded-2xl border border-sky-400/40 space-y-1">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                    <span>💡</span>
                    <span>{langMode === 'en' ? 'Tactical Tip:' : 'טיפ טקטי:'}</span>
                  </div>
                  <p className="text-xs text-cyan-100 leading-relaxed">{selectedItem.tip}</p>
                </div>
              )}
            </div>
          )}

          {/* INSPECTOR: ESSENTIAL GEAR */}
          {selectedType === 'essential' && selectedItem && (
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 flex-wrap gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-16 h-16 min-w-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-xl flex items-center justify-center bg-slate-900/50 shrink-0">
                    <GameAssetImage
                      src={getWeaponIconUrl(selectedItem) || getDropIconUrl(selectedItem.name) || getItemIconUrl(selectedItem.name)}
                      fallbackSrc={getWeaponIconFallback(selectedItem) || getDropIconFallback(selectedItem.name) || getItemIconFallback(selectedItem.name)}
                      alt={selectedItem.name}
                      emojiFallback={selectedItem.icon}
                      size="lg"
                      className="scale-125"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-amber-300">{selectedItem.slot}</span>
                    <h3 className="text-2xl font-black text-white mt-0.5 tracking-tight truncate">{selectedItem.name}</h3>
                    <div className="text-sm text-sky-200 font-medium">{selectedItem.nameHe}</div>
                  </div>
                </div>

                <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/15 text-xs shadow-inner shrink-0">
                  <span className="text-slate-300 block font-sans">{langMode === 'en' ? 'Stats:' : 'סטטים:'}</span>
                  <span className="text-amber-300 font-bold text-base">{selectedItem.stats}</span>
                </div>
              </div>

              <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                {selectedItem.desc || selectedItem.tip}
              </div>

              <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-1.5">
                <span className="text-xs font-black text-cyan-300 block">{langMode === 'en' ? 'How to Obtain:' : 'איך להשיג:'}</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedItem.howToGet}</p>
              </div>
            </div>
          )}

          {/* BOTTOM BACK BUTTON FOR CONVENIENCE */}
          {navHistory.length > 0 && (
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
              <button
                onClick={handleGoBack}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-lg shadow-amber-500/20 transition transform active:scale-95"
              >
                <span className="text-sm">↩️</span>
                <span>
                  {langMode === 'en'
                    ? `Back to ${navHistory[navHistory.length - 1]?.item?.name || 'Previous'}`
                    : `חזור אל ${navHistory[navHistory.length - 1]?.item?.nameHe || navHistory[navHistory.length - 1]?.item?.name || 'הקודם'}`}
                </span>
              </button>
              <span className="text-[11px] text-slate-400 font-mono">
                {langMode === 'en' ? 'Tip: Press Alt + Left Arrow or Mouse Back Button to go back quickly' : 'טיפ: לחץ Alt + חץ שמאלה או כפתור חזרה בעכבר'}
              </span>
            </div>
          )}

        </div>

      </div>

      {/* 2D Interactive Map Canvas Radar Modal */}
      {isMapRadarModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md">
          <div className="w-full max-w-4xl liquid-glass rounded-3xl p-5 border border-cyan-400/50 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl p-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40">📡</span>
                <div>
                  <h3 className="text-lg font-black text-white">
                    {langMode === 'en' ? 'Interactive 2D Terrain Radar Canvas' : 'סקיצת שטח ורדאר 2D חי'}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {langMode === 'en'
                      ? 'Live animated 2D platform simulation with jumping monsters, hidden portals, and safe spots'
                      : 'הדמיית פלטפורמות 2D חיה עם מפלצות בתנועה, פורטלים נסתרים ועמדות בטוחות'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMapRadarModalOpen(false)}
                className="w-9 h-9 rounded-xl liquid-glass-pill text-slate-400 hover:text-white flex items-center justify-center font-bold text-lg transition"
              >
                ✕
              </button>
            </div>

            <InteractiveMapRadar
              height={300}
              showControls={true}
              monster={selectedType === 'monster' ? selectedItem : null}
            />

            <div className="flex items-center justify-end pt-2 border-t border-white/10">
              <button
                onClick={() => setIsMapRadarModalOpen(false)}
                className="px-5 py-2 rounded-xl liquid-btn-primary text-white text-xs font-bold shadow-md"
              >
                {langMode === 'en' ? 'Close' : 'סגור'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
