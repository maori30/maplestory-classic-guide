// MapleStory Pre-BigBang Assassin Weapons, Throwing Stars & Equipment Progression
export const CLAWS_PROGRESSION = [
  {
    id: 'garnier',
    name: 'Garnier',
    nameHe: 'גרנייה (Garnier)',
    reqLevel: 10,
    reqDex: 25,
    reqDexDexless: 0,
    weaponAtt: '12 (10-14)',
    speed: 'Normal (6)',
    slots: 7,
    suitableFor: 'both',
    suitableForHe: 'שני הבילדים (Dexless & Standard)',
    icon: '🧤',
    desc: 'הנשק הראשון של כל גנב בעבודה ראשונה! כפפת טפרים בסיסית שמעניק Dark Lord במעבר העבודה בקרנינג סיטי, או שניתן לקנות בנזיד עדשים בחנות הנשקים.',
    obtain: [
      'מתקבל בחינם מ-Dark Lord במעבר עבודה ל-Rogue ברמה 10.',
      'קנייה בחנות הנשקים בקרנינג סיטי (Kerning City Weapon Shop) תמורת 1,000 Mesos.'
    ],
    tip: 'מתאים לכולם. בבילד Dexless ניתן להשתמש בו ללא כל השקעת DEX אם הציוד ההתחלתי מספק את ה-DEX הדרוש, או להעלות עד 25 DEX עבור מעבר העבודה.'
  },
  {
    id: 'mountain-snake',
    name: 'Mountain Snake',
    nameHe: 'נחש הרים (Mountain Snake)',
    reqLevel: 15,
    reqDex: 35,
    reqDexDexless: null,
    weaponAtt: '15 (13-17)',
    speed: 'Fast (5)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'בנייה רגילה בלבד (Standard Build)',
    icon: '🐍',
    desc: 'שדרוג התקפה משמעותי לרמה 15 עבור שחקני בנייה רגילה שמחזיקים ב-30-35 DEX. מהירות התקפה מהירה יותר (Fast 5).',
    obtain: [
      'חנות הנשקים בקרנינג סיטי (Kerning City) תמורת 2,000 Mesos.',
      'דרופ ממפלצות: Green Mushroom, Stirge, Ribbon Pig.'
    ],
    tip: 'שחקני Dexless מוותרים על הנשק הזה וממשיכים עם Garnier עד רמה 20 כדי להצטייד ב-Meba.'
  },
  {
    id: 'meba',
    name: 'Meba',
    nameHe: 'מבה (Meba) - נשק האגדה של ה-Dexless!',
    reqLevel: 20,
    reqDex: 50,
    reqDexDexless: 25,
    weaponAtt: '18 (16-20)',
    speed: 'Faster (4/3) • מהירות שיא',
    slots: 7,
    suitableFor: 'both',
    suitableForHe: 'חובה ל-Dexless • מומלץ מאוד גם לרגיל',
    icon: '⚡',
    desc: 'הנשק המפורסם והאייקוני ביותר של מתנקשים ברמות הנמוכות! היתרון האדיר של Meba הוא מהירות ההתקפה הפנומנלית שלו (Fastest/Faster), שמאפשרת לזרוק Lucky Seven בקצב כפול ולחסל מפלצות ובוסים ב-KPQ במהירות על!',
    obtain: [
      'דרופ נדיר ממפלצות: Sneak, Drip, Jr. Wraith (ברכבת התחתית של קרנינג).',
      'דרופ מ-Stump ו-Dark Stump.',
      'קנייה משחקנים אחרים ב-Free Market (סביב 10,000–30,000 Mesos לנקייה).'
    ],
    tip: 'זהו הנשק המרכזי שמגלגלים עליו 10% או 60% מגילות Claw for ATT! מבה מגולגלת היטב (+25-30 WA) יכולה לשרת אותך עד רמה 50!'
  },
  {
    id: 'iron-igor',
    name: 'Iron Igor',
    nameHe: 'איגור ברזל (Iron Igor)',
    reqLevel: 25,
    reqDex: 60,
    reqDexDexless: null,
    weaponAtt: '20 (18-22)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'בנייה רגילה בלבד (Standard Build)',
    icon: '⚙️',
    desc: 'נשק חזק לבנייה רגילה ברמה 25 (דורש 60 DEX, בדיוק רמה × 2 + 10). מעניק כוח התקפה בסיסי של 20.',
    obtain: [
      'דרופ ממפלצות: Wild Boar (בפריון), Evil Eye (במערות אליניה), Jr. Boogie.',
      'חנות הנשקים באליניה / פריון (כ-5,000 Mesos).'
    ],
    tip: 'אם בחרת בבנייה רגילה (Standard), זהו שדרוג מוצלח שיחזיק אותך מעולה עד רמה 30.'
  },
  {
    id: 'slain',
    name: 'Slain',
    nameHe: 'סליין (Slain)',
    reqLevel: 30,
    reqDex: 70,
    reqDexDexless: null,
    weaponAtt: '24 (22-26)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'בנייה רגילה (עבודה שנייה Assassin)',
    icon: '🗡️',
    desc: 'הנשק של מעבר העבודה השנייה לאסאסין! דורש 70 DEX בדיוק, ומגיע בגרסאות צבע שונות (ירוק, כחול, סגול, אדום).',
    obtain: [
      'ייצור (Crafting) אצל JM From Tha Streetz בקרנינג סיטי.',
      'דרופ ממפלצות: Wild Boar, Copper Drake, Brown Teddy.',
      'חנות הנשקים באורביס (Orbis) או בקרנינג סיטי.'
    ],
    tip: 'במעבר עבודה שנייה ברמה 30, Slain מהווה סמל הסטטוס של האסאסין החדש בבנייה רגילה.'
  },
  {
    id: 'korean-fan',
    name: 'Korean Fan',
    nameHe: 'מניפה קוריאנית (Korean Fan) - שיא ה-Dexless',
    reqLevel: 35,
    reqDex: 0,
    reqDexDexless: 0,
    weaponAtt: '26 (24-28)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'dexless',
    suitableForHe: 'נשק חלומות ל-Dexless (דרישת 0 DEX!)',
    icon: '🪭',
    desc: 'הנשק האולטימטיבי של מתנקשי Dexless ברמות 35-50! אינו דורש אפילו נקודת DEX אחת (0 DEX Reqs), אך מעניק כוח התקפה גבוה של כפפה לרמה 35-40.',
    obtain: [
      'דרופ נדיר מ-Clang ו-Lorang (בחוף פלורינה - Florina Beach).',
      'רכישה משחקנים ב-Free Market (נחשב לפריט יקר ומבוקש).'
    ],
    tip: 'היעד הגדול ביותר של שחקן Dexless לאחר סיום רמה 30.'
  },
  {
    id: 'bronze-igrit',
    name: 'Bronze Igrit',
    nameHe: 'ברונזה איגריט (Bronze Igrit)',
    reqLevel: 40,
    reqDex: 80,
    reqDexDexless: null,
    weaponAtt: '28 (26-30)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'בנייה רגילה (רמה 40)',
    icon: '🦅',
    desc: 'כפפת רמה 40 חזקה לבנייה רגילה (דורשת 80 DEX בדיוק). מגיעה בגרסאות Bronze, Silver ו-Dark.',
    obtain: [
      'דרופ ממפלצות: Platoon Chronos, Jr. Yeti, Wraith.',
      'חנות הנשקים בלודיבריום או אל נאת\'.'
    ],
    tip: 'מעולה למי שמשחק בבנייה רגילה ועושה LPQ.'
  },
  {
    id: 'scarab',
    name: 'Scarab / Kandjar',
    nameHe: 'סקראב (Scarab)',
    reqLevel: 50,
    reqDex: 100,
    reqDexDexless: null,
    weaponAtt: '32 (30-34)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'בנייה רגילה (רמה 50)',
    icon: '🪲',
    desc: 'הכפפה האייקונית של רמה 50! דורשת 100 DEX ומגיעה בצבעים שונים (זהב, ברונזה, שחור).',
    obtain: [
      'דרופ ממפלצות: Ice Drake, Hector, White Fang, Master Chronos.',
      'ייצור אצל נפח באל נאת\'.'
    ],
    tip: 'קפיצת מדרגה עצומה בהתקפה! בשילוב עם Haste ו-Booster, אסאסין ברמה 50 הופך למכונת הריגה ב-OPQ.'
  },
  {
    id: 'maple-kandayo',
    name: 'Maple Kandayo',
    nameHe: 'מייפל קנדאיו (Maple Kandayo) - דקסלס רמה 64',
    reqLevel: 64,
    reqDex: 0,
    reqDexDexless: 0,
    weaponAtt: '35 (33-37)',
    speed: 'Faster (3) • מהירות שיא',
    slots: 7,
    suitableFor: 'dexless',
    suitableForHe: 'שיא ה-Dexless לרמות 64+',
    icon: '🍁',
    desc: 'נשק המייפל האגדי! מעניק כוח התקפה גבוה של כפפת רמה 60+ עם מהירות התקפה של Faster 3 וללא דרישת DEX כלל (0 DEX)!',
    obtain: [
      'דרופ מאיוונטים של MapleStory, עלי מייפל, או רכישה ב-Free Market.'
    ],
    tip: 'הכפפה הטובה ביותר בהיסטוריה לשחקן Dexless עד רמות 100+.'
  },
  {
    id: 'black-scarab',
    name: 'Black Scarab',
    nameHe: 'בלק סקראב (Black Scarab)',
    reqLevel: 60,
    reqDex: 110,
    reqDexDexless: null,
    weaponAtt: '36 (34-38)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'בנייה רגילה (רמה 60)',
    icon: '🖤',
    desc: 'כפפת רמה 60 המפורסמת בצבע שחור מט. דורשת 110 DEX בלבד (פחות מ-Level * 2!) ומעניקה התקפה אדירה.',
    obtain: [
      'דרופ ממפלצות: Wild Cargo, Pepe, Dark Stone Golem.',
      'מסחר ב-Free Market.'
    ],
    tip: 'הנשק המוביל לפני מעבר עבודה שלישית להרמיט.'
  },
  {
    id: 'dark-hinkel',
    name: 'Dark Hinkel',
    nameHe: 'דארק הינקל (Dark Hinkel)',
    reqLevel: 70,
    reqDex: 140,
    reqDexDexless: null,
    weaponAtt: '40 (38-42)',
    speed: 'Fast (4)',
    slots: 7,
    suitableFor: 'standard',
    suitableForHe: 'עבודה שלישית Hermit (רמה 70)',
    icon: '👑',
    desc: 'הנשק של מעבר עבודה שלישית להרמיט (Hermit)! כפפת טפרים מסיבית עם 40 כוח התקפה בסיסי.',
    obtain: [
      'דרופ ממפלצות: Taurospear (בסליפיווד), Werewolf (במכרה המוות באל נאת\').'
    ],
    tip: 'משמשת כנשק הראשי לפתיחת עבודה 3 עם Shadow Partner!'
  }
];

