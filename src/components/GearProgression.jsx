import { useLanguage } from '../context/LanguageContext.jsx';
import React, { useState, useMemo } from 'react';
import { WEAPONS_BY_JOB } from '../data/weaponsData.js';
import { ESSENTIAL_GEAR } from '../data/gear.js';
import { GameAssetImage } from './GameAssetImage.jsx';
import {
  getWeaponIconUrl,
  getWeaponIconFallback,
  getDropIconUrl,
  getDropIconFallback
} from '../data/itemAssets.js';

export default function GearProgression({
  currentLevel = 10,
  currentBuild = 'dexless',
  activeJobData,
  onNavigateToSearch
}) {
  const jobId = activeJobData?.id || 'assassin';
  const jobWeaponsData = WEAPONS_BY_JOB[jobId] || WEAPONS_BY_JOB['assassin'];
  const isAssassin = jobId === 'assassin';

  const [activeCategory, setActiveCategory] = useState('weapons');
  const [filterBuild, setFilterBuild] = useState(currentBuild);

  // Weapons list for active class
  const weaponsList = useMemo(() => {
    const allJobWeapons = jobWeaponsData.weapons || [];
    return allJobWeapons.filter(w => {
      if (filterBuild === 'all') return true;
      if (filterBuild === 'dexless' || filterBuild === 'lukless' || filterBuild === 'strless') {
        return w.suitableFor === 'dexless' || w.suitableFor === 'both';
      }
      if (filterBuild === 'standard' || filterBuild === 'regular') {
        return w.suitableFor === 'standard' || w.suitableFor === 'both';
      }
      return true;
    });
  }, [jobWeaponsData, filterBuild]);

  const [selectedWeapon, setSelectedWeapon] = useState(() => weaponsList[0] || jobWeaponsData.weapons[0]);
  const [selectedSecondary, setSelectedSecondary] = useState(() => (jobWeaponsData.secondary && jobWeaponsData.secondary[0]) || null);

  // Sync when active job or list changes
  React.useEffect(() => {
    if (weaponsList.length > 0) {
      setSelectedWeapon(weaponsList[0]);
    }
    if (jobWeaponsData.secondary && jobWeaponsData.secondary.length > 0) {
      setSelectedSecondary(jobWeaponsData.secondary[0]);
    }
  }, [weaponsList, jobWeaponsData]);

  const jobTitle = langMode === 'en' ? (activeJobData?.name || 'Assassin') : (activeJobData ? activeJobData.nameHe : 'מתנקש (Assassin)');
  const weaponTypeLabel = langMode === 'en' ? (jobWeaponsData.primaryWeaponType || 'Weapons') : jobWeaponsData.primaryWeaponTypeHe;
  const secondaryTypeLabel = langMode === 'en' ? (jobWeaponsData.secondaryType || 'Secondary') : jobWeaponsData.secondaryTypeHe;

  return (
    <div className="w-full space-y-6">
      
      {/* Header & Sub-Navigation */}
      <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-13 h-13 rounded-2xl liquid-glass-pill p-3 flex items-center justify-center text-3xl shadow-lg border border-white/20">
              {activeJobData?.icon || jobWeaponsData.icon || '⚔️'}
            </div>
            <div>
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40">
                {langMode === 'en' ? `Gear & Equipment Guide for ${jobTitle}` : `מדריך התקדמות וציוד עבור ${jobTitle}`}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                {langMode === 'en' ? `Weapon Path (${weaponTypeLabel}), Secondary & Armor` : `מסלול נשקים (${weaponTypeLabel}), ציוד משני ושריונות`}
              </h2>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 liquid-glass-pill p-1.5 rounded-2xl border border-white/15 flex-wrap">
            <button
              onClick={() => setActiveCategory('weapons')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition ${
                activeCategory === 'weapons'
                  ? 'liquid-glass-btn-primary text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>⚔️</span>
              <span>{langMode === 'en' ? `Weapons (${weaponTypeLabel})` : `כלי נשק (${weaponTypeLabel})`}</span>
            </button>
            
            {jobWeaponsData.secondary && jobWeaponsData.secondary.length > 0 && (
              <button
                onClick={() => setActiveCategory('secondary')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition ${
                  activeCategory === 'secondary'
                    ? 'liquid-glass-btn-primary text-white shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>{isAssassin ? '⭐' : jobId === 'hunter' ? '🎯' : jobId === 'gunslinger' ? '💥' : '🛡️'}</span>
                <span>{secondaryTypeLabel}</span>
              </button>
            )}

            <button
              onClick={() => setActiveCategory('gear')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black transition ${
                activeCategory === 'gear'
                  ? 'liquid-glass-btn-primary text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>👑</span>
              <span>{langMode === 'en' ? 'Essential Gear' : 'ציוד חובה (Essential)'}</span>
            </button>
          </div>
        </div>

        {/* Build Selector (for Weapons view) */}
        {activeCategory === 'weapons' && activeJobData?.buildVariants && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 liquid-glass-card p-3.5 rounded-2xl border border-white/10">
            <div className="text-xs text-slate-200 font-bold">
              {langMode === 'en' ? `Selected Build Style for ${jobTitle}:` : `סגנון הבנייה הנבחר עבור ${jobTitle}:`}
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setFilterBuild('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
                  filterBuild === 'all'
                    ? 'bg-sky-500/80 text-white border border-sky-300 shadow-sm'
                    : 'liquid-glass-pill text-slate-300 hover:text-white'
                }`}
              >
                {langMode === 'en' ? 'All (All Builds)' : 'הכל (כל הבילדים)'}
              </button>
              {activeJobData.buildVariants.map(v => (
                <button
                  key={v.id}
                  onClick={() => setFilterBuild(v.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition ${
                    filterBuild === v.id
                      ? 'bg-sky-600/80 text-white border border-sky-300 shadow-sm'
                      : 'liquid-glass-pill text-sky-200 hover:text-white'
                  }`}
                >
                  {v.nameHe}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* WEAPONS PROGRESSION VIEW */}
      {activeCategory === 'weapons' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Weapon List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-black text-slate-300 uppercase tracking-wider mb-2">
              <span>{langMode === 'en' ? 'Available Weapons by Level:' : 'נשקים זמינים לפי רמה:'}</span>
              <span className="text-sky-300 font-mono">({weaponsList.length} {langMode === 'en' ? 'weapons' : 'נשקים'})</span>
            </div>

            {weaponsList.map(w => {
              const isSelected = selectedWeapon?.id === w.id;
              return (
                <div
                  key={w.id}
                  onClick={() => setSelectedWeapon(w)}
                  className={`p-4 rounded-2xl cursor-pointer transition border ${
                    isSelected
                      ? 'bg-sky-600/30 border-sky-400 shadow-xl shadow-sky-600/30 ring-1 ring-sky-300/40'
                      : 'liquid-glass-card hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl liquid-glass-pill p-1.5 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                        <GameAssetImage
                          src={getWeaponIconUrl(w)}
                          fallbackSrc={getWeaponIconFallback(w)}
                          alt={w.name}
                          emojiFallback={w.icon}
                          size="md"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-white text-sm">{w.name}</span>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-900/60 text-cyan-200 font-bold border border-cyan-400/30">
                            {langMode === 'en' ? `Lv. ${w.reqLevel}` : `רמה ${w.reqLevel}`}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300">{w.nameHe}</div>
                      </div>
                    </div>
                    <div className="text-start">
                      <div className="text-amber-300 font-mono font-black text-sm">{w.weaponAtt}</div>
                      <div className="text-[10px] text-slate-300 font-mono">{w.speed}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weapon Deep Inspector (7 cols) */}
          <div className="lg:col-span-7">
            {selectedWeapon ? (
              <div className="liquid-glass rounded-3xl p-6 shadow-2xl space-y-5 sticky top-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-lg flex items-center justify-center bg-slate-900/50 shrink-0">
                      <GameAssetImage
                        src={getWeaponIconUrl(selectedWeapon)}
                        fallbackSrc={getWeaponIconFallback(selectedWeapon)}
                        alt={selectedWeapon.name}
                        emojiFallback={selectedWeapon.icon}
                        size="lg"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 font-mono">
                          {langMode === 'en' ? `Lv. ${selectedWeapon.reqLevel}` : `רמה ${selectedWeapon.reqLevel}`}
                        </span>
                        <span className="text-xs font-bold text-amber-300">
                          {selectedWeapon.weaponTypeHe || weaponTypeLabel}
                        </span>
                      </div>
                      <h3 className="text-2xl font-black text-white mt-1">{selectedWeapon.name}</h3>
                      <div className="text-sm text-sky-200 font-medium">{selectedWeapon.nameHe}</div>
                    </div>
                  </div>

                  <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/20 text-xs shadow-inner">
                    <span className="text-slate-300 block font-sans">{langMode === 'en' ? 'Attack Power:' : 'עוצמת התקפה:'}</span>
                    <span className="text-xl font-black text-amber-300">{selectedWeapon.weaponAtt}</span>
                  </div>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Attack Speed' : 'מהירות תקיפה'}</span>
                    <span className="text-xs font-bold text-sky-200 font-mono">{selectedWeapon.speed}</span>
                  </div>
                  <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Stat Reqs' : 'דרישות סטטים'}</span>
                    <span className="text-xs font-bold text-emerald-200 font-mono">{selectedWeapon.reqStats || `DEX ${selectedWeapon.reqDex || 0}`}</span>
                  </div>
                  <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Scroll Slots' : 'סלוטים לגלילה'}</span>
                    <span className="text-xs font-bold text-amber-200 font-mono">{selectedWeapon.slots || 7} Slots</span>
                  </div>
                  <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 text-center">
                    <span className="text-[10px] text-slate-400 block">{langMode === 'en' ? 'Build Fit' : 'התאמת בילד'}</span>
                    <span className="text-xs font-bold text-purple-200 font-mono">{selectedWeapon.suitableForHe || 'כל הבילדים'}</span>
                  </div>
                </div>

                {/* Lore / Description */}
                <div className="liquid-glass-subtle p-4 rounded-2xl border border-white/10 text-xs text-slate-200 leading-relaxed">
                  {selectedWeapon.desc}
                </div>

                {/* How to Get / Obtain */}
                <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-cyan-300 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>איך ומאיפה משיגים את הנשק:</span>
                    </span>
                    {onNavigateToSearch && (
                      <button
                        onClick={() => onNavigateToSearch(selectedWeapon.name)}
                        className="text-[11px] text-cyan-300 hover:text-cyan-200 font-bold underline transition"
                      >
                        חפש במאגר המאוחד ↗
                      </button>
                    )}
                  </div>
                  <ul className="text-xs text-slate-200 space-y-1.5">
                    {Array.isArray(selectedWeapon.obtain) ? (
                      selectedWeapon.obtain.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400">•</span>
                          <span>{m}</span>
                        </li>
                      ))
                    ) : (
                      <li className="leading-relaxed">{selectedWeapon.howToGet || selectedWeapon.desc}</li>
                    )}
                  </ul>
                </div>

                {/* Tactical Tips */}
                {selectedWeapon.tip && (
                  <div className="liquid-glass-card bg-amber-950/20 border-amber-400/40 p-4 rounded-2xl space-y-1">
                    <div className="flex items-center gap-2 text-amber-300 font-black text-xs">
                      <span>💡</span>
                      <span>טיפ שדרוג ושימוש טקטי:</span>
                    </div>
                    <p className="text-xs text-amber-200 leading-relaxed">
                      {selectedWeapon.tip}
                    </p>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* SECONDARY & AMMUNITION VIEW (Adapted for each class!) */}
      {activeCategory === 'secondary' && jobWeaponsData.secondary && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-black text-slate-300 uppercase tracking-wider mb-2">
              {secondaryTypeLabel} עבור {jobTitle}:
            </div>
            {jobWeaponsData.secondary.map(sec => (
              <div
                key={sec.id}
                onClick={() => setSelectedSecondary(sec)}
                className={`p-4 rounded-2xl cursor-pointer transition border ${
                  selectedSecondary?.id === sec.id
                    ? 'bg-sky-600/30 border-sky-400 shadow-xl shadow-sky-600/30 ring-1 ring-sky-300/40'
                    : 'liquid-glass-card hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl liquid-glass-pill p-1.5 border border-white/15 flex items-center justify-center bg-slate-900/40 shrink-0">
                      <GameAssetImage
                        src={getWeaponIconUrl(sec)}
                        fallbackSrc={getWeaponIconFallback(sec)}
                        alt={sec.name}
                        emojiFallback={sec.icon}
                        size="md"
                      />
                    </div>
                    <div>
                      <div className="font-black text-white text-sm">{sec.name}</div>
                      <div className="text-xs text-slate-300">{sec.nameHe}</div>
                    </div>
                  </div>
                  <div className="text-emerald-300 font-mono font-black text-sm">
                    {sec.att || sec.stats || 'פריט משני'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7">
            {selectedSecondary && (
              <div className="liquid-glass rounded-3xl p-6 shadow-2xl space-y-5 sticky top-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-16 h-16 rounded-2xl liquid-glass-pill p-2 border border-white/20 shadow-lg flex items-center justify-center bg-slate-900/50 shrink-0">
                      <GameAssetImage
                        src={getWeaponIconUrl(selectedSecondary)}
                        fallbackSrc={getWeaponIconFallback(selectedSecondary)}
                        alt={selectedSecondary.name}
                        emojiFallback={selectedSecondary.icon}
                        size="lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{selectedSecondary.name}</h3>
                      <div className="text-sm text-slate-200">{selectedSecondary.nameHe}</div>
                    </div>
                  </div>
                  <div className="text-left font-mono liquid-glass-pill px-4 py-2 rounded-2xl border border-white/20">
                    <span className="text-slate-300 text-xs block">תוספת / תכונה:</span>
                    <span className="text-xl font-black text-emerald-300">
                      {selectedSecondary.att || selectedSecondary.stats || 'ציוד משני'}
                    </span>
                  </div>
                </div>

                {selectedSecondary.quantity && (
                  <div className="liquid-glass-subtle p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">קיבולת לחבילה / סט:</span>
                    <span className="text-amber-300 font-bold">{selectedSecondary.quantity} יחידות בטעינה</span>
                  </div>
                )}

                <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-1.5">
                  <span className="text-xs font-black text-cyan-300 block">איך ומאיפה משיגים:</span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedSecondary.whereToGet}</p>
                </div>

                {selectedSecondary.price && (
                  <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-1.5">
                    <span className="text-xs font-black text-amber-300 block">הערכת מחיר שוק וסחר:</span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{selectedSecondary.price}</p>
                  </div>
                )}

                {selectedSecondary.tip && (
                  <div className="liquid-glass-card bg-amber-950/20 border-amber-400/40 p-4 rounded-2xl space-y-1">
                    <div className="flex items-center gap-2 text-amber-300 font-black text-xs">
                      <span>💡</span>
                      <span>טיפ שימוש ושדרוג:</span>
                    </div>
                    <p className="text-xs text-amber-200 leading-relaxed">
                      {selectedSecondary.tip}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ESSENTIAL GEAR VIEW */}
      {activeCategory === 'gear' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ESSENTIAL_GEAR.map(gear => (
            <div key={gear.id} className="liquid-glass rounded-3xl p-5 shadow-xl space-y-3.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl liquid-glass-pill p-1.5 border border-white/20 flex items-center justify-center bg-slate-900/40 shrink-0">
                    <GameAssetImage
                      src={getWeaponIconUrl(gear) || getDropIconUrl(gear.name)}
                      fallbackSrc={getWeaponIconFallback(gear) || getDropIconFallback(gear.name)}
                      alt={gear.name}
                      emojiFallback={gear.icon}
                      size="md"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-black text-amber-300 font-mono">רמה {gear.reqLevel}</span>
                    <h4 className="text-base font-black text-white">{gear.name}</h4>
                  </div>
                </div>
                <span className="text-xs font-black text-emerald-300 font-mono">{gear.stats}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">{gear.desc}</p>
              <div className="liquid-glass-card p-3 rounded-2xl border border-white/15 text-xs text-cyan-300">
                <span className="font-bold">מקור: </span>{gear.howToGet}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
