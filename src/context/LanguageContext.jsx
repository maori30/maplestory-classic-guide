import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

const STORAGE_LANG_KEY = 'maple_lang_mode';

export const TRANSLATIONS = {
  he: {
    dir: 'rtl',
    langName: 'עברית',
    classicBadge: 'גרסה קלאסית Pre-BigBang',
    guideTitle: 'מדריך',
    levelsTitle: 'רמות 10-70',
    switchClass: 'החלף מקצוע',
    searchPlaceholder: 'חיפוש מהיר במאגר... (Ctrl+K)',
    tabGuide: 'מדריך בילד',
    tabUnified: 'מאגר מידע מאוחד',
    liveSync: 'סנכרון חי',
    syncing: 'מסנכרן כעת...',
    levelStep: 'שלב 1 • בחירת רמה',
    levelHeader: 'בחר את רמת השחקן שלך (10-70)',
    level: 'רמה',
    milestones: 'ציוני דרך קריטיים:',
    buildStep: 'שלב 2 • סוג בנייה',
    buildHeader: 'בחר את סגנון הדמות',
    maxDmg: 'נזק מרבי',
    balanced: 'מאוזן',
    selectedMode: 'מצב נבחר:',
    targetSecondary: 'יעד',

    // AP & SP
    apTitle: 'מחשבון נקודות תכונה (AP)',
    apSub: '+5 AP בכל עליית רמה',
    apExact: 'הוראה מדויקת לחלוקה כעת:',
    pointsTo: 'נקודות ל-',
    target: 'יעד:',
    maxAtk: 'ממקסם את כוח ההתקפה',
    tacticalTip: 'הסבר טקטי:',
    classicLaunchTitle: 'השקת Classic World (v1.0.0):',
    totalApAdded: 'סה״כ AP נוסף מרמה 10:',
    secondaryTargetForLv: 'יעד לרמה',

    spTitle: 'מדריך נקודות מיומנות (SP)',
    spSub: '3 SP לרמה (1 SP ברמה 10)',
    spRequired: 'השקעה נדרשת ברמה הנוכחית:',
    currentSkills: 'מצב מיומנויות מצטבר:',
    points: 'נקודות',
    max: 'מקסימום',
    currentJob: 'עבודה נוכחית:',
    totalSpInvested: 'סך כל SP מושקע:',
    upgradingNow: 'משתדרג כעת!',
    skillLevel: 'רמת סקיל:',
    recommended: 'מומלץ:',
    job1SkillsTitle: 'סקילי עבודה ראשונה',
    job2SkillsTitle: 'סקילי עבודה שנייה',
    lockedJob2: '🔒 נפתח במעבר עבודה ברמה 30',
    progressIndex: 'מדד התקדמות מלא:',

    // Tabs
    tab_tree: 'עץ סקילים נוכחי ופירוט',
    tab_weapons: 'מסלול נשקים',
    tab_strategy: 'מדריך אסטרטגיה ומפות ציד',
    tab_table: 'טבלת התקדמות מלאה (10-70)',

    // Strategy
    corePrinciple: '🎯 עיקרון ליבה:',
    combatTactics: '🛡️ טקטיקת קרב והגעה:',
    gearRecommendation: 'המלצת ציוד לשלב זה:',
    recommendedHuntingMaps: 'מפות ציד מומלצות לרמה',
    trainingFocus: 'מוקד אימון:',

    // Table
    tableTitle: 'טבלת התקדמות מלאה עבור',
    tableSub: 'לחץ על כל שורה בטבלה כדי לעבור מיידית לרמה זו',
    filterAll: 'הכל (10-70)',
    filterJob1: 'עבודה 1 (10-30)',
    filterJob2: 'עבודה 2 (30-70)',
    thLevel: 'רמה',
    thJob: 'עבודה',
    thSpAdded: 'SP שהתווסף',
    thSkillAlloc: 'השקעת סקילים ברמה זו',
    thTargetStat: 'סטט יעד',
    thMilestone: 'ציון דרך / המלצה ממוקדת',

    // Database & Categories
    all: 'הכל',
    monsters: 'מפלצות',
    items: 'חפצים ושלל',
    quests: 'משימות',
    npcs: 'דמויות (NPC)',
    weapons: 'כלי נשק',
    secondary: 'ציוד משני ותחמושת',
    gear: 'ציוד כללי',
    favorites: 'מועדפים',
    radarBtn: 'סקיצת שטח ורדאר 2D חי',
    mapleClassicNotice: 'השקת MapleStory Classic World (21 באוקטובר 2026): נשקי מייפל (Maple Weapons) אינם קיימים בהשקה (פריטי אירוע עתידי בלבד)!',
    eventOnly: 'אירוע בלבד',
    launchAvailable: 'זמין בהשקה v1.0.0',
    close: 'סגור',
    startSyncNow: 'התחל סנכרון חי כעת ⚡',

    // DB Inspect labels
    dbTitle: 'מאגר מידע מאוחד • כל המשחק במקום אחד',
    resultsFound: 'תוצאות נמצאו',
    dbSub: 'אנציקלופדיית מייפל סטורי: מפלצות, פריטים, משימות, NPCs וציוד',
    dbInstruction: 'הקלד כל שם פריט, מפלצת, משימה או NPC וקבל מיד את כל המידע המקושר',
    searchBoxPlaceholder: 'חפש הכל: Slime, Pure Water, Maya, Pan Lid, Meba, I Need to Find My Daughter...',
    quickResults: 'תוצאות חיפוש מהירות (לחץ לבחירה):',
    loadMore: 'טען עוד',
    remaining: 'נותרו',
    baseTown: 'עיר בסיס:',
    expGiven: 'ניסיון (EXP):',
    dropsSpoils: 'חפצים ושלל שנופלים מהמפלצת (דרופים):',
    mesoDrop: 'מזו שנופל בממוצע:',
    locationsAndRoutes: 'אזורי מחיה, מפות ודרכי הגעה בשטח:',
    showMapAndRoutes: 'הצג מפלצת ודרכי הגעה 🧭',
    itemReqLevel: 'דרישת רמה:',
    itemPrice: 'מחיר בחנות NPC:',
    droppedByMonsters: 'מפלצות שמפילות את הפריט (לחץ למעבר ישיר למפלצת):',
    directLink: '🔗 קישור ישיר',
    requiredForQuests: 'נדרש עבור משימות במשחק:',
    rewardFromQuests: 'מתקבל כפרס ממשימות:',
    needsCount: 'צריך',
    viewMonster: 'הצג מפלצת 🧭',
    viewQuest: 'הצג משימה 📜',
    questGiver: 'נותן המשימה (NPC):',
    prereqs: 'תנאי פתיחה:',
    requiredItems: 'חפצים דרושים (לחץ לבדיקת מקורות דרופ וחנויות):',
    monstersToHunt: 'מפלצות לציד (לחץ להצגת דרכי הגעה):',
    walkthroughSteps: 'מדריך שלב-אחר-שלב להשלמת המשימה:',
    rewardsOnCompletion: 'פרסים בהשלמה:',
    stepsCount: 'שלבים',
    mapLocation: 'מיקום מפה:',
    role: 'תפקיד:',
    howToReachNpc: 'איך להגיע אל ה-NPC:',
    relevantQuests: 'משימות קשורות:',
    weaponAtt: 'עוצמת התקפה:',
    attSpeed: 'מהירות תקיפה',
    statReqs: 'דרישות סטטים',
    scrollSlots: 'סלוטים לגלילה',
    suitableBuild: 'התאמת בילד',
    howToObtain: 'איך ומאיפה משיגים:',
    upgradeTip: 'טיפ שדרוג ושימוש:',
    capacityPerSet: 'קיבולת לסט / מחסנית:',
    unitsPerRecharge: 'יחידות בטעינה',
    marketPriceEst: 'הערכת מחיר שוק:',
    tacticalGearTip: 'טיפ טקטי:',
    stats: 'סטטים:',
    howToGet: 'איך להשיג:',
    radarTitle: 'סקיצת שטח ורדאר 2D חי',
    radarSub: 'הדמיית פלטפורמות 2D חיה עם מפלצות בתנועה, פורטלים נסתרים ועמדות בטוחות',

    // Modals
    classModalTitle: 'בחר מקצוע (Class Selection)',
    classModalSub: 'מערכת בחירת מקצועות רב-תכליתית',
    availableJobsUnder: 'עבודות זמינות תחת',
    originTown: 'עיר מוצא:',
    primarySecondaryStat: 'סטט ראשי / משני:',
    primaryWeapons: 'כלי נשק ראשיים:',
    selectBuildVariant: 'בחר סגנון חלוקת סטטים (Build Variant):',
    coreFirstJobSkills: 'סקילים מרכזיים (עבודה ראשונה):',
    cancel: 'ביטול',
    launchGuideFor: 'הפעל מדריך עבור',

    liveSyncTitle: 'מרכז סנכרון נתונים חי (Live Data Synchronization)',
    liveSyncSub: 'סנכרון מקוון מ-6 מקורות רשמיים',
    officialSourcesTitle: '6 מקורות המידע והדאטאבייסים המוסמכים של המשחק (MSCW אוקטובר 2026):',
    clickToOpenBrowser: 'לחץ לפתיחה ישירה בדפדפן',
    visitSite: 'ביקור באתר',
    lastSyncStatus: 'סטטוס סנכרון אחרון:',
    itemsUpdated: 'פריטים מעודכנים בזיכרון',
    noSyncYet: 'טרם בוצע סנכרון במכשיר זה',
    savedInCache: 'נשמר מקומית ב-LocalStorage Cache',
    syncInstructions: 'לחץ על "התחל סנכרון חי" כדי למשוך נתונים עדכניים מכל 6 המאגרים',
    syncingProgress: 'מתבצע סנכרון מקוון מול שרתי הקהילה והדאטאבייסים...',
    syncCompletedSuccess: 'הסנכרון הושלם בהצלחה מול כל המקורות!',
    syncFootnote: 'סנכרון בלחיצה אחת מעדכן מחירי שוק, דרופים וסטטים בזמן אמת.',

    // Omnibar
    omnibarPlaceholder: 'חפש הכל: מפלצת, פריט, משימה, NPC, סקיל או נשק... (Escape לסגירה)',
    noResultsFound: 'לא נמצאו תוצאות עבור',

    // Travel Guide
    travelTitle: 'הוראות הגעה ויזואליות וסקיצת שטח:',
    travelSub: 'מפת רדאר אינטראקטיבית מדויקת פר מפה + מעבר בין כל אזורי המחיה והפורטלים',
    allMapsWhereFound: 'כל המפות שבהן המפלצת נמצאת:',
    clickMapToInspect: 'לחץ על מפה כדי לצפות בסקיצה האמיתית שלה, בפלטפורמות ובמפלצות המונפשות',
    mapOf: 'מפה',
    outOf: 'מתוך',
    secretPortalStep: 'מעבר פורטל נסתר [↑]',
    regularTravelStep: 'הליכה במסלול רגיל [→]',
    mainHuntingMap: 'מפת ציד מרכזית',
    updatesBtn: 'עדכוני גרסה מ-GitHub',
    // Build Share & Import
    shareBuildBtn: 'שיתוף וייבוא בילד',
    shareModalTitle: 'מרכז שיתוף וייבוא בילדים (Build Share & Import)',
    shareModalSub: 'ייצוא, שיתוף עם חברים וטעינת בילדים אישיים בלחיצה אחת',
    tabExport: '📤 ייצוא ושיתוף',
    tabImport: '📥 ייבוא בילד',
    tabPresets: '💾 הבילדים שלי',
    shareCodeTitle: 'קוד שיתוף מהיר (Share Code):',
    copyShareCode: '📋 העתק קוד שיתוף',
    copyDiscordSummary: '💬 העתק סיכום מעוצב לדיסקורד',
    saveToMyBuilds: '💾 שמור לדמויות שלי',
    pastePrompt: 'הדבק כאן קוד בילד (MSCW-...) או אובייקט JSON:',
    pastePlaceholder: 'הדבק קוד שיתוף שקיבלת מחבר כאן...',
    previewBuildTitle: 'תצוגה מקדימה של הבילד לטעינה:',
    applyBuildToGuide: '🚀 החל בילד זה על המדריך כעת',
    invalidBuildCode: 'קוד הבילד אינו תקין או פגום',
    buildAppliedToast: 'הבילד הוחל בהצלחה על המדריך!',
    buildSavedToast: 'הבילד נשמר בהצלחה ברשימה המקומית!',
    noSavedBuilds: 'עדיין אין בילדים שמורים ברשימה שלך',
    loadPreset: 'טען בילד',
    deletePreset: 'מחק',
  },

  en: {
    dir: 'ltr',
    langName: 'English',
    classicBadge: 'Classic Pre-BigBang v1.0.0',
    guideTitle: 'Guide',
    levelsTitle: 'Levels 10-70',
    switchClass: 'Change Class',
    searchPlaceholder: 'Quick Search Database... (Ctrl+K)',
    tabGuide: 'Build Guide',
    tabUnified: 'Unified Database',
    liveSync: 'Live Sync',
    syncing: 'Syncing...',
    levelStep: 'Step 1 • Select Level',
    levelHeader: 'Select Your Character Level (10-70)',
    level: 'Level',
    milestones: 'Key Milestones:',
    buildStep: 'Step 2 • Select Build',
    buildHeader: 'Select Your Build Style',
    maxDmg: 'Max Damage',
    balanced: 'Balanced',
    selectedMode: 'Selected Mode:',
    targetSecondary: 'Target',

    // AP & SP
    apTitle: 'Ability Points (AP) Calculator',
    apSub: '+5 AP per level-up',
    apExact: 'Exact Allocation Instruction:',
    pointsTo: 'Points to ',
    target: 'Target: ',
    maxAtk: 'Maximizes Attack Power',
    tacticalTip: 'Tactical Tip:',
    classicLaunchTitle: 'Classic World Launch (v1.0.0):',
    totalApAdded: 'Total AP gained from Lv 10:',
    secondaryTargetForLv: 'Target for Lv.',

    spTitle: 'Skill Points (SP) Guide',
    spSub: '3 SP per level (1 SP at Lv 10)',
    spRequired: 'Required Skill Allocation for Current Level:',
    currentSkills: 'Cumulative Skill Tree:',
    points: 'pts',
    max: 'MAX',
    currentJob: 'Current Job:',
    totalSpInvested: 'Total SP Invested:',
    upgradingNow: 'Upgrading Now!',
    skillLevel: 'Skill Level:',
    recommended: 'Recommended:',
    job1SkillsTitle: '1st Job Skills',
    job2SkillsTitle: '2nd Job Skills',
    lockedJob2: '🔒 Unlocks on Job Advancement at Lv 30',
    progressIndex: 'Full Progression Index:',

    // Tabs
    tab_tree: 'Current Skill Tree & Details',
    tab_weapons: 'Weapon Progression',
    tab_strategy: 'Strategy Guide & Hunting Maps',
    tab_table: 'Full Progression Table (10-70)',

    // Strategy
    corePrinciple: '🎯 Core Principle:',
    combatTactics: '🛡️ Combat Tactics & Mobility:',
    gearRecommendation: 'Gear Recommendation for this stage:',
    recommendedHuntingMaps: 'Recommended Hunting Maps for Level',
    trainingFocus: 'Training Focus:',

    // Table
    tableTitle: 'Full Progression Table for',
    tableSub: 'Click any row to jump immediately to that level',
    filterAll: 'All (10-70)',
    filterJob1: '1st Job (10-30)',
    filterJob2: '2nd Job (30-70)',
    thLevel: 'Level',
    thJob: 'Job',
    thSpAdded: 'SP Added',
    thSkillAlloc: 'Skill Points Allocation',
    thTargetStat: 'Target Stat',
    thMilestone: 'Key Milestone / Tactical Tip',

    // Database & Categories
    all: 'All',
    monsters: 'Monsters',
    items: 'Items & Drops',
    quests: 'Quests',
    npcs: 'NPCs',
    weapons: 'Weapons',
    secondary: 'Secondary & Ammo',
    gear: 'Essential Gear',
    favorites: 'Favorites',
    radarBtn: '2D Terrain Radar Canvas',
    mapleClassicNotice: 'MapleStory Classic World Launch (Oct 21, 2026): Maple Weapons are NOT available at launch (Event-Only items)!',
    eventOnly: 'Event Only',
    launchAvailable: 'v1.0.0 Launch Item',
    close: 'Close',
    startSyncNow: 'Start Live Sync Now ⚡',

    // DB Inspect labels
    dbTitle: 'Unified Database • Complete Classic Game Encyclopedia',
    resultsFound: 'results found',
    dbSub: 'Pre-BigBang encyclopedia: monsters, items, quests, NPCs, and equipment',
    dbInstruction: 'Type any item, monster, quest, or NPC name to inspect cross-referenced game data',
    searchBoxPlaceholder: 'Search everything: Slime, Pure Water, Maya, Pan Lid, Meba, I Need to Find My Daughter...',
    quickResults: 'Quick Search Results (Click to select):',
    loadMore: 'Load more',
    remaining: 'remaining',
    baseTown: 'Base Town:',
    expGiven: 'Experience (EXP):',
    dropsSpoils: 'Drops & Spoils from Monster:',
    mesoDrop: 'Average Meso Drop:',
    locationsAndRoutes: 'Habitats, Maps & Travel Routes:',
    showMapAndRoutes: 'Show Monster & Travel Route 🧭',
    itemReqLevel: 'Req. Level:',
    itemPrice: 'NPC Shop Price:',
    droppedByMonsters: 'Dropped by Monsters (Click to inspect monster):',
    directLink: '🔗 Direct Link',
    requiredForQuests: 'Required for Quests:',
    rewardFromQuests: 'Reward from Quests:',
    needsCount: 'Needs',
    viewMonster: 'View Monster 🧭',
    viewQuest: 'View Quest 📜',
    questGiver: 'Quest Giver (NPC):',
    prereqs: 'Prerequisites:',
    requiredItems: 'Required Items (Click to check drops & shops):',
    monstersToHunt: 'Monsters to Hunt (Click for travel route):',
    walkthroughSteps: 'Step-by-step Walkthrough:',
    rewardsOnCompletion: 'Rewards on Completion:',
    stepsCount: 'steps',
    mapLocation: 'Map Location:',
    role: 'Role:',
    howToReachNpc: 'How to Reach this NPC:',
    relevantQuests: 'Relevant Quests:',
    weaponAtt: 'Attack Power:',
    attSpeed: 'Attack Speed',
    statReqs: 'Stat Requirements',
    scrollSlots: 'Scroll Slots',
    suitableBuild: 'Recommended Build',
    howToObtain: 'How & Where to Obtain:',
    upgradeTip: 'Upgrade & Tactical Tip:',
    capacityPerSet: 'Capacity per Set / Stack:',
    unitsPerRecharge: 'units per stack',
    marketPriceEst: 'Market Price Estimate:',
    tacticalGearTip: 'Tactical Tip:',
    stats: 'Stats:',
    howToGet: 'How to Obtain:',
    radarTitle: 'Interactive 2D Terrain Radar Canvas',
    radarSub: 'Live 2D platform simulation with moving monsters, hidden portals, and safe perches',

    // Modals
    classModalTitle: 'Select Class (Class Selection)',
    classModalSub: 'Multi-Class Progression System',
    availableJobsUnder: 'Available Jobs Under',
    originTown: 'Origin Town:',
    primarySecondaryStat: 'Primary / Secondary Stat:',
    primaryWeapons: 'Primary Weapons:',
    selectBuildVariant: 'Select Stat Allocation Style (Build Variant):',
    coreFirstJobSkills: 'Core Skills (1st Job):',
    cancel: 'Cancel',
    launchGuideFor: 'Launch Guide for',

    liveSyncTitle: 'Live Data Synchronization Center',
    liveSyncSub: 'Online sync from 6 official MSCW sources',
    officialSourcesTitle: '6 Authoritative Game Databases & Community Sources (MSCW Oct 2026):',
    clickToOpenBrowser: 'Click to open directly in web browser',
    visitSite: 'Visit Website',
    lastSyncStatus: 'Last Sync Status:',
    itemsUpdated: 'items updated in memory cache',
    noSyncYet: 'No sync performed yet on this device',
    savedInCache: 'Persisted locally in LocalStorage Cache',
    syncInstructions: 'Click "Start Live Sync Now" to fetch the freshest data from all 6 sources',
    syncingProgress: 'Performing online sync with community servers and datamines...',
    syncCompletedSuccess: 'Live sync completed successfully across all sources!',
    syncFootnote: 'One-click sync updates free market prices, drops, and item stats in real time.',

    // Omnibar
    omnibarPlaceholder: 'Search everything: monster, item, quest, NPC, skill, or weapon... (Escape to close)',
    noResultsFound: 'No matches found for',

    // Travel Guide
    travelTitle: 'Visual Travel Instructions & Terrain Radar:',
    travelSub: 'Interactive 2D map radar per location + full navigation between habitats and hidden portals',
    allMapsWhereFound: 'All Maps where this monster spawns:',
    clickMapToInspect: 'Click a map to view its layout, platforms, and animated monsters',
    mapOf: 'Map',
    outOf: 'of',
    secretPortalStep: 'Secret Hidden Portal [↑]',
    regularTravelStep: 'Follow Path Forward [→]',
    mainHuntingMap: 'Main Hunting Map',
    updatesBtn: 'GitHub Updates',
    // Build Share & Import
    shareBuildBtn: 'Share & Import Build',
    shareModalTitle: 'Build Share & Import Center',
    shareModalSub: 'Export, share with friends, and import custom builds in 1 click',
    tabExport: '📤 Export & Share',
    tabImport: '📥 Import Build',
    tabPresets: '💾 My Saved Builds',
    shareCodeTitle: 'Quick Share Code:',
    copyShareCode: '📋 Copy Share Code',
    copyDiscordSummary: '💬 Copy Discord Summary',
    saveToMyBuilds: '💾 Save to My Presets',
    pastePrompt: 'Paste Build Code (MSCW-...) or JSON below:',
    pastePlaceholder: 'Paste build code from a friend here...',
    previewBuildTitle: 'Build Preview Before Applying:',
    applyBuildToGuide: '🚀 Apply this Build to Guide Now',
    invalidBuildCode: 'Invalid or corrupted build code',
    buildAppliedToast: 'Build applied to the guide successfully!',
    buildSavedToast: 'Build saved to your local presets!',
    noSavedBuilds: 'No saved builds in your list yet',
    loadPreset: 'Load Build',
    deletePreset: 'Delete',
  },

  mixed: {
    dir: 'rtl',
    langName: 'משולב (Bilingual)',
    classicBadge: 'גרסה קלאסית Pre-BigBang (v1.0.0)',
    guideTitle: 'מדריך',
    levelsTitle: 'רמות 10-70',
    switchClass: 'החלף מקצוע',
    searchPlaceholder: 'חיפוש מהיר במאגר... (Ctrl+K)',
    tabGuide: 'מדריך בילד',
    tabUnified: 'מאגר מידע מאוחד',
    liveSync: 'סנכרון חי',
    syncing: 'מסנכרן כעת...',
    levelStep: 'שלב 1 • בחירת רמה',
    levelHeader: 'בחר את רמת השחקן שלך (10-70)',
    level: 'רמה',
    milestones: 'ציוני דרך קריטיים:',
    buildStep: 'שלב 2 • סוג בנייה',
    buildHeader: 'בחר את סגנון הדמות',
    maxDmg: 'נזק מרבי',
    balanced: 'מאוזן',
    selectedMode: 'מצב נבחר:',
    targetSecondary: 'יעד',

    // AP & SP
    apTitle: 'הקצאת נקודות תכונה (AP Calculator)',
    apSub: '+5 AP בכל עליית רמה',
    apExact: 'הוראה מדויקת לחלוקה כעת:',
    pointsTo: 'נקודות ל-',
    target: 'יעד:',
    maxAtk: 'ממקסם את כוח ההתקפה',
    tacticalTip: 'הסבר טקטי:',
    classicLaunchTitle: 'השקת Classic World (v1.0.0):',
    totalApAdded: 'סה״כ AP נוסף מרמה 10:',
    secondaryTargetForLv: 'יעד לרמה',

    spTitle: 'מדריך נקודות מיומנות (SP Guide)',
    spSub: '3 SP לרמה (1 SP ברמה 10)',
    spRequired: 'השקעה נדרשת ברמה הנוכחית:',
    currentSkills: 'מצב מיומנויות מצטבר:',
    points: 'נקודות',
    max: 'מקסימום',
    currentJob: 'עבודה נוכחית:',
    totalSpInvested: 'סך כל SP מושקע:',
    upgradingNow: 'משתדרג כעת!',
    skillLevel: 'רמת סקיל:',
    recommended: 'מומלץ:',
    job1SkillsTitle: 'סקילי עבודה ראשונה',
    job2SkillsTitle: 'סקילי עבודה שנייה',
    lockedJob2: '🔒 נפתח במעבר עבודה ברמה 30',
    progressIndex: 'מדד התקדמות מלא:',

    // Tabs
    tab_tree: 'עץ סקילים נוכחי ופירוט',
    tab_weapons: 'מסלול נשקים',
    tab_strategy: 'מדריך אסטרטגיה ומפות ציד',
    tab_table: 'טבלת התקדמות מלאה (10-70)',

    // Strategy
    corePrinciple: '🎯 עיקרון ליבה:',
    combatTactics: '🛡️ טקטיקת קרב והגעה:',
    gearRecommendation: 'המלצת ציוד לשלב זה:',
    recommendedHuntingMaps: 'מפות ציד מומלצות לרמה',
    trainingFocus: 'מוקד אימון:',

    // Table
    tableTitle: 'טבלת התקדמות מלאה עבור',
    tableSub: 'לחץ על כל שורה בטבלה כדי לעבור מיידית לרמה זו',
    filterAll: 'הכל (10-70)',
    filterJob1: 'עבודה 1 (10-30)',
    filterJob2: 'עבודה 2 (30-70)',
    thLevel: 'רמה',
    thJob: 'עבודה',
    thSpAdded: 'SP שהתווסף',
    thSkillAlloc: 'השקעת סקילים ברמה זו',
    thTargetStat: 'סטט יעד',
    thMilestone: 'ציון דרך / המלצה ממוקדת',

    // Database & Categories
    all: 'הכל',
    monsters: 'מפלצות (Monsters)',
    items: 'חפצים ושלל (Items)',
    quests: 'משימות (Quests)',
    npcs: 'דמויות (NPCs)',
    weapons: 'כלי נשק (Weapons)',
    secondary: 'ציוד משני ותחמושת (Secondary)',
    gear: 'ציוד כללי (Gear)',
    favorites: 'מועדפים (Favorites)',
    radarBtn: 'סקיצת שטח ורדאר 2D חי',
    mapleClassicNotice: 'השקת MapleStory Classic World (21 באוקטובר 2026): נשקי מייפל (Maple Weapons) אינם קיימים בהשקה (פריטי אירוע עתידי בלבד)!',
    eventOnly: 'אירוע בלבד (Event Only)',
    launchAvailable: 'זמין בהשקה (v1.0.0 Launch)',
    close: 'סגור',
    startSyncNow: 'התחל סנכרון חי כעת ⚡',

    // DB Inspect labels
    dbTitle: 'מאגר מידע מאוחד • כל המשחק במקום אחד',
    resultsFound: 'תוצאות נמצאו',
    dbSub: 'אנציקלופדיית מייפל סטורי: מפלצות, פריטים, משימות, NPCs וציוד',
    dbInstruction: 'הקלד כל שם פריט, מפלצת, משימה או NPC וקבל מיד את כל המידע המקושר',
    searchBoxPlaceholder: 'חפש הכל: Slime, Pure Water, Maya, Pan Lid, Meba, I Need to Find My Daughter...',
    quickResults: 'תוצאות חיפוש מהירות (לחץ לבחירה):',
    loadMore: 'טען עוד',
    remaining: 'נותרו',
    baseTown: 'עיר בסיס:',
    expGiven: 'ניסיון (EXP):',
    dropsSpoils: 'חפצים ושלל שנופלים מהמפלצת (דרופים):',
    mesoDrop: 'מזו שנופל בממוצע:',
    locationsAndRoutes: 'אזורי מחיה, מפות ודרכי הגעה בשטח:',
    showMapAndRoutes: 'הצג מפלצת ודרכי הגעה 🧭',
    itemReqLevel: 'דרישת רמה:',
    itemPrice: 'מחיר בחנות NPC:',
    droppedByMonsters: 'מפלצות שמפילות את הפריט (לחץ למעבר ישיר למפלצת):',
    directLink: '🔗 קישור ישיר',
    requiredForQuests: 'נדרש עבור משימות במשחק:',
    rewardFromQuests: 'מתקבל כפרס ממשימות:',
    needsCount: 'צריך',
    viewMonster: 'הצג מפלצת 🧭',
    viewQuest: 'הצג משימה 📜',
    questGiver: 'נותן המשימה (NPC):',
    prereqs: 'תנאי פתיחה:',
    requiredItems: 'חפצים דרושים (לחץ לבדיקת מקורות דרופ וחנויות):',
    monstersToHunt: 'מפלצות לציד (לחץ להצגת דרכי הגעה):',
    walkthroughSteps: 'מדריך שלב-אחר-שלב להשלמת המשימה:',
    rewardsOnCompletion: 'פרסים בהשלמה:',
    stepsCount: 'שלבים',
    mapLocation: 'מיקום מפה:',
    role: 'תפקיד:',
    howToReachNpc: 'איך להגיע אל ה-NPC:',
    relevantQuests: 'משימות קשורות:',
    weaponAtt: 'עוצמת התקפה:',
    attSpeed: 'מהירות תקיפה',
    statReqs: 'דרישות סטטים',
    scrollSlots: 'סלוטים לגלילה',
    suitableBuild: 'התאמת בילד',
    howToObtain: 'איך ומאיפה משיגים:',
    upgradeTip: 'טיפ שדרוג ושימוש:',
    capacityPerSet: 'קיבולת לסט / מחסנית:',
    unitsPerRecharge: 'יחידות בטעינה',
    marketPriceEst: 'הערכת מחיר שוק:',
    tacticalGearTip: 'טיפ טקטי:',
    stats: 'סטטים:',
    howToGet: 'איך להשיג:',
    radarTitle: 'סקיצת שטח ורדאר 2D חי',
    radarSub: 'הדמיית פלטפורמות 2D חיה עם מפלצות בתנועה, פורטלים נסתרים ועמדות בטוחות',

    // Modals
    classModalTitle: 'בחר מקצוע (Class Selection)',
    classModalSub: 'מערכת בחירת מקצועות רב-תכליתית',
    availableJobsUnder: 'עבודות זמינות תחת',
    originTown: 'עיר מוצא:',
    primarySecondaryStat: 'סטט ראשי / משני:',
    primaryWeapons: 'כלי נשק ראשיים:',
    selectBuildVariant: 'בחר סגנון חלוקת סטטים (Build Variant):',
    coreFirstJobSkills: 'סקילים מרכזיים (עבודה ראשונה):',
    cancel: 'ביטול',
    launchGuideFor: 'הפעל מדריך עבור',

    liveSyncTitle: 'מרכז סנכרון נתונים חי (Live Data Synchronization)',
    liveSyncSub: 'סנכרון מקוון מ-6 מקורות רשמיים',
    officialSourcesTitle: '6 מקורות המידע והדאטאבייסים המוסמכים של המשחק (MSCW אוקטובר 2026):',
    clickToOpenBrowser: 'לחץ לפתיחה ישירה בדפדפן',
    visitSite: 'ביקור באתר',
    lastSyncStatus: 'סטטוס סנכרון אחרון:',
    itemsUpdated: 'פריטים מעודכנים בזיכרון',
    noSyncYet: 'טרם בוצע סנכרון במכשיר זה',
    savedInCache: 'נשמר מקומית ב-LocalStorage Cache',
    syncInstructions: 'לחץ על "התחל סנכרון חי" כדי למשוך נתונים עדכניים מכל 6 המאגרים',
    syncingProgress: 'מתבצע סנכרון מקוון מול שרתי הקהילה והדאטאבייסים...',
    syncCompletedSuccess: 'הסנכרון הושלם בהצלחה מול כל המקורות!',
    syncFootnote: 'סנכרון בלחיצה אחת מעדכן מחירי שוק, דרופים וסטטים בזמן אמת.',

    // Omnibar
    omnibarPlaceholder: 'חפש הכל: מפלצת, פריט, משימה, NPC, סקיל או נשק... (Escape לסגירה)',
    noResultsFound: 'לא נמצאו תוצאות עבור',

    // Travel Guide
    travelTitle: 'הוראות הגעה ויזואליות וסקיצת שטח:',
    travelSub: 'מפת רדאר אינטראקטיבית מדויקת פר מפה + מעבר בין כל אזורי המחיה והפורטלים',
    allMapsWhereFound: 'כל המפות שבהן המפלצת נמצאת:',
    clickMapToInspect: 'לחץ על מפה כדי לצפות בסקיצה האמיתית שלה, בפלטפורמות ובמפלצות המונפשות',
    mapOf: 'מפה',
    outOf: 'מתוך',
    secretPortalStep: 'מעבר פורטל נסתר [↑]',
    regularTravelStep: 'הליכה במסלול רגיל [→]',
    mainHuntingMap: 'מפת ציד מרכזית',
    updatesBtn: 'עדכוני גרסה מ-GitHub',
    // Build Share & Import
    shareBuildBtn: 'שיתוף וייבוא (Share & Import)',
    shareModalTitle: 'מרכז שיתוף וייבוא בילדים (Build Share & Import)',
    shareModalSub: 'ייצוא, שיתוף עם חברים וטעינת בילדים אישיים בלחיצה אחת',
    tabExport: '📤 ייצוא (Export)',
    tabImport: '📥 ייבוא (Import)',
    tabPresets: '💾 הבילדים שלי (My Builds)',
    shareCodeTitle: 'קוד שיתוף מהיר (Share Code):',
    copyShareCode: '📋 העתק קוד שיתוף (Copy Code)',
    copyDiscordSummary: '💬 העתק סיכום לדיסקורד (Discord Text)',
    saveToMyBuilds: '💾 שמור לדמויות שלי (Save Preset)',
    pastePrompt: 'הדבק כאן קוד בילד (MSCW-...) או JSON:',
    pastePlaceholder: 'הדבק קוד שקיבלת מחבר כאן...',
    previewBuildTitle: 'תצוגה מקדימה (Build Preview):',
    applyBuildToGuide: '🚀 החל בילד זה על המדריך (Apply Build)',
    invalidBuildCode: 'קוד הבילד אינו תקין (Invalid code)',
    buildAppliedToast: 'הבילד הוחל בהצלחה על המדריך!',
    buildSavedToast: 'הבילד נשמר בהצלחה ברשימה המקומית!',
    noSavedBuilds: 'עדיין אין בילדים שמורים ברשימה שלך',
    loadPreset: 'טען (Load)',
    deletePreset: 'מחק (Delete)',
  }
};