export const THROWING_STARS = [
  {
    id: 'subi',
    name: 'Subi Throwing-Stars',
    nameHe: 'סובי (Subi) - כוכבי הבסיס',
    att: '+15 Weapon Attack',
    attVal: 15,
    quantity: 500,
    icon: '✳️',
    price: '500 Mesos לחבילה',
    rechargeCost: '1 מסו לכל 2 כוכבים',
    whereToGet: 'נמכר בכל חנות שיקויים (Potion Shop) בכל עיר בוויקטוריה איילנד.',
    rating: '⭐ כוכבי התחלה',
    tip: 'הכוכבים הזולים והפשוטים ביותר. הצטייד ב-3 עד 4 סטים בתיק ברמות 10-15 כדי שלא תצטרך לחזור לעיר לעיתים קרובות.'
  },
  {
    id: 'wolbi',
    name: 'Wolbi Throwing-Stars',
    nameHe: 'וולבי (Wolbi)',
    att: '+17 Weapon Attack',
    attVal: 17,
    quantity: 500,
    icon: '❇️',
    price: 'דרופ ממפלצות / שוק חופשי (כ-5,000–10,000 Mesos)',
    rechargeCost: 'זול מאוד',
    whereToGet: 'דרופ מ-Wild Boar (בפריון), Jr. Wraith (ברכבת קרנינג), Fire Boar.',
    rating: '⭐⭐ שדרוג ראשוני',
    tip: 'שדרוג נחמד וזול שמוסיף +2 התקפה על פני סובי. נופל בקלות מחזירי בר בפריון בזמן אימונים ברמות 25-30.'
  },
  {
    id: 'wooden-top',
    name: 'Wooden Top',
    nameHe: 'סביבון עץ (Wooden Top)',
    att: '+19 Weapon Attack',
    attVal: 19,
    quantity: 500,
    icon: '🪵',
    price: 'פרס קווסטים / מסחר',
    rechargeCost: 'בינוני',
    whereToGet: 'מתקבל כפרס ממשימות מיוחדות (כמו שרשרת המשימות של Jane the Alchemist) או איוונטים.',
    rating: '⭐⭐⭐ כוכב ביניים חזק',
    tip: 'מעניק +19 התקפה, בדיוק כמו Mokbi, עם מראה נוסטלגי של סביבון עץ מסתובב באוויר.'
  },
  {
    id: 'mokbi',
    name: 'Mokbi Throwing-Stars',
    nameHe: 'מוקבי (Mokbi)',
    att: '+19 Weapon Attack',
    attVal: 19,
    quantity: 700,
    icon: '✴️',
    price: 'דרופ ממפלצות / שוק חופשי (כ-15,000–30,000 Mesos)',
    rechargeCost: 'נוח',
    whereToGet: 'דרופ מ-Curse Eye (בביוב ובאליניה), Iron Hog, Lorang.',
    rating: '⭐⭐⭐ שדרוג מומלץ מאוד לרמות 20-30',
    tip: 'יתרון כפול: גם מוסיף +19 התקפה (תוספת של +4 על פני סובי!) וגם מכיל 700 כוכבים בסט במקום 500, מה שחוסך המון מקום בתיק וזמן טעינה!'
  },
  {
    id: 'kumbi',
    name: 'Kumbi Throwing-Stars',
    nameHe: 'קומבי (Kumbi)',
    att: '+21 Weapon Attack',
    attVal: 21,
    quantity: 700,
    icon: '🔯',
    price: 'שוק חופשי (כ-60,000–120,000 Mesos)',
    rechargeCost: 'בינוני',
    whereToGet: 'דרופ מ-Copper Drake (במערות השינה של פריון/סליפיווד), Drake, Iron Mutae.',
    rating: '⭐⭐⭐⭐ כוכב קרב מקצועי',
    tip: 'הסט התחרותי הראשון של מתנקשים רציניים. ברמה 30+ עם Claw Mastery זהו הסט המשתלם ביותר ביחס למחיר ולנזק.'
  },
  {
    id: 'tobi',
    name: 'Tobi Throwing-Stars',
    nameHe: 'טובי (Tobi)',
    att: '+23 Weapon Attack',
    attVal: 23,
    quantity: 800,
    icon: '💠',
    price: 'שוק חופשי (כ-300,000–600,000 Mesos)',
    rechargeCost: 'בינוני-גבוה',
    whereToGet: 'דרופ מ-Stone Golem (במקדש הגולמים בהנסיס), Dark Stone Golem, Fire Drake.',
    rating: '⭐⭐⭐⭐⭐ כוכב עלית',
    tip: 'כוכבים כחולים מרהיבים שמעניקים +23 התקפה ומכילים 800 כוכבים לסט. מבוקשים מאוד בקרב אסאסינים בכל הרמות.'
  },
  {
    id: 'steely',
    name: 'Steely Throwing-Stars',
    nameHe: 'סטילי (Steely)',
    att: '+25 Weapon Attack',
    attVal: 25,
    quantity: 1000,
    icon: '🔷',
    price: 'שוק חופשי (כ-1.5M–3M Mesos)',
    rechargeCost: 'גבוה',
    whereToGet: 'דרופ נדיר מ-Red Drake, Tauromacis (במקדש בסליפיווד), Lycanthrope.',
    rating: '⭐⭐⭐⭐⭐ כוכבי יוקרה',
    tip: '1,000 כוכבים בחבילה אחת ו-+25 התקפה! מאפשר אימונים ממושכים של שעות ללא צורך בביקור אצל רוקח לטעינה.'
  },
  {
    id: 'ilbi',
    name: 'Ilbi Throwing-Stars',
    nameHe: 'אילבי (Ilbi) - הגביע הקדוש של מייפל סטורי!',
    att: '+27 Weapon Attack',
    attVal: 27,
    quantity: 800,
    icon: '👑',
    price: 'שוק חופשי (15M–25M+ Mesos)',
    rechargeCost: 'גבוה',
    whereToGet: 'דרופ אולטרה-נדיר מ-Mushmom (הבוסית בהנסיס), Lycanthrope, Crimson Balrog (בספינה לאורביס).',
    rating: '👑👑👑 האגדה והסמל של כל אסאסין',
    tip: 'הכוכב החזק והיוקרתי ביותר בגרסה הקלאסית! כל שחקן מייפל סטורי חולם לראות אילבי נופל על הרצפה. מעניק +27 התקפה אדירה.'
  }
];

