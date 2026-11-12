import React, { useState, useEffect } from 'react';
import { MEOWDB_META_GUIDES } from '../data/meowDbMetaGuides.js';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function MeowDbMetaModal({ isOpen, onClose, initialJobId = 'assassin' }) {
  const { langMode } = useLanguage();
  const [selectedJob, setSelectedJob] = useState(initialJobId);
  const [activeMetaTab, setActiveMetaTab] = useState('stats'); // 'stats' | 'skills'

  // Sync selected job whenever modal opens or initialJobId changes
  useEffect(() => {
    if (isOpen && initialJobId) {
      setSelectedJob(initialJobId);
    }
  }, [isOpen, initialJobId]);

  // Support closing via hardware mouse Back button (Button 3 / XBUTTON1), Escape key, and IPC event
  useEffect(() => {
    if (!isOpen) return;

    let lastTrigger = 0;
    const triggerClose = () => {
      const now = Date.now();
      if (now - lastTrigger < 250) return;
      lastTrigger = now;
      if (onClose) onClose();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        triggerClose();
      }
    };

    const handleMouseUp = (e) => {
      if (e.button === 3) {
        e.preventDefault();
        e.stopPropagation();
        triggerClose();
      }
    };

    const handleCustomBack = (e) => {
      e?.preventDefault?.();
      triggerClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mouseup', handleMouseUp, true);
    window.addEventListener('auxclick', handleMouseUp, true);
    window.addEventListener('pointerup', handleMouseUp, true);
    window.addEventListener('maple-mouse-back', handleCustomBack);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mouseup', handleMouseUp, true);
      window.removeEventListener('auxclick', handleMouseUp, true);
      window.removeEventListener('pointerup', handleMouseUp, true);
      window.removeEventListener('maple-mouse-back', handleCustomBack);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentGuide = MEOWDB_META_GUIDES[selectedJob] || MEOWDB_META_GUIDES['assassin'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="liquid-glass rounded-3xl border border-cyan-400/40 w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden bg-slate-950/90"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-sky-950/80 via-slate-900/80 to-purple-950/80">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-2xl bg-cyan-500/20 border border-cyan-400/30">
              📊
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-white">
                  {langMode === 'en' ? 'MeowDB & Community Meta Guides' : 'מדריך סטייטים וסקילים לפי MeowDB והקהילה'}
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 font-mono font-bold border border-cyan-400/40">
                  Classic v62 / MSCW
                </span>
              </div>
              <p className="text-xs text-slate-300">
                {langMode === 'en'
                  ? 'Mathematical AP formulas, pure stat builds, and optimal level-by-level skill priority'
                  : 'נוסחאות נזק מתמטיות, חלוקת סטייטים אופטימלית, וסדר העלאת סקילים לפי הקהילה'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center font-bold text-sm transition"
            title="סגור (ESC)"
          >
            ✕
          </button>
        </div>

        {/* Job Switcher */}
        <div className="p-3 bg-slate-900/60 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          {Object.keys(MEOWDB_META_GUIDES).map(key => {
            const j = MEOWDB_META_GUIDES[key];
            const isSelected = selectedJob === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedJob(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/30 font-black scale-105'
                    : 'bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                }`}
              >
                <span>{j.icon}</span>
                <span>{j.jobNameHe}</span>
              </button>
            );
          })}
        </div>

        {/* Content Tabs (Stats vs Skills) */}
        <div className="flex border-b border-white/10 bg-slate-950/70 p-2 gap-2 text-xs">
          <button
            onClick={() => setActiveMetaTab('stats')}
            className={`flex-1 py-2 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
              activeMetaTab === 'stats'
                ? 'bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-200 border border-amber-400/50 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>✨</span>
            <span>{langMode === 'en' ? 'AP & Stat Builds (Dexless / Low / Standard)' : 'המלצות סטייטים וחלוקת AP (דקסלס / רגיל)'}</span>
          </button>

          <button
            onClick={() => setActiveMetaTab('skills')}
            className={`flex-1 py-2 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
              activeMetaTab === 'skills'
                ? 'bg-gradient-to-r from-cyan-500/30 to-sky-600/30 text-cyan-200 border border-cyan-400/50 shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>📜</span>
            <span>{langMode === 'en' ? 'Optimal Skill Point (SP) Progression' : 'סדר העלאת סקילים אופטימלי (SP Progress)'}</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 max-h-[60vh]">
          {/* STAT BUILDS VIEW */}
          {activeMetaTab === 'stats' && (
            <div className="space-y-6">
              <div className="bg-sky-950/30 border border-sky-400/30 p-3.5 rounded-2xl text-xs text-sky-200 leading-relaxed">
                💡 <strong className="text-white">סקירה כללית: </strong>
                {currentGuide.overview}
              </div>

              <div className="space-y-4">
                {currentGuide.statBuilds.map(build => (
                  <div key={build.id} className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-black text-white">{build.name}</h4>
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold border ${build.badgeColor}`}>
                          {build.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {build.summary}
                    </p>

                    {build.mathFormula && (
                      <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-200">
                        📐 <strong className="text-purple-300">נוסחת נזק (MeowDB Math):</strong> {build.mathFormula}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-emerald-950/30 border border-emerald-500/30 p-3 rounded-xl space-y-1.5">
                        <div className="font-bold text-emerald-300 flex items-center gap-1">
                          <span>✅</span>
                          <span>יתרונות מרכזיים:</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                          {build.pros.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-rose-950/30 border border-rose-500/30 p-3 rounded-xl space-y-1.5">
                        <div className="font-bold text-rose-300 flex items-center gap-1">
                          <span>⚠️</span>
                          <span>חסרונות ודגשים:</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                          {build.cons.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {build.gearRoadmap && (
                      <div className="space-y-1.5 pt-2 border-t border-white/10">
                        <div className="text-xs font-bold text-amber-300">
                          🛡️ שלבי ציוד מומלצים לבילד זה:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {build.gearRoadmap.map((gear, i) => (
                            <div key={i} className="liquid-glass-pill p-2 rounded-xl border border-white/10 text-xs flex items-center justify-between gap-2">
                              <div>
                                <span className="font-bold text-white text-[11px]">{gear.item}</span>
                                <span className="text-[10px] text-slate-400 block">{gear.note}</span>
                              </div>
                              <span className="text-[10px] font-mono font-bold text-amber-300 shrink-0">
                                רמה {gear.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS VIEW */}
          {activeMetaTab === 'skills' && (
            <div className="space-y-6">
              {/* Job 1 Progression */}
              <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h4 className="font-black text-cyan-300 text-sm sm:text-base">
                    {currentGuide.skillProgression.job1.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-300">רמות 10-30</span>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed font-medium bg-cyan-950/30 p-2.5 rounded-xl border border-cyan-500/20">
                  🎯 <strong>הרציונל לפי MeowDB: </strong>{currentGuide.skillProgression.job1.rationale}
                </p>

                <div className="space-y-2">
                  {currentGuide.skillProgression.job1.buildOrder.map(step => (
                    <div key={step.step} className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 flex items-center justify-between gap-3 text-xs hover:border-cyan-400/40 transition">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                          {step.step}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-white">{step.level}</span>
                            <span className="text-cyan-300 font-bold font-mono">{step.sp}</span>
                          </div>
                          <div className="text-[11px] text-slate-300 mt-0.5">{step.why}</div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900/80 text-amber-300 font-mono font-bold shrink-0 border border-white/10">
                        {step.cumulative}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job 2 Progression */}
              <div className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <h4 className="font-black text-purple-300 text-sm sm:text-base">
                    {currentGuide.skillProgression.job2.title}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-300">רמות 30-70</span>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed font-medium bg-purple-950/30 p-2.5 rounded-xl border border-purple-500/20">
                  🎯 <strong>הרציונל לפי MeowDB: </strong>{currentGuide.skillProgression.job2.rationale}
                </p>

                <div className="space-y-2">
                  {currentGuide.skillProgression.job2.buildOrder.map(step => (
                    <div key={step.step} className="liquid-glass-subtle p-2.5 rounded-xl border border-white/10 flex items-center justify-between gap-3 text-xs hover:border-purple-400/40 transition">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-300 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                          {step.step}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black text-white">{step.level}</span>
                            <span className="text-purple-300 font-bold font-mono">{step.sp}</span>
                          </div>
                          <div className="text-[11px] text-slate-300 mt-0.5">{step.why}</div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-900/80 text-amber-300 font-mono font-bold shrink-0 border border-white/10">
                        {step.cumulative}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>💡 המידע מבוסס על מטא קהילתית v0.62 וניתוחי MeowDB</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition shadow"
          >
            סגור מדריך
          </button>
        </div>
      </div>
    </div>
  );
}
