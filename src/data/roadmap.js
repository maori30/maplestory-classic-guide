// MapleStory Classic Thief & Assassin Skills & Level Roadmap (Levels 10 to 70)
export const SKILLS_INFO = {
  "nimbleBody": {
    "id": "nimbleBody",
    "job": 1,
    "name": "Nimble Body",
    "nameEn": "Nimble Body",
    "nameHe": "גוף זריז",
    "max": 20,
    "type": "Passive",
    "typeHe": "פאסיבי",
    "icon": "🏃‍♂️",
    "desc": "מעלה את הדיוק (Accuracy) וההתחמקות (Avoidability). חיוני להשלמת 3 נקודות ראשונות לפתיחת Keen Eyes, ומשלים ל-20 נקודות מקס ברמות 21-26.",
    "badge": "חובה לפתיחת Keen Eyes"
  },
  "keenEyes": {
    "id": "keenEyes",
    "job": 1,
    "name": "Keen Eyes",
    "nameEn": "Keen Eyes",
    "nameHe": "עיני נץ",
    "max": 15,
    "type": "Passive",
    "typeHe": "פאסיבי",
    "icon": "🎯",
    "desc": "מגדיל את טווח הטלת הכוכבים של הגנב. מקס 15 נקודות מאפשר לתקוף ממרחק בטוח ממפלצות ללא ספיגת נזק.",
    "badge": "הגדלת טווח תקיפה (מקס 15)"
  },
  "luckySeven": {
    "id": "luckySeven",
    "job": 1,
    "name": "Lucky Seven",
    "nameEn": "Lucky Seven",
    "nameHe": "שבע בר-מזל",
    "max": 20,
    "type": "Active",
    "typeHe": "אקטיבי",
    "icon": "⭐",
    "desc": "המתקפה הראשית והקטלנית ביותר של הגנב בעבודה ראשונה! משגרת 2 כוכבים המבוססים בעיקר על LUK ומתעלמים מחישובי נשק רגילים.",
    "badge": "מתקפת הדגל • נזק אדיר"
  },
  "disorder": {
    "id": "disorder",
    "job": 1,
    "name": "Disorder",
    "nameEn": "Disorder",
    "nameHe": "אי-סדר",
    "max": 20,
    "type": "Active",
    "typeHe": "אקטיבי",
    "icon": "💫",
    "desc": "מפחית באופן זמני את כוח ההתקפה וההגנה של המפלצת. נדרשות 3 נקודות בלבד לפתיחת היכולת Dark Sight.",
    "badge": "דרישת קדם (3 נק')"
  },
  "darkSight": {
    "id": "darkSight",
    "job": 1,
    "name": "Dark Sight",
    "nameEn": "Dark Sight",
    "nameHe": "ראיית חושך",
    "max": 20,
    "type": "Active",
    "typeHe": "אקטיבי",
    "icon": "👤",
    "desc": "היעלמות בצללים ומעבר דרך מפלצות בלי לספוג נזק כלל. מושלם ל-KPQ, איסוף כרטיסים ומעבר בטוח במפות מסוכנות.",
    "badge": "התחמקות מושלמת"
  },
  "clawMastery": {
    "id": "clawMastery",
    "job": 2,
    "name": "Claw Mastery",
    "nameEn": "Claw Mastery",
    "nameHe": "שליטה בכפפות טפרים",
    "max": 20,
    "type": "Passive",
    "typeHe": "פאסיבי",
    "icon": "🧤",
    "desc": "מעלה את יציבות הנזק המינימלי (Mastery עד 60%), מוסיף דיוק (Accuracy +20) ומגדיל את כמות הכוכבים המקסימלית בכל סט בעד +200 כוכבים!",
    "badge": "יציבות נזק וקיבולת כוכבים"
  },
  "criticalThrow": {
    "id": "criticalThrow",
    "job": 2,
    "name": "Critical Throw",
    "nameEn": "Critical Throw",
    "nameHe": "הטלה קריטית",
    "max": 30,
    "type": "Passive",
    "typeHe": "פאסיבי",
    "icon": "💥",
    "desc": "הסקיל האגדי של המתנקש! מעניק סיכוי של עד 50% להנחתת מכה קריטית שמעניקה 200% נזק על כל כוכב של Lucky Seven!",
    "badge": "הכפלת נזק עצומה • סקיל הדגל"
  },
  "clawBooster": {
    "id": "clawBooster",
    "job": 2,
    "name": "Claw Booster",
    "nameEn": "Claw Booster",
    "nameHe": "מאיץ כפפה",
    "max": 20,
    "type": "Active",
    "typeHe": "אקטיבי",
    "icon": "⚡",
    "desc": "מגביר את מהירות תקיפת הכפפה ב-2 דרגות מהירות (Speed Stages) למשך עד 200 שניות! יחד עם Meba מגיעים למהירות הטלה מסחררת.",
    "badge": "תוספת מהירות תקיפה +2"
  },
  "haste": {
    "id": "haste",
    "job": 2,
    "name": "Haste",
    "nameEn": "Haste",
    "nameHe": "חיפזון / האסט",
    "max": 20,
    "type": "Active",
    "typeHe": "אקטיבי (Buff לפארטי)",
    "icon": "💨",
    "desc": "הבאף המבוקש והאהוב ביותר במייפל סטורי! מעניק +40 מהירות ריצה (Speed) ו-+20 גובה קפיצה (Jump) לך ולכל חברי הפארטי למשך 200 שניות!",
    "badge": "חובה לפארטי • תנועה מירבית"
  },
  "drain": {
    "id": "drain",
    "job": 2,
    "name": "Drain",
    "nameEn": "Drain",
    "nameHe": "שאיבת חיים",
    "max": 30,
    "type": "Active",
    "typeHe": "אקטיבי",
    "icon": "🩸",
    "desc": "מתקפה ששואבת חיים (HP) מהמפלצת ישירות למד החיים שלך בהתאם לנזק (עד 50% ממקס ה-HP שלך). חוסך 100% משיקויי החיים באימונים!",
    "badge": "חיסכון מוחלט בשיקויים"
  },
  "endure": {
    "id": "endure",
    "job": 2,
    "name": "Endure",
    "nameEn": "Endure",
    "nameHe": "כושר עמידה",
    "max": 20,
    "type": "Passive",
    "typeHe": "פאסיבי",
    "icon": "🧘‍♂️",
    "desc": "משחזר HP ו-MP נוספים בזמן אחיזה בסולמות או בחבלים.",
    "badge": "שחזור פאסיבי"
  }
};

