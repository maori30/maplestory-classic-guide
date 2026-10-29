import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ITEMS_DATABASE } from '../data/items.js';

export default function ItemDatabase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(ITEMS_DATABASE[0]);
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
  const filteredItems = useMemo(() => {
    return ITEMS_DATABASE.filter(item => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchNameHe = item.nameHe.toLowerCase().includes(query);
        const matchCategory = item.categoryName.toLowerCase().includes(query);
        const matchDesc = item.desc.toLowerCase().includes(query);
        const matchStats = (item.stats || '').toLowerCase().includes(query);
        const matchObtain = (item.obtainTypeHe || '').toLowerCase().includes(query);

        // Match monster drops
        const matchMonsters = (item.droppedBy || []).some(m => 
          m.monsterName.toLowerCase().includes(query) || 
          m.monsterNameHe.toLowerCase().includes(query) ||
          m.town.toLowerCase().includes(query) ||
          m.maps.some(map => map.toLowerCase().includes(query))
        );

        // Match shops
        const matchShops = (item.soldInShops || []).some(s =>
          s.shopName.toLowerCase().includes(query) ||
          s.npc.toLowerCase().includes(query) ||
          s.town.toLowerCase().includes(query)
        );

        return matchName || matchNameHe || matchCategory || matchDesc || matchStats || matchObtain || matchMonsters || matchShops;
      }
      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Autocomplete Suggestions (top 8 matches across the entire database)
  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.trim().toLowerCase();

    return ITEMS_DATABASE.filter(item => {
      const matchName = item.name.toLowerCase().includes(query);
      const matchNameHe = item.nameHe.toLowerCase().includes(query);
      const matchCategory = item.categoryName.toLowerCase().includes(query);
      const matchMonsters = (item.droppedBy || []).some(m =>
        m.monsterName.toLowerCase().includes(query) || m.monsterNameHe.toLowerCase().includes(query)
      );
      const matchShops = (item.soldInShops || []).some(s =>
        s.shopName.toLowerCase().includes(query) || s.town.toLowerCase().includes(query)
      );
      return matchName || matchNameHe || matchCategory || matchMonsters || matchShops;
    }).slice(0, 8);
  }, [searchQuery]);

  const handleSelectSuggestion = (item) => {
    setSearchQuery(item.name);
    setSelectedItem(item);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-6xl space-y-6">
      
      {/* Search Header Banner */}
      <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-visible border border-white/15">
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                מאגר פריטים, חנויות ושלל (Drop & Shop Locator)
              </span>
              <span className="text-xs text-slate-300 font-medium">איתור פריטים, שיקויים, חנויות ודרכי הגעה</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
              <span>💎</span> מאגר פריטים, חנויות ושלל מפלצות
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              חפש כל פריט במשחק — שיקויי Pure Water, כוכבי הטלה, כפפות Meba, שריונות ומגילות. המערכת תציג היכן קונים בחנות או מאיזו מפלצת הוא נופל!
            </p>
          </div>

          <div className="liquid-glass-pill px-4 py-2.5 rounded-2xl border border-white/15 flex items-center gap-3 self-start md:self-auto shadow-inner">
            <span className="text-xs text-slate-300">פריטים במאגר:</span>
            <span className="text-xl font-black text-amber-300 font-mono">{filteredItems.length} / {ITEMS_DATABASE.length}</span>
          </div>
        </div>

        {/* Search Input Field with Interactive Autocomplete Dropdown */}
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
              placeholder="הקלד שם פריט (לדוגמה: Pure Water, Steely, Ilbi, Meba, Saunabi, Pan Lid, Claw 60%, כוכבים, שיקוי...)"
              className="w-full liquid-glass-input rounded-2xl px-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 outline-none transition shadow-inner pr-10 focus:border-amber-400"
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
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-950/98 border-2 border-amber-400/60 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-50 overflow-y-auto max-h-80 divide-y divide-white/10 backdrop-blur-2xl">
              <div className="px-3.5 py-2 liquid-glass-subtle text-[11px] font-bold text-amber-300 flex items-center justify-between border-b border-white/10">
                <span>💡 הצעות חיפוש מהירות (לחץ לבחירה):</span>
                <span className="text-slate-400 font-mono text-[10px]">{suggestions.length} תוצאות</span>
              </div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item)}
                  className="px-4 py-3 hover:bg-white/10 cursor-pointer flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl w-8 text-center">{item.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm font-mono group-hover:text-amber-300 transition">
                          {item.name}
                        </span>
                        <span className="text-xs text-slate-300">({item.nameHe})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-300">
                        <span className="text-amber-300 font-medium">{item.categoryName}</span>
                        <span>•</span>
                        <span>{item.stats}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {item.soldInShops && item.soldInShops.length > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                        🛒 בחנות ({item.soldInShops[0].town})
                      </span>
                    )}
                    {item.droppedBy && item.droppedBy.length > 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/40">
                        👾 {item.droppedBy.length} {item.droppedBy.length === 1 ? 'מפלצת' : 'מפלצות'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {[
            { id: 'all', label: 'כל הפריטים' },
            { id: 'potions', label: '🧪 שיקויים ומזון (Potions & Use)' },
            { id: 'stars', label: '⭐ כוכבי הטלה (Stars)' },
            { id: 'claws', label: '🥊 כפפות מתנקש (Claws)' },
            { id: 'armors', label: '🥋 שריונות, כובעים וגלימות' },
            { id: 'scrolls', label: '📜 מגילות שדרוג (Scrolls)' },
            { id: 'etc', label: '📦 פריטי קווסט ומסחר' }
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs px-3.5 py-2 rounded-xl font-bold transition flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? 'liquid-glass-accent-amber text-amber-200 border-amber-400/50 shadow-lg shadow-amber-600/30 ring-1 ring-amber-300/40'
                  : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Popular Picks */}
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs text-slate-300">
          <span>חיפושים פופולריים:</span>
          {['Pure Water', 'Sauna Robe', 'Warrior Potion', 'Ilbi', 'Steely', 'Tobis', 'Meba', 'Brown Bamboo Hat', 'Pan Lid', 'Claw for ATT 60%'].map(iName => (
            <button
              key={iName}
              onClick={() => {
                setSearchQuery(iName);
                setShowSuggestions(false);
              }}
              className="liquid-glass-pill hover:bg-white/15 text-slate-200 px-2.5 py-1 rounded-xl border border-white/10 transition font-mono text-[11px]"
            >
              {iName}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Items List (5 cols on lg) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-300 px-1 font-medium">
            <span>תוצאות חיפוש ({filteredItems.length})</span>
            <span>לחץ על פריט לצפייה בפרטים, חנויות ומסלולי הגעה</span>
          </div>

          <div className="space-y-2 max-h-[660px] overflow-y-auto pr-1">
            {filteredItems.length === 0 ? (
              <div className="liquid-glass rounded-2xl p-8 border border-white/10 text-center">
                <span className="text-3xl block mb-2">🔍</span>
                <p className="text-sm text-slate-100 font-bold mb-1">לא נמצא פריט מתאים</p>
                <p className="text-xs text-slate-400">נסה לחפש באנגלית או בעברית, לדוגמה: Pure Water, Steely, Meba, Pan Lid</p>
              </div>
            ) : (
              filteredItems.map(item => {
                const isSelected = selectedItem && selectedItem.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item);
                      setShowSuggestions(false);
                    }}
                    className={`cursor-pointer rounded-2xl p-3.5 border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'glow-active bg-amber-900/40 border-amber-400 shadow-xl ring-2 ring-amber-400/50'
                        : 'liquid-glass-card hover:border-amber-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl liquid-glass-pill border border-white/15 flex items-center justify-center text-2xl shadow-inner">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm font-mono">{item.name}</h4>
                        </div>
                        <span className="text-xs text-slate-300 block">{item.nameHe}</span>
                        
                        {/* Source Badges */}
                        <div className="flex items-center gap-1.5 mt-1">
                          {item.soldInShops && item.soldInShops.length > 0 && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                              🛒 חנות ({item.soldInShops[0].town})
                            </span>
                          )}
                          {item.droppedBy && item.droppedBy.length > 0 && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-200 border border-sky-400/40">
                              👾 מפלצות ({item.droppedBy.length})
                            </span>
                          )}
                          {item.quest && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/40">
                              📜 קווסט
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-left flex flex-col items-end">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300">
                        {item.categoryName}
                      </span>
                      {item.reqLevel > 1 && (
                        <span className="text-[10px] text-slate-400 mt-1 font-mono">
                          Lv. {item.reqLevel}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Detailed Item View & Dropping Monsters + Shops (7 cols on lg) */}
        <div className="lg:col-span-7">
          {selectedItem ? (
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 border border-amber-400/30 shadow-2xl relative overflow-hidden space-y-5">
              
              {/* Header Card */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-16 h-16 rounded-2xl liquid-glass-pill border border-amber-400/40 flex items-center justify-center text-4xl shadow-xl shadow-amber-900/30">
                    {selectedItem.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                        {selectedItem.categoryName}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full liquid-glass-pill text-slate-200 border border-white/15 font-mono">
                        {selectedItem.obtainTypeHe}
                      </span>
                      {selectedItem.reqLevel > 1 && (
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full liquid-glass-pill text-slate-200 border border-white/15 font-mono">
                          דרישת רמה: {selectedItem.reqLevel}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight mt-1">
                      {selectedItem.name}
                    </h3>
                    <span className="text-sm text-amber-200 font-medium">{selectedItem.nameHe}</span>
                  </div>
                </div>

                <div className="text-left flex flex-col items-end gap-1">
                  {selectedItem.soldInShops && selectedItem.soldInShops.length > 0 && (
                    <span className="text-xs px-2.5 py-1 rounded-xl liquid-glass-pill border border-emerald-400/40 text-emerald-300 font-mono">
                      🛒 {selectedItem.soldInShops.length} חנויות
                    </span>
                  )}
                  {selectedItem.droppedBy && selectedItem.droppedBy.length > 0 && (
                    <span className="text-xs px-2.5 py-1 rounded-xl liquid-glass-pill border border-sky-400/40 text-sky-200 font-mono">
                      👾 {selectedItem.droppedBy.length} מפלצות
                    </span>
                  )}
                </div>
              </div>

              {/* Stats & Description Box */}
              <div className="liquid-glass-subtle rounded-2xl p-4 border border-white/10 space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold text-amber-300">נתוני פריט (Stats & Effect):</span>
                  <span className="text-xs text-white font-mono font-bold liquid-glass-pill px-3 py-1 rounded-xl border border-white/15">
                    {selectedItem.stats}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
                  {selectedItem.desc}
                </p>
              </div>

              {/* Thief Tactical Tip */}
              <div className="liquid-glass-accent-amber rounded-2xl p-3.5 border border-amber-400/40 text-xs sm:text-sm text-amber-100">
                <strong className="text-amber-300 block mb-1 flex items-center gap-1.5 font-bold">
                  <span>💡</span> חשיבות למתנקש (Thief Strategy):
                </strong>
                {selectedItem.thiefTip}
              </div>

              {/* SHOPS SECTION (if item can be bought in shops) */}
              {selectedItem.soldInShops && selectedItem.soldInShops.length > 0 && (
                <div className="space-y-3 pt-1">
                  <h4 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                    <span>🛒</span> איפה קונים בחנות? (Shop Locations & Prices):
                  </h4>

                  <div className="space-y-3">
                    {selectedItem.soldInShops.map((shop, sIdx) => (
                      <div key={sIdx} className="liquid-glass-subtle rounded-2xl p-4 border border-emerald-400/30 space-y-2.5">
                        
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <div>
                            <span className="font-bold text-white text-sm block">{shop.shopName}</span>
                            <span className="text-xs text-slate-300">מוכר: <strong className="text-emerald-300">{shop.npc}</strong></span>
                          </div>
                          <div className="text-left flex items-center gap-2">
                            <span className="text-xs font-mono font-black px-3 py-1 rounded-xl liquid-glass-pill border border-emerald-400/40 text-amber-300">
                              💰 {shop.price}
                            </span>
                            <span className="text-xs px-2.5 py-1 rounded-xl liquid-glass-pill border border-white/15 text-emerald-200 font-mono">
                              {shop.town}
                            </span>
                          </div>
                        </div>

                        <div className="liquid-glass-pill p-3 rounded-xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                          <strong className="text-emerald-300 block mb-0.5">🚶‍♂️ דרך הגעה מדויקת לחנות:</strong>
                          {shop.directions}
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* QUEST SECTION (if item comes from quest) */}
              {selectedItem.quest && (
                <div className="liquid-glass-accent-teal rounded-2xl p-4 border border-teal-400/40 space-y-2">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-bold text-teal-300 text-sm flex items-center gap-2">
                      <span>📜</span> משימת קווסט: {selectedItem.quest.questName}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full liquid-glass-pill text-teal-200 border border-teal-400/30">
                      רמה {selectedItem.quest.reqLevel}+
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>NPC מקבל המשימה:</strong> {selectedItem.quest.npc} ({selectedItem.quest.town})
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    <strong>הנחיות:</strong> {selectedItem.quest.directions}
                  </p>
                </div>
              )}

              {/* MONSTERS SECTION (if item drops from monsters) */}
              {selectedItem.droppedBy && selectedItem.droppedBy.length > 0 && (
                <div className="space-y-3 pt-1">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span>👾</span> מפלצות שמפילות פריט זה ומסלול הגעה (Dropping Monsters & Maps):
                  </h4>

                  <div className="space-y-3">
                    {selectedItem.droppedBy.map((mob, idx) => (
                      <div key={idx} className="liquid-glass-subtle rounded-2xl p-4 border border-white/10 space-y-3">
                        
                        {/* Monster Sub-Header */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{mob.monsterIcon}</span>
                            <div>
                              <span className="font-bold text-white text-sm font-mono block">{mob.monsterName}</span>
                              <span className="text-xs text-slate-300">({mob.monsterNameHe})</span>
                            </div>
                          </div>
                          <div className="text-left flex items-center gap-2">
                            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300">
                              Lv. {mob.monsterLevel}
                            </span>
                            <span className="text-xs px-2.5 py-0.5 rounded-full liquid-glass-pill border border-sky-400/40 text-sky-200">
                              {mob.town}
                            </span>
                          </div>
                        </div>

                        {/* Maps */}
                        <div className="text-xs">
                          <span className="text-slate-300 block mb-1 font-semibold">📍 מפות שבהן המפלצת נוצרת:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {mob.maps.map((mapName, mIdx) => (
                              <span key={mIdx} className="liquid-glass-pill px-2.5 py-1 rounded-lg border border-white/10 text-white font-medium text-[11px]">
                                {mapName}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Directions */}
                        <div className="liquid-glass-pill p-3 rounded-xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                          <strong className="text-amber-300 block mb-0.5">🚶‍♂️ דרך הגעה מדויקת:</strong>
                          {mob.directions}
                        </div>

                        {/* Safe Spot */}
                        {mob.safeSpot && (
                          <div className="liquid-glass-pill p-3 rounded-xl border border-white/10 text-xs text-slate-300 leading-relaxed">
                            <strong className="text-indigo-300 block mb-0.5">🛡️ נקודה בטוחה לתקיפה:</strong>
                            {mob.safeSpot}
                          </div>
                        )}

                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ) : (
            <div className="liquid-glass rounded-3xl p-12 border border-white/10 text-center">
              <span className="text-4xl block mb-2">💎</span>
              <p className="text-base text-slate-100 font-bold mb-1">בחר פריט מהרשימה</p>
              <p className="text-xs text-slate-400">כדי לראות את כל החנויות שמוכרות אותו או המפלצות שמפילות אותו ודרכי ההגעה.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
