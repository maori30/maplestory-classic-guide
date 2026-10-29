// MapleStory Pre-BigBang Complete Multi-Class Registry (כל המקצועות והעבודות ברמות 10-70)
// Updated for MapleStory Classic World Global Launch (v1.0.0 - October 21, 2026)

export const ARCHETYPES = [
  { id: 'thief', name: 'Thief', nameHe: 'גנב', icon: '🗡️', color: 'purple' },
  { id: 'magician', name: 'Magician', nameHe: 'קוסם', icon: '🪄', color: 'blue' },
  { id: 'warrior', name: 'Warrior', nameHe: 'לוחם', icon: '⚔️', color: 'red' },
  { id: 'bowman', name: 'Bowman', nameHe: 'קשת', icon: '🏹', color: 'emerald' },
  { id: 'pirate', name: 'Pirate', nameHe: 'פיראט', icon: '🏴‍☠️', color: 'cyan' },
];

export const CLASSES_DATA = {
  // =========================================================================
  // 1. THIEF: ASSASSIN (גנב - מתנקש)
  // =========================================================================
  'assassin': {
    id: 'assassin',
    archetype: 'thief',
    name: 'Assassin',
    nameHe: 'מתנקש (Assassin / Hermit)',
    tagline: 'מלך הנזק ליחיד ממרחק • כוכבי זריקה ומהירות שיא',
    icon: '🗡️',
    themeColor: 'purple',
    town: 'Kerning City (קרנינג סיטי)',
    job1Name: 'Rogue (רוג)',
    job2Name: 'Assassin (מתנקש)',
    instructor1: 'Dark Lord (בביוב של קרנינג סיטי)',
    primaryStat: 'LUK',
    secondaryStat: 'DEX',
    weapons: ['Claw (כפפת כוכבים)', 'Throwing Stars (כוכבי זריקה)'],
    classicLaunchMeta: 'בהשקת MapleStory Classic World (v1.0.0), נשקי מייפל (Maple Claw Lv 35, Maple Kandayo Lv 64) אינם קיימים במשחק! שחקני Dexless מתבססים על Meba משודרגת היטב במגילות Claw ATT 60%/100% וציוד עם תוספת DEX (כמו חלוק אמבטיה Bathrobe עם מגילות DEX), או משחקים Low-DEX (50 DEX ל-Igor) או Regular DEX (DEX = רמה × 2) עבור Slain ו-Scarab.',
    buildVariants: [
      { 
        id: 'dexless', 
        name: 'Dexless LUK', 
        nameHe: '✨ בניית Dexless (25 DEX בסיסי, הכל ל-LUK)', 
        desc: 'השקעה טהורה ב-LUK לנזק מרבי. בהשקה מסתמכים על Meba משודרגת במגילות (Faster 3) וציוד מוסיף DEX (כובע במבוק, חלוק רחצה).' 
      },
      { 
        id: 'regular', 
        name: 'Regular LUK', 
        nameHe: '⚖️ בנייה רגילה (DEX = רמה × 2)', 
        desc: 'בנייה מאוזנת המאפשרת לבישת כל כפפות הגנב (Slain, Igrit, Scarab) והשריונות הקלאסיים של כל רמה ללא צורך במגילות יקרות.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isDexless = build === 'dexless';
      const baseDex = isDexless ? 25 : Math.min(140, lvl * 2);
      const totalAp = (lvl - 1) * 5;
      const luk = 4 + totalAp - (baseDex - 25);
      return {
        primary: { name: 'LUK', val: luk, note: 'מגדיל ישירות את נזק הכוכבים (Lucky Seven)' },
        secondary: { name: 'DEX', val: baseDex, note: isDexless ? 'נשאר על 25 בסיסי לצמיתות (דקסלס)' : 'דרישת ציוד נשקים (רמה × 2)' },
        rule: isDexless ? 'שים 5 נקודות AP ב-LUK בכל רמה!' : 'שים 2 נקודות ב-DEX ו-3 ב-LUK בכל עליית רמה.'
      };
    },
    skills1: [
      { id: 'nimbleBody', name: 'Nimble Body', nameHe: 'גוף זריז', max: 20, icon: '🏃‍♂️', optimal: 3, desc: 'מעלה דיוק (Accuracy) והתחמקות (Avoidability). דורש 3 נקודות לפתיחת Keen Eyes.' },
      { id: 'keenEyes', name: 'Keen Eyes', nameHe: 'עיני נץ', max: 15, icon: '🎯', optimal: 15, desc: 'מגדיל את טווח הטלת הכוכבים עד ל-15 רמות מקס. חובה למיקסום מוקדם לירי ממרחק בטוח.' },
      { id: 'luckySeven', name: 'Lucky Seven', nameHe: 'לאקי סבן', max: 20, icon: '🎲', optimal: 20, desc: 'מתקפת הדגל של האסאסין! יורה 2 כוכבים על בסיס LUK טהור. חובה למיקסום ל-20.' },
      { id: 'disorder', name: 'Disorder', nameHe: 'הסחת דעת', max: 20, icon: '🌀', optimal: 3, desc: 'מוריד התקפה והגנה של אויב. נדרש 3 נקודות לפתיחת Dark Sight.' },
      { id: 'darkSight', name: 'Dark Sight', nameHe: 'ראיית צללים', max: 20, icon: '🥷', optimal: 20, desc: 'הופך אותך לבלתי נראה לחלוטין (רמה 20: ללא האטת מהירות כלל). חיוני ל-KPQ/LPQ והישרדות.' }
    ],
    skills2: [
      { id: 'clawMastery', name: 'Claw Mastery', nameHe: 'שליטה בכפפה', max: 20, icon: '🧤', optimal: 20, desc: 'מעלה יציבות נזק מ-10% ל-60% ומגדיל את כמות הכוכבים בטעינה (+200).' },
      { id: 'criticalThrow', name: 'Critical Throw', nameHe: 'הטלה קטלנית', max: 30, icon: '💥', optimal: 30, desc: 'מעניק 50% סיכוי לפגיעה קריטית של 200% נזק! מפתח הנזק של האסאסין.' },
      { id: 'clawBooster', name: 'Claw Booster', nameHe: 'בוסטר כפפה', max: 20, icon: '⚡', optimal: 18, desc: 'מגדיל את מהירות התקיפה של הכפפה ב-2 רמות (Faster).' },
      { id: 'haste', name: 'Haste', nameHe: 'הייסט', max: 20, icon: '💨', optimal: 20, desc: 'הבפאף המבוקש ביותר במשחק! +40 מהירות ו-+20 קפיצה לכל הפארטי.' },
      { id: 'drain', name: 'Drain', nameHe: 'שאיבת חיים', max: 30, icon: '🩸', optimal: 30, desc: 'תוקף אויב ומשחזר HP לפי 50% מהנזק שגרמת. חוסך שיקויים אדיר!' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'Henesys Hunting Ground I (HHG1)', why: 'פלטפורמות עץ מוגבהות לזריקת Lucky Seven ממרחק בטוח על סליימים ופטריות.' },
      { range: '21-30', name: 'Kerning City PQ (KPQ)', why: 'אסאסין הוא מחסל הבוס (King Slime) הטוב במשחק בזכות נזק Lucky Seven ממוקסם!' },
      { range: '31-50', name: 'Ludibrium PQ (LPQ) & Lost Time 1', why: 'LPQ לרמות 35-51, ו-Platoon Chronos בלודיבריום שמפיל Gloves for ATT 60%.' },
      { range: '51-70', name: 'Forest of Evil Energy (Zombie Lupins) & Drakes', why: 'חרישת EXP מהירה עם Haste פעיל, וציד דרקונים במערות סליפיווד.' }
    ],
    gearProgression: [
      { level: 10, name: 'Garnier', att: '10-14 ATT', speed: 'Fast', where: 'חנות נשקים בקרנינג סיטי (דרישה: 25 DEX)' },
      { level: 15, name: 'Meba', att: '12-16 ATT', speed: 'Faster (3)', where: 'נשק העל של Dexless בהשקת Classic World! דרופ מ-Green/Blue Mushroom (דורש 50 DEX, מושג באמצעות ציוד DEX)' },
      { level: 25, name: 'Bronze Igor', att: '17-20 ATT', speed: 'Fast', where: 'דרופ מ-Wild Boar ומשימות (דרישה: 50 DEX)' },
      { level: 30, name: 'Gold Steers', att: '21-24 ATT', speed: 'Fast', where: 'דרופ מ-Jr. Wraith ו-Evil Eye (דרישה: 60 DEX)' },
      { level: 35, name: 'Slain', att: '24-28 ATT', speed: 'Fast', where: 'הנשק המרכזי לרמה 35 בהשקה (במקום Maple Claw)! דרופ מ-Fire Boar (דרישה: 70 DEX)' },
      { level: 40, name: 'Bronze Igrit', att: '27-31 ATT', speed: 'Fast', where: 'דרופ מ-Iron Hog ו-Cold Eye (דרישה: 80 DEX)' },
      { level: 50, name: 'Blood Scarab', att: '32-36 ATT', speed: 'Fast', where: 'כפפת רמה 50 קלאסית. דרופ מ-Drake ו-Dark Stone Golem (דרישה: 100 DEX)' },
      { level: 60, name: 'Blood Kandjar', att: '38-42 ATT', speed: 'Fast', where: 'כפפת רמה 60 עוצמתית. דרופ מ-Tauromacis ו-Wild Kargo (דרישה: 120 DEX)' }
    ]
  },

  // =========================================================================
  // 2. THIEF: BANDIT (גנב - בנדיט)
  // =========================================================================
  'bandit': {
    id: 'bandit',
    archetype: 'thief',
    name: 'Bandit',
    nameHe: 'בנדיט (Bandit / Chief Bandit)',
    tagline: 'לוחם סכינים קטלני בקרב מגע • 6 מכות סכין Savage Blow!',
    icon: '🔪',
    themeColor: 'purple',
    town: 'Kerning City (קרנינג סיטי)',
    job1Name: 'Rogue (רוג)',
    job2Name: 'Bandit (בנדיט)',
    instructor1: 'Dark Lord (בביוב של קרנינג סיטי)',
    primaryStat: 'LUK',
    secondaryStat: 'DEX',
    weapons: ['Dagger (פגיון / סכין קצרה)', 'Shield (מגן גנב)'],
    classicLaunchMeta: 'בהשקת Classic World v1.0.0, פגיונות מייפל (Maple Dagger Lv 35, Maple Wagner Lv 43) אינם קיימים! שחקני בנדיט משחקים לרוב בילד Regular LUK עם DEX לפי דרישת הפגיונות (Stiletto, Bazlud, Sai, Shinkita), או משתמשים בפגיונות ללא דרישת DEX כמו Wooden Sword משודרג.',
    buildVariants: [
      { 
        id: 'dexless', 
        name: 'Dexless Bandit', 
        nameHe: '✨ בניית Dexless (25 DEX בסיסי)', 
        desc: 'נזק פראי בשימוש בפגיונות עם דרישת DEX אפסית (Wooden Sword משודרג) וציוד מוסיף DEX.' 
      },
      { 
        id: 'regular', 
        name: 'Regular Dagger', 
        nameHe: '⚖️ בנדיט רגיל (DEX לפי דרישת הפגיון)', 
        desc: 'הבילד המומלץ והיציב ביותר בהשקה! מאפשר לבישת כל מגוון הפגיונות (Stiletto, Bazlud, Sai) והמגנים הקלאסיים.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isDexless = build === 'dexless';
      const baseDex = isDexless ? 25 : Math.min(140, lvl * 2);
      const totalAp = (lvl - 1) * 5;
      const luk = 4 + totalAp - (baseDex - 25);
      return {
        primary: { name: 'LUK', val: luk, note: 'מעלה ישירות את נזק ה-Savage Blow' },
        secondary: { name: 'DEX', val: baseDex, note: isDexless ? '25 בסיסי לצמיתות' : 'דרישת פגיונות ומגנים (רמה × 2)' },
        rule: isDexless ? 'השקע 5 נקודות AP ב-LUK בכל רמה!' : 'השקע ב-DEX לפי דרישת הפגיון הבא, ושאר הנקודות ב-LUK.'
      };
    },
    skills1: [
      { id: 'doubleStab', name: 'Double Stab', nameHe: 'דקירה כפולה', max: 20, icon: '🔪', optimal: 20, desc: 'מתקפת הפגיון המרכזית ברמות 10-30. דוקרת את האויב פעמיים ברציפות.' },
      { id: 'nimbleBody', name: 'Nimble Body', nameHe: 'גוף זריז', max: 20, icon: '🏃‍♂️', optimal: 20, desc: 'מעלה דיוק והתחמקות. חיוני לפגיעה במפלצות חזקות מקרוב.' },
      { id: 'disorder', name: 'Disorder', nameHe: 'הסחת דעת', max: 20, icon: '🌀', optimal: 3, desc: 'מוריד התקפת אויב. נדרש 3 נקודות לפתיחת Dark Sight.' },
      { id: 'darkSight', name: 'Dark Sight', nameHe: 'ראיית צללים', max: 20, icon: '🥷', optimal: 18, desc: 'התגנבות בטוחה ללא פגיעה. מאפשר לבנדיט להתקרב לאויבים ללא חשש.' }
    ],
    skills2: [
      { id: 'daggerMastery', name: 'Dagger Mastery', nameHe: 'שליטה בפגיון', max: 20, icon: '🗡️', optimal: 19, desc: 'מעלה את יציבות הנזק ל-60% ואת הדיוק בקרב מגע.' },
      { id: 'savageBlow', name: 'Savage Blow', nameHe: 'סאבאג\' בלו (מכת פרא)', max: 30, icon: '🩸', optimal: 30, desc: 'המתקפה המפורסמת ביותר של הבנדיט! מנחיתה 6 מכות סכין ברצף מסחרר!' },
      { id: 'daggerBooster', name: 'Dagger Booster', nameHe: 'בוסטר פגיון', max: 20, icon: '⚡', optimal: 18, desc: 'מגדיל את מהירות הדקירה של הפגיון פי 2.' },
      { id: 'haste', name: 'Haste', nameHe: 'הייסט', max: 20, icon: '💨', optimal: 20, desc: '+40 מהירות ו-+20 קפיצה לכל הפארטי. חובה לכל גנב.' },
      { id: 'steal', name: 'Steal', nameHe: 'גניבה', max: 30, icon: '💰', optimal: 30, desc: 'מתקפה מהירה הגונבת חפצים ושיקויים ישירות מכיסי המפלצת.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'The Tree That Grew (עץ הסליימים באליניה)', why: 'מדרגות צפופות שבהן Double Stab מחסל סליימים ופטריות במכה כפולה.' },
      { range: '21-30', name: 'Kerning City PQ & Land of Wild Boar', why: 'שימוש ב-Double Stab ממוקסם ו-Dark Sight לתנועה חופשית בין עטלפים.' },
      { range: '31-50', name: 'Land of Wild Boar II (חזירי אש) & LPQ', why: 'ברגע ש-Savage Blow מגיע ל-30, 6 מכות מחסלות חזירים במכה אחת!' },
      { range: '51-70', name: 'Wraiths (הרכבת התחתית בקרנינג) & Straw Target Dummies', why: 'נזק מהיר להפליא בקרב צמוד, שימוש מתמיד ב-Haste ו-Booster.' }
    ],
    gearProgression: [
      { level: 10, name: 'Fruit Knife / Razor', att: '15-18 ATT', speed: 'Fast', where: 'חנות נשקים בקרנינג סיטי (דרישה: 20 DEX)' },
      { level: 20, name: 'Forked Dagger', att: '25-28 ATT', speed: 'Fast', where: 'דרופ מ-Bubbling ו-Green Mushroom (דרישה: 40 DEX)' },
      { level: 30, name: 'Stiletto', att: '38-42 ATT', speed: 'Fast', where: 'דרופ מ-Horny Mushroom ו-Evil Eye (דרישה: 55 DEX)' },
      { level: 35, name: 'Bazlud', att: '43-47 ATT', speed: 'Fast', where: 'הנשק המרכזי לרמה 35 בהשקה (במקום Maple Dagger)! דרופ מ-Wild Boar (דרישה: 65 DEX)' },
      { level: 40, name: 'Sai / Blood Dagger', att: '48-52 ATT', speed: 'Fast', where: 'דרופ מ-Jr. Wraith ו-Cold Eye (דרישה: 75 DEX)' },
      { level: 50, name: 'Shinkita', att: '60-65 ATT', speed: 'Fast', where: 'פגיון רמה 50 מרהיב. דרופ מ-Drake ו-Stone Golem (דרישה: 90 DEX)' },
      { level: 60, name: 'Gisheng', att: '73-77 ATT', speed: 'Fast', where: 'פגיון רמה 60 קטלני. דרופ מ-Drake ו-Wild Kargo (דרישה: 110 DEX)' }
    ]
  },

  // =========================================================================
  // 3. MAGICIAN: CLERIC (קוסם - איש דת / פריסט)
  // =========================================================================
  'cleric': {
    id: 'cleric',
    archetype: 'magician',
    name: 'Cleric',
    nameHe: 'קוסם קודש (Cleric / Priest)',
    tagline: 'מלך האימונים נגד אל-מתים • ריפוי פארטי Heal וחסכון אפס שיקויים!',
    icon: '✨',
    themeColor: 'blue',
    town: 'Ellinia (אליניה)',
    job1Name: 'Magician (קוסם)',
    job2Name: 'Cleric (קודש)',
    instructor1: 'Grendel the Really Old (בראש העץ באליניה)',
    primaryStat: 'INT',
    secondaryStat: 'LUK',
    weapons: ['Wand (שרביט)', 'Staff (מטה קסמים)'],
    classicLaunchMeta: 'בהשקת MapleStory Classic World (v1.0.0), נשקי מייפל (Maple Staff Lv 35, Maple Lama Staff Lv 43) אינם קיימים! שחקני Lukless משתמשים ב-Wooden Wand (רמה 8) משודרג במגילות Wand M.ATT 60%/100%, או שמשחקים בילד Regular (LUK = רמה + 3) ומצטיידים ב-Wizard Wand (רמה 33), Fairy Wand (רמה 38) ו-Cromi (רמה 48).',
    buildVariants: [
      { 
        id: 'lukless', 
        name: 'Lukless Mage', 
        nameHe: '✨ בניית Lukless (4 LUK בסיסי, הכל ל-INT)', 
        desc: 'נזק קסם מקסימלי וכמות MP אדירה! בהשקה משתמשים ב-Wooden Wand רמה 8 משודרג היטב במגילות M.ATT.' 
      },
      { 
        id: 'regular', 
        name: 'Regular LUK', 
        nameHe: '⚖️ קוסם רגיל (LUK = רמה + 3)', 
        desc: 'בנייה מאוזנת המאפשרת לבישת כל גלימות הקוסמים והמטות הקלאסיים (Wizard Wand, Cromi, Evil Wings) ללא מגילות יקרות.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isLukless = build === 'lukless';
      const baseLuk = isLukless ? 4 : Math.min(100, lvl + 3);
      const totalAp = (lvl - 1) * 5;
      const int = 4 + totalAp - (baseLuk - 4);
      return {
        primary: { name: 'INT', val: int, note: 'מעלה ישירות נזק קסם (Magic ATT) וכמות MP מקסימלית' },
        secondary: { name: 'LUK', val: baseLuk, note: isLukless ? '4 בסיסי לצמיתות (לוקלס)' : 'דרישת מטות קסם (רמה + 3)' },
        rule: isLukless ? 'השקע 5 נקודות AP ב-INT בכל רמה ולעולם אל תיגע ב-LUK!' : 'השקע נקודה אחת ב-LUK ו-4 נקודות ב-INT בכל עליית רמה.'
      };
    },
    skills1: [
      { id: 'imprMaxMP', name: 'Improved MaxMP Increase', nameHe: 'הגדלת MP מקסימלי', max: 10, icon: '💙', optimal: 10, desc: 'הסקיל החשוב ביותר! חובה למקסם ראשון כדי להרוויח עוד אלפי MP בכל עליית רמה!' },
      { id: 'magicClaw', name: 'Magic Claw', nameHe: 'טופר קסם', max: 20, icon: '🐾', optimal: 20, desc: 'תוקף 2 מכות קסם ישירות המתעלמות מהגנת האויב. הסקיל ההתקפי לרמות 10-30.' },
      { id: 'mpRecovery', name: 'MP Recovery', nameHe: 'התאוששות MP', max: 16, icon: '🔄', optimal: 16, desc: 'משחזר כמות MP פסיבית כל 10 שניות. חוסך הוצאות שיקויים אדירות.' },
      { id: 'magicGuard', name: 'Magic Guard', nameHe: 'מגן קסם', max: 20, icon: '🛡️', optimal: 20, desc: 'סופג 80% מנזק החיים על מד ה-MP במקום ה-HP. מציל ממוות פתאומי!' }
    ],
    skills2: [
      { id: 'heal', name: 'Heal', nameHe: 'ריפוי קדוש (Heal)', max: 30, icon: '💚', optimal: 30, desc: 'הסקיל האגדי של הקלריק! מרפא את כל הפארטי ובו-זמנית מנחית נזק קדוש אדיר על כל מפלצות האל-מתים (Undead) בסביבה!' },
      { id: 'mpEater', name: 'MP Eater', nameHe: 'זולל MP', max: 20, icon: '🌀', optimal: 20, desc: 'גוזל 40% מה-MP של האויב בכל תקיפה. הופך את הקלריק לעצמאי ללא צורך בשיקויי MP!' },
      { id: 'invincible', name: 'Invincible', nameHe: 'אי-פגיעות', max: 20, icon: '🔰', optimal: 20, desc: 'מפחית ב-30% את כל הנזק הפיזי שסופג הקלריק לצמיתות.' },
      { id: 'bless', name: 'Bless', nameHe: 'ברכה', max: 20, icon: '🕊️', optimal: 20, desc: '+20 הגנה פיזית, הגנת קסם, דיוק והתחמקות לכל הפארטי למשך 200 שניות.' },
      { id: 'teleport', name: 'Teleport', nameHe: 'טלפורט', max: 20, icon: '🌌', optimal: 20, desc: 'משגר אותך מרחק קדימה באופן מיידי. ניידות העל של הקוסמים.' },
      { id: 'holyArrow', name: 'Holy Arrow', nameHe: 'חץ קדוש', max: 30, icon: '🏹', optimal: 11, desc: 'יורה חץ של אור קדוש על מטרת אויב בודדת.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'Tree That Grew I & Henesys Hunting Ground', why: 'שימוש ב-Magic Claw לחיסול סליימים ופטריות במכה כפולה.' },
      { range: '21-30', name: 'Kerning City PQ & Green / Horned Mushrooms', why: 'סיוע לפארטי עם Magic Guard ו-Magic Claw בעל נזק עקבי.' },
      { range: '31-40', name: 'Jr. Wraiths (רכבת קרנינג) & Zombie Mushrooms', why: 'ברגע ש-Heal עולה, פשוט ספים Heal ברכבת וצפה ברוחות מתאדות וב-EXP טס!' },
      { range: '41-70', name: 'Chronos (מגדל השעון לודיבריום) & Zombie Lupins', why: 'מפות אל-מתים טהורות! חרישת Heal רצופה ללא שימוש בשיקויים כלל.' }
    ],
    gearProgression: [
      { level: 8, name: 'Wooden Wand', att: '23 M.ATT', speed: 'Normal', where: 'חנות אליניה (נשק הבסיס האולטימטיבי לקוסמי Lukless בהשקה)' },
      { level: 18, name: 'Metal Wand', att: '33 M.ATT', speed: 'Normal', where: 'חנות נשקים באליניה (דרישה: 20 LUK)' },
      { level: 28, name: 'Mithril Wand', att: '43 M.ATT', speed: 'Normal', where: 'דרופ מ-Green Mushroom ו-Bubbling (דרישה: 30 LUK)' },
      { level: 33, name: 'Wizard Wand', att: '48 M.ATT', speed: 'Normal', where: 'הנשק המרכזי לקוסם רגיל ברמה 33 בהשקה (במקום Maple Staff)! דרופ מ-Fire Boar (דרישה: 35 LUK)' },
      { level: 38, name: 'Fairy Wand', att: '53 M.ATT', speed: 'Normal', where: 'דרופ מ-Evil Eye ו-Cold Eye (דרישה: 40 LUK)' },
      { level: 48, name: 'Cromi (Staff)', att: '63 M.ATT', speed: 'Slow', where: 'מטה רמה 48 פופולרי. דרופ מ-Drake ו-Wild Kargo (דרישה: 50 LUK)' },
      { level: 58, name: 'Evil Wings (Staff)', att: '73 M.ATT', speed: 'Slow', where: 'מטה רמה 58 אגדי. דרופ מ-Tauromacis ו-Dark Stone Golem (דרישה: 60 LUK)' }
    ]
  },

  // =========================================================================
  // 4. MAGICIAN: WIZARD ICE/LIGHTNING (קוסם - קרח וברקים)
  // =========================================================================
  'wizard-il': {
    id: 'wizard-il',
    archetype: 'magician',
    name: 'Wizard (Ice/Lightning)',
    nameHe: 'קוסם קרח וברקים (I/L Wizard / Mage)',
    tagline: 'שליטה במרחב והקפאת מפלצות • מתקפת ברקים על כל המפה Thunderbolt!',
    icon: '⚡',
    themeColor: 'blue',
    town: 'Ellinia (אליניה)',
    job1Name: 'Magician (קוסם)',
    job2Name: 'Wizard (I/L)',
    instructor1: 'Grendel the Really Old (אליניה)',
    primaryStat: 'INT',
    secondaryStat: 'LUK',
    weapons: ['Wand (שרביט)', 'Staff (מטה קסמים)'],
    classicLaunchMeta: 'בהשקת Classic World v1.0.0, מטה מייפל אינו קיים! בילד Lukless מתבסס על שרביט עץ (Wooden Wand) מגולגל היטב במגילות 60%, בעוד בילד Regular משקיע 1 נקודה ב-LUK ו-4 ב-INT כדי לעלות עם Wizard Wand, Fairy Wand ו-Cromi.',
    buildVariants: [
      { 
        id: 'lukless', 
        name: 'Lukless I/L', 
        nameHe: '✨ קוסם Lukless (4 LUK בסיסי, הכל ל-INT)', 
        desc: 'נזק ברקים וקרח מקסימלי עם שרביט Wooden Wand משודרג ללא דרישת LUK.' 
      },
      { 
        id: 'regular', 
        name: 'Regular I/L', 
        nameHe: '⚖️ קוסם רגיל (LUK = רמה + 3)', 
        desc: 'השקעה ב-LUK לפי דרישת מטות הקסם של כל רמה, מאפשרת לבישת כל גלימות הקוסמים.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isLukless = build === 'lukless';
      const baseLuk = isLukless ? 4 : Math.min(100, lvl + 3);
      const totalAp = (lvl - 1) * 5;
      const int = 4 + totalAp - (baseLuk - 4);
      return {
        primary: { name: 'INT', val: int, note: 'מגדיל את עוצמת מכות הקרח והברקים' },
        secondary: { name: 'LUK', val: baseLuk, note: isLukless ? '4 בסיסי לצמיתות' : 'דרישת מטות קסם (רמה + 3)' },
        rule: isLukless ? 'השקע 5 נקודות AP ב-INT בכל רמה!' : 'השקע 1 נקודה ב-LUK ו-4 ב-INT בכל עלייה.'
      };
    },
    skills1: [
      { id: 'energyBolt', name: 'Energy Bolt', nameHe: 'חץ אנרגיה (Energy Bolt)', max: 20, icon: '✨', optimal: 1, desc: 'מתקפת פתיחה בסיסית. נדרשת נקודה אחת לפתיחת עץ הקסמים.' },
      { id: 'mpRecovery', name: 'MP Recovery', nameHe: 'התאוששות MP', max: 16, icon: '🔄', optimal: 16, desc: 'משחזר כמות MP פסיבית כל 10 שניות. חוסך הוצאות שיקויים אדירות.' },
      { id: 'imprMaxMP', name: 'Improved MaxMP Increase', nameHe: 'הגדלת MP מקסימלי', max: 10, icon: '💙', optimal: 10, desc: 'חובה למקסם ראשון לקבלת מקסימום MP בעליות רמה.' },
      { id: 'magicClaw', name: 'Magic Claw', nameHe: 'טופר קסם', max: 20, icon: '🐾', optimal: 20, desc: 'התקפה כפולה ממוקסמת לרמות 10-30.' },
      { id: 'magicGuard', name: 'Magic Guard', nameHe: 'מגן קסם', max: 20, icon: '🛡️', optimal: 14, desc: 'ספיגת 80% מהנזק במד ה-MP במקום ה-HP.' }
    ],
    skills2: [
      { id: 'coldBeam', name: 'Cold Beam', nameHe: 'קרן קיפאון (Cold Beam)', max: 30, icon: '❄️', optimal: 30, desc: 'מנחיתה גוש קרח ענקי על אויב, מקפיאה אותו לחלוטין וגורמת נזק כפול למפלצות אש!' },
      { id: 'thunderbolt', name: 'Thunderbolt', nameHe: 'מכת ברק (Thunderbolt)', max: 30, icon: '⚡', optimal: 30, desc: 'מתקפת ה-AoE הטובה במשחק ברמות אלו! מכה עד 6 מפלצות סביבך בברקים!' },
      { id: 'meditate', name: 'Meditate', nameHe: 'מדיטציה', max: 20, icon: '🧘‍♂️', optimal: 20, desc: 'מעלה את ה-Magic Attack של הקוסם ב-+20 נקודות לכל הפארטי!' },
      { id: 'mpEater', name: 'MP Eater', nameHe: 'זולל MP', max: 20, icon: '🌀', optimal: 20, desc: 'גוזל MP מהאויב בכל תקיפה וחוסך שיקויים.' },
      { id: 'teleport', name: 'Teleport', nameHe: 'טלפורט', max: 20, icon: '🌌', optimal: 20, desc: 'שיגור מיידי במפה. חיוני לתנועה חלקה ומיקום נכון ל-Thunderbolt.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'The Tree That Grew I (סליימים באליניה)', why: 'חיסול סליימים מהיר עם Magic Claw.' },
      { range: '21-30', name: 'Kerning City PQ & Green Mushrooms', why: 'נזק יציב ומהיר בצוות.' },
      { range: '31-40', name: 'Fire Boars (חזירי אש בפריון)', why: 'חזירי אש חלשים פי 2 לקסם קרח! Cold Beam מקפיא ומחסל אותם במכה אחת.' },
      { range: '41-70', name: 'Red Drakes (דרקונים אדומים) & Toy Factory Ludi', why: 'חולשת אש מוחלטת ל-Cold Beam, וספאם Thunderbolt במפעל הצעצועים.' }
    ],
    gearProgression: [
      { level: 8, name: 'Wooden Wand', att: '23 M.ATT', speed: 'Normal', where: 'חנות נשקים באליניה' },
      { level: 18, name: 'Metal Wand', att: '33 M.ATT', speed: 'Normal', where: 'חנות נשקים באליניה (דרישה: 20 LUK)' },
      { level: 28, name: 'Mithril Wand', att: '43 M.ATT', speed: 'Normal', where: 'דרופ מ-Green Mushroom ו-Bubbling (דרישה: 30 LUK)' },
      { level: 33, name: 'Wizard Wand', att: '48 M.ATT', speed: 'Normal', where: 'הנשק המרכזי בהשקת Classic World (במקום Maple Staff)! דרופ מ-Fire Boar (דרישה: 35 LUK)' },
      { level: 48, name: 'Cromi (Staff)', att: '63 M.ATT', speed: 'Slow', where: 'מטה חזק במיוחד. דרופ מ-Drake ו-Wild Kargo (דרישה: 50 LUK)' }
    ]
  },

  // =========================================================================
  // 5. WARRIOR: FIGHTER (לוחם - פייטר / קרוסיידר)
  // =========================================================================
  'fighter': {
    id: 'fighter',
    archetype: 'warrior',
    name: 'Fighter',
    nameHe: 'לוחם חרב וגרזן (Fighter / Crusader)',
    tagline: 'שליט הקרב בחרב ובגרזן • באף זעם Rage של +12 התקפה לכל הפארטי!',
    icon: '⚔️',
    themeColor: 'red',
    town: 'Perion (פריון)',
    job1Name: 'Swordsman (לוחם)',
    job2Name: 'Fighter (פייטר)',
    instructor1: 'Dances with Balrog (במקדש הלוחמים בפריון)',
    primaryStat: 'STR',
    secondaryStat: 'DEX',
    weapons: ['1H Sword / 2H Sword (חרב)', '1H Axe / 2H Axe (גרזן)'],
    classicLaunchMeta: 'בהשקת Classic World v1.0.0, חרב מייפל אינה קיימת! נשק החלומות של כל לוחם ברמה 35 הוא ה-Highlander (חרב 2 ידיים במהירות תקיפה Fast הנדירה!), ואחריה Sparta ברמה 50. שחקני Dexless חייבים ציוד דיוק (כמו נעליים וכפפות עם דיוק, שיקויי Sniper Potion) כדי לפגוע במפלצות.',
    buildVariants: [
      { 
        id: 'dexless', 
        name: 'Dexless Warrior', 
        nameHe: '✨ לוחם Dexless (4 DEX בסיסי, הכל ל-STR)', 
        desc: 'נזק מפלצתי! מחייב שימוש בציוד שמוסיף Accuracy (דיוק) ושיקויי דיוק כדי לא לפספס מפלצות.' 
      },
      { 
        id: 'regular', 
        name: 'Regular STR', 
        nameHe: '⚖️ לוחם מאוזן (DEX = רמה × 1.2)', 
        desc: 'מעניק דיוק טבעי לפגיעה בכל מפלצת ובכל בוס, ומאפשר לבישת כל שריונות הלוחמים הקלאסיים.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isDexless = build === 'dexless';
      const baseDex = isDexless ? 4 : Math.min(80, Math.floor(lvl * 1.2));
      const totalAp = (lvl - 1) * 5;
      const str = 4 + totalAp - (baseDex - 4);
      return {
        primary: { name: 'STR', val: str, note: 'מגדיל ישירות את כוח ההתקפה הפיזי ומד החיים' },
        secondary: { name: 'DEX', val: baseDex, note: isDexless ? '4 בסיסי (מסתמך על ציוד דיוק)' : 'מעניק Accuracy לפגיעה במפלצות' },
        rule: isDexless ? 'שים 5 נקודות ב-STR בכל רמה והשתמש בשיקויי Sniper Potion לדיוק!' : 'שים 1-2 נקודות ב-DEX וכל השאר ב-STR.'
      };
    },
    skills1: [
      { id: 'hpRecovery', name: 'Improving HP Recovery', nameHe: 'התאוששות HP', max: 16, icon: '💚', optimal: 11, desc: 'משחזר HP פסיבי. נדרשות 5 נקודות לפתיחת MaxHP.' },
      { id: 'imprMaxHP', name: 'Improved MaxHP Increase', nameHe: 'הגדלת HP מקסימלי', max: 10, icon: '❤️', optimal: 10, desc: 'חובה למקסם ראשון מיידית! מגדיל את כמות ה-HP שמרוויחים בכל רמה.' },
      { id: 'powerStrike', name: 'Power Strike', nameHe: 'מכת כוח (Power Strike)', max: 20, icon: '💥', optimal: 20, desc: 'מתקפה פיזית בעלת 260% נזק למטרה בודדת. המכה המרכזית בקרבות בוסים.' },
      { id: 'slashBlast', name: 'Slash Blast', nameHe: 'סלאש בלאסט (מתקפת שטח)', max: 20, icon: '🌪️', optimal: 20, desc: 'המתקפה הטובה ביותר לחרישת מפלצות! פוגעת בעד 6 מפלצות סביבך בבת אחת!' },
      { id: 'ironBody', name: 'Iron Body', nameHe: 'גוף פלדה (עודכן ב-MSCW)', max: 20, icon: '🛡️', optimal: 0, desc: 'עודכן רשמית ב-MSCW v1.0.0: חוזק מ-5–25% ל-20–40% הגנה פיזית ומכפיל את קצב התאוששות שיקויי HP ללוחמים!' }
    ],
    skills2: [
      { id: 'swordMastery', name: 'Sword Mastery', nameHe: 'שליטה בחרב', max: 20, icon: '🗡️', optimal: 20, desc: 'מעלה את יציבות הנזק ל-60% ומעניקה +20 דיוק (Accuracy).' },
      { id: 'rage', name: 'Rage', nameHe: 'זעם (Rage)', max: 20, icon: '🔥', optimal: 20, desc: 'הבאף הטוב ביותר ללוחמים! מעניק +12 Weapon ATT לכל הפארטי!' },
      { id: 'swordBooster', name: 'Sword Booster', nameHe: 'בוסטר חרב', max: 20, icon: '⚡', optimal: 20, desc: 'מגדיל את מהירות הנפת החרב ב-2 רמות.' },
      { id: 'powerGuard', name: 'Power Guard', nameHe: 'מגן עוצמה', max: 30, icon: '🛡️', optimal: 30, desc: 'מחזיר 40% מהנזק שספגת ישירות לאויב ומפחית את הנזק עליך ב-40%!' },
      { id: 'finalAttack', name: 'Final Attack: Sword', nameHe: 'התקפה מסיימת', max: 30, icon: '⚔️', optimal: 30, desc: 'עודכן ב-MSCW v1.0.0: משך הזמן הוארך ל-60 שניות! מנחית מכה נוספת קטלנית מיד לאחר Power Strike או Slash Blast.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'Henesys Hunting Ground I & Tree That Grew', why: 'סלאש בלאסט מחסל גושי סליימים ופטריות בבת אחת.' },
      { range: '21-30', name: 'Land of Wild Boar (חזירי בר בפריון)', why: 'המגרש הביתי של הלוחם! איסוף עשרות חזירים ומחיצתם עם Slash Blast.' },
      { range: '31-50', name: 'Land of Wild Boar II (חזירי אש) & LPQ', why: 'Slash Blast ו-Power Strike ממוקסמים עם באף Rage פעיל.' },
      { range: '51-70', name: 'Straw Target Dummies (מו לונג) & Drakes', why: 'צפיפות מפלצות מושלמת לחרישת מכות שטח.' }
    ],
    gearProgression: [
      { level: 10, name: 'Sword / Wooden Club', att: '25-30 ATT', speed: 'Normal', where: 'חנות כלי נשק בפריון' },
      { level: 25, name: 'Two-Handed Sword', att: '42-45 ATT', speed: 'Slow', where: 'דרופ מ-Green Mushroom ו-Bubbling (דרישה: 30 DEX)' },
      { level: 30, name: 'Gladius', att: '48-52 ATT', speed: 'Fast', where: 'חרב יד אחת קלאסית. דרופ מ-Wild Boar (דרישה: 35 DEX)' },
      { level: 35, name: 'Highlander', att: '55-60 ATT', speed: 'Fast (נדיר בחרבות 2 ידיים!)', where: 'הנשק הטוב ביותר ללוחם ברמה 35 בהשקה (במקום Maple Sword)! דרופ מ-Jr. Boogie ו-Wild Boar (דרישה: 40 DEX)' },
      { level: 40, name: 'Zard', att: '62-67 ATT', speed: 'Normal', where: 'דרופ מ-Fire Boar ו-Iron Hog (דרישה: 50 DEX)' },
      { level: 50, name: 'Sparta / Lion\'s Fang', att: '70-75 ATT', speed: 'Normal', where: 'חרב רמה 50 מרהיבה. דרופ מ-Drake ו-Dark Stone Golem (דרישה: 60 DEX)' },
      { level: 60, name: 'Doombringer / Great Rohen', att: '80-86 ATT', speed: 'Normal', where: 'נשק רמה 60 אגדי. דרופ מ-Tauromacis (דרישה: 70 DEX)' }
    ]
  },

  // =========================================================================
  // 6. WARRIOR: SPEARMAN (לוחם - נושא רומח / דרגון נייט)
  // =========================================================================
  'spearman': {
    id: 'spearman',
    archetype: 'warrior',
    name: 'Spearman',
    nameHe: 'נושא רומח (Spearman / Dragon Knight)',
    tagline: 'טווח תקיפה עצום ברומח • באף החיים האגדי Hyper Body של +60% HP/MP!',
    icon: '🔱',
    themeColor: 'red',
    town: 'Perion (פריון)',
    job1Name: 'Swordsman (לוחם)',
    job2Name: 'Spearman (ספירמן)',
    instructor1: 'Dances with Balrog (פריון)',
    primaryStat: 'STR',
    secondaryStat: 'DEX',
    weapons: ['Spear (רומח)', 'Polearm (מוט להב)'],
    classicLaunchMeta: 'בהשקת Classic World v1.0.0, אין רומח מייפל! הספירמן נשען על נשקי Polearm מעולים כמו Crescent (רמה 30), Red Viper (רמה 40) ו-Eclipse / Serpent\'s Tongue (רמה 50). זכור: Polearm מומלץ לסלאש בלאסט (Slash Blast) בגלל הנזק בהנפה!',
    buildVariants: [
      { 
        id: 'dexless', 
        name: 'Dexless Spearman', 
        nameHe: '✨ ספירמן Dexless (4 DEX בסיסי)', 
        desc: 'נזק דקירה מפלצתי בשימוש בציוד דיוק ושיקויי דיוק.' 
      },
      { 
        id: 'regular', 
        name: 'Regular Spearman', 
        nameHe: '⚖️ ספירמן מאוזן (DEX לפי דרישת הרומח)', 
        desc: 'הבילד המאוזן המאפשר שימוש בכל הרמחים והמוטות הקלאסיים.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isDexless = build === 'dexless';
      const baseDex = isDexless ? 4 : Math.min(80, Math.floor(lvl * 1.2));
      const totalAp = (lvl - 1) * 5;
      const str = 4 + totalAp - (baseDex - 4);
      return {
        primary: { name: 'STR', val: str, note: 'מגדיל את נזק הדקירה וההנפה של הרומח' },
        secondary: { name: 'DEX', val: baseDex, note: 'מעניק דיוק הכרחי לפגיעה' },
        rule: isDexless ? '5 נקודות ב-STR בכל רמה!' : 'השקע ב-DEX לפי דרישת הנשק והשאר ב-STR.'
      };
    },
    skills1: [
      { id: 'hpRecovery', name: 'Improving HP Recovery', nameHe: 'התאוששות HP', max: 16, icon: '💚', optimal: 11, desc: 'משחזר HP פסיבי. נדרשות 5 נקודות לפתיחת MaxHP.' },
      { id: 'imprMaxHP', name: 'Improved MaxHP Increase', nameHe: 'הגדלת HP מקסימלי', max: 10, icon: '❤️', optimal: 10, desc: 'חובה למקסם ראשון לקבלת מד חיים עצום.' },
      { id: 'slashBlast', name: 'Slash Blast', nameHe: 'סלאש בלאסט', max: 20, icon: '🌪️', optimal: 20, desc: 'תקיפת שטח לעד 6 מפלצות.' },
      { id: 'powerStrike', name: 'Power Strike', nameHe: 'מכת כוח', max: 20, icon: '💥', optimal: 20, desc: 'מכת דקירה יחידה בעלת 260% נזק.' }
    ],
    skills2: [
      { id: 'spearMastery', name: 'Spear / Polearm Mastery', nameHe: 'שליטה ברומח ובמוט להב', max: 20, icon: '🔱', optimal: 20, desc: 'מעלה יציבות נזק ודיוק לנשקי רומח.' },
      { id: 'hyperBody', name: 'Hyper Body (HB)', nameHe: 'הייפר בודי (Hyper Body)', max: 30, icon: '💖', optimal: 30, desc: 'הבאף הנחשק ביותר בכל הפארטי של מייפל סטורי! מעלה ב-+60% את ה-HP וה-MP של כל שחקן בפארטי!' },
      { id: 'ironWill', name: 'Iron Will', nameHe: 'כוח רצון של ברזל', max: 20, icon: '🛡️', optimal: 20, desc: 'מעלה הגנה פיזית ומגית.' },
      { id: 'booster', name: 'Booster', nameHe: 'בוסטר רומח', max: 20, icon: '⚡', optimal: 20, desc: 'מגדיל את מהירות התקיפה של הרומח.' },
      { id: 'finalAttack', name: 'Final Attack: Spear', nameHe: 'התקפה מסיימת (רומח)', max: 30, icon: '⚔️', optimal: 30, desc: 'עודכן ב-MSCW v1.0.0: משך הזמן הוארך ל-60 שניות! מנחית מכת דקירה נוספת אוטומטית לאחר תקיפה.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'Henesys Hunting Ground I', why: 'חיסול פטריות עם Power Strike ו-Slash Blast.' },
      { range: '21-30', name: 'Land of Wild Boar (פריון)', why: 'צפיפות חזירי בר מושלמת לטווח הארוך של הרומח.' },
      { range: '31-50', name: 'LPQ & Chronos', why: 'כל פארטי חייב ספירמן בזכות Hyper Body שמכפיל את החיים של כולם נגד הבוס Alishar!' },
      { range: '51-70', name: 'Forest of Golems (סליפיווד)', why: 'חיסול גולמי אבן ענקיים עם Hyper Body שמונע מוות במכה אחת.' }
    ],
    gearProgression: [
      { level: 20, name: 'Fish Spear', att: '39 ATT', speed: 'Fast', where: 'חנות נשקים בנמל לית (Lith Harbor) (דרישה: 25 DEX)' },
      { level: 30, name: 'Forked Spear / Crescent', att: '49-52 ATT', speed: 'Normal', where: 'דרופ מ-Wild Boar ו-Horny Mushroom (דרישה: 35 DEX)' },
      { level: 35, name: 'Shadow Polearm', att: '55-58 ATT', speed: 'Normal', where: 'הנשק המרכזי לרמה 35 בהשקה (במקום Maple Spear)! דרופ מ-Fire Boar (דרישה: 40 DEX)' },
      { level: 40, name: 'Red Viper / Yellow Viper', att: '62-66 ATT', speed: 'Normal', where: 'מוט להב אהוב. דרופ מ-Iron Hog ו-Cold Eye (דרישה: 50 DEX)' },
      { level: 50, name: 'Serpent\'s Tongue / Eclipse', att: '73-78 ATT', speed: 'Normal', where: 'נשק רמה 50 אגדי. דרופ מ-Drake ו-Dark Stone Golem (דרישה: 60 DEX)' }
    ]
  },

  // =========================================================================
  // 7. BOWMAN: HUNTER (קשת - הנטר / ריינג'ר)
  // =========================================================================
  'hunter': {
    id: 'hunter',
    archetype: 'bowman',
    name: 'Hunter',
    nameHe: 'קשת מהיר (Hunter / Ranger)',
    tagline: 'יורה חצים בקצב מסחרר • פצצות חץ Arrow Bomb המהממות מפלצות מרחוק!',
    icon: '🏹',
    themeColor: 'emerald',
    town: 'Henesys (הנסיס)',
    job1Name: 'Bowman (קשת)',
    job2Name: 'Hunter (הנטר)',
    instructor1: 'Athena Pierce (במכון הקשתים בהנסיס)',
    primaryStat: 'DEX',
    secondaryStat: 'STR',
    weapons: ['Bow (קשת)', 'Arrows (חצים)'],
    classicLaunchMeta: 'בהשקת Classic World v1.0.0, קשתות מייפל (Maple Bow Lv 35, Maple Hunter Bow Lv 43) אינן קיימות! שחקני קשת משקיעים ב-STR לפי הכלל הקלאסי (STR = רמה + 5) ומצטיידים ב-Ryden (רמה 30), Red Viper (רמה 35), Vaulter 2000 (רמה 40) ו-Olympus (רמה 50).',
    buildVariants: [
      { 
        id: 'strless', 
        name: 'Strless Bowman', 
        nameHe: '✨ קשת Strless (4 STR בסיסי)', 
        desc: 'דורש ציוד עם תוספת STR גבוהה כדי לעמוד בדרישות הקשתות בהשקה.' 
      },
      { 
        id: 'regular', 
        name: 'Regular DEX', 
        nameHe: '⚖️ קשת מאוזן (STR = רמה + 5)', 
        desc: 'הבילד הקלאסי והמומלץ ביותר בהשקת Classic World! מאפשר לבישת כל קשתות ושריונות הקשתים בצורה חלקה.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isStrless = build === 'strless';
      const baseStr = isStrless ? 4 : Math.min(80, lvl + 5);
      const totalAp = (lvl - 1) * 5;
      const dex = 4 + totalAp - (baseStr - 4);
      return {
        primary: { name: 'DEX', val: dex, note: 'מעלה ישירות את נזק החצים ואת הדיוק' },
        secondary: { name: 'STR', val: baseStr, note: isStrless ? '4 בסיסי לצמיתות' : 'דרישת קשתות רגילות (רמה + 5)' },
        rule: isStrless ? 'שים 5 נקודות ב-DEX בכל עליית רמה!' : 'השקע נקודה אחת ב-STR ו-4 ב-DEX בכל רמה.'
      };
    },
    skills1: [
      { id: 'criticalShot', name: 'Critical Shot', nameHe: 'ירייה קריטית', max: 20, icon: '🎯', optimal: 20, desc: 'מעניקה 40% סיכוי לפגיעה קריטית של 200% נזק! הבסיס לכל קשת.' },
      { id: 'eyeOfAmazon', name: 'The Eye of Amazon', nameHe: 'עין האמזונס', max: 8, icon: '👁️', optimal: 8, desc: 'מגדיל את טווח יריית החצים למרחק עצום של 400 פיקסלים.' },
      { id: 'doubleShot', name: 'Double Shot', nameHe: 'ירייה כפולה', max: 20, icon: '🏹', optimal: 20, desc: 'יורה 2 חצים מהירים ברצף. המתקפה המרכזית לרמות 10-30.' },
      { id: 'focus', name: 'Focus', nameHe: 'מיקוד (Focus)', max: 20, icon: '🧘‍♀️', optimal: 10, desc: 'מעלה דיוק והתחמקות.' },
      { id: 'arrowBlow', name: 'Arrow Blow', nameHe: 'מכת חץ', max: 20, icon: '🎯', optimal: 3, desc: 'ירייה בודדת לפתיחת העץ.' }
    ],
    skills2: [
      { id: 'bowMastery', name: 'Bow Mastery', nameHe: 'שליטה בקשת', max: 20, icon: '🏹', optimal: 20, desc: 'מעלה את יציבות הנזק ל-60% ואת הדיוק.' },
      { id: 'finalAttack', name: 'Final Attack: Bow', nameHe: 'התקפה מסיימת (קשת)', max: 30, icon: '⚡', optimal: 30, desc: 'עודכן ב-MSCW v1.0.0: משך הזמן הוארך ל-60 שניות! יורה חץ בונוס עוצמתי אוטומטית מיד לאחר תקיפה.' },
      { id: 'bowBooster', name: 'Bow Booster', nameHe: 'בוסטר קשת', max: 20, icon: '💨', optimal: 20, desc: 'מכפיל את קצב יריית החצים ממהירות Normal ל-Fast.' },
      { id: 'arrowBomb', name: 'Arrow Bomb : Bow', nameHe: 'פצצת חץ (Arrow Bomb)', max: 30, icon: '💣', optimal: 30, desc: 'יורה חץ נפץ המתפוצץ על עד 6 מפלצות ומהמם (Stun) אותן ל-6 שניות!' },
      { id: 'soulArrow', name: 'Soul Arrow : Bow', nameHe: 'חץ הנשמה (Soul Arrow)', max: 20, icon: '✨', optimal: 20, desc: 'מאפשר לירות חצים ללא שימוש בחצים במלאי כלל! חוסך מקום בתיק ועלויות.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'Henesys Hunting Ground I', why: 'ירי כפול מחבלים ופלטפורמות עץ מוגבהות על פטריות.' },
      { range: '21-30', name: 'Land of Wild Boar (פריון)', why: 'פלטפורמות סלע מושלמות לקשת לירי Double Shot מעל ראשי החזירים.' },
      { range: '31-50', name: 'Ludibrium PQ & Lost Time 1', why: 'שימוש ב-Arrow Bomb להמם מפלצות שלמות ב-LPQ מרחוק.' },
      { range: '51-70', name: 'Forest of Golems & Drakes', why: 'הקשת מנצל את טווח הענק שלו כדי לחסל גולמים ללא סכנת פגיעה.' }
    ],
    gearProgression: [
      { level: 10, name: 'War Bow', att: '25 ATT', speed: 'Fast', where: 'חנות נשקים בהנסיס (דרישה: 15 STR)' },
      { level: 25, name: 'Battle Bow', att: '40 ATT', speed: 'Fast', where: 'דרופ מ-Green Mushroom ו-Bubbling (דרישה: 30 STR)' },
      { level: 30, name: 'Ryden', att: '45 ATT', speed: 'Fast', where: 'קשת רמה 30 קלאסית. דרופ מ-Horny Mushroom (דרישה: 35 STR)' },
      { level: 35, name: 'Red Viper', att: '50 ATT', speed: 'Fast', where: 'הנשק המרכזי לרמה 35 בהשקה (במקום Maple Bow)! דרופ מ-Fire Boar (דרישה: 40 STR)' },
      { level: 40, name: 'Vaulter 2000', att: '56 ATT', speed: 'Fast', where: 'דרופ מ-Jr. Wraith ו-Cold Eye (דרישה: 45 STR)' },
      { level: 50, name: 'Olympus', att: '68 ATT', speed: 'Fast', where: 'קשת רמה 50 מרהיבה. דרופ מ-Drake ו-Dark Stone Golem (דרישה: 55 STR)' }
    ]
  },

  // =========================================================================
  // 8. PIRATE: GUNSLINGER (פיראט - אקדחן / אאוטלו)
  // =========================================================================
  'gunslinger': {
    id: 'gunslinger',
    archetype: 'pirate',
    name: 'Gunslinger',
    nameHe: 'אקדחן (Gunslinger / Outlaw)',
    tagline: 'שליף מהיר באקדחים וכדורים • ניידות שיא Dash & Wings ויריות ללא הפסקה!',
    icon: '🔫',
    themeColor: 'cyan',
    town: 'Nautilus Harbor (נמל הנאוטילוס)',
    job1Name: 'Pirate (פיראט)',
    job2Name: 'Gunslinger (אקדחן)',
    instructor1: 'Kyrin (על סיפון הצוללת נאוטילוס)',
    primaryStat: 'DEX',
    secondaryStat: 'STR',
    weapons: ['Gun (אקדח)', 'Bullets (קליעים)'],
    classicLaunchMeta: 'בהשקת Classic World v1.0.0, אקדח מייפל אינו קיים! האקדחן משקיע ב-STR לפי הכלל (STR = רמה) ומצטייד באקדחים קלאסיים: Cold Mind (רמה 30), Shooting Star (רמה 35), Lunar Shooter (רמה 40) ו-Burning Hell (רמה 50).',
    buildVariants: [
      { 
        id: 'strless', 
        name: 'Strless Gunslinger', 
        nameHe: '✨ אקדחן Strless (4 STR בסיסי)', 
        desc: 'נזק יריות מקסימלי עם ציוד מוסיף STR כדי לעמוד בדרישות האקדחים.' 
      },
      { 
        id: 'regular', 
        name: 'Regular DEX', 
        nameHe: '⚖️ אקדחן מאוזן (STR = רמה)', 
        desc: 'הבילד המומלץ בהשקה! מאפשר שימוש בכל מגוון האקדחים והמעילים לפי הרמה בצורה חלקה.' 
      }
    ],
    statFormula: (lvl, build) => {
      const isStrless = build === 'strless';
      const baseStr = isStrless ? 4 : Math.min(70, lvl);
      const totalAp = (lvl - 1) * 5;
      const dex = 4 + totalAp - (baseStr - 4);
      return {
        primary: { name: 'DEX', val: dex, note: 'מעלה ישירות את נזק היריות של האקדח' },
        secondary: { name: 'STR', val: baseStr, note: isStrless ? '4 בסיסי לצמיתות' : 'דרישת אקדחים רגילים (רמה)' },
        rule: isStrless ? 'שים 5 נקודות ב-DEX בכל רמה!' : 'השקע 1 נקודה ב-STR ו-4 ב-DEX בכל עלייה.'
      };
    },
    skills1: [
      { id: 'doubleFire', name: 'Double Fire', nameHe: 'ירי כפול (Double Fire)', max: 20, icon: '🔫', optimal: 20, desc: 'יורה 2 קליעים במהירות הבזק. המתקפה המרכזית לרמות 10-30.' },
      { id: 'bulletSmash', name: 'Bullet Smash', nameHe: 'מחיצת קליע', max: 20, icon: '💥', optimal: 20, desc: 'יורה קליע כבד החודר דרך מספר מפלצות בקו ישר.' },
      { id: 'dash', name: 'Dash', nameHe: 'זינוק מהיר (Dash)', max: 10, icon: '💨', optimal: 10, desc: 'לחיצה כפולה על מקש החץ מעניקה ריצת ספרינט מהירה להפליא!' },
      { id: 'somersaultKick', name: 'Somersault Kick', nameHe: 'בעיטת סלטה', max: 20, icon: '🦵', optimal: 11, desc: 'בעיטה סיבובית הפוגעת בעד 6 מפלצות סביבך בקרב צמוד.' }
    ],
    skills2: [
      { id: 'gunMastery', name: 'Gun Mastery', nameHe: 'שליטה באקדח', max: 20, icon: '🎯', optimal: 20, desc: 'מעלה יציבות נזק ומרחיב את מחסנית הקליעים ב-+200 כדורים.' },
      { id: 'gunBooster', name: 'Gun Booster', nameHe: 'בוסטר אקדח', max: 20, icon: '⚡', optimal: 20, desc: 'מכפיל את מהירות יריית הקליעים ממהירות Normal ל-Faster.' },
      { id: 'invisibleShot', name: 'Invisible Shot', nameHe: 'ירייה בלתי נראית', max: 20, icon: '🌀', optimal: 20, desc: 'יורה קליע קסום הפוגע בעד 3 מפלצות בו-זמנית בנזק כבד.' },
      { id: 'wings', name: 'Wings', nameHe: 'כנפיים (דאייה)', max: 10, icon: '🪽', optimal: 10, desc: 'מאפשר לפיראט לדאות באוויר מעל מפלצות ומכשולים.' },
      { id: 'grenade', name: 'Grenade', nameHe: 'רימון נפץ (Grenade)', max: 30, icon: '💣', optimal: 30, desc: 'זורק רימון מתפוצץ על גושי מפלצות.' },
      { id: 'blankShot', name: 'Blank Shot', nameHe: 'יריית סרק מהממת', max: 20, icon: '💥', optimal: 20, desc: 'יורה קליע סרק המהמם (Stun) עד 3 מפלצות.' }
    ],
    huntingSpots: [
      { range: '10-20', name: 'Nautilus Waves & HHG1', why: 'ירי Double Fire ממרחק ושימוש ב-Dash לתנועה מהירה במפה.' },
      { range: '21-30', name: 'Kerning City PQ & Wild Boars', why: 'קצב ירי מהיר מאוד המחסל מפלצות בודדות במהירות.' },
      { range: '31-50', name: 'Land of Wild Boar II & LPQ', why: 'שימוש ב-Invisible Shot לתקיפת מספר חזירים ודאייה עם Wings מעל סכנות.' },
      { range: '51-70', name: 'Coolies (זומבים במכרות אל נאת\')', why: 'חרישת EXP מהירה עם קליעים איכותיים ממרחק בטוח.' }
    ],
    gearProgression: [
      { level: 10, name: 'Novice Gun', att: '12 ATT', speed: 'Fast', where: 'חנות נמל הנאוטילוס (דרישה: 10 STR)' },
      { level: 20, name: 'Deringer', att: '20 ATT', speed: 'Fast', where: 'דרופ מ-Green Mushroom (דרישה: 20 STR)' },
      { level: 25, name: 'High-Powered Pistol', att: '26 ATT', speed: 'Fast', where: 'דרופ מ-Bubbling ו-Wild Boar (דרישה: 25 STR)' },
      { level: 30, name: 'Cold Mind', att: '32 ATT', speed: 'Fast', where: 'אקדח רמה 30 קלאסי. דרופ מ-Horny Mushroom (דרישה: 30 STR)' },
      { level: 35, name: 'Shooting Star', att: '38 ATT', speed: 'Fast', where: 'הנשק המרכזי לרמה 35 בהשקה (במקום Maple Gun)! דרופ מ-Fire Boar (דרישה: 35 STR)' },
      { level: 40, name: 'Lunar Shooter', att: '44 ATT', speed: 'Fast', where: 'דרופ מ-Jr. Wraith ו-Cold Eye (דרישה: 40 STR)' },
      { level: 50, name: 'Burning Hell', att: '52 ATT', speed: 'Fast', where: 'אקדח רמה 50 מרהיב. דרופ מ-Drake ו-Dark Stone Golem (דרישה: 50 STR)' },
      { level: 60, name: 'Abyss Shooter', att: '60 ATT', speed: 'Fast', where: 'אקדח רמה 60 עוצמתי. דרופ מ-Wild Kargo (דרישה: 60 STR)' }
    ]
  }
};
