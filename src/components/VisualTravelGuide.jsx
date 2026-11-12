import { useLanguage } from '../context/LanguageContext.jsx';
import React, { useState, useEffect, useMemo } from 'react';
import InteractiveMapRadar from './InteractiveMapRadar.jsx';
import LiveHiddenPortalViewer from './LiveHiddenPortalViewer.jsx';
import { getLiveHiddenPortal } from '../data/mapsDatabase.js';
import blueMushroomImg from '../assets/portals/blue-mushroom-portal.jpg';

export default function VisualTravelGuide({ monster }) {
  const { langMode, isRTL, t } = useLanguage();
  if (!monster) return null;

  const {
    name,
    nameHe,
    icon,
    town = 'Victoria Island',
    locations = [],
    directions = [],
    safeSpots,
    level,
    hiddenPortal
  } = monster;

  const locationsList = useMemo(() => {
    if (locations && locations.length > 0) return locations;
    return [`${town}: מפת ציד מרכזית`];
  }, [locations, town]);

  const [selectedLocIndex, setSelectedLocIndex] = useState(0);
  const [showFullPortalImage, setShowFullPortalImage] = useState(false);
  const [showPortalViewerModal, setShowPortalViewerModal] = useState(false);

  // Reset selected location index whenever monster changes
  useEffect(() => {
    setSelectedLocIndex(0);
  }, [monster.id]);

  const activeLocation = locationsList[selectedLocIndex] || locationsList[0];

  // Resolve matching live in-game portal data for the current active location
  const activeLivePortal = useMemo(() => {
    return getLiveHiddenPortal(monster, activeLocation);
  }, [monster, activeLocation]);

  const effectivePortal = activeLivePortal || hiddenPortal;

  // Clean and split directions (handling arrays or strings separated by | or newlines)
  const cleanDirections = useMemo(() => {
    if (!directions) return [];
    if (typeof directions === 'string') {
      return directions.split(/[|\n]+/).map(s => s.trim()).filter(Boolean);
    }
    if (Array.isArray(directions)) {
      return directions
        .flatMap(d => (typeof d === 'string' ? d.split(/[|\n]+/) : [d]))
        .map(s => (typeof s === 'string' ? s.trim() : s))
        .filter(Boolean);
    }
    return [];
  }, [directions]);

  // Dynamic Waypoint route based on selected location
  const waypoints = useMemo(() => {
    const baseTown = town.split('/')[0].trim();
    const locLower = activeLocation.toLowerCase();

    // Special accurate authentic routes for iconic bosses & tricky maps
    if (monster?.id === 'mano' || locLower.includes('thicket around the beach')) {
      return [
        { label: 'Lith Harbor (נמל לית)', type: 'town', icon: '🏙️' },
        { label: 'Right Around Lith Harbor (104000100)', type: 'waypoint', icon: '🏞️' },
        { label: 'Thicket Around Beach I (104000200)', type: 'waypoint', icon: '🌴' },
        { label: 'Thicket Around Beach II (104000300)', type: 'waypoint', icon: '🌴' },
        { label: 'Thicket Around Beach III (104000400 • מאנו)', type: 'target', icon: '🎯' }
      ];
    }

    if (locLower.includes('pig beach')) {
      return [
        { label: 'Lith Harbor / Henesys', type: 'town', icon: '🏙️' },
        { label: '3-Way Road-Split (104010000)', type: 'waypoint', icon: '🌿' },
        { label: 'פורטל נסתר בשיח צהוב [↑]', type: 'portal', icon: '🚪' },
        { label: 'The Pig Beach (104010001)', type: 'target', icon: '🎯' }
      ];
    }

    if (monster?.id === 'mushmom' || locLower.includes('someone else')) {
      return [
        { label: 'Henesys (הנסיס)', type: 'town', icon: '🏙️' },
        { label: 'The Hill East of Henesys (100010000)', type: 'waypoint', icon: '🏞️' },
        { label: 'דלת פטרייה נטושה [↑]', type: 'portal', icon: '🚪' },
        { label: "Someone Else's House (מאשמם)", type: 'target', icon: '🎯' }
      ];
    }

    if (locLower.includes('construction site')) {
      return [
        { label: 'Kerning City (קרנינג)', type: 'town', icon: '🏙️' },
        { label: 'Kerning City Construction Site (103010000)', type: 'target', icon: '🎯' }
      ];
    }

    if (locLower.includes('subway')) {
      return [
        { label: 'Kerning City (קרנינג)', type: 'town', icon: '🏙️' },
        { label: 'Subway Ticketing Booth (103000100)', type: 'waypoint', icon: '🎫' },
        { label: activeLocation, type: 'target', icon: '🎯' }
      ];
    }

    if (locLower.includes('cursed sanctuary') || monster?.id === 'jr-balrog') {
      return [
        { label: 'Sleepywood (סליפיווד)', type: 'town', icon: '🏙️' },
        { label: 'Ant Tunnel I-IV', type: 'waypoint', icon: '⛏️' },
        { label: 'Deep Ant Tunnel', type: 'waypoint', icon: '🔦' },
        { label: 'Sanctuary Entrance', type: 'waypoint', icon: '💀' },
        { label: 'The Cursed Sanctuary (ג׳וניור באלרוג)', type: 'target', icon: '🎯' }
      ];
    }

    const isHidden = locLower.includes('hidden') ||
                     activeLocation.includes('סודי') ||
                     activeLocation.includes('נסתר') ||
                     locLower.includes('tree dungeon');

    return [
      { label: baseTown, type: 'town', icon: '🏙️' },
      ...(isHidden ? [{ label: 'מעבר פורטל נסתר [↑]', type: 'portal', icon: '🚪' }] : []),
      { label: activeLocation, type: 'target', icon: '🎯' }
    ];
  }, [town, activeLocation, monster]);

  const displayPortalPhoto = activeLivePortal?.inGamePhoto || activeLivePortal?.localRender || (
    hiddenPortal?.targetMap?.includes('Blue Mushroom') || name?.toLowerCase().includes('blue mushroom')
      ? blueMushroomImg
      : null
  );

  return (
    <div className="space-y-4">
      {/* 1. Top Header Bar: Identity, Base Town & Database Cross-Links */}
      <div className="bg-slate-900/90 rounded-2xl p-3.5 sm:p-4 border border-cyan-500/30 shadow-lg flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center text-lg shadow-sm">
            🧭
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-black text-white flex items-center gap-2 flex-wrap">
              <span>{t('travelTitle')} {langMode === 'en' ? name : (nameHe || name)}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono">
                {langMode === 'en' ? `Lv. ${level}` : `רמה ${level}`}
              </span>
            </h4>
            <p className="text-xs text-slate-300 mt-0.5">
              {t('travelSub')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="text-xs font-mono text-cyan-200 bg-cyan-950/70 px-3 py-1.5 rounded-xl border border-cyan-500/40 shadow-sm">
            {t('baseTown')} <strong className="text-white">{town}</strong>
          </div>
          <a
            href={monster.meowDbUrl || "https://meowdb.com/msclassic"}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-orange-200 bg-orange-950/70 hover:bg-orange-900/80 px-2.5 py-1.5 rounded-xl border border-orange-500/40 flex items-center gap-1 font-bold transition shadow-sm"
            title="אומת מול NiaMeowDB v1.0.0"
          >
            <span>🐾</span>
            <span>NiaMeowDB</span>
            <span>↗</span>
          </a>
          <a
            href="https://mapleclassic.wiki"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-emerald-200 bg-emerald-950/70 hover:bg-emerald-900/80 px-2.5 py-1.5 rounded-xl border border-emerald-500/40 flex items-center gap-1 font-bold transition shadow-sm"
            title="אומת מול MapleClassic Wiki"
          >
            <span>📖</span>
            <span>Wiki</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Prominent All Monster Locations Switcher Bar */}
      <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-cyan-500/40 space-y-3.5 shadow-xl">
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-cyan-500/20 pb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 flex items-center justify-center font-bold text-base shadow-sm">
              🗺️
            </span>
            <div>
              <h5 className="text-xs sm:text-sm font-black text-white">
                {langMode === 'en' ? `All maps where ${name} spawns (${locationsList.length} maps):` : `כל המפות שבהן ${nameHe || name} נמצאת (${locationsList.length} מפות):`}
              </h5>
              <p className="text-[11px] text-slate-300">
                {t('clickMapToInspect')}
              </p>
            </div>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 font-mono font-bold border border-cyan-400/40 shadow-sm">
            {t('mapOf')} {selectedLocIndex + 1} {t('outOf')} {locationsList.length}
          </span>
        </div>

        {/* Real Location Navigation - Full-Width Horizontal Cards (Never Squished) */}
        <div className="flex flex-col gap-2.5 w-full">
          {locationsList.map((loc, idx) => {
            const isSelected = selectedLocIndex === idx;
            const isHidden = loc.toLowerCase().includes('hidden') ||
                             loc.includes('סודי') ||
                             loc.includes('נסתר') ||
                             loc.toLowerCase().includes('tree dungeon') ||
                             loc.toLowerCase().includes('pig beach');

            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedLocIndex(idx)}
                className={`w-full text-start p-3 sm:p-3.5 rounded-2xl transition-all duration-200 border flex items-center justify-between gap-3 shadow-md group cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-sky-900/80 via-cyan-900/70 to-blue-900/80 text-white border-cyan-400 ring-2 ring-cyan-400/40 shadow-cyan-500/20'
                    : 'bg-slate-950/85 text-slate-200 hover:text-white hover:bg-slate-800/90 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg transition-transform duration-200 group-hover:scale-105 ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30'
                      : 'bg-slate-900 border border-slate-700 text-cyan-300'
                  }`}>
                    {isSelected ? '🎯' : (isHidden ? '🚪' : '📍')}
                  </span>
                  <div className="text-start flex-1 min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-white leading-normal flex items-center gap-2 flex-wrap">
                      <bdi className="text-white font-bold [word-break:normal] break-words">{loc}</bdi>
                      {isSelected && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/40 font-mono font-bold whitespace-nowrap">
                          {langMode === 'en' ? 'Active Map' : 'מפה פעילה'}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-300 font-mono mt-0.5 flex items-center gap-2 flex-wrap">
                      <span className="whitespace-nowrap">
                        {isHidden
                          ? (langMode === 'en' ? '🚪 Hidden Street Secret Portal' : '🚪 פורטל סודי (Hidden Street)')
                          : (langMode === 'en' ? `🗺️ Hunting Map #${idx + 1}` : `🗺️ מפת ציד #${idx + 1}`)}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-cyan-300/90 whitespace-nowrap">
                        {town}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  {isSelected ? (
                    <span className="text-xs px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-black whitespace-nowrap shadow-md border border-cyan-300 flex items-center gap-1.5">
                      <span>✓</span>
                      <span>{langMode === 'en' ? 'Selected' : 'מוצגת כעת'}</span>
                    </span>
                  ) : (
                    <span className="text-xs px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 group-hover:text-cyan-200 font-bold whitespace-nowrap border border-slate-700 group-hover:border-cyan-400/60 transition flex items-center gap-1.5 shadow-sm">
                      <span>{langMode === 'en' ? 'View Map' : 'הצג מפה זו'}</span>
                      <span className="text-cyan-400 font-bold">↗</span>
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. The Interactive Map Radar Showcase (HD Render, MiniMap & 2D Canvas) */}
      <div className="w-full">
        <InteractiveMapRadar
          monster={monster}
          activeLocationIndex={selectedLocIndex}
          onLocationChange={setSelectedLocIndex}
          height={280}
          showControls={true}
        />
      </div>

      {/* 4. Unified Route & Travel Directions from Base Town */}
      <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-800 space-y-3.5 shadow-lg">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="text-base">🧭</span>
            <span className="text-xs sm:text-sm font-bold text-cyan-300">
              {langMode === 'en' ? 'Waypoint Route & Travel Directions from Town:' : 'נתיב הגעה מפורט מעיר הבסיס (Travel Route):'}
            </span>
          </div>
          <span className="text-[11px] text-slate-400">
            {isRTL ? 'עקוב אחר הפורטלים מימין לשמאל' : 'Follow portals sequentially'}
          </span>
        </div>

        {/* Waypoint Trail Chips */}
        {waypoints.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap text-xs bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
            {waypoints.map((wp, idx) => (
              <React.Fragment key={idx}>
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium ${
                    wp.type === 'town'
                      ? 'bg-slate-950 text-slate-200 border-slate-700'
                      : wp.type === 'target'
                      ? 'bg-cyan-950/90 text-cyan-200 border-cyan-400 font-bold shadow-sm ring-1 ring-cyan-400/30'
                      : 'bg-amber-950/40 text-amber-300 border-amber-500/40 font-bold'
                  }`}
                >
                  <span>{wp.icon}</span>
                  <bdi>{wp.label}</bdi>
                </div>
                {idx < waypoints.length - 1 && (
                  <span className="text-cyan-400 font-bold text-base px-1 select-none">{isRTL ? '←' : '→'}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Step-by-Step Numbered Directions */}
        {cleanDirections.length > 0 && (
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
              <span>🚶</span>
              <span>{langMode === 'en' ? 'Turn-by-Turn Steps:' : 'שלבי הליכה ומעברי פורטלים:'}</span>
            </span>
            <ul className="space-y-2 text-xs text-slate-200">
              {cleanDirections.map((dir, idx) => (
                <li
                  key={idx}
                  className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 flex items-start gap-3 leading-relaxed shadow-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{dir}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Safe Spot Combat Tip (if available for this monster) */}
        {safeSpots && (
          <div className="bg-sky-950/40 border border-sky-400/30 p-3 rounded-xl text-xs text-sky-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-sky-300">
              <span>🛡️</span>
              <span>{langMode === 'en' ? 'Tactical Safe Spot Advice:' : 'עצת מיקום בטוח ללחימה (Safe Spot):'}</span>
            </div>
            <p className="leading-relaxed text-slate-200">
              {safeSpots}
            </p>
          </div>
        )}
      </div>

      {/* 5. Secret Hidden Portal Guide (Integrated when relevant) */}
      {effectivePortal && (
        <div className="bg-amber-950/20 border-2 border-amber-500/40 rounded-2xl p-4 space-y-3.5 shadow-xl animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/30 pb-2.5">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🚪</span>
              <div>
                <h5 className="text-sm font-black text-amber-300">
                  {langMode === 'en' ? 'Secret Portal Entrance Guide: ' : 'הוראות כניסה לפורטל סודי: '}
                  <span className="text-white">{effectivePortal.nameHe || effectivePortal.targetMap || activeLocation}</span>
                </h5>
                <p className="text-[11px] text-slate-300">
                  מפת מקור: <strong className="text-amber-200">{effectivePortal.parentMapNameHe || effectivePortal.parentMap || town}</strong> • כניסה בעזרת המקש <kbd className="px-1.5 py-0.5 bg-slate-900 border border-amber-400/50 rounded font-mono text-amber-300">[↑ חץ למעלה]</kbd>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPortalViewerModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/30 to-amber-600/30 hover:from-amber-500/40 hover:to-amber-600/40 text-amber-200 font-bold border border-amber-400 text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>📸</span>
                <span>פתח תצלום מוגדל</span>
              </button>
              <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold border border-amber-500/40">
                Hidden Street
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <span>👁️</span> {langMode === 'en' ? 'Visual Landmark:' : 'מה לחפש בעין:'}
              </span>
              <p className="text-slate-100 font-medium leading-relaxed">
                {effectivePortal.landmarkHe || effectivePortal.landmark}
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <span>📍</span> {langMode === 'en' ? 'Exact Entry Action:' : 'מיקום מדויק ואיך להיכנס:'}
              </span>
              <p className="text-slate-100 font-medium leading-relaxed">
                {effectivePortal.exactActionHe || effectivePortal.howToEnter || effectivePortal.coordinates}
              </p>
            </div>
          </div>

          {(effectivePortal.warningTipHe || effectivePortal.warningTip) && (
            <div className="bg-sky-950/50 rounded-xl p-3 border border-sky-400/30 text-xs text-sky-200 flex items-start gap-2">
              <span className="text-cyan-300 text-base mt-[-2px]">💡</span>
              <div>
                <strong className="text-cyan-200 font-bold">{langMode === 'en' ? 'Important Note: ' : 'חשוב לדעת: '}</strong>
                {effectivePortal.warningTipHe || effectivePortal.warningTip}
              </div>
            </div>
          )}

          {/* In-game Illustration Photo with Interactive Pin */}
          {displayPortalPhoto && (
            <div className="pt-2 border-t border-amber-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span>🖼️</span> {langMode === 'en' ? 'Authentic In-Game Visual Reference:' : 'תצלום המחשה אותנטי מתוך המשחק:'}
                </span>
                <button
                  onClick={() => setShowFullPortalImage(!showFullPortalImage)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-bold underline cursor-pointer"
                >
                  {showFullPortalImage ? (langMode === 'en' ? 'Collapse ▲' : 'הקטן תמונה ▲') : (langMode === 'en' ? 'Expand Full Image ▼' : 'הגדל תמונה מלאה ▼')}
                </button>
              </div>

              <div
                className={`relative rounded-xl overflow-hidden border border-amber-500/30 bg-slate-950 transition-all cursor-pointer ${
                  showFullPortalImage ? 'max-h-[500px]' : 'max-h-52'
                }`}
                onClick={() => setShowFullPortalImage(!showFullPortalImage)}
              >
                <img
                  src={displayPortalPhoto}
                  alt={effectivePortal.nameEn || "Hidden Portal Illustration"}
                  className="w-full object-cover object-center hover:scale-105 transition duration-500"
                />

                {effectivePortal.portalCoords && (
                  <div
                    className="absolute z-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                    style={{
                      left: effectivePortal.portalCoords.x || '50%',
                      top: effectivePortal.portalCoords.y || '50%'
                    }}
                  >
                    <div className="w-10 h-10 rounded-full border-2 border-amber-400 animate-ping opacity-75"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-amber-500/60 border border-amber-300 flex items-center justify-center shadow-lg">
                      <span className="text-white text-[10px] font-black animate-bounce">↑</span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-medium text-amber-200">
                    {effectivePortal.photoCaption || 'עמוד על ציון הדרך ולחץ [↑ חץ למעלה]'}
                  </span>
                  <span className="text-[11px] text-cyan-300 font-mono">
                    {showFullPortalImage ? 'לחץ להקטנה' : 'לחץ להגדלה'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Live Hidden Portal Modal */}
      {showPortalViewerModal && (
        <LiveHiddenPortalViewer
          activePortal={effectivePortal}
          isModal={true}
          onClose={() => setShowPortalViewerModal(false)}
        />
      )}
    </div>
  );
}