export const ESSENTIAL_GEAR = [
  {
    id: 'brown-bamboo-hat',
    name: 'Brown Bamboo Hat',
    nameHe: 'כובע במבוק חום (+3 LUK)',
    slot: 'כובע (Hat)',
    reqLevel: 25,
    reqDex: 0,
    stats: '+3 LUK, 15 W.DEF',
    icon: '👒',
    howToGet: 'מתקבל כפרס ממשימת מאיה בהנסיס (Maya and the Weird Medicine) או דרופ נדיר מ-Wild Boar.',
    tip: 'פריט החובה הטוב ביותר בעולם למתנקשי Dexless! נותן +3 LUK ללא דרישת DEX כלל.'
  },
  {
    id: 'work-gloves',
    name: 'Work Gloves (10-15 WA)',
    nameHe: 'כפפות עבודה (Work Gloves)',
    slot: 'כפפות (Gloves)',
    reqLevel: 10,
    reqDex: 0,
    stats: '5 עד 7 סלוטים פתוחים למגילות',
    icon: '🧤',
    howToGet: 'קנייה מכל סוחר או ייצור בעזרת עורות. מגלגלים עליהן Scroll for Gloves for ATT 60% או 10%.',
    tip: 'כפפות עם +8 עד +12 Weapon Attack הן הבסיס להקפצת הנזק של Lucky Seven בכל בילד.'
  },
  {
    id: 'bathrobe',
    name: 'Bathrobe for Men/Women (+LUK)',
    nameHe: 'חלוק סאונה מסליפיווד (Bathrobe)',
    slot: 'בגד מלא (Overall)',
    reqLevel: 20,
    reqDex: 0,
    stats: '+10 Speed בסיסי, 10 סלוטים לגלילה',
    icon: '🥋',
    howToGet: 'קנייה בסאונה של מלון סליפיווד (Chrishrama) תמורת 30,000 Mesos.',
    tip: 'הבגד המושלם ל-Dexless! מגלגלים עליו Scroll for Overall for LUK (60% או 10%) לקבלת +10 עד +20 LUK טהור.'
  }
];

// Re-export Multi-Class Weapons and Ammo/Shields registry
export { WEAPONS_BY_JOB, ALL_WEAPONS_DATABASE, ALL_SECONDARY_DATABASE } from './weaponsData.js';

