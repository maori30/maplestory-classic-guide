import React, { useState, useMemo, useRef, useEffect } from 'react';
import { NPCS_DATABASE } from '../data/npcs.js';
import { QUESTS_DATABASE } from '../data/quests.js';

export default function NpcDatabase() {
  const [activeView, setActiveView] = useState('all'); // 'all' | 'npcs' | 'quests'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItemType, setSelectedItemType] = useState('npc'); // 'npc' | 'quest'
  const [selectedNpc, setSelectedNpc] = useState(NPCS_DATABASE[0]);
  const [selectedQuest, setSelectedQuest] = useState(QUESTS_DATABASE[0]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchContainerRef = useRef(null);

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

  // Filtered NPCs
  const filteredNpcs = useMemo(() => {
    if (activeView === 'quests') return [];
    return NPCS_DATABASE.filter(npc => {
      if (selectedCategory !== 'all' && npc.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchName = npc.name.toLowerCase().includes(query);
        const matchNameHe = npc.nameHe.toLowerCase().includes(query);
        const matchTown = npc.town.toLowerCase().includes(query);
        const matchMap = npc.map.toLowerCase().includes(query);
        const matchRole = npc.role.toLowerCase().includes(query);
        const matchDesc = npc.desc.toLowerCase().includes(query);
        const matchThief = (npc.thiefRelevance || '').toLowerCase().includes(query);
        const matchServices = (npc.servicesOrQuests || []).some(s =>
          s.title.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
        );
        const matchItems = (npc.relatedItems || []).some(item => item.toLowerCase().includes(query));

        return matchName || matchNameHe || matchTown || matchMap || matchRole || matchDesc || matchThief || matchServices || matchItems;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, activeView]);

  // Filtered Quests (Deep Search: Titles, Content, Walkthrough, Items, Rewards, NPCs)
  const filteredQuests = useMemo(() => {
    if (activeView === 'npcs') return [];
    return QUESTS_DATABASE.filter(quest => {
      if (selectedCategory !== 'all' && quest.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchName = quest.name.toLowerCase().includes(query);
        const matchNameHe = (quest.nameHe || '').toLowerCase().includes(query);
        const matchNpc = quest.npcName.toLowerCase().includes(query);
        const matchTown = (quest.npcTown || '').toLowerCase().includes(query);
        const matchCategory = (quest.categoryName || '').toLowerCase().includes(query);
        const matchPrereq = (quest.prerequisites || '').toLowerCase().includes(query);
        const matchItems = (quest.itemsNeeded || []).some(i => (typeof i === 'string' ? i : `${i.item} ${i.source || ''}`).toLowerCase().includes(query));
        const matchRewards = (quest.rewards || []).some(r => (typeof r === 'string' ? r : r.reward || '').toLowerCase().includes(query));
        const matchSteps = (quest.walkthrough || quest.steps || []).some(s => s.toLowerCase().includes(query));
        const matchMobs = (quest.monstersToHunt || []).some(m => (typeof m === 'string' ? m : m.monster).toLowerCase().includes(query));

        return matchName || matchNameHe || matchNpc || matchTown || matchCategory || matchPrereq || matchItems || matchRewards || matchSteps || matchMobs;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, activeView]);

  // Unified Autocomplete Suggestions (top 8 matches across both NPCs and Quests)
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.trim().toLowerCase();
    const queryWords = query.split(/\s+/).filter(Boolean);

    const npcMatches = NPCS_DATABASE.filter(npc => {
      const fullText = `${npc.name} ${npc.nameHe} ${npc.town} ${npc.map} ${npc.role}`.toLowerCase();
      const directMatch = fullText.includes(query);
      const wordsMatch = queryWords.every(w => fullText.includes(w));
      return directMatch || wordsMatch;
    }).map(npc => ({ type: 'npc', data: npc }));

    const questMatches = QUESTS_DATABASE.filter(quest => {
      const qText = `${quest.name} ${quest.nameHe || ''} ${quest.npcName} ${quest.npcTown || ''} ${quest.categoryName || ''} ${(quest.walkthrough || quest.steps || []).join(' ')} ${(quest.itemsNeeded || []).map(i => typeof i === 'string' ? i : i.item).join(' ')} ${(quest.rewards || []).map(r => typeof r === 'string' ? r : r.reward || '').join(' ')}`.toLowerCase();
      const directMatch = qText.includes(query);
      const wordsMatch = queryWords.every(w => qText.includes(w));
      return directMatch || wordsMatch;
    }).map(quest => ({ type: 'quest', data: quest }));

    return [...questMatches, ...npcMatches].slice(0, 8);
  }, [searchQuery]);

  const handleSelectSuggestion = (suggestion) => {
    if (suggestion.type === 'npc') {
      setSearchQuery(suggestion.data.name);
      setSelectedNpc(suggestion.data);
      setSelectedItemType('npc');
      if (activeView === 'quests') setActiveView('all');
    } else {
      setSearchQuery(suggestion.data.name);
      setSelectedQuest(suggestion.data);
      setSelectedItemType('quest');
      if (activeView === 'npcs') setActiveView('all');
    }
    setShowSuggestions(false);
  };

  const handleSelectNpc = (npc) => {
    setSelectedNpc(npc);
    setSelectedItemType('npc');
    setShowSuggestions(false);
  };

  const handleSelectQuest = (quest) => {
    setSelectedQuest(quest);
    setSelectedItemType('quest');
    setShowSuggestions(false);
  };

  const jumpToNpcFromQuest = (npcName) => {
    const found = NPCS_DATABASE.find(n => n.name.toLowerCase().includes(npcName.toLowerCase()));
    if (found) {
      setSelectedNpc(found);
      setSelectedItemType('npc');
      setActiveView('npcs');
    }
  };

  return (
    <div className="w-full max-w-6xl space-y-6">
      
      {/* Search Header Banner */}
      <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-visible border border-white/15">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-teal-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/40">
                מאגר דמויות ומדריכי משימות (NPCs & Quests)
              </span>
              <span className="text-xs text-slate-300 font-medium">איתור שמות באנגלית, מיקומים ודרכי השלמה</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
              <span>🏛️</span> מאגר NPCs ומדריכי משימות (Quests & Walkthroughs)
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              חפש לפי שם הדמות באנגלית (Dark Lord, Chrishrama, Icarus, Arwen) או שם המשימה (Flying Pill, Weird Medicine, Dark Marbles, Cursed Dolls). המערכת תציג מיקומים, מפות ומדריך מפורט צעד-אחר-צעד להשלמת המשימה!
            </p>
          </div>

          {/* Counts */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <div className="liquid-glass-pill px-3.5 py-2 rounded-2xl border border-white/15 flex items-center gap-2">
              <span className="text-xs text-slate-300">דמויות:</span>
              <span className="text-base font-black text-teal-300 font-mono">{filteredNpcs.length}</span>
            </div>
            <div className="liquid-glass-pill px-3.5 py-2 rounded-2xl border border-white/15 flex items-center gap-2">
              <span className="text-xs text-slate-300">משימות:</span>
              <span className="text-base font-black text-amber-300 font-mono">{filteredQuests.length}</span>
            </div>
          </div>
        </div>

        {/* View Mode Switcher Tabs */}
        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3 flex-wrap">
          <button
            onClick={() => { setActiveView('all'); setSelectedCategory('all'); }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeView === 'all'
                ? 'liquid-glass-btn-primary text-white shadow-lg shadow-teal-600/40 ring-1 ring-white/30'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>🌐 הכל (NPCs ומשימות)</span>
          </button>
          <button
            onClick={() => { setActiveView('npcs'); setSelectedCategory('all'); }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeView === 'npcs'
                ? 'liquid-glass-accent-teal text-teal-200 border-teal-400/50 shadow-lg shadow-teal-600/30 ring-1 ring-teal-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>👥 דמויות ונותני שירות (NPCs)</span>
          </button>
          <button
            onClick={() => { setActiveView('quests'); setSelectedCategory('all'); }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeView === 'quests'
                ? 'liquid-glass-accent-amber text-amber-200 border-amber-400/50 shadow-lg shadow-amber-600/30 ring-1 ring-amber-300/40'
                : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <span>📜 מדריכי משימות ודרכי השלמה (Quest Walkthroughs)</span>
          </button>
        </div>

        {/* Search Input Field with Unified Autocomplete */}
        <div ref={searchContainerRef} className="relative mb-4 z-50">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onFocus={() => { if (searchQuery.trim()) setShowSuggestions(true); }}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              placeholder="חפש דמות, פריט נדרש, שלב במדריך או משימה (Dark Lord, Icarus, Maya, Squishy Liquid, Oak tree, Cursed Dolls...)"
              className="w-full liquid-glass-input rounded-2xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 outline-none transition shadow-inner pr-10 focus:border-teal-400"
            />
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">
              🔍
            </span>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setShowSuggestions(false);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-xs liquid-glass-pill hover:bg-white/20 text-slate-200 px-2.5 py-1 rounded-xl transition border border-white/20"
              >
                נקה ✕
              </button>
            )}
          </div>

          {/* Autocomplete Suggestions Panel - 100% Opaque & High Z-Index */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-950/98 border-2 border-teal-400/60 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-50 overflow-y-auto max-h-80 divide-y divide-white/10 backdrop-blur-2xl">
              <div className="px-3.5 py-2 liquid-glass-subtle text-[11px] font-bold text-teal-300 flex items-center justify-between border-b border-white/10">
                <span>💡 הצעות חיפוש מהירות (לחץ לבחירה):</span>
                <span className="text-slate-400 font-mono text-[10px]">{suggestions.length} תוצאות</span>
              </div>
              {suggestions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectSuggestion(item)}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl w-8 text-center">{item.data.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm font-mono group-hover:text-teal-300 transition">
                          {item.data.name}
                        </span>
                        <span className="text-xs text-slate-300">({item.data.nameHe})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-300">
                        {item.type === 'npc' ? (
                          <>
                            <span className="text-teal-300 font-medium font-mono">עיר: {item.data.town}</span>
                            <span>•</span>
                            <span>{item.data.role}</span>
                          </>
                        ) : (
                          <>
                            <span className="text-amber-300 font-medium font-mono">NPC: {item.data.npcName}</span>
                            <span>•</span>
                            <span className="text-slate-200 font-mono">רמה {item.data.reqLevel}+</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.type === 'npc' ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300">
                        🏛️ NPC
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300">
                        📜 משימה
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Popular Picks */}
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs text-slate-300">
          <span>חיפושים פופולריים:</span>
          {[
            'I Need', 'Homework', 'Daughter', 'Dark Lord', 'Flying Pill', 'Maya',
            'Weird Medicine', 'Francois', 'Chrishrama', 'Lakelis', 'KPQ', 'Shumi',
            'Cursed Dolls', 'Glass Shoe', 'JM From tha Streetz', 'VIP Black Cab'
          ].map(pick => (
            <button
              key={pick}
              onClick={() => {
                setSearchQuery(pick);
                setShowSuggestions(false);
              }}
              className="liquid-glass-pill hover:bg-white/15 text-slate-200 px-2.5 py-1 rounded-xl border border-white/10 transition font-mono text-[11px]"
            >
              {pick}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (5 cols on lg): Results List */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Section: Quests Results (if in All or Quests view) */}
          {(activeView === 'all' || activeView === 'quests') && filteredQuests.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-amber-300 font-bold px-3 py-2 liquid-glass-subtle rounded-xl border border-amber-500/30">
                <span className="flex items-center gap-1.5">
                  <span>📜</span> משימות וקווסטים ({filteredQuests.length})
                </span>
                <span className="text-[11px] text-slate-400 font-normal">לחץ לצפייה בדרכי השלמה</span>
              </div>

              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                {filteredQuests.map(quest => {
                  const isSelected = selectedItemType === 'quest' && selectedQuest && selectedQuest.id === quest.id;
                  return (
                    <div
                      key={quest.id}
                      onClick={() => handleSelectQuest(quest)}
                      className={`cursor-pointer rounded-2xl p-3 border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'glow-active bg-amber-900/40 border-amber-400 shadow-xl ring-2 ring-amber-400/50'
                          : 'liquid-glass-card hover:border-amber-400/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl liquid-glass-pill border border-white/15 flex items-center justify-center text-xl shadow-inner">
                          {quest.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-white text-xs sm:text-sm font-mono">{quest.name}</h4>
                          </div>
                          <span className="text-xs text-slate-300 block">{quest.nameHe}</span>
                          <span className="text-[10px] text-amber-300 font-medium mt-0.5 block font-mono">
                            NPC: {quest.npcName} ({quest.npcTown || ''})
                          </span>
                        </div>
                      </div>

                      <div className="text-left flex flex-col items-end">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono">
                          Lv. {quest.reqLevel}+
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1 font-mono">
                          {quest.categoryName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section: NPCs Results (if in All or NPCs view) */}
          {(activeView === 'all' || activeView === 'npcs') && filteredNpcs.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-teal-300 font-bold px-3 py-2 liquid-glass-subtle rounded-xl border border-teal-500/30">
                <span className="flex items-center gap-1.5">
                  <span>🏛️</span> דמויות ונותני שירות ({filteredNpcs.length})
                </span>
                <span className="text-[11px] text-slate-400 font-normal">לחץ לצפייה במיקום ומסלול</span>
              </div>

              <div className="space-y-2 max-h-[420px] overflow-y-auto pr-1">
                {filteredNpcs.map(npc => {
                  const isSelected = selectedItemType === 'npc' && selectedNpc && selectedNpc.id === npc.id;
                  return (
                    <div
                      key={npc.id}
                      onClick={() => handleSelectNpc(npc)}
                      className={`cursor-pointer rounded-2xl p-3 border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'glow-active bg-teal-900/40 border-teal-400 shadow-xl ring-2 ring-teal-400/50'
                          : 'liquid-glass-card hover:border-teal-400/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl liquid-glass-pill border border-white/15 flex items-center justify-center text-xl shadow-inner">
                          {npc.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-white text-xs sm:text-sm font-mono">{npc.name}</h4>
                          </div>
                          <span className="text-xs text-slate-300 block">{npc.nameHe}</span>
                          <span className="text-[10px] text-teal-300 font-medium mt-0.5 block truncate max-w-[190px]">
                            {npc.role}
                          </span>
                        </div>
                      </div>

                      <div className="text-left flex flex-col items-end">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 font-mono">
                          {npc.town}
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1 font-mono">
                          {npc.categoryName}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {filteredNpcs.length === 0 && filteredQuests.length === 0 && (
            <div className="liquid-glass rounded-2xl p-8 border border-white/10 text-center">
              <span className="text-3xl block mb-2">🔍</span>
              <p className="text-sm text-slate-200 font-bold mb-1">לא נמצאה דמות או משימה מתאימה</p>
              <p className="text-xs text-slate-400">נסה לחפש באנגלית, לדוגמה: Dark Lord, Icarus, Flying Pill, Maya, Shumi, Lakelis</p>
            </div>
          )}

        </div>

        {/* Right Column (7 cols on lg): Detailed View (Quest OR NPC) */}
        <div className="lg:col-span-7">
          
          {/* ========================================================= */}
          {/* CASE 1: QUEST IS SELECTED (דרכים להשלים את המשימה) */}
          {/* ========================================================= */}
          {selectedItemType === 'quest' && selectedQuest ? (
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 border border-amber-400/40 shadow-2xl relative overflow-hidden space-y-5">
              
              {/* Header Card */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-pill border border-amber-400/40 flex items-center justify-center text-4xl shadow-xl shadow-amber-900/30">
                    {selectedQuest.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                        {selectedQuest.categoryName}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full liquid-glass-pill text-slate-200 border border-white/15 font-mono">
                        רמה נדרשת: {selectedQuest.reqLevel}+
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight mt-1">
                      {selectedQuest.name}
                    </h3>
                    <span className="text-sm text-amber-200 font-medium">{selectedQuest.nameHe}</span>
                  </div>
                </div>

                <div className="text-left flex flex-col items-end gap-1">
                  <button
                    onClick={() => jumpToNpcFromQuest(selectedQuest.npcName)}
                    className="text-xs px-3 py-1.5 rounded-xl liquid-glass-pill hover:bg-white/15 border border-teal-400/40 text-teal-300 font-mono transition flex items-center gap-1.5"
                  >
                    <span>🏛️ NPC:</span>
                    <strong>{selectedQuest.npcName}</strong>
                  </button>
                  <span className="text-[11px] text-slate-300 font-mono">
                    עיר: {selectedQuest.npcTown || ''}
                  </span>
                </div>
              </div>

              {/* Start Location & Prerequisites Bar */}
              <div className="liquid-glass-subtle rounded-2xl p-3.5 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                  <span className="text-slate-200">
                    📍 <strong>איפה מתחילים:</strong> {selectedQuest.npcName} {selectedQuest.npcLocation ? `ב-${selectedQuest.npcLocation}` : ''}
                  </span>
                  {selectedQuest.prerequisites && (
                    <span className="text-amber-300 font-mono text-[11px] liquid-glass-pill px-2.5 py-0.5 rounded-lg border border-white/10">
                      תנאי מוקדם: {selectedQuest.prerequisites}
                    </span>
                  )}
                </div>
              </div>

              {/* Required Items & Materials Table */}
              {selectedQuest.itemsNeeded && selectedQuest.itemsNeeded.length > 0 && (
                <div className="space-y-2 liquid-glass-subtle rounded-2xl p-4 border border-white/10">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>🎒</span> חומרים ומצרכים נדרשים למשימה (Items & Materials Needed):
                  </h4>
                  <div className="space-y-2 pt-1">
                    {selectedQuest.itemsNeeded.map((itemObj, iIdx) => (
                      <div key={iIdx} className="flex items-center justify-between liquid-glass-pill p-3 rounded-xl border border-white/10 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-white text-sm">
                            {typeof itemObj === 'string' ? itemObj : itemObj.item}
                          </span>
                          {typeof itemObj === 'object' && itemObj.count && (
                            <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono text-[11px]">
                              כמות: {itemObj.count}
                            </span>
                          )}
                        </div>
                        {typeof itemObj === 'object' && itemObj.source && (
                          <span className="text-slate-300 text-[11px]">
                            מקור: {itemObj.source}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-Step Completion Guide (דרכים להשלים את המשימה) */}
              <div className="space-y-3 liquid-glass-panel rounded-2xl p-4 border border-amber-400/30">
                <h4 className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <span>🧭</span> מדריך השלמת המשימה צעד-אחר-צעד (Walkthrough Guide):
                </h4>
                <div className="space-y-2.5 pt-1">
                  {(selectedQuest.walkthrough || selectedQuest.steps || []).map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100 leading-relaxed">
                      <span className="w-6 h-6 rounded-full bg-amber-900/80 text-amber-300 border border-amber-400/50 flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              <div className="space-y-2 liquid-glass-subtle rounded-2xl p-4 border border-white/10">
                <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🎁</span> תגמולי סיום המשימה (Quest Rewards):
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {(selectedQuest.rewards || []).map((rew, rIdx) => {
                    const rewText = typeof rew === 'string' ? rew : (rew.reward || '');
                    return (
                      <span
                        key={rIdx}
                        className="text-xs liquid-glass-pill px-3 py-1.5 rounded-xl border border-emerald-400/40 text-emerald-200 font-medium flex items-center gap-1.5"
                      >
                        <span>✓</span>
                        <span>{rewText}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Thief Tactical Tip */}
              {selectedQuest.thiefRelevance && (
                <div className="liquid-glass-accent-teal rounded-2xl p-3.5 border border-teal-400/40 text-xs sm:text-sm text-teal-100">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5 font-bold">
                    <span>💡</span> חשיבות למתנקש וטיפ טקטי:
                  </strong>
                  {selectedQuest.thiefRelevance}
                </div>
              )}

            </div>
          ) : selectedNpc ? (
            
            /* ========================================================= */
            /* CASE 2: NPC IS SELECTED (דמויות, שמות באנגלית ודרכי הגעה) */
            /* ========================================================= */
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 border border-teal-400/30 shadow-2xl relative overflow-hidden space-y-5">
              
              {/* Header Card */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-pill border border-teal-400/40 flex items-center justify-center text-4xl shadow-xl shadow-teal-900/30">
                    {selectedNpc.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30">
                        {selectedNpc.categoryName}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full liquid-glass-pill text-slate-200 border border-white/15 font-mono">
                        עיר: {selectedNpc.town}
                      </span>
                    </div>
                    {/* English Name Primary */}
                    <h3 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight mt-1">
                      {selectedNpc.name}
                    </h3>
                    <span className="text-sm text-teal-200 font-medium">{selectedNpc.nameHe}</span>
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-xs px-3 py-1.5 rounded-xl liquid-glass-pill border border-white/15 text-teal-300 font-mono block">
                    {selectedNpc.town}
                  </span>
                </div>
              </div>

              {/* Exact Map Location */}
              <div className="liquid-glass-subtle rounded-2xl p-3.5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-300 block font-semibold">📍 מיקום מפה מדויק:</span>
                  <span className="text-sm text-white font-bold">{selectedNpc.map}</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-xl liquid-glass-pill text-teal-300 border border-teal-400/30">
                  {selectedNpc.role}
                </span>
              </div>

              {/* Description Box */}
              <div className="liquid-glass-subtle rounded-2xl p-4 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">אודות הדמות ותפקידה:</span>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedNpc.desc}
                </p>
              </div>

              {/* Thief Relevance */}
              {selectedNpc.thiefRelevance && (
                <div className="liquid-glass-accent-teal rounded-2xl p-3.5 border border-teal-400/30 text-xs sm:text-sm text-teal-100">
                  <strong className="text-teal-300 block mb-1 flex items-center gap-1.5 font-bold">
                    <span>💡</span> חשיבות למתנקש וטיפים טקטיים (Thief Relevance):
                  </strong>
                  {selectedNpc.thiefRelevance}
                </div>
              )}

              {/* Travel Directions */}
              <div className="space-y-2 liquid-glass-subtle rounded-2xl p-4 border border-white/10">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🚶‍♂️</span> איך מגיעים צעד-אחר-צעד (Travel Directions):
                </h4>
                <div className="space-y-2.5 pt-1">
                  {selectedNpc.directions.map((dir, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-teal-900/60 text-teal-300 border border-teal-500/40 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{dir}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services & Quests list */}
              {selectedNpc.servicesOrQuests && selectedNpc.servicesOrQuests.length > 0 && (
                <div className="space-y-3 pt-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span>📋</span> שירותים, משימות ותפקידים (Services & Quests):
                  </h4>

                  <div className="space-y-2.5">
                    {selectedNpc.servicesOrQuests.map((svc, idx) => (
                      <div key={idx} className="liquid-glass-subtle rounded-2xl p-3.5 border border-white/10 space-y-1.5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="font-bold text-white text-sm">{svc.title}</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full liquid-glass-pill border border-white/10 text-teal-300">
                            {svc.reqLevel}
                          </span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          {svc.desc}
                        </p>
                        {svc.rewards && (
                          <div className="text-[11px] text-amber-300 font-medium pt-1">
                            <strong>תגמול / עלות:</strong> {svc.rewards}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Items */}
              {selectedNpc.relatedItems && selectedNpc.relatedItems.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>💎</span> פריטים קשורים לדמות (Related Items):
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNpc.relatedItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs liquid-glass-pill px-3 py-1.5 rounded-xl border border-white/10 text-teal-300 font-mono"
                      >
                        • {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="liquid-glass rounded-3xl p-12 border border-white/10 text-center">
              <span className="text-4xl block mb-2">🏛️</span>
              <p className="text-base text-slate-100 font-bold mb-1">בחר דמות או משימה מהרשימה</p>
              <p className="text-xs text-slate-300">כדי לראות את מיקומה המדויק, תפקידיה, או מדריך שלב-אחר-שלב להשלמת המשימה.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
