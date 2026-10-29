import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { CLASSES_DATA } from '../data/classesData.js';

const STORAGE_PRESETS_KEY = 'maple_custom_presets';

// Default starter presets so the user immediately has awesome builds to explore
const DEFAULT_PRESETS = [
  {
    id: 'preset-assassin-43',
    buildName: 'Meba King Dexless Assassin',
    jobId: 'assassin',
    jobName: 'Assassin',
    jobNameHe: 'מתנקש',
    level: 43,
    buildType: 'dexless',
    timestamp: 1730000000000,
    secondaryName: 'DEX',
    secondaryTarget: 25,
    primaryName: 'LUK',
    note: 'נזק מתפרץ מקסימלי עם Meba מהירה (Speed 3) וכוכבי סטילי/טובי'
  },
  {
    id: 'preset-cleric-35',
    buildName: 'Pure INT Cleric (LPQ Heal Bomber)',
    jobId: 'cleric',
    jobName: 'Cleric',
    jobNameHe: 'קוסם (Cleric)',
    level: 35,
    buildType: 'lukless',
    timestamp: 1730000000000,
    secondaryName: 'LUK',
    secondaryTarget: 4,
    primaryName: 'INT',
    note: 'בניית Pure INT לחריכת זומבים ו-Heal Bombing קטלני בלודי PQ'
  },
  {
    id: 'preset-spearman-50',
    buildName: 'Polearm Spearman (Iron Body Tank)',
    jobId: 'spearman',
    jobName: 'Spearman',
    jobNameHe: 'לוחם (Spearman)',
    level: 50,
    buildType: 'regular',
    timestamp: 1730000000000,
    secondaryName: 'DEX',
    secondaryTarget: 80,
    primaryName: 'STR',
    note: 'ספירמן קלאסי עם נשק מוט Biter, דיוק גבוה ועוצמת Hyper Body לפארטי'
  }
];

