// MapleStory Pre-BigBang & Classic World Meta Guides (MeowDB & Community Consensus)
// Covers all 8 playable classic jobs with complete AP (Stat) builds, SP (Skill) progressions, math formulas, and gear roadmaps.

export const MEOWDB_META_GUIDES = {
  // =========================================================================
  // 1. THIEF: ASSASSIN (מתנקש / הרמיט)
  // =========================================================================
  'assassin': {
    jobId: 'assassin',
    jobName: 'Assassin / Hermit',
    jobNameHe: 'מתנקש / הרמיט (Assassin / Hermit)',
    icon: '🗡️',
    themeColor: 'purple',
    overview: 'המתנקש הוא מלך הנזק הבודד (Single-Target DPS) והניידות במייפל סטורי קלאסי. מבוסס על שילוב של Lucky Seven בעבודה ראשונה, ו-Critical Throw + Haste בעבודה שנייה.',
    statBuilds: [
      {
        id: 'dexless',
        name: 'Pure Dexless (השקעה טהורה ב-LUK)',
        badge: 'המומלץ ביותר לנזק (Top DPS Meta)',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: 'שומרים על DEX בסיסי של 25 (המינימום של מעבר עבודה ל-Rogue), ומשקיעים כל נקודת AP שמתקבלת ל-LUK בלבד.',
        mathFormula: 'נוסחת הנזק של Lucky Seven: Max Damage = (LUK × 5.0 × Weapon ATT) / 100. מכיוון ש-DEX אינו תורם כלל לנזק של Lucky Seven, כל נקודה ב-LUK מעלה נזק ישיר!',
        pros: [
          'נזק מטורף החל מרמה 10 עד רמה 70+ (כ-30%-40% יותר מבילד רגיל).',
          'כפפת Meba (רמה 25) בעלת מהירות Faster (3) - המהירות הגבוהה ביותר במשחק!',
          'חוסך כסף על קניית שריונות יקרים בכל מדרגת רמות.'
        ],
        cons: [
          'הגנה פיזית נמוכה (דורש שימוש ב-Dark Sight ומיקום נכון על פלטפורמות).',
          'דורש השקעה בציוד מוסיף DEX (כובע במבוק, חלוק רחצה משודרג במגילות DEX).'
        ],
        gearRoadmap: [
          { level: '10-25', item: 'Garnier', note: 'הכפפה הבסיסית שמעניק Dark Lord.' },
          { level: '25-70+', item: 'Meba (Faster 3)', note: 'הנשק המרכזי של דקסלס! משדרגים עם מגילות Claw for ATT 60%/100% כדי להגיע ל-25-35+ ATT.' },
          { level: '30+', item: 'Bamboo Hat (כובע במבוק)', note: '+3 עד +5 DEX טבעי.' },
          { level: '30+', item: 'Bathrobe (חלוק רחצה)', note: 'ללא דרישות סטייטים, בעל 10 סלוטים למגילות Overall DEX 100%/60%.' },
          { level: '40+', item: 'Yellow Snowshoes / Work Gloves', note: 'כפפות עבודה עם מגילות ATT (Work Gloves 8-10 ATT).' }
        ]
      },
      {
        id: 'low-dex',
        name: 'Low-DEX (DEX קבוע 40-50)',
        badge: 'איזון בין נזק למגוון נשקים',
        badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
        summary: 'מעלים DEX ל-40 או 50 נקודות בלבד (או משלימים בעזרת שריון), וכל שאר הנקודות מושקעות ב-LUK.',
        mathFormula: 'מאפשר שימוש בנשקי ביניים בעלי בסיס ATT גבוה יותר כמו Iron Igor או Korean Fan (רמה 35), תוך שמירה על 85% מהעוצמה של דקסלס.',
        pros: [
          'גישה לכפפות מתקדמות יותר כמו Igor ו-Korean Fan ללא מגילות מטורפות.',
          'הגנה פיזית סבירה יותר מביגוד ברמות 30-40.',
          'מעבר נוח לנשקי Maple בעתיד.'
        ],
        cons: ['נזק מעט נמוך יותר מ-Pure Dexless ברמות 25-50.'],
        gearRoadmap: [
          { level: '10-25', item: 'Garnier -> Meba', note: 'התחלה עם Meba' },
          { level: '35', item: 'Iron Igor / Korean Fan', note: 'דורש 40-50 DEX, מעניק מהירות Fast ונזק בסיס יציב.' },
          { level: '50', item: 'Golden River / Slain', note: 'מעבר הדרגתי עם תוספי DEX מציוד.' }
        ]
      },
      {
        id: 'standard-dex',
        name: 'Regular DEX (DEX = רמה × 2)',
        badge: 'הבילד הקלאסי המקורי',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'בכל רמה משקיעים 3 LUK ו-2 DEX, כך שה-DEX תמיד שווה למספר הרמה כפול 2 (רמה 30 = 60 DEX, רמה 40 = 80 DEX וכו\').',
        mathFormula: 'תואם במדויק את דרישות כל כפפות הטפרים והשריונות הקלאסיים של מייפל סטורי לכל רמה.',
        pros: [
          'לובשים את כל השריונות והכפפות הקלאסיים של המשחק (Slain, Igrit, Scarab, Dark Hinkel).',
          'הגנה פיזית גבוהה וחיסכון בעלויות מגילות מיוחדות.'
        ],
        cons: ['נזק נמוך יותר ב-25-35% מבילד Dexless עקב בזבוז נקודות על DEX במקום LUK.'],
        gearRoadmap: [
          { level: '25', item: 'Meba', note: 'DEX 50' },
          { level: '35', item: 'Slain', note: 'DEX 70' },
          { level: '40', item: 'Igrit', note: 'DEX 80' },
          { level: '50', item: 'Scarab', note: 'DEX 100' },
          { level: '60', item: 'Dark Slain / Bronze Gigantic', note: 'DEX 120' }
        ]
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Rogue (רמות 10-30 • סה״כ 61 נקודות SP)',
        rationale: 'המטרה היא לפתוח Lucky Seven מיד ברמה 10 כדי להיפטר מתקיפת סכין רגילה, למקסם את טווח הזריקה (Keen Eyes) כדי לפגוע ממרחק בטוח, ואז למקסם את Lucky Seven לרמה 20 לנזק מלא.',
        buildOrder: [
          { step: 1, level: 'רמה 10', sp: '+1 Lucky Seven', cumulative: 'L7: 1', why: 'פותח את מתקפת הזריקה מיד במעבר עבודה.' },
          { step: 2, level: 'רמות 11-13', sp: '+3 Nimble Body', cumulative: 'Nimble: 3', why: 'דרישת חובה של 3 נקודות כדי לפתוח את Keen Eyes.' },
          { step: 3, level: 'רמות 14-16', sp: '+8 Keen Eyes', cumulative: 'Keen Eyes: 8', why: 'מרחיב את טווח הזריקה ממרחק בטוח (חיוני לפטריות ול-HHG1).' },
          { step: 4, level: 'רמות 17-23', sp: '+19 Lucky Seven (מקס 20)', cumulative: 'L7: 20 (MAX)', why: 'נזק מלא של 170% × 2 כוכבים על בסיס LUK! מחסל מפלצות במכה.' },
          { step: 5, level: 'רמות 24-25', sp: '+7 Keen Eyes (מקס 15)', cumulative: 'Keen Eyes: 15 (MAX)', why: 'טווח זריקה מקסימלי (200+ פיקסלים).' },
          { step: 6, level: 'רמות 26-28', sp: '+3 Disorder', cumulative: 'Disorder: 3', why: 'דרישת חובה של 3 נקודות לפתיחת Dark Sight.' },
          { step: 7, level: 'רמות 29-30', sp: '+10 Dark Sight (או Nimble Body)', cumulative: 'Dark Sight: 10', why: 'התגנבות והיעלמות – חיוני לפתרון שלבי ה-KPQ והתחמקות ממוות.' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Assassin (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'הטעות הנפוצה של שחקנים מתחילים היא לנסות למקסם את Claw Booster מוקדם מדי. לפי MeowDB והקהילה, שמים רק 5-6 נקודות ב-Booster (מספיק ל-60 שניות), וממהרים למקסם את Critical Throw (מעניק 50% סיכוי ל-200% נזק!) ואת Haste שפותח את הדלת לכל פארטי ב-LPQ.',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Claw Mastery', cumulative: 'Mastery: 1', why: 'פתיחת עץ הסקילים של עבודה 2.' },
          { step: 2, level: 'רמות 31-32', sp: '+4 Claw Mastery, +2 Claw Booster', cumulative: 'Mastery: 5, Booster: 2', why: 'Mastery 5 נדרש לפתיחת Booster. רמה 2 בבוסטר מעניקה 20 שניות האצה.' },
          { step: 3, level: 'רמה 33', sp: '+3 Claw Booster', cumulative: 'Booster: 5', why: '5 נקודות ב-Booster נותנות 50 שניות – מספיק נוח לקרב.' },
          { step: 4, level: 'רמות 34-43', sp: '+30 Critical Throw (מקס 30)', cumulative: 'Critical Throw: 30 (MAX)', why: 'קפיצת הנזק הגדולה ביותר במשחק! 50% סיכוי להנחית 200% נזק בכל זריקה.' },
          { step: 5, level: 'רמות 44-50', sp: '+20 Haste (מקס 20)', cumulative: 'Haste: 20 (MAX)', why: 'הבאף החשוב ביותר: +40 מהירות ו-+20 קפיצה לכל הפארטי. חובה ל-LPQ!' },
          { step: 6, level: 'רמות 51-55', sp: '+15 Claw Mastery (מקס 20)', cumulative: 'Claw Mastery: 20 (MAX)', why: 'מעלה יציבות נזק מינימלי מ-10% ל-60% ומוסיף 200 כוכבים לכל טעינה.' },
          { step: 7, level: 'רמות 56-59', sp: '+13 Claw Booster (מקס 18)', cumulative: 'Claw Booster: 18', why: 'הארכת משך הבוסטר ל-180 שניות לנוחות מרבית.' },
          { step: 8, level: 'רמות 60-69', sp: '+30 Drain (מקס 30)', cumulative: 'Drain: 30 (MAX)', why: 'שואב 50% מהנזק ל-HP שלך – חוסך אלפי שיקויים ברמות הגבוהות.' },
          { step: 9, level: 'רמה 70', sp: '+3 נקודות אחרונות', cumulative: 'Endurance / Dark Sight', why: 'השלמת Dark Sight או שחזור MP.' }
        ]
      }
    }
  },

  // =========================================================================
  // 2. THIEF: BANDIT (בנדיט / צ'יף בנדיט)
  // =========================================================================
  'bandit': {
    jobId: 'bandit',
    jobName: 'Bandit / Chief Bandit',
    jobNameHe: 'בנדיט / צ\'יף בנדיט (Bandit / Chief Bandit)',
    icon: '🗡️',
    themeColor: 'purple',
    overview: 'לוחם סכינים זריז ומסוכן בקרב צמוד. מחזיק במתקפה האייקונית Savage Blow (6 מכות סכין ברצף!), ובעבודה 3 הופך לעילוי עם Meso Explosion ו-Assaulter.',
    statBuilds: [
      {
        id: 'dexless',
        name: 'Pure Dexless LUK (דקסלס סכינים)',
        badge: 'נזק Savage Blow מקסימלי',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: '25 DEX בסיסי בלבד, וכל שאר הנקודות ל-LUK. שימוש בפגיונות ללא דרישות DEX (כמו Forked Dagger, Korean Fan, או פגיונות משודרגים במגילות Dagger ATT 60%).',
        mathFormula: 'נוסחת Savage Blow: שישה פגיעות של (LUK × 3.6 × Dagger ATT) / 100. כל נקודת LUK מוכפלת פי 6 בכל מתקפה!',
        pros: [
          'נזק מחץ שמשמיד מפלצות ב-6 מכות ברצף.',
          'התחמקות (Avoidability) עצומה בזכות השקעה מרבית ב-LUK.'
        ],
        cons: [
          'קרב צמוד הדורש מיומנות קפיצה ותנועה כדי לא לספוג מכות מגע.'
        ],
        gearRoadmap: [
          { level: '10-20', item: 'Fruit Dagger', note: 'פגיון בסיסי ללא דרישות' },
          { level: '25-35', item: 'Forked Dagger (רמה 25) / Korean Fan', note: 'מהירות Fast (4), סלוטים למגילות' },
          { level: '30+', item: 'Bathrobe (חלוק רחצה)', note: 'משודרג במגילות DEX' }
        ]
      },
      {
        id: 'regular',
        name: 'Regular DEX (DEX = רמה × 2)',
        badge: 'שימוש בכל הפגיונות והמגנים',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: '3 LUK ו-2 DEX בכל עליית רמה, מאפשר ללבוש את כל פגיונות המשחק הקלאסיים (Stinger, Gephart, Kage, Bazelard).',
        mathFormula: 'תואם את דרישות ה-DEX של שריונות ופגיונות הפיראטים והגנבים ברחבי ויקטוריה ואוסיריה.',
        pros: ['שימוש במגני גנב (Thief Shield) ופגיונות מגוונים.'],
        cons: ['נזק נמוך יותר מבילד דקסלס.']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Rogue (רמות 10-30 • סה״כ 61 נקודות SP)',
        rationale: 'לבנדיט חובה למקסם Double Stab לנזק מוקדם, ואת Nimble Body לדיוק והתחמקות קריטית בקרב צמוד.',
        buildOrder: [
          { step: 1, level: 'רמה 10', sp: '+1 Double Stab', cumulative: 'Double Stab: 1', why: 'פתיחת דקירה כפולה.' },
          { step: 2, level: 'רמות 11-13', sp: '+3 Nimble Body', cumulative: 'Nimble: 3', why: 'דרישה לפתיחת Dark Sight.' },
          { step: 3, level: 'רמות 14-20', sp: '+19 Double Stab (מקס 20)', cumulative: 'Double Stab: 20 (MAX)', why: '130% × 2 מכות. מתקפת הפגיון המרכזית עד רמה 35.' },
          { step: 4, level: 'רמות 21-26', sp: '+17 Nimble Body (מקס 20)', cumulative: 'Nimble: 20 (MAX)', why: 'מעלה דיוק והתחמקות בקרב מגע.' },
          { step: 5, level: 'רמות 27-28', sp: '+3 Disorder', cumulative: 'Disorder: 3', why: 'דרישת חובה ל-Dark Sight.' },
          { step: 6, level: 'רמות 29-30', sp: '+10 Dark Sight', cumulative: 'Dark Sight: 10', why: 'התגנבות לפארטי קווסט בקרנינג (KPQ).' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Bandit (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'ממקסמים מיד את Savage Blow לרמה 30! 6 מכות סכין ברצף של 80% כל אחת (480% נזק כולל) שהופכות את הבנדיט למכונת הריגה!',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Dagger Mastery', cumulative: 'Mastery: 1', why: 'פתיחת עץ עבודה 2.' },
          { step: 2, level: 'רמות 31-40', sp: '+30 Savage Blow (מקס 30)', cumulative: 'Savage Blow: 30 (MAX)', why: '6 מכות ברצף מהיר! הסקיל העוצמתי והמרהיב ביותר של הבנדיט.' },
          { step: 3, level: 'רמות 41-47', sp: '+19 Dagger Mastery (מקס 20)', cumulative: 'Mastery: 20 (MAX)', why: 'מעלה יציבות נזק מ-10% ל-60% ומוסיף דיוק.' },
          { step: 4, level: 'רמות 48-54', sp: '+20 Haste (מקס 20)', cumulative: 'Haste: 20 (MAX)', why: '+40 מהירות ו-+20 קפיצה לכל הפארטי. חובה ל-LPQ.' },
          { step: 5, level: 'רמות 55-56', sp: '+6 Dagger Booster', cumulative: 'Booster: 6', why: 'האצת מהירות הסכין ל-Faster למשך 60 שניות.' },
          { step: 6, level: 'רמות 57-66', sp: '+30 Steal (מקס 30)', cumulative: 'Steal: 30 (MAX)', why: 'גונב חפצים, שיקויים וציוד ממפלצות בזמן הקרב.' },
          { step: 7, level: 'רמות 67-70', sp: '+14 Dagger Booster (מקס 20)', cumulative: 'Booster: 20 (MAX)', why: 'משך בוסטר מלא של 200 שניות.' }
        ]
      }
    }
  },

  // =========================================================================
  // 3. MAGICIAN: CLERIC (קוסם קודש / פריסט)
  // =========================================================================
  'cleric': {
    jobId: 'cleric',
    jobName: 'Cleric / Priest',
    jobNameHe: 'קוסם קודש (Cleric / Priest)',
    icon: '🪄',
    themeColor: 'blue',
    overview: 'העבודה המבוקשת ביותר בעולם מייפל סטורי. שילוב של Heal (ריפוי + נזק שטח מטורף לאל-מתים), Invincible ו-Bless הופך את הקלריק למכונת EXP מהירה ביותר ללא צורך בשיקויי HP.',
    statBuilds: [
      {
        id: 'lukless',
        name: 'Pure INT (לוקלס קודש)',
        badge: 'נזק קסם ו-Magic ATT מירבי',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: 'שומרים על LUK בסיסי של 4, ומשקיעים כל נקודת AP ל-INT בלבד.',
        mathFormula: 'כל נקודת INT מעלה Magic ATT ישיר ומגדילה את כמות ה-MP המקסימלית בכל עליית רמה!',
        pros: [
          'נזק Heal ו-Magic Claw הגבוה ביותר.',
          'מאגר MP ענקי שחוסך שיקויים בשילוב עם MP Eater.',
          'נשק Wooden Wand (רמה 8) אינו דורש LUK כלל וניתן לשדרגו במגילות Magic ATT.'
        ],
        cons: ['לא ניתן ללבוש שריונות קוסם גבוהים ללא מגילות LUK.'],
        gearRoadmap: [
          { level: '8-70+', item: 'Wooden Wand / Wizard Wand', note: 'משודרג במגילות Wand ATT 60%' },
          { level: '30+', item: 'Bathrobe (חלוק רחצה)', note: 'עם מגילות Overall INT 100%/60%' }
        ]
      },
      {
        id: 'regular',
        name: 'Regular INT (LUK = רמה + 3)',
        badge: 'שימוש בכל המטות והשריונות',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'משקיעים LUK כך שיהיה שווה לרמה + 3 (רמה 30 = 33 LUK), והשאר ל-INT.',
        mathFormula: 'תואם את דרישות המטות של רמות 35, 38, 48, 58 וכו\'.',
        pros: ['גישה לכל המטות הקלאסיים (Arc Staff, Thorns, Evil Wings).'],
        cons: ['נזק מעט נמוך יותר מ-Pure INT.']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Magician (רמות 8-30 • סה״כ 67 נקודות SP)',
        rationale: 'הכלל החשוב ביותר בקוסם: חובה למקסם את Improved MP Recovery ו-Improved Max MP Increase כמה שיותר מוקדם כדי להרוויח מקסימום MP לכל אורך חיי הדמות!',
        buildOrder: [
          { step: 1, level: 'רמה 8', sp: '+1 Energy Bolt', cumulative: 'EB: 1', why: 'דרישת חובה לפתיחת שיפורי MP.' },
          { step: 2, level: 'רמות 9-10', sp: '+5 Improved MP Recovery', cumulative: 'MP Recov: 5', why: 'דרישה לפתיחת Max MP Increase.' },
          { step: 3, level: 'רמות 11-13', sp: '+10 Improved Max MP Increase (מקס 10)', cumulative: 'Max MP: 10 (MAX)', why: 'קריטי! חובה למקסם ברמה 13 כדי לקבל בונוס MP ענק בכל עליית רמה.' },
          { step: 4, level: 'רמות 14-20', sp: '+20 Magic Claw (מקס 20)', cumulative: 'Magic Claw: 20 (MAX)', why: 'מתקפת הקסם העיקרית לרמות 14-35! פוגעת פעמיים ומתעלמת מהגנת אויב.' },
          { step: 5, level: 'רמות 21-24', sp: '+11 Improved MP Recovery (מקס 16)', cumulative: 'MP Recov: 16 (MAX)', why: 'שחזור MP פסיבי מהיר.' },
          { step: 6, level: 'רמות 25-30', sp: '+20 Magic Guard (מקס 20)', cumulative: 'Magic Guard: 20 (MAX)', why: 'הופך 80% מהנזק שתספוג להפחתת MP במקום HP. הישרדות חובה!' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Cleric (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'ריצת Heal היא שם המשחק! ברגע שממקסמים את Heal לרמה 30, הקלריק יכול להתאמן ב-Ghost Ship, Chronos, ו-Wraiths בסליפיווד/קרנינג ולעלות רמות במהירות כפולה מכל מקצוע אחר תוך ריפוי חברי הפארטי.',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Teleport', cumulative: 'Teleport: 1', why: 'ניידות מיידית במפה.' },
          { step: 2, level: 'רמות 31-40', sp: '+30 Heal (מקס 30)', cumulative: 'Heal: 30 (MAX)', why: 'הסקיל החשוב ביותר! מרפא את כל הפארטי ומשמיד מפלצות Undead בשטח רחב.' },
          { step: 3, level: 'רמות 41-47', sp: '+20 MP Eater (מקס 20)', cumulative: 'MP Eater: 20 (MAX)', why: 'שואב MP ממפלצות בכל מתקפה – מפסיקים לקנות שיקויי MP לגמרי!' },
          { step: 4, level: 'רמות 48-54', sp: '+20 Invincible (מקס 20)', cumulative: 'Invincible: 20 (MAX)', why: 'מפחית 30% מכל נזק פיזי שתספוג לצמיתות.' },
          { step: 5, level: 'רמות 55-61', sp: '+20 Bless (מקס 20)', cumulative: 'Bless: 20 (MAX)', why: 'באף לקבוצה: +20 התקפה פיזית, הגנה, דיוק והתחמקות.' },
          { step: 6, level: 'רמות 62-67', sp: '+19 Teleport (מקס 20)', cumulative: 'Teleport: 20 (MAX)', why: 'מוריד את עלות ה-MP של טלפורט ל-13 MP בלבד.' },
          { step: 7, level: 'רמות 68-70', sp: '+11 Holy Arrow', cumulative: 'Holy Arrow: 11', why: 'מתקפת קודש ליחיד.' }
        ]
      }
    }
  },

  // =========================================================================
  // 4. MAGICIAN: WIZARD ICE/LIGHTNING (קוסם קרח וברקים - I/L)
  // =========================================================================
  'wizard-il': {
    jobId: 'wizard-il',
    jobName: 'Wizard (Ice/Lightning)',
    jobNameHe: 'קוסם קרח וברקים (I/L Wizard / Mage)',
    icon: '⚡',
    themeColor: 'blue',
    overview: 'מכונת טיהור מפות (Mobbing) ומאסטר האלמנטים. משלב בין Cold Beam שמקפיא מפלצות ללא יכולת תגובה לבין Thunderbolt שפוגע בכל המפלצות במסך בבת-אחת.',
    statBuilds: [
      {
        id: 'lukless',
        name: 'Pure INT (לוקלס קרח וברקים)',
        badge: 'נזק אלמנטלי מירבי (+35% עוצמה)',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: '4 LUK בסיסי בלבד לצמיתות, וכל הנקודות מושקעות ב-INT בלבד.',
        mathFormula: 'נוסחת נזק אלמנטלי: נזק קרח כנגד מפלצות אש מוכפל ב-1.5×, ונזק ברקים מוכפל כנגד מפלצות מים ומעופפים. INT טהור מעניק את הבסיס הגבוה ביותר.',
        pros: [
          'משמיד מפלצות אש (Fire Boar, Red Drake) במכה אחת.',
          'ניקוי שטח מהיר ב-Ant Tunnel עם Thunderbolt.'
        ],
        cons: ['שימוש בבגדי דקסלס/לוקלס (חלוק אמבטיה וכובע במבוק).']
      },
      {
        id: 'regular',
        name: 'Regular INT (LUK = רמה + 3)',
        badge: 'שימוש במטות קרח ושריונות אלמנט',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'משקיעים LUK השווה לרמה + 3, והשאר ל-INT כדי לאחוז במטות Cromi ו-Evil Wings.',
        pros: ['שימוש במטות וציוד קוסמים מעוצב לכל רמה.'],
        cons: ['נזק מעט נמוך יותר מלוקלס.']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Magician (רמות 8-30 • סה״כ 67 נקודות SP)',
        rationale: 'מיקסום Max MP Increase ברמה 13, מיקסום Magic Claw לרמה 20, ומיקסום Magic Guard להישרדות.',
        buildOrder: [
          { step: 1, level: 'רמה 8', sp: '+1 Energy Bolt', cumulative: 'EB: 1', why: 'פתיחת העץ.' },
          { step: 2, level: 'רמות 9-10', sp: '+5 MP Recovery', cumulative: 'MP Recov: 5', why: 'דרישה ל-Max MP.' },
          { step: 3, level: 'רמות 11-13', sp: '+10 Max MP Increase (מקס 10)', cumulative: 'Max MP: 10 (MAX)', why: 'חובה ברמה 13!' },
          { step: 4, level: 'רמות 14-20', sp: '+20 Magic Claw (מקס 20)', cumulative: 'Magic Claw: 20 (MAX)', why: 'נזק קסם כפול.' },
          { step: 5, level: 'רמות 21-24', sp: '+11 MP Recovery (מקס 16)', cumulative: 'MP Recov: 16 (MAX)', why: 'שחזור פסיבי.' },
          { step: 6, level: 'רמות 25-30', sp: '+20 Magic Guard (מקס 20)', cumulative: 'Magic Guard: 20 (MAX)', why: 'הגנת חיים על בסיס MP.' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: I/L Wizard (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'דילמת הבחירה המפורסמת: אם מתאמנים על Fire Boars ו-Red Drakes – מקסם קודם Cold Beam (הקפאה בטוחה). אם מתאמנים ב-Ant Tunnel או פארטי – מקסם קודם Thunderbolt!',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Teleport', cumulative: 'Teleport: 1', why: 'טלפורט ראשון לניידות.' },
          { step: 2, level: 'רמות 31-40', sp: '+30 Cold Beam (מקס 30)', cumulative: 'Cold Beam: 30 (MAX)', why: '140% נזק קרח המקפיא מפלצות ל-1.5 שניות! מנטרל כל סכנה.' },
          { step: 3, level: 'רמות 41-47', sp: '+20 Meditation (מקס 20)', cumulative: 'Meditation: 20 (MAX)', why: '+20 Magic ATT לכל הקוסמים בפארטי!' },
          { step: 4, level: 'רמות 48-57', sp: '+30 Thunderbolt (מקס 30)', cumulative: 'Thunderbolt: 30 (MAX)', why: 'מנקה עד 6 מפלצות בשטח ברקים רחב בכל המסך.' },
          { step: 5, level: 'רמות 58-64', sp: '+20 MP Eater (מקס 20)', cumulative: 'MP Eater: 20 (MAX)', why: 'שאיבת MP בכל מכת ברק.' },
          { step: 6, level: 'רמות 65-70', sp: '+19 Teleport (מקס 20)', cumulative: 'Teleport: 20 (MAX)', why: 'הפחתת עלות טלפורט.' }
        ]
      }
    }
  },

  // =========================================================================
  // 5. WARRIOR: FIGHTER (לוחם חרב וגרזן - פייטר / קרוסיידר)
  // =========================================================================
  'fighter': {
    jobId: 'fighter',
    jobName: 'Fighter / Crusader',
    jobNameHe: 'לוחם חרב וגרזן (Fighter / Crusader)',
    icon: '⚔️',
    themeColor: 'red',
    overview: 'לוחם קרב מגע עוצמתי בעל נזק פיזי כבד ביותר בזכות Rage (תוספת התקפה ענקית) ו-Combo Attack בעבודה שלישית.',
    statBuilds: [
      {
        id: 'dexless',
        name: 'Low-DEX / Dexless STR (לוחם כוח טהור)',
        badge: 'נזק פיזי עליון (Top Burst)',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: 'שומרים על 4 DEX או 20 DEX בלבד, וכל שאר הנקודות מושקעות ב-STR. מסתמכים על כפפות דיוק (DEX Work Gloves) ושיקויי Sniper Potion (+10 Accuracy).',
        mathFormula: 'נוסחת נזק חרב דו-ידנית: Max Damage = (STR × 4.6 + DEX) / 100 × Weapon ATT. השקעה ב-STR מעניקה את הזינוק הגבוה ביותר לנזק.',
        pros: ['נזק Power Strike ו-Slash Blast שובר שיאים.'],
        cons: ['חובה להצטייד בציוד דיוק (Accuracy) כדי לפגוע במפלצות זריזות.']
      },
      {
        id: 'regular',
        name: 'Standard STR (DEX תואם נשק)',
        badge: 'בילד מאוזן לכל החרבות',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'מעלים DEX לפי דרישת החרב של הרמה (Zweihander, Lionheart, Claymore).',
        pros: ['פגיעות יציבות ללא החטאות.'],
        cons: ['נזק מעט נמוך יותר מדקסלס.']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Swordman (רמות 10-30 • סה״כ 61 נקודות SP)',
        rationale: 'חובה למקסם את Max HP Increase כמה שיותר מהר (רמה 15 לכל המאוחר) כדי להרוויח מקסימום נקודות חיים!',
        buildOrder: [
          { step: 1, level: 'רמות 10-11', sp: '+5 Improved HP Recovery', cumulative: 'HP Recov: 5', why: 'דרישת חובה ל-Max HP Increase.' },
          { step: 2, level: 'רמות 12-14', sp: '+10 Improved Max HP Increase (מקס 10)', cumulative: 'Max HP: 10 (MAX)', why: 'קריטי ביותר! מעניק בונוס HP ענק בכל רמה.' },
          { step: 3, level: 'רמות 15-21', sp: '+20 Slash Blast (מקס 20)', cumulative: 'Slash Blast: 20 (MAX)', why: 'מתקפת שטח הפוגעת בעד 6 מפלצות סביבך בנזק כבד.' },
          { step: 4, level: 'רמות 22-28', sp: '+20 Power Strike (מקס 20)', cumulative: 'Power Strike: 20 (MAX)', why: 'מתקפת מחץ ליחיד של 260% נזק לחיסול בוסים ומפלצות חזקות.' },
          { step: 5, level: 'רמות 29-30', sp: '+6 Endure', cumulative: 'Endure: 6', why: 'שחזור HP נוסף על חבלים וסולמות.' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Fighter (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'ממקסמים Sword Mastery ל-20 לנזק יציב ודיוק, שמים 5-6 נקודות ב-Booster, ואז ממקסמים Rage (+12 Weapon ATT לכל הפארטי) ו-Power Guard שמחזיר 40% נזק לאויב!',
        buildOrder: [
          { step: 1, level: 'רמות 30-36', sp: '+19 Sword Mastery (מקס 20)', cumulative: 'Mastery: 19', why: 'מעלה יציבות נזק מ-10% ל-60% ומוסיף Accuracy חיוני.' },
          { step: 2, level: 'רמות 37-38', sp: '+6 Booster', cumulative: 'Booster: 6', why: 'האצת מהירות החרב ב-2 רמות למשך דקה.' },
          { step: 3, level: 'רמות 39-45', sp: '+20 Rage (מקס 20)', cumulative: 'Rage: 20 (MAX)', why: 'באף אדיר: +12 Weapon ATT לכל הפארטי! מחליף שיקויי Warrior Potion יקרים.' },
          { step: 4, level: 'רמות 46-55', sp: '+30 Power Guard (מקס 30)', cumulative: 'Power Guard: 30 (MAX)', why: 'מפחית 40% מהנזק שתחטוף ומחזיר אותו ישירות למפלצת!' },
          { step: 5, level: 'רמות 56-60', sp: '+14 Booster (מקס 20)', cumulative: 'Booster: 20 (MAX)', why: 'משך בוסטר מלא של 200 שניות.' }
        ]
      }
    }
  },

  // =========================================================================
  // 6. WARRIOR: SPEARMAN (נושא רומח - ספירמן / דרגון נייט)
  // =========================================================================
  'spearman': {
    jobId: 'spearman',
    jobName: 'Spearman / Dragon Knight',
    jobNameHe: 'נושא רומח (Spearman / Dragon Knight)',
    icon: '🔱',
    themeColor: 'red',
    overview: 'עמוד השדרה של כל רייד ובוס במייפל סטורי. מחזיק בבאף האגדי Hyper Body (+60% HP/MP לפארטי!) ונהנה ממכפיל דקירה ענק עם רומחים ונשקי מוט.',
    statBuilds: [
      {
        id: 'dexless',
        name: 'Low-DEX / Pure STR Spearman',
        badge: 'נזק דקירה מקסימלי (Thrust Multiplier)',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: 'שומרים על DEX מינימלי ומשקיעים ב-STR. דקירת רומח נהנית ממכפיל 5.0 × STR – הגבוה ביותר מכל נשקי הלוחמים!',
        mathFormula: 'נוסחת דקירת רומח (Spear Thrust): Max Damage = (STR × 5.0 + DEX) / 100 × Weapon ATT.',
        pros: ['נזק יחיד אסטרונומי על בוסים ומפלצות גדולות.'],
        cons: ['תנועת הנפה (Swing) חלשה יותר מתנועת דקירה (Thrust).']
      },
      {
        id: 'regular',
        name: 'Standard STR (DEX = רמה או דרישת רומח)',
        badge: 'שימוש בכל הרומחים הקלאסיים',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'DEX תואם לרמה ללבישת Forked Spear, Crescent, Serpent\'s Tongue ו-Holy Cross.',
        pros: ['שימוש קל בכל סוגי הרומחים ונשקי המוט ללא צורך במגילות דיוק נדירות.'],
        cons: ['נזק מעט נמוך יותר מבילד כוח טהור.']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Swordman (רמות 10-30 • סה״כ 61 נקודות SP)',
        rationale: 'מיקסום מהיר של Max HP Increase ברמה 15 לרווח HP נצחי, ולאחריו Slash Blast ו-Power Strike.',
        buildOrder: [
          { step: 1, level: 'רמות 10-11', sp: '+5 HP Recovery', cumulative: 'HP Recov: 5', why: 'דרישה ל-Max HP.' },
          { step: 2, level: 'רמות 12-14', sp: '+10 Max HP Increase (מקס 10)', cumulative: 'Max HP: 10 (MAX)', why: 'חובה ברמה 15 לרווח HP!' },
          { step: 3, level: 'רמות 15-21', sp: '+20 Slash Blast (מקס 20)', cumulative: 'Slash Blast: 20 (MAX)', why: 'פגיעת שטח ב-6 מפלצות.' },
          { step: 4, level: 'רמות 22-28', sp: '+20 Power Strike (מקס 20)', cumulative: 'Power Strike: 20 (MAX)', why: '260% נזק ליחיד.' },
          { step: 5, level: 'רמות 29-30', sp: '+6 Endure', cumulative: 'Endure: 6', why: 'שחזור HP נוסף.' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Spearman (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'כל ספירמן חייב למהר למקסם את HYPER BODY! זהו הסקיל החשוב ביותר במשחק שמכפיל את כמות החיים וה-MP של כל חברי הפארטי ב-+60%!',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Spear Mastery', cumulative: 'Mastery: 1', why: 'פתיחת עץ עבודה 2.' },
          { step: 2, level: 'רמות 31-36', sp: '+19 Spear Mastery (מקס 20)', cumulative: 'Mastery: 20 (MAX)', why: 'יציבות נזק ודיוק חיוני.' },
          { step: 3, level: 'רמות 37-38', sp: '+6 Spear Booster', cumulative: 'Booster: 6', why: 'האצת מהירות הרומח.' },
          { step: 4, level: 'רמות 39-48', sp: '+30 HYPER BODY (מקס 30!)', cumulative: 'Hyper Body: 30 (MAX)', why: 'הבאף האגדי! +60% Max HP ו-+60% Max MP לכל חברי הפארטי! מציל שחקנים ממוות בבוסים.' },
          { step: 5, level: 'רמות 49-54', sp: '+20 Iron Will (מקס 20)', cumulative: 'Iron Will: 20 (MAX)', why: 'תוספת הגנה פיזית וקסומה משמעותית.' },
          { step: 6, level: 'רמות 55-60', sp: '+14 Booster (מקס 20)', cumulative: 'Booster: 20 (MAX)', why: 'משך בוסטר מלא ל-200 שניות.' },
          { step: 7, level: 'רמות 61-70', sp: '+30 Pole Arm Mastery (או Final Attack)', cumulative: 'Pole Arm / Final Attack', why: 'פתיחת שליטה בנשקי מוט לבילד היברידי.' }
        ]
      }
    }
  },

  // =========================================================================
  // 7. BOWMAN: HUNTER (קשת מהיר - האנטר / ריינג'ר)
  // =========================================================================
  'hunter': {
    jobId: 'hunter',
    jobName: 'Hunter / Ranger',
    jobNameHe: 'קשת מהיר (Hunter / Ranger)',
    icon: '🏹',
    themeColor: 'emerald',
    overview: 'קשת ארוך טווח המצטיין בהימום (Stun) של מפלצות שלמות ממרחק באמצעות Arrow Bomb, וחיסכון ענק בחצים עם Soul Arrow.',
    statBuilds: [
      {
        id: 'strless',
        name: 'Strless / Low-STR (קשת זריזות טהור)',
        badge: 'נזק חצים מירבי ממרחק',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: 'שומרים על 4 STR בסיסי או השלמה מציוד, וכל שאר הנקודות מושקעות ב-DEX בלבד.',
        mathFormula: 'נוסחת נזק קשת: Max Damage = (DEX × 3.4 + STR) / 100 × Weapon ATT. כל נקודת DEX מעלה נזק ודיוק פי 3.4 מ-STR!',
        pros: ['נזק Double Shot ו-Arrow Bomb הגבוה ביותר.'],
        cons: ['שימוש בקשתות אירוע / דקסלס או השלמת STR מקשתות משודרגות.']
      },
      {
        id: 'regular',
        name: 'Standard DEX (STR = רמה + 4 / דרישת קשת)',
        badge: 'בילד קלאסי מומלץ לקשתים',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'מעלים STR רק לפי דרישת הקשת של הרמה הבאה (לרוב STR = רמה + 4 או +5), וכל שאר הנקודות מושקעות ב-DEX.',
        pros: ['שימוש בכל הקשתות המשוריינות (Ryden, Red Viper, Vaulter 2000, Olympus).'],
        cons: ['עמידה קרובה מדי למפלצת מבטלת את אפשרות הירי (דורש שליטה במרחק).']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Bowman (רמות 10-30 • סה״כ 61 נקודות SP)',
        rationale: 'מתחילים עם The Eye of Amazon למקסום טווח הירי כדי לתקוף ממרחק בטוח, ואז ממקסמים Double Shot.',
        buildOrder: [
          { step: 1, level: 'רמה 10', sp: '+1 Double Shot', cumulative: 'DS: 1', why: 'מתקפת ירי מהיר כפול.' },
          { step: 2, level: 'רמות 11-12', sp: '+3 The Blessing of Amazon', cumulative: 'Blessing: 3', why: 'דרישת חובה ל-Eye of Amazon.' },
          { step: 3, level: 'רמות 13-15', sp: '+8 The Eye of Amazon (מקס 8)', cumulative: 'Eye of Amazon: 8 (MAX)', why: 'מרחיב את טווח הירי לטווח המקסימלי במשחק!' },
          { step: 4, level: 'רמות 16-22', sp: '+19 Double Shot (מקס 20)', cumulative: 'DS: 20 (MAX)', why: '2 חצים של 130% נזק כל אחד. מתקפת הדגל של עבודה 1.' },
          { step: 5, level: 'רמות 23-27', sp: '+16 Critical Shot (מקס 20)', cumulative: 'Critical Shot: 20 (MAX)', why: 'מעניק 40% סיכוי לקריטיקל של 200% נזק.' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Hunter (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'האנטר הופך למכונת השמדה עם Arrow Bomb (פצצת נפץ שמהממת 6 מפלצות ל-6 שניות) ו-Soul Arrow שמאפשר לירות ללא חצים בתיק כלל!',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Bow Mastery', cumulative: 'Mastery: 1', why: 'פתיחת עץ עבודה 2.' },
          { step: 2, level: 'רמות 31-36', sp: '+18 Bow Mastery (מקס 19)', cumulative: 'Mastery: 19', why: 'יציבות נזק ודיוק.' },
          { step: 3, level: 'רמות 37-38', sp: '+6 Bow Booster', cumulative: 'Booster: 6', why: 'האצת קצב יריית החצים מ-Normal ל-Fast.' },
          { step: 4, level: 'רמות 39-48', sp: '+30 Arrow Bomb (מקס 30)', cumulative: 'Arrow Bomb: 30 (MAX)', why: 'פצצת חץ נפץ! גורמת נזק שטח ל-6 מפלצות ומהממת (Stun) אותן ל-6 שניות.' },
          { step: 5, level: 'רמות 49-51', sp: '+7 Soul Arrow', cumulative: 'Soul Arrow: 7', why: 'ירי ללא שימוש בחצים במלאי למשך 210 שניות! חוסך משקל בתיק.' },
          { step: 6, level: 'רמות 52-61', sp: '+30 Final Attack: Bow (מקס 30)', cumulative: 'Final Attack: 30 (MAX)', why: 'חץ בונוס עוצמתי אוטומטי (ב-MSCW v1.0.0 הוארך ל-60 שניות כבאף פעיל!).' },
          { step: 7, level: 'רמות 62-66', sp: '+14 Bow Booster (מקס 20)', cumulative: 'Booster: 20 (MAX)', why: 'משך בוסטר מלא ל-200 שניות.' }
        ]
      }
    }
  },

  // =========================================================================
  // 8. PIRATE: GUNSLINGER (אקדחן - פיראט / אאוטלו)
  // =========================================================================
  'gunslinger': {
    jobId: 'gunslinger',
    jobName: 'Gunslinger / Outlaw',
    jobNameHe: 'אקדחן (Gunslinger / Outlaw)',
    icon: '🔫',
    themeColor: 'cyan',
    overview: 'לוחם אקדחים נייד להפליא עם Dash (ספרינט כפול), Wings (דאייה אווירית), קצב ירי מהיר ביותר, ויכולת שליטה במפלצות ממרחק.',
    statBuilds: [
      {
        id: 'strless',
        name: 'Strless DEX (אקדחן זריזות טהור)',
        badge: 'נזק יריות וקצב אש מרבי',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
        summary: '4 STR בסיסי בלבד לצמיתות, וכל הנקודות מושקעות ב-DEX. נוסחת נזק האקדח נשענת על DEX טהור.',
        mathFormula: 'נוסחת נזק אקדח: Max Damage = (DEX × 3.6 + STR) / 100 × Weapon ATT.',
        pros: ['נזק Double Fire ו-Invisible Shot מקסימלי.'],
        cons: ['דורש אקדחים ללא דרישת STR או השלמת נקודות מציוד.']
      },
      {
        id: 'regular',
        name: 'Standard DEX (STR = רמה)',
        badge: 'שימוש בכל האקדחים הקלאסיים',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
        summary: 'STR שווה למספר הרמה (רמה 30 = 30 STR), והשאר מושקע ב-DEX עבור Shooting Star, Cold Mind ו-Lunar Shooter.',
        pros: ['שימוש חופשי בכל האקדחים והשריונות של הפיראט.'],
        cons: ['נזק מעט נמוך יותר מבילד Strless.']
      }
    ],
    skillProgression: {
      job1: {
        title: 'עבודה ראשונה: Pirate (רמות 10-30 • סה״כ 61 נקודות SP)',
        rationale: 'מתחילים עם Double Fire לנזק ירי מהיר, מקסמים מיד את Dash לניידות שיא, ומשלבים Somersault Kick כהגנה מקרב צמוד.',
        buildOrder: [
          { step: 1, level: 'רמה 10', sp: '+1 Double Fire', cumulative: 'Double Fire: 1', why: 'מתקפת היריות הראשונה.' },
          { step: 2, level: 'רמות 11-13', sp: '+10 Dash (מקס 10)', cumulative: 'Dash: 10 (MAX)', why: 'לחיצה כפולה על החץ מעניקה ריצת ספרינט סופר מהירה!' },
          { step: 3, level: 'רמות 14-20', sp: '+19 Double Fire (מקס 20)', cumulative: 'Double Fire: 20 (MAX)', why: '2 קליעים מהירים של 130% נזק כל אחד.' },
          { step: 4, level: 'רמות 21-27', sp: '+20 Somersault Kick (מקס 20)', cumulative: 'Somersault Kick: 20 (MAX)', why: 'בעיטת סלטה הפוגעת בעד 6 מפלצות סביבך בקרב מגע.' },
          { step: 5, level: 'רמות 28-30', sp: '+11 Bullet Smash', cumulative: 'Bullet Smash: 11', why: 'קליע חודר מפלצות.' }
        ]
      },
      job2: {
        title: 'עבודה שנייה: Gunslinger (רמות 30-70 • סה״כ 121 נקודות SP)',
        rationale: 'Gun Mastery מרחיב את המחסנית ב-+200 קליעים, Booster מכפיל את קצב הירי, ו-Invisible Shot יורה קליעים בלתי נראים הפוגעים ב-3 מפלצות בו-זמנית!',
        buildOrder: [
          { step: 1, level: 'רמה 30', sp: '+1 Gun Mastery', cumulative: 'Mastery: 1', why: 'פתיחת עץ עבודה 2.' },
          { step: 2, level: 'רמות 31-36', sp: '+19 Gun Mastery (מקס 20)', cumulative: 'Mastery: 20 (MAX)', why: 'מעלה יציבות נזק ומוסיף 200 קליעים לכל טעינה.' },
          { step: 3, level: 'רמות 37-38', sp: '+6 Gun Booster', cumulative: 'Booster: 6', why: 'מאיץ את קצב יריית הקליעים מ-Normal ל-Faster.' },
          { step: 4, level: 'רמות 39-48', sp: '+20 Invisible Shot (מקס 20)', cumulative: 'Invisible Shot: 20 (MAX)', why: 'יורה קליעים על עד 3 מפלצות בבת-אחת בנזק כבד.' },
          { step: 5, level: 'רמות 49-51', sp: '+5 Wings (מקס 5)', cumulative: 'Wings: 5 (MAX)', why: 'דאייה אווירית מעל תהומות ומפלצות.' },
          { step: 6, level: 'רמות 52-61', sp: '+20 Blank Shot (מקס 20)', cumulative: 'Blank Shot: 20 (MAX)', why: 'קליע סרק המהמם (Stun) עד 3 מפלצות.' },
          { step: 7, level: 'רמות 62-66', sp: '+14 Gun Booster (מקס 20)', cumulative: 'Booster: 20 (MAX)', why: 'משך בוסטר מלא ל-200 שניות.' },
          { step: 8, level: 'רמות 67-70', sp: '+16 Grenade', cumulative: 'Grenade: 16', why: 'רימון נפץ על גושי אויבים.' }
        ]
      }
    }
  }
};
