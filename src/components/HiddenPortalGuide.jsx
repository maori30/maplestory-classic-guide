import React, { useState } from 'react';
import blueMushroomImg from '../assets/portals/blue-mushroom-portal.jpg';
import InteractiveMapRadar from './InteractiveMapRadar.jsx';
import LiveHiddenPortalViewer from './LiveHiddenPortalViewer.jsx';
import { getLiveHiddenPortal } from '../data/mapsDatabase.js';

export default function HiddenPortalGuide({ hiddenPortal, monsterName }) {
  const [showFullImage, setShowFullImage] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false);

  if (!hiddenPortal) return null;

  const {
    parentMap,
    targetMap,
    landmark,
    landmarkIcon = '🚪',
    coordinates,
    howToEnter,
    warningTip
  } = hiddenPortal;

  // Resolve matching live in-game portal data with authentic screenshots
  const livePortal = getLiveHiddenPortal({ name: monsterName }, targetMap || parentMap);

  const displayPhoto = livePortal?.inGamePhoto || livePortal?.localRender || (
    hiddenPortal.targetMap?.includes('Blue Mushroom') || monsterName?.toLowerCase().includes('blue mushroom')
      ? blueMushroomImg
      : null
  );

  return (
    <div className="bg-slate-950/90 rounded-2xl p-4 sm:p-5 border-2 border-amber-500/40 shadow-xl shadow-amber-500/5 space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-lg animate-pulse">
            {landmarkIcon}
          </span>
          <div>
            <h4 className="text-sm sm:text-base font-black text-amber-300 flex items-center gap-2 flex-wrap">
              <span>מדריך איתור פורטל נסתר (Hidden Street)</span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                [↑] לחץ חץ למעלה
              </span>
            </h4>
            <p className="text-xs text-slate-400">
              הוראות מיקום מדויקות בשטח + מפת רדאר ותצלום אמיתי מהמשחק
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowLiveModal(true)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-600/20 text-amber-300 border border-amber-400 hover:border-amber-300 text-xs font-bold transition flex items-center gap-1.5 shadow"
          >
            <span>📸</span>
            <span>תצלום חי מהמשחק [הגדל]</span>
          </button>
          <div className="text-[11px] font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-500/30">
            מפת מקור: <span className="font-bold text-white">{parentMap}</span>
          </div>
        </div>
      </div>

      {/* Dedicated Full-Width 2D Interactive Platform Radar */}
      <div className="w-full">
        <InteractiveMapRadar
          hiddenPortal={hiddenPortal}
          monster={{ name: monsterName }}
          height={280}
          showControls={true}
        />
      </div>

      {/* Structured Clear Instructions */}
      <div className="space-y-3 text-xs sm:text-sm">
        {/* Landmark Box */}
        <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1.5 shadow">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <span>👁️</span>
            <span>מה לחפש בעין (ציון הדרך הוויזואלי בשטח):</span>
          </div>
          <div className="text-slate-100 text-sm font-medium leading-relaxed bg-amber-500/10 p-3 rounded-xl border border-amber-500/20">
            {livePortal?.landmarkHe || landmark}
          </div>
        </div>

        {/* Coordinates & How to Enter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1 shadow">
            <div className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <span>📍</span>
              <span>מיקום במפה:</span>
            </div>
            <div className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {coordinates}
            </div>
          </div>

          <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1 shadow">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <span>⌨️</span>
              <span>איך להיכנס בדיוק:</span>
            </div>
            <div className="text-slate-200 text-xs sm:text-sm leading-relaxed">
              {livePortal?.exactActionHe || howToEnter}
            </div>
          </div>
        </div>

        {/* Warning Tip */}
        {(livePortal?.warningTipHe || warningTip) && (
          <div className="bg-sky-950/40 rounded-xl p-3.5 border border-sky-400/30 text-xs sm:text-sm text-sky-200 flex items-start gap-2.5 leading-relaxed shadow">
            <span className="text-cyan-300 text-lg mt-[-2px]">💡</span>
            <div>
              <strong className="text-cyan-200 font-bold">חשוב לדעת: </strong>
              {livePortal?.warningTipHe || warningTip}
            </div>
          </div>
        )}
      </div>

      {/* Visual In-Game Illustration / Photo */}
      {displayPhoto && (
        <div className="pt-2 border-t border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <span>🖼️</span>
              <span>תצלום חי מהמשחק (Live In-Game Screenshot):</span>
            </span>
            <button
              onClick={() => setShowFullImage(!showFullImage)}
              className="text-[11px] text-cyan-400 hover:text-cyan-300 font-bold underline transition"
            >
              {showFullImage ? 'הקטן תמונה ▲' : 'הגדל תמונה מלאה ▼'}
            </button>
          </div>

          <div
            className={`relative rounded-xl overflow-hidden border border-amber-500/30 bg-slate-950 transition-all cursor-pointer ${
              showFullImage ? 'max-h-[500px]' : 'max-h-48'
            }`}
            onClick={() => setShowFullImage(!showFullImage)}
          >
            <img
              src={displayPhoto}
              alt={targetMap || "Hidden Portal"}
              className="w-full object-cover object-center hover:scale-105 transition duration-500"
            />

            {livePortal?.portalCoords && (
              <div
                className="absolute z-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{
                  left: livePortal.portalCoords.x || '50%',
                  top: livePortal.portalCoords.y || '50%'
                }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-amber-400 animate-ping opacity-75"></div>
                <div className="absolute w-6 h-6 rounded-full bg-amber-500/50 border border-amber-300 flex items-center justify-center shadow-lg">
                  <span className="text-white text-[10px] font-black animate-bounce">↑</span>
                </div>
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-3 flex items-center justify-between text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-[11px] font-bold">
                  {parentMap}
                </span>
                <span>{livePortal?.photoCaption || 'עמוד על ציון הדרך ולחץ [↑ חץ למעלה]'}</span>
              </div>
              <span className="text-[11px] text-cyan-300 font-mono">
                {showFullImage ? 'לחץ להקטנה' : 'לחץ להגדלה'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Live Hidden Portal Modal */}
      {showLiveModal && (
        <LiveHiddenPortalViewer
          activePortal={livePortal || hiddenPortal}
          isModal={true}
          onClose={() => setShowLiveModal(false)}
        />
      )}
    </div>
  );
}