export const LEVEL_ROADMAP = {
  "10": {
    "spGained": 1,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 1,
        "note": "נקודת SP ראשונה במעבר עבודה"
      }
    ],
    "cumulative": {
      "nimbleBody": 1,
      "keenEyes": 0,
      "luckySeven": 0,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "מזל טוב על מעבר עבודה לרמה 10!",
    "tipDesc": "התחלת כעת את דרכך כרוג/גנב בקרנינג סיטי (Kerning City). שים נקודה ראשונה ב-Nimble Body."
  },
  "11": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 2,
        "note": "הגעה ל-3 נקודות ופתיחת Keen Eyes"
      },
      {
        "skillId": "keenEyes",
        "points": 1,
        "note": "נקודה ראשונה להגדלת טווח"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 1,
      "luckySeven": 0,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פתיחת היכולת Keen Eyes",
    "tipDesc": "ברגע שה-Nimble Body מגיע ל-3 נקודות, נפתחת מיד היכולת להשקיע ב-Keen Eyes להגדלת טווח הזריקה."
  },
  "12": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "keenEyes",
        "points": 3,
        "note": "חיזוק טווח ההטלה (מגיע ל-4/8)"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 4,
      "luckySeven": 0,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "הרחבת טווח הפגיעה",
    "tipDesc": "המשך להשקיע ב-Keen Eyes. טווח ארוך מאפשר להרוג סליימים ופטריות לפני שהם מתקרבים."
  },
  "13": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "keenEyes",
        "points": 3,
        "note": "התקרבות למיקסום הטווח (7/8)"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 7,
      "luckySeven": 0,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "טווח כמעט מקסימלי",
    "tipDesc": "עוד רמה אחת ו-Keen Eyes יהיה ממוקסם לחלוטין לקראת קבלת ה-Lucky Seven."
  },
  "14": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "keenEyes",
        "points": 1,
        "note": "מיקסום Keen Eyes (8/8 מקס!)"
      },
      {
        "skillId": "luckySeven",
        "points": 2,
        "note": "נקודות ראשונות ב-Lucky Seven!"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 2,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "הגעת ל-Lucky Seven!",
    "tipDesc": "מיקסמת את Keen Eyes! מעתה כל נקודה הולכת למתקפה הקטלנית Lucky Seven."
  },
  "15": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "luckySeven",
        "points": 3,
        "note": "שדרוג Lucky Seven ל-5/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 5,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "רמת ציוד משמעותית: כפפת Meba!",
    "tipDesc": "ברמה 15 שחקני Dexless יכולים להצטייד בכפפת Meba (מהירות התקפה מהירה ביותר) שאינה דורשת DEX גבוה."
  },
  "16": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "luckySeven",
        "points": 3,
        "note": "שדרוג Lucky Seven ל-8/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 8,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "עליית נזק מורגשת",
    "tipDesc": "הנזק של Lucky Seven עולה במהירות. שים לב לחיסכון בכוכבים ושיקויים."
  },
  "17": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "luckySeven",
        "points": 3,
        "note": "שדרוג Lucky Seven ל-11/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 11,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "אימון בעץ הסליימים או פטריות ירוקות",
    "tipDesc": "הנזק מתייצב. מומלץ להתאמן על Green Mushrooms ו-Bubblings ברכבת התחתית."
  },
  "18": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "luckySeven",
        "points": 3,
        "note": "שדרוג Lucky Seven ל-14/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 14,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "מתקרבים למיקסום המתקפה",
    "tipDesc": "רמת הנזק כבר מאפשרת 1-hit KO או 2-hit KO על מגוון מפלצות בסיסיות."
  },
  "19": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "luckySeven",
        "points": 3,
        "note": "שדרוג Lucky Seven ל-17/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 17,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "עוד רמה אחת למיקסום Lucky Seven!",
    "tipDesc": "עוד 3 נקודות בלבד והמתקפה הראשית שלך ממוקסמת במלואה."
  },
  "20": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "luckySeven",
        "points": 3,
        "note": "מיקסום מוחלט של Lucky Seven (20/20 מקס!)"
      }
    ],
    "cumulative": {
      "nimbleBody": 3,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "Lucky Seven ממוקסם לחלוטין (20/20)!",
    "tipDesc": "הגעת לעוצמת האש המקסימלית לעבודה ראשונה. כעת חוזרים למקסם את Nimble Body."
  },
  "21": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 3,
        "note": "שדרוג Nimble Body ל-6/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 6,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "רמה 21: ברוך הבא ל-Kerning Party Quest (KPQ)!",
    "tipDesc": "זהו השלב המרגש ביותר! גנב עם Lucky Seven ממוקסם הוא ה-Damage Dealer המבוקש ביותר ב-KPQ."
  },
  "22": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 3,
        "note": "שדרוג Nimble Body ל-9/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 9,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "אימוני KPQ רציפים",
    "tipDesc": "המשך לעשות KPQ ברכבת בקרנינג סיטי. תוספת הדיוק וההתחמקות עוזרת מול King Slime."
  },
  "23": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 3,
        "note": "שדרוג Nimble Body ל-12/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 12,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "התחמקות ודיוק משופרים",
    "tipDesc": "ה-Avoidability שלך עולה ומאפשר להתחמק ממכות של תנינים (Ligator) וסליימים."
  },
  "24": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 3,
        "note": "שדרוג Nimble Body ל-15/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 15,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "התקדמות מהירה ב-KPQ",
    "tipDesc": "נסה להשיג Squishy Liquid ושלל מקווסטים עבור בונוסים נוספים."
  },
  "25": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 3,
        "note": "שדרוג Nimble Body ל-18/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 18,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 0,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "רמה 25: כובע Brown Bamboo Hat!",
    "tipDesc": "השלם את קווסט מאיה בהנסיס (Maya and the Weird Medicine) כדי לזכות ב-Brown Bamboo Hat (+3 LUK)."
  },
  "26": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "nimbleBody",
        "points": 2,
        "note": "מיקסום Nimble Body (20/20 מקס!)"
      },
      {
        "skillId": "disorder",
        "points": 1,
        "note": "נקודה ראשונה ב-Disorder"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 1,
      "darkSight": 0,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פתיחת היכולת Disorder",
    "tipDesc": "מיקסמת את Nimble Body! כעת משקיעים 3 נקודות ב-Disorder כדי לפתוח את Dark Sight."
  },
  "27": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "disorder",
        "points": 2,
        "note": "הגעה ל-3 נקודות ופתיחת Dark Sight!"
      },
      {
        "skillId": "darkSight",
        "points": 1,
        "note": "נקודה ראשונה ב-Dark Sight!"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 1,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פתיחת Dark Sight!",
    "tipDesc": "היכולת להיעלם בצללים ולנוע ללא מגע מפלצות. שימושית ביותר בשלב החביות והאיסוף ב-KPQ."
  },
  "28": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "darkSight",
        "points": 3,
        "note": "שדרוג Dark Sight ל-4/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 4,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שיפור משך ומהירות ה-Dark Sight",
    "tipDesc": "הפחתת הקנס על מהירות הריצה בזמן היעלמות בצללים."
  },
  "29": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "darkSight",
        "points": 3,
        "note": "שדרוג Dark Sight ל-7/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 7,
      "clawMastery": 0,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "עוד רמה אחת למעבר עבודה שנייה!",
    "tipDesc": "השלב האחרון של עבודה ראשונה. הכן שיקויים וכוכבים לקראת מבחן העבודה השנייה."
  },
  "30": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "darkSight",
        "points": 3,
        "note": "שדרוג Dark Sight ל-10/20 (עבודה ראשונה הושלמה!)"
      },
      {
        "skillId": "clawMastery",
        "points": 1,
        "note": "נקודת SP ראשונה במעבר עבודה לאסאסין!"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 1,
      "criticalThrow": 0,
      "clawBooster": 0,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "רמה 30: מעבר עבודה שנייה לאסאסין (Assassin)!",
    "tipDesc": "גש ל-Dark Lord בקרנינג סיטי, קח את מכתב ההמלצה למדריך במגרש הבנייה ואסוף 30 Dark Marbles כדי להפוך לאסאסין!"
  },
  "31": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 2,
        "note": "הגעה ל-3 נקודות ופתיחת Claw Booster"
      },
      {
        "skillId": "clawBooster",
        "points": 1,
        "note": "נקודה ראשונה ב-Claw Booster (מאיץ כפפה)"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 3,
      "criticalThrow": 0,
      "clawBooster": 1,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פתיחת Claw Booster!",
    "tipDesc": "שדרוג ל-3 נקודות ב-Claw Mastery פותח את היכולת Claw Booster להגברת מהירות הזריקה."
  },
  "32": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 2,
        "note": "הגעה ל-5 נקודות ופתיחת Critical Throw!"
      },
      {
        "skillId": "clawBooster",
        "points": 1,
        "note": "שדרוג Booster ל-2/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 0,
      "clawBooster": 2,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פתיחת Critical Throw!",
    "tipDesc": "הגעה ל-5 נקודות ב-Mastery פותחת את הסקיל החשוב ביותר של המתנקש – Critical Throw!"
  },
  "33": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawBooster",
        "points": 3,
        "note": "שדרוג Booster ל-5/20 (משך 50 שניות)"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 0,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "ייצוב משך ה-Booster",
    "tipDesc": "עם 5 נקודות ב-Booster אתה מקבל 50 שניות של תוספת מהירות התקפה בכל הפעלה."
  },
  "34": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-3/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 3,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (3/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-4.5%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "35": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-6/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 6,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (6/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-9%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "36": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-9/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 9,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (9/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-13.5%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "37": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-12/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 12,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (12/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-18%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "38": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-15/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 15,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (15/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-22.5%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "39": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-18/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 18,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (18/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-27%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "40": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-21/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 21,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (21/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-31.5%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "41": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-24/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 24,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (24/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-36%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "42": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "שדרוג Critical Throw ל-27/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 27,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "שדרוג Critical Throw (27/30)",
    "tipDesc": "סיכוי המכה הקריטית עולה ל-40.5%. הנזק של כל קריטיקל מוכפל ב-200%!"
  },
  "43": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "criticalThrow",
        "points": 3,
        "note": "מיקסום מוחלט של Critical Throw (30/30 מקס!)"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 0,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "Critical Throw ממוקסם (30/30)!",
    "tipDesc": "הגעת ל-50% סיכוי קריטיקל קבוע! חצי מהכוכבים שלך מנחיתים 200% נזק אדיר."
  },
  "44": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 3,
        "note": "שדרוג Haste ל-3/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 3,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פיתוח Haste (3/20)",
    "tipDesc": "תוספת מהירות ריצה וקפיצה לך ולכל חברי הפארטי. מבוקש מאוד ב-LPQ ואימונים."
  },
  "45": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 3,
        "note": "שדרוג Haste ל-6/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 6,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פיתוח Haste (6/20)",
    "tipDesc": "תוספת מהירות ריצה וקפיצה לך ולכל חברי הפארטי. מבוקש מאוד ב-LPQ ואימונים."
  },
  "46": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 3,
        "note": "שדרוג Haste ל-9/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 9,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פיתוח Haste (9/20)",
    "tipDesc": "תוספת מהירות ריצה וקפיצה לך ולכל חברי הפארטי. מבוקש מאוד ב-LPQ ואימונים."
  },
  "47": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 3,
        "note": "שדרוג Haste ל-12/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 12,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פיתוח Haste (12/20)",
    "tipDesc": "תוספת מהירות ריצה וקפיצה לך ולכל חברי הפארטי. מבוקש מאוד ב-LPQ ואימונים."
  },
  "48": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 3,
        "note": "שדרוג Haste ל-15/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 15,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פיתוח Haste (15/20)",
    "tipDesc": "תוספת מהירות ריצה וקפיצה לך ולכל חברי הפארטי. מבוקש מאוד ב-LPQ ואימונים."
  },
  "49": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 3,
        "note": "שדרוג Haste ל-18/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 5,
      "haste": 18,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "פיתוח Haste (18/20)",
    "tipDesc": "תוספת מהירות ריצה וקפיצה לך ולכל חברי הפארטי. מבוקש מאוד ב-LPQ ואימונים."
  },
  "50": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "haste",
        "points": 2,
        "note": "מיקסום מוחלט של Haste (20/20 מקס! +40 Speed / +20 Jump)"
      },
      {
        "skillId": "clawBooster",
        "points": 1,
        "note": "שדרוג Booster ל-6/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 6,
      "haste": 20,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "רמה 50: Haste ממוקסם (20/20)!",
    "tipDesc": "מזל טוב! יש לך כעת Haste מלא (+40 מהירות ריצה ו-+20 קפיצה) לכל הפארטי. מעבר לכפפת Scarab ברמה 50!"
  },
  "51": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawBooster",
        "points": 3,
        "note": "שדרוג Claw Booster ל-9/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 9,
      "haste": 20,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "הארכת משך ה-Booster (9/20)",
    "tipDesc": "ה-Booster נמשך כעת 90 שניות. נוחות מקסימלית בקרבות ארוכים."
  },
  "52": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawBooster",
        "points": 3,
        "note": "שדרוג Claw Booster ל-12/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 12,
      "haste": 20,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "הארכת משך ה-Booster (12/20)",
    "tipDesc": "ה-Booster נמשך כעת 120 שניות. נוחות מקסימלית בקרבות ארוכים."
  },
  "53": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawBooster",
        "points": 3,
        "note": "שדרוג Claw Booster ל-15/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 15,
      "haste": 20,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "הארכת משך ה-Booster (15/20)",
    "tipDesc": "ה-Booster נמשך כעת 150 שניות. נוחות מקסימלית בקרבות ארוכים."
  },
  "54": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawBooster",
        "points": 3,
        "note": "שדרוג Claw Booster ל-18/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 0,
      "endure": 0
    },
    "tipTitle": "הארכת משך ה-Booster (18/20)",
    "tipDesc": "ה-Booster נמשך כעת 180 שניות. נוחות מקסימלית בקרבות ארוכים."
  },
  "55": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-3/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 3,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (3/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "56": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-6/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 6,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (6/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "57": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-9/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 9,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (9/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "58": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-12/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 12,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (12/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "59": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-15/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 15,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (15/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "60": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-18/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 18,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (18/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "61": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-21/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 21,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (21/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "62": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-24/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 24,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (24/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "63": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "שדרוג Drain ל-27/30"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 27,
      "endure": 0
    },
    "tipTitle": "שדרוג יכולת שאיבת החיים Drain (27/30)",
    "tipDesc": "שאיבת HP מהמפלצת בעת תקיפה. מפחית דרסטית את הצורך בשיקויי חיים!"
  },
  "64": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "drain",
        "points": 3,
        "note": "מיקסום מוחלט של Drain (30/30 מקס!)"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 5,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 30,
      "endure": 0
    },
    "tipTitle": "Drain ממוקסם (30/30)!",
    "tipDesc": "מיקסמת את Drain! מעתה כל מתקפה שואבת עד 50% ממקס החיים שלך. חיסכון מוחלט בשיקויים."
  },
  "65": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 3,
        "note": "שדרוג Claw Mastery ל-8/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 8,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 30,
      "endure": 0
    },
    "tipTitle": "העלאת קיבולת כוכבים ב-Mastery (8/20)",
    "tipDesc": "העלאת נזק המינימום ותוספת כוכבים לכל חבילה בתיק."
  },
  "66": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 3,
        "note": "שדרוג Claw Mastery ל-11/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 11,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 30,
      "endure": 0
    },
    "tipTitle": "העלאת קיבולת כוכבים ב-Mastery (11/20)",
    "tipDesc": "העלאת נזק המינימום ותוספת כוכבים לכל חבילה בתיק."
  },
  "67": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 3,
        "note": "שדרוג Claw Mastery ל-14/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 14,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 30,
      "endure": 0
    },
    "tipTitle": "העלאת קיבולת כוכבים ב-Mastery (14/20)",
    "tipDesc": "העלאת נזק המינימום ותוספת כוכבים לכל חבילה בתיק."
  },
  "68": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 3,
        "note": "שדרוג Claw Mastery ל-17/20"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 17,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 30,
      "endure": 0
    },
    "tipTitle": "העלאת קיבולת כוכבים ב-Mastery (17/20)",
    "tipDesc": "העלאת נזק המינימום ותוספת כוכבים לכל חבילה בתיק."
  },
  "69": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawMastery",
        "points": 3,
        "note": "מיקסום Claw Mastery (20/20 מקס!)"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 20,
      "criticalThrow": 30,
      "clawBooster": 18,
      "haste": 20,
      "drain": 30,
      "endure": 0
    },
    "tipTitle": "Claw Mastery ממוקסם (20/20)!",
    "tipDesc": "מיקסמת את ה-Mastery! מקסימום יציבות נזק וקיבולת של עוד 200 כוכבים לכל סט בתיק!"
  },
  "70": {
    "spGained": 3,
    "addedSkills": [
      {
        "skillId": "clawBooster",
        "points": 2,
        "note": "מיקסום Claw Booster (20/20 מקס!)"
      },
      {
        "skillId": "endure",
        "points": 1,
        "note": "נקודת פתיחה ב-Endure לקראת עבודה 3!"
      }
    ],
    "cumulative": {
      "nimbleBody": 20,
      "keenEyes": 8,
      "luckySeven": 20,
      "disorder": 3,
      "darkSight": 10,
      "clawMastery": 20,
      "criticalThrow": 30,
      "clawBooster": 20,
      "haste": 20,
      "drain": 30,
      "endure": 1
    },
    "tipTitle": "רמה 70: מעבר עבודה שלישית להרמיט (Hermit)!",
    "tipDesc": "השלמת את עבודת האסאסין באופן מושלם! טוס לאל נאת' (El Nath), דבר עם Arec ב-Chief's Residence והתחל את מבחן ה-Hermit עבור Shadow Partner ו-Flash Jump!"
  }
};