export default function BuildShareModal({
  isOpen,
  onClose,
  currentJob,
  currentLevel,
  currentBuild,
  apDetails,
  currentStep,
  skillsInfo,
  onLoadBuild
}) {
  const { langMode, isRTL, t } = useLanguage();
  const isEn = langMode === 'en';

  const [activeTab, setActiveTab] = useState('export'); // 'export' | 'import' | 'presets'
  const [customName, setCustomName] = useState('');
  const [copiedToast, setCopiedToast] = useState(null);
  const [importInput, setImportInput] = useState('');
  const [importPreview, setImportPreview] = useState(null);
  const [importError, setImportError] = useState(null);

  // Saved presets state
  const [presets, setPresets] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_PRESETS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return DEFAULT_PRESETS;
    } catch {
      return DEFAULT_PRESETS;
    }
  });

  // Save presets to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_PRESETS_KEY, JSON.stringify(presets));
    } catch (e) {
      console.warn('Failed to save presets:', e);
    }
  }, [presets]);

  // Toast timer
  useEffect(() => {
    if (copiedToast) {
      const timer = setTimeout(() => setCopiedToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [copiedToast]);

  // Build variant metadata
  const activeVariant = useMemo(() => {
    return currentJob?.buildVariants?.find(v => v.id === currentBuild) || {
      name: currentBuild,
      nameHe: currentBuild
    };
  }, [currentJob, currentBuild]);

  // Generate compact share code (Base64 UTF-8)
  const shareCode = useMemo(() => {
    if (!currentJob) return '';
    const payload = {
      v: 1,
      jobId: currentJob.id,
      jobName: currentJob.name,
      jobNameHe: currentJob.nameHe,
      level: currentLevel,
      buildType: currentBuild,
      buildName: customName.trim() || `${currentJob.name} Lv.${currentLevel}`,
      secondaryName: apDetails?.secondaryName || 'DEX',
      secondaryTarget: apDetails?.secondaryVal || 25,
      primaryName: apDetails?.primaryName || 'LUK',
      timestamp: Date.now()
    };
    try {
      const json = JSON.stringify(payload);
      const b64 = btoa(encodeURIComponent(json));
      return `MSCW-${b64}`;
    } catch {
      return '';
    }
  }, [currentJob, currentLevel, currentBuild, customName, apDetails]);

  // Generate formatted Discord text
  const discordSummary = useMemo(() => {
    if (!currentJob) return '';
    const bName = customName.trim() || `${currentJob.name} Lv.${currentLevel}`;
    const varName = isEn ? activeVariant.name : (activeVariant.nameHe || activeVariant.name);
    
    // Top 3 skills at current level
    const topSkills = Object.entries(currentStep?.cumulative || {})
      .filter(([_, pts]) => pts > 0)
      .slice(0, 4)
      .map(([k, pts]) => {
        const s = skillsInfo?.[k];
        return s ? `• ${s.nameEn} (${pts}/${s.max})` : `• ${k} (${pts})`;
      })
      .join('\n');

    return [
      `🍁 **MapleStory Classic World — Character Build** 🍁`,
      `🏷️ **Title:** ${bName}`,
      `👤 **Class:** ${currentJob.name} (${currentJob.nameHe}) • **Level:** ${currentLevel}`,
      `⚡ **Build Style:** ${varName}`,
      `🎯 **Stat Target:** ${apDetails?.secondaryName || 'DEX'}: ${apDetails?.secondaryVal || 25} (All other AP into ${apDetails?.primaryName || 'LUK'})`,
      `⚔️ **Primary Weapon:** ${currentJob.weapons?.[0] || 'Standard'}`,
      topSkills ? `📜 **Key Skills:**\n${topSkills}` : '',
      `🔑 **Share Code:** \`${shareCode}\``,
      `*(Paste into MapleStory Classic Guide desktop app to load)*`
    ].filter(Boolean).join('\n');
  }, [currentJob, currentLevel, customName, activeVariant, apDetails, currentStep, skillsInfo, shareCode, isEn]);

  // Copy helper
  const handleCopy = (text, message) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedToast(message);
    } catch (e) {
      console.warn('Clipboard write failed:', e);
    }
  };

  // Save current build to presets list
  const handleSaveToPresets = () => {
    const newPreset = {
      id: `preset-${Date.now()}`,
      buildName: customName.trim() || `${currentJob.name} Lv.${currentLevel} (${activeVariant.name})`,
      jobId: currentJob.id,
      jobName: currentJob.name,
      jobNameHe: currentJob.nameHe,
      level: currentLevel,
      buildType: currentBuild,
      timestamp: Date.now(),
      secondaryName: apDetails?.secondaryName || 'DEX',
      secondaryTarget: apDetails?.secondaryVal || 25,
      primaryName: apDetails?.primaryName || 'LUK',
      note: isEn ? `Saved at Lv. ${currentLevel}` : `נשמר ברמה ${currentLevel}`
    };

    setPresets(prev => [newPreset, ...prev]);
    setCopiedToast(t('buildSavedToast'));
  };

  // Delete preset
  const handleDeletePreset = (id, e) => {
    e.stopPropagation();
    setPresets(prev => prev.filter(p => p.id !== id));
  };

  // Live import parser
  const handleImportInputChange = (val) => {
    setImportInput(val);
    setImportError(null);
    setImportPreview(null);

    const trimmed = val.trim();
    if (!trimmed) return;

    try {
      let rawJson = '';
      if (trimmed.startsWith('MSCW-')) {
        const b64 = trimmed.slice(5);
        rawJson = decodeURIComponent(atob(b64));
      } else if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
        rawJson = trimmed;
      } else {
        setImportError(t('invalidBuildCode'));
        return;
      }

      const parsed = JSON.parse(rawJson);
      if (!parsed || !parsed.jobId || !parsed.level) {
        setImportError(t('invalidBuildCode'));
        return;
      }

      const jobData = CLASSES_DATA[parsed.jobId];
      if (!jobData) {
        setImportError(isEn ? `Unknown class ID: ${parsed.jobId}` : `מקצוע לא מוכר: ${parsed.jobId}`);
        return;
      }

      setImportPreview({
        ...parsed,
        jobData,
        level: Math.max(10, Math.min(70, parseInt(parsed.level, 10) || 10)),
        buildType: parsed.buildType || jobData.buildVariants[0].id
      });
    } catch (err) {
      setImportError(t('invalidBuildCode'));
    }
  };

  // Apply previewed or selected build
  const handleApplyBuild = (buildToApply) => {
    if (!buildToApply) return;
    if (onLoadBuild) {
      onLoadBuild(buildToApply.jobId, buildToApply.level, buildToApply.buildType);
    }
    setCopiedToast(t('buildAppliedToast'));
    setTimeout(() => {
      onClose();
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="w-full max-w-3xl liquid-glass rounded-3xl p-5 sm:p-7 relative z-10 shadow-2xl border border-sky-300/30 backdrop-blur-2xl text-start overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Ambient Lights */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 relative z-10 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-amber-500/30 border border-cyan-400/40 flex items-center justify-center text-2xl shadow-lg">
              <span>📤</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/40">
                  Build Sharing Engine
                </span>
                <span className="text-xs text-amber-300 font-bold">Pre-BigBang MSCW</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black text-white mt-0.5 tracking-tight">
                {t('shareModalTitle')}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl liquid-glass-pill hover:border-white/40 text-slate-300 hover:text-white transition text-xs font-bold"
          >
            ✕ {t('close')}
          </button>
        </div>

        {/* Success Toast */}
        {copiedToast && (
          <div className="mb-3 px-4 py-2.5 rounded-2xl bg-emerald-500/25 border border-emerald-400/50 text-emerald-200 text-xs font-bold flex items-center justify-between animate-fadeIn shadow-lg">
            <span className="flex items-center gap-2">
              <span>✅</span>
              <span>{copiedToast}</span>
            </span>
            <span className="text-[10px] font-mono text-emerald-300">OK</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 liquid-glass-pill rounded-2xl border border-white/15 mb-4 text-xs font-black">
          <button
            onClick={() => setActiveTab('export')}
            className={`flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'export'
                ? 'liquid-glass-btn-primary text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>📤</span>
            <span>{t('tabExport')}</span>
          </button>

          <button
            onClick={() => setActiveTab('import')}
            className={`flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'import'
                ? 'liquid-glass-btn-primary text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>📥</span>
            <span>{t('tabImport')}</span>
          </button>

          <button
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-2 px-3 rounded-xl transition flex items-center justify-center gap-2 ${
              activeTab === 'presets'
                ? 'liquid-glass-btn-primary text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>💾</span>
            <span>{t('tabPresets')} ({presets.length})</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">

          {/* TAB 1: EXPORT & SHARE */}
          {activeTab === 'export' && (
            <div className="space-y-4">
              {/* Current Character Card Summary */}
              <div className="liquid-glass-card p-4 rounded-2xl border border-sky-400/30 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3.5">
                  <span className="text-3xl liquid-glass-pill p-2 rounded-xl border border-white/15">
                    {currentJob?.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-black text-white text-base">
                        {isEn ? currentJob?.name : currentJob?.nameHe}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono font-bold border border-amber-400/30">
                        Lv. {currentLevel}
                      </span>
                    </div>
                    <div className="text-xs text-sky-200 mt-0.5">
                      {isEn ? activeVariant.name : (activeVariant.nameHe || activeVariant.name)} • {apDetails?.secondaryName}: {apDetails?.secondaryVal}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder={isEn ? 'Custom build title...' : 'שם מותאם אישית לבילד...'}
                    className="liquid-glass-input text-xs px-3 py-1.5 rounded-xl border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 w-48"
                  />
                  <button
                    onClick={handleSaveToPresets}
                    className="px-3 py-1.5 rounded-xl liquid-glass-pill hover:border-amber-400 text-amber-300 text-xs font-bold transition flex items-center gap-1.5"
                    title={t('saveToMyBuilds')}
                  >
                    <span>💾</span>
                    <span className="hidden sm:inline">{t('saveToMyBuilds')}</span>
                  </button>
                </div>
              </div>

              {/* Share Code Box */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                  <span>{t('shareCodeTitle')}</span>
                  <span className="text-[10px] text-slate-400 font-mono">MSCW Base64 Encoded</span>
                </div>
                <div className="relative">
                  <textarea
                    readOnly
                    rows={2}
                    value={shareCode}
                    className="w-full bg-slate-900/90 text-cyan-300 font-mono text-xs p-3 rounded-2xl border border-cyan-400/40 select-all focus:outline-none resize-none leading-relaxed"
                  />
                  <button
                    onClick={() => handleCopy(shareCode, isEn ? 'Share code copied to clipboard!' : 'קוד השיתוף הועתק ללוח!')}
                    className="absolute top-2.5 right-2.5 px-3 py-1 rounded-xl bg-cyan-500/30 hover:bg-cyan-500/50 text-cyan-100 text-xs font-bold border border-cyan-400/50 transition shadow-sm"
                  >
                    {t('copyShareCode')}
                  </button>
                </div>
              </div>

              {/* Discord / Social Formatted Preview */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                  <span>{isEn ? 'Formatted Summary (Discord / WhatsApp):' : 'סיכום מעוצב לשיתוף (דיסקורד / ווטסאפ):'}</span>
                  <button
                    onClick={() => handleCopy(discordSummary, isEn ? 'Discord text copied to clipboard!' : 'סיכום הדיסקורד הועתק ללוח!')}
                    className="text-xs text-amber-300 hover:text-amber-200 font-bold transition flex items-center gap-1"
                  >
                    <span>💬</span>
                    <span>{t('copyDiscordSummary')}</span>
                  </button>
                </div>
                <pre className="bg-slate-900/80 text-slate-200 text-[11px] p-3.5 rounded-2xl border border-white/10 font-sans whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                  {discordSummary}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: IMPORT BUILD */}
          {activeTab === 'import' && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-bold block">
                  {t('pastePrompt')}
                </label>
                <textarea
                  rows={3}
                  value={importInput}
                  onChange={(e) => handleImportInputChange(e.target.value)}
                  placeholder={t('pastePlaceholder')}
                  className="w-full bg-slate-900/90 text-white font-mono text-xs p-3 rounded-2xl border border-white/20 focus:border-cyan-400 focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Error Alert */}
              {importError && (
                <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{importError}</span>
                </div>
              )}

              {/* Live Preview Card */}
              {importPreview && (
                <div className="liquid-glass-accent-cyan p-4 rounded-2xl border border-cyan-400/50 space-y-3 animate-fadeIn">
                  <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <span>🔍</span>
                    <span>{t('previewBuildTitle')}</span>
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl liquid-glass-pill p-2 rounded-xl border border-cyan-400/30">
                        {importPreview.jobData?.icon}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-black text-white text-base">
                            {isEn ? importPreview.jobData?.name : importPreview.jobData?.nameHe}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-mono font-bold border border-amber-400/30">
                            Lv. {importPreview.level}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          {importPreview.buildName || 'Custom Build'} • {importPreview.secondaryName}: {importPreview.secondaryTarget}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleApplyBuild(importPreview)}
                      className="liquid-glass-btn-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white shadow-lg shadow-cyan-900/40 hover:scale-[1.02] transition"
                    >
                      {t('applyBuildToGuide')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SAVED PRESETS */}
          {activeTab === 'presets' && (
            <div className="space-y-3">
              <div className="text-xs text-slate-300 flex items-center justify-between">
                <span>{isEn ? 'Click any saved character build to load it immediately:' : 'לחץ על כל בילד שמור כדי לטעון אותו מיידית למדריך:'}</span>
                <span className="font-mono text-cyan-300 font-bold">{presets.length} {isEn ? 'builds' : 'בילדים'}</span>
              </div>

              <div className="space-y-2.5 max-h-80 overflow-y-auto">
                {presets.map((preset) => {
                  const job = CLASSES_DATA[preset.jobId];
                  return (
                    <div
                      key={preset.id}
                      onClick={() => handleApplyBuild(preset)}
                      className="liquid-glass-pill hover:border-cyan-400/60 p-3.5 rounded-2xl border border-white/10 flex items-center justify-between text-xs cursor-pointer transition group shadow-sm hover:scale-[1.01]"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl liquid-glass-pill p-2 rounded-xl border border-white/10 shrink-0">
                          {job?.icon || '🎮'}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white text-sm group-hover:text-cyan-300 transition">
                              {preset.buildName}
                            </span>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.2 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                              Lv. {preset.level}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-300 mt-0.5">
                            {isEn ? (preset.jobName || job?.name) : (preset.jobNameHe || job?.nameHe)} • {preset.secondaryName}: {preset.secondaryTarget} {preset.note ? `• ${preset.note}` : ''}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleApplyBuild(preset)}
                          className="px-3 py-1.5 rounded-xl bg-cyan-500/25 hover:bg-cyan-500/40 text-cyan-200 font-bold border border-cyan-400/40 transition"
                        >
                          {t('loadPreset')} 🚀
                        </button>
                        <button
                          onClick={(e) => handleDeletePreset(preset.id, e)}
                          className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition text-sm"
                          title={t('deletePreset')}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 mt-2">
          <span>🍁 MapleStory Classic World Build Share Engine</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl liquid-glass-pill text-slate-300 hover:text-white font-bold transition"
          >
            {t('close')}
          </button>
        </div>

      </div>
    </div>
  );
}