export function LanguageProvider({ children }) {
  const [langMode, setLangModeState] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_LANG_KEY) || 'mixed';
    } catch {
      return 'mixed';
    }
  });

  const setLangMode = (newMode) => {
    setLangModeState(newMode);
    try {
      localStorage.setItem(STORAGE_LANG_KEY, newMode);
    } catch (e) {
      console.warn('Failed to save language mode:', e);
    }
  };

  const isRTL = langMode !== 'en';
  const dict = TRANSLATIONS[langMode] || TRANSLATIONS.mixed;

  // Dynamically synchronize document direction and language code on root <html>
  useEffect(() => {
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = langMode === 'en' ? 'en' : 'he';
    }
  }, [isRTL, langMode]);

  const t = (key, fallback = '') => {
    return dict[key] || TRANSLATIONS.mixed[key] || fallback || key;
  };

  /**
   * Helper to format entity name based on language mode
   */
  const getEntityName = (entity) => {
    if (!entity) return '';
    if (langMode === 'en') return entity.name || entity.nameEn || entity.nameHe;
    if (langMode === 'he') return entity.nameHe || entity.name;
    // mixed
    return entity.name;
  };

  const getEntitySubtitle = (entity) => {
    if (!entity) return '';
    if (langMode === 'en') return entity.town || entity.categoryName || '';
    if (langMode === 'he') return entity.town || entity.categoryName || '';
    // mixed
    return entity.nameHe;
  };

  return (
    <LanguageContext.Provider
      value={{
        langMode,
        setLangMode,
        isRTL,
        t,
        getEntityName,
        getEntitySubtitle,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      langMode: 'mixed',
      setLangMode: () => {},
      isRTL: true,
      t: (key) => TRANSLATIONS.mixed[key] || key,
      getEntityName: (e) => e?.name || '',
      getEntitySubtitle: (e) => e?.nameHe || '',
    };
  }
  return context;
}
