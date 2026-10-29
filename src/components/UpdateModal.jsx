import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { 
  CURRENT_VERSION, 
  GITHUB_OWNER, 
  GITHUB_REPO, 
  REPO_URL, 
  checkForAppUpdates 
} from '../services/updateService.js';

export default function UpdateModal({ isOpen, onClose }) {
  const { langMode, isRTL, t } = useLanguage();
  const isEn = langMode === 'en';

  const [loading, setLoading] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(null);

  const performCheck = async () => {
    setLoading(true);
    try {
      const res = await checkForAppUpdates();
      setUpdateInfo(res);
    } catch (e) {
      setUpdateInfo({ error: e.message, hasUpdate: false, currentVersion: CURRENT_VERSION });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      performCheck();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div 
        className="w-full max-w-lg liquid-glass-panel rounded-3xl p-6 border border-sky-400/40 shadow-2xl relative overflow-hidden text-start"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient accent */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-cyan-500/20 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-gradient-to-tr from-sky-500/20 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-500/30 to-cyan-500/30 border border-purple-400/40 flex items-center justify-center text-xl shadow-lg shrink-0">
              🐙
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                {isEn ? 'GitHub Software Updates' : 'עדכוני תוכנה וגרסאות מ-GitHub'}
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-200 border border-cyan-400/30">
                  v{CURRENT_VERSION}
                </span>
              </h2>
              <p className="text-xs text-slate-300 mt-0.5">
                {isEn 
                  ? 'Automatic version synchronization & release distribution' 
                  : 'סנכרון גרסאות אוטומטי והפצת עדכונים לשחקנים'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full liquid-glass-pill hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-4 relative z-10">
          {/* GitHub Repo info pill */}
          <div className="liquid-glass-pill p-3 rounded-2xl border border-white/10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="text-base">📦</span>
              <span className="text-slate-300">{isEn ? 'GitHub Repository:' : 'מאגר GitHub:'}</span>
              <span className="font-mono text-cyan-300 font-bold">
                {GITHUB_OWNER}/{GITHUB_REPO}
              </span>
            </div>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="text-amber-300 hover:text-amber-200 font-bold underline transition"
            >
              {isEn ? 'Open' : 'פתח'} ↗
            </a>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="liquid-glass-card p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-slate-300">
                {isEn ? 'Checking GitHub Releases for new updates...' : 'בודק מול GitHub אם קיימות גרסאות חדשות...'}
              </p>
            </div>
          )}

          {/* Result: Update Available */}
          {!loading && updateInfo?.hasUpdate && (
            <div className="liquid-glass-card p-5 rounded-2xl border border-emerald-400/50 bg-emerald-500/10 space-y-3 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-300 flex items-center gap-1.5">
                  <span className="animate-bounce">🎉</span>
                  {isEn ? 'New Version Available!' : 'יש עדכון חדש זמין להורדה!'}
                </span>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/40">
                  v{updateInfo.latestVersion}
                </span>
              </div>

              {updateInfo.releaseName && (
                <div className="font-bold text-white text-sm">
                  {updateInfo.releaseName}
                </div>
              )}

              {updateInfo.releaseNotes && (
                <div className="text-xs text-slate-200 bg-slate-900/60 p-3 rounded-xl border border-white/10 max-h-32 overflow-y-auto whitespace-pre-line leading-relaxed font-sans">
                  {updateInfo.releaseNotes}
                </div>
              )}

              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 font-mono">
                  {updateInfo.exeSizeMb ? `${updateInfo.exeSizeMb} MB` : ''} 
                  {updateInfo.publishedAt ? ` • פורסם ב-${updateInfo.publishedAt}` : ''}
                </span>

                <a
                  href={updateInfo.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg hover:scale-[1.02] transition flex items-center gap-2"
                >
                  <span>📥</span>
                  <span>{isEn ? 'Download New Version' : 'הורד גרסה חדשה עכשיו'}</span>
                </a>
              </div>
            </div>
          )}

          {/* Result: Up To Date */}
          {!loading && updateInfo && !updateInfo.hasUpdate && !updateInfo.noReleasesYet && !updateInfo.error && (
            <div className="liquid-glass-card p-5 rounded-2xl border border-cyan-400/40 text-center space-y-2">
              <div className="text-3xl">✨</div>
              <div className="font-black text-white text-sm">
                {isEn ? 'You are using the latest version!' : 'התוכנה מעודכנת לגרסה האחרונה!'}
              </div>
              <p className="text-xs text-slate-300">
                {isEn 
                  ? `Installed version v${CURRENT_VERSION} matches the latest release.` 
                  : `גרסה v${CURRENT_VERSION} המותקנת אצלך זהה לגרסה המפורסמת ביותר ב-GitHub.`}
              </p>
            </div>
          )}

          {/* Result: Connected / Waiting for first release */}
          {!loading && updateInfo?.noReleasesYet && (
            <div className="liquid-glass-card p-5 rounded-2xl border border-amber-400/40 text-center space-y-3">
              <div className="text-3xl">🚀</div>
              <div className="font-black text-amber-300 text-sm">
                {isEn ? 'Connected to GitHub!' : 'התוכנה חוברה בהצלחה למאגר GitHub!'}
              </div>
              <p className="text-xs text-slate-200 leading-relaxed text-center">
                {isEn
                  ? 'The app is configured to check this repository. When you publish a new Release on GitHub, all players running this software will automatically be notified here!'
                  : 'התוכנה מוגדרת לבדוק עדכונים מול המאגר הזה. ברגע שתפרסם שחרור גרסה (Release) ב-GitHub, כל שחקן שמריץ את התוכנה יקבל מיד התראה והורדה בלחיצה אחת!'}
              </p>
            </div>
          )}

          {/* Result: Network or GitHub error */}
          {!loading && updateInfo?.error && (
            <div className="liquid-glass-card p-4 rounded-2xl border border-rose-400/40 text-xs text-rose-300 space-y-1">
              <div className="font-bold">⚠️ {isEn ? 'Check failed:' : 'שגיאה בבדיקת עדכונים:'}</div>
              <div className="text-[11px] text-slate-300 font-mono">{updateInfo.error}</div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <button
            onClick={performCheck}
            disabled={loading}
            className="px-3 py-1.5 rounded-xl liquid-glass-pill hover:text-white flex items-center gap-1.5 transition disabled:opacity-50"
          >
            <span>🔄</span>
            <span>{isEn ? 'Check Again' : 'בדוק שוב עכשיו'}</span>
          </button>

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
