import React, { useState, useMemo, useRef, useEffect } from 'react';
import { MONSTERS_DATABASE } from '../data/monsters.js';
import HiddenPortalGuide from './HiddenPortalGuide.jsx';
import VisualTravelGuide from './VisualTravelGuide.jsx';

export default function MonsterDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMonster, setSelectedMonster] = useState(MONSTERS_DATABASE[0]);
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

  // Filtering logic
  const filteredMonsters = useMemo(() => {
    return MONSTERS_DATABASE.filter(monster => {
      // Category match
      if (selectedCategory !== 'all' && monster.category !== selectedCategory) {
        return false;
      }
      // Search match (English name, Hebrew name, town, location, or drop)
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchName = monster.name.toLowerCase().includes(query);
        const matchNameHe = monster.nameHe.includes(query);
        const matchTown = monster.town.toLowerCase().includes(query);
        const matchLoc = monster.locations.some(loc => loc.toLowerCase().includes(query));
        const matchDrops = monster.notableDrops.some(drop => drop.toLowerCase().includes(query));
        return matchName || matchNameHe || matchTown || matchLoc || matchDrops;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Autocomplete suggestions (top 8 matches across all monsters)
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.trim().toLowerCase();

    return MONSTERS_DATABASE.filter(m => {
      const matchName = m.name.toLowerCase().includes(query);
      const matchNameHe = m.nameHe.toLowerCase().includes(query);
      const matchTown = m.town.toLowerCase().includes(query);
      const matchDrops = m.notableDrops.some(d => d.toLowerCase().includes(query));
      return matchName || matchNameHe || matchTown || matchDrops;
    }).slice(0, 8);
  }, [searchQuery]);

  const handleSelectSuggestion = (monster) => {
    setSearchQuery(monster.name);
    setSelectedMonster(monster);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-6xl space-y-6">
      
      {/* Search Header Banner */}
      <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-visible border border-white/15">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                מאגר מפלצות קלאסי (Pre-BigBang)
              </span>
              <span className="text-xs text-slate-300 font-medium">איתור מפות ודרכי הגעה</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
              <span>🧭</span> מאגר מפלצות ודרכי הגעה (Monster Locator)
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              הקלד שם מפלצת כדי לראות בדיוק היכן היא מופיעה, מאיזו עיר יוצאים, ואיך מגיעים אליה צעד-אחר-צעד.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="liquid-glass-pill px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 self-start md:self-auto shadow-inner">
            <span className="text-xs text-slate-300">מפלצות במאגר:</span>
            <span className="text-xl font-black text-sky-200 font-mono">{filteredMonsters.length} / {MONSTERS_DATABASE.length}</span>
          </div>
        </div>

        {/* Search Input Field with Autocomplete */}
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
              placeholder="הקלד שם מפלצת (לדוגמה: Slime, Wild Boar, Drake, Mushmom, פטריה, חזיר בר...)"
              className="w-full liquid-glass-input rounded-2xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 outline-none transition shadow-inner pr-10 focus:border-sky-400"
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-950/98 border-2 border-sky-400/60 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-50 overflow-y-auto max-h-80 divide-y divide-white/10 backdrop-blur-2xl">
              <div className="px-3.5 py-2 liquid-glass-subtle text-[11px] font-bold text-sky-300 flex items-center justify-between border-b border-white/10">
                <span>💡 הצעות חיפוש מהירות למפלצות:</span>
                <span className="text-slate-400 font-mono text-[10px]">{suggestions.length} תוצאות</span>
              </div>
              {suggestions.map((mob) => (
                <div
                  key={mob.id}
                  onClick={() => handleSelectSuggestion(mob)}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl w-8 text-center">{mob.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm font-mono group-hover:text-sky-300 transition">
                          {mob.name}
                        </span>
                        <span className="text-xs text-slate-300">({mob.nameHe})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-300">
                        <span className="text-sky-300 font-medium font-mono">עיר: {mob.town}</span>
                        <span>•</span>
                        <span>שלל בולט: {mob.starsClaws}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300">
                      Lv. {mob.level}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {mob.exp} EXP
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[
            { id: 'all', label: 'כל המפלצות' },
            { id: '1-15', label: 'רמות 1-15 (מתחילים)' },
            { id: '16-25', label: 'רמות 16-25 (Meba ופטריות)' },
            { id: '26-35', label: 'רמות 26-35 (חזירי בר, לודי ו-KPQ)' },
            { id: '36-50+', label: 'רמות 36-50 (LPQ, גולמים, דראייקים ורוחות)' },
            { id: '51-70+', label: 'רמות 51-70+ (OPQ, אל נאת\', סליפיווד וזאבים)' },
            { id: 'bosses', label: '👑 בוסים אגדיים' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'liquid-glass-btn-primary text-white shadow-lg shadow-sky-600/40 ring-1 ring-white/30'
                  : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Popular Picks */}
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs text-slate-300">
          <span>חיפושים מומלצים:</span>
          {['Wild Boar', 'Slime', 'Bubbling', 'King Slime', 'Drake', 'Mushmom', 'Green Mushroom'].map(mName => (
            <button
              key={mName}
              onClick={() => {
                setSearchQuery(mName);
                setShowSuggestions(false);
              }}
              className="liquid-glass-pill hover:bg-white/15 text-slate-200 px-2.5 py-1 rounded-xl border border-white/10 transition font-mono text-[11px]"
            >
              {mName}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout: Results List (Right) & Monster Detailed Route (Left) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Monster Selector / Results (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300 px-1 font-medium">
            <span>תוצאות חיפוש ({filteredMonsters.length})</span>
            <span>לחץ על מפלצת לצפייה במסלול הגעה</span>
          </div>

          <div className="space-y-2 max-h-[660px] overflow-y-auto pr-1">
            {filteredMonsters.length === 0 ? (
              <div className="liquid-glass rounded-2xl p-8 border border-white/10 text-center">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm text-slate-100 font-bold mb-1">לא נמצאה מפלצת מתאימה</p>
                <p className="text-xs text-slate-400">נסה לחפש באנגלית או בעברית, לדוגמה: Slime, Mushroom, Boar</p>
              </div>
            ) : (
              filteredMonsters.map(monster => {
                const isSelected = selectedMonster && selectedMonster.id === monster.id;
                return (
                  <div
                    key={monster.id}
                    onClick={() => {
                      setSelectedMonster(monster);
                      setShowSuggestions(false);
                    }}
                    className={`cursor-pointer rounded-2xl p-3.5 border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'glow-active bg-sky-950/70 border-sky-400 shadow-xl ring-2 ring-sky-400/50'
                        : 'liquid-glass-card hover:border-sky-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl liquid-glass-pill border border-white/15 flex items-center justify-center text-2xl shadow-inner">
                        {monster.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm font-mono">{monster.name}</h4>
                          <span className="text-xs text-slate-300">({monster.nameHe})</span>
                        </div>
                        <span className="text-[11px] text-sky-300 block font-mono">
                          עיר קרובה: {monster.town}
                        </span>
                      </div>
                    </div>

                    <div className="text-left flex flex-col items-end">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300">
                        Lv. {monster.level}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1 font-mono">
                        {monster.exp} EXP
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Detailed Monster View & Travel Directions (7 cols on lg) */}
        <div className="lg:col-span-7">
          {selectedMonster ? (
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 border border-sky-400/30 shadow-2xl relative overflow-hidden space-y-5">
              
              {/* Header Card */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-pill border border-sky-400/40 flex items-center justify-center text-4xl shadow-xl shadow-sky-900/30">
                    {selectedMonster.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                        רמה {selectedMonster.level}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/40 font-mono">
                        {selectedMonster.exp} EXP
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight mt-0.5">
                      {selectedMonster.name}
                    </h3>
                    <span className="text-sm text-sky-200 font-medium">{selectedMonster.nameHe}</span>
                  </div>
                </div>

                <div className="text-left">
                  <span className="text-xs px-3 py-1.5 rounded-xl liquid-glass-pill border border-white/15 text-sky-300 font-mono block">
                    עיר: {selectedMonster.town}
                  </span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[11px] text-slate-300 block">נקודות חיים (HP)</span>
                  <span className="text-sm font-bold text-red-300 font-mono">{selectedMonster.hp.toLocaleString()}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[11px] text-slate-300 block">נקודות מאנה (MP)</span>
                  <span className="text-sm font-bold text-sky-300 font-mono">{selectedMonster.mp.toLocaleString()}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[11px] text-slate-300 block">ניסיון (EXP)</span>
                  <span className="text-sm font-bold text-amber-300 font-mono">+{selectedMonster.exp}</span>
                </div>
                <div className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[11px] text-slate-300 block">שלל גנבים</span>
                  <span className="text-xs font-bold text-sky-300 truncate block mt-0.5">{selectedMonster.starsClaws}</span>
                </div>
              </div>

              {/* Spawn Locations List */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📍</span> מפות שבהן המפלצת נוצרת (Spawn Maps):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMonster.locations.map((loc, idx) => (
                    <span
                      key={idx}
                      className="text-xs liquid-glass-pill px-3 py-1.5 rounded-xl border border-white/10 text-slate-100 font-medium flex items-center gap-1.5"
                    >
                      <span className="text-sky-300 font-mono">#{idx + 1}</span>
                      <span>{loc}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Travel & Arrival Guide (Unified for ALL monsters & all locations) */}
              <VisualTravelGuide monster={selectedMonster} />

              {/* Notable Drops */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                  <span>🎁</span> שלל בולט ומגילות (Notable Drops):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMonster.notableDrops.map((drop, idx) => (
                    <span
                      key={idx}
                      className="text-xs liquid-glass-pill px-3 py-1.5 rounded-xl border border-white/10 text-slate-200 font-mono"
                    >
                      • {drop}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="liquid-glass rounded-3xl p-12 border border-white/10 text-center">
              <span className="text-4xl block mb-2">🧭</span>
              <p className="text-base text-slate-100 font-bold mb-1">בחר מפלצת מהרשימה</p>
              <p className="text-xs text-slate-300">כדי לראות את כל דרכי ההגעה, הפורטלים, והנקודות הבטוחות.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
