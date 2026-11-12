import React, { useState, useEffect, useMemo, useRef } from 'react';
import { CLASSIC_BOSSES_DATABASE } from '../data/bossesData.js';
import { 
  getSavedCommunityReports, 
  getSavedPersonalReports, 
  fetchLiveBossTimers, 
  broadcastPlayerKill, 
  confirmReport, 
  copyAllCommunityReportsToPersonal, 
  getLastBossSyncTimestamp 
} from '../services/bossTimerSyncService.js';
import { useLanguage } from '../context/LanguageContext.jsx';


function formatRelativeSyncTime(timestamp, currentNow) {
  if (!timestamp) return 'עודכן עכשיו';
  const diffSec = Math.max(0, Math.floor((currentNow - timestamp) / 1000));
  if (diffSec < 5) return 'עודכן עכשיו';
  if (diffSec < 60) return `לפני ${diffSec} שניות`;
  const mins = Math.floor(diffSec / 60);
  if (mins < 60) return `לפני ${mins} דקות`;
  return new Date(timestamp).toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

// Web Audio API Synth Chime for Respawn Alert (zero external audio dependency)
function playRespawnAlertSound() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    const playTone = (freq, start, duration) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.15, start);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + duration);
    };

    // Arpeggio chime: C5 -> E5 -> G5 -> C6
    playTone(523.25, now, 0.15);
    playTone(659.25, now + 0.12, 0.15);
    playTone(783.99, now + 0.24, 0.18);
    playTone(1046.50, now + 0.36, 0.4);
  } catch (err) {
    console.warn('Audio alert error:', err);
  }
}

// Default Community Seed Reports simulating active server players
const INITIAL_COMMUNITY_REPORTS = {
  mushmom: {
    1: { killedAtOffsetMins: 45, reporter: 'ShadowBlade', confirmations: 4 },
    3: { killedAtOffsetMins: 130, reporter: 'MapleSniper', confirmations: 6 },
    7: { killedAtOffsetMins: 175, reporter: 'NightLord99', confirmations: 8 },
    12: { killedAtOffsetMins: 90, reporter: 'IlbiHunter', confirmations: 3 },
    18: { killedAtOffsetMins: 15, reporter: 'StarClaw', confirmations: 2 }
  },
  'zombie-mushmom': {
    2: { killedAtOffsetMins: 70, reporter: 'ClericHeal', confirmations: 5 },
    5: { killedAtOffsetMins: 140, reporter: 'UndeadBane', confirmations: 7 },
    10: { killedAtOffsetMins: 190, reporter: 'GhostBuster', confirmations: 9 }
  },
  mano: {
    1: { killedAtOffsetMins: 20, reporter: 'SnailRacer', confirmations: 3 },
    4: { killedAtOffsetMins: 38, reporter: 'LithHarborBoy', confirmations: 4 },
    8: { killedAtOffsetMins: 48, reporter: 'RainbowShell', confirmations: 5 }
  },
  'jr-balrog': {
    1: { killedAtOffsetMins: 180, reporter: 'DarkKnightX', confirmations: 11 },
    5: { killedAtOffsetMins: 310, reporter: 'SleepyDungeon', confirmations: 14 }
  }
};

