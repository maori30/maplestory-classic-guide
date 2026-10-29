import { useLanguage } from '../context/LanguageContext.jsx';
import React, { useState, useEffect, useRef } from 'react';
import { performLiveSync, getLastSyncInfo, AUTHORITATIVE_SOURCES } from '../services/liveSyncService.js';

export default function LiveSyncModal({ isOpen, onClose, onSyncComplete }) {
  const { langMode, isRTL, t } = useLanguage();
  const [isSyncing, setIsSyncing] = useState(false);
  const [logs, setLogs] = useState([]);
  const [syncResult, setSyncResult] = useState(null);
  const [lastSync, setLastSync] = useState(getLastSyncInfo());
  const modalRef = useRef(null);
  const logsEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setLastSync(getLastSyncInfo());
    }
  }, [isOpen]);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isSyncing) onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isSyncing, onClose]);

  if (!isOpen) return null;

  const handleStartSync = async () => {
    setIsSyncing(true);
    setLogs([]);
    setSyncResult(null);

    const res = await performLiveSync(({ logs: newLogs }) => {
      setLogs(newLogs);
    });

    setIsSyncing(false);
    setSyncResult(res);
    setLastSync(getLastSyncInfo());
    if (res.success && onSyncComplete) {
      onSyncComplete(res);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={() => !isSyncing && onClose()} />

      <div
        ref={modalRef}
        dir={isRTL ? "rtl" : "ltr"} className="w-full max-w-4xl liquid-glass rounded-3xl p-5 sm:p-7 relative z-10 shadow-2xl border border-sky-300/30 backdrop-blur-2xl text-start overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Glow Ambient Lights */}
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/30 to-cyan-400/40 border border-emerald-400/40 flex items-center justify-center text-2xl shadow-lg">
              <span className={isSyncing ? 'animate-spin' : ''}>🔄</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/40">
                  MSCW v1.0.0 Live Sync Engine
                </span>
                <span className="text-xs text-sky-200">{t('liveSyncSub')}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5 tracking-tight">
                {t('liveSyncTitle')}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            disabled={isSyncing}
            className="p-2 rounded-xl liquid-glass-pill hover:border-white/40 text-slate-300 hover:text-white transition text-xs font-bold disabled:opacity-40"
          >
            ✕ {t('close')}
          </button>
        </div>

        {/* 6 Authoritative Sources Grid */}
        <div className="mb-4 relative z-10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
              <span>🌐</span>
              <span>{t('officialSourcesTitle')}</span>
            </span>
            <span className="text-[10px] text-slate-400">{t('clickToOpenBrowser')}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {AUTHORITATIVE_SOURCES.map((src) => {
              const status = lastSync?.sourcesStatus?.[src.id] || 'online';
              return (
                <div
                  key={src.id}
                  className="liquid-glass-card p-3 rounded-2xl border border-sky-400/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-white text-xs flex items-center gap-1.5">
                        <span className="text-sm">{src.icon}</span>
                        <span className="truncate max-w-[150px]">{src.shortName}</span>
                      </span>
                      <span className="text-[10px] text-emerald-300 font-mono font-bold flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {status === 'online' ? (langMode === 'en' ? 'Online' : 'מקוון') : (langMode === 'en' ? 'Synced' : 'מסונכרן')}
                      </span>
                    </div>

                    <div className="text-[10px] text-cyan-200 font-medium">
                      {src.category}
                    </div>

                    <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                      {src.description}
                    </p>

                    <div className="text-[10px] text-amber-200/90 font-mono pt-0.5 truncate">
                      📊 {src.stats}
                    </div>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] text-slate-400 font-mono">
                      {src.license}
                    </span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[10px] font-bold text-cyan-400 hover:text-cyan-200 flex items-center gap-1 underline underline-offset-2"
                    >
                      <span>{t('visitSite')}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sync Status Banner */}
        <div className="liquid-glass-subtle p-3 rounded-2xl border border-white/10 mb-3 flex items-center justify-between flex-wrap gap-2 text-xs relative z-10">
          <div className="flex items-center gap-2">
            <span className="text-slate-300 font-bold">{t('lastSyncStatus')}</span>
            {lastSync ? (
              <span className="font-bold text-emerald-300 font-mono">
                {lastSync.formattedTime} ({lastSync.itemsCount.toLocaleString()} {t('itemsUpdated')})
              </span>
            ) : (
              <span className="font-bold text-amber-300">{t('noSyncYet')}</span>
            )}
          </div>
          <div className="text-[11px] text-cyan-200 font-medium flex items-center gap-1.5">
            <span>💾</span>
            <span>{t('savedInCache')}</span>
          </div>
        </div>

        {/* Live Terminal / Log Window */}
        <div className="flex-1 min-h-[140px] max-h-[190px] bg-slate-950/90 rounded-2xl p-3 border border-sky-400/20 overflow-y-auto font-mono text-xs space-y-1 text-slate-200 relative z-10 shadow-inner">
          {logs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center py-4">
              <span className="text-2xl mb-1">⚡</span>
              <span>{t('syncInstructions')}</span>
            </div>
          ) : (
            logs.map((log, idx) => {
              const color =
                log.level === 'success'
                  ? 'text-emerald-300 font-bold'
                  : log.level === 'warn'
                  ? 'text-amber-300'
                  : log.level === 'error'
                  ? 'text-rose-400 font-bold'
                  : 'text-slate-300';
              return (
                <div key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-slate-500 shrink-0 text-[10px]">[{log.time}]</span>
                  <span className={color}>{log.msg}</span>
                </div>
              );
            })
          )}
          <div ref={logsEndRef} />
        </div>

        {/* Action Footer */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-3 relative z-10">
          <div className="text-xs text-slate-300">
            {isSyncing ? (
              <span className="flex items-center gap-2 text-cyan-300 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                {t('syncingProgress')}
              </span>
            ) : syncResult?.success ? (
              <span className="text-emerald-300 font-bold flex items-center gap-1.5">
                <span>✓</span>
                <span>{t('syncCompletedSuccess')}</span>
              </span>
            ) : (
              <span>{t('syncFootnote')}</span>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleStartSync}
              disabled={isSyncing}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-lg transition flex items-center gap-2 ${
                isSyncing
                  ? 'bg-slate-700 opacity-60 cursor-not-allowed'
                  : 'liquid-glass-btn-primary hover:scale-[1.02] shadow-cyan-900/40 ring-1 ring-white/30'
              }`}
            >
              <span className={isSyncing ? 'animate-spin' : ''}>🔄</span>
              <span>{isSyncing ? t('syncing') : t('startSyncNow')}</span>
            </button>
            <button
              onClick={onClose}
              disabled={isSyncing}
              className="px-4 py-2.5 rounded-xl liquid-glass-pill hover:border-white/30 text-slate-300 hover:text-white font-bold text-xs sm:text-sm transition disabled:opacity-40"
            >
              {t('close')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
