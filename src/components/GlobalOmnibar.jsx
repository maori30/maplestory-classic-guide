import { useLanguage } from '../context/LanguageContext.jsx';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { MONSTERS_DATABASE } from '../data/monsters.js';
import { ITEMS_DATABASE } from '../data/items.js';
import { NPCS_DATABASE } from '../data/npcs.js';
import { QUESTS_DATABASE } from '../data/quests.js';
import { ALL_WEAPONS_DATABASE, ALL_SECONDARY_DATABASE } from '../data/weaponsData.js';
import { ESSENTIAL_GEAR } from '../data/gear.js';
import { CLASSES_DATA } from '../data/classesData.js';
import { GameAssetImage } from './GameAssetImage.jsx';
import {
  getItemIconUrl,
  getItemIconFallback,
  getWeaponIconUrl,
  getWeaponIconFallback,
  getDropIconUrl,
  getDropIconFallback
} from '../data/itemAssets.js';

export default function GlobalOmnibar({ isOpen, onClose, onNavigate }) {
  const { langMode, isRTL, t } = useLanguage();
  const isEn = langMode === 'en';
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const modalRef = useRef(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Click outside listener for instant exit
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Keyboard shortcut listener (Ctrl+K / Cmd+K and Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate results across ALL systems
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const list = [];

    // 1. All Skills across all MapleStory Classic jobs
    Object.values(CLASSES_DATA).forEach(job => {
      const allSkills = [...(job.skills1 || []), ...(job.skills2 || [])];
      allSkills.forEach(s => {
        if (s.name.toLowerCase().includes(q) || s.nameHe.includes(q) || (s.desc && s.desc.toLowerCase().includes(q))) {
          if (!list.some(existing => existing.type === 'skill' && existing.title === s.name && existing.jobId === job.id)) {
            list.push({
              category: 'skills',
              categoryName: isEn ? `Skill • ${job.name}` : `סקיל • ${job.nameHe.split(' ')[0]}`, 
              type: 'skill',
              jobId: job.id,
              icon: s.icon,
              title: s.name,
              subtitle: `${s.nameHe} • ${job.nameHe} (מקס ${s.max} נק')`,
              targetPage: 'guide',
              categoryFilter: 'all',
              payload: s.id
            });
          }
        }
      });
    });

    // 2. All Weapons (Multi-Class)
    ALL_WEAPONS_DATABASE.forEach(w => {
      if (w.name.toLowerCase().includes(q) || w.nameHe.includes(q)) {
        list.push({
          category: 'gear',
          categoryName: isEn ? `Weapon (${w.weaponType})` : `נשק (${w.weaponTypeHe || 'נשק'})`, 
          type: 'weapon',
          icon: w.icon,
          spriteUrl: getWeaponIconUrl(w),
          fallbackUrl: getWeaponIconFallback(w),
          title: w.name,
          subtitle: `${w.nameHe} • רמה ${w.reqLevel} (${w.weaponAtt})`,
          targetPage: 'unified',
          categoryFilter: 'gear',
          payload: w.name
        });
      }
    });

    // 3. Secondary, Shields & Ammunition (Stars, Shields, Bullets, Arrows)
    ALL_SECONDARY_DATABASE.forEach(s => {
      if (s.name.toLowerCase().includes(q) || s.nameHe.includes(q)) {
        list.push({
          category: 'gear',
          categoryName: isEn ? (s.secondaryType || 'Secondary') : (s.secondaryTypeHe || 'ציוד משני'), 
          type: 'secondary',
          icon: s.icon,
          spriteUrl: getWeaponIconUrl(s),
          fallbackUrl: getWeaponIconFallback(s),
          title: s.name,
          subtitle: `${s.nameHe} • ${s.att || s.stats}`,
          targetPage: 'unified',
          categoryFilter: 'gear',
          payload: s.name
        });
      }
    });

    // Essential Gear
    ESSENTIAL_GEAR.forEach(g => {
      if (g.name.toLowerCase().includes(q) || g.nameHe.includes(q)) {
        list.push({
          category: 'gear',
          categoryName: isEn ? 'Essential Gear' : 'ציוד כללי', 
          type: 'essential',
          icon: g.icon,
          spriteUrl: getWeaponIconUrl(g) || getDropIconUrl(g.name) || getItemIconUrl(g.name),
          fallbackUrl: getWeaponIconFallback(g) || getDropIconFallback(g.name) || getItemIconFallback(g.name),
          title: g.name,
          subtitle: `${g.nameHe} • ${g.stats}`,
          targetPage: 'unified',
          categoryFilter: 'gear',
          payload: g.name
        });
      }
    });

    // 4. Monsters
    MONSTERS_DATABASE.forEach(m => {
      if (m.name.toLowerCase().includes(q) || m.nameHe.includes(q) || m.town.toLowerCase().includes(q)) {
        list.push({
          category: 'monsters',
          categoryName: isEn ? 'Monsters' : 'מפלצות', 
          type: 'monster',
          icon: m.icon,
          spriteUrl: m.animUrl || m.spriteUrl,
          fallbackUrl: m.renderUrl || m.spriteUrl,
          title: m.name,
          subtitle: `${m.nameHe} • רמה ${m.level} • ${m.town}`,
          targetPage: 'unified',
          categoryFilter: 'monsters',
          payload: m.name
        });
      }
    });

    // 5. Items
    ITEMS_DATABASE.forEach(it => {
      if (it.name.toLowerCase().includes(q) || it.nameHe.toLowerCase().includes(q) || it.categoryName.toLowerCase().includes(q)) {
        list.push({
          category: 'items',
          categoryName: isEn ? 'Items & Drops' : 'פריטים ושלל', 
          type: 'item',
          icon: it.icon,
          spriteUrl: getItemIconUrl(it),
          fallbackUrl: getItemIconFallback(it),
          title: it.name,
          subtitle: `${it.nameHe} • ${it.obtainTypeHe}`,
          targetPage: 'unified',
          categoryFilter: 'items',
          payload: it.name
        });
      }
    });

    // 6. Quests (Deep search: Name, Hebrew Name, NPC, Items Needed, Rewards, Walkthrough steps)
    QUESTS_DATABASE.forEach(qst => {
      const qLower = q.toLowerCase();
      const inName = qst.name.toLowerCase().includes(qLower) || (qst.nameHe && qst.nameHe.toLowerCase().includes(qLower));
      const inNpc = qst.npcName.toLowerCase().includes(qLower) || (qst.npcTown || "").toLowerCase().includes(qLower);
      const inItems = (qst.itemsNeeded || []).some(i => (typeof i === 'string' ? i : i.item).toLowerCase().includes(qLower));
      const inMobs = (qst.monstersToHunt || []).some(m => (typeof m === 'string' ? m : m.monster).toLowerCase().includes(qLower));
      const inRewards = (qst.rewards || []).some(r => (typeof r === 'string' ? r : r.reward).toLowerCase().includes(qLower));
      const inWalkthrough = (qst.walkthrough || []).some(step => step.toLowerCase().includes(qLower));

      if (inName || inNpc || inItems || inMobs || inRewards || inWalkthrough) {
        let matchNote = `רמה ${qst.reqLevel}+ אצל ${qst.npcName}`;
        if (inItems) {
          const it = (qst.itemsNeeded || []).find(i => (typeof i === 'string' ? i : i.item).toLowerCase().includes(qLower));
          if (it) matchNote = `דרוש: ${typeof it === 'string' ? it : `${it.count || 1}x ${it.item}`} • אצל ${qst.npcName}`;
        } else if (inWalkthrough) {
          const step = (qst.walkthrough || []).find(s => s.toLowerCase().includes(qLower));
          if (step) {
            const clean = step.length > 40 ? step.slice(0, 38) + '...' : step;
            matchNote = `מדריך: "${clean}"`;
          }
        } else if (inRewards) {
          const rw = (qst.rewards || []).find(r => (typeof r === 'string' ? r : r.reward).toLowerCase().includes(qLower));
          if (rw) matchNote = `פרס: ${typeof rw === 'string' ? rw : rw.reward}`;
        }

        list.push({
          category: 'quests',
          categoryName: isEn ? 'Quests' : 'משימות', 
          type: 'quest',
          icon: qst.icon,
          title: qst.name,
          subtitle: `${qst.nameHe} • ${matchNote}`,
          targetPage: 'unified',
          categoryFilter: 'quests',
          payload: qst.name
        });
      }
    });

    // 7. NPCs
    NPCS_DATABASE.forEach(npc => {
      if (npc.name.toLowerCase().includes(q) || npc.nameHe.includes(q) || npc.town.toLowerCase().includes(q)) {
        list.push({
          category: 'npcs',
          categoryName: isEn ? 'NPCs' : 'דמויות NPC', 
          type: 'npc',
          icon: npc.icon,
          title: npc.name,
          subtitle: `${npc.nameHe} • ${npc.town}`,
          targetPage: 'unified',
          categoryFilter: 'npcs',
          payload: npc.name
        });
      }
    });

    return list.slice(0, 14);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-20 px-3 sm:px-4 bg-slate-950/75 backdrop-blur-xl transition duration-150 animate-in fade-in"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl liquid-glass rounded-3xl shadow-2xl overflow-hidden border border-sky-300/30 animate-in zoom-in-95 duration-150"
      >
        
        {/* Search Header */}
        <div className="relative border-b border-sky-400/20 p-4 bg-slate-900/60 backdrop-blur-2xl">
          <div className="relative flex items-center gap-2">
            <span className="text-xl text-cyan-300 shrink-0">🔍</span>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="חפש הכל: מפלצת, פריט, משימה, NPC, סקיל, שלל או כוכב..."
              className="w-full bg-transparent text-white text-base placeholder-sky-200/50 focus:outline-none font-bold"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-slate-300 hover:text-white px-2 text-sm font-bold transition"
                title="נקה חיפוש"
              >
                ✕
              </button>
            )}
            <button
              onClick={onClose}
              className="text-[11px] font-mono liquid-glass-pill hover:bg-sky-400/20 text-sky-200 px-2.5 py-1 rounded-lg border border-sky-300/30 shrink-0 transition"
              title="לחץ ליציאה (או לחץ מחוץ למסגרת)"
            >
              ESC / סגור
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto divide-y divide-white/5 p-2 bg-slate-900/40">
          {query.trim() === '' ? (
            <div className="p-7 text-center text-slate-300 text-xs">
              <span className="text-3xl block mb-2 text-cyan-300">⚡</span>
              <p className="font-semibold text-slate-200 mb-1">{langMode === 'en' ? 'Quick Search across MapleStory Databases' : 'חיפוש מהיר בכל מאגרי מייפל סטורי'}</p>
              <p className="text-slate-400 text-[11px]">{langMode === 'en' ? 'Type any keyword, item, monster, quest, NPC, or skill name.' : 'ניתן להקליד כל מילה, פריט, שלב במדריך, מפלצת או דמות.'}</p>
              
              <div className="mt-4 flex justify-center gap-2 flex-wrap">
                <span className="text-[11px] text-sky-300 font-bold self-center">{langMode === 'en' ? 'Example searches:' : 'חיפושים לדוגמה:'}</span>
                {['Meba', 'Slime', 'Lucky Seven', 'Maya', 'Pan Lid', 'Subway', 'Glove for ATT'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setQuery(chip)}
                    className="px-2.5 py-1 rounded-xl liquid-glass-pill hover:bg-sky-400/20 text-sky-100 text-xs font-semibold border border-sky-300/25 transition"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-slate-300 text-xs">
              <span className="text-2xl block mb-2">🔎</span>
              {langMode === 'en' ? `No results found for "${query}". Try another keyword.` : `לא נמצאו תוצאות עבור "${query}". נסה מילת מפתח אחרת.`}
            </div>
          ) : (
            results.map((res, index) => (
              <div
                key={index}
                onClick={() => {
                  onNavigate(res.targetPage, res.payload, res.categoryFilter, res.jobId);
                  onClose();
                }}
                className="p-3 hover:bg-sky-500/15 rounded-2xl cursor-pointer flex items-center justify-between transition group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl liquid-glass-pill p-1 border border-sky-300/20 group-hover:scale-105 group-hover:border-sky-300/40 transition flex items-center justify-center bg-slate-900/40 shrink-0">
                    {res.spriteUrl ? (
                      <GameAssetImage
                        src={res.spriteUrl}
                        fallbackSrc={res.fallbackUrl}
                        alt={res.title}
                        emojiFallback={res.icon}
                        size="sm"
                      />
                    ) : (
                      <span className="text-xl">{res.icon}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-cyan-300 transition">
                      {res.title}
                    </div>
                    <div className="text-xs text-slate-300">{res.subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full liquid-glass-pill text-cyan-200 border border-cyan-400/30 font-bold">
                    {res.categoryName}
                  </span>
                  <span className="text-sky-300 text-xs group-hover:translate-x-1 transition font-bold">{isRTL ? '←' : '→'}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-900/80 border-t border-sky-400/20 text-center text-[11px] text-slate-300 flex items-center justify-between px-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span>🖱️</span>
            <span>{langMode === 'en' ? 'Click any result to jump directly, or press Escape to close' : 'לחץ על תוצאה למעבר ישיר, או לחץ מחוץ למסגרת לסגירה'}</span>
          </span>
          <span className="font-mono text-cyan-300 font-bold">Ctrl + K / ESC</span>
        </div>

      </div>
    </div>
  );
}