export default function BossTimers({ onNavigateToSearch, playerLevel = 50, playerAcc = 100 }) {
  const { langMode, isRTL } = useLanguage();
  const isEn = langMode === 'en';

  const [selectedBossId, setSelectedBossId] = useState('mushmom');
  const [totalChannels, setTotalChannels] = useState(20);
  const [searchFilter, setSearchFilter] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'overview'
  const [trackerMode, setTrackerMode] = useState('personal'); // 'personal' | 'community'
  const [bossInfoTab, setBossInfoTab] = useState('drops'); // 'drops' | 'hit' | 'directions' | 'tactics'

  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      return localStorage.getItem('maple_boss_sound') !== 'false';
    } catch {
      return true;
    }
  });

  // Personal Timers: { [bossId]: { [channelNumber]: { killedAt: timestamp } } }
  const [personalTimers, setPersonalTimers] = useState(() => {
    try {
      const saved = localStorage.getItem('maple_boss_tracker_state');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Community Timers state: { [bossId]: { [channelNumber]: { killedAt: timestamp, reporter: string, confirmations: number } } }
  const [communityTimers, setCommunityTimers] = useState(() => getSavedCommunityReports());
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(() => getLastBossSyncTimestamp());
  const [syncToast, setSyncToast] = useState(null);
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(() => {
    try {
      return localStorage.getItem('maple_boss_auto_sync') !== 'false';
    } catch {
      return true;
    }
  });

  // Current wall-clock time updated every 1s
  const [nowTime, setNowTime] = useState(Date.now());
  const alertedChannelsRef = useRef(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      setNowTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('maple_boss_tracker_state', JSON.stringify(personalTimers));
    } catch {}
  }, [personalTimers]);

  useEffect(() => {
    try {
      localStorage.setItem('maple_boss_community_state', JSON.stringify(communityTimers));
    } catch {}
  }, [communityTimers]);

  useEffect(() => {
    try {
      localStorage.setItem('maple_boss_sound', soundEnabled.toString());
    } catch {}
  }, [soundEnabled]);

  useEffect(() => {
    try {
      localStorage.setItem('maple_boss_auto_sync', autoSyncEnabled.toString());
    } catch {}
  }, [autoSyncEnabled]);

  const selectedBoss = useMemo(() => {
    return CLASSIC_BOSSES_DATABASE.find(b => b.id === selectedBossId) || CLASSIC_BOSSES_DATABASE[0];
  }, [selectedBossId]);

  const filteredBosses = useMemo(() => {
    if (!searchFilter.trim()) return CLASSIC_BOSSES_DATABASE;
    const q = searchFilter.toLowerCase().trim();
    return CLASSIC_BOSSES_DATABASE.filter(b => 
      b.name.toLowerCase().includes(q) ||
      b.nameHe.toLowerCase().includes(q) ||
      b.town.toLowerCase().includes(q) ||
      b.mapName.toLowerCase().includes(q)
    );
  }, [searchFilter]);

  // Current active timer data based on mode
  const currentTimersData = trackerMode === 'community' ? communityTimers : personalTimers;

  // Personal kill recording
  const handleMarkPersonalKill = (bossId, channelNum, minutesAgo = 0) => {
    const killedAt = Date.now() - (minutesAgo * 60 * 1000);
    setPersonalTimers(prev => ({
      ...prev,
      [bossId]: {
        ...(prev[bossId] || {}),
        [channelNum]: {
          killedAt,
          updatedAt: Date.now()
        }
      }
    }));
  };

  // Broadcast / Report kill to Community
  const handleReportToCommunity = (bossId, channelNum) => {
    const now = Date.now();
    setCommunityTimers(prev => ({
      ...prev,
      [bossId]: {
        ...(prev[bossId] || {}),
        [channelNum]: {
          killedAt: now,
          reporter: isEn ? 'You (Local Pilot)' : 'אתה (דיווח שחקן)',
          confirmations: 1
        }
      }
    }));
    // Also save into personal tracker
    handleMarkPersonalKill(bossId, channelNum, 0);
  };

  
  // Perform Live Sync Pull
  const handlePerformLiveSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      const res = await fetchLiveBossTimers();
      if (res && res.timers) {
        setCommunityTimers({ ...res.timers });
        setLastSyncTime(res.timestamp);
        setSyncToast(isEn ? '20 Channels Synced Live!' : 'סונכרנו 20 ערוצים מול הרשת!');
        setTimeout(() => setSyncToast(null), 3000);
      }
    } catch (e) {
      console.warn('Live sync error:', e);
    } finally {
      setIsSyncing(false);
    }
  };

  // Confirm a community report
  const handleConfirmCommunityReport = (bossId, channelNum) => {
    const updated = confirmReport(bossId, channelNum);
    setCommunityTimers({ ...updated });
    setSyncToast(isEn ? `CH ${channelNum} Verified! 👍` : `ערוץ ${channelNum} אומת בהצלחה! 👍`);
    setTimeout(() => setSyncToast(null), 2500);
  };

  // Copy all community reports for current boss to personal
  const handleCopyAllCommunity = () => {
    const updatedPersonal = copyAllCommunityReportsToPersonal(selectedBoss.id);
    setPersonalTimers({ ...updatedPersonal });
    setSyncToast(isEn ? 'All channels imported to Personal!' : 'כל ערוצי הבוס הועתקו לטיימר האישי שלך!');
    setTimeout(() => setSyncToast(null), 3000);
  };

  // Auto-Sync background loop (every 30s) + Listen to sync events
  useEffect(() => {
    if (!autoSyncEnabled) return;
    const interval = setInterval(() => {
      fetchLiveBossTimers().then(res => {
        if (res && res.timers) {
          setCommunityTimers({ ...res.timers });
          setLastSyncTime(res.timestamp);
        }
      }).catch(() => {});
    }, 30000);

    return () => clearInterval(interval);
  }, [autoSyncEnabled]);

  useEffect(() => {
    const handleRemoteSynced = (e) => {
      if (e.detail?.timers) {
        setCommunityTimers({ ...e.detail.timers });
        setLastSyncTime(e.detail.timestamp || Date.now());
      }
    };
    window.addEventListener('maple-boss-timers-synced', handleRemoteSynced);
    return () => window.removeEventListener('maple-boss-timers-synced', handleRemoteSynced);
  }, []);

  // Import community report to Personal Timers
  const handleCopyCommunityToPersonal = (bossId, channelNum) => {
    const commEntry = communityTimers[bossId]?.[channelNum];
    if (!commEntry) return;
    setPersonalTimers(prev => ({
      ...prev,
      [bossId]: {
        ...(prev[bossId] || {}),
        [channelNum]: {
          killedAt: commEntry.killedAt,
          updatedAt: Date.now()
        }
      }
    }));
  };

  // Reset a channel
  const handleResetChannel = (bossId, channelNum) => {
    if (trackerMode === 'personal') {
      setPersonalTimers(prev => {
        const bossMap = { ...(prev[bossId] || {}) };
        delete bossMap[channelNum];
        return { ...prev, [bossId]: bossMap };
      });
    } else {
      setCommunityTimers(prev => {
        const bossMap = { ...(prev[bossId] || {}) };
        delete bossMap[channelNum];
        return { ...prev, [bossId]: bossMap };
      });
    }
  };

  // Mark all channels killed now
  const handleMarkAllKilled = (bossId) => {
    const now = Date.now();
    const newBossChannels = {};
    for (let ch = 1; ch <= totalChannels; ch++) {
      newBossChannels[ch] = { killedAt: now, updatedAt: now };
    }
    setPersonalTimers(prev => ({
      ...prev,
      [bossId]: newBossChannels
    }));
  };

  // Reset all channels for a boss
  const handleResetAllChannels = (bossId) => {
    if (trackerMode === 'personal') {
      setPersonalTimers(prev => {
        const updated = { ...prev };
        delete updated[bossId];
        return updated;
      });
    } else {
      setCommunityTimers(prev => {
        const updated = { ...prev };
        delete updated[bossId];
        return updated;
      });
    }
  };

  // Sync Community Reports (re-seed or refresh relative times)
  const handleSyncCommunityReports = () => {
    const now = Date.now();
    const refreshed = {};
    for (const [bossKey, channels] of Object.entries(INITIAL_COMMUNITY_REPORTS)) {
      refreshed[bossKey] = {};
      for (const [ch, data] of Object.entries(channels)) {
        refreshed[bossKey][ch] = {
          killedAt: now - (data.killedAtOffsetMins * 60 * 1000),
          reporter: data.reporter,
          confirmations: data.confirmations + Math.floor(Math.random() * 3)
        };
      }
    }
    setCommunityTimers(refreshed);
  };

  // Channel status calculator
  const getChannelStatus = (boss, channelNum) => {
    const entry = currentTimersData[boss.id]?.[channelNum];
    if (!entry || !entry.killedAt) {
      return {
        state: 'unknown',
        badge: isEn ? 'Not Tracked' : 'לא תועד',
        color: 'text-slate-400 bg-slate-800/60 border-slate-700/50',
        progressBarColor: 'bg-slate-700',
        progressPct: 0,
        textTime: isEn ? 'Ready / Untracked' : 'מוכן / לא תועד',
        windowText: '',
        reporter: null
      };
    }

    const elapsedMs = nowTime - entry.killedAt;
    const elapsedMinutes = elapsedMs / (60 * 1000);

    const minMinutes = boss.minRespawnMinutes;
    const maxMinutes = boss.maxRespawnMinutes;

    // For bosses with daily runs (like Zakum / Papulatus)
    if (minMinutes === 0 && maxMinutes === 0) {
      return {
        state: 'daily',
        badge: isEn ? 'Daily Reset' : 'איפוס יומי',
        color: 'text-purple-300 bg-purple-950/40 border-purple-500/30',
        progressBarColor: 'bg-purple-500',
        progressPct: 100,
        textTime: isEn ? 'Daily Quest Raid' : 'משימת רייד יומית',
        windowText: '',
        reporter: entry.reporter
      };
    }

    // 1. Still in cooldown (before min window)
    if (elapsedMinutes < minMinutes) {
      const remainingMs = (minMinutes * 60 * 1000) - elapsedMs;
      const remSecTotal = Math.max(0, Math.floor(remainingMs / 1000));
      const hours = Math.floor(remSecTotal / 3600);
      const mins = Math.floor((remSecTotal % 3600) / 60);
      const secs = remSecTotal % 60;
      const formatted = hours > 0 
        ? `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
        : `${mins}:${secs.toString().padStart(2, '0')}`;

      const progressPct = Math.min(100, (elapsedMinutes / minMinutes) * 100);

      return {
        state: 'cooldown',
        badge: isEn ? 'Cooldown' : 'בצינון ⏳',
        color: 'text-rose-300 bg-rose-950/40 border-rose-500/30',
        progressBarColor: 'bg-rose-500',
        progressPct,
        textTime: `${isEn ? 'Window in' : 'פתיחה בעוד'} ${formatted}`,
        windowText: `${isEn ? 'Min window:' : 'חלון מינ׳:'} ${minMinutes}m`,
        reporter: entry.reporter,
        confirmations: entry.confirmations
      };
    }

    // 2. In spawn window (between min and max)
    if (elapsedMinutes >= minMinutes && elapsedMinutes <= maxMinutes) {
      const alertKey = `${boss.id}-${channelNum}-window`;
      if (soundEnabled && !alertedChannelsRef.current.has(alertKey)) {
        alertedChannelsRef.current.add(alertKey);
        playRespawnAlertSound();
      }

      const windowRemainingMs = (maxMinutes * 60 * 1000) - elapsedMs;
      const remSecTotal = Math.max(0, Math.floor(windowRemainingMs / 1000));
      const hours = Math.floor(remSecTotal / 3600);
      const mins = Math.floor((remSecTotal % 3600) / 60);
      const secs = remSecTotal % 60;
      const formatted = hours > 0 
        ? `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
        : `${mins}:${secs.toString().padStart(2, '0')}`;

      const windowSpan = maxMinutes - minMinutes || 1;
      const progressInWindow = Math.min(100, ((elapsedMinutes - minMinutes) / windowSpan) * 100);

      return {
        state: 'window',
        badge: isEn ? 'In Window' : 'בחלון ספאון! 🟡',
        color: 'text-amber-300 bg-amber-950/40 border-amber-500/40 animate-pulse',
        progressBarColor: 'bg-gradient-to-r from-amber-500 to-emerald-400',
        progressPct: progressInWindow,
        textTime: `${isEn ? 'May spawn! Closes in' : 'ספאון אפשרי! נותרו'} ${formatted}`,
        windowText: `${isEn ? 'Active Window' : 'חלון פעיל'}`,
        reporter: entry.reporter,
        confirmations: entry.confirmations
      };
    }

    // 3. Past max window (Overdue / Guaranteed Spawn!)
    const overdueMs = elapsedMs - (maxMinutes * 60 * 1000);
    const overdueSecTotal = Math.floor(overdueMs / 1000);
    const hours = Math.floor(overdueSecTotal / 3600);
    const mins = Math.floor((overdueSecTotal % 3600) / 60);
    const secs = overdueSecTotal % 60;
    const formatted = hours > 0 
      ? `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
      : `${mins}:${secs.toString().padStart(2, '0')}`;

    return {
      state: 'spawned',
      badge: isEn ? 'Spawned / Overdue' : 'הופיע / ספאון פעיל! 🟢',
      color: 'text-emerald-300 bg-emerald-950/50 border-emerald-400/50 ring-1 ring-emerald-400/40',
      progressBarColor: 'bg-emerald-400',
      progressPct: 100,
      textTime: `${isEn ? 'On map! Overdue by' : 'במפה! חלפו'} +${formatted}`,
      windowText: `${isEn ? 'Ready to hunt' : 'מוכן לציד'}`,
      reporter: entry.reporter,
      confirmations: entry.confirmations
    };
  };

  // Hit rate formula: (Player_ACC * 100) / (Mob_Avoid * 3.66 + (Mob_Level - Player_Level) * 2)
  const hitRateCalc = useMemo(() => {
    const mobAvoid = selectedBoss.avoid || 25;
    const mobLevel = selectedBoss.level || 50;
    const lvlDiff = Math.max(0, mobLevel - playerLevel);
    const reqAcc100 = Math.ceil(mobAvoid * 3.66 + lvlDiff * 2);
    const estimatedHitRate = Math.min(100, Math.max(1, Math.round((playerAcc * 100) / reqAcc100)));

    return {
      reqAcc100,
      estimatedHitRate,
      canHit100: playerAcc >= reqAcc100,
      diff: reqAcc100 - playerAcc
    };
  }, [selectedBoss, playerLevel, playerAcc]);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full max-w-6xl space-y-5 animate-fadeIn pb-12">
      
      {/* Header Banner - Clean MeowDB Style */}
      <div className="liquid-glass rounded-3xl p-5 border border-sky-300/25 shadow-2xl relative overflow-hidden">
        
        {/* Row 1: Title & Main Tracker Source Switch (Personal vs Community) */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-sky-300/15 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500/25 to-cyan-500/30 p-2 flex items-center justify-center text-3xl shadow-lg border border-white/20">
              ⏱️
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                {isEn ? 'Boss Timers & Channel Tracker' : 'לוח טיימרים לבוסים ומעקב ערוצים'}
              </h1>
              <div className="text-xs text-sky-200/80 mt-0.5">
                {isEn ? 'Track classic field boss respawns & community kill reports' : 'מעקב חלונות ספאון של בוסי שדה ודיווחי קהילה חיים'}
              </div>
            </div>
          </div>

          {/* Tracker Data Source Switch: Personal vs Community Reports */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center p-1 bg-slate-950/70 rounded-2xl border border-sky-400/30 text-xs shadow-inner">
              <button
                onClick={() => setTrackerMode('personal')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition ${
                  trackerMode === 'personal'
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>👤</span>
                <span>{isEn ? 'My Timers' : 'הטיימרים שלי'}</span>
              </button>

              <button
                onClick={() => setTrackerMode('community')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition ${
                  trackerMode === 'community'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span>🌐</span>
                <span>{isEn ? 'Community Reports' : 'דיווחי קהילה'}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </button>
            </div>

            {/* Sync button for Community */}
            {trackerMode === 'community' && (
              <button
                onClick={handleSyncCommunityReports}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 transition flex items-center gap-1.5 shadow-sm"
                title={isEn ? 'Refresh live community reports' : 'רענן דיווחי קהילה מהשרת'}
              >
                <span>🔄</span>
                <span>{isEn ? 'Sync Server' : 'רענן דיווחי שרת'}</span>
              </button>
            )}

            {/* Sound Alert Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playRespawnAlertSound();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition shadow-sm ${
                soundEnabled
                  ? 'bg-amber-500/20 text-amber-200 border-amber-400/40 hover:bg-amber-500/30'
                  : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={isEn ? 'Toggle Audio Chime when Boss Spawns' : 'הפעל/כבה התרעה קולית בהופעת בוס'}
            >
              <span>{soundEnabled ? '🔔' : '🔕'}</span>
            </button>

            {/* Channels Count Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-950/60 border border-sky-400/25 px-2.5 py-1 rounded-xl text-xs">
              <span className="text-slate-400">{isEn ? 'CH:' : 'ערוצים:'}</span>
              <select
                value={totalChannels}
                onChange={(e) => setTotalChannels(parseInt(e.target.value, 10))}
                className="bg-transparent text-cyan-200 font-bold focus:outline-none cursor-pointer"
              >
                <option value={10} className="bg-slate-900 text-white">10</option>
                <option value={20} className="bg-slate-900 text-white">20 (Standard)</option>
                <option value={30} className="bg-slate-900 text-white">30</option>
              </select>
            </div>

            {/* View Mode Toggle: Grid vs Overview */}
            <div className="flex items-center p-1 bg-slate-950/60 rounded-xl border border-sky-400/25 text-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-slate-950 shadow font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isEn ? 'Grid' : 'ערוצים'}
              </button>
              <button
                onClick={() => setViewMode('overview')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  viewMode === 'overview'
                    ? 'bg-cyan-500 text-slate-950 shadow font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {isEn ? 'All' : 'מבט-על'}
              </button>
            </div>
          </div>
        </div>

        {/* ROW: Live Community Sync Status & Pull Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-950/80 border border-sky-400/30 shadow-inner mt-3">
          {/* Left: Live pulse indicator + Last Sync time */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-400/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-black text-emerald-300">
                {isEn ? 'LIVE SYNC ACTIVE' : 'סנכרון בלייב פעיל'}
              </span>
            </div>

            <div className="text-xs text-slate-300 font-mono flex items-center gap-1.5">
              <span className="text-slate-400">{isEn ? 'Last pulled:' : 'סונכרן:'}</span>
              <span className="text-cyan-300 font-bold">{formatRelativeSyncTime(lastSyncTime, nowTime)}</span>
            </div>

            {syncToast && (
              <span className="text-xs px-2.5 py-1 rounded-xl bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 font-bold animate-fadeIn">
                ✨ {syncToast}
              </span>
            )}
          </div>

          {/* Right: Sync Controls & Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Auto-Sync Toggle Button */}
            <button
              onClick={() => setAutoSyncEnabled(!autoSyncEnabled)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer ${
                autoSyncEnabled
                  ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40 hover:bg-cyan-500/30'
                  : 'bg-slate-900/60 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={isEn ? 'Toggle background auto-sync every 30s' : 'הפעל/כבה סנכרון רקע אוטומטי כל 30 שניות'}
            >
              <span>⚡</span>
              <span>{autoSyncEnabled ? (isEn ? 'Auto-Sync: ON (30s)' : 'סנכרון אוטומטי: פעיל (30 שנ׳)') : (isEn ? 'Auto-Sync: OFF' : 'סנכרון אוטומטי: כבוי')}</span>
            </button>

            {/* Primary Live Sync Pull Button */}
            <button
              onClick={handlePerformLiveSync}
              disabled={isSyncing}
              className="px-4 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-md transition flex items-center gap-2 cursor-pointer disabled:opacity-60"
              title={isEn ? 'Pull fresh community reports & channel kill timers' : 'משוך דיווחי קהילה חיים, טיימרים וחלונות הופעה עכשיו'}
            >
              <span className={isSyncing ? 'animate-spin' : ''}>🔄</span>
              <span>{isSyncing ? (isEn ? 'Syncing...' : 'מסנכרן כעת...') : (isEn ? 'Pull Live Timers' : 'משוך וסנכרן טיימרים בלייב')}</span>
            </button>

            {/* Copy all community to personal tracker */}
            {trackerMode === 'personal' && (
              <button
                onClick={handleCopyAllCommunity}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border border-sky-400/40 transition flex items-center gap-1.5 cursor-pointer"
                title={isEn ? 'Import all community reports for this boss to your personal timers' : 'ייבא את כל דיווחי הקהילה החיים של הבוס הזה לטיימרים האישיים שלך'}
              >
                <span>📥</span>
                <span>{isEn ? 'Import Community' : 'ייבא דיווחי קהילה אליי'}</span>
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Boss Selection Chips & Search Filter */}
        <div className="pt-3 space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin flex-1">
              {filteredBosses.map((boss) => {
                const isSelected = boss.id === selectedBossId;
                const hasActiveChannels = currentTimersData[boss.id] && Object.keys(currentTimersData[boss.id]).length > 0;

                return (
                  <button
                    key={boss.id}
                    onClick={() => setSelectedBossId(boss.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition border ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500/30 to-cyan-500/30 text-white border-amber-400/80 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-slate-900/60 text-slate-300 border-slate-700/80 hover:border-slate-500 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{boss.icon}</span>
                    <span>{isEn ? boss.name : boss.nameHe}</span>
                    <span className="text-[10px] font-mono opacity-80 bg-black/40 px-1 py-0.2 rounded">
                      Lv.{boss.level}
                    </span>
                    {hasActiveChannels && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick search input */}
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={isEn ? 'Filter boss...' : 'סינון בוס...'}
              className="bg-slate-950/70 border border-sky-400/25 rounded-xl px-2.5 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition w-32 sm:w-40"
            />
          </div>
        </div>
      </div>

      {/* OVERVIEW VIEW MODE: All Bosses at a Glance */}
      {viewMode === 'overview' && (
        <div className="liquid-glass rounded-3xl p-5 border border-sky-300/25 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-sky-300/15 pb-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <span>🌐</span>
              <span>{isEn ? 'All Field Bosses Channel Status' : 'סטטוס ערוצים לכל הבוסים במבט-על'}</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              {trackerMode === 'community' ? (isEn ? 'Live Community Feed' : 'מבוסס דיווחי קהילה') : (isEn ? 'My Saved Timers' : 'הטיימרים שלי')}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {CLASSIC_BOSSES_DATABASE.map(boss => {
              const bossTimers = currentTimersData[boss.id] || {};
              const trackedChannels = Object.keys(bossTimers).length;
              
              let readyCount = 0;
              let windowCount = 0;
              let cooldownCount = 0;

              for (let ch = 1; ch <= totalChannels; ch++) {
                const status = getChannelStatus(boss, ch);
                if (status.state === 'spawned') readyCount++;
                else if (status.state === 'window') windowCount++;
                else if (status.state === 'cooldown') cooldownCount++;
              }

              return (
                <div
                  key={boss.id}
                  onClick={() => {
                    setSelectedBossId(boss.id);
                    setViewMode('grid');
                  }}
                  className={`p-3.5 rounded-2xl border transition cursor-pointer hover:scale-[1.02] flex flex-col justify-between ${
                    readyCount > 0
                      ? 'bg-emerald-950/30 border-emerald-400/50 ring-1 ring-emerald-400/30 shadow-emerald-900/20 shadow-lg'
                      : windowCount > 0
                      ? 'bg-amber-950/30 border-amber-400/40 shadow-amber-900/20 shadow-lg'
                      : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="text-2xl p-2 rounded-xl bg-slate-950/60 border border-white/10">
                        {boss.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-white">
                          {isEn ? boss.name : boss.nameHe}
                        </h3>
                        <div className="text-xs text-sky-200/80">
                          {isEn ? boss.town : boss.townHe} • Lv.{boss.level}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-white/5">
                      {boss.respawnDesc}
                    </span>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {readyCount > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-400/40">
                          {readyCount} {isEn ? 'Ready!' : 'מוכנים!'}
                        </span>
                      )}
                      {windowCount > 0 && (
                        <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-400/40">
                          {windowCount} {isEn ? 'In Window' : 'בחלון'}
                        </span>
                      )}
                      {cooldownCount > 0 && (
                        <span className="text-slate-400">
                          {cooldownCount} {isEn ? 'in CD' : 'בצינון'}
                        </span>
                      )}
                      {trackedChannels === 0 && (
                        <span className="text-slate-500 italic">
                          {isEn ? 'No reports' : 'אין דיווחים'}
                        </span>
                      )}
                    </div>

                    <span className="text-cyan-400 font-bold hover:underline">
                      {isEn ? 'Open ➔' : 'פתח ➔'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GRID VIEW: Channel Cards & Organized Tabbed Boss Intel */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Channel Tracker Grid (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="liquid-glass rounded-3xl p-5 border border-sky-300/25 shadow-xl space-y-4">
              
              {/* Channel Grid Header & Bulk Actions */}
              <div className="flex items-center justify-between flex-wrap gap-3 border-b border-sky-300/15 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedBoss.icon}</span>
                  <div>
                    <h2 className="text-lg font-black text-white flex items-center gap-2">
                      <span>{isEn ? selectedBoss.name : selectedBoss.nameHe}</span>
                      <span className="text-xs font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-400/15 border border-amber-400/30">
                        {selectedBoss.respawnDesc}
                      </span>
                    </h2>
                    <p className="text-xs text-sky-200">
                      {isEn ? selectedBoss.mapName : selectedBoss.mapNameHe}
                    </p>
                  </div>
                </div>

                {/* Bulk Actions */}
                <div className="flex items-center gap-2">
                  {trackerMode === 'personal' && (
                    <button
                      onClick={() => handleMarkAllKilled(selectedBoss.id)}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-500/20 text-rose-200 border border-rose-400/30 hover:bg-rose-500/30 transition shadow-sm"
                      title={isEn ? 'Set all channels as killed right now' : 'סמן שכל הערוצים חוסלו ברגע זה'}
                    >
                      ⚔️ {isEn ? 'Mark All Killed' : 'חוסלו כולם עכשיו'}
                    </button>
                  )}
                  <button
                    onClick={() => handleResetAllChannels(selectedBoss.id)}
                    className="px-2.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 border border-slate-700 hover:border-slate-500 transition"
                    title={isEn ? 'Clear all recorded timers for this boss' : 'איפוס כל הטיימרים עבור בוס זה'}
                  >
                    ↺ {isEn ? 'Reset All' : 'אפס הכל'}
                  </button>
                </div>
              </div>

              {/* Channel Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[640px] overflow-y-auto p-1 scrollbar-thin">
                {Array.from({ length: totalChannels }, (_, i) => i + 1).map((channelNum) => {
                  const status = getChannelStatus(selectedBoss, channelNum);
                  const isTracked = !!currentTimersData[selectedBoss.id]?.[channelNum]?.killedAt;

                  return (
                    <div
                      key={channelNum}
                      className={`p-3.5 rounded-2xl border transition-all relative overflow-hidden flex flex-col justify-between space-y-2.5 ${
                        status.state === 'spawned'
                          ? 'bg-emerald-950/30 border-emerald-400/60 shadow-lg shadow-emerald-900/20'
                          : status.state === 'window'
                          ? 'bg-amber-950/30 border-amber-400/50 shadow-md shadow-amber-900/20'
                          : status.state === 'cooldown'
                          ? 'bg-slate-900/70 border-rose-500/25'
                          : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      {/* Top Row: Channel Badge + Status Badge */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-slate-950/80 border border-sky-400/30 text-cyan-200">
                            CH {channelNum.toString().padStart(2, '0')}
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${status.color}`}>
                            {status.badge}
                          </span>
                        </div>

                        {isTracked && (
                          <button
                            onClick={() => handleResetChannel(selectedBoss.id, channelNum)}
                            className="text-slate-400 hover:text-rose-400 text-xs transition p-1"
                            title={isEn ? 'Reset this channel' : 'אפס ערוץ זה'}
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* Middle: Timer & Progress Bar */}
                      <div>
                        <div className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                          <span>{status.textTime}</span>
                          {status.windowText && (
                            <span className="text-[10px] text-slate-400">{status.windowText}</span>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-950/60 h-2 rounded-full overflow-hidden mt-1.5 border border-white/5">
                          <div
                            className={`h-full transition-all duration-500 ${status.progressBarColor}`}
                            style={{ width: `${status.progressPct}%` }}
                          ></div>
                        </div>

                        {/* Community Reporter Info */}
                        {status.reporter && (
                          <div className="text-[10px] text-amber-200/90 mt-1 flex items-center justify-between">
                            <span>📢 {status.reporter}</span>
                            {status.confirmations && (
                              <span className="text-slate-400">✓ {status.confirmations} אימותים</span>
                            )}
                          </div>
                        )}
                      </div>

                      {/* Bottom: Quick Actions depending on mode */}
                      <div className="flex items-center gap-1.5 pt-1">
                        {trackerMode === 'personal' ? (
                          <>
                            <button
                              onClick={() => handleMarkPersonalKill(selectedBoss.id, channelNum, 0)}
                              className="flex-1 py-1.5 px-2 rounded-xl text-xs font-bold bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-400/30 transition flex items-center justify-center gap-1"
                            >
                              <span>⚔️</span>
                              <span>{isEn ? 'Killed Now' : 'חוסל עכשיו'}</span>
                            </button>

                            <button
                              onClick={() => handleMarkPersonalKill(selectedBoss.id, channelNum, 10)}
                              className="py-1.5 px-2 rounded-xl text-[11px] font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                              title={isEn ? 'Mark killed 10 minutes ago' : 'חוסל לפני 10 דקות'}
                            >
                              -10m
                            </button>

                            <button
                              onClick={() => handleReportToCommunity(selectedBoss.id, channelNum)}
                              className="py-1.5 px-2 rounded-xl text-[11px] font-medium bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 border border-amber-400/30 transition"
                              title={isEn ? 'Broadcast this kill to community' : 'דווח על חיסול לקהילה'}
                            >
                              📢
                            </button>
                          </>
                        ) : (
                          <>
                            {isTracked ? (
                              <>
                                <button
                                  onClick={() => handleCopyCommunityToPersonal(selectedBoss.id, channelNum)}
                                  className="flex-1 py-1.5 px-2 rounded-xl text-xs font-bold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/30 transition flex items-center justify-center gap-1"
                                  title={isEn ? 'Copy to personal timer' : 'העתק לטיימר שלי'}
                                >
                                  <span>📥</span>
                                  <span>{isEn ? 'Copy' : 'העתק'}</span>
                                </button>
                                <button
                                  onClick={() => handleConfirmCommunityReport(selectedBoss.id, channelNum)}
                                  className="py-1.5 px-2.5 rounded-xl text-[11px] font-bold bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-400/30 transition flex items-center gap-1"
                                  title={isEn ? 'Confirm this report (+1)' : 'אשר דיווח על ערוץ זה (+1 אימות)'}
                                >
                                  <span>👍</span>
                                  <span>{status.confirmations || 1}</span>
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleReportToCommunity(selectedBoss.id, channelNum)}
                                className="flex-1 py-1.5 px-2 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/30 transition flex items-center justify-center gap-1"
                              >
                                <span>📢</span>
                                <span>{isEn ? 'Report Kill' : 'דווח על חיסול'}</span>
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar: Clean, Tabbed Boss Intel & Hit Calculator (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="liquid-glass rounded-3xl p-5 border border-sky-300/25 shadow-xl space-y-4">
              
              {/* Boss Header Info */}
              <div className="flex items-center gap-3.5 border-b border-sky-300/15 pb-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-amber-500/30 p-2 flex items-center justify-center text-3xl shadow-inner border border-white/20 shrink-0">
                  {selectedBoss.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-black text-white truncate">
                    {isEn ? selectedBoss.name : selectedBoss.nameHe}
                  </h3>
                  <div className="text-xs text-sky-200 truncate">
                    {isEn ? selectedBoss.town : selectedBoss.townHe}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-mono bg-cyan-400/20 text-cyan-200 px-1.5 py-0.2 rounded border border-cyan-400/30">
                      Lv.{selectedBoss.level}
                    </span>
                    <span className="text-[10px] font-mono bg-rose-400/20 text-rose-200 px-1.5 py-0.2 rounded border border-rose-400/30">
                      {selectedBoss.hp.toLocaleString()} HP
                    </span>
                    <span className="text-[10px] font-mono bg-amber-400/20 text-amber-200 px-1.5 py-0.2 rounded border border-amber-400/30">
                      {selectedBoss.exp.toLocaleString()} EXP
                    </span>
                  </div>
                </div>
              </div>

              {/* Clean Categorized Navigation Tabs (MeowDB Layout - No Information Salad!) */}
              <div className="flex items-center gap-1 p-1 bg-slate-950/70 rounded-2xl border border-sky-400/25 text-xs">
                <button
                  onClick={() => setBossInfoTab('drops')}
                  className={`flex-1 py-1.5 rounded-xl font-bold transition text-center ${
                    bossInfoTab === 'drops'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isEn ? 'Drops' : 'דרופים'}
                </button>
                <button
                  onClick={() => setBossInfoTab('hit')}
                  className={`flex-1 py-1.5 rounded-xl font-bold transition text-center ${
                    bossInfoTab === 'hit'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isEn ? 'Hit Calc' : 'מחשבון'}
                </button>
                <button
                  onClick={() => setBossInfoTab('directions')}
                  className={`flex-1 py-1.5 rounded-xl font-bold transition text-center ${
                    bossInfoTab === 'directions'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isEn ? 'Route' : 'הגעה'}
                </button>
                <button
                  onClick={() => setBossInfoTab('tactics')}
                  className={`flex-1 py-1.5 rounded-xl font-bold transition text-center ${
                    bossInfoTab === 'tactics'
                      ? 'bg-cyan-500 text-slate-950 shadow-sm font-black'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {isEn ? 'Tactics' : 'טקטיקה'}
                </button>
              </div>

              {/* TAB 1: Notable Drops */}
              {bossInfoTab === 'drops' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                    <span>{isEn ? 'Verified Notable Drops:' : 'שלל ודרופים מרכזיים:'}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{selectedBoss.notableDrops.length} פריטים</span>
                  </div>

                  <div className="space-y-1.5 max-h-56 overflow-y-auto p-1 scrollbar-thin">
                    {selectedBoss.notableDrops.map((drop, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-slate-900/60 border border-sky-400/15 flex items-center justify-between text-xs hover:border-sky-400/40 transition"
                      >
                        <span className="font-semibold text-slate-200 truncate">{drop.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 whitespace-nowrap">
                          {drop.chance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Hit & Accuracy Calculator */}
              {bossInfoTab === 'hit' && (
                <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-sky-400/20 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-amber-300 flex items-center gap-1.5">
                      <span>🎯</span>
                      <span>{isEn ? 'Hit & Accuracy Simulator' : 'סימולטור פגיעה ודיוק'}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Avoid: {selectedBoss.avoid}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 flex items-center justify-between bg-black/30 p-2.5 rounded-xl">
                    <span>{isEn ? '100% Hit Required ACC:' : 'דיוק נדרש ל-100% פגיעה:'}</span>
                    <span className="font-bold text-cyan-300 font-mono text-sm">
                      {hitRateCalc.reqAcc100} ACC
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 bg-black/30 p-2.5 rounded-xl space-y-1">
                    <div>
                      {isEn
                        ? `At Lv.${playerLevel} with ${playerAcc} ACC: Estimated Hit Rate: ${hitRateCalc.estimatedHitRate}%`
                        : `ברמה ${playerLevel} עם ${playerAcc} דיוק: סיכוי פגיעה מוערך: ${hitRateCalc.estimatedHitRate}%`}
                    </div>
                    {!hitRateCalc.canHit100 ? (
                      <div className="text-amber-300 font-medium">
                        ⚠️ {isEn ? `Need +${hitRateCalc.diff} more ACC for 100% hit` : `דרוש עוד ${hitRateCalc.diff}+ דיוק למניעת החטאות (MISS)`}
                      </div>
                    ) : (
                      <div className="text-emerald-300 font-medium">
                        ✓ {isEn ? 'Guaranteed 100% Hit Rate!' : 'פגיעה מובטחת של 100% ללא החטאות!'}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 3: Directions & Route */}
              {bossInfoTab === 'directions' && (
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-sky-400/20 space-y-2 text-xs">
                  <div className="font-bold text-sky-200 flex items-center gap-1.5">
                    <span>🧭</span>
                    <span>{isEn ? 'Accurate Route to Lair:' : 'הוראות הגעה מדויקות למאורה:'}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed text-xs">
                    {selectedBoss.directions}
                  </p>
                  <div className="text-[11px] text-slate-400 pt-1 font-mono">
                    📍 {selectedBoss.mapName}
                  </div>
                </div>
              )}

              {/* TAB 4: Combat Tactics & Safe Spots */}
              {bossInfoTab === 'tactics' && (
                <div className="p-3.5 rounded-2xl bg-amber-950/20 border border-amber-400/25 space-y-2 text-xs">
                  <div className="font-bold text-amber-200 flex items-center gap-1.5">
                    <span>🛡️</span>
                    <span>{isEn ? 'Safe Spots & Tactics:' : 'טקטיקת קרב ונקודות עמידה בטוחה:'}</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed text-xs">
                    {selectedBoss.safeSpots || (isEn ? 'Keep distance and dodge boss attacks.' : 'שמור על מרחק ביטחון ותקוף מרחוק.')}
                  </p>
                </div>
              )}

              {/* Cross Navigation Actions */}
              <div className="pt-2 flex items-center gap-2">
                {onNavigateToSearch && (
                  <button
                    onClick={() => onNavigateToSearch(selectedBoss.name, 'monsters')}
                    className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-400/40 transition text-center shadow-sm"
                  >
                    🔍 {isEn ? 'Inspect in Database' : 'הצג במאגר המלא'}
                  </button>
                )}

                {selectedBoss.meowDbUrl && (
                  <a
                    href={selectedBoss.meowDbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-xl text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-400/40 transition flex items-center gap-1 shrink-0"
                    title="NiaMeowDB Link"
                  >
                    <span>🐾</span>
                    <span>MeowDB</span>
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}
