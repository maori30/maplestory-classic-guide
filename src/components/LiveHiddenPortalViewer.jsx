import React, { useState, useEffect } from 'react';
import { LIVE_HIDDEN_PORTALS } from '../data/mapsDatabase.js';

export default function LiveHiddenPortalViewer({
  initialPortalKey = 'pigBeach',
  activePortal = null,
  isModal = false,
  onClose = null
}) {
  // Find matching initial key if activePortal is passed
  const portalKeys = Object.keys(LIVE_HIDDEN_PORTALS);
  
  const getInitialKey = () => {
    if (activePortal?.id && LIVE_HIDDEN_PORTALS[activePortal.id]) {
      return activePortal.id;
    }
    if (initialPortalKey && LIVE_HIDDEN_PORTALS[initialPortalKey]) {
      return initialPortalKey;
    }
    return portalKeys[0];
  };

  const [selectedKey, setSelectedKey] = useState(getInitialKey);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (activePortal?.id && LIVE_HIDDEN_PORTALS[activePortal.id]) {
      setSelectedKey(activePortal.id);
    } else if (initialPortalKey && LIVE_HIDDEN_PORTALS[initialPortalKey]) {
      setSelectedKey(initialPortalKey);
    }
  }, [activePortal, initialPortalKey]);

  // Handle ESC key to close modal
  useEffect(() => {
    if (!isModal || !onClose) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModal, onClose]);

  const currentPortal = LIVE_HIDDEN_PORTALS[selectedKey] || activePortal || LIVE_HIDDEN_PORTALS.pigBeach;

  const content = (
    <div className="bg-slate-950/95 rounded-2xl border-2 border-amber-500/50 shadow-2xl p-4 sm:p-6 space-y-5 text-white max-w-5xl w-full mx-auto animate-fadeIn backdrop-blur-xl">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/30 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-400/40 flex items-center justify-center text-2xl shadow-lg animate-pulse">
            🚪
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base sm:text-lg font-black text-amber-300">
                {currentPortal.nameHe}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono border border-amber-400/40">
                Hidden Street
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40">
                {currentPortal.recommendedLevel}
              </span>
            </div>
            <p className="text-xs text-slate-300 font-mono mt-0.5">
              {currentPortal.nameEn} • עיר בסיס: {currentPortal.townHe || currentPortal.town}
            </p>
          </div>
        </div>

        {/* Modal Close or Status */}
        <div className="flex items-center gap-2">
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-red-950/80 hover:text-red-300 border border-slate-700 hover:border-red-500/50 text-xs font-bold transition flex items-center gap-1 shadow"
            >
              <span>✕</span>
              <span>סגור</span>
            </button>
          )}
        </div>
      </div>

      {/* Classic Hidden Portals Selector Tabs */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold flex items-center gap-1.5 text-amber-400">
            <span>✨</span>
            <span>בחר פורטל סודי לבדיקה חיה מהמשחק:</span>
          </span>
          <span className="font-mono text-[11px] text-cyan-400">
            {portalKeys.length} פורטלים קלאסיים מאומתים
          </span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
          {portalKeys.map((key) => {
            const p = LIVE_HIDDEN_PORTALS[key];
            const isSelected = selectedKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 shadow-sm ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-black shadow-amber-500/20 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:border-amber-400/50 hover:bg-slate-800/80'
                }`}
              >
                <span>{key === 'pigBeach' ? '🐷' : key === 'blueMushroom' ? '🍄' : key === 'wildBoar' ? '🐗' : key === 'mushmom' ? '👑' : key === 'treeDungeon' ? '🌲' : key === 'antTunnelPark' ? '🐜' : '🏜️'}</span>
                <span>{p.nameHe.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Live In-Game Illustration / Map Render with Exact Landmark Reticle */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-amber-300 flex items-center gap-1.5">
            <span>📸</span>
            <span>תצלום המחשה אותנטי מתוך המשחק - מיקום הפורטל והסימן בשטח:</span>
          </span>
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 font-bold underline transition"
          >
            {isZoomed ? 'הקטן תצוגה ▲' : 'הגדל תצוגה מלאה ▼'}
          </button>
        </div>

        <div className={`relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-slate-950 shadow-2xl transition-all duration-300 ${
          isZoomed ? 'max-h-[550px]' : 'max-h-72 sm:max-h-80'
        }`}>
          {/* Main Visual Photo / Render */}
          <img
            src={currentPortal.inGamePhoto || currentPortal.localRender || currentPortal.parentRender}
            alt={currentPortal.nameEn}
            className="w-full h-full object-cover object-center filter brightness-95 hover:brightness-105 transition duration-500"
          />

          {/* Animated Pulsing Target Reticle at Portal Coordinates */}
          {currentPortal.portalCoords && (
            <div
              className="absolute z-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              style={{
                left: currentPortal.portalCoords.x || '50%',
                top: currentPortal.portalCoords.y || '50%'
              }}
            >
              {/* Outer pulsing ring */}
              <div className="w-14 h-14 rounded-full border-2 border-amber-400 animate-ping opacity-75"></div>
              {/* Inner glowing portal circle */}
              <div className="absolute w-8 h-8 rounded-full bg-amber-500/40 border-2 border-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/50">
                <span className="text-white text-xs font-black animate-bounce">↑</span>
              </div>
              {/* Tooltip badge */}
              <div className="mt-8 px-2.5 py-1 rounded-lg bg-slate-950/95 border border-amber-400 text-[11px] font-bold text-amber-300 shadow-xl whitespace-nowrap">
                עמוד כאן ולחץ [↑]
              </div>
            </div>
          )}

          {/* Bottom Gradient Banner with Landmark Action */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/30 text-amber-300 border border-amber-400/50 font-bold font-mono text-[11px]">
                {currentPortal.parentMapNameHe || currentPortal.parentMapNameEn}
              </span>
              <span className="text-slate-100 font-medium">
                {currentPortal.photoCaption || currentPortal.exactActionHe}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-black shadow animate-pulse">
              <span>מקש:</span>
              <kbd className="bg-slate-900 px-1.5 py-0.5 rounded text-white border border-slate-700">[↑ חץ למעלה]</kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Dual MiniMap Comparison: Parent Map vs Hidden Target Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Parent Map MiniMap */}
        <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-slate-800 space-y-2 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
              <span>📍</span>
              <span>1. מפת המקור שבה עומדים:</span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
              WZ: {currentPortal.parentMapId || 'Official'}
            </span>
          </div>
          <div className="text-xs font-bold text-amber-300">
            {currentPortal.parentMapNameHe}
          </div>
          <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 flex items-center justify-center min-h-[140px] p-2">
            {currentPortal.parentMinimap ? (
              <img
                src={currentPortal.parentMinimap}
                alt="Parent Minimap"
                className="max-h-36 max-w-full object-contain filter contrast-125"
              />
            ) : (
              <div className="text-slate-500 text-xs font-mono p-4 text-center">
                תמונת MiniMap של מפת המקור
              </div>
            )}
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 border border-amber-400/40 text-[10px] text-amber-300 font-mono font-bold">
              עמוד על ציון הדרך ולחץ [↑]
            </div>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            {currentPortal.landmarkHe}
          </p>
        </div>

        {/* Hidden Target Map MiniMap */}
        <div className="bg-slate-900/90 rounded-2xl p-3.5 border border-amber-500/30 space-y-2 shadow-md">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <span>🏝️</span>
              <span>2. מפת היעד הסודית שאליה מגיעים:</span>
            </span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/30">
              WZ: {currentPortal.targetMapId || 'Hidden'}
            </span>
          </div>
          <div className="text-xs font-bold text-white">
            {currentPortal.targetMapNameHe || currentPortal.nameHe}
          </div>
          <div className="relative rounded-xl overflow-hidden border border-amber-500/30 bg-slate-950 flex items-center justify-center min-h-[140px] p-2">
            {currentPortal.localMinimap ? (
              <img
                src={currentPortal.localMinimap}
                alt="Hidden Street Minimap"
                className="max-h-36 max-w-full object-contain filter contrast-125"
              />
            ) : (
              <div className="text-slate-500 text-xs font-mono p-4 text-center">
                תמונת MiniMap של מפת היעד
              </div>
            )}
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-950/90 border border-emerald-400/50 text-[10px] text-emerald-300 font-mono font-bold">
              ספאון מפלצות עשיר
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {currentPortal.mobs?.map((mob, i) => (
              <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700 font-mono">
                {mob}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Structured Tactical Intel: Landmark, Keystroke & Assassin Tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm">
        {/* Visual Landmark */}
        <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1.5 shadow">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <span>👁️</span>
            <span>ציון הדרך בשטח (בעין):</span>
          </div>
          <div className="text-slate-100 font-medium leading-relaxed bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-xs">
            {currentPortal.landmarkHe}
          </div>
        </div>

        {/* Keystroke & How to Enter */}
        <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1.5 shadow">
          <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
            <span>⌨️</span>
            <span>איך להיכנס בדיוק:</span>
          </div>
          <div className="text-slate-100 font-medium leading-relaxed bg-emerald-500/10 p-2.5 rounded-lg border border-emerald-500/20 text-xs">
            {currentPortal.exactActionHe}
          </div>
        </div>

        {/* Tactical Assassin Warning & Benefits */}
        <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1.5 shadow">
          <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
            <span>💡</span>
            <span>טיפ טקטי ואזהרת ספאון:</span>
          </div>
          <div className="text-sky-200 font-medium leading-relaxed bg-sky-500/10 p-2.5 rounded-lg border border-sky-400/20 text-xs">
            {currentPortal.warningTipHe}
          </div>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget && onClose) onClose();
        }}
        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-3 sm:p-6 flex items-center justify-center overflow-y-auto cursor-pointer"
      >
        <div className="cursor-default w-full">
          {content}
        </div>
      </div>
    );
  }

  return content;
}
