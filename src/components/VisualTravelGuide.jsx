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
    const isHidden = activeLocation.toLowerCase().includes('hidden') ||
                     activeLocation.includes('סודי') ||
                     activeLocation.includes('נסתר') ||
                     activeLocation.toLowerCase().includes('tree dungeon') ||
                     activeLocation.toLowerCase().includes('pig beach');

    return [
      { label: baseTown, type: 'town', icon: '🏙️' },
      ...(isHidden ? [{ label: 'מעבר פורטל נסתר [↑]', type: 'portal', icon: '🚪' }] : []),
      { label: activeLocation, type: 'target', icon: '🎯' }
    ];
  }, [town, activeLocation]);

  const displayPortalPhoto = activeLivePortal?.inGamePhoto || activeLivePortal?.localRender || (
    hiddenPortal?.targetMap?.includes('Blue Mushroom') || name?.toLowerCase().includes('blue mushroom')
      ? blueMushroomImg
      : null
  );

  return (
    <div className="bg-slate-950/90 rounded-2xl p-4 sm:p-5 border-2 border-cyan-500/30 shadow-xl shadow-cyan-500/5 space-y-4">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center text-lg">
            🧭
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-black text-white flex items-center gap-2 flex-wrap">
              <span>{t('travelTitle')} {langMode === 'en' ? name : (nameHe || name)}</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono">
                {langMode === 'en' ? `Lv. ${level}` : `רמה ${level}`}
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              {t('travelSub')}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <div className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
            {t('baseTown')} <span className="font-bold text-white">{town}</span>
          </div>
          <a
            href={monster.meowDbUrl || "https://meowdb.com/msclassic"}
            target="_blank"
            rel="noreferrer"
            className="text-[10px] text-orange-200 bg-orange-950/60 hover:bg-orange-900/80 px-2 py-1 rounded-md border border-orange-500/40 flex items-center gap-1 font-bold transition"
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
            className="text-[10px] text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/80 px-2 py-1 rounded-md border border-emerald-500/40 flex items-center gap-1 font-bold transition"
            title="אומת מול MapleClassic Wiki"
          >
            <span>📖</span>
            <span>Wiki</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Prominent All Monster Locations Switcher Bar */}
      <div className="bg-slate-900/90 rounded-2xl p-3.5 sm:p-4 border border-cyan-500/40 space-y-3 shadow-lg">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center justify-center font-bold text-sm">
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
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold border border-cyan-400/40">
            {t('mapOf')} {selectedLocIndex + 1} {t('outOf')} {locationsList.length}
          </span>
        </div>

        {/* Real Location Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
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
                onClick={() => setSelectedLocIndex(idx)}
                className={`text-start p-3 rounded-xl transition-all duration-200 border flex items-center justify-between gap-2.5 shadow-sm ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-cyan-300 shadow-md shadow-cyan-500/25 ring-2 ring-cyan-400/50 scale-[1.01]'
                    : 'bg-slate-950/80 text-slate-200 hover:text-white hover:bg-slate-800/80 border-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-base shrink-0">
                    {isSelected ? '🎯' : (isHidden ? '🚪' : '📍')}
                  </span>
                  <div className="text-start min-w-0">
                    <div className="font-bold text-xs sm:text-sm text-slate-100 leading-snug break-words">
                      {loc}
                    </div>
                    <div className="text-[10px] text-slate-300 font-mono mt-0.5">
                      {isHidden ? (langMode === 'en' ? 'Hidden Street Portal' : 'פורטל נסתר (Hidden Street)') : (langMode === 'en' ? `Hunting Map #${idx + 1}` : `מפת ציד #${idx + 1}`)}
                    </div>
                  </div>
                </div>
                {isSelected && (
                  <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-bold">
                    {langMode === 'en' ? 'Active ✓' : 'פעיל ✓'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Waypoint Trail for the Selected Map */}
      <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
        <div className="text-[11px] font-bold text-cyan-400 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span>🧭</span>
            <span>{langMode === 'en' ? 'Waypoint Travel Route to Selected Map:' : 'נתיב הגעה למפה הנבחרת (Waypoint Route):'}</span>
          </span>
          <span className="text-[10px] text-slate-400">{isRTL ? 'עקוב אחר הפורטלים מימין לשמאל' : 'Follow portals from left to right'}</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap text-xs">
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
                <span>{wp.label}</span>
              </div>
              {idx < waypoints.length - 1 && (
                <span className="text-cyan-400 font-bold text-base px-1 select-none">{isRTL ? '←' : '→'}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Full-Width 2D Interactive Terrain Radar with Authentic Layout */}
      <div className="w-full">
        <InteractiveMapRadar
          monster={monster}
          activeLocationIndex={selectedLocIndex}
          onLocationChange={setSelectedLocIndex}
          height={280}
          showControls={true}
        />
      </div>

      {/* Hidden Portal Guide (Integrated for maps with secret entrances) */}
      {effectivePortal && (
        <div className="bg-amber-950/20 border-2 border-amber-500/40 rounded-2xl p-4 space-y-3 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/30 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🚪</span>
              <div>
                <h5 className="text-sm font-black text-amber-300">
                  הוראות כניסה לפורטל הנסתר: {effectivePortal.nameHe || effectivePortal.targetMap || activeLocation}
                </h5>
                <p className="text-[11px] text-slate-300">
                  מפת מקור: <strong className="text-white">{effectivePortal.parentMapNameHe || effectivePortal.parentMap || town}</strong> • כניסה בעזרת [↑ חץ למעלה]
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowPortalViewerModal(true)}
                className="px-3 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold border border-amber-400 text-xs transition flex items-center gap-1 shadow-sm"
              >
                <span>📸</span>
                <span>תצלום חי ומפת יעד</span>
              </button>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40">
                Hidden Street
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <span>👁️</span> {langMode === 'en' ? 'Visual Landmark:' : 'מה לחפש בעין:'}
              </span>
              <p className="text-slate-100 font-medium">
                {effectivePortal.landmarkHe || effectivePortal.landmark}
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                <span>📍</span> {langMode === 'en' ? 'Exact Location & Entry:' : 'מיקום מדויק ואיך להיכנס:'}
              </span>
              <p className="text-slate-100 font-medium">
                {effectivePortal.exactActionHe || effectivePortal.howToEnter || effectivePortal.coordinates}
              </p>
            </div>
          </div>

          {(effectivePortal.warningTipHe || effectivePortal.warningTip) && (
            <div className="bg-sky-950/40 rounded-xl p-3 border border-sky-400/30 text-xs text-sky-200 flex items-start gap-2">
              <span className="text-cyan-300 text-base mt-[-2px]">💡</span>
              <div>
                <strong className="text-cyan-200 font-bold">{langMode === 'en' ? 'Important Note: ' : 'חשוב לדעת: '}</strong>
                {effectivePortal.warningTipHe || effectivePortal.warningTip}
              </div>
            </div>
          )}

          {/* In-game Illustration Image if available */}
          {displayPortalPhoto && (
            <div className="pt-2 border-t border-amber-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <span>🖼️</span> {langMode === 'en' ? 'Authentic In-Game Visual Reference:' : 'תצלום המחשה אותנטי מתוך המשחק:'}
                </span>
                <button
                  onClick={() => setShowFullPortalImage(!showFullPortalImage)}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-bold underline"
                >
                  {showFullPortalImage ? (langMode === 'en' ? 'Collapse ▲' : 'הקטן תמונה ▲') : (langMode === 'en' ? 'Expand Full Image ▼' : 'הגדל תמונה מלאה ▼')}
                </button>
              </div>

              <div
                className={`relative rounded-xl overflow-hidden border border-amber-500/30 bg-slate-950 transition-all cursor-pointer ${
                  showFullPortalImage ? 'max-h-[500px]' : 'max-h-48'
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
                    <div className="absolute w-6 h-6 rounded-full bg-amber-500/50 border border-amber-300 flex items-center justify-center shadow-lg">
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

      {/* Step-by-Step Directions & Safe Spot */}
      <div className="space-y-3.5 text-xs sm:text-sm">
        <div className="space-y-2">
          <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
            <span>🚶</span>
            <span>{langMode === 'en' ? 'Detailed Route from Base Town:' : 'שלבי ההגעה המפורטים מהעיר:'}</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
            {cleanDirections.map((dir, idx) => (
              <li
                key={idx}
                className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 flex items-start gap-3 leading-relaxed shadow-sm"
              >
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span>{dir}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Safe Spot Recommendation for Thieves / Snipers */}
        {safeSpots && (
          <div className="bg-gradient-to-r from-sky-950/40 to-slate-900 border border-sky-400/40 p-3.5 rounded-xl space-y-1.5 text-xs sm:text-sm shadow-sm">
            <div className="flex items-center gap-2 text-sky-300 font-bold">
              <span>🛡️</span>
              <span>{langMode === 'en' ? 'Safe Spot Recommendation for Thief & Bowman on this map:' : 'נקודה בטוחה (Safe Spot) לגנב ולקשת במפה זו:'}</span>
            </div>
            <p className="text-sky-200/90 leading-relaxed pr-2">
              {safeSpots}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
