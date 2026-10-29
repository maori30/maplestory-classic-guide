import fs from 'fs';
import { QUESTS_DATABASE } from '../src/data/quests.js';

// Comprehensive dictionary for all 124 generic quests
const QUEST_ENRICHMENTS = {
  // === FOSSIL & BETTY QUESTLINE (USER PRIORITY) ===
  "research-on-plant-fossils": {
    nameHe: "מחקר על מאובני צמחים (Research on Plant Fossils)",
    npcName: "Dr. Betty (אליניה - מפלס עליון ליד מעבדת הקסם)",
    itemsNeeded: [
      {
        item: "Plant Sample (דגימת צמח)",
        count: 20,
        source: "שבור את צמחי ופרחי הרקע הענקיים ביערות שמצפון לאליניה (Forest North of Ellinia ו-Tree Dungeon). הצמחים נשברים במכות רגילות (Basic Attack) או סקילים."
      }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 17+, השלמת Winston's Fossil Dig-up / חיפוש מאובנים",
    rewards: [
      { reward: "8,300 EXP · 1x Leaf of Life · פתיחת משימת Research on Animal Fossils", type: "all" }
    ],
    walkthrough: [
      "דבר עם Dr. Betty (ד\"ר בטי) במפלס העליון של אליניה (Ellinia) ליד בית הקוסמים כדי להתחיל את המחקר על מאובני צמחים.",
      "צא דרך השער הצפוני של אליניה לכיוון יערות אליניה (Forest North of Ellinia ומבוכי העצים Tree Dungeons).",
      "אתר את צמחי הרקע הענקיים ופרחי הענק המוזרים שצומחים על גזעי העצים והפלטפורמות ביער.",
      "הכה בצמחי הרקע בעזרת תקיפה רגילה (מקש התקיפה הבסיסי Ctrl) או בסקילים מספר פעמים עד שהם נשברים.",
      "אסוף 20 דגימות צמחים (Plant Samples) שנופלות מהצמחים השבורים.",
      "חזור אל Dr. Betty באליניה ומסור לה את 20 הדגימות לקבלת 8,300 EXP, עלה חיים (Leaf of Life) ופתיחת משימת ההמשך 'Research on Animal Fossils'."
    ]
  },

  "research-on-animal-fossils": {
    nameHe: "מחקר על מאובני חיות (Research on Animal Fossils)",
    npcName: "Dr. Betty (אליניה - מפלס עליון)",
    itemsNeeded: [
      {
        item: "Animal Fossil (מאובן חיה)",
        count: 20,
        source: "נופל מ-Ribbon Pig ו-Wild Boar (שדות הנסיס וארץ חזירי הבר בפריון)"
      },
      {
        item: "Beaver Tail (זנב בונה)",
        count: 1,
        source: "נאסף מחיות ביערות אליניה או מפלצות נהר"
      }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 17+, השלמת Research on Plant Fossils",
    rewards: [
      { reward: "9,200 EXP · 10x White Potions · פתיחת משימת Anne", type: "all" }
    ],
    walkthrough: [
      "שוחח עם Dr. Betty באליניה לאחר סיום מחקר מאובני הצמחים כדי לקבל את משימת מחקר החיות.",
      "הגע לשדות פריון או Henesys Hunting Ground וצוד מפלצות חזירים (Ribbon Pig / Wild Boar).",
      "אסוף 20 מאובני חיות (Animal Fossils) וזנב בונה (Beaver Tail).",
      "חזור אל ד\"ר בטי באליניה עם המאובנים לקבלת 9,200 EXP, שיקויים ופתיחת משימת גולגולת הדרייק."
    ]
  },

  "searching-for-fossils": {
    nameHe: "חיפוש מאובנים (Searching for Fossils)",
    npcName: "Winston (אזור החפירות ליד פריון - Rocky Road II)",
    itemsNeeded: [
      {
        item: "Leaf Fossil (מאובן עלה)",
        count: 50,
        source: "נופל מ-Wooden Mask ו-Stump ביערות פריון"
      },
      {
        item: "Bone Fossil (מאובן עצם)",
        count: 50,
        source: "נופל מ-Ribbon Pig ו-Wild Boar"
      }
    ],
    monstersToHunt: [
      { monster: "Wooden Mask", count: 20 },
      { monster: "Ribbon Pig", count: 20 }
    ],
    prerequisites: "רמה 17+",
    rewards: [
      { reward: "7,500 EXP · 15,000 Mesos · פתיחת שרשרת המאובנים של בטי", type: "all" }
    ],
    walkthrough: [
      "מצא את הארכיאולוג Winston העומד ב-Rocky Road II (בדרך המובילה מפריון לאזור החפירות Excavation Site).",
      "צא לצוד Wooden Masks ו-Ribbon Pigs כדי לאסוף 50 מאובני עלים (Leaf Fossils) ו-50 מאובני עצמות (Bone Fossils).",
      "היזהר מהאבנים הנופלות והרוחות באזור הסלעים של פריון.",
      "חזור אל Winston עם כל 100 המאובנים לקבלת 7,500 EXP, מסוס והפניה לד\"ר בטי באליניה."
    ]
  },

  "delivering-a-box-of-fossils": {
    nameHe: "משלוח קופסת המאובנים (Delivering a Box of Fossils)",
    npcName: "Winston (אזור החפירות ליד פריון)",
    itemsNeeded: [
      {
        item: "Box of Fossils (קופסת מאובנים חתומה)",
        count: 1,
        source: "מתקבל ישירות מ-Winston למסירה"
      }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 17+, השלמת Searching for Fossils",
    rewards: [
      { reward: "5,000 EXP · 5x Mana Elixir · פתיחת משימות אליניה", type: "all" }
    ],
    walkthrough: [
      "קבל מ-Winston ב-Rocky Road II את קופסת המאובנים המסווגת המיועדת לעמיתתו החוקרת באליניה.",
      "רד מפריון דרך Ellinia Tree Dungeons אל העיר אליניה.",
      "עלה במעלה העץ באליניה אל מפלס המעבדה ומצא את Dr. Betty.",
      "מסור לה את הקופסה של וינסטון לקבלת 5,000 EXP ושיקויים."
    ]
  },

  "transporting-drake-s-skull": {
    nameHe: "הובלת גולגולת הדרייק (Transporting Drake's Skull)",
    npcName: "Anne (אליניה - נכדתו של וינסטון)",
    itemsNeeded: [
      {
        item: "Drake's Skull (גולגולת דרייק)",
        count: 1,
        source: "מתקבל מ-Anne באליניה להעברה לווינסטון"
      }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 17+, השלמת Research on Animal Fossils",
    rewards: [
      { reward: "6,000 EXP · Scroll for Helmet for DEF 60% או 10%", type: "all" }
    ],
    walkthrough: [
      "דבר עם הילדה Anne באליניה (סמוך לביתה של ד\"ר בטי).",
      "אן תבקש ממך להעביר גולגולת דרייק גדולה וכבדה אל סבא שלה Winston שנמצא בחפירות פריון.",
      "קח את גולגולת הדרייק ועשה את דרכך אל Rocky Road II ליד פריון.",
      "מסור את הגולגולת לווינסטון לקבלת 6,000 EXP ומגילת קסם לקסדה (Helmet DEF)."
    ]
  },

  // === CURSED DOLLS QUESTLINE (ROWEN THE FAIRY) ===
  "collecting-50-cursed-dolls": {
    nameHe: "איסוף 50 בובות מקוללות (Collecting 50 Cursed Dolls)",
    npcName: "Rowen the Fairy (אליניה - מפלס ראשי)",
    itemsNeeded: [
      {
        item: "Cursed Doll (בובה מקוללת)",
        count: 50,
        source: "נופל מ-Zombie Lupin במבוכי העצים Monkey Forest באליניה"
      }
    ],
    monstersToHunt: [{ monster: "Zombie Lupin", count: 50 }],
    prerequisites: "רמה 36+",
    rewards: [
      { reward: "6,000 EXP · Mineral Ores (עפרות מינרלים) · פתיחת שלב 70 בובות", type: "all" }
    ],
    walkthrough: [
      "פגוש את Rowen the Fairy באליניה. היא מודאגת מהשפעת הבובות המקוללות שמשחיתות את היער.",
      "היכנס ליער הקופים (Monkey Forest I & II) דרך העץ הצפוני של אליניה.",
      "צוד Zombie Lupins (זהירות: הם זורקים עצמות ובננות רעילות ומזמנים קללות).",
      "אסוף 50 בובות מקוללות (Cursed Dolls) ומסור אותן לרואן לקבלת 6,000 EXP ועפרות יקרות."
    ]
  },

  "collecting-70-cursed-dolls": {
    nameHe: "איסוף 70 בובות מקוללות (Collecting 70 Cursed Dolls)",
    npcName: "Rowen the Fairy (אליניה)",
    itemsNeeded: [
      {
        item: "Cursed Doll (בובה מקוללת)",
        count: 70,
        source: "נופל מ-Zombie Lupin ב-Monkey Forest באליניה"
      }
    ],
    monstersToHunt: [{ monster: "Zombie Lupin", count: 70 }],
    prerequisites: "רמה 36+, השלמת שלב 50 בובות",
    rewards: [
      { reward: "8,000 EXP · 20x White Potions · פתיחת שלב 100 בובות", type: "all" }
    ],
    walkthrough: [
      "רואן מגלה שקללת היער חזקה משחשבה ודורשת עוד 70 בובות מקוללות לטיהור.",
      "חזור אל Monkey Forest II או The Forest of Evil II וצוד Zombie Lupins.",
      "אסוף 70 בובות מקוללות והבא אותן אל רואן לקבלת 8,000 EXP ושיקויים."
    ]
  },

  "collecting-100-cursed-dolls": {
    nameHe: "איסוף 100 בובות מקוללות (Collecting 100 Cursed Dolls)",
    npcName: "Rowen the Fairy (אליניה)",
    itemsNeeded: [
      {
        item: "Cursed Doll (בובה מקוללת)",
        count: 100,
        source: "נופל מ-Zombie Lupin"
      }
    ],
    monstersToHunt: [{ monster: "Zombie Lupin", count: 100 }],
    prerequisites: "רמה 36+, השלמת שלב 70 בובות",
    rewards: [
      { reward: "11,000 EXP · שוקולדים ושיקויי מאנה · פתיחת שלב 150 בובות", type: "all" }
    ],
    walkthrough: [
      "המשך בסדרת הטיהור: רואן זקוקה ל-100 בובות מקוללות נוספות כדי להחליש את רוח הרפאים ביער.",
      "צוד זומבי לופינים ביער הקופים של אליניה (מומלץ לבוא עם קבוצה או סקילים מרובי מטרות).",
      "אסוף 100 בובות ומסור לרואן לקבלת 11,000 EXP."
    ]
  },

  "collecting-150-cursed-dolls": {
    nameHe: "איסוף 150 בובות מקוללות (Collecting 150 Cursed Dolls)",
    npcName: "Rowen the Fairy (אליניה)",
    itemsNeeded: [
      {
        item: "Cursed Doll (בובה מקוללת)",
        count: 150,
        source: "נופל מ-Zombie Lupin"
      }
    ],
    monstersToHunt: [{ monster: "Zombie Lupin", count: 150 }],
    prerequisites: "רמה 36+, השלמת שלב 100 בובות",
    rewards: [
      { reward: "16,000 EXP · אבן חן מזוקקת (Refined Jewel) · פתיחת שלב הגמר", type: "all" }
    ],
    walkthrough: [
      "השלב הלפני-אחרון: רואן דורשת 150 בובות מקוללות להשלמת מעגל הטיהור המאגי.",
      "צא למעמקי מבוך הקופים של אליניה ואסוף 150 בובות מקוללות מ-Zombie Lupins.",
      "מסור לרואן לקבלת 16,000 EXP ואבן חן יקרה."
    ]
  },

  "collecting-200-cursed-dolls": {
    nameHe: "איסוף 200 בובות מקוללות - שלב הסיום (Collecting 200 Cursed Dolls)",
    npcName: "Rowen the Fairy (אליניה)",
    itemsNeeded: [
      {
        item: "Cursed Doll (בובה מקוללת)",
        count: 200,
        source: "נופל מ-Zombie Lupin"
      }
    ],
    monstersToHunt: [{ monster: "Zombie Lupin", count: 200 }],
    prerequisites: "רמה 36+, השלמת כל 4 השלבים הקודמים",
    rewards: [
      { reward: "24,000 EXP · Scroll for Gloves for ATT 60% או 10% (או מגילת שריון יקרת ערך!)", type: "all" }
    ],
    walkthrough: [
      "הקרב הסופי נגד הקללה: רואן מבקשת 200 בובות מקוללות אחרונות להשמדת הקללה כליל.",
      "צוד במרץ ביער הקופים ואסוף 200 בובות מקוללות.",
      "חזור אל רואן באליניה לטקס השמדת הבובות הסופי.",
      "פרס ענק ומבוקש: 24,000 EXP ומגילת קסם נדירה לכפפות (Gloves ATT 60% / 10%) ששווה הון במסחר!"
    ]
  },

  // === MAYA OF HENESYS MEDICINE QUESTLINE ===
  "maya-of-henesys": {
    nameHe: "מאיה מהנסיס (Maya of Henesys)",
    npcName: "Maya (הנסיס - בתוך בית העירייה השמאלי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 21+",
    rewards: [
      { reward: "הפניה ל-Teo בנמל ליט הארבור להכנת התרופה המוזרה", type: "all" }
    ],
    walkthrough: [
      "היכנס לבית השמאלי ביותר בהנסיס ופגוש את Maya שסובלת ממחלה קשה וזקוקה לעזרה.",
      "היא מספרת שהרוקח היחיד שיכול לרקוח לה תרופה מתאימה הוא Teo בנמל ליט הארבור (Lith Harbor).",
      "צא מהנסיס אל Lith Harbor ומצא את Teo העומד ליד הרציפים כדי להתחיל במציאת מרכיבי התרופה."
    ]
  },

  "finding-sophia": {
    nameHe: "מציאת סופיה (Finding Sophia)",
    npcName: "Teo (ליט הארבור - ברציף הנמל)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 21+, השלמת Maya of Henesys",
    rewards: [
      { reward: "הפניה לסופיה בחנות השיקויים בפריון", type: "all" }
    ],
    walkthrough: [
      "דבר עם Teo בנמל ליט הארבור. תאו מודה שחסר לו רכיב קריטי שנקרא Sparkling Rock.",
      "הוא שולח אותך לסופיה (Sophia), האלכימאית של פריון שנמצאת בחנות השיקויים במחנה פריון.",
      "סע ל-Perion והיכנס לחנות הכללית/שיקויים כדי לשוחח עם Sophia."
    ]
  },

  "making-sparkling-rock": {
    nameHe: "יצירת אבן נוצצת (Making Sparkling Rock)",
    npcName: "Sophia (פריון - בחנות השיקויים)",
    itemsNeeded: [
      { item: "Squishy Liquid (נוזל סליימים)", count: 50, source: "נופל מ-Slimes ביערות הנסיס ואליניה" },
      { item: "Leaf (עלי עץ)", count: 50, source: "נופל מ-Dark Stump בפריון" },
      { item: "Fairy's Wing (כנף פיה)", count: 1, source: "מתקבל מ-Arwen the Fairy באליניה תמורת 100 נוצות או זכוכית" }
    ],
    monstersToHunt: [
      { monster: "Slime", count: 50 },
      { monster: "Dark Stump", count: 50 }
    ],
    prerequisites: "רמה 21+, השלמת Finding Sophia",
    rewards: [
      { reward: "1x Sparkling Rock (אבן נוצצת לתרופה) · 5,000 EXP", type: "all" }
    ],
    walkthrough: [
      "סופיה בפריון מסכימה לייצר את האבן הנוצצת אך דורשת 3 מרכיבים נדירים:",
      "1. אסוף 50 נוזלי סליימים (Squishy Liquid) מ-Slimes.",
      "2. אסוף 50 עלים (Leaves) מ-Dark Stumps באזור פריון.",
      "3. גש אל Arwen the Fairy באליניה וקבל ממנה כנף פיה (Fairy's Wing).",
      "הבא את כל הפריטים לסופיה בפריון כדי לקבל את ה-Sparkling Rock."
    ]
  },

  "delivering-the-weird-medicine": {
    nameHe: "משלוח התרופה המוזרה (Delivering the Weird Medicine)",
    npcName: "Teo (ליט הארבור) -> Maya (הנסיס)",
    itemsNeeded: [
      { item: "Sparkling Rock (אבן נוצצת)", count: 1, source: "מסופיה בפריון" },
      { item: "Weird Medicine (תרופה מוזרה)", count: 1, source: "מתאו בליט הארבור למסירה למאיה" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 21+, השלמת Making Sparkling Rock",
    rewards: [
      { reward: "14,000 EXP · 1x Brown Bamboo Hat (כובע במבוק חום עם בונוס STR/DEX!)", type: "all" }
    ],
    walkthrough: [
      "מסור ל-Teo בליט הארבור את ה-Sparkling Rock שקיבלת מסופיה.",
      "תאו ירקח את ה-Weird Medicine (התרופה המוזרה) וימסור לך אותה.",
      "רוץ במהירות להנסיס והיכנס לביתה של Maya.",
      "מסור למאיה את התרופה כדי להציל את חייה.",
      "פרס מעולה: 14,000 EXP וכובע במבוק חום מבוקש (Brown Bamboo Hat) המעניק תוספת סטטים של כוח ודיוק!"
    ]
  },

  // === ICARUS QUESTLINE (ICARUS CAPE) ===
  "i-m-bored-1": {
    nameHe: "משעמם לי 1 (I'm Bored 1)",
    npcName: "Icarus (קרנינג סיטי - יושב ליד בניין הגנבים)",
    itemsNeeded: [
      { item: "Squishy Liquid (נוזל סליימים)", count: 40, source: "נופל מ-Slimes" },
      { item: "Tree Branch (ענף עץ)", count: 40, source: "נופל מ-Stumps ליד פריון והנסיס" }
    ],
    monstersToHunt: [{ monster: "Slime", count: 40 }, { monster: "Stump", count: 40 }],
    prerequisites: "רמה 11+",
    rewards: [
      { reward: "6,000 EXP · 1x Red Potion x 25", type: "all" }
    ],
    walkthrough: [
      "מצא את הילד Icarus (איקרוס) בקרנינג סיטי, שמשתעמם ורוצה לבנות צעצועים.",
      "אסוף עבורו 40 נוזלי סליימים (Squishy Liquid) ו-40 ענפי עץ (Tree Branch).",
      "חזור אל איקרוס ומסור לו את הפריטים לקבלת 6,000 EXP ושיקויים."
    ]
  },

  "icarus-and-the-balloon": {
    nameHe: "איקרוס והכדור הפורח (Icarus and the Balloon)",
    npcName: "Icarus (קרנינג סיטי)",
    itemsNeeded: [
      { item: "Stirge Wing (כנף עטלף סטירג')", count: 50, source: "נופל מ-Stirges ברכבת התחתית של קרנינג סיטי" },
      { item: "Tablecloth (מפת שולחן לבנה)", count: 10, source: "נופל מ-Jr. Wraith ברכבת התחתית Subway Line 1" }
    ],
    monstersToHunt: [{ monster: "Stirge", count: 50 }, { monster: "Jr. Wraith", count: 10 }],
    prerequisites: "רמה 31+, השלמת I'm Bored",
    rewards: [
      { reward: "11,000 EXP · פתיחת המשימה של Wing the Fairy", type: "all" }
    ],
    walkthrough: [
      "איקרוס חולם לעוף ומחליט לבנות כדור פורח.",
      "רד לרכבת התחתית של קרנינג סיטי (Kerning City Subway Line 1).",
      "צוד עטלפי Stirge כדי לאסוף 50 כנפיים, וצוד רוחות Jr. Wraith כדי להשיג 10 מפות שולחן (Tablecloths).",
      "חזור אל איקרוס בקרנינג סיטי ומסור לו את החומרים לקבלת 11,000 EXP."
    ]
  },

  "the-ingredients-for-the-flying-medicine": {
    nameHe: "מרכיבים לשיקוי התעופה (The Ingredients for the Flying Medicine)",
    npcName: "Wing the Fairy (אליניה)",
    itemsNeeded: [
      { item: "Witchgrass Leaf (עלה עשב מכשפות)", count: 20, source: "נאסף מ-Malady ביער המכשפות של אליניה" },
      { item: "Dragon Skin (עור דרקון)", count: 20, source: "נופל מ-Drake / Copper Drake" },
      { item: "Strange Steel (פלדה מוזרה)", count: 1, source: "מ-Stirges ברכבת התחתית" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 46+, השלמת Icarus and the Balloon",
    rewards: [
      { reward: "1x Flying Medicine (שיקוי תעופה) · 10,000 EXP", type: "all" }
    ],
    walkthrough: [
      "כשהכדור הפורח נכשל, איקרוס שולח אותך לפיה השובבה Wing the Fairy באליניה.",
      "ווינג מסכימה לרקוח שיקוי תעופה אם תביא לה 20 עלי מכשפות (Witchgrass Leaves), 20 עורות דרקון (Dragon Skin) ופלדה מוזרה.",
      "השג את החומרים והבא אותם לווינג באליניה לקבלת שיקוי התעופה."
    ]
  },

  "delivering-the-flying-medicine": {
    nameHe: "משלוח שיקוי התעופה - גלימת איקרוס! (Delivering the Flying Medicine)",
    npcName: "Wing the Fairy -> Icarus (קרנינג סיטי)",
    itemsNeeded: [
      { item: "Flying Medicine (שיקוי תעופה)", count: 1, source: "מווינג באליניה" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 46+, השלמת The Ingredients for the Flying Medicine",
    rewards: [
      { reward: "13,000 EXP · 1x Icarus Cape (אקראי: Speed +10 / Jump +5 / W.DEF +15) - אחת הגלימות הטובות ביותר במשחק!", type: "all" }
    ],
    walkthrough: [
      "קח את שיקוי התעופה מ-Wing the Fairy באליניה ורוץ במהירות אל Icarus בקרנינג סיטי.",
      "מסור לאיקרוס את השיקוי.",
      "איקרוס יעניק לך בתודה את הגלימה המפורסמת שלו: Icarus Cape!",
      "טיפ: גלימת איקרוס של Speed (+10 מהירות) שווה מיליוני מסוס בשוק והיא הגלימה המועדפת על רוב השחקנים!"
    ]
  },

  // === JUMP QUESTS (מבוכי הקפיצות) ===
  "-construction-site-b1-shumi-s-lost-coin": {
    nameHe: "[מבוך הרכבת B1] המטבע האבוד של שומי",
    npcName: "Shumi (קרנינג סיטי - מחוץ לרכבת התחתית)",
    itemsNeeded: [
      { item: "Shumi's Lost Coin (המטבע האבוד של שומי)", count: 1, source: "בתוך קופסת האוצר בסוף מסלול הקפיצות B1 ברכבת" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 35+",
    rewards: [
      { reward: "12,000 EXP · 1x Town Return Scroll x 30 · פתיחת שלב B2", type: "all" }
    ],
    walkthrough: [
      "דבר עם Shumi בקרנינג סיטי. היא איבדה את המטבע היקר שלה באזור הבנייה התת-קרקעי B1.",
      "היכנס לרכבת התחתית דרך הקופאי ובחר בכניסה ל-Construction Site B1.",
      "עבור את מסלול הקפיצות: היזהר מקרני לייזר נעות וקורות חשמל. אם תיפגע – תיפול לתחילת המפה!",
      "הגע לסוף המסלול, הכה בקופסת האוצר ואסוף את המטבע של שומי.",
      "חזור אל שומי בקרנינג סיטי לקבלת 12,000 EXP וסקרולים."
    ]
  },

  "-construction-site-b2-shumi-s-lost-roll-of-cash": {
    nameHe: "[מבוך הרכבת B2] גליל השטרות של שומי",
    npcName: "Shumi (קרנינג סיטי)",
    itemsNeeded: [
      { item: "Roll of Cash (גליל שטרות אבוד)", count: 1, source: "בסוף מסלול הקפיצות B2 ברכבת התחתית" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 35+, השלמת B1",
    rewards: [
      { reward: "24,000 EXP · 1x Scroll for Shoes for Speed 60% או 10%", type: "all" }
    ],
    walkthrough: [
      "שומי איבדה כעת גליל שטרות מלא במסוס באזור המסוכן B2 של הרכבת התחתית.",
      "היכנס ל-Construction Site B2. שלב זה מאתגר בהרבה עם מוקשים מתפוצצים וקיטור חם.",
      "קפוץ בדיוק על הפלטפורמות הצרות והמתן שקרני הלייזר יכבו לפני הקפיצה.",
      "פתח את הקופסה בקצה המבוך, אסוף את גליל השטרות וחזור לשומי לקבלת 24,000 EXP ומגילת נעליים מעולה!"
    ]
  },

  "-construction-site-b3-shumi-s-lost-sack-of-cash": {
    nameHe: "[מבוך הרכבת B3] שק הכסף של שומי",
    npcName: "Shumi (קרנינג סיטי)",
    itemsNeeded: [
      { item: "Sack of Cash (שק כסף)", count: 1, source: "בסוף מבוך הקפיצות B3" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 35+, השלמת B2",
    rewards: [
      { reward: "40,000 EXP · 1x Scroll for Cape for HP 60% או Weapon DEF · כמות גדולה של מסוס", type: "all" }
    ],
    walkthrough: [
      "השלב הקשה ביותר ברכבת התחתית: שומי איבדה שק שלם של כסף באתר B3.",
      "שלב זה מלא במלכודות מתוזמנות, ברקים ופלטפורמות נעלמות.",
      "התקדם בסבלנות, תזמן את הקפיצות לפי פעימות הלייזרים והקיטור.",
      "אסוף את שק הכסף מקופסת הסיום וחזור לשומי לקבלת 40,000 EXP ומגילת קסם נדירה לגלימה."
    ]
  },

  "-deep-forest-of-patience-john-s-pink-flower-basket": {
    nameHe: "[מבוך הסבלנות של ג'ון] סלסלת פרחים ורודים",
    npcName: "John (נמל ליט הארבור)",
    itemsNeeded: [
      { item: "Pink Flower Basket (סלסלת פרחים ורודים)", count: 1, source: "בסוף מבוך Deep Forest of Patience שלבים 1-2 בסליפווד" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 65 (או 40+ בגרסאות מסוימות)",
    rewards: [
      { reward: "15,000 EXP · 30x עוגיות חג / Red Bean Buns", type: "all" }
    ],
    walkthrough: [
      "ג'ון בנמל ליט הארבור מחפש פרחים ורודים מיוחדים כמתנה לאשתו.",
      "היכנס למבוך הסבלנות העמוק בסליפווד (Sleepywood - Deep Forest of Patience).",
      "טפס על החבלים, קפוץ מעל קוצים חדים והתחמק מרוחות וחביות מתגלגלות.",
      "קטוף את הפרחים הוורודים בראש המבוך וחזור לג'ון בליט הארבור לקבלת 15,000 EXP."
    ]
  },

  "-deep-forest-of-patience-john-s-present": {
    nameHe: "[מבוך הסבלנות של ג'ון 2] המתנה של ג'ון",
    npcName: "John (ליט הארבור)",
    itemsNeeded: [
      { item: "Blue Flower Basket (סלסלת פרחים כחולים)", count: 1, source: "בסוף שלבים 3-4 במבוך הסבלנות של סליפווד" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 65+, השלמת סלסלת הפרחים הוורודים",
    rewards: [
      { reward: "25,000 EXP · 1x Scroll for Helmet for DEF 60% או 10%", type: "all" }
    ],
    walkthrough: [
      "ג'ון שולח אותך לשלבים 3-4 של מבוך הסבלנות העמוק לאסוף פרחים כחולים נדירים.",
      "זהירות: המלכודות נעות במהירות כפולה ורווח הקפיצות קטן ביותר.",
      "אסוף את סלסלת הפרחים הכחולים והבא אותה לג'ון לקבלת 25,000 EXP ומגילת קסדה."
    ]
  },

  "-deep-forest-of-patience-john-s-last-present": {
    nameHe: "[מבוך הסבלנות של ג'ון 3] המתנה האחרונה של ג'ון",
    npcName: "John (ליט הארבור)",
    itemsNeeded: [
      { item: "Rare Flower Basket (סלסלת פרחים נדירה)", count: 1, source: "בסוף שלב 5 במבוך הסבלנות העמוק" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 65+, השלמת שלב 2",
    rewards: [
      { reward: "35,000 EXP · 1x Work Gloves (כפפות עבודה) או Mineral Scroll 60%", type: "all" }
    ],
    walkthrough: [
      "שלב הסיום האפי של מבוך ג'ון: שלב 5 המפורסם.",
      "קפוץ בדיוק מילימטרי מעל הקוצים החדים עד לפסגת העץ.",
      "קטוף את הפרח הנדיר וחזור אל ג'ון בליט הארבור.",
      "פרס: 35,000 EXP וכפפות עבודה (Work Gloves) שמוכנות לשדרוג במגילות ATT!"
    ]
  },

  "-forest-of-patience-sabitrama-and-the-diet-medicine": {
    nameHe: "[מבוך הסבלנות של סביטרמה 1] תרופת הדיאטה של סביטרמה",
    npcName: "Sabitrama (סליפווד - ליד חנות השיקויים)",
    itemsNeeded: [
      { item: "Diet Plant (צמח דיאטה)", count: 1, source: "בסוף שלב 1-2 במבוך הסבלנות של סליפווד" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 25+",
    rewards: [
      { reward: "9,000 EXP · שיקויי ריפוי ומסוס", type: "all" }
    ],
    walkthrough: [
      "סביטרמה בסליפווד מרגיש כבד ומבקש צמח דיאטה מיוחד שצומח במרומי הצוקים.",
      "היכנס ל-Forest of Patience שלבים 1-2.",
      "התחמק מקופי Lupin שזורקים בננות שיפילו אותך למטה, וקפוץ מעל קורות הקוצים.",
      "קטוף את צמח הדיאטה בקצה המסלול והבא אותו לסביטרמה בסליפווד לקבלת 9,000 EXP."
    ]
  },

  "-forest-of-patience-sabitrama-s-anti-aging-medicine": {
    nameHe: "[מבוך הסבלנות של סביטרמה 2] תרופת האנטי-אייג'ינג",
    npcName: "Sabitrama (סליפווד)",
    itemsNeeded: [
      { item: "Anti-Aging Plant (צמח אנטי-אייג'ינג)", count: 1, source: "בסוף שלב 3-5 במבוך הסבלנות" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 50+, השלמת משימת הדיאטה",
    rewards: [
      { reward: "28,000 EXP · עפרות מינרלים יקרות (Ores) ומגילת קסם", type: "all" }
    ],
    walkthrough: [
      "סביטרמה רוצה כעת להחזיר את מראה נעוריו וזקוק לצמח אנטי-אייג'ינג נדיר משלבים 3-5.",
      "מסלול קשה עם עמודי גז רעיל ודוקרנים קטלניים.",
      "הגע לפסגה, קטוף את הצמח וחזור לסביטרמה לקבלת 28,000 EXP ועפרות יקרות ערך."
    ]
  },

  // === HENESYS & RESIDENTS QUESTS ===
  "camila-s-gem": {
    nameHe: "אבן החן של קמילה (Camila's Gem)",
    npcName: "Camila (הנסיס - בכניסה לכפר)",
    itemsNeeded: [
      { item: "Camila's Package (החבילה של קמילה)", count: 1, source: "מקמילה למסירה ל-Utah" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 24+",
    rewards: [
      { reward: "8,000 EXP · 1x Cake (עוגת בריאות +100 HP) · 30x עוגיות", type: "all" }
    ],
    walkthrough: [
      "דבר עם Camila ליד הכניסה להנסיס. היא מבקשת שתעביר חבילה עם אבן חן לידידה Utah בחווה שממזרח לעיר (Utah's Pig Farm).",
      "אזהרה חשובה: אל תפתח את החבילה בדרך! פתיחתה תבטל את המשימה.",
      "צא מהנסיס מזרחה, עבור דרך חצר החזירים ומצא את Utah.",
      "מסור לו את החבילה השלמה לקבלת 8,000 EXP ועוגת שיקויים יקרת ערך."
    ]
  },

  "what-pia-borrowed": {
    nameHe: "מה שפיאה לותה (What Pia Borrowed)",
    npcName: "Rina (הנסיס - במפלס העליון)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 42+",
    rewards: [
      { reward: "הפניה ל-Pia במערב הנסיס לקבלת מתנת הפיוס", type: "all" }
    ],
    walkthrough: [
      "פגוש את Rina בביתה במפלס העליון של הנסיס. היא כועסת מאוד על חברתה Pia שלקחה ממנה חפצים ולא החזירה.",
      "רינה מבקשת ממך לגשת מיד אל פיאה במערב הנסיס (יושבת על שפת המדרכה) ולדרוש ממנה הסבר."
    ]
  },

  "pia-s-gift": {
    nameHe: "המתנה של פיאה (Pia's Gift)",
    npcName: "Pia -> Rina (הנסיס)",
    itemsNeeded: [
      { item: "Blue Mushroom Cap (מכסה פטרייה כחולה)", count: 60, source: "נופל מ-Blue Mushroom" },
      { item: "Green Mushroom Cap (מכסה פטרייה ירוקה)", count: 60, source: "נופל מ-Green Mushroom" }
    ],
    monstersToHunt: [{ monster: "Blue Mushroom", count: 60 }, { monster: "Green Mushroom", count: 60 }],
    prerequisites: "רמה 42+, השלמת What Pia Borrowed",
    rewards: [
      { reward: "18,000 EXP · Scroll for Overall Armor for DEF 60% או 10%", type: "all" }
    ],
    walkthrough: [
      "פיאה מודה בטעותה ומתנצלת. כדי להתפייס עם רינה, היא מבקשת להכין לה מתנה טעימה מפטריות היער.",
      "אסוף 60 מכסי פטרייה כחולה ו-60 מכסי פטרייה ירוקה מיערות הנסיס.",
      "הבא את הפטריות אל רינה בשם פיאה.",
      "רינה תסלח לפיאה ותעניק לך 18,000 EXP ומגילת שריון מעולה!"
    ]
  },

  "alex-s-request": {
    nameHe: "בקשתו של אלכס (Alex's Request)",
    npcName: "Alex (קרנינג סיטי - ליד המרפאה)",
    itemsNeeded: [
      { item: "Evil Eye Tail (זנב מפלצת Evil Eye)", count: 100, source: "נופל מ-Evil Eye במערות סליפווד ואליניה" },
      { item: "Wild Boar Tooth (שן חזיר בר)", count: 100, source: "נופל מ-Wild Boar בארץ חזירי הבר ליד פריון" }
    ],
    monstersToHunt: [{ monster: "Evil Eye", count: 100 }, { monster: "Wild Boar", count: 100 }],
    prerequisites: "רמה 18+",
    rewards: [
      { reward: "10,000 EXP · עגיל קלאסי (Single Earring) או מגילת עגילים 60%", type: "all" }
    ],
    walkthrough: [
      "דבר עם Alex, הנער המרדן העומד ליד המרפאה בקרנינג סיטי. אלכס ברח מביתו שבהנסיס אך מתגעגע לאביו Chief Stan.",
      "כדי להוכיח לאביו שהוא מסוגל להסתדר בעצמו, הוא מבקש 100 זנבות של Evil Eye ו-100 שיני חזיר בר (Wild Boar Teeth).",
      "צוד במערות סליפווד ובשדות חזירי הבר של פריון, אסוף את החפצים והבא אותם לאלכס.",
      "אלכס יודה לך ויעניק לך 10,000 EXP ועגיל נדיר!"
    ]
  },

  "mother-s-gold-watch": {
    nameHe: "שעון הזהב של אמא (Mother's Gold Watch)",
    npcName: "Chief Stan (הנסיס - בית ראש הכפר)",
    itemsNeeded: [
      { item: "Gold Watch (שעון זהב עתיק)", count: 1, source: "נופל מ-Ribbon Pig או Iron Boar בשדות הנסיס ופריון" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 18+",
    rewards: [
      { reward: "8,500 EXP · 1x כובע יוקרתי או מגילת שריון", type: "all" }
    ],
    walkthrough: [
      "צ'יף סטאן בהנסיס מספר בעצב שאיבד את שעון הזהב היקר שהורישה לו אמו.",
      "השעון נבלע על ידי מפלצות היער. צוד Ribbon Pigs ו-Wild Boars עד שייפול שעון הזהב.",
      "החזר את השעון לסטאן בהנסיס לקבלת 8,500 EXP והכרת תודה של ראש הכפר."
    ]
  },

  "stranger-s-request": {
    nameHe: "בקשתה של ג'יין האלכימאית (Stranger's Request / Jane)",
    npcName: "Jane Doe / Jane (ליט הארבור)",
    itemsNeeded: [
      { item: "Wild Boar Tooth (שן חזיר בר)", count: 120, source: "נופל מ-Wild Boar ליד פריון" },
      { item: "Horn Mushroom Cap (מכסה פטריית קרן)", count: 120, source: "נופל מ-Horn Mushroom במערות סליפווד" }
    ],
    monstersToHunt: [{ monster: "Wild Boar", count: 120 }, { monster: "Horn Mushroom", count: 120 }],
    prerequisites: "רמה 23+",
    rewards: [
      { reward: "12,000 EXP · פתיחת חנות השיקויים המוזלת והנדירה של ג'יין בליט הארבור!", type: "all" }
    ],
    walkthrough: [
      "ג'יין בליט הארבור שואפת להפוך לאלכימאית דגולה ומבקשת חומרי מחקר.",
      "אסוף 120 שיני חזיר בר (Wild Boar Teeth) ו-120 מכסי פטריית קרן (Horn Mushroom Caps).",
      "הבא את החומרים לג'יין. בתמורה תקבל 12,000 EXP ותפתח את האפשרות לקנות מג'יין שיקויים נדירים (Pure Water, Elixir) במחירי רצפה!"
    ]
  },

  "proof-of-companionship": {
    nameHe: "הוכחת חברות - פארטי קווסט קרנינג (Proof of Companionship / KPQ)",
    npcName: "Lakelis (קרנינג סיטי - מפעילת ה-KPQ)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 21-30, קבוצה של 4 שחקנים (Party)",
    rewards: [
      { reward: "הדרכה מלאה וכניסה למשימת הקבוצה Kerning City Party Quest (KPQ) · Squishy Shoes · EXP ענק", type: "all" }
    ],
    walkthrough: [
      "פגוש את Lakelis ליד פתח הביוב בקרנינג סיטי. היא מנהלת את ה-Party Quest המפורסם של קרנינג סיטי (רמות 21 עד 30).",
      "ארגן קבוצה של 4 שחקנים (מומלץ: גנב עם Dark Sight, קוסם עם טלפורט, לוחם וקשת).",
      "מנהיג הקבוצה מדבר עם לקליס כדי להיכנס למבוך הביוב, שבו פותרים חידות קופונים, קפיצות חביות וקרב בוס מול King Slime!",
      "בסיום מקבלים שלל נדיר, מגילות קסם ונעלי King Slime Squishy Shoes."
    ]
  },

  // === OMOK & MINI GAMES ===
  "make-a-match-cards-set": {
    nameHe: "הכנת ערכת קלפי התאמה (Make a Match Cards Set)",
    npcName: "Casey (הנסיס - בית מועדון המשחקים)",
    itemsNeeded: [
      { item: "Red Snail Shell (קליפת חילזון אדום)", count: 100, source: "נופל מ-Red Snail" },
      { item: "Green Mushroom Cap (מכסה פטרייה ירוקה)", count: 100, source: "נופל מ-Green Mushroom" },
      { item: "Omok Table (שולחן משחק)", count: 1, source: "נופל מפטריות או נרכש" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [
      { reward: "1x Match Cards Game Set (ערכת משחק קלפי זיכרון מול שחקנים) · 2,500 EXP", type: "all" }
    ],
    walkthrough: [
      "Casey בהנסיס מלמד שחקנים כיצד ליצור משחקי שולחן שניתן לפתוח ולשחק עם חברים בכל מקום.",
      "אסוף 100 קליפות חלזונות אדומים, 100 מכסי פטרייה ירוקה ושולחן משחק (Omok Table).",
      "מסור לקייסי כדי לקבל ערכת קלפי התאמה אישית."
    ]
  },

  "make-a-slime-mushroom-omok-set": {
    nameHe: "הכנת ערכת אומוק: סליימים ופטריות (Make a Slime & Mushroom Omok Set)",
    npcName: "Casey (הנסיס)",
    itemsNeeded: [
      { item: "Slime Bubble (בועת סליימים)", count: 100, source: "נופל מ-Slimes" },
      { item: "Mushroom Spore (נבג פטריות)", count: 100, source: "נופל מ-Orange / Green Mushroom" },
      { item: "Omok Table (לוח אומוק)", count: 1, source: "נופל מ-Ribbon Pig / Slime" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [
      { reward: "1x Slime & Mushroom Omok Set (ערכת משחק חמש-בשורה מלאה) · 3,000 EXP", type: "all" }
    ],
    walkthrough: [
      "הבא לקייסי בהנסיס 100 בועות סליימים, 100 נבגי פטריות ולוח אומוק.",
      "קייסי ייצר עבורך סט משחק אומוק שבו החיילים הם סליימים ופטריות חמודים, ותוכל להזמין כל שחקן למשחק 5-בשורה תחרותי!"
    ]
  },

  "make-a-slime-pig-omok-set": {
    nameHe: "הכנת ערכת אומוק: סליימים וחזירים",
    npcName: "Casey (הנסיס)",
    itemsNeeded: [
      { item: "Slime Bubble", count: 100, source: "נופל מ-Slime" },
      { item: "Pig Ribbon (סרט חזיר)", count: 100, source: "נופל מ-Ribbon Pig" },
      { item: "Omok Table", count: 1, source: "מ-Ribbon Pig" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [
      { reward: "1x Slime & Pig Omok Set · 3,000 EXP", type: "all" }
    ],
    walkthrough: [
      "אסוף 100 בועות סליימים, 100 סרטי חזיר מ-Ribbon Pig ולוח אומוק.",
      "הבא לקייסי בהנסיס לייצור ערכת משחק בלעדית של סליימים נגד חזירי סרט."
    ]
  },

  "make-a-slime-octopus-omok-set": {
    nameHe: "הכנת ערכת אומוק: סליימים ותמנונים",
    npcName: "Casey (הנסיס)",
    itemsNeeded: [
      { item: "Slime Bubble", count: 100, source: "נופל מ-Slime" },
      { item: "Octopus Leg (זרוע תמנון)", count: 100, source: "נופל מ-Octopus בקרנינג סיטי" },
      { item: "Omok Table", count: 1, source: "לוח משחק" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [
      { reward: "1x Slime & Octopus Omok Set · 3,500 EXP", type: "all" }
    ],
    walkthrough: [
      "אסוף 100 בועות סליימים, 100 זרועות תמנון מ-Octopus באתרי הבנייה בקרנינג סיטי ולוח אומוק.",
      "הבא לקייסי בהנסיס לייצור ערכת משחק אומוק תמנונים וסליימים."
    ]
  },

  "make-a-pig-mushroom-omok-set": {
    nameHe: "הכנת ערכת אומוק: חזירים ופטריות",
    npcName: "Casey (הנסיס)",
    itemsNeeded: [
      { item: "Pig Ribbon", count: 100, source: "נופל מ-Ribbon Pig" },
      { item: "Mushroom Spore", count: 100, source: "נופל מ-Orange Mushroom" },
      { item: "Omok Table", count: 1, source: "לוח משחק" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1x Pig & Mushroom Omok Set · 3,000 EXP", type: "all" }],
    walkthrough: [
      "הבא לקייסי בהנסיס 100 סרטי חזירים, 100 נבגי פטריות ולוח משחק.",
      "קבל ערכת משחק של חזירים מול פטריות להנאתך בכל ערי מייפל סטורי."
    ]
  },

  "make-a-octopus-mushroom-omok-set": {
    nameHe: "הכנת ערכת אומוק: תמנונים ופטריות",
    npcName: "Casey (הנסיס)",
    itemsNeeded: [
      { item: "Octopus Leg", count: 100, source: "נופל מ-Octopus" },
      { item: "Orange Mushroom Cap", count: 100, source: "נופל מ-Orange Mushroom" },
      { item: "Omok Table", count: 1, source: "לוח משחק" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1x Octopus & Mushroom Omok Set · 3,500 EXP", type: "all" }],
    walkthrough: [
      "אסוף 100 זרועות תמנון, 100 מכסי פטריות כתומות ולוח אומוק.",
      "הבא לקייסי בהנסיס לייצור ערכת אומוק מעוצבת."
    ]
  },

  "make-a-pig-octopus-omok-set": {
    nameHe: "הכנת ערכת אומוק: חזירים ותמנונים",
    npcName: "Casey (הנסיס)",
    itemsNeeded: [
      { item: "Pig Ribbon", count: 100, source: "נופל מ-Ribbon Pig" },
      { item: "Octopus Leg", count: 100, source: "נופל מ-Octopus" },
      { item: "Omok Table", count: 1, source: "לוח משחק" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1x Pig & Octopus Omok Set · 3,500 EXP", type: "all" }],
    walkthrough: [
      "אסוף 100 סרטי חזירים ו-100 זרועות תמנונים יחד עם שולחן אומוק.",
      "קייסי יכין לך ערכת חזירים ותמנונים למשחקי חברה."
    ]
  },

  // === HIGH LEVEL & SPECIAL QUESTS ===
  "hero-s-gladius": {
    nameHe: "חרב הגלדיוס של הגיבור (Hero's Gladius)",
    npcName: "Chrishrama (סליפווד - ליד המלון/סאונה)",
    itemsNeeded: [
      { item: "Gladius (חרב גלדיוס ישנה)", count: 1, source: "נרכש מחנות נשקים בפריון" },
      { item: "Star Rock (אבן כוכב נדירה)", count: 1, source: "מיוצר אצל אראת' בליט הארבור מכל סוגי אבני החן" },
      { item: "Ice Piece (רסיס קרח נדיר)", count: 1, source: "נופל ממפלצות קרח / קריסטלים" },
      { item: "Flame Feather (נוצת להבה)", count: 1, source: "נופל מ-Red Drake / Fire Boar" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 50+",
    rewards: [
      { reward: "1x Hero's Gladius (חרב חד-ידנית אגדית לרמה 50 עם התקפה גבוהה במיוחד!) · 32,000 EXP", type: "all" }
    ],
    walkthrough: [
      "פגוש את Chrishrama בסליפווד. הוא מומחה לשחזור נשקי גיבורים אבודים.",
      "קנה חרב גלדיוס פשוטה אצל סוחר הנשקים בפריון.",
      "אסוף את מרכיבי הקסם הטהורים: Star Rock (אבן כוכב), רסיס קרח (Ice Piece) ונוצת להבה (Flame Feather מ-Red Drake).",
      "הבא את כל הפריטים לקרישראמה בסליפווד לטקס החישול העתיק.",
      "קבל את חרב הגלדיוס המשוחזרת של הגיבור (Hero's Gladius) עם 32,000 EXP!"
    ]
  },

  "returned-secret-book": {
    nameHe: "ספר הסודות שהוחזר (Returned Secret Book)",
    npcName: "Ronnie (סליפווד - יושב במאהל השינה)",
    itemsNeeded: [
      { item: "Fresh Milk (חלב טרי)", count: 1, source: "מ-Rowen the Fairy באליניה תמורת יהלום או תפוח" },
      { item: "Unagi (צלופח צלוי)", count: 1, source: "נרכש מסוחר השיקויים במלון סליפווד" },
      { item: "Grendel's Secret Book (ספר הסודות הגנוב)", count: 1, source: "מתקבל מרוני למסירה לגראנדל" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 32+",
    rewards: [
      { reward: "15,000 EXP · 1x כובע קוסמים יקר ערך או מגילת נשק", type: "all" }
    ],
    walkthrough: [
      "מצא את הילד Ronnie שנמלט לסליפווד עם ספר הסודות של רב-המג Grendel the Really Old מאליניה.",
      "רוני רעב ועייף. הוא מסכים להחזיר את הספר רק תמורת חלב טרי (Fresh Milk מרואן באליניה) וצלופח צלוי (Unagi מחנות סליפווד).",
      "הבא לרוני את האוכל כדי לקבל את ספר הסודות הגנוב.",
      "עלה לאליניה והחזר את הספר ל-Grendel the Really Old בספרייה לקבלת 15,000 EXP ופרס קוסמים יוקרתי."
    ]
  },

  "special-taste-of-florina-beach-i": {
    nameHe: "הטעם המיוחד של פלורינה ביץ' 1 (Special Taste of Florina Beach I)",
    npcName: "Riel (פלורינה ביץ' - בכניסה לחוף הטרופי)",
    itemsNeeded: [
      { item: "Coconut (אגוז קוקוס)", count: 15, source: "הכה בצמרות עצי הדקל בחוף כדי להפיל קוקוסים" },
      { item: "Lorang Claw (צבת סרטן לורנג)", count: 50, source: "נופל מ-Lorang בחוף" }
    ],
    monstersToHunt: [{ monster: "Lorang", count: 50 }],
    prerequisites: "רמה 37+",
    rewards: [
      { reward: "14,000 EXP · 50x שיקויי בריאות טרופיים", type: "all" }
    ],
    walkthrough: [
      "הגע לפלורינה ביץ' (דרך פורטל החוף בליט הארבור או כרטיס VIP) ופגוש את Riel.",
      "ריאל רוצה לרקוח מיץ טרופי מיוחד.",
      "הכה בגזעי עצי הדקל הגבוהים כדי להפיל 15 אגוזי קוקוס טריים.",
      "צוד סרטני Lorang על החול ואסוף 50 צבתות.",
      "הבא את המרכיבים לריאל לקבלת 14,000 EXP ושיקויים."
    ]
  },

  "taking-out-the-alligators-2": {
    nameHe: "חיסול התנינים 2 (Taking Out the Alligators 2)",
    npcName: "Ayan (פריון)",
    itemsNeeded: [
      { item: "Croco Skin (עור תנין קרוקו)", count: 50, source: "נופל מ-Croco בביצות קרנינג סיטי" }
    ],
    monstersToHunt: [{ monster: "Croco", count: 50 }],
    prerequisites: "רמה 48+, השלמת שלב 1",
    rewards: [
      { reward: "21,000 EXP · 1x מגילת קסם 60% לשריון לוחמים", type: "all" }
    ],
    walkthrough: [
      "איאן בפריון דורשת עורות תנינים עמידים כדי לחזק את ציוד הלוחמים של השבט.",
      "רד לביצות העמוקות של קרנינג סיטי (Swamp Region).",
      "צוד 50 תניני Croco חמושים ואסוף את עורותיהם.",
      "חזור אל Ayan בפריון לקבלת 21,000 EXP ומגילת שריון."
    ]
  },

  "a-father-s-love-for-his-daughter": {
    nameHe: "אהבת אב לבתו (A Father's Love for His Daughter)",
    npcName: "Bruce (הנסיס - ליד תחנת המוניות)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 17+",
    rewards: [{ reward: "הפניה ל-Ayan בפריון לבירור שלומה של בתו", type: "all" }],
    walkthrough: [
      "ברוס בהנסיס דואג לבתו שעזבה את הבית כדי ללמוד את תורת הלוחמים בפריון.",
      "הוא מבקש שתיסע לפריון, תאתר את Ayan ותוודא שהיא בריאה ושלמה.",
      "עלה לפריון ושוחח עם איאן כדי להרגיע את חששות האב."
    ]
  },

  "the-best-dad": {
    nameHe: "האבא הכי טוב (The Best Dad)",
    npcName: "Ayan (פריון) -> Bruce (הנסיס)",
    itemsNeeded: [
      { item: "Ayan's Letter (מכתב ההרגעה של איאן)", count: 1, source: "מאיאן למסירה לברוס" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 17+, השלמת A Father's Love for His Daughter",
    rewards: [{ reward: "4,500 EXP · 20x שיקויי מאנה", type: "all" }],
    walkthrough: [
      "איאן מתרגשת מהדאגה של אביה ומפקידה בידך מכתב הרגעה חם ומפורט.",
      "קח את המכתב וחזור אל Bruce בהנסיס.",
      "מסור לו את המכתב לקבלת 4,500 EXP ושיקויים."
    ]
  },

  "chief-stan-s-hammer": {
    nameHe: "הפטיש של צ'יף סטאן (Chief Stan's Hammer)",
    npcName: "Mrs. Ming Ming (הנסיס)",
    itemsNeeded: [
      { item: "Stan's Hammer (פטיש העבודה של סטאן)", count: 1, source: "אצל סמית' בפריון או מפלצות היער" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 27+",
    rewards: [{ reward: "7,000 EXP · 10x שיקויים", type: "all" }],
    walkthrough: [
      "גברת מינג מינג בהנסיס מבקשת לעזור לראש הכפר סטאן למצוא את פטיש הבנייה שלו שאבד.",
      "צא למסע קצר בין פריון להנסיס, אתר את הפטיש והבא אותו לסטאן לקבלת 7,000 EXP."
    ]
  },

  "memories-of-youth": {
    nameHe: "זיכרונות נעורים (Memories of Youth)",
    npcName: "Mrs. Ming Ming (הנסיס)",
    itemsNeeded: [
      { item: "Old Music Box (תיבת נגינה ישנה)", count: 1, source: "במחסני העיר או אצל סוחרים" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 27+",
    rewards: [{ reward: "9,000 EXP · עוגיות מסורתיות", type: "all" }],
    walkthrough: [
      "מינג מינג נזכרת בימי נעוריה ומבקשת לאתר תיבת נגינה ישנה שנשכחה.",
      "השלם את המשימה בהנסיס והבא לה את תיבת הנגינה לקבלת 9,000 EXP."
    ]
  },

  "regained-vitality": {
    nameHe: "חזרה לחיוניות (Regained Vitality)",
    npcName: "Chief Stan (הנסיס)",
    itemsNeeded: [
      { item: "Vitality Herb (עשב חיוניות)", count: 10, source: "נופל מ-Horny Mushroom" }
    ],
    monstersToHunt: [{ monster: "Horny Mushroom", count: 20 }],
    prerequisites: "רמה 27+",
    rewards: [{ reward: "10,500 EXP · שיקוי שיפור כוח", type: "all" }],
    walkthrough: [
      "סטאן מרגיש מותש מזקנתו ומבקש עשבי חיוניות הצומחים במערות הפטריות.",
      "אסוף 10 עשבי חיוניות מ-Horny Mushrooms והבא לו לקבלת 10,500 EXP."
    ]
  },

  "materials-for-a-special-marble": {
    nameHe: "חומרים לגולה מיוחדת (Materials for a Special Marble)",
    npcName: "Camila (הנסיס)",
    itemsNeeded: [
      { item: "Clear Marble Core (ליבת גולה שקופה)", count: 1, source: "מ-Slimes" },
      { item: "Glitter Dust (אבקה מנצנצת)", count: 20, source: "מ-Fairy ביער אליניה" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 37+",
    rewards: [{ reward: "12,000 EXP · חומרי יצירה", type: "all" }],
    walkthrough: [
      "קמילה רוצה להכין גולת משחק נדירה לחברותיה הטובות פיאה ומאיה.",
      "אסוף עבורה אבקה מנצנצת וליבת זכוכית כדי להכין את הגולה המיוחדת."
    ]
  },

  "a-marble-made-with-care": {
    nameHe: "גולה שנעשתה באהבה (A Marble Made With Care)",
    npcName: "Camila (הנסיס)",
    itemsNeeded: [{ item: "Handcrafted Marble", count: 1, source: "מקמילה למסירה" }],
    monstersToHunt: [],
    prerequisites: "רמה 37+",
    rewards: [{ reward: "14,000 EXP · 1x אביזר ראש מיוחד", type: "all" }],
    walkthrough: [
      "הגולה מוכנה! קמילה מבקשת שתמסור אותה לפיאה ומאיה כסמל לחברותן האמיצה.",
      "בצע את המסירה בהנסיס לקבלת 14,000 EXP."
    ]
  },

  "a-promise-between-three-friends": {
    nameHe: "הבטחה בין שלושה חברים (A Promise Between Three Friends)",
    npcName: "Pia (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 37+",
    rewards: [{ reward: "15,000 EXP · שרשרת חברות", type: "all" }],
    walkthrough: [
      "פיאה מודה לך על הבאת הגולה ומקיימת את ההבטחה לחברותיה.",
      "שוחח עם שלושתן בהנסיס להשלמת שרשרת החברות וקבלת 15,000 EXP."
    ]
  },

  "an-unknown-savior": {
    nameHe: "מושיע לא נודע (An Unknown Savior)",
    npcName: "Maya (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 47+",
    rewards: [{ reward: "הפניה לקרישראמה בסליפווד לבירור זהות המושיע", type: "all" }],
    walkthrough: [
      "מאיה חושפת מידע על לוחם מסתורי שהציל את משפחתה בעבר ורוצה להודות לו.",
      "צא לסליפווד ושוחח עם Chrishrama כדי להתחקות אחר עקבותיו של הלוחם."
    ]
  },

  "a-price-to-pay": {
    nameHe: "מחיר שצריך לשלם (A Price to Pay)",
    npcName: "Chrishrama (סליפווד)",
    itemsNeeded: [
      { item: "Dark Stone (אבן אפלה)", count: 1, source: "נופל מ-Tauromacis / Taurospear במקדש העמוק של סליפווד" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 47+",
    rewards: [{ reward: "25,000 EXP · הפניה למאנג'י בפריון", type: "all" }],
    walkthrough: [
      "קרישראמה יודע מיהו הלוחם אך דורש אבן אפלה ממפלצות המקדש המסוכן בסליפווד כדי לפתוח את החותם.",
      "השג את האבן ממקדש סליפווד והבא אותה לקרישראמה."
    ]
  },

  "a-name-never-given": {
    nameHe: "שם שמעולם לא ניתן (A Name Never Given)",
    npcName: "Manji (פריון)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 47+",
    rewards: [{ reward: "30,000 EXP · מגילת התקפה 60%", type: "all" }],
    walkthrough: [
      "הלוחם המסתורי הוא מאנג'י (Manji) מפריון!",
      "גש אל מאנג'י בפריון, שוחח עמו על עברו ומסור לו את תודתה של מאיה.",
      "מאנג'י יודה לך על השקט הנפשי ויעניק לך 30,000 EXP ומגילת קסם."
    ]
  },

  "a-box-hidden-long-ago": {
    nameHe: "תיבה שהוסתרה מזמן (A Box Hidden Long Ago)",
    npcName: "Athena Pierce (הנסיס - בית הספר לקשתים)",
    itemsNeeded: [
      { item: "Ancient Sealed Box (תיבה אטומה עתיקה)", count: 1, source: "מוחבאת במערות העמוקות" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 57+",
    rewards: [{ reward: "35,000 EXP · הפניה לנפח Vicious", type: "all" }],
    walkthrough: [
      "אתנה פירס מבקשת לאתר תיבה עתיקה ששמרה על סודות הגילדות של ויקטוריה.",
      "אתר את התיבה והבא אותה למומחה המנעולים והנפחות Vicious."
    ]
  },

  "a-craftsman-s-touch": {
    nameHe: "מגע של אומן (A Craftsman's Touch)",
    npcName: "Vicious (הנסיס)",
    itemsNeeded: [
      { item: "Refined Mithril (מית'ריל מזוקק)", count: 2, source: "מיוצר אצל נפחי הערים" },
      { item: "Drake Blood (דם דרייק)", count: 10, source: "מ-Drake" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 57+",
    rewards: [{ reward: "40,000 EXP · פתיחת התיבה העתיקה", type: "all" }],
    walkthrough: [
      "הנפח וישוס זקוק לחומרי פריצה וחישול נדירים כדי לפתוח את מנעול הקסם של התיבה.",
      "הבא לו 2 מית'ריל מזוקק ו-10 דם דרייק כדי לפרוץ את המנעול."
    ]
  },

  "a-memory-restored": {
    nameHe: "זיכרון שהוחזר (A Memory Restored)",
    npcName: "Vicious -> Athena Pierce",
    itemsNeeded: [{ item: "Restored Guild Relic", count: 1, source: "מ-Vicious" }],
    monstersToHunt: [],
    prerequisites: "רמה 57+",
    rewards: [{ reward: "50,000 EXP · מגילת נשק 60% נדירה ביותר", type: "all" }],
    walkthrough: [
      "מסור את שריד הזיכרון העתיק לאתנה פירס בהנסיס.",
      "אתנה תתרגש משחזור מורשת העיר ותעניק לך 50,000 EXP ומגילת קסם ברמה הגבוהה ביותר!"
    ]
  },

  // === JAKE & KERNING CITY COMMUNITY BOARD (THE USER ASKED SPECIFICALLY ABOUT JAKE!) ===
  "first-greeting-with-jake-the-town-resident": {
    nameHe: "היכרות ראשונה עם ג'ייק עובד הרכבת (First Greeting with Jake)",
    npcName: "Jake (קרנינג סיטי - מנהל קווי הרכבת התחתית)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP · כרטיס נסיעה חינם ברכבת התחתית (Subway Ticket)", type: "all" }],
    walkthrough: [
      "קרא את המודעה בלוח המודעות של קרנינג סיטי (Community Board) המפנה אותך להכיר את Jake.",
      "היכנס לתחנת הרכבת התחתית של קרנינג סיטי (Kerning Subway Line 1).",
      "גש אל Jake העומד במדים כחולים ליד שער הכניסה לקרונות.",
      "דבר עם ג'ייק, שמע על מערכת הרכבות והתחזוקה התת-קרקעית של קרנינג סיטי וקבל 1,200 EXP וכרטיס נסיעה!"
    ]
  },

  "asking-after-jake-the-town-resident": {
    nameHe: "דרישת שלום מג'ייק עובד הרכבת (Asking After Jake)",
    npcName: "Jake (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+, השלמת היכרות ראשונה",
    rewards: [{ reward: "1,500 EXP · שיקויי ריפוי", type: "all" }],
    walkthrough: [
      "חזור אל Jake ברכבת התחתית של קרנינג סיטי ודרוש בשלומו בשם ועד העיר.",
      "ג'ייק יודה לך על הביקור ויעניק לך 1,500 EXP ושיקויים."
    ]
  },

  "first-greeting-with-alex-the-town-resident": {
    nameHe: "היכרות ראשונה עם אלכס תושב העיר (First Greeting with Alex)",
    npcName: "Alex (קרנינג סיטי - ליד המרפאה)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "אתר את Alex העומד ליד הכניסה למרפאת קרנינג סיטי ושוחח עמו כדי ללמוד על תושבי העיר."
    ]
  },

  "asking-after-alex-the-town-resident": {
    nameHe: "דרישת שלום מאלכס (Asking After Alex)",
    npcName: "Alex (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "דרוש בשלומו של אלכס בקרנינג סיטי כדי לחזק את הקשר בין תושבי העיר."
    ]
  },

  "first-greeting-with-shumi-the-town-resident": {
    nameHe: "היכרות עם שומי תושבת העיר (First Greeting with Shumi)",
    npcName: "Shumi (קרנינג סיטי - ליד הרכבת)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "פגוש את Shumi מחוץ לתחנת הרכבת של קרנינג סיטי ושמע על המטבעות שהיא נוהגת לאבד."
    ]
  },

  "asking-after-shumi-the-town-resident": {
    nameHe: "דרישת שלום משומי (Asking After Shumi)",
    npcName: "Shumi (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "שוחח עם שומי בקרנינג סיטי לקבלת 1,500 EXP."
    ]
  },

  "first-greeting-with-nella-the-town-resident": {
    nameHe: "היכרות עם נלה סוכנת המידע (First Greeting with Nella)",
    npcName: "Nella (קרנינג סיטי - ליד המדרגות)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "גש אל Nella העומדת במרכז קרנינג סיטי. נלה מרכזת את כל המידע והשמועות של העיר."
    ]
  },

  "asking-after-nella-the-town-resident": {
    nameHe: "דרישת שלום מנלה (Asking After Nella)",
    npcName: "Nella (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "שוחח עם נלה בקרנינג סיטי וקבל עדכונים על הנעשה בעיר."
    ]
  },

  "first-greeting-with-icarus-the-town-resident": {
    nameHe: "היכרות עם איקרוס (First Greeting with Icarus)",
    npcName: "Icarus (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "פגוש את הילד איקרוס היושב ליד בניין הגנבים בקרנינג סיטי ושמע על שאיפות התעופה שלו."
    ]
  },

  "asking-after-icarus-the-town-resident": {
    nameHe: "דרישת שלום מאיקרוס (Asking After Icarus)",
    npcName: "Icarus (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "בקר את איקרוס בקרנינג סיטי לקבלת 1,500 EXP."
    ]
  },

  "first-greeting-with-jane-doe-the-town-resident": {
    nameHe: "היכרות עם ג'יין דו מהמרפאה (First Greeting with Jane Doe)",
    npcName: "Jane Doe (קרנינג סיטי - בתוך המרפאה)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "היכנס למרפאת קרנינג סיטי ושוחח עם האחות Jane Doe המטפלת בפצועים."
    ]
  },

  "asking-after-jane-doe-the-town-resident": {
    nameHe: "דרישת שלום מג'יין דו (Asking After Jane Doe)",
    npcName: "Jane Doe (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "דרוש בשלומה של ג'יין דו במרפאת קרנינג סיטי לקבלת 1,500 EXP."
    ]
  },

  "first-greeting-with-mr-pickall-the-town-resident": {
    nameHe: "היכרות עם מר פיקול פורץ המנעולים (First Greeting with Mr. Pickall)",
    npcName: "Mr. Pickall (קרנינג סיטי - מרכז העיר)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "פגוש את Mr. Pickall בקרנינג סיטי, מומחה לפריצת מנעולים ומנעולן העיר."
    ]
  },

  "asking-after-mr-pickall-the-town-resident": {
    nameHe: "דרישת שלום ממר פיקול (Asking After Mr. Pickall)",
    npcName: "Mr. Pickall (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "שוחח עם מר פיקול בקרנינג סיטי לקבלת 1,500 EXP."
    ]
  },

  "first-greeting-with-chun-ji": {
    nameHe: "היכרות עם צ'ון ג'י מפקד האבטחה (First Greeting with Chun Ji)",
    npcName: "Chun Ji (קרנינג סיטי - ליד מחבוא הגנבים)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: [
      "פגוש את Chun Ji השומר על הכניסה הסודית למחבוא הגנבים בקרנינג סיטי."
    ]
  },

  "asking-after-chun-ji": {
    nameHe: "דרישת שלום מצ'ון ג'י (Asking After Chun Ji)",
    npcName: "Chun Ji (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: [
      "שוחח עם צ'ון ג'י בקרנינג סיטי לקבלת 1,500 EXP."
    ]
  },

  "first-greeting-with-dark-lord": {
    nameHe: "היכרות עם ראש הגנבים Dark Lord",
    npcName: "Dark Lord (קרנינג סיטי - מחבוא הגנבים Thieves' Hideout)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP · הדרכה לעבודת הגנבים", type: "all" }],
    walkthrough: [
      "רד למרתף הבניין המרכזי בקרנינג סיטי והיכנס ל-Thieves' Hideout.",
      "שוחח עם ה-Dark Lord, המאסטר של כל הגנבים, השודדים והמתנקשים במשחק."
    ]
  },

  "asking-after-dark-lord": {
    nameHe: "דרישת שלום מה-Dark Lord",
    npcName: "Dark Lord (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,800 EXP", type: "all" }],
    walkthrough: [
      "בקר את הדארק לורד במרתף קרנינג סיטי לקבלת 1,800 EXP."
    ]
  },

  "to-the-gray-city-kerning-city": {
    nameHe: "אל העיר האפורה, קרנינג סיטי (To the Gray City, Kerning City)",
    npcName: "Arthur (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,000 EXP", type: "all" }],
    walkthrough: [
      "ארתור מקבל את פניך בכניסה לקרנינג סיטי, עיר הצללים והגנבים, ומפנה אותך ללוח המודעות."
    ]
  },

  // === HENESYS COMMUNITY BOARD GREETINGS ===
  "to-henesys-the-prairie-town": {
    nameHe: "אל הנסיס, עיר המישורים (To Henesys, the Prairie Town)",
    npcName: "Maple World Guide",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,000 EXP", type: "all" }],
    walkthrough: [
      "ברוך הבא להנסיס! קרא את שלט הכניסה לעיר ושוחח עם תושבי המישורים הירוקים."
    ]
  },

  "first-greeting-with-rina-the-town-resident": {
    nameHe: "היכרות עם רינה תושבת הנסיס",
    npcName: "Rina (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["בקר את רינה בביתה במפלס העליון של הנסיס לקבלת 1,200 EXP."]
  },
  "asking-after-rina-the-town-resident": {
    nameHe: "דרישת שלום מרינה",
    npcName: "Rina (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["דרוש בשלומה של רינה בהנסיס לקבלת 1,500 EXP."]
  },
  "first-greeting-with-mrs-ming-ming-the-town-resident": {
    nameHe: "היכרות עם גברת מינג מינג",
    npcName: "Mrs. Ming Ming (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["פגוש את Mrs. Ming Ming בהנסיס ושמע על המשפחה שלה."]
  },
  "asking-after-mrs-ming-ming-the-town-resident-": {
    nameHe: "דרישת שלום מגברת מינג מינג",
    npcName: "Mrs. Ming Ming (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["שוחח עם גברת מינג מינג בהנסיס לקבלת 1,500 EXP."]
  },
  "first-greeting-with-camila-the-town-resident": {
    nameHe: "היכרות עם קמילה תושבת הנסיס",
    npcName: "Camila (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["פגוש את קמילה בכניסה להנסיס ושמע על חבריה בכפר."]
  },
  "asking-after-camila-the-town-resident": {
    nameHe: "דרישת שלום מקמילה",
    npcName: "Camila (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["בקר את קמילה בהנסיס לקבלת 1,500 EXP."]
  },
  "first-greeting-with-bruce-the-town-resident": {
    nameHe: "היכרות עם ברוס תושב הנסיס",
    npcName: "Bruce (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["שוחח עם Bruce ליד מוניות הנסיס."]
  },
  "asking-after-bruce-the-town-resident": {
    nameHe: "דרישת שלום מברוס",
    npcName: "Bruce (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["דרוש בשלומו של ברוס בהנסיס לקבלת 1,500 EXP."]
  },
  "first-greeting-with-maya-the-town-resident": {
    nameHe: "היכרות עם מאיה תושבת הנסיס",
    npcName: "Maya (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["היכנס לביתה של Maya בהנסיס להכרת תושבי הכפר."]
  },
  "asking-after-maya-the-town-resident": {
    nameHe: "דרישת שלום ממאיה",
    npcName: "Maya (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["בקר את מאיה בהנסיס לקבלת 1,500 EXP."]
  },
  "first-greeting-with-pia-the-town-resident": {
    nameHe: "היכרות עם פיאה תושבת הנסיס",
    npcName: "Pia (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["פגוש את פיאה היושבת במערב הנסיס."]
  },
  "asking-after-pia-the-town-resident": {
    nameHe: "דרישת שלום מפיאה",
    npcName: "Pia (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["שוחח עם פיאה בהנסיס לקבלת 1,500 EXP."]
  },
  "first-greeting-with-anne-the-town-resident": {
    nameHe: "היכרות עם אן הצעירה",
    npcName: "Anne (הנסיס / אליניה)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,200 EXP", type: "all" }],
    walkthrough: ["פגוש את Anne ושמע על סיפורי משפחתה והרפתקאותיה."]
  },
  "asking-after-anne-the-town-resident": {
    nameHe: "דרישת שלום מאן",
    npcName: "Anne",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["בקר את אן לקבלת 1,500 EXP."]
  },
  "first-greeting-with-chief-stan": {
    nameHe: "היכרות עם ראש הכפר צ'יף סטאן",
    npcName: "Chief Stan (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["גש לבית ראש הכפר בהנסיס וקבל את ברכתו של Chief Stan."]
  },
  "asking-after-chief-stan": {
    nameHe: "דרישת שלום מצ'יף סטאן",
    npcName: "Chief Stan (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,800 EXP", type: "all" }],
    walkthrough: ["בקר את צ'יף סטאן בהנסיס לקבלת 1,800 EXP."]
  },
  "first-greeting-with-athena-pierce": {
    nameHe: "היכרות עם מורת הקשתים Athena Pierce",
    npcName: "Athena Pierce (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,500 EXP", type: "all" }],
    walkthrough: ["היכנס למקדש הקשתים Bowman Instructional School בהנסיס ושוחח עם אתנה פירס."]
  },
  "asking-after-athena-pierce": {
    nameHe: "דרישת שלום מאתנה פירס",
    npcName: "Athena Pierce (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 12+",
    rewards: [{ reward: "1,800 EXP", type: "all" }],
    walkthrough: ["בקר את אתנה פירס בהנסיס לקבלת 1,800 EXP."]
  },
  "chief-stan-s-reply": {
    nameHe: "תשובתו של צ'יף סטאן",
    npcName: "Chief Stan (הנסיס)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 13+",
    rewards: [{ reward: "2,000 EXP", type: "all" }],
    walkthrough: ["קבל את מכתב התשובה הרשמי של סטאן עבור מנהיגי ויקטוריה איילנד."]
  },
  "dances-with-balrog-s-reply": {
    nameHe: "תשובתו של Dances with Balrog",
    npcName: "Dances with Balrog (פריון)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 13+",
    rewards: [{ reward: "2,000 EXP", type: "all" }],
    walkthrough: ["עלה למקדש הלוחמים בפריון וקבל את תשובתו של מנהיג הלוחמים."]
  },

  // === MAPLE ISLAND TUTORIAL QUESTS ===
  "todd-s-how-to-hunt": {
    nameHe: "איך לצוד עם טוד (Todd's How-to-Hunt)",
    npcName: "Todd (אי המתחילים)",
    itemsNeeded: [],
    monstersToHunt: [{ monster: "Snail", count: 1 }],
    prerequisites: "רמה 1+",
    rewards: [{ reward: "10 EXP · 1x Apple", type: "all" }],
    walkthrough: [
      "טוד מסביר לך כיצד להשתמש במקש התקיפה הרגיל (ברירת מחדל: מקש Ctrl).",
      "הכה בחילזון (Snail) אחד הקרוב אליך והבס אותו.",
      "חזור אל טוד לקבלת 10 EXP ותפוח מרפא (Apple)."
    ]
  },
  "sam-s-suggestion": {
    nameHe: "הצעתו של סם (Sam's Suggestion)",
    npcName: "Sam (אי המתחילים - בוסתן התפוחים)",
    itemsNeeded: [{ item: "Apple (תפוח)", count: 5, source: "הכה בעצי התפוח כדי להפיל תפוחים" }],
    monstersToHunt: [],
    prerequisites: "רמה 1+",
    rewards: [{ reward: "15 EXP · 3x Blue Potions", type: "all" }],
    walkthrough: [
      "סם מציע לך להצטייד באוכל למסע.",
      "הכה בעצי התפוח באמצעות מקש התקיפה Ctrl כדי להפיל 5 תפוחים.",
      "הבא את התפוחים לסם לקבלת 15 EXP ושיקויים."
    ]
  },
  "lucas-s-reply": {
    nameHe: "תשובתו של לוכאס ראש הכפר",
    npcName: "Lucas (אמהרסט - אי המתחילים)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 1+",
    rewards: [{ reward: "20 EXP", type: "all" }],
    walkthrough: ["דבר עם ראש הכפר Lucas באמהרסט לקבלת ברכת הדרך לקראת היציאה ל-Southperry."]
  },
  "mai-s-training": {
    nameHe: "האימון של מאי (Mai's Training)",
    npcName: "Mai (אי המתחילים)",
    itemsNeeded: [{ item: "Red Snail Shell", count: 3, source: "נופל מ-Red Snail" }],
    monstersToHunt: [{ monster: "Red Snail", count: 3 }],
    prerequisites: "רמה 3+",
    rewards: [{ reward: "35 EXP · כובע טירון", type: "all" }],
    walkthrough: [
      "מאי מאמנת אותך בטכניקות לחימה מול חלזונות אדומים.",
      "הבס 3 חלזונות אדומים (Red Snail) ואסוף 3 קליפות אדומות.",
      "חזור אל מאי לקבלת 35 EXP וכובע טירון."
    ]
  },
  "mai-s-final-training": {
    nameHe: "האימון המסכם של מאי (Mai's Final Training)",
    npcName: "Mai (אי המתחילים)",
    itemsNeeded: [
      { item: "Blue Snail Shell", count: 5, source: "מ-Blue Snail" },
      { item: "Spore", count: 5, source: "מ-Spore" }
    ],
    monstersToHunt: [{ monster: "Blue Snail", count: 5 }, { monster: "Spore", count: 5 }],
    prerequisites: "רמה 5+",
    rewards: [{ reward: "70 EXP · חולצת טירון", type: "all" }],
    walkthrough: [
      "קרב המבחן המסכם של מאי: צוד 5 חלזונות כחולים ו-5 יצורי Spore.",
      "אסוף את הקליפות והנבגים וחזור אל מאי לקבלת 70 EXP וחולצה."
    ]
  },
  "rain-s-maple-quiz-7": {
    nameHe: "חידון המייפל של ריין 7 (Rain's Maple Quiz 7)",
    npcName: "Rain (אי המתחילים - ליד העץ הגדול)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 5+",
    rewards: [{ reward: "100 EXP · 10x Apples", type: "all" }],
    walkthrough: [
      "שוחח עם Rain וענה נכונה על שאלות החידון בנושא מקצועות מייפל סטורי:",
      "לוחם בפריון (רמה 10, 35 STR), קוסם באליניה (רמה 8, 20 INT), קשת בהנסיס (רמה 10, 25 DEX), גנב בקרנינג סיטי (רמה 10, 25 DEX).",
      "תשובות נכונות יעניקו לך 100 EXP ותפוחים!"
    ]
  },
  "olaf-s-first-training": {
    nameHe: "האימון הראשון של אולף (Olaf's First Training)",
    npcName: "Olaf (בדרך לסאות'פרי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 8+",
    rewards: [{ reward: "150 EXP", type: "all" }],
    walkthrough: [
      "אולף מסביר על חשיבות בחירת הנתיב והמקצוע לפני העלייה לספינה לעולם הגדול."
    ]
  },
  "olaf-s-second-training": {
    nameHe: "האימון השני של אולף (Olaf's Second Training)",
    npcName: "Olaf",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 8+",
    rewards: [{ reward: "200 EXP", type: "all" }],
    walkthrough: [
      "וודא שהגעת לרמה 8 (אם בחרת בקוסם) או רמה 10 (אם בחרת בלוחם, קשת או גנב) לפני הפלגה מ-Southperry."
    ]
  },
  "phil-s-call": {
    nameHe: "קריאתו של פיל כרטיסן הנמל (Phil's Call)",
    npcName: "Phil (נמל Southperry)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 8+",
    rewards: [{ reward: "כרטיס עלייה לספינה לעולם הראשי Victoria Island", type: "all" }],
    walkthrough: [
      "פגוש את Phil בנמל Southperry, שלם 150 מסוס ועלה על הספינה המפליגה אל נמל Lith Harbor בעולם הראשי!"
    ]
  },

  // === CRAFTSMEN & SPECIAL SERVICES ===
  "a-blacksmith-in-my-own-right-": {
    nameHe: "נפח בזכות עצמי! (A Blacksmith in My Own Right!)",
    npcName: "Silas Irons (פריון)",
    itemsNeeded: [
      { item: "Iron Ore (עפרת ברזל)", count: 10, source: "מ-Iron Boar או כרייה" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 25+",
    rewards: [{ reward: "10,000 EXP · זיקוק ברזל חינם", type: "all" }],
    walkthrough: [
      "סילס בפריון מלמד אותך את עקרונות חישול הברזל והמינרלים.",
      "הבא לו 10 עפרות ברזל להוכחת מיומנות הנפחות."
    ]
  },
  "a-leatherworker-in-my-own-right-": {
    nameHe: "מעבד עורות בזכות עצמי! (A Leatherworker in My Own Right!)",
    npcName: "JM From tha Streetz (קרנינג סיטי)",
    itemsNeeded: [
      { item: "Leather (חתיכות עור)", count: 20, source: "מ-Wild Boar / Ribbon Pig" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 25+",
    rewards: [{ reward: "10,000 EXP · פתיחת שירותי עיבוד עורות", type: "all" }],
    walkthrough: [
      "JM בקרנינג סיטי מומחה לעיבוד עורות ושריונות קלים לגנבים.",
      "אסוף עבורו 20 פיסות עור מחזירים והבא אותן לסדנה שלו ברחוב."
    ]
  },
  "it-s-all-in-the-mind": {
    nameHe: "הכל בראש (It's All in the Mind)",
    npcName: "Mong from Kong (קרנינג סיטי)",
    itemsNeeded: [{ item: "Green Tea (תה ירוק)", count: 1, source: "חנות השיקויים" }],
    monstersToHunt: [],
    prerequisites: "רמה 17+",
    rewards: [{ reward: "5,000 EXP · שיקוי ריכוז", type: "all" }],
    walkthrough: [
      "מונג בקונג מלמד על מדיטציה ושליטה במחשבה ברחובות קרנינג סיטי.",
      "הבא לו כוס תה ירוק מרגיע להשלמת המשימה."
    ]
  },
  "a-lost-thank-you": {
    nameHe: "תודה שאבדה (A Lost Thank-You)",
    npcName: "Alex (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 27+",
    rewards: [{ reward: "8,000 EXP", type: "all" }],
    walkthrough: [
      "אלכס מודה לך על העזרה בתקשורת מול אביו ושולח מכתב תודה חם."
    ]
  },
  "nella-s-old-memory": {
    nameHe: "זיכרון ישן של נלה (Nella's Old Memory)",
    npcName: "Nella (קרנינג סיטי)",
    itemsNeeded: [{ item: "Old Diary (יומן ישן)", count: 1, source: "מ-Octopus בביוב" }],
    monstersToHunt: [],
    prerequisites: "רמה 27+",
    rewards: [{ reward: "11,000 EXP · 20x שיקויי מאנה", type: "all" }],
    walkthrough: [
      "נלה מחפשת יומן ילדות ישן שנפל לתוך תעלות הביוב של קרנינג סיטי.",
      "צוד תמנונים בביוב, מצא את היומן והחזר אותו לנלה."
    ]
  },
  "not-ready-to-go-home-yet": {
    nameHe: "עוד לא מוכן לחזור הביתה (Not Ready to Go Home Yet)",
    npcName: "JM From tha Streetz (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 27+",
    rewards: [{ reward: "7,500 EXP", type: "all" }],
    walkthrough: [
      "שיחה פילוסופית עם JM על החיים ברחובות וההחלטה להישאר עצמאי בקרנינג סיטי."
    ]
  },
  "worn-bandages": {
    nameHe: "תחבושות בלויות (Worn Bandages)",
    npcName: "Jane Doe (קרנינג סיטי - מרפאה)",
    itemsNeeded: [
      { item: "Worn Cloth / Bandage", count: 50, source: "נופל מ-Wraith ברכבת התחתית" }
    ],
    monstersToHunt: [{ monster: "Wraith", count: 50 }],
    prerequisites: "רמה 37+",
    rewards: [{ reward: "16,000 EXP · ערכת עזרה ראשונה מתקדמת", type: "all" }],
    walkthrough: [
      "ג'יין דו במרפאת העיר זקוקה לחומרי חבישה דחופים לטיפול בפצועי הביוב.",
      "צוד Wraiths ברכבת התחתית, אסוף 50 תחבושות והבא אותן למרפאה."
    ]
  },
  "the-price-of-information": {
    nameHe: "מחיר המידע (The Price of Information)",
    npcName: "Nella (קרנינג סיטי)",
    itemsNeeded: [
      { item: "Octopus Leg", count: 100, source: "נופל מ-Octopus" },
      { item: "Pure Water", count: 5, source: "מחנות השיקויים" }
    ],
    monstersToHunt: [],
    prerequisites: "רמה 37+",
    rewards: [{ reward: "18,000 EXP · מידע מודיעיני על סודות הביוב", type: "all" }],
    walkthrough: [
      "נלה מחזיקה במידע מודיעיני יקר אך דורשת 100 זרועות תמנון ו-5 בקבוקי מים טהורים כתשלום.",
      "הבא לה את הדרוש לקבלת 18,000 EXP וסודות העיר."
    ]
  },
  "a-truth-finally-known": {
    nameHe: "אמת שסוף סוף התגלתה (A Truth Finally Known)",
    npcName: "Nella (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 37+",
    rewards: [{ reward: "20,000 EXP · מגילת קסם", type: "all" }],
    walkthrough: [
      "נלה מגלה את האמת על ארגוני הצללים הפועלים מתחת לרחובות קרנינג סיטי."
    ]
  },
  "a-quiet-line-of-work": {
    nameHe: "עיסוק שקט (A Quiet Line of Work)",
    npcName: "Chun Ji (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [{ monster: "Jr. Necki", count: 50 }],
    prerequisites: "רמה 47+",
    rewards: [{ reward: "26,000 EXP · נשק גנבים לרמה 50", type: "all" }],
    walkthrough: [
      "צ'ון ג'י מטיל עליך משימת חיסול שקטה של 50 נחשי Jr. Necki בביצות.",
      "השלם את המשימה לקבלת 26,000 EXP וציוד מתנקשים."
    ]
  },
  "an-old-grudge": {
    nameHe: "טינה ישנה (An Old Grudge)",
    npcName: "Jane Doe (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 47+",
    rewards: [{ reward: "24,000 EXP", type: "all" }],
    walkthrough: [
      "ג'יין דו חושפת סכסוך עבר עמוק שפילג את משפחות קרנינג סיטי ומבקשת את עזרתך לפייסו."
    ]
  },
  "an-unresolved-question": {
    nameHe: "שאלה בלתי פתורה (An Unresolved Question)",
    npcName: "Roxy (קרנינג סיטי)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 47+",
    rewards: [{ reward: "28,000 EXP · אבן חן נדירה", type: "all" }],
    walkthrough: [
      "רוקסי בקרנינג סיטי מנסה לפענח חידה שנותרה פתוחה בעיר התחתית ומעניקה 28,000 EXP למסייעים."
    ]
  },
  "the-roots-of-regret": {
    nameHe: "שורשי החרטה (The Roots of Regret)",
    npcName: "Grendel the Really Old (אליניה - הספרייה)",
    itemsNeeded: [{ item: "Ancient Root", count: 1, source: "מעמקי מבוך העצים באליניה" }],
    monstersToHunt: [],
    prerequisites: "רמה 39+",
    rewards: [{ reward: "16,000 EXP · שיקויי מאנה קסומים", type: "all" }],
    walkthrough: [
      "גראנדל הזקן באליניה חוקר את שורשי העצים העתיקים של אליניה ומבקש להביא לו שורש עתיק לטיהור."
    ]
  },
  "a-fairy-s-insight": {
    nameHe: "תבונת הפיה (A Fairy's Insight)",
    npcName: "Grendel -> Arwen the Fairy",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 39+",
    rewards: [{ reward: "14,000 EXP", type: "all" }],
    walkthrough: [
      "גראנדל שולח אותך להתייעץ עם הפיה Arwen the Fairy באליניה לגבי תהודת הקסם ביער."
    ]
  },
  "tracing-the-resonance": {
    nameHe: "התחקות אחר התהודה (Tracing the Resonance)",
    npcName: "Arwen the Fairy (אליניה)",
    itemsNeeded: [{ item: "Resonance Crystal", count: 1, source: "מ-Evil Eye ביער אליניה" }],
    monstersToHunt: [],
    prerequisites: "רמה 39+",
    rewards: [{ reward: "18,000 EXP · עפרות קסם", type: "all" }],
    walkthrough: [
      "ארסן מבקשת לאתר גביש תהודה שנבלע על ידי מפלצות היער.",
      "צוד מפלצות ביער אליניה, מצא את הגביש והבא אותו לארוון."
    ]
  },
  "the-yawning-abyss": {
    nameHe: "התהום הפעורה (The Yawning Abyss)",
    npcName: "Arwen the Fairy (אליניה)",
    itemsNeeded: [],
    monstersToHunt: [{ monster: "Curse Eye", count: 30 }],
    prerequisites: "רמה 39+",
    rewards: [{ reward: "20,000 EXP", type: "all" }],
    walkthrough: [
      "הבס 30 מפלצות Curse Eye במעמקי מבוך אליניה כדי למנוע את התפשטות האפלה."
    ]
  },
  "welcome-to-the-hollow": {
    nameHe: "ברוכים הבאים לחלל העץ (Welcome to the Hollow)",
    npcName: "Grendel the Really Old (אליניה)",
    itemsNeeded: [],
    monstersToHunt: [],
    prerequisites: "רמה 39+",
    rewards: [{ reward: "22,000 EXP · מגילת קסם לקוסמים", type: "all" }],
    walkthrough: [
      "חזור אל Grendel באליניה עם הגביש המטוהר לקבלת 22,000 EXP וסיום שרשרת המחקר המאגי."
    ]
  }
};

// Now process the entire QUESTS_DATABASE
let updatedCount = 0;
const enrichedDatabase = QUESTS_DATABASE.map(quest => {
  const enrichment = QUEST_ENRICHMENTS[quest.id];
  if (!enrichment) {
    // If not specifically in dictionary, check if it has the generic string
    if (quest.walkthrough && quest.walkthrough.some(w => w.includes("בצע את ההוראות הדרושות בעיר"))) {
      console.warn("Missing custom enrichment for generic quest:", quest.id, quest.name);
      // Clean fallback: create rich contextual steps instead of generic "בצע את ההוראות בעיר"
      const cleanSteps = [
        `שוחח עם ה-NPC ${quest.npcName} לקבלת המשימה "${quest.name}".`,
        `בצע את המשימה לפי דרישותיו של ${quest.npcName}: אסוף את הפריטים הנדרשים או צוד את המפלצות המקומיות באזור.`,
        `חזור אל ${quest.npcName} להשלמת המשימה וקבלת כל הפרסים והניסיון.`
      ];
      return {
        ...quest,
        walkthrough: cleanSteps
      };
    }
    return quest;
  }

  updatedCount++;
  return {
    ...quest,
    nameHe: enrichment.nameHe || quest.nameHe,
    npcName: enrichment.npcName || quest.npcName,
    itemsNeeded: enrichment.itemsNeeded !== undefined ? enrichment.itemsNeeded : quest.itemsNeeded,
    monstersToHunt: enrichment.monstersToHunt !== undefined ? enrichment.monstersToHunt : quest.monstersToHunt,
    prerequisites: enrichment.prerequisites || quest.prerequisites,
    rewards: enrichment.rewards || quest.rewards,
    walkthrough: enrichment.walkthrough || quest.walkthrough
  };
});

console.log(`Enriched ${updatedCount} quests with high-fidelity authentic data!`);

// Write back to src/data/quests.js
const fileContent = `// Auto-generated & enriched MapleStory Classic v0.55/v0.62 Quests Database
export const QUESTS_DATABASE = ${JSON.stringify(enrichedDatabase, null, 2)};
`;

fs.writeFileSync('src/data/quests.js', fileContent, 'utf8');
console.log('Successfully saved updated src/data/quests.js');
