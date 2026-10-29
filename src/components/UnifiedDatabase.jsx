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
import {
  getItemIconUrl,
  getItemIconFallback,
  getWeaponIconUrl,
  getWeaponIconFallback,
  getDropIconUrl,
  getDropIconFallback
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

export default function UnifiedDatabase({ initialQuery = '', initialCategory = 'all', onOpenBuildGuide, activeJob }) {
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

  // SMART CROSS-LINKING HELPER:
  const crossNavigate = (type, targetName) => {
    setSearchQuery(targetName);
    const cleanName = targetName.trim().toLowerCase();

    if (type === 'monster') {
      const match = MONSTERS_DATABASE.find(m => 
        cleanName.includes(m.name.toLowerCase()) || m.name.toLowerCase().includes(cleanName)
      );
      if (match) {
        setSelectedType('monster');
        setSelectedItem(match);
        setActiveFilter('monsters');
        return;
      }
    }

    if (type === 'item') {
      const match = ITEMS_DATABASE.find(i => 
        cleanName.includes(i.name.toLowerCase()) || i.name.toLowerCase().includes(cleanName)
      );
      if (match) {
        setSelectedType('item');
        setSelectedItem(match);
        setActiveFilter('items');
        return;
      }
    }

    if (type === 'npc') {
      const match = NPCS_DATABASE.find(n => 
        cleanName.includes(n.name.toLowerCase()) || n.name.toLowerCase().includes(cleanName)
      );
      if (match) {
        setSelectedType('npc');
        setSelectedItem(match);
        setActiveFilter('npcs');
        return;
      }
    }

    if (type === 'quest') {
      const match = QUESTS_DATABASE.find(q => 
        cleanName.includes(q.name.toLowerCase()) || q.name.toLowerCase().includes(cleanName)
      );
      if (match) {
        setSelectedType('quest');
        setSelectedItem(match);
        setActiveFilter('quests');
        return;
      }
    }

    if (type === 'weapon') {
      const match = ALL_WEAPONS_DATABASE.find(w => 
        cleanName.includes(w.name.toLowerCase()) || w.name.toLowerCase().includes(cleanName)
      );
      if (match) {
        setSelectedType('weapon');
        setSelectedItem(match);
        setActiveFilter('gear');
        return;
      }
    }

    if (type === 'secondary') {
      const match = ALL_SECONDARY_DATABASE.find(s => 
        cleanName.includes(s.name.toLowerCase()) || s.name.toLowerCase().includes(cleanName)
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
                  onClick={() => {
                    setSearchQuery(s.title);
                    setSelectedType(s.type);
                    setSelectedItem(s.item);
                    setShowSuggestions(false);
                  }}
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
        <div className="lg:col-span-5 space-y-4 max-h-[840px] overflow-y-auto pr-1">
          
          {/* Section: Monsters */}
          {(activeFilter === 'all' || activeFilter === 'monsters' || activeFilter === 'favorites') && searchResults.monsters.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-cyan-200 liquid-glass-subtle px-3 py-2 rounded-xl border border-sky-400/30">
                <span>👾 {t('monsters')} ({searchResults.monsters.length})</span>
                <span className="text-[10px] text-slate-300">{langMode === 'en' ? 'Click for details & routes' : 'לחץ לפרטים ודרכי הגעה'}</span>
              </div>
              <div className="space-y-2">
                {searchResults.monsters.slice(0, visibleMonstersCount).map(m => {
                  const isSelected = selectedType === 'monster' && selectedItem?.id === m.id;
                  const fav = isFav(m.id);
                  return (
                    <div
                      key={m.id}
                      onClick={() => {
                        setSelectedType('monster');
                        setSelectedItem(m);
                      }}
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
              </div>
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

          {/* Section: Items */}
          {(activeFilter === 'all' || activeFilter === 'items' || activeFilter === 'favorites') && searchResults.items.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-amber-300 liquid-glass-subtle px-3 py-2 rounded-xl border border-amber-500/30">
                <span>💎 {t('items')} ({searchResults.items.length})</span>
                <span className="text-[10px] text-slate-400">{langMode === 'en' ? 'Shops & Drops' : 'חנויות ודרופים'}</span>
              </div>
              <div className="space-y-2">
                {searchResults.items.slice(0, visibleItemsCount).map(item => {
                  const isSelected = selectedType === 'item' && selectedItem?.id === item.id;
                  const fav = isFav(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedType('item');
                        setSelectedItem(item);
                      }}
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
              </div>
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

          {/* Section: Quests (With deep content match highlights) */}
          {(activeFilter === 'all' || activeFilter === 'quests' || activeFilter === 'favorites') && searchResults.quests.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-teal-300 liquid-glass-subtle px-3 py-2 rounded-xl border border-teal-500/30">
                <span>📜 {t('quests')} ({searchResults.quests.length})</span>
                <span className="text-[10px] text-slate-400">{langMode === 'en' ? 'Requirements, guide & rewards' : 'דרישות, מדריך ופרסים'}</span>
              </div>
              <div className="space-y-2">
                {searchResults.quests.slice(0, visibleQuestsCount).map(quest => {
                  const isSelected = selectedType === 'quest' && selectedItem?.id === quest.id;
                  const matchReason = getQuestMatchReason(quest, searchQuery, langMode);
                  const fav = isFav(quest.id);

                  return (
                    <div
                      key={quest.id}
                      onClick={() => {
                        setSelectedType('quest');
                        setSelectedItem(quest);
                      }}
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
              </div>
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

          {/* Section: NPCs */}
          {(activeFilter === 'all' || activeFilter === 'npcs' || activeFilter === 'favorites') && searchResults.npcs.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-black text-teal-300 liquid-glass-subtle px-3 py-2 rounded-xl border border-teal-500/30">
                <span>👤 {t('npcs')} ({searchResults.npcs.length})</span>
                <span className="text-[10px] text-slate-400">{langMode === 'en' ? 'Location & directions' : 'מיקום ודרכי הגעה'}</span>
              </div>
              <div className="space-y-2">
                {searchResults.npcs.slice(0, visibleNpcsCount).map(npc => {
                  const isSelected = selectedType === 'npc' && selectedItem?.id === npc.id;
                  const fav = isFav(npc.id);
                  return (
                    <div
                      key={npc.id}
                      onClick={() => {
                        setSelectedType('npc');
                        setSelectedItem(npc);
                      }}
                      className={`p-3 rounded-2xl cursor-pointer transition border flex items-center justify-between ${
                        isSelected
                          ? 'glow-active bg-teal-950/70 border-teal-400 shadow-lg shadow-teal-500/30 ring-1 ring-teal-300/50'
                          : 'liquid-glass-card hover:border-teal-400/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl liquid-glass-pill p-2 rounded-xl border border-white/15">{npc.icon}</span>
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
              </div>
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

          {/* Section: Weapons, Secondary & Gear (Multi-Class) */}
          {(activeFilter === 'all' || activeFilter === 'gear' || activeFilter === 'favorites') && (searchResults.weapons.length > 0 || searchResults.secondaryItems.length > 0 || searchResults.gearItems.length > 0) && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-black text-cyan-200 liquid-glass-subtle px-3 py-2 rounded-xl border border-sky-400/30">
                <span>{gearConfig.icon} כלי נשק וציוד שנמצאו ({searchResults.weapons.length + searchResults.secondaryItems.length + searchResults.gearItems.length})</span>
                <span className="text-[10px] text-slate-300">מותאם למקצוע הנבחר ({gearConfig.jobLabel})</span>
              </div>

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
                          onClick={() => {
                            setSelectedType('weapon');
                            setSelectedItem(w);
                          }}
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
                          onClick={() => {
                            setSelectedType('secondary');
                            setSelectedItem(s);
                          }}
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
                          onClick={() => {
                            setSelectedType('essential');
                            setSelectedItem(g);
                          }}
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
                        {selectedItem.animUrl && (
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            {langMode === 'en' ? 'MeowDB Animation' : 'אנימציה מ-MeowDB'}
                          </span>
                        )}
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

              {/* Locations */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{langMode === 'en' ? 'Habitats & Maps:' : 'מפות בהן המפלצת נמצאת:'}</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.locations.map((loc, idx) => (
                    <span key={idx} className="liquid-glass-pill px-3 py-1.5 rounded-xl border border-white/10 text-xs text-slate-100">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Travel & Arrival Guide (Unified for ALL monsters & all locations) */}
              <VisualTravelGuide monster={selectedItem} />

              {/* SMART CROSS-LINKING: Notable Drops */}
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
                      className="flex items-center gap-2 px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-amber-400/60 text-xs text-slate-100 transition group"
                    >
                      <GameAssetImage
                        src={getDropIconUrl(drop)}
                        fallbackSrc={getDropIconFallback(drop)}
                        alt={drop}
                        emojiFallback="📦"
                        size="xs"
                      />
                      <span className="font-bold group-hover:text-amber-300 transition">{drop}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* VERIFIED DROPS FROM MEOWDB & MESOWATCH */}
              {selectedItem.verifiedDrops && selectedItem.verifiedDrops.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                      <span>📊</span>
                      <span>{langMode === 'en' ? `Verified Drops from MeowDB & MesoWatch (${selectedItem.verifiedDrops.length}):` : `כלל הדרופים המאומתים מ-MeowDB ו-MesoWatch (${selectedItem.verifiedDrops.length}):`}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">{langMode === 'en' ? 'Community reports + Classic drop tables' : 'דיווחים קהילתיים + טבלאות קלאסיות'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-56 overflow-y-auto p-1.5 liquid-glass-subtle rounded-2xl border border-white/10">
                    {selectedItem.verifiedDrops.map((d, idx) => (
                      <div
                        key={idx}
                        onClick={() => crossNavigate('item', d.name)}
                        className="liquid-glass-pill hover:border-cyan-400/50 p-2.5 rounded-xl border border-white/10 flex items-center justify-between text-xs cursor-pointer transition group"
                      >
                        <div>
                          <div className="font-bold text-white group-hover:text-cyan-300 transition flex items-center gap-2">
                            <GameAssetImage
                              src={getDropIconUrl(d.name)}
                              fallbackSrc={getDropIconFallback(d.name)}
                              alt={d.name}
                              emojiFallback="🔹"
                              size="xs"
                            />
                            <span>{d.name}</span>
                            {d.votes && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/30 font-mono">
                                👍 {d.votes}
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-slate-300">{d.category}</div>
                        </div>
                        {d.price && (
                          <span className="text-xs font-bold text-amber-300 font-mono shrink-0">
                            {d.price}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
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
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                        {selectedItem.obtainTypeHe}
                      </span>
                      <span className="text-xs text-slate-300">{selectedItem.categoryName}</span>
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

              {/* MESOWATCH LIVE MARKET ANALYTICS */}
              {selectedItem.marketPrice && (
                <div className="liquid-glass-accent-amber p-4 rounded-2xl border border-amber-400/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                      <span className="text-base">🪙</span>
                      <span>{langMode === 'en' ? 'MesoWatch Live Market Analytics:' : 'מדד מחירי שוק חי (MesoWatch Market Analytics):'}</span>
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
                      <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Free Market Price' : 'מחיר שוק חופשי'}</div>
                      <div className="text-sm font-black text-amber-300 font-mono mt-0.5">{selectedItem.marketPrice}</div>
                    </div>
                    <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                      <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Price Range (Low - High)' : 'טווח עסקאות (Low - High)'}</div>
                      <div className="text-xs font-bold text-slate-100 font-mono mt-1">
                        {selectedItem.marketLow ? selectedItem.marketLow.toLocaleString() : '—'} - {selectedItem.marketHigh ? selectedItem.marketHigh.toLocaleString() : '—'}
                      </div>
                    </div>
                    <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                      <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Sold Volume' : 'יחידות שנמכרו בשוק'}</div>
                      <div className="text-xs font-bold text-cyan-300 font-mono mt-1">
                        {selectedItem.marketSold ? `${selectedItem.marketSold.toLocaleString()} יח'` : '—'}
                      </div>
                    </div>
                    <div className="liquid-glass-pill p-2.5 rounded-xl border border-white/10 text-center">
                      <div className="text-[10px] text-slate-300">{langMode === 'en' ? 'Active Player Shops' : 'חנויות שחקנים פעילות'}</div>
                      <div className="text-xs font-bold text-sky-300 font-mono mt-1">
                        {selectedItem.marketShops ? `${selectedItem.marketShops} חנויות` : 'סחר חופשי'}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                {selectedItem.desc}
              </div>

              {/* Thief Tip */}
              {selectedItem.thiefTip && (
                <div className="liquid-glass-accent-amber p-4 rounded-2xl border border-amber-400/40 space-y-1">
                  <div className="flex items-center gap-2 text-amber-300 font-bold text-xs">
                    <span>💡</span>
                    <span>{langMode === 'en' ? 'Thief & Assassin Relevance:' : 'רלוונטיות לגנב ולמתנקש:'}</span>
                  </div>
                  <p className="text-xs text-amber-100 leading-relaxed">
                    {selectedItem.thiefTip}
                  </p>
                </div>
              )}

              {/* SMART CROSS-LINKING: Sold in Shops */}
              {selectedItem.soldInShops && selectedItem.soldInShops.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <span>🏪</span>
                    <span>{langMode === 'en' ? 'Sold in NPC Shops (Click NPC for route):' : 'נמכר בחנויות (לחץ על ה-NPC לפרטי הגעה):'}</span>
                  </span>
                  <div className="space-y-2">
                    {selectedItem.soldInShops.map((shop, idx) => (
                      <div key={idx} className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-white flex items-center gap-2">
                            <span>{shop.shopName}</span>
                            <span className="text-amber-300 font-mono">({shop.price})</span>
                          </div>
                          <div className="text-slate-300 mt-1">{shop.directions}</div>
                        </div>
                        <button
                          onClick={() => crossNavigate('npc', shop.npc)}
                          className="shrink-0 px-3 py-1.5 rounded-xl liquid-glass-pill hover:bg-white/15 text-cyan-300 text-[11px] font-bold border border-cyan-400/30 transition"
                        >
                          {langMode === 'en' ? 'View NPC 👤' : 'הצג NPC 👤'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SMART CROSS-LINKING: Dropped By */}
              {selectedItem.droppedBy && selectedItem.droppedBy.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                      <span>👾</span>
                      <span>{langMode === 'en' ? 'Dropped by Monsters (Click to inspect):' : 'מפלצות שמפילות את הפריט (לחץ למעבר ישיר למפלצת):'}</span>
                    </span>
                    <span className="text-[10px] text-cyan-300">🔗 קישור ישיר</span>
                  </div>
                  <div className="space-y-2">
                    {selectedItem.droppedBy.map((mob, idx) => (
                      <div
                        key={idx}
                        className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs hover:border-sky-400/50 transition"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white">{mob.monsterName}</span>
                            <span className="text-sky-300">({mob.monsterNameHe})</span>
                            <span className="text-[11px] text-amber-300 font-mono font-bold">Lv. {mob.level}</span>
                          </div>
                          <div className="text-slate-300 mt-0.5">עיר/אזור: {mob.town}</div>
                        </div>

                        <button
                          onClick={() => crossNavigate('monster', mob.monsterName)}
                          className="shrink-0 px-3 py-1.5 rounded-xl liquid-glass-pill bg-sky-900/40 hover:bg-sky-800/60 text-sky-200 text-[11px] font-bold border border-sky-400/50 transition"
                        >
                          {langMode === 'en' ? 'View Monster & Route 🧭' : 'הצג מפלצת ודרכי הגעה 🧭'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SMART CROSS-LINKING: Required For Quests */}
              {selectedItem.requiredForQuests && selectedItem.requiredForQuests.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                      <span>📜</span>
                      <span>{langMode === 'en' ? `Required for Quests (${selectedItem.requiredForQuests.length}):` : `נדרש עבור משימות במשחק (${selectedItem.requiredForQuests.length}):`}</span>
                    </span>
                    <span className="text-[10px] text-slate-400">MesoWatch / MeowDB Quest Tracker</span>
                  </div>
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

              {/* SMART CROSS-LINKING: Reward From Quests */}
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
                <div className="space-y-2">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <span>📦</span>
                    <span>{langMode === 'en' ? 'Required Items (Click to check drops & shops):' : 'חפצים דרושים (לחץ לבדיקת מקורות דרופ וחנויות):'}</span>
                  </span>
                  <div className="space-y-2">
                    {selectedItem.itemsNeeded.map((it, idx) => (
                      <div key={idx} className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-white">{it.count}x {it.item}</span>
                          <span className="text-slate-300 block text-[11px] mt-0.5">{it.source}</span>
                        </div>
                        <button
                          onClick={() => crossNavigate('item', it.item)}
                          className="px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-amber-400/60 text-amber-300 text-[11px] font-bold border border-white/10 transition"
                        >
                          {langMode === 'en' ? 'Inspect Item 💎' : 'בדוק פריט 💎'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SMART CROSS-LINKING: Monsters to Hunt */}
              {selectedItem.monstersToHunt && selectedItem.monstersToHunt.length > 0 && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                    <span>👾</span>
                    <span>{langMode === 'en' ? 'Monsters to Hunt (Click for travel route):' : 'מפלצות לציד (לחץ להצגת דרכי הגעה):'}</span>
                  </span>
                  <div className="space-y-2">
                    {selectedItem.monstersToHunt.map((m, idx) => (
                      <div key={idx} className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{m.count}x {m.monster}</span>
                        <button
                          onClick={() => crossNavigate('monster', m.monster)}
                          className="px-3 py-1.5 rounded-xl liquid-glass-pill bg-sky-900/40 hover:bg-sky-800/60 text-sky-200 text-[11px] font-bold border border-sky-400/40 transition"
                        >
                          {langMode === 'en' ? 'View Monster 🧭' : 'הצג מפלצת 🧭'}
                        </button>
                      </div>
                    ))}
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
                    return (
                      <span key={idx} className="liquid-glass-pill px-3.5 py-1.5 rounded-xl border border-emerald-400/30 text-xs text-emerald-200 font-bold shadow-sm">
                        {text}
                      </span>
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
                  <span className="text-4xl liquid-glass-pill p-3 rounded-2xl border border-white/20 shadow-lg shrink-0">
                    {selectedItem.icon}
                  </span>
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
                  <span className="text-[10px] text-slate-400 block">מהירות תקיפה</span>
                  <span className="text-xs font-bold text-sky-200 font-mono">{selectedItem.speed}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">דרישות סטטים</span>
                  <span className="text-xs font-bold text-emerald-200 font-mono">{selectedItem.reqStats || `DEX ${selectedItem.reqDex || 0}`}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">סלוטים לגלילה</span>
                  <span className="text-xs font-bold text-amber-200 font-mono">{selectedItem.slots || 7} Slots</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block">התאמת בילד</span>
                  <span className="text-xs font-bold text-purple-200 font-mono">{selectedItem.suitableForHe || 'כל הבילדים'}</span>
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
                  <span>איך ומאיפה משיגים:</span>
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
                    <span>טיפ שדרוג ושימוש:</span>
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
                      {selectedItem.secondaryTypeHe || 'ציוד משני ותחמושת'}
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
