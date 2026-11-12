import { useLanguage } from '../context/LanguageContext.jsx';
import React, { useState, useEffect } from 'react';
import { ARCHETYPES, CLASSES_DATA } from '../data/classesData.js';
import { MAPLE_ICON } from '../assets/mapleIcon.js';

export default function ClassSelectorModal({
  isOpen,
  currentJobId,
  currentBuild,
  onSelectJob,
  onClose
}) {
  const [selectedArchetype, setSelectedArchetype] = useState(() => {
    const active = CLASSES_DATA[currentJobId];
    return active ? active.archetype : 'thief';
  });

  const [previewJobId, setPreviewJobId] = useState(currentJobId || 'assassin');
  const [selectedBuild, setSelectedBuild] = useState(currentBuild || 'dexless');

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

  const currentArchetypeJobs = Object.values(CLASSES_DATA).filter(
    j => j.archetype === selectedArchetype
  );

  const previewJob = CLASSES_DATA[previewJobId] || currentArchetypeJobs[0];

  const handleArchetypeClick = (archId) => {
    setSelectedArchetype(archId);
    const firstJob = Object.values(CLASSES_DATA).find(j => j.archetype === archId);
    if (firstJob) {
      setPreviewJobId(firstJob.id);
      setSelectedBuild(firstJob.buildVariants[0].id);
    }
  };

  const handleJobCardClick = (jobId) => {
    setPreviewJobId(jobId);
    const job = CLASSES_DATA[jobId];
    if (job) {
      setSelectedBuild(job.buildVariants[0].id);
    }
  };

  const handleConfirm = () => {
    onSelectJob(previewJobId, selectedBuild);
    if (onClose) onClose();
  };

  return (
    <div
      onClick={onClose}
      dir={isRTL ? "rtl" : "ltr"} className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xl overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl liquid-glass border-2 border-sky-300/30 rounded-3xl shadow-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-900/60 via-slate-900/80 to-cyan-900/60 p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl liquid-glass-pill p-2 flex items-center justify-center border border-white/20 shadow-lg">
              <img src={MAPLE_ICON} alt="Maple" className="w-8 h-8 object-contain drop-shadow" />
            </div>
            <div>
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-sky-500/30 text-sky-200 border border-sky-400/40">
                {langMode === 'en' ? 'Multi-Class Selection System' : 'מערכת בחירת מקצועות רב-תכליתית'}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                {t('classModalTitle')}
              </h2>
            </div>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full liquid-glass-pill text-slate-300 hover:text-white flex items-center justify-center font-black text-sm transition"
            >
              ✕
            </button>
          )}
        </div>

        {/* Archetype Selector Tabs */}
        <div className="p-2.5 border-b border-white/10 flex items-center gap-2 overflow-x-auto bg-slate-900/40">
          {ARCHETYPES.map(arch => {
            const isSelected = selectedArchetype === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => handleArchetypeClick(arch.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition whitespace-nowrap border ${
                  isSelected
                    ? 'liquid-glass-btn-primary text-white shadow-md shadow-sky-600/40 ring-1 ring-white/30'
                    : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/15'
                }`}
              >
                <span className="text-base">{arch.icon}</span>
                <span>{langMode === 'en' ? arch.name : `${arch.nameHe} (${arch.name})`}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body: Left Column Jobs, Right Column Job Details Preview */}
        <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 max-h-[65vh] overflow-y-auto">
          
          {/* Left: Job Cards */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {langMode === 'en' ? `Available Jobs Under ${ARCHETYPES.find(a => a.id === selectedArchetype)?.name}:` : `עבודות זמינות תחת ${ARCHETYPES.find(a => a.id === selectedArchetype)?.nameHe}:`}
            </div>

            <div className="space-y-2">
              {currentArchetypeJobs.map(job => {
                const isSelected = previewJobId === job.id;
                return (
                  <div
                    key={job.id}
                    onClick={() => handleJobCardClick(job.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-sky-600/30 border-sky-400 shadow-xl shadow-sky-600/30 ring-1 ring-sky-300/40'
                        : 'liquid-glass-card hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl liquid-glass-pill p-2 rounded-xl border border-white/15">
                        {job.icon}
                      </span>
                      <div>
                        <div className="font-black text-white text-sm">{langMode === 'en' ? job.name : job.nameHe}</div>
                        <div className="text-xs text-sky-200 font-mono font-medium">{job.name}</div>
                      </div>
                    </div>

                    <span className="text-xs font-black px-2.5 py-1 rounded-xl liquid-glass-pill text-amber-300 border border-amber-400/30 font-mono">
                      {job.primaryStat}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Job Preview & Build Variant Selection */}
          <div className="md:col-span-7 liquid-glass-card rounded-3xl p-5 border border-white/15 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <div className="flex items-center gap-3">
                <span className="text-4xl liquid-glass-pill p-2.5 rounded-2xl border border-white/20 shadow-inner">
                  {previewJob.icon}
                </span>
                <div>
                  <h3 className="text-lg font-black text-white">{langMode === 'en' ? previewJob.name : previewJob.nameHe}</h3>
                  <p className="text-xs text-slate-300">{langMode === 'en' ? (previewJob.taglineEn || previewJob.tagline) : previewJob.tagline}</p>
                </div>
              </div>

              <div className="text-right text-xs">
                <div className="text-slate-400">{langMode === 'en' ? 'Origin Town:' : 'עיר מוצא:'}</div>
                <div className="font-bold text-cyan-300">{langMode === 'en' ? previewJob.town.replace(/\s*\(.*?\)/, '') : previewJob.town}</div>
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="liquid-glass-pill p-3 rounded-2xl border border-white/10">
                <span className="text-slate-300 block text-[10px] font-medium">{langMode === 'en' ? 'Primary / Secondary Stat:' : 'סטט ראשי / משני:'}</span>
                <span className="font-black text-amber-300 font-mono text-sm">{previewJob.primaryStat}</span>
                <span className="text-slate-300 text-[11px] font-sans"> ({langMode === 'en' ? 'Secondary:' : 'משני:'} {previewJob.secondaryStat})</span>
              </div>
              <div className="liquid-glass-pill p-3 rounded-2xl border border-white/10">
                <span className="text-slate-300 block text-[10px] font-medium">{langMode === 'en' ? 'Primary Weapons:' : 'כלי נשק ראשיים:'}</span>
                <span className="font-black text-emerald-300 text-sm">
                  {previewJob.weapons.map(w => langMode === 'en' ? w.replace(/\s*\(.*?\)/, '') : w).join(', ')}
                </span>
              </div>
            </div>

            {/* Build Variants Selector */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-black text-amber-300 flex items-center gap-1.5">
                <span>⚖️</span>
                <span>{langMode === 'en' ? 'Select Stat Allocation (Build Variant):' : 'בחר סגנון חלוקת סטטים (Build Variant):'}</span>
              </div>

              <div className="space-y-2">
                {previewJob.buildVariants.map(variant => {
                  const isBuildActive = selectedBuild === variant.id;
                  return (
                    <div
                      key={variant.id}
                      onClick={() => setSelectedBuild(variant.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition text-xs flex items-start gap-3 ${
                        isBuildActive
                          ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                          : 'liquid-glass-pill hover:border-white/30'
                      }`}
                    >
                      <input
                        type="radio"
                        checked={isBuildActive}
                        onChange={() => setSelectedBuild(variant.id)}
                        className="mt-0.5 text-amber-400 focus:ring-0 cursor-pointer"
                      />
                      <div>
                        <div className="font-black text-white text-xs">
                          {langMode === 'en' ? variant.name : variant.nameHe}
                        </div>
                        <div className="text-slate-200 text-[11px] mt-0.5 leading-relaxed">
                          {langMode === 'en' ? (variant.descEn || variant.desc) : variant.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Skills Preview */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[11px] font-bold text-sky-200">{langMode === 'en' ? 'Core Skills (1st & 2nd Job):' : 'סקילים מרכזיים (עבודה ראשונה ושנייה):'}</span>
              <div className="flex flex-wrap gap-1.5">
                {[...previewJob.skills1.slice(0, 3), ...previewJob.skills2.slice(0, 3)].map((s, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 liquid-glass-pill px-3 py-1 rounded-xl text-[11px] text-slate-100 font-medium"
                  >
                    <span>{s.icon}</span>
                    <span>{s.nameEn || s.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="text-xs text-slate-300">
            {langMode === 'en' ? 'Selected:' : 'נבחר:'} <span className="text-white font-black">{langMode === 'en' ? previewJob.name : previewJob.nameHe}</span> ({langMode === 'en' ? previewJob.buildVariants.find(b => b.id === selectedBuild)?.name : previewJob.buildVariants.find(b => b.id === selectedBuild)?.nameHe})
          </div>

          <div className="flex items-center gap-2.5">
            {onClose && (
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold liquid-glass-pill text-slate-300 hover:text-white transition"
              >
                ביטול
              </button>
            )}
            <button
              onClick={handleConfirm}
              className="liquid-glass-btn-primary px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white shadow-xl shadow-sky-600/40 transition transform active:scale-95"
            >
              {langMode === 'en' ? `Launch Guide for ${previewJob.name} 🚀` : `הפעל מדריך עבור ${previewJob.nameHe} 🚀`}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
