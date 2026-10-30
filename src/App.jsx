import React, { useState, useMemo, useEffect } from 'react';
import UnifiedDatabase from './components/UnifiedDatabase.jsx';
import GearProgression from './components/GearProgression.jsx';
import GlobalOmnibar from './components/GlobalOmnibar.jsx';
import ClassSelectorModal from './components/ClassSelectorModal.jsx';
import LiveSyncModal from './components/LiveSyncModal.jsx';
import BuildShareModal from './components/BuildShareModal.jsx';
import UpdateModal from './components/UpdateModal.jsx';
import { getLastSyncInfo, applyCachedSync } from './services/liveSyncService.js';
import { checkForAppUpdates, CURRENT_VERSION } from './services/updateService.js';
import { ITEMS_DATABASE } from './data/items.js';
import { MONSTERS_DATABASE } from './data/monsters.js';
import { MAPLE_ICON } from './assets/mapleIcon.js';

import { CLASSES_DATA } from './data/classesData.js';
import { getJobRoadmap } from './data/jobRoadmaps.js';
import { SKILLS_INFO, LEVEL_ROADMAP } from './data/roadmap.js';
import { useLanguage } from './context/LanguageContext.jsx';
export { SKILLS_INFO, LEVEL_ROADMAP };

export default function App() {
  const { langMode, setLangMode, isRTL, t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      const saved = localStorage.getItem('maple_currentPage') || 'guide';
      if (['monsters', 'items', 'npcs'].includes(saved)) return 'unified';
      return saved;
    } catch {
      return 'guide';
    }
  });

  const [selectedJobId, setSelectedJobId] = useState(() => {
    try {
      return localStorage.getItem('maple_selectedJob') || 'assassin';
    } catch {
      return 'assassin';
    }
  });

  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [hasNewUpdate, setHasNewUpdate] = useState(false);
  const [syncInfo, setSyncInfo] = useState(() => getLastSyncInfo());

  // Apply cached live sync data on startup & listen for updates
  useEffect(() => {
    applyCachedSync(ITEMS_DATABASE, MONSTERS_DATABASE);

    const handleSynced = () => {
      setSyncInfo(getLastSyncInfo());
    };
    window.addEventListener('maple-live-synced', handleSynced);

    // Check for GitHub Releases updates in the background
    checkForAppUpdates().then((res) => {
      if (res && res.hasUpdate) {
        setHasNewUpdate(true);
      }
    }).catch(() => {});

    return () => window.removeEventListener('maple-live-synced', handleSynced);
  }, []);

  const activeJob = useMemo(() => {
    return CLASSES_DATA[selectedJobId] || CLASSES_DATA['assassin'];
  }, [selectedJobId]);

  const { skillsInfo, roadmap } = useMemo(() => {
    return getJobRoadmap(selectedJobId);
  }, [selectedJobId]);

  const [level, setLevel] = useState(() => {
    try {
      const saved = localStorage.getItem('maple_level');
      return saved ? Math.max(10, Math.min(70, parseInt(saved, 10))) : 10;
    } catch {
      return 10;
    }
  });

  const [buildType, setBuildType] = useState(() => {
    try {
      return localStorage.getItem('maple_buildType') || 'dexless';
    } catch {
      return 'dexless';
    }
  });

  const [activeTab, setActiveTab] = useState('guide'); // 'guide' | 'gear' | 'hunting' | 'table'
  const [unifiedInitialQuery, setUnifiedInitialQuery] = useState('');
  const [unifiedInitialCategory, setUnifiedInitialCategory] = useState('all');
  const [isOmnibarOpen, setIsOmnibarOpen] = useState(false);
  const [tableFilter, setTableFilter] = useState("all"); // "all" | "job1" | "job2"

  const handleCrossNavigateToSearch = (searchTerm, category = 'all') => {
    setUnifiedInitialQuery(searchTerm);
    setUnifiedInitialCategory(category);
    setCurrentPage('unified');
  };

  const handleOmnibarNavigate = (targetPage, payload, categoryFilter = 'all', jobId = null) => {
    if (jobId && jobId !== selectedJobId) {
      setSelectedJobId(jobId);
    }
    if (targetPage === 'guide') {
      setCurrentPage('guide');
      setActiveTab('guide');
    } else {
      setUnifiedInitialQuery(payload);
      setUnifiedInitialCategory(categoryFilter);
      setCurrentPage('unified');
    }
  };

  const handleLoadCustomBuild = (customBuild) => {
    if (!customBuild) return;
    if (customBuild.jobId && CLASSES_DATA[customBuild.jobId]) {
      setSelectedJobId(customBuild.jobId);
    }
    if (customBuild.level) {
      setLevel(Math.max(10, Math.min(70, parseInt(customBuild.level, 10) || 10)));
    }
    if (customBuild.buildType) {
      setBuildType(customBuild.buildType);
    }
    setCurrentPage('guide');
    setActiveTab('guide');
  };

  // Persist state in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('maple_currentPage', currentPage);
    } catch {}
  }, [currentPage]);

  useEffect(() => {
    try {
      localStorage.setItem('maple_selectedJob', selectedJobId);
      // Ensure buildType is valid for activeJob
      if (activeJob && !activeJob.buildVariants.some(v => v.id === buildType)) {
        setBuildType(activeJob.buildVariants[0].id);
      }
    } catch {}
  }, [selectedJobId, activeJob]);

  useEffect(() => {
    try {
      localStorage.setItem('maple_level', level.toString());
    } catch {}
  }, [level]);

  useEffect(() => {
    try {
      localStorage.setItem('maple_buildType', buildType);
    } catch {}
  }, [buildType]);

  const currentStep = roadmap[level] || roadmap[10] || {
    spGained: 3,
    addedSkills: [],
    cumulative: {},
    tipTitle: '',
    tipDesc: ''
  };

  const handleLevelChange = (newVal) => {
    const parsed = Math.max(10, Math.min(70, parseInt(newVal, 10) || 10));
    setLevel(parsed);
  };

  // AP Calculation Logic
  const apDetails = useMemo(() => {
    const apPerLevel = 5;
    const calc = activeJob.statFormula 
      ? activeJob.statFormula(level, buildType)
      : {
          primary: { name: activeJob.primaryStat || 'LUK', val: 4 + (level - 1) * 5, note: '' },
          secondary: { name: activeJob.secondaryStat || 'DEX', val: 25, note: '' },
          rule: 'הקצה לפי דרישות הנשק'
        };

    const targetSecondary = calc.secondary.val;
    const targetPrimary = calc.primary.val;
    
    let secondaryThisLevel = 0;
    let primaryThisLevel = 5;

    const isNonStandard = ['dexless', 'lukless', 'strless'].includes(buildType);
    if (!isNonStandard) {
      if (activeJob.archetype === 'magician') {
        secondaryThisLevel = 1;
        primaryThisLevel = 4;
      } else {
        secondaryThisLevel = 2;
        primaryThisLevel = 3;
      }
    }

    const isEn = langMode === 'en';
    const instructionText = isEn
      ? (isNonStandard
          ? `All 5 AP into ${calc.primary.name} (Keep ${calc.secondary.name} at base ${targetSecondary})`
          : `Allocate ${secondaryThisLevel} AP to ${calc.secondary.name} (Target: ${targetSecondary}), ${primaryThisLevel} AP to ${calc.primary.name}`)
      : calc.rule;

    const strategyNote = isEn
      ? `${calc.primary.name}: Maximizes attack power | ${calc.secondary.name}: Required for equipment (Target: ${targetSecondary})`
      : `${calc.primary.name}: ${calc.primary.note} | ${calc.secondary.name}: ${calc.secondary.note}`;

    const levelsGained = level - 10;
    const totalApGained = levelsGained * 5;

    return {
      apPerLevel,
      primaryName: calc.primary.name,
      primaryVal: targetPrimary,
      primaryThisLevel,
      secondaryName: calc.secondary.name,
      secondaryVal: targetSecondary,
      secondaryThisLevel,
      instructionText,
      strategyNote,
      levelsGained,
      totalApGained
    };
  }, [level, buildType, activeJob]);

  // Dynamic Strategy Tips
  const strategyData = useMemo(() => {
    let phase = '';
    let badge = '';
    let badgeColor = '';
    let mainTip = '';
    let secondaryTip = '';
    let gearAdvice = '';

    const isEn = langMode === 'en';
    if (level <= 20) {
      phase = isEn
        ? `Levels 10-20: Starting out as ${activeJob.job1Name} in ${activeJob.town}`
        : `רמות 10-20: שלבי פתיחה כ-${activeJob.job1Name} בעיר ${activeJob.town}`;
      badge = isEn
        ? `Levels 10-20 • Core Foundations`
        : `רמות 10-20 • ביסוס יכולות יסוד`;
      badgeColor = 'bg-amber-500/25 text-amber-200 border-amber-400/40';
      mainTip = isEn
        ? `As a ${activeJob.name}, begin your journey in ${activeJob.town}. Use your primary skill for fast, reliable single-target damage against beginner monsters.`
        : `בתור ${activeJob.nameHe}, התחל את דרכך בעיר ${activeJob.town}. נצל את מתקפת הבסיס הראשית לחלוקת נזק מהירה על מפלצות מתחילות.`;
      secondaryTip = isEn
        ? `Ensure you allocate AP according to rule: ${apDetails.instructionText}`
        : `הקפד להשקיע AP לפי הכלל: ${apDetails.instructionText}`;
      gearAdvice = isEn
        ? `Equip Lv 10-15 weapons from the ${activeJob.town} weapon shop or hunt Slimes and Mushrooms.`
        : `הצטייד בנשק רמה 10-15 מחנות העיר ${activeJob.town} או מציד סליימים ופטריות.`;
    } else if (level <= 30) {
      phase = isEn
        ? `Levels 21-30: 1st Job Peak & Kerning PQ`
        : `רמות 21-30: שיא נזק עבודה ראשונה ו-KPQ`;
      badge = isEn
        ? `Levels 21-30 • Preparing for 2nd Job`
        : `רמות 21-30 • לקראת עבודה שנייה`;
      badgeColor = 'bg-emerald-500/25 text-emerald-200 border-emerald-400/40';
      mainTip = isEn
        ? `Kerning Party Quest (KPQ) is highly recommended for Lv 21-30 for rapid EXP gain, valuable potions, and early gear.`
        : `מומלץ להשתתף ב-Kerning Party Quest (KPQ) ברמות 21-30 לקבלת EXP מהיר, שיקויים וציוד יקר ערך.`;
      secondaryTip = isEn
        ? `At Lv 30, talk to your job instructor (${activeJob.instructor1}) to begin the 2nd Job Advancement test for ${activeJob.job2Name}!`
        : `בסיום רמה 30 גש למדריך ${activeJob.instructor1} כדי להתחיל את מבחן העבודה השנייה עבור ${activeJob.job2Name}!`;
      gearAdvice = isEn
        ? `Obtain Lv 20-30 armor and gloves. Keep weapons scrolled and upgraded.`
        : `השג שריונות וכפפות לרמות 20-30, ושמור על הנשקים משודרגים במגילות.`;
    } else if (level <= 50) {
      phase = isEn
        ? `Levels 31-50: 2nd Job Power (${activeJob.job2Name}) & Ludibrium PQ`
        : `רמות 31-50: עוצמת עבודה שנייה כ-${activeJob.job2Name} ו-LPQ`;
      badge = isEn
        ? `Levels 31-50 • Ludibrium Party Quest`
        : `רמות 31-50 • פארטי קווסט לודיבריום`;
      badgeColor = 'bg-cyan-500/25 text-cyan-200 border-cyan-400/40';
      mainTip = isEn
        ? `With 2nd Job skills unlocked in ${activeJob.job2Name}, you are ready for Ludibrium Party Quest (LPQ - 101st Floor) from Lv 35-51!`
        : `עם פתיחת סקילי העבודה השנייה ב-${activeJob.job2Name}, אתה מוכן ל-Ludibrium Party Quest (LPQ - קומה 101) ברמות 35-51!`;
      secondaryTip = isEn
        ? `Farm the Clocktower floors in Ludibrium and Kerning Subway to gather EXP and max out your core offensive skills.`
        : `נצל את המפות המרכזיות במגדל השעון בלודיבריום וברכבת בקרנינג כדי לצבור EXP ולמקסם סקילים מובילים.`;
      gearAdvice = isEn
        ? `Equip Lv 35, 40, and 50 weapons. Pay close attention to ${activeJob.secondaryStat} requirements.`
        : `הצטייד בנשקי רמות 35, 40 ו-50. שים לב לדרישות ה-${activeJob.secondaryStat}.`;
    } else {
      phase = isEn
        ? `Levels 51-70: Elite Tier towards 3rd Job Advancement`
        : `רמות 51-70: מדרגת העילית לקראת עבודה שלישית`;
      badge = isEn
        ? `Levels 51-70 • Orbis PQ & El Nath`
        : `רמות 51-70 • Orbis PQ ואל נאת'`;
      badgeColor = 'bg-cyan-500/25 text-cyan-200 border-cyan-400/40';
      mainTip = isEn
        ? `Participate in Orbis PQ (Goddess Tower) or grind dense maps across El Nath and Sleepywood Dungeon.`
        : `השתתף ב-Orbis PQ (מגדל האלה) או התאמן במפות עמוסות באל נאת' (El Nath) וסליפיווד.`;
      secondaryTip = isEn
        ? `At Lv 70, visit El Nath to complete the legendary 3rd Job Advancement test and unlock iconic master skills!`
        : `ברמה 70 תוכל לעבור את מבחן העבודה השלישית באל נאת' ולפתוח סקילים אגדיים!`;
      gearAdvice = isEn
        ? `Acquire Lv 60 and 70 weapons in preparation for 3rd Job mastery.`
        : `השג נשקי רמה 60 ו-70 לקראת עבודה 3.`;
    }

    const huntingSpots = (activeJob.huntingSpots && activeJob.huntingSpots.length > 0)
      ? activeJob.huntingSpots.map((h) => ({
          name: h.name,
          loc: activeJob.town,
          mobs: `${activeJob.primaryStat} Boost`,
          why: h.why,
          levels: h.range
        }))
      : [
          {
            name: 'עץ הסליימים (Slime Tree)',
            loc: 'Ellinia',
            mobs: 'Green Slime',
            why: 'אימון פתיחה מושלם',
            levels: '10-18'
          },
          {
            name: 'Kerning City PQ',
            loc: 'Kerning City Subway',
            mobs: 'Ligators, King Slime',
            why: 'EXP מהיר במיוחד',
            levels: '21-30'
          },
          {
            name: 'Ludibrium PQ (LPQ)',
            loc: 'Eos Tower 101st Floor',
            mobs: 'Block Golems, Alishar',
            why: 'ה-PQ המרכזי לרמות ביניים',
            levels: '35-50'
          }
        ];

    return {
      phase,
      badge,
      badgeColor,
      mainTip,
      secondaryTip,
      huntingSpots,
      gearAdvice
    };
  }, [level, buildType, activeJob, apDetails]);

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="min-h-screen relative flex flex-col items-center p-3 sm:p-6 lg:p-8 text-slate-100 overflow-x-hidden">
      
      {/* Ambient Liquid Glass Floating Glow Lights (Cyan / Sky luminous aesthetic) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-sky-400/20 rounded-full blur-[130px]"></div>
        <div className="absolute top-1/4 -right-32 w-[34rem] h-[34rem] bg-cyan-400/22 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-1/4 w-[38rem] h-[38rem] bg-teal-400/18 rounded-full blur-[150px]"></div>
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-[120px]"></div>
      </div>

      {/* Top Banner (Liquid Glass Header) */}
      <div className="w-full max-w-6xl liquid-glass rounded-3xl p-4 sm:p-5 mb-4 relative z-10 shadow-2xl border border-sky-300/25 space-y-4">
        
        {/* Row 1: Title & Avatar on the Right | System Utilities (Language + Live Sync) on the Left (User Circled Area) */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-sky-300/15 pb-3.5">
          {/* Right Side: Avatar + Job Title */}
          <div className="flex items-center gap-3.5">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-sky-400/40 to-teal-400/40 p-2.5 flex items-center justify-center shadow-xl border border-white/25 backdrop-blur-xl">
                <img src={MAPLE_ICON} alt="MapleStory" className="w-10 h-10 object-contain drop-shadow-md" />
              </div>
              <span className="absolute -bottom-1 -right-1 text-sm bg-slate-900/90 rounded-full p-0.5 border border-white/20 shadow">
                {activeJob.icon}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/30 shadow-sm">
                  {t('classicBadge')}
                </span>
                <span className="text-xs text-sky-200 font-medium">{activeJob.town}</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2 mt-0.5">
                {langMode === 'en' ? `${activeJob.name} Guide` : `מדריך ${activeJob.nameHe}`}
                <span className="text-cyan-300 text-sm font-normal">| {t('levelsTitle')}</span>
              </h1>
            </div>
          </div>

          {/* Left Side (Moved to user circled top-left area): Live Sync + 3-Way Language */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Live Data Sync Button (MeowDB & MesoWatch) */}
            <button
              onClick={() => setIsSyncModalOpen(true)}
              className="liquid-glass-pill hover:border-emerald-400/80 text-emerald-200 hover:text-emerald-100 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border border-emerald-500/30 shadow-md group transition"
              title="סנכרון נתונים חי מ-MeowDB ו-MesoWatch"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="group-hover:rotate-180 transition duration-500 text-sm">🔄</span>
              <span>{t('liveSync')}</span>
              {syncInfo?.formattedTime && (
                <span className="text-[11px] text-emerald-300/80 font-mono">
                  ({syncInfo.formattedTime.split(' ')[1] || syncInfo.formattedTime})
                </span>
              )}
            </button>

            {/* GitHub Updates Button */}
            <button
              onClick={() => setIsUpdateModalOpen(true)}
              className={`liquid-glass-pill px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 border shadow-md group transition ${
                hasNewUpdate
                  ? 'border-emerald-400 bg-emerald-500/20 text-emerald-200 ring-2 ring-emerald-400/50 animate-pulse'
                  : 'border-purple-400/40 text-purple-200 hover:text-white hover:border-purple-400/80'
              }`}
              title={t('updatesBtn')}
            >
              <span className="text-sm">🐙</span>
              <span>{t('updatesBtn')}</span>
              {hasNewUpdate ? (
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 font-mono animate-bounce">
                  UPDATE!
                </span>
              ) : (
                <span className="text-[10px] font-mono text-purple-300/80 bg-purple-500/15 px-1.5 py-0.5 rounded border border-purple-400/20">
                  v{CURRENT_VERSION}
                </span>
              )}
            </button>

            {/* 3-Way Language Selector: משולב | עברית | English */}
            <div className="flex items-center p-1 rounded-xl liquid-glass-pill border border-sky-300/35 gap-1 text-xs shadow-inner">
              <button
                onClick={() => setLangMode('mixed')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  langMode === 'mixed'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="מצב משולב: מושגי משחק מקוריים באנגלית עם הסברים בעברית"
              >
                משולב
              </button>
              <button
                onClick={() => setLangMode('he')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  langMode === 'he'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="עברית מלאה"
              >
                עברית
              </button>
              <button
                onClick={() => setLangMode('en')}
                className={`px-2.5 py-1 rounded-lg transition font-bold ${
                  langMode === 'en'
                    ? 'bg-cyan-500 text-slate-950 shadow-md font-black'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Full English"
              >
                English
              </button>
            </div>
          </div>
        </div>

        {/* Row 2: Clean, Comfortable Action Toolbar (Organized Navigation & Tools) */}
        <div className="flex items-center justify-between flex-wrap gap-3 pt-0.5">
          
          {/* Main Navigation Tabs: Guide vs Unified Database (Segmented Control) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950/50 rounded-2xl border border-sky-400/25 shadow-inner">
            <button
              onClick={() => setCurrentPage('guide')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition ${
                currentPage === 'guide'
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>📖</span>
              <span>{t('tabGuide')}</span>
            </button>

            <button
              onClick={() => {
                setUnifiedInitialQuery('');
                setUnifiedInitialCategory('all');
                setCurrentPage('unified');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition ${
                currentPage === 'unified'
                  ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-lg shadow-cyan-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>🧭</span>
              <span>{t('tabUnified')}</span>
            </button>
          </div>

          {/* Quick Tools: Class Switcher & Search Trigger Box */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Class Switcher Button */}
            <button
              onClick={() => setIsClassModalOpen(true)}
              className="liquid-glass-btn-primary px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 text-white shadow-lg shadow-cyan-900/40 ring-1 ring-white/30 hover:scale-[1.02] transition"
            >
              <span className="text-base">{activeJob.icon}</span>
              <span>{t('switchClass')} ({activeJob.name})</span>
              <span className="text-xs opacity-80">🔄</span>
            </button>

            {/* Build Share & Presets Modal Button */}
            <button
              onClick={() => setIsShareModalOpen(true)}
              className="liquid-glass-pill hover:border-amber-400 text-amber-200 hover:text-white px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border border-amber-400/40 shadow-md group transition hover:scale-[1.02]"
              title={t('shareBuildBtn')}
            >
              <span className="text-base group-hover:scale-110 transition">📤</span>
              <span>{t('shareBuildBtn')}</span>
            </button>

            {/* Compact Search Trigger Box ("תיבה קטנה") */}
            <div
              onClick={() => setIsOmnibarOpen(true)}
              className="liquid-glass-input hover:border-cyan-400/80 text-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between gap-3 shadow-md border border-sky-300/30 group min-w-[210px] sm:min-w-[240px]"
              title="חיפוש מהיר בכל המאגרים (Ctrl+K)"
            >
              <div className="flex items-center gap-2 text-cyan-200 truncate">
                <span className="text-base group-hover:scale-110 transition shrink-0">🔍</span>
                <span className="text-slate-300 group-hover:text-white transition truncate text-xs font-semibold">{t('searchPlaceholder')}</span>
              </div>
              <span className="text-[10px] font-mono liquid-glass-pill px-1.5 py-0.5 rounded border border-sky-300/30 text-cyan-200 font-bold shrink-0">
                Ctrl+K
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MapleStory Classic World Launch Meta Notice Banner (v1.0.0 - Oct 21, 2026) */}
      <div className="w-full max-w-6xl mb-6 liquid-glass rounded-2xl p-4 border border-cyan-400/40 shadow-xl flex items-start sm:items-center justify-between gap-4 relative z-10 backdrop-blur-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500/25 to-cyan-500/35 border border-amber-400/40 flex items-center justify-center text-2xl shrink-0 shadow-lg">
            🍁
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-cyan-500/25 text-cyan-200 border border-cyan-400/40 font-mono">
                MapleStory Classic World (v1.0.0 Global Launch)
              </span>
              <span className="text-xs font-bold text-amber-300">
                {langMode === 'en' ? 'Launch Meta & Weapons Update • Oct 21, 2026' : 'עדכון השקה ומטא נשקים • 21 באוקטובר 2026'}
              </span>
            </div>
            <p className="text-xs text-slate-200 mt-1 leading-relaxed">
              {langMode === 'en'
                ? 'Important Notice: Maple Weapons (Maple Claw, Kandayo, Staff, Bow, etc.) are NOT in the v1.0.0 launch! They are anniversary event rewards only. All weapon progressions and AP/SP guides below are calibrated for launch gear (scrolled Meba, standard weapons, and launch drop tables).'
                : langMode === 'he'
                ? 'חשוב לדעת: נשקי מייפל (Maple Claw, Staff, Bow, Gun וכו\') אינם קיימים בהשקה (v1.0.0)! מדובר בנשקי אירוע יום הולדת שאינם נופלים ממפלצות. חלוקת הסטטים (AP) והסקילים (SP) במדריך מעודכנת לנשקי השקה בלבד (Meba משודרגת, נשקים קלאסיים ומגילות).'
                : 'חשוב לדעת: נשקי מייפל (Maple Weapons) אינם קיימים בהשקה של Classic World (v1.0.0)! אלו פריטי Event בלבד. חלוקת ה-AP וה-SP וכל המלצות הציוד מעודכנות לנשקי השקה (Meba משודרגת במגילות, נשקים קלאסיים ודרופים תקפים).'}
            </p>
          </div>
        </div>
      </div>

      {/* Guided Character Status Bar (Liquid Glass HUD) */}
      <div className="w-full max-w-6xl mb-6 liquid-glass rounded-2xl p-4 shadow-xl relative z-10 backdrop-blur-2xl border border-sky-300/25">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5">
          
          {/* Left: Quick Player Status */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap justify-center lg:justify-start">
            <div className="liquid-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-xl border border-sky-400/30">
              <span className="text-[11px] text-slate-300 font-medium">{langMode === 'en' ? 'Class:' : 'מקצוע:'}</span>
              <span className="text-sm font-black text-amber-300 flex items-center gap-1">
                <span>{activeJob.icon}</span>
                <span>{langMode === 'en' ? activeJob.name : activeJob.nameHe}</span>
              </span>
            </div>

            <div className="liquid-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-xl border border-amber-400/30">
              <span className="text-[11px] text-slate-300 font-medium">{langMode === 'en' ? 'Level:' : 'רמה:'}</span>
              <span className="text-base font-black text-amber-300 font-mono">Lv. {level}</span>
            </div>

            <div 
              onClick={() => setIsShareModalOpen(true)}
              className="liquid-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/15 cursor-pointer hover:border-amber-400/60 transition group shadow-sm"
              title={t('shareBuildBtn')}
            >
              <span className="text-[11px] text-slate-300 font-medium">{langMode === 'en' ? 'Build:' : 'בנייה:'}</span>
              <span className="text-xs font-bold text-sky-200 group-hover:text-amber-300 transition">
                {langMode === 'en' 
                  ? (activeJob.buildVariants.find(v => v.id === buildType)?.name || buildType)
                  : (activeJob.buildVariants.find(v => v.id === buildType)?.nameHe || buildType)}
              </span>
              <span className="text-xs opacity-70 group-hover:opacity-100 group-hover:scale-110 transition">📤</span>
            </div>

            <div className="liquid-glass-pill flex items-center gap-2 px-3 py-1.5 rounded-xl border border-cyan-400/30 font-mono">
              <span className="text-[11px] text-slate-300 font-sans">{langMode === 'en' ? `Target ${apDetails.secondaryName}:` : `יעד ${apDetails.secondaryName}:`}</span>
              <span className="text-xs font-black text-cyan-300">
                {apDetails.secondaryVal} {apDetails.secondaryName}
              </span>
            </div>
          </div>

          {/* Right: Guided Recommendation for Current Level */}
          <div className="liquid-glass-card flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 text-xs text-slate-200 text-center lg:text-start shadow-inner">
            <span className="text-amber-300 font-black shrink-0 text-sm">
              {langMode === 'en' ? `🎯 Goal for Lv. ${level}:` : `🎯 יעד לרמה ${level}:`}
            </span>
            <span className="text-slate-200 leading-snug">
              {langMode === 'en'
                ? (level === 10
                    ? `Advance to 1st Job (${activeJob.job1Name}) in ${activeJob.town}!`
                    : level === 30
                    ? `Take 2nd Job test (${activeJob.job2Name}) with ${activeJob.instructor1}!`
                    : currentStep.tipTitle
                    ? `Lv. ${level} - Upgrade: ${(currentStep.addedSkills || []).map(s => `${skillsInfo[s.skillId]?.nameEn || s.skillId} (+${s.points})`).join(', ')}`
                    : `Progression as ${level < 30 ? activeJob.job1Name : activeJob.job2Name}`)
                : (currentStep.tipTitle ? `${currentStep.tipTitle} - ${currentStep.tipDesc}` : `התקדמות כ-${level < 30 ? activeJob.job1Name : activeJob.job2Name}`)}
            </span>
          </div>

        </div>
      </div>

      {/* Main Container - Page 1 or Page 2 */}
      {currentPage === 'guide' ? (
        <div className="w-full max-w-6xl space-y-6 relative z-10">

        {/* Level & Build Controller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Level Controller */}
          <div className="lg:col-span-7 liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden border border-sky-300/25">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">{t('levelStep')}</span>
                <h2 className="text-lg sm:text-xl font-black text-white">{t('levelHeader')}</h2>
              </div>
              
              <div className="liquid-glass-pill flex items-center gap-2.5 px-4 py-2 rounded-2xl border border-amber-400/40 shadow-inner">
                <span className="text-xs text-slate-300 font-medium">{t('level')}:</span>
                <span className="text-2xl font-black text-amber-300 font-mono tracking-wider">{level}</span>
              </div>
            </div>

            {/* Stepper & Slider */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleLevelChange(level - 1)}
                  disabled={level <= 10}
                  className="w-11 h-11 rounded-2xl liquid-glass-pill hover:bg-white/15 disabled:opacity-30 flex items-center justify-center font-black text-xl text-white transition active:scale-95"
                >
                  -
                </button>

                <div className="relative flex-1">
                  <input
                    type="range"
                    min="10"
                    max="70"
                    value={level}
                    onChange={(e) => handleLevelChange(e.target.value)}
                    className="w-full h-3.5 bg-slate-800/80 rounded-lg appearance-none cursor-pointer accent-sky-400 focus:outline-none border border-white/10"
                  />
                  <div className="flex justify-between text-[11px] text-slate-300 mt-1.5 font-mono">
                    <span>Lv. 10 ({activeJob.job1Name})</span>
                    <span>Lv. 20</span>
                    <span>Lv. 30 ({activeJob.job2Name})</span>
                    <span>Lv. 43</span>
                    <span>Lv. 50</span>
                    <span>Lv. 70 ({langMode === 'en' ? '3rd Job' : 'עבודה 3'})</span>
                  </div>
                </div>

                <button
                  onClick={() => handleLevelChange(level + 1)}
                  disabled={level >= 70}
                  className="w-11 h-11 rounded-2xl liquid-glass-btn-primary disabled:opacity-30 flex items-center justify-center font-black text-xl text-white transition active:scale-95 shadow-md shadow-sky-600/30"
                >
                  +
                </button>
              </div>

              {/* Quick Jump Buttons */}
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs text-slate-300 block mb-2 font-medium">{t('milestones')}</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { lvl: 10, label: langMode === 'en' ? `Lv. 10 • 1st Job (${activeJob.job1Name})` : `רמה 10 • עבודה 1 (${activeJob.job1Name})` },
                    { lvl: 15, label: langMode === 'en' ? 'Lv. 15 • 1st Weapon Upgrade' : 'רמה 15 • שדרוג נשק ראשון' },
                    { lvl: 20, label: langMode === 'en' ? 'Lv. 20 • Core Skill Boost' : 'רמה 20 • חיזוק מתקפה עיקרית' },
                    { lvl: 21, label: langMode === 'en' ? 'Lv. 21 • Enter KPQ' : 'רמה 21 • כניסה ל-KPQ' },
                    { lvl: 30, label: langMode === 'en' ? `Lv. 30 • 2nd Job (${activeJob.job2Name})` : `רמה 30 • עבודה 2 (${activeJob.job2Name})` },
                    { lvl: 35, label: langMode === 'en' ? 'Lv. 35 • Enter LPQ' : 'רמה 35 • כניסה ל-LPQ' },
                    { lvl: 43, label: langMode === 'en' ? 'Lv. 43 • 2nd Job Peak' : 'רמה 43 • שיא יכולות עבודה 2' },
                    { lvl: 50, label: langMode === 'en' ? 'Lv. 50 • Lv. 50 Gear & Buffs' : 'רמה 50 • נשקי רמה 50 ובאפים' },
                    { lvl: 60, label: langMode === 'en' ? 'Lv. 60 • Advanced Equipment' : 'רמה 60 • ציוד מתקדם' },
                    { lvl: 70, label: langMode === 'en' ? 'Lv. 70 • 3rd Job in El Nath!' : 'רמה 70 • עבודה 3 באל נאת\'!' }
                  ].map(item => (
                    <button
                      key={item.lvl}
                      onClick={() => setLevel(item.lvl)}
                      className={`text-xs px-2.5 py-1.5 rounded-xl font-medium transition border ${
                        level === item.lvl
                          ? 'bg-sky-600/80 text-white border-sky-300 shadow-md shadow-sky-600/30'
                          : 'liquid-glass-pill text-slate-200 hover:text-white hover:bg-white/15'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Build Selector */}
          <div className="lg:col-span-5 liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between border border-sky-300/25">
            <div>
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">{t('buildStep')}</span>
              <h2 className="text-lg sm:text-xl font-black text-white mb-3">
                {langMode === 'en' ? `Select Build Style (${activeJob.name})` : `בחר את סגנון הדמות (${activeJob.nameHe})`}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeJob.buildVariants.map((variant) => {
                  const isSelected = buildType === variant.id;
                  const variantDesc = langMode === 'en'
                    ? (variant.id === 'dexless'
                        ? 'Pure LUK investment for maximum attack power. At launch, relies on scrolled Meba (Faster 3) and DEX gear (Bamboo Hat, Sauna Robe).'
                        : variant.id === 'regular' || variant.id === 'normal'
                        ? 'Balanced build allowing equipping all standard class weapons and armor of each level without expensive scrolls.'
                        : variant.id.includes('less')
                        ? `Pure ${activeJob.primaryStat} investment for highest damage, keeping ${activeJob.secondaryStat} at minimum base.`
                        : 'Balanced progression allowing equipping all standard weapons and level armor.')
                    : variant.desc;

                  return (
                    <div
                      key={variant.id}
                      onClick={() => setBuildType(variant.id)}
                      className={`cursor-pointer rounded-2xl p-4 border transition-all ${
                        isSelected
                          ? 'bg-sky-600/25 border-sky-400 shadow-xl shadow-sky-600/30 ring-1 ring-sky-400'
                          : 'liquid-glass-card hover:border-white/30 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm text-white flex items-center gap-1.5">
                          <span className={`w-2.5 h-2.5 rounded-full inline-block ${isSelected ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-slate-500'}`}></span>
                          {variant.name}
                        </span>
                        <span className="text-[10px] bg-sky-500/20 text-sky-200 px-2 py-0.5 rounded-full font-bold border border-sky-400/30">
                          {variant.id.includes('less') ? t('maxDmg') : t('balanced')}
                        </span>
                      </div>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {variantDesc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>{t('selectedMode')} <strong className="text-white font-bold">{langMode === 'en' ? (activeJob.buildVariants.find(v => v.id === buildType)?.name || buildType) : (activeJob.buildVariants.find(v => v.id === buildType)?.nameHe || buildType)}</strong></span>
              <span className="text-sky-300 font-mono font-bold">{t('targetSecondary')} {apDetails.secondaryName}: {apDetails.secondaryVal}</span>
            </div>
          </div>

        </div>

        {/* AP & SP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* AP Calculator Card */}
          <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between border-t-2 border-t-sky-400/80 border border-sky-300/25">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-sky-500/20 text-sky-200 text-xl border border-sky-400/30 shadow-inner">⚡</span>
                  <div>
                    <span className="text-xs text-sky-300 font-bold block">{t('apTitle')}</span>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      {langMode === 'en' ? `AP Allocation for Lv. ${level} (+5 points)` : `הקצאת AP לרמה ${level} (5 נקודות)`}
                    </h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-xl liquid-glass-pill text-amber-300 font-mono font-bold">
                  {t('apSub')}
                </span>
              </div>

              {/* Main Instruction Banner */}
              <div className="liquid-glass-card bg-sky-950/60 border-sky-400/40 rounded-2xl p-4 mb-4 shadow-inner">
                <span className="text-xs text-sky-200 font-bold block mb-1">{t('apExact')}</span>
                <p className="text-base font-black text-white leading-snug">
                  {apDetails.instructionText}
                </p>
              </div>

              {/* Split Breakdown */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="liquid-glass-card p-3.5 rounded-2xl text-center border border-white/15">
                  <span className="text-xs text-slate-300 block mb-0.5">{t('pointsTo')}{apDetails.secondaryName}</span>
                  <span className={`text-2xl font-black font-mono ${apDetails.secondaryThisLevel > 0 ? 'text-cyan-300' : 'text-slate-400'}`}>
                    +{apDetails.secondaryThisLevel}
                  </span>
                  <span className="text-[11px] text-slate-300 block mt-0.5 font-medium">
                    {t('target')} {apDetails.secondaryVal} {apDetails.secondaryName}
                  </span>
                </div>

                <div className="liquid-glass-card p-3.5 rounded-2xl border border-sky-400/30 text-center">
                  <span className="text-xs text-sky-200 block mb-0.5">{t('pointsTo')}{apDetails.primaryName}</span>
                  <span className="text-2xl font-black text-amber-300 font-mono">
                    +{apDetails.primaryThisLevel}
                  </span>
                  <span className="text-[11px] text-slate-300 block mt-0.5 font-medium">
                    {t('maxAtk')}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed liquid-glass-pill p-3 rounded-xl border border-white/10">
                💡 <strong className="text-sky-300">{t('tacticalTip')}</strong> {apDetails.strategyNote}
              </p>

              {/* Classic World Launch Meta Note */}
              {activeJob.classicLaunchMeta && (
                <div className="mt-2 text-xs text-amber-200 liquid-glass-pill p-3 rounded-xl border border-amber-400/40 bg-amber-950/20 leading-relaxed">
                  🍁 <strong className="text-amber-300 font-bold">{t('classicLaunchTitle')}</strong> {langMode === 'en' ? 'Launch Meta: Only classic pre-BigBang equipment is active at v1.0.0 launch.' : activeJob.classicLaunchMeta}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>{t('secondaryTargetForLv')} {level}: <strong className="text-white font-mono">{apDetails.secondaryVal} {apDetails.secondaryName}</strong></span>
              <span>{t('totalApAdded')} <strong className="text-sky-300 font-mono">+{apDetails.totalApGained} AP</strong></span>
            </div>
          </div>

          {/* SP Allocation Guide Card */}
          <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between border-t-2 border-t-indigo-400/80">
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-200 text-xl border border-indigo-400/30 shadow-inner">📜</span>
                  <div>
                    <span className="text-xs text-indigo-300 font-bold block">{t('spTitle')}</span>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      {langMode === 'en' ? `Skill Allocation for Lv. ${level} (${currentStep.spGained} SP)` : `הקצאת סקילים לרמה ${level} (${currentStep.spGained} SP)`}
                    </h3>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-xl liquid-glass-pill text-indigo-200 font-mono font-bold">
                  {t('spSub')}
                </span>
              </div>

              {/* What to upgrade right now */}
              <div className="liquid-glass-card bg-indigo-900/30 border-indigo-400/40 rounded-2xl p-4 mb-4 shadow-inner">
                <span className="text-xs text-indigo-200 font-bold block mb-1.5">{t('spRequired')}</span>
                <div className="space-y-2">
                  {(currentStep.addedSkills || []).map((item, idx) => {
                    const skill = skillsInfo[item.skillId] || { nameEn: item.skillId, nameHe: item.skillId, icon: '✨' };
                    return (
                      <div key={idx} className="flex items-center justify-between liquid-glass-pill px-3.5 py-2.5 rounded-xl border border-indigo-400/30">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl drop-shadow">{skill.icon}</span>
                          <div>
                            <span className="font-bold text-sm text-white font-mono">
                              {skill.nameEn} {langMode !== 'en' && <span className="text-xs text-indigo-200 font-sans font-normal">({skill.nameHe})</span>}
                            </span>
                            <span className="text-[11px] text-slate-300 block">
                              {langMode === 'en' ? (item.noteEn || `Add +${item.points} SP into ${skill.nameEn}`) : item.note}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-lg bg-indigo-500/30 text-indigo-200 font-black text-sm border border-indigo-400/50 shadow">
                          +{item.points} SP
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Note / Tip */}
              <div className="liquid-glass-pill p-3 rounded-xl border border-white/10">
                <span className="text-xs font-bold text-indigo-200 block mb-0.5">
                  {langMode === 'en'
                    ? (level === 10 ? '1st Job Advancement at Level 10' : level === 30 ? '2nd Job Advancement Milestone' : `Level ${level} Progress`)
                    : currentStep.tipTitle}
                </span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {langMode === 'en'
                    ? (level === 10
                        ? `Began adventure in ${activeJob.town}. Place 1st SP and level up core skills!`
                        : level === 30
                        ? `Talk to ${activeJob.instructor1} for the 2nd Job test!`
                        : `Upgrade: ${(currentStep.addedSkills || []).map(s => `${skillsInfo[s.skillId]?.nameEn || s.skillId} (+${s.points})`).join(', ')}`)
                    : currentStep.tipDesc}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>{t('currentJob')} <strong className="text-white">{level < 30 ? activeJob.job1Name : activeJob.job2Name}</strong></span>
              <span>{t('totalSpInvested')} <strong className="text-indigo-300 font-mono">
                {Object.values(currentStep.cumulative || {}).reduce((a, b) => a + b, 0)} / 182 SP
              </strong></span>
            </div>
          </div>

        </div>

        {/* Tab Navigation (Liquid Glass Style) */}
        <div className="liquid-glass rounded-2xl p-2 border border-white/15 shadow-xl flex items-center gap-2 flex-wrap">
          {[
            { id: 'guide', label: t('tab_tree'), icon: '🌳' },
            { id: 'gear', label: `${t('tab_weapons')} (${activeJob.weapons[0]})`, icon: '⚔️' },
            { id: 'hunting', label: t('tab_strategy'), icon: '🗺️' },
            { id: 'table', label: t('tab_table'), icon: '📊' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition ${
                activeTab === tab.id
                  ? 'liquid-glass-btn-primary text-white shadow-lg shadow-cyan-600/40 ring-1 ring-white/30'
                  : 'liquid-glass-pill text-slate-300 hover:text-white hover:bg-white/15'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Current Skills Overview */}
        {activeTab === 'guide' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {langMode === 'en' ? `Your Skill Tree at Lv. ${level} (${activeJob.name})` : `מצב הסקילים שלך ברמה ${level} כ-${activeJob.nameHe}`}
                </h3>
                <p className="text-xs text-slate-300">
                  {langMode === 'en'
                    ? `Skill points allocation (10-30: 61 SP ${activeJob.job1Name} | 30-70: 121 SP ${activeJob.job2Name})`
                    : `התפלגות נקודות המיומנות (10-30: 61 נקודות ${activeJob.job1Name} | 30-70: 121 נקודות ${activeJob.job2Name})`}
                </p>
              </div>
              <span className="text-xs px-3 py-1.5 liquid-glass-pill rounded-xl text-slate-200 border border-white/20 font-bold">
                {t('progressIndex')} {Math.round((Object.values(currentStep.cumulative || {}).reduce((a, b) => a + b, 0) / 182) * 100)}%
              </span>
            </div>

            {/* Helper renderer for Skill Cards */}
            {(() => {
              const renderCard = (skillKey) => {
                const skill = skillsInfo[skillKey];
                if (!skill) return null;
                const pts = (currentStep.cumulative && currentStep.cumulative[skillKey]) || 0;
                const isMax = pts >= skill.max;
                const isBeingUpgraded = (currentStep.addedSkills || []).some(s => s.skillId === skillKey);
                const percent = Math.round((pts / skill.max) * 100);

                return (
                  <div
                    key={skillKey}
                    className={`rounded-2xl p-4 border transition-all flex flex-col justify-between ${
                      isBeingUpgraded 
                        ? 'glow-active bg-sky-950/70 border-sky-300 shadow-xl ring-2 ring-sky-400/60' 
                        : isMax 
                          ? 'liquid-glass-card bg-emerald-950/20 border-emerald-400/40' 
                          : pts > 0 
                            ? 'liquid-glass-card border-white/20' 
                            : 'liquid-glass-card opacity-60'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-3xl p-2.5 rounded-2xl liquid-glass-pill border border-white/20 shadow-inner">
                          {skill.icon}
                        </span>
                        <div className="text-left">
                          {isBeingUpgraded && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-400/30 text-amber-200 border border-amber-400/50 block mb-1 shadow-sm">
                              {t('upgradingNow')}
                            </span>
                          )}
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isMax ? 'bg-emerald-400/25 text-emerald-300 border border-emerald-400/40' : 'liquid-glass-pill text-slate-300'
                          }`}>
                            {isMax ? 'MAX' : skill.type || 'ACTIVE'}
                          </span>
                        </div>
                      </div>

                      <h4 className="font-black text-white text-base leading-tight font-mono">{skill.nameEn}</h4>
                      <span className="text-xs text-sky-200 block mb-2 font-medium">{skill.nameHe}</span>

                      <div className="flex items-baseline justify-between text-xs mb-1.5 font-mono">
                        <span className="text-slate-300 font-sans">{t('skillLevel')}</span>
                        <span className={`font-black ${isMax ? 'text-emerald-300' : 'text-white'}`}>
                          {pts} <span className="text-slate-400">/ {skill.max}</span>
                        </span>
                      </div>

                      <div className="w-full bg-slate-900/80 rounded-full h-2.5 mb-3 overflow-hidden border border-white/10 p-0.5">
                        <div
                          className={`h-full rounded-full transition-all duration-300 ${
                            isMax ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : isBeingUpgraded ? 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]' : 'bg-sky-400'
                          }`}
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-200 leading-snug line-clamp-3">
                        {skill.desc}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-slate-300 font-medium">
                      {skill.badge || `{t('recommended')} ${skill.optimal || skill.max}`}
                    </div>
                  </div>
                );
              };

              return (
                <div className="space-y-6">
                  {/* Job 1 Skills */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] inline-block"></span>
                      <h4 className="text-sm font-bold text-white">
                        {langMode === 'en'
                          ? `1st Job Skills (${activeJob.job1Name} • Levels 10-30 • 61 SP)`
                          : `סקילי עבודה ראשונה (${activeJob.job1Name} • רמות 10-30 • 61 SP)`}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                      {Object.keys(skillsInfo).filter(k => skillsInfo[k].job === 1).map(renderCard)}
                    </div>
                  </div>

                  {/* Job 2 Skills */}
                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] inline-block"></span>
                        <h4 className="text-sm font-bold text-white">
                          {langMode === 'en'
                            ? `2nd Job Skills (${activeJob.job2Name} • Levels 30-70 • 121 SP)`
                            : `סקילי עבודה שנייה (${activeJob.job2Name} • רמות 30-70 • 121 SP)`}
                        </h4>
                      </div>
                      {level < 30 && (
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full liquid-glass-pill text-amber-300 border border-amber-400/40 font-bold">
                          {t('lockedJob2')}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {Object.keys(skillsInfo).filter(k => skillsInfo[k].job === 2).map(renderCard)}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Tab: Gear & Weapons Progression */}
        {activeTab === 'gear' && (
          <GearProgression
            currentLevel={level}
            currentBuild={buildType}
            activeJobData={activeJob}
            onNavigateToSearch={handleCrossNavigateToSearch}
          />
        )}

        {/* Tab 2: Strategy Tips & Hunting */}
        {activeTab === 'hunting' && (
          <div className="space-y-5">
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs px-3 py-1 rounded-full font-bold border ${strategyData.badgeColor}`}>
                  {strategyData.badge}
                </span>
              </div>
              
              <h3 className="text-lg sm:text-xl font-black text-white mb-2">{strategyData.phase}</h3>
              <div className="space-y-3 text-slate-200 text-sm leading-relaxed">
                <div className="p-4 liquid-glass-card rounded-2xl border border-sky-400/30">
                  <strong className="text-amber-300 block mb-1">{t('corePrinciple')}</strong>
                  {strategyData.mainTip}
                </div>
                <div className="p-4 liquid-glass-card rounded-2xl border border-white/10 text-slate-200">
                  <strong className="text-cyan-300 block mb-1">{t('combatTactics')}</strong>
                  {strategyData.secondaryTip}
                </div>
              </div>

              <div className="mt-4 p-3.5 liquid-glass-pill rounded-2xl border border-sky-400/30 text-xs text-sky-200">
                <strong className="text-sky-300 font-bold block mb-1">
                  {activeJob.icon} {t('gearRecommendation')}
                </strong>
                {strategyData.gearAdvice}
              </div>
            </div>

            {/* Hunting Areas */}
            <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl border border-sky-300/25">
              <h4 className="text-base sm:text-lg font-black text-white mb-3.5 flex items-center gap-2">
                <span>📍</span> {t('recommendedHuntingMaps')} {level} (${langMode === 'en' ? activeJob.name : activeJob.nameHe})
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {strategyData.huntingSpots.map((spot, idx) => (
                  <div key={idx} className="liquid-glass-card rounded-2xl p-4.5 border border-white/15 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-sky-300">{spot.loc}</span>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full liquid-glass-pill text-amber-300 font-mono border border-amber-400/30 font-bold">
                          רמות {spot.levels}
                        </span>
                      </div>
                      <h5 className="font-bold text-white text-sm mb-1">{spot.name}</h5>
                      <span className="text-xs text-slate-300 block mb-2 font-mono">{t('trainingFocus')} {spot.mobs}</span>
                      <p className="text-xs text-slate-200 leading-relaxed">
                        {spot.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Progression Table */}
        {activeTab === 'table' && (
          <div className="liquid-glass rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden space-y-4 border border-sky-300/25">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-3.5">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {t('tableTitle')} {langMode === 'en' ? activeJob.name : activeJob.nameHe} ({langMode === 'en' ? 'Levels 10 to 70' : 'רמות 10 עד 70'})
                </h3>
                <p className="text-xs text-slate-300">{t('tableSub')}</p>
              </div>

              {/* Table Filter Tabs */}
              <div className="flex items-center gap-1.5 liquid-glass-pill p-1.5 rounded-2xl border border-white/15 text-xs">
                <button
                  onClick={() => setTableFilter('all')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    tableFilter === 'all' ? 'bg-cyan-600 text-white shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t('filterAll')}
                </button>
                <button
                  onClick={() => setTableFilter('job1')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    tableFilter === 'job1' ? 'bg-cyan-600 text-white shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t('filterJob1')}
                </button>
                <button
                  onClick={() => setTableFilter('job2')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    tableFilter === 'job2' ? 'bg-cyan-600 text-white shadow' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {t('filterJob2')}
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs">
                <thead>
                  <tr className="liquid-glass-pill text-slate-200 border-b border-white/15 font-bold">
                    <th className="p-3 text-start">{t('thLevel')}</th>
                    <th className="p-3 text-start">{t('thJob')}</th>
                    <th className="p-3 text-start">{t('thSpAdded')}</th>
                    <th className="p-3 text-start">{t('thSkillAlloc')}</th>
                    <th className="p-3 text-start">{apDetails.secondaryName} {t('target')}</th>
                    <th className="p-3 text-start">{t('thMilestone')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {Object.keys(roadmap)
                    .filter((lvlKey) => {
                      const lvlNum = parseInt(lvlKey, 10);
                      if (tableFilter === 'job1') return lvlNum <= 30;
                      if (tableFilter === 'job2') return lvlNum >= 30;
                      return true;
                    })
                    .map((lvlKey) => {
                      const lvlNum = parseInt(lvlKey, 10);
                      const row = roadmap[lvlNum];
                      if (!row) return null;
                      const isSelected = lvlNum === level;
                      const secondaryTarget = activeJob.statFormula 
                        ? activeJob.statFormula(lvlNum, buildType).secondary.val
                        : lvlNum * 2;

                      return (
                        <tr
                          key={lvlNum}
                          onClick={() => setLevel(lvlNum)}
                          className={`cursor-pointer transition ${
                            isSelected 
                              ? 'bg-sky-600/30 text-white font-bold border-r-4 border-r-sky-400' 
                              : 'hover:bg-white/10 text-slate-200'
                          }`}
                        >
                          <td className="p-3 font-mono font-black text-amber-300">
                            {lvlNum === 70 ? '👑 ' : lvlNum === 50 ? '💨 ' : lvlNum === 43 ? '💥 ' : lvlNum === 30 ? '🥷 ' : lvlNum === 20 ? '⭐ ' : ''}
                            {langMode === 'en' ? `Lv. ${lvlNum}` : `רמה ${lvlNum}`}
                          </td>
                          <td className="p-3">
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                              lvlNum < 30 
                                ? 'bg-sky-500/25 text-sky-200 border-sky-400/40' 
                                : 'bg-cyan-500/25 text-cyan-200 border-cyan-400/40'
                            }`}>
                              {lvlNum < 30 ? `${activeJob.job1Name} (1)` : `${activeJob.job2Name} (2)`}
                            </span>
                          </td>
                          <td className="p-3 font-mono text-sky-300 font-bold">+{row.spGained} SP</td>
                          <td className="p-3">
                            {row.addedSkills.map((s, idx) => (
                              <span key={idx} className="inline-block liquid-glass-pill px-2 py-0.5 rounded-lg text-[11px] border border-white/15 ml-1 font-mono text-slate-100">
                                {skillsInfo[s.skillId]?.nameEn || s.skillId} (+{s.points})
                              </span>
                            ))}
                          </td>
                          <td className="p-3 font-mono text-cyan-300 font-bold">{secondaryTarget} {activeJob.secondaryStat}</td>
                          <td className="p-3 text-slate-200 max-w-xs truncate font-medium">
                            {row.tipTitle}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 pt-6 pb-8 border-t border-white/10 space-y-1">
          <p>
            {langMode === 'en'
              ? 'Classic Pre-BigBang MapleStory Guide (v0.55 / v0.62) for all Classes and Jobs'
              : 'מדריך מייפל סטורי קלאסי Pre-BigBang v0.55 / v0.62 לכל המקצועות והעבודות'}
          </p>
          <p>
            {langMode === 'en'
              ? 'Modern Liquid Glass UI with Unified Database for all Monsters, Items, Quests, and NPCs.'
              : 'עיצוב Liquid Glass מודרני בתכלת בוהק ומאגר מידע מאוחד לכל המפלצות, החפצים, המשימות וה-NPCs.'}
          </p>
        </div>

      </div>
      ) : (
        <div className="w-full max-w-6xl relative z-10">
          <UnifiedDatabase
            initialQuery={unifiedInitialQuery}
            initialCategory={unifiedInitialCategory}
            activeJob={activeJob}
            onOpenBuildGuide={() => {
              setCurrentPage('guide');
              setActiveTab('gear');
            }}
          />
        </div>
      )}

      {/* Global Omnibar Modal (Ctrl+K) */}
      <GlobalOmnibar
        isOpen={isOmnibarOpen}
        onClose={() => setIsOmnibarOpen(false)}
        onNavigate={handleOmnibarNavigate}
      />

      {/* Multi-Class Selector Modal */}
      <ClassSelectorModal
        isOpen={isClassModalOpen}
        currentJobId={selectedJobId}
        currentBuild={buildType}
        onSelectJob={(jobId, build) => {
          setSelectedJobId(jobId);
          setBuildType(build);
          setIsClassModalOpen(false);
        }}
        onClose={() => setIsClassModalOpen(false)}
      />

      {/* Live Sync Modal (MeowDB & MesoWatch) */}
      <LiveSyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        onSyncComplete={() => {
          setSyncInfo(getLastSyncInfo());
        }}
      />

      {/* Build Share & Import Center Modal */}
      <BuildShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        currentJob={activeJob}
        currentLevel={level}
        currentBuild={buildType}
        apDetails={apDetails}
        currentStep={currentStep}
        skillsInfo={skillsInfo}
        onLoadBuild={handleLoadCustomBuild}
      />

      {/* GitHub Update & Version Center Modal */}
      <UpdateModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
      />

    </div>
  );
}
