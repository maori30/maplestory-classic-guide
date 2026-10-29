import { MONSTER_ASSETS_MAP } from './monsterAssets.js';

// MapleStory Pre-BigBang (v0.55/v0.83) Monster & Travel Database
// Total Monsters: 278 (Enriched with MeowDB & MesoWatch drop reports & Hidden Portals)
const RAW_MONSTERS_DATABASE = [
  {
    "id": "snail",
    "name": "Snail",
    "nameHe": "חילזון ירוק (Snail)",
    "level": 1,
    "hp": 15,
    "mp": 0,
    "exp": 3,
    "icon": "🐌",
    "category": "1-15",
    "town": "Maple Island / Lith Harbor / Henesys",
    "locations": [
      "Henesys Hunting Ground I (HHG1)",
      "Lith Harbor Outskirts"
    ],
    "directions": [
      "נמצא בכל מפות היציאה של ערי ההתחלה בוויקטוריה איילנד ומייפל איילנד."
    ],
    "safeSpots": "כל מקום במפה. מפלצת רמה 1 שאינה מהווה שום סיכון.",
    "notableDrops": [
      "Snail Shell (שבלול ירוק למיומנות שלוש הצדפות)",
      "Apple"
    ],
    "starsClaws": "Snail Shell",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/2",
    "verifiedDrops": [
      {
        "name": "Green Skullcap",
        "category": "Equips",
        "price": "499 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Green Headband",
        "category": "Equips",
        "price": "450 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "White Undershirt",
        "category": "Equips",
        "price": "149.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Green T-Shirt",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Striped Top",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Sword",
        "category": "Weapons",
        "price": "100 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Snail Shell",
        "category": "Etc",
        "price": "15 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Bronze Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 22,
        "source": "reported"
      },
      {
        "name": "Garnet Ore",
        "category": "Etc",
        "price": "180 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Red Miniskirt",
        "category": "Equips",
        "price": "25 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Ice Jeans",
        "category": "Equips",
        "price": "2,211 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Weapon Def. Scroll: Intermediate",
        "category": "Scrolls",
        "price": "9,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Magic Def. Scroll: Intermediate",
        "category": "Scrolls",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "shroom",
    "name": "Shroom",
    "nameHe": "שרום (פטרייה חומה קטנה)",
    "level": 2,
    "hp": 20,
    "mp": 0,
    "exp": 4,
    "icon": "🤎",
    "category": "1-15",
    "town": "Henesys / Amherst",
    "locations": [
      "Henesys Hunting Ground I (HHG1)",
      "Maple Island: Amherst Grass Field"
    ],
    "directions": [
      "מהנסיס: צא שמאלה ל-HHG1 (קומות תחתונות)."
    ],
    "safeSpots": "עמוד על הפלטפורמה האמצעית. אין לה מתקפת טווח.",
    "notableDrops": [
      "Mushroom Spore",
      "Red Potion"
    ],
    "starsClaws": "Basic Potions",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/4",
    "verifiedDrops": [
      {
        "name": "Yellow Headband",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Grey T-Shirt",
        "category": "Equips",
        "price": "499 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Jean Shorts",
        "category": "Equips",
        "price": "67 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Jean Capris",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Avelin Skirt",
        "category": "Equips",
        "price": "999.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Ice Jeans",
        "category": "Equips",
        "price": "2,211 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Rubber Boots",
        "category": "Equips",
        "price": "100 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Hand Axe",
        "category": "Weapons",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Mushroom Spore",
        "category": "Etc",
        "price": "13.5 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Mithril Ore",
        "category": "Etc",
        "price": "170 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Aquamarine Ore",
        "category": "Etc",
        "price": "169 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Field Dagger",
        "category": "Weapons",
        "price": "3,993 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "blue-snail",
    "name": "Blue Snail",
    "nameHe": "חילזון כחול (Blue Snail)",
    "level": 2,
    "hp": 20,
    "mp": 0,
    "exp": 4,
    "icon": "🐌",
    "category": "1-15",
    "town": "Henesys / Lith Harbor",
    "locations": [
      "Henesys Hunting Ground I",
      "The Hill North of Henesys"
    ],
    "directions": [
      "נמצא בשטחי הציד מחוץ להנסיס ובאזור גבעות הדשא."
    ],
    "safeSpots": "רמה 2, הליכה איטית במיוחד.",
    "notableDrops": [
      "Blue Snail Shell",
      "Red Potion"
    ],
    "starsClaws": "Blue Shell",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/3",
    "verifiedDrops": [
      {
        "name": "Blue Headband",
        "category": "Equips",
        "price": "549.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Grey T-Shirt",
        "category": "Equips",
        "price": "499 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Undershirt",
        "category": "Equips",
        "price": "111 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Brown Training Shirt",
        "category": "Equips",
        "price": "1,599.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue One-lined T-Shirt",
        "category": "Equips",
        "price": null,
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "White Tube Top",
        "category": "Equips",
        "price": "265 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Green T-Shirt",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Striped T-Shirt",
        "category": "Equips",
        "price": "2,500 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Jean Shorts",
        "category": "Equips",
        "price": "67 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Grey Thick Sweat Pants",
        "category": "Equips",
        "price": "3,250 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Brown Duo",
        "category": "Equips",
        "price": "2,400 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Razor",
        "category": "Weapons",
        "price": "300 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 13,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Snail Shell",
        "category": "Etc",
        "price": "10 Mesos",
        "votes": 20,
        "source": "reported"
      },
      {
        "name": "Iron Ore",
        "category": "Etc",
        "price": "350 Mesos",
        "votes": 28,
        "source": "reported"
      },
      {
        "name": "Amethyst Ore",
        "category": "Etc",
        "price": "185 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Iron Mace",
        "category": "Weapons",
        "price": "4,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Magic Def. Scroll: Intermediate",
        "category": "Scrolls",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "stump",
    "name": "Stump",
    "nameHe": "סטאמפ (גזע עץ מהלך)",
    "level": 4,
    "hp": 35,
    "mp": 0,
    "exp": 6,
    "icon": "🪵",
    "category": "1-15",
    "town": "Perion / Henesys",
    "locations": [
      "Perion Street (רחובות פריון והגבעות הסלעיות)",
      "The Hill North of Henesys"
    ],
    "directions": [
      "מפריון: צא מכל פורטל אל עבר הגבעות הסלעיות."
    ],
    "safeSpots": "הליכה איטית ביותר ללא סכנה.",
    "notableDrops": [
      "Tree Branch (ענף עץ לקווסטים)",
      "Wooden Sword"
    ],
    "starsClaws": "Branches for Quests",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/6",
    "verifiedDrops": [
      {
        "name": "Green Archer Top",
        "category": "Equips",
        "price": "1,299 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Beige Plain Robe",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Juno",
        "category": "Equips",
        "price": "1,500 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Wooden Club",
        "category": "Weapons",
        "price": null,
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Triangular Zamadar",
        "category": "Weapons",
        "price": "2,111 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Wooden Wand",
        "category": "Weapons",
        "price": "1,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Wooden Staff",
        "category": "Weapons",
        "price": "1,999.5 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Tree Branch",
        "category": "Etc",
        "price": "19 Mesos",
        "votes": 16,
        "source": "reported"
      },
      {
        "name": "Bronze Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Emerald Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Brown High Boots",
        "category": "Equips",
        "price": "2,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Composite Bow",
        "category": "Weapons",
        "price": "4,500 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "red-snail",
    "name": "Red Snail",
    "nameHe": "חילזון אדום (Red Snail)",
    "level": 5,
    "hp": 45,
    "mp": 0,
    "exp": 8,
    "icon": "🐌",
    "category": "1-15",
    "town": "Henesys / Ellinia / Kerning",
    "locations": [
      "Henesys Hunting Ground I",
      "Forest Trail I (Ellinia)"
    ],
    "directions": [
      "נמצא במורד שטח הציד בהנסיס ובשבילי היער של אליניה."
    ],
    "safeSpots": "עמוד על הפלטפורמה ותקוף מטווח.",
    "notableDrops": [
      "Red Snail Shell",
      "Wooden Club",
      "Subi Throwing-Stars"
    ],
    "starsClaws": "Subi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/5",
    "verifiedDrops": [
      {
        "name": "Red Skullcap",
        "category": "Equips",
        "price": null,
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Headband",
        "category": "Equips",
        "price": "474.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Amethyst Earrings",
        "category": "Equips",
        "price": "2,949 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Yellow T-Shirt",
        "category": "Equips",
        "price": "299 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Striped Top",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Cloth Pants",
        "category": "Equips",
        "price": "1,555.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Leather Sandals",
        "category": "Equips",
        "price": "199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Brown Woodsman Boots",
        "category": "Equips",
        "price": "1,350 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Brown Duo",
        "category": "Equips",
        "price": "2,400 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Sword",
        "category": "Weapons",
        "price": "100 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Leather Purse",
        "category": "Weapons",
        "price": "2,500 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Wooden Sword",
        "category": "Weapons",
        "price": "2,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 13,
        "source": "reported"
      },
      {
        "name": "Overall Armor DEF Scroll: Intermediate",
        "category": "Scrolls",
        "price": "5,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Cape Magic Def. Scroll: Lesser",
        "category": "Scrolls",
        "price": "888 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Red Snail Shell",
        "category": "Etc",
        "price": "12 Mesos",
        "votes": 23,
        "source": "reported"
      },
      {
        "name": "Silver Ore",
        "category": "Etc",
        "price": "85 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Opal Ore",
        "category": "Etc",
        "price": "122 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Red Cloth Pants (F)",
        "category": "Equips",
        "price": "1,155 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Metal Wand",
        "category": "Weapons",
        "price": "5,266.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Overall Armor DEX Scroll: Greater",
        "category": "Scrolls",
        "price": "14,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "slime",
    "name": "Slime",
    "nameHe": "סליים ירוק",
    "level": 6,
    "hp": 50,
    "mp": 10,
    "exp": 10,
    "icon": "🟢",
    "spriteUrl": "https://meowdb.com/msclassic/monsters/sprites/mob_7.png",
    "animUrl": "https://meowdb.com/msclassic/monsters/anim/0000007.move.webp",
    "wzId": 1110100,
    "category": "1-15",
    "town": "Ellinia / Henesys",
    "locations": [
      "Henesys Hunting Ground I (HHG1 - קרקעית המפה)",
      "Henesys Hunting Ground II (HHG2 - טיפוס למעלה ב-HHG1)",
      "Henesys Hunting Ground III (HHG3)",
      "The Tree That Grew (עץ הסליימים באליניה)",
      "Victoria Road: Forest Trail I"
    ],
    "directions": [
      "מהנסיס (Henesys): צא מהפורטל השמאלי של העיר ישירות אל Henesys Hunting Ground I (HHG1). קרקעית המפה מלאה בסליימים. אם תטפס בחבלים ובסולמות עד לראש המפה, תמצא פורטל אל HHG2 ואל HHG3!",
      "מאליניה (Ellinia): צא דרך הפורטל הימני-תחתון אל Forest Trail I, או היכנס לעץ הענקי (The Tree That Grew) במרכז המפה."
    ],
    "safeSpots": "עמוד על ענפי העץ מעל המפלצות בעץ הסליימים או על הפלטפורמות האמצעיות ב-HHG1. זרוק כוכבים ממרחק בטוח ללא ספיגת מגע כלל.",
    "notableDrops": [
      "Slime Bubble",
      "Squishy Liquid",
      "Bronze Dagger",
      "Scroll for Bottomwear for DEF 10%"
    ],
    "starsClaws": "Bronze Dagger",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: Forest Trail I (שביל היער 1 ליד אליניה)",
      "targetMap": "The Tree That Grew I (עץ הסליימים הענקי באליניה)",
      "landmark": "גזע עץ ענקי חלול במרכז המפה עם פתח כניסה שחור רחב",
      "landmarkIcon": "🟢",
      "coordinates": "מרכז המפה על מדרגת העץ הנמוכה ביותר",
      "howToEnter": "עמוד במרכז הפתח השחור של בסיס העץ הענקי ולחץ [↑ חץ למעלה].",
      "warningTip": "בתוך העץ יש 3 קומות של סליימים בריסטארט מהיר במיוחד – המקום הטוב ביותר לרמות 10-20!",
      "miniMap": {
        "theme": "ellinia",
        "themeName": "שביל היער של אליניה (Ellinia Forest Trail)",
        "platforms": [
          {
            "x": 10,
            "y": 30,
            "w": 30,
            "h": 6,
            "label": "ענף שמאלי"
          },
          {
            "x": 60,
            "y": 35,
            "w": 30,
            "h": 6,
            "label": "ענף ימני"
          },
          {
            "x": 30,
            "y": 60,
            "w": 40,
            "h": 6,
            "label": "ענף מרכזי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המפה"
          }
        ],
        "ropes": [
          {
            "x": 25,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 75,
            "y1": 35,
            "y2": 60
          },
          {
            "x": 50,
            "y1": 60,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 84,
          "icon": "🌳",
          "name": "פתח גזע העץ (The Tree That Grew)"
        },
        "spawnSpot": {
          "x": 8,
          "y": 84,
          "name": "כניסה מאליניה"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/7",
    "verifiedDrops": [
      {
        "name": "White Bandana",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Bronze Koif",
        "category": "Equips",
        "price": "888 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Blue Training Shirt",
        "category": "Equips",
        "price": "1,277.5 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Green Armine Skirt",
        "category": "Equips",
        "price": "974.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Sandblasted Jeans",
        "category": "Equips",
        "price": "1,499 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Lemona",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Metal Axe",
        "category": "Weapons",
        "price": "3,416.5 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Fork on a Stick",
        "category": "Weapons",
        "price": "4,999 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Cape STR Scroll: Lesser",
        "category": "Scrolls",
        "price": "29,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Squishy Liquid",
        "category": "Etc",
        "price": "12 Mesos",
        "votes": 24,
        "source": "reported"
      },
      {
        "name": "Slime Bubble",
        "category": "Etc",
        "price": "49 Mesos",
        "votes": 23,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Sapphire Ore",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Blue Baseball Cap",
        "category": "Equips",
        "price": "2,399 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Jean Shorts",
        "category": "Equips",
        "price": "67 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Cloth Pants (F)",
        "category": "Equips",
        "price": "1,155 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Beige Nitty",
        "category": "Equips",
        "price": "1,111 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Overall Armor DEF Scroll: Greater",
        "category": "Scrolls",
        "price": "1,766 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bottomwear DEF Scroll: Lesser",
        "category": "Scrolls",
        "price": "2,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bottomwear DEF Scroll: Greater",
        "category": "Scrolls",
        "price": "1,633 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Magic Def. Scroll: Intermediate",
        "category": "Scrolls",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape DEX Scroll: Lesser",
        "category": "Scrolls",
        "price": null,
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "pig",
    "name": "Pig",
    "nameHe": "חזיר רגיל (Pig)",
    "level": 7,
    "hp": 128,
    "mp": 0,
    "exp": 15,
    "icon": "🐷",
    "spriteUrl": "https://meowdb.com/msclassic/monsters/sprites/mob_8.png",
    "animUrl": "https://meowdb.com/msclassic/monsters/anim/0000008.move.webp",
    "wzId": 1210100,
    "category": "1-15",
    "town": "Henesys",
    "locations": [
      "A Hill West of Henesys (גבעה ממערב להנסיס - מפה אחת שמאלה מ-HHG1)",
      "The Rain-Forest East of Henesys (יער הגשם ממזרח להנסיס)",
      "The Pig Beach (Hidden Street - חוף החזירים הנסתר בצומת 3 הדרכים)",
      "The Hill East of Henesys (הגבעה ממזרח להנסיס)",
      "Forest West of Henesys (יער ממערב להנסיס)",
      "Beach Hunting Ground (שדה ציד החוף)",
      "3-Way Road-Split (צומת 3 הדרכים)"
    ],
    "directions": [
      "1. דרך מהירה שמאלה (מערב): מהנסיס צא שמאלה אל Henesys Hunting Ground I (HHG1). חצה את כל המפה ישר שמאלה על פני הסליימים והפטריות, והיכנס אל הפורטל התחתון בצד שמאל. תגיע מיד אל A Hill West of Henesys – שם החזירים (Pig) וחזירי הסרט (Ribbon Pig) רצים בהמוניהם!",
      "הערת ניווט חשובה ב-HHG1: אם תטפס בחבלים ובסולמות עד לקצה העליון של HHG1, תמצא פורטלים אל Henesys Hunting Ground II (HHG2) ואל HHG3 (שם יש פטריות כתומות, ירוקות וסליימים, אך אין חזירים ב-HHG1 עצמה!).",
      "2. דרך מהירה ימינה (מזרח): מהנסיס צא דרך השער הימני מזרחה אל The Hill East of Henesys, והמשך עוד מפה אחת ימינה אל The Rain-Forest East of Henesys – מפה צפופה במיוחד בעשרות חזירים וחזירי סרט עם קצב חידוש (Spawn) אדיר!",
      "3. חוף החזירים הנסתר (The Pig Beach): מ-A Hill West of Henesys המשך שמאלה דרך Forest West of Henesys אל 3-Way Road-Split (צומת 3 הדרכים המחברת את הנסיס, לית' הרבור וקרנינג). בצד שמאל התחתון בין העצים ושיח הקוצים, לחץ על מקש [↑ חץ למעלה] כדי להיכנס אל המפה הסודית האגדית The Pig Beach!"
    ],
    "safeSpots": "עמוד על הפלטפורמות והמדפים המוגבהים ויורה כוכבים/חצים/קסמים מלמעלה. חזירים נעים מהר על הקרקע, לכן תקיפה מלמעלה מונעת כל נזק מגע.",
    "notableDrops": [
      "Pig's Head (ראש חזיר לקווסטים)",
      "Pork",
      "Brown Skullcap",
      "Yellow Bandana",
      "Garnier"
    ],
    "starsClaws": "Pig's Head for Quests",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "3-Way Road-Split (צומת 3 הדרכים בין הנסיס, לית' הרבור וקרנינג סיטי)",
      "targetMap": "Hidden Street: The Pig Beach (חוף החזירים הנסתר)",
      "landmark": "שיח קוצים צהוב ועצי יער בצד שמאל תחתון של 3-Way Road-Split",
      "landmarkIcon": "🐷",
      "coordinates": "בתחתית צד שמאל של צומת 3 הדרכים, בין העצים ליד הגבעה הנמוכה",
      "howToEnter": "עמוד בתחתית צד שמאל של 3-Way Road-Split בין העצים ולחץ על מקש [↑ חץ למעלה] (ללא פורטל זוהר גלוי לעין!).",
      "warningTip": "המפה מלאה בחזירי Pig ו-Ribbon Pig בצפיפות שיא לחרישת EXP. זהירות: בתחתית המפה ליד החוף מסתובב Iron Hog ברמה 24 שמסוכן מאוד לשחקנים ברמות נמוכות!",
      "miniMap": {
        "theme": "henesys",
        "themeName": "צומת 3 הדרכים -> חוף החזירים (The Pig Beach)",
        "platforms": [
          {
            "x": 5,
            "y": 30,
            "w": 40,
            "h": 6,
            "label": "שביל מערבי לקרנינג סיטי"
          },
          {
            "x": 55,
            "y": 30,
            "w": 40,
            "h": 6,
            "label": "שביל מזרחי להנסיס"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית הצומת (הכניסה ל-Pig Beach)"
          }
        ],
        "ropes": [
          {
            "x": 20,
            "y1": 30,
            "y2": 88
          },
          {
            "x": 80,
            "y1": 30,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 15,
          "y": 84,
          "icon": "🐷",
          "name": "פורטל סודי ל-The Pig Beach (בין העצים)"
        },
        "spawnSpot": {
          "x": 90,
          "y": 84,
          "name": "כניסה מזרחית (מהנסיס)"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/8",
    "verifiedDrops": [
      {
        "name": "Brown Skullcap",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Yellow Bandana",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Orange Lolica Armor",
        "category": "Equips",
        "price": "1,200 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Brown Lolico Pants",
        "category": "Equips",
        "price": "1,000 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Bronze Grieves",
        "category": "Equips",
        "price": "1,350 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Garnier",
        "category": "Weapons",
        "price": "3,100 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Pig's Head",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 13,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Stiff Feather",
        "category": "Etc",
        "price": "50 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Gold Ore",
        "category": "Etc",
        "price": "98 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Topaz Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Skullcap",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Split Skirt",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Hard Leather Pants",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Wooden Mallet",
        "category": "Weapons",
        "price": "3,949.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape LUK Scroll: Lesser",
        "category": "Scrolls",
        "price": "69,000 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "orange-mushroom",
    "name": "Orange Mushroom",
    "nameHe": "פטריה כתומה (Orange Mushroom)",
    "level": 8,
    "hp": 80,
    "mp": 10,
    "exp": 15,
    "icon": "🍄",
    "spriteUrl": "https://meowdb.com/msclassic/monsters/sprites/mob_9.png",
    "animUrl": "https://meowdb.com/msclassic/monsters/anim/0000009.move.webp",
    "wzId": 1210102,
    "category": "1-15",
    "town": "Henesys",
    "locations": [
      "Henesys Hunting Ground I (HHG1 - מדפים עליונים)",
      "Henesys Hunting Ground II (HHG2 - טיפוס למעלה ב-HHG1)",
      "Henesys Hunting Ground III (HHG3)",
      "Mushroom Garden (גן הפטריות - פורטל נסתר ב-A Hill West of Henesys)",
      "The Hill East of Henesys (הגבעה ממזרח להנסיס)"
    ],
    "directions": [
      "מהנסיס (Henesys): צא מהפורטל השמאלי אל Henesys Hunting Ground I (HHG1). פטריות כתומות קופצות על המדפים האמצעיים והעליונים. אם תטפס בסולמות/חבלים עד לראש המפה, תעבור דרך הפורטל אל HHG2 ואל HHG3 שבהם יש עוד עשרות פטריות כתומות!",
      "גן הפטריות (Mushroom Garden): חצה את HHG1 שמאלה אל A Hill West of Henesys, וחפש את הפורטל הנסתר לגן הפטריות."
    ],
    "safeSpots": "עמוד על החבלים או על גבי פלטפורמות הקומה השנייה ב-HHG1. תקוף ממרחק ברגע שהן מגיעות לקצה המדף.",
    "notableDrops": [
      "Orange Mushroom Cap",
      "Red Headband",
      "Scroll for Helmet for DEF 10%"
    ],
    "starsClaws": "Red Headband",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/9",
    "verifiedDrops": [
      {
        "name": "Bronze Koif",
        "category": "Equips",
        "price": "888 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Green Winter Hat",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Brown Hard Leather Boots",
        "category": "Equips",
        "price": "899.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "White Gomushin",
        "category": "Equips",
        "price": "999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Ninja Sandals",
        "category": "Equips",
        "price": "1,278 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Basic Archer Gloves",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Long Sword",
        "category": "Weapons",
        "price": "2,499.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Double Axe",
        "category": "Weapons",
        "price": "2,999 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Spear",
        "category": "Weapons",
        "price": "2,949.5 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Shoes Jump Scroll: Greater",
        "category": "Scrolls",
        "price": "6,666 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Orange Mushroom Cap",
        "category": "Etc",
        "price": "18 Mesos",
        "votes": 23,
        "source": "reported"
      },
      {
        "name": "Bronze Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 22,
        "source": "reported"
      },
      {
        "name": "Diamond Ore",
        "category": "Etc",
        "price": "220 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Metal Wand",
        "category": "Weapons",
        "price": "5,266.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Hunter's Bow",
        "category": "Weapons",
        "price": "6,778 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "ribbon-pig",
    "name": "Ribbon Pig",
    "nameHe": "חזיר עם סרט (Ribbon Pig)",
    "level": 10,
    "hp": 120,
    "mp": 10,
    "exp": 20,
    "icon": "🎀",
    "spriteUrl": "https://meowdb.com/msclassic/monsters/sprites/mob_10.png",
    "animUrl": "https://meowdb.com/msclassic/monsters/anim/0000010.move.webp",
    "wzId": 1210101,
    "category": "1-15",
    "town": "Henesys / Lith Harbor",
    "locations": [
      "A Hill West of Henesys (גבעה ממערב להנסיס - מפה אחת שמאלה מ-HHG1)",
      "The Rain-Forest East of Henesys (יער הגשם ממזרח להנסיס)",
      "The Pig Beach (Hidden Street - חוף החזירים הנסתר בצומת 3 הדרכים)",
      "The Hill East of Henesys (הגבעה ממזרח להנסיס)",
      "Forest West of Henesys (יער ממערב להנסיס)",
      "Beach Hunting Ground (שדה ציד החוף)"
    ],
    "directions": [
      "1. דרך מהירה שמאלה: מהנסיס צא שמאלה ל-Henesys Hunting Ground I (HHG1). חצה את המפה ישר שמאלה על הקרקע ותיכנס לפורטל המערבי התחתון – תגיע מיד אל A Hill West of Henesys שבו חזירי סרט מסתובבים בכמויות!",
      "2. דרך מהירה ימינה: צא מהנסיס מזרחה (ימינה) אל The Hill East of Henesys, והמשך עוד מפה אחת ימינה אל The Rain-Forest East of Henesys – מקום מושלם לאיסוף סרטים וראשי חזיר לקווסטים!",
      "3. חוף החזירים הנסתר (The Pig Beach): מ-A Hill West of Henesys המשך מערבה אל 3-Way Road-Split, ובצד שמאל התחתון בין העצים לחץ [↑ חץ למעלה] כדי להיכנס אל חוף החזירים הנסתר!"
    ],
    "safeSpots": "עמוד על הפלטפורמות, המדפים המוגבהים והגדרות. חזירי סרט תוקפים מהר בקרב מגע, לכן ירי ממרחק מוגבה מעניק בטיחות מוחלטת.",
    "notableDrops": [
      "Ribbon (סרט לקווסטים)",
      "Pig's Head (ראש חזיר)",
      "White Bandana",
      "Red Ghetto Beanie",
      "Wooden Wand"
    ],
    "starsClaws": "Wooden Wand",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/10",
    "verifiedDrops": [
      {
        "name": "White Bandana",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Ghetto Beanie",
        "category": "Equips",
        "price": "700 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Bronze Full Helm",
        "category": "Equips",
        "price": "1,199.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Orange Split Piece",
        "category": "Equips",
        "price": "2,600 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Brown Cotton Shorts",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "White Split Pants",
        "category": "Equips",
        "price": "2,500 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Cloth Pants (F)",
        "category": "Equips",
        "price": "1,155 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "White Split Skirt",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Bronze Grieves",
        "category": "Equips",
        "price": "1,350 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Steel Pipe",
        "category": "Weapons",
        "price": "1,600 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Two-Handed Axe",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "War Bow",
        "category": "Weapons",
        "price": "3,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Pig's Head",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Pig's Ribbon",
        "category": "Etc",
        "price": "28 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 16,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Stiff Feather",
        "category": "Etc",
        "price": "50 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Mithril Ore",
        "category": "Etc",
        "price": "170 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Amethyst Ore",
        "category": "Etc",
        "price": "185 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Dankke",
        "category": "Weapons",
        "price": "12,749 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Wooden Sword",
        "category": "Weapons",
        "price": "2,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Shield DEF Scroll: Greater",
        "category": "Scrolls",
        "price": "4,400 Mesos",
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: Three-Way Road-Split (מפצל שלושת הדרכים בין קרנינג, הנסיס ונמל לית)",
      "targetMap": "Hidden Street: Pig Beach (חוף החזירים הנסתר)",
      "landmark": "ערמת חציר קטנה מוסתרת עם פרחים צהובים ופרח כחול בחלק התחתון",
      "landmarkIcon": "🏖️",
      "coordinates": "בשליש השמאלי של קרקעית המפה ליד שיח פרחים צהוב",
      "howToEnter": "עמוד על הקרקע בדיוק מעל לפרח הצהוב המוסתר בין החבלים ולחץ [↑ חץ למעלה].",
      "warningTip": "המפה האגדית של מייפל סטורי! אלפי חזירים מתחדשים ללא הפסקה. היזהר מ-Iron Hog ברמה 28 שמסתובב לפעמים בקרקעית.",
      "miniMap": {
        "theme": "henesys",
        "themeName": "Three-Way Road-Split (מפצל הדרכים)",
        "platforms": [
          {
            "x": 10,
            "y": 30,
            "w": 80,
            "h": 6,
            "label": "גשר עליון"
          },
          {
            "x": 25,
            "y": 60,
            "w": 50,
            "h": 6,
            "label": "מדף אמצעי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המפה (הפרח הצהוב ל-Pig Beach)"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 70,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 40,
            "y1": 60,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 28,
          "y": 84,
          "icon": "🌺",
          "name": "פרח צהוב נסתר (Pig Beach)"
        },
        "spawnSpot": {
          "x": 5,
          "y": 84,
          "name": "כניסה מ-Lith Harbor"
        }
      }
    }
  },
  {
    "id": "dark-stump",
    "name": "Dark Stump",
    "nameHe": "דארק סטאמפ (גזע עץ אפל)",
    "level": 10,
    "hp": 130,
    "mp": 0,
    "exp": 18,
    "icon": "🪵",
    "category": "1-15",
    "town": "Perion",
    "locations": [
      "West Rocky Mountain I-II (פריון)",
      "East Rocky Mountain I"
    ],
    "directions": [
      "מפריון: צא מערבה לעבר ההר הסלעי המערבי (West Rocky Mountain)."
    ],
    "safeSpots": "עמוד על שפת הצוק ותקוף למטה.",
    "notableDrops": [
      "Firewood (בולי עץ לקווסט ארתור)",
      "Dark Stump Tear",
      "Meba (דרופ נדיר!)"
    ],
    "starsClaws": "Meba Claw & Firewood",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/11",
    "verifiedDrops": [
      {
        "name": "Bronze Helmet",
        "category": "Equips",
        "price": "1,000 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Blue Pao",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Blue Qi Pao",
        "category": "Equips",
        "price": "2,588 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Stolen Fence",
        "category": "Equips",
        "price": "3,500 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Pole Arm",
        "category": "Weapons",
        "price": "3,099.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Gloves Magic Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "75,000 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Tree Branch",
        "category": "Etc",
        "price": "19 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Leaf",
        "category": "Etc",
        "price": "30 Mesos",
        "votes": 31,
        "source": "reported"
      },
      {
        "name": "Iron Ore",
        "category": "Etc",
        "price": "350 Mesos",
        "votes": 19,
        "source": "reported"
      },
      {
        "name": "Garnet Ore",
        "category": "Etc",
        "price": "180 Mesos",
        "votes": 21,
        "source": "reported"
      },
      {
        "name": "Metal Gear",
        "category": "Equips",
        "price": "1,399 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Legolier Pants",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Qi Pao Pants",
        "category": "Equips",
        "price": "2,200 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Double Axe",
        "category": "Weapons",
        "price": "2,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "octopus",
    "name": "Octopus",
    "nameHe": "אוקטופוס (תמנון בניין נטוש בקרנינג)",
    "level": 12,
    "hp": 200,
    "mp": 10,
    "exp": 24,
    "icon": "🐙",
    "category": "1-15",
    "town": "Kerning City",
    "locations": [
      "Kerning City: Construction Site (אתר הבנייה)",
      "Subway Line 1 <Area 1>"
    ],
    "directions": [
      "מקרנינג סיטי: צא מהפורטל האמצעי לכיוון אתר הבנייה (Construction Site) ועלה בפיגומים למעלה."
    ],
    "safeSpots": "עמוד על צינורות הבנייה והפיגומים מעל התמנונים. חסל אותם ממרחק עבור רגלי תמנון לקווסטים.",
    "notableDrops": [
      "Octopus Leg (רגלי תמנון למשימות מאיה וברוס)",
      "Garnier",
      "Red Potion"
    ],
    "starsClaws": "Garnier Claw & Octopus Leg",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/12",
    "verifiedDrops": [
      {
        "name": "Red Bandana",
        "category": "Equips",
        "price": "900 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Brown Winter Hat",
        "category": "Equips",
        "price": "932.5 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Red Feather Hat",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Thief Hood",
        "category": "Equips",
        "price": "1,100 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Old Wisconsin",
        "category": "Equips",
        "price": "1,500 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Red Hunter",
        "category": "Equips",
        "price": "2,124.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Tiberian",
        "category": "Equips",
        "price": "2,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Single Earring",
        "category": "Equips",
        "price": "2,599.5 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Overall Armor LUK Scroll: Greater",
        "category": "Scrolls",
        "price": "17,000 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "One-Handed Sword Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "6,333 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Octopus Leg",
        "category": "Etc",
        "price": "27 Mesos",
        "votes": 21,
        "source": "reported"
      },
      {
        "name": "Fragment of Magic",
        "category": "Etc",
        "price": "80 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Adamantium Ore",
        "category": "Etc",
        "price": "86 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Aquamarine Ore",
        "category": "Etc",
        "price": "169 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Brown Matty",
        "category": "Equips",
        "price": "5,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Burgler",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "bubbling",
    "name": "Bubbling",
    "nameHe": "באבלינג (סליים רכבת)",
    "level": 15,
    "hp": 225,
    "mp": 20,
    "exp": 26,
    "icon": "🫧",
    "category": "1-15",
    "town": "Kerning City",
    "locations": [
      "Kerning City Subway: Line 1 <Area 1>",
      "Kerning City Subway: Line 1 <Area 2>"
    ],
    "directions": [
      "מקרנינג סיטי (Kerning City): היכנס לתחנת הרכבת התחתית (Subway) במרכז העיר.",
      "קנה כרטיס נסיעה ב-500 מזו מ-Jake הכרטיסן, ועבור דרך שער הכרטיסים לקו Line 1 Area 1."
    ],
    "safeSpots": "עמוד על גבי קרונות הרכבת ועל צינורות האוורור המוגבהים. באבלינג אינו יכול לקפוץ לגובה זה, מה שמאפשר חיסול מהיר ובטוח.",
    "notableDrops": [
      "Meba Claw (כפפת רמה 15 חובה ל-Dexless!)",
      "Bubbling Huge Bubble",
      "Scroll for Dagger for ATT 60%"
    ],
    "starsClaws": "Meba Claw (Fast Attack)",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/14",
    "verifiedDrops": [
      {
        "name": "Red Apprentice Hat",
        "category": "Equips",
        "price": "900 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Black Pao",
        "category": "Equips",
        "price": "3,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Grey Able Armor",
        "category": "Equips",
        "price": "1,777 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Battle Axe",
        "category": "Weapons",
        "price": "2,999.5 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Triple-Tipped Zamadar",
        "category": "Weapons",
        "price": "4,000 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Fish Spear",
        "category": "Weapons",
        "price": "18,000 Mesos",
        "votes": 16,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 19,
        "source": "reported"
      },
      {
        "name": "Pet Equip Speed Scroll: Lesser",
        "category": "Scrolls",
        "price": "22,499 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Pet Equip Speed Scroll: Intermediate",
        "category": "Scrolls",
        "price": "78,999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Bubbling's Huge Bubble",
        "category": "Etc",
        "price": "13 Mesos",
        "votes": 21,
        "source": "reported"
      },
      {
        "name": "Mithril Ore",
        "category": "Etc",
        "price": "170 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Sapphire Ore",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Red Jack Boots",
        "category": "Equips",
        "price": "2,222 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Flowery Tube",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Weapon Def. Scroll: Intermediate",
        "category": "Scrolls",
        "price": "9,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape INT Scroll: Lesser",
        "category": "Scrolls",
        "price": "49,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dagger Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "44,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "green-mushroom",
    "name": "Green Mushroom",
    "nameHe": "פטריה ירוקה (Green Mushroom)",
    "level": 15,
    "hp": 250,
    "mp": 20,
    "exp": 26,
    "icon": "🌲",
    "spriteUrl": "https://meowdb.com/msclassic/monsters/sprites/mob_13.png",
    "animUrl": "https://meowdb.com/msclassic/monsters/anim/0000013.move.webp",
    "wzId": 1110101,
    "category": "1-15",
    "town": "Henesys / Ellinia",
    "locations": [
      "Henesys Hunting Ground I (HHG1 - מדפים עליונים)",
      "Henesys Hunting Ground II (HHG2 - טיפוס לראש HHG1)",
      "Henesys Hunting Ground III (HHG3)",
      "The Tree Dungeon (עץ הפטריות הענקי ביער אליניה)",
      "The Forest South of Ellinia"
    ],
    "directions": [
      "מהנסיס (Henesys): צא מהפורטל השמאלי אל Henesys Hunting Ground I (HHG1). פטריות ירוקות נמצאות במדפים העליונים ביותר. טיפוס בחבלים לראש המפה מעביר אותך ל-HHG2 ול-HHG3 שבהן יש צפיפות גבוהה יותר של פטריות ירוקות!",
      "מאליניה (The Tree Dungeon): צא דרומה לכיוון שדות אליניה, וחפש את העץ החלול (Tree Dungeon) – המקום המושלם לחרוש פטריות ירוקות ולמצוא Pan Lid (מכסה סיר)!"
    ],
    "safeSpots": "שימו לב: פטריות ירוקות קופצות גבוה! עמדו על פלטפורמות במרחק של לפחות שני מדפים מעליהן ותקפו בעזרת Keen Eyes מטווח מקסימלי.",
    "notableDrops": [
      "Pan Lid (מגן מכסה סיר אגדי ומבוקש!)",
      "Green Mushroom Cap",
      "Garnier Claw",
      "Scroll for Glove for DEX 60%"
    ],
    "starsClaws": "Garnier Claw",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/13",
    "verifiedDrops": [
      {
        "name": "Green Feather Hat",
        "category": "Equips",
        "price": "1,199 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Green Archer Top",
        "category": "Equips",
        "price": "1,299 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Bennis Chainmail",
        "category": "Equips",
        "price": "3,500 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Green Bennis Chainmail (F)",
        "category": "Equips",
        "price": "3,499.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Blue Pao Bottoms",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Qi Pao Pants",
        "category": "Equips",
        "price": "2,200 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Sandblasted Jeans",
        "category": "Equips",
        "price": "1,499 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Green Woodsman Boots",
        "category": "Equips",
        "price": "1,199 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Pan Lid",
        "category": "Equips",
        "price": "65,000 Mesos",
        "votes": 35,
        "source": "reported"
      },
      {
        "name": "Mace",
        "category": "Weapons",
        "price": "3,000 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Emerald Staff",
        "category": "Weapons",
        "price": "3,200 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "One-Handed Axe Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "4,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Claw Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "200,000 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Pet Equip Speed Scroll: Lesser",
        "category": "Scrolls",
        "price": "22,499 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Green Mushroom Cap",
        "category": "Etc",
        "price": "11.5 Mesos",
        "votes": 22,
        "source": "reported"
      },
      {
        "name": "Fragment of Magic",
        "category": "Etc",
        "price": "80 Mesos",
        "votes": 24,
        "source": "reported"
      },
      {
        "name": "Silver Ore",
        "category": "Etc",
        "price": "85 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Emerald Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Green Matty",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Legolier",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Lemona",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Zeco",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Shield DEF Scroll: Greater",
        "category": "Scrolls",
        "price": "4,400 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape DEX Scroll: Greater",
        "category": "Scrolls",
        "price": "29,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Speed Scroll: Intermediate",
        "category": "Scrolls",
        "price": "78,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Jump Scroll: Lesser",
        "category": "Scrolls",
        "price": "7,000 Mesos",
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: The Forest North of Ellinia (היער צפונית לאליניה)",
      "targetMap": "Hidden Street: Tree Dungeon, Forest Up North (מבוך העץ הצפוני)",
      "landmark": "גזע עץ ענק חלול עם פתח עגול חשוך בבסיס הגזע",
      "landmarkIcon": "🍄",
      "coordinates": "במרכז המפה על ענף העץ הראשי",
      "howToEnter": "עמוד בדיוק בפתח השחור של גזע העץ ולחץ [↑ חץ למעלה].",
      "warningTip": "בתוך גזע העץ יש 4 קומות עמוסות בפטריות ירוקות (Green Mushrooms) ופטריות קרניים (Horny Mushrooms). מושלם לקוסמים ולגנבים!",
      "miniMap": {
        "theme": "ellinia",
        "themeName": "The Forest North of Ellinia (היער צפונית לאליניה)",
        "platforms": [
          {
            "x": 15,
            "y": 25,
            "w": 70,
            "h": 6,
            "label": "ענף עליון"
          },
          {
            "x": 25,
            "y": 55,
            "w": 50,
            "h": 6,
            "label": "ענף אמצעי (פתח גזע העץ)"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית היער"
          }
        ],
        "ropes": [
          {
            "x": 35,
            "y1": 25,
            "y2": 55
          },
          {
            "x": 65,
            "y1": 25,
            "y2": 55
          },
          {
            "x": 50,
            "y1": 55,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 51,
          "icon": "🌳",
          "name": "פתח גזע העץ (Tree Dungeon)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מאליניה"
        }
      }
    }
  },
  {
    "id": "axe-stump",
    "name": "Axe Stump",
    "nameHe": "אקס סטאמפ (גזע עץ עם גרזן)",
    "level": 17,
    "hp": 300,
    "mp": 0,
    "exp": 30,
    "icon": "🪓",
    "category": "16-25",
    "town": "Perion",
    "locations": [
      "East Rocky Mountain II-III",
      "Perion Dungeon Entrance"
    ],
    "directions": [
      "מפריון: צא מזרחה ועלה לרכס ההרים East Rocky Mountain II."
    ],
    "safeSpots": "עמוד על מדפי הסלע מעל גזעי העץ עם הגרזנים. מכה מהגרזן מורידה כמות נאה של HP ברמות נמוכות.",
    "notableDrops": [
      "Axe Stump's Axe (גרזן לקווסט)",
      "Firewood",
      "Bronze Igor"
    ],
    "starsClaws": "Bronze Igor",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/15",
    "verifiedDrops": [
      {
        "name": "Brown Robin Hat",
        "category": "Equips",
        "price": "2,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Qi Pao",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Legolier Pants",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Wooden Baseball Bat",
        "category": "Weapons",
        "price": "4,100 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Overall Armor STR Scroll: Greater",
        "category": "Scrolls",
        "price": "15,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "One-Handed Blunt Weapon Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "6,666 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Firewood",
        "category": "Etc",
        "price": "24 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Bronze Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Matty",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Burgler",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Legolier",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Avenger",
        "category": "Equips",
        "price": "27,777 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Purple Avenger",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Battle Shield",
        "category": "Equips",
        "price": "12,750 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Wizard Wand",
        "category": "Weapons",
        "price": "19,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "ghost-stump",
    "name": "Ghost Stump",
    "nameHe": "גואוסט סטאמפ (גזע רוח רפאים)",
    "level": 19,
    "hp": 380,
    "mp": 15,
    "exp": 34,
    "icon": "👻",
    "category": "16-25",
    "town": "Perion",
    "locations": [
      "East Rocky Mountain III"
    ],
    "directions": [
      "מפריון (Perion): צא מהפורטל המזרחי של העיר אל עבר שבילי הסלעים Rocky Road.",
      "טפס במעלה הצוקים אל East Rocky Mountain II והמשך מזרחה אל East Rocky Mountain III.",
      "מיקום הציד: Ghost Stump (רמה 19) מופיעים בצמרות העצים היבשים ובראש מדפי הסלעים הגבוהים."
    ],
    "safeSpots": "עמוד על גבי סולמות החבלים ותקוף מטווח.",
    "notableDrops": [
      "Ghost Stump Tree Sap",
      "Scroll for Bottomwear for DEF 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ghost%20Stump",
    "verifiedDrops": []
  },
  {
    "id": "stirge",
    "name": "Stirge",
    "nameHe": "עטלף ביוב (סטירג')",
    "level": 20,
    "hp": 300,
    "mp": 20,
    "exp": 32,
    "icon": "🦇",
    "category": "16-25",
    "town": "Kerning City",
    "locations": [
      "Kerning City Subway: Line 1 <Area 1>",
      "Kerning City Subway: Line 1 <Area 2>",
      "Subway Transfer"
    ],
    "directions": [
      "מקרנינג סיטי (Kerning City): רד לתחנת הרכבת התחתית, שלם כרטיס והיכנס לקרון Line 1 Area 1.",
      "עטלפים עפים בחלקים העליונים של קווי הרכבת."
    ],
    "safeSpots": "עמוד על גגות הרכבת. מכיוון שעטלפים מעופפים, השתמש ב-Lucky Seven ליירוט מהיר בטרם הם יצללו לכיוונך.",
    "notableDrops": [
      "Subi Throwing-Stars (כוכבי הטלה!)",
      "Stirge Wing",
      "Scroll for Shoes for DEX 10%"
    ],
    "starsClaws": "Subi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/17",
    "verifiedDrops": [
      {
        "name": "Red Starry Bandana",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Blue Sergeant",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Purple Shivermail",
        "category": "Equips",
        "price": "2,694 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Brown Sneak Pants",
        "category": "Equips",
        "price": "2,666 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Basic Boots",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Work Gloves",
        "category": "Equips",
        "price": "1,999 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 21,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Lemon",
        "category": "Use",
        "price": "146.5 Mesos",
        "votes": 21,
        "source": "reported"
      },
      {
        "name": "Cape Magic Def. Scroll: Greater",
        "category": "Scrolls",
        "price": "1,999 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Pet Equip Jump Scroll: Intermediate",
        "category": "Scrolls",
        "price": "19,000 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Stirge Wing",
        "category": "Etc",
        "price": "27.5 Mesos",
        "votes": 30,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 22,
        "source": "reported"
      },
      {
        "name": "Fragment of Magic",
        "category": "Etc",
        "price": "80 Mesos",
        "votes": 23,
        "source": "reported"
      },
      {
        "name": "Stiff Feather",
        "category": "Etc",
        "price": "50 Mesos",
        "votes": 21,
        "source": "reported"
      },
      {
        "name": "Iron Ore",
        "category": "Etc",
        "price": "350 Mesos",
        "votes": 24,
        "source": "reported"
      },
      {
        "name": "Garnet Ore",
        "category": "Etc",
        "price": "180 Mesos",
        "votes": 24,
        "source": "reported"
      },
      {
        "name": "Ivory Shouldermail",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Ivory Shouldermail Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "mano",
    "name": "Mano (בוס)",
    "nameHe": "מאנו (חילזון ענק קשת בענן)",
    "level": 20,
    "hp": 2000,
    "mp": 100,
    "exp": 180,
    "icon": "🐌",
    "category": "bosses",
    "town": "Lith Harbor",
    "locations": [
      "Thicket Around Beach III (חוף ליט הארבור)"
    ],
    "directions": [
      "מליט הארבור (Lith Harbor): צא מהפורטל השמאלי לכיוון החופים ועבור עד Thicket Around Beach III."
    ],
    "safeSpots": "עמוד על גבי הסלעים שלאורך החוף ותקוף מטווח בטוח. היזהר מהחלזונות הקטנים שהוא מזמן.",
    "notableDrops": [
      "Rainbow Colored Snail Shell (שריון קשת לקווסט)",
      "Scroll for Gloves for HP 10%"
    ],
    "starsClaws": "Rainbow Shell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mano%20(%D7%91%D7%95%D7%A1)",
    "verifiedDrops": []
  },
  {
    "id": "blue-mushroom",
    "name": "Blue Mushroom",
    "nameHe": "פטרייה כחולה (Blue Mushroom)",
    "level": 20,
    "hp": 350,
    "mp": 20,
    "exp": 32,
    "icon": "🍄",
    "category": "16-25",
    "town": "Henesys (מזרחית להנסיס)",
    "locations": [
      "Hidden Street: The Blue Mushroom Forest (יער הפטריות הכחולות הנסתר)",
      "Victoria Road: The Forest East of Henesys (היער מזרחית להנסיס)",
      "Victoria Road: The Rain-Forest East of Henesys (יער הגשם מזרחית להנסיס)"
    ],
    "directions": [
      "1. מהעיר הנסיס (Henesys): צא דרך הפורטל הימני ביותר (מזרחה) אל המפה הראשונה: \"The Hill East of Henesys\".",
      "2. לך ימינה וחצה את הפורטל למפה השנייה: \"The Rain-Forest East of Henesys\".",
      "3. המשך ימינה וחצה שוב את הפורטל למפה השלישית: \"The Forest East of Henesys\".",
      "4. בתוך \"The Forest East of Henesys\": עלה בסולמות ובחבלים אל הפלטפורמה השמאלית-עליונה ביותר (Top-Left Platform).",
      "5. בפלטפורמה זו ניצב עמוד פנס רחוב ושילוט מעץ (Wooden Street Lamp / Signpost Pole עם כובע פעמון ושלטי עץ). עמוד בצמוד לעמוד ולחץ [↑ חץ למעלה] כדי להיכנס אל Blue Mushroom Forest!"
    ],
    "safeSpots": "עמוד על ראשי ענפי העץ והפטריות הענקיות הפזורות במפה. פטריות כחולות נעות לאט ופגיעות מאוד ל-Lucky Seven.",
    "notableDrops": [
      "Blue Mushroom Cap",
      "Pan Lid (מגן מכסה סיר המבוקש!)",
      "Dead Cheque",
      "Bronze Dagger",
      "Scroll for Helmet for DEF 10%"
    ],
    "starsClaws": "Pan Lid & Bronze Dagger",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: The Forest East of Henesys (היער מזרחית להנסיס)",
      "targetMap": "Hidden Street: The Blue Mushroom Forest (יער הפטריות הכחולות)",
      "landmark": "עמוד פנס רחוב ושילוט מעץ גבוה (Wooden Street Lamp / Signpost Pole) עם כובע פעמון ושלטי עץ קטנים עליו",
      "landmarkIcon": "🏮",
      "coordinates": "בפלטפורמה השמאלית-עליונה ביותר של המפה (Top-Left Platform, X: 16%, Y: 22%)",
      "howToEnter": "טפס לפלטפורמה הגבוהה בצד שמאל, עמוד בדיוק צמוד לעמוד השילוט/פנס העץ ולחץ על מקש [↑ חץ למעלה במקלדת].",
      "warningTip": "חשוב מאוד: הפורטל אינו באליניה ואינו בתוך גזע עץ! הוא נמצא מזרחית להנסיס (3 מפות ימינה מהעיר) על גבי עמוד הפנס השמאלי-עליון במפת The Forest East of Henesys. אין עליו הילה כחולה או אור זוהר.",
      "miniMap": {
        "theme": "henesys",
        "themeName": "The Forest East of Henesys (היער מזרחית להנסיס)",
        "platforms": [
          {
            "x": 8,
            "y": 26,
            "w": 36,
            "h": 6,
            "label": "פלטפורמה שמאלית-עליונה (עמוד הפנס/הפורטל הנסתר)"
          },
          {
            "x": 58,
            "y": 36,
            "w": 36,
            "h": 6,
            "label": "מדף דשא עליון ימין"
          },
          {
            "x": 20,
            "y": 58,
            "w": 60,
            "h": 6,
            "label": "מפלס דשא מרכזי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המפה"
          }
        ],
        "ropes": [
          {
            "x": 24,
            "y1": 26,
            "y2": 58
          },
          {
            "x": 74,
            "y1": 36,
            "y2": 58
          },
          {
            "x": 50,
            "y1": 58,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 18,
          "y": 22,
          "icon": "🏮",
          "name": "עמוד פנס שילוט - כניסה ל-Blue Mushroom Forest"
        },
        "spawnSpot": {
          "x": 90,
          "y": 84,
          "name": "כניסה מ-The Rain-Forest East of Henesys"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/16",
    "verifiedDrops": [
      {
        "name": "Blue Wizardry Hat",
        "category": "Equips",
        "price": "2,444 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Green Loosecap",
        "category": "Equips",
        "price": "2,155.5 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Brown Lamelle",
        "category": "Equips",
        "price": "2,500 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Black Knucklevest Pants",
        "category": "Equips",
        "price": "19,999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Blue Woodsman Boots",
        "category": "Equips",
        "price": "1,199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Wizard Staff",
        "category": "Weapons",
        "price": "7,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Potion",
        "category": "Use",
        "price": "40 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Magic Potion",
        "category": "Use",
        "price": "300 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Gloves Crit. Rate Scroll: Greater",
        "category": "Scrolls",
        "price": "44,999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Two-handed Sword Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "21,610.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Mushroom Cap",
        "category": "Etc",
        "price": "44.5 Mesos",
        "votes": 19,
        "source": "reported"
      },
      {
        "name": "Gold Ore",
        "category": "Etc",
        "price": "98 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Sapphire Ore",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Blue Matty",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Burgler",
        "category": "Equips",
        "price": "4,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Avenger",
        "category": "Equips",
        "price": "12,800 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Avenger",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Piettra Skirt",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Halfmoon Zamadar",
        "category": "Weapons",
        "price": "20,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Sledgehammer",
        "category": "Weapons",
        "price": "15,277.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bottomwear DEF Scroll: Greater",
        "category": "Scrolls",
        "price": "1,633 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "sand-rabbit-brown",
    "name": "Sand Rabbit (Brown)",
    "nameHe": "Sand Rabbit (Brown)",
    "level": 20,
    "hp": 350,
    "mp": 20,
    "exp": 32,
    "icon": "🐇",
    "category": "16-25",
    "town": "Ariant",
    "locations": [
      "Outside North Entrance of Ariant"
    ],
    "directions": [
      "From Ariant: Exit north portal into Outside North Entrance of Ariant."
    ],
    "safeSpots": "Flat desert map; very easy for low level training.",
    "notableDrops": [
      "Clover",
      "Scroll for Helmet for DEF 10%",
      "Bronze Dagger"
    ],
    "starsClaws": "Bronze Dagger",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sand%20Rabbit%20(Brown)",
    "verifiedDrops": []
  },
  {
    "id": "jr-necki",
    "name": "Jr. Necki",
    "nameHe": "ג'וניור נקי (נחש ביצות)",
    "level": 21,
    "hp": 350,
    "mp": 30,
    "exp": 32,
    "icon": "🐍",
    "category": "16-25",
    "town": "Kerning City",
    "locations": [
      "The Swamp: Swamp of Despair I",
      "The Swamp: Swamp of Despair II",
      "Kerning City Middle Forest"
    ],
    "directions": [
      "מקרנינג סיטי (Kerning City): צא מהפורטל השמאלי אל Kerning Middle Forest.",
      "רד מטה אל אזור הביצות The Swamp והיכנס לפורטל אל Swamp of Despair."
    ],
    "safeSpots": "הנחשים קטנים ובעלי התחמקות גבוהה. תוספת ה-Accuracy מ-Nimble Body קריטית כאן! עמוד על קורות העץ שמעל המים הטובעניים.",
    "notableDrops": [
      "Jr. Necki Skin",
      "Scroll for Cape for Magic Def 60%",
      "Dagger 10%"
    ],
    "starsClaws": "Daggers",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/18",
    "verifiedDrops": [
      {
        "name": "Coconut Knife",
        "category": "Weapons",
        "price": "5,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Stinger",
        "category": "Weapons",
        "price": "5,527.5 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Pet Equip Jump Scroll: Lesser",
        "category": "Scrolls",
        "price": "7,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Jr. Necki Skin",
        "category": "Etc",
        "price": "30 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Fragment of Magic",
        "category": "Etc",
        "price": "80 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Mithril Ore",
        "category": "Etc",
        "price": "170 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Topaz Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Blue Baseball Cap",
        "category": "Equips",
        "price": "2,399 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Leather Hoodwear",
        "category": "Equips",
        "price": "1,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Jangoon Armor",
        "category": "Equips",
        "price": "13,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piettra",
        "category": "Equips",
        "price": "14,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Piettra",
        "category": "Equips",
        "price": "29,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Jangoon Skirt",
        "category": "Equips",
        "price": "12,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piettra Skirt",
        "category": "Equips",
        "price": "15,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Orange",
        "category": "Use",
        "price": "34.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Shield DEF Scroll: Greater",
        "category": "Scrolls",
        "price": "4,400 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "sand-rabbit-white",
    "name": "Sand Rabbit (White)",
    "nameHe": "Sand Rabbit (White)",
    "level": 21,
    "hp": 380,
    "mp": 20,
    "exp": 34,
    "icon": "🐇",
    "category": "16-25",
    "town": "Ariant",
    "locations": [
      "Outside North Entrance of Ariant"
    ],
    "directions": [
      "From Ariant: North portal into desert fields."
    ],
    "safeSpots": "Rabbits hop slowly; stay at range.",
    "notableDrops": [
      "White Fur",
      "Scroll for Shoes for DEX 10%",
      "Steel Igor"
    ],
    "starsClaws": "Steel Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sand%20Rabbit%20(White)",
    "verifiedDrops": []
  },
  {
    "id": "horny-mushroom",
    "name": "Horny Mushroom",
    "nameHe": "פטריה מקורננת",
    "level": 22,
    "hp": 300,
    "mp": 35,
    "exp": 35,
    "icon": "🟤",
    "category": "16-25",
    "town": "Sleepywood",
    "locations": [
      "Ant Tunnel I (מנהרת הנמלים 1)",
      "Ant Tunnel II",
      "Ant Tunnel III"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): צא מהפורטל הימני של העיר ישירות אל תוך Ant Tunnel I.",
      "איך מגיעים לסליפיווד מקרנינג סיטי: צא שמאלה ל-Middle Forest, המשך דרך Deep Forest עד סליפיווד במרכז היבשת."
    ],
    "safeSpots": "בתוך מנהרת הנמלים ישנם שלטי עץ ופלטפורמות אבן גבוהות. עמוד עליהן ותקוף עם Lucky Seven. המפלצות נערמות למטה והורגות אחת את השנייה בריצה.",
    "notableDrops": [
      "Steel Igor (כפפת מתנקש לרמה 25!)",
      "Horny Mushroom Cap",
      "Scroll for Claw for ATT 10%"
    ],
    "starsClaws": "Steel Igor Claw",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/19",
    "verifiedDrops": [
      {
        "name": "Brown Jester",
        "category": "Equips",
        "price": "3,800 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Blue Hawkeye",
        "category": "Equips",
        "price": "2,360.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Blue Guise",
        "category": "Equips",
        "price": "2,222 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Blue Pole-Feather Hat",
        "category": "Equips",
        "price": "3,449.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Dark Master Sergeant",
        "category": "Equips",
        "price": "3,499 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Blue Shark",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Black Sneak Pants",
        "category": "Equips",
        "price": "3,299 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Sky Sneak Pants",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Blue Jewelry Boots",
        "category": "Equips",
        "price": "2,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Steel Fingerless Gloves",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Steel Shield",
        "category": "Equips",
        "price": "3,599 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Cutlus",
        "category": "Weapons",
        "price": "12,000 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Iron Dagger",
        "category": "Weapons",
        "price": "7,000 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Mithril Pole Arm",
        "category": "Weapons",
        "price": "10,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 22,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Magic Potion",
        "category": "Use",
        "price": "300 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Two-handed Blunt Weapon Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "6,000 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Horny Mushroom Cap",
        "category": "Etc",
        "price": "20 Mesos",
        "votes": 17,
        "source": "reported"
      },
      {
        "name": "Bronze Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 16,
        "source": "reported"
      },
      {
        "name": "Sapphire Ore",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Topaz Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Green Pole-Feather Hat",
        "category": "Equips",
        "price": "5,149.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Burgler",
        "category": "Equips",
        "price": "4,444 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Pilfer",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Zeco",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Magic Def. Scroll: Greater",
        "category": "Scrolls",
        "price": "1,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Two-handed Sword Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "79,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Two-handed Axe Attack Scroll: Greater",
        "category": "Scrolls",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Speed Scroll: Lesser",
        "category": "Scrolls",
        "price": "22,499 Mesos",
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: The Forest South of Ellinia (היער דרומית לאליניה)",
      "targetMap": "Hidden Street: Tree Dungeon, Forest Down South (מבוך העץ הדרומי)",
      "landmark": "חור עגול בגזע עץ עבות במפלס הדשא האמצעי",
      "landmarkIcon": "🪵",
      "coordinates": "מפלס אמצעי, בתוך הפתח של הגזע השמאלי",
      "howToEnter": "עמוד בפתח העגול שבגזע העץ ולחץ [↑ חץ למעלה].",
      "warningTip": "צפיפות פטריות קרניים עצומה עם דרופים של מגילות שריון וכלי נשק.",
      "miniMap": {
        "theme": "ellinia",
        "themeName": "The Forest South of Ellinia (היער דרומית לאליניה)",
        "platforms": [
          {
            "x": 10,
            "y": 30,
            "w": 80,
            "h": 6,
            "label": "ענף עליון"
          },
          {
            "x": 20,
            "y": 58,
            "w": 60,
            "h": 6,
            "label": "ענף אמצעי (פתח העץ)"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המפה"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 30,
            "y2": 58
          },
          {
            "x": 70,
            "y1": 30,
            "y2": 58
          },
          {
            "x": 50,
            "y1": 58,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 35,
          "y": 54,
          "icon": "🚪",
          "name": "פתח עץ דרומי (Tree Dungeon South)"
        },
        "spawnSpot": {
          "x": 8,
          "y": 84,
          "name": "כניסה מאליניה"
        }
      }
    }
  },
  {
    "id": "dark-axe-stump",
    "name": "Dark Axe Stump",
    "nameHe": "דארק אקס סטאמפ (גזע אפל עם גרזן)",
    "level": 22,
    "hp": 550,
    "mp": 10,
    "exp": 38,
    "icon": "🪓",
    "category": "16-25",
    "town": "Perion",
    "locations": [
      "East Rocky Mountain IV-VII"
    ],
    "directions": [
      "מפריון: עלה לראש ההר הסלעי המזרחי מפה 4 ומעלה."
    ],
    "safeSpots": "עמוד על שלדי העץ והסלעים הגבוהים.",
    "notableDrops": [
      "Dark Axe Stump's Axe",
      "Scroll for Topwear for DEF 10%",
      "Steel Igor"
    ],
    "starsClaws": "Steel Igor Claw",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/20",
    "verifiedDrops": [
      {
        "name": "Bronze Football Helmet",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Black Jester",
        "category": "Equips",
        "price": "2,299 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Red Pole-Feather Hat",
        "category": "Equips",
        "price": "4,222 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Brown Matty",
        "category": "Equips",
        "price": "5,000 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Green Legolier",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Blue Legolier",
        "category": "Equips",
        "price": "7,499 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Able Armor Skirt",
        "category": "Equips",
        "price": "1,700 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Machete",
        "category": "Weapons",
        "price": "5,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Old Wooden Staff",
        "category": "Weapons",
        "price": "4,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Sap of Ancient Tree",
        "category": "Use",
        "price": "359 Mesos",
        "votes": 22,
        "source": "reported"
      },
      {
        "name": "One-Handed Sword Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "6,333 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Wooden Top",
        "category": "Stars",
        "price": "149,499.5 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Firewood",
        "category": "Etc",
        "price": "24 Mesos",
        "votes": 25,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Diamond Ore",
        "category": "Etc",
        "price": "220 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Green Pole-Feather Hat",
        "category": "Equips",
        "price": "5,149.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Pole-Feather Hat",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Piettra",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Purple Avenger",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Legolier Pants",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Legolier Pants",
        "category": "Equips",
        "price": "5,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Piettra Skirt",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Mithril Wand",
        "category": "Weapons",
        "price": "18,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "wooden-mask",
    "name": "Wooden Mask",
    "nameHe": "Wooden Mask",
    "level": 23,
    "hp": 500,
    "mp": 30,
    "exp": 42,
    "icon": "👺",
    "category": "16-25",
    "town": "Perion",
    "locations": [
      "Excavation Site: Remains I",
      "Excavation Site: Military Camp I"
    ],
    "directions": [
      "From Perion: Head through the far-right portal towards Rocky Road -> continue right into Excavation Site: Excavation Center -> enter portal to Remains I."
    ],
    "safeSpots": "Stand on the wooden scaffolding and pillars above the excavation pits. Sniping with Lucky Seven avoids their melee tackle.",
    "notableDrops": [
      "Wooden Mask Piece",
      "Scroll for Helmet for DEF 60%",
      "Bronze Dagger"
    ],
    "starsClaws": "Bronze Dagger",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Wooden%20Mask",
    "verifiedDrops": []
  },
  {
    "id": "bellamoa",
    "name": "Bellamoa",
    "nameHe": "Bellamoa",
    "level": 23,
    "hp": 480,
    "mp": 30,
    "exp": 40,
    "icon": "🐍",
    "category": "16-25",
    "town": "Ariant",
    "locations": [
      "Dry Desert"
    ],
    "directions": [
      "From Ariant: Exit east portal into Dry Desert."
    ],
    "safeSpots": "Stand on sandstone dunes.",
    "notableDrops": [
      "Snake Rattle",
      "Scroll for Bottomwear for DEF 60%",
      "Bronze Wristell"
    ],
    "starsClaws": "Bronze Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Bellamoa",
    "verifiedDrops": []
  },
  {
    "id": "zombie-mushroom",
    "name": "Zombie Mushroom",
    "nameHe": "פטריה זומבית",
    "level": 24,
    "hp": 500,
    "mp": 50,
    "exp": 42,
    "icon": "🧟",
    "category": "16-25",
    "town": "Sleepywood",
    "locations": [
      "Ant Tunnel I & II (בחלקים התחתונים)",
      "Ant Tunnel IV",
      "The Grave of Mushmom"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): היכנס ל-Ant Tunnel I והתקדם מזרחה ומטה אל Ant Tunnel II ו-III.",
      "בקרקעית המערות תמצא שפע פטריות זומבי לצד פטריות מקורננות."
    ],
    "safeSpots": "נצל את המדרגות החצובות בקירות המערה. Lucky Seven ממוקסם (ברמות 20+) יוריד אותן ב-1-2 מכות בטוחות.",
    "notableDrops": [
      "Zombie Mushroom Cap",
      "Dark Wooden Target",
      "Scroll for Cape for HP 60%"
    ],
    "starsClaws": "Dark Wooden Target",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/21",
    "verifiedDrops": [
      {
        "name": "Pink Jester",
        "category": "Equips",
        "price": "2,599 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Blue Pole-Feather Hat",
        "category": "Equips",
        "price": "3,449.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Brown Burgler",
        "category": "Equips",
        "price": "4,444 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Weighted Earrings",
        "category": "Equips",
        "price": "5,500 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Red Hwarang Shirt",
        "category": "Equips",
        "price": "5,000 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Blue Chaos Robe",
        "category": "Equips",
        "price": "12,222 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "White Chaos Robe",
        "category": "Equips",
        "price": "11,000 Mesos",
        "votes": 12,
        "source": "reported"
      },
      {
        "name": "Nakamaki",
        "category": "Weapons",
        "price": "16,582.5 Mesos",
        "votes": 11,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 13,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Dexterity Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Spear Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "16,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Claw Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "200,000 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Charm of the Undead",
        "category": "Etc",
        "price": "21 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Gold Ore",
        "category": "Etc",
        "price": "98 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Emerald Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "White Piette",
        "category": "Equips",
        "price": "26,944 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Piette Pants",
        "category": "Equips",
        "price": "19,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Counter",
        "category": "Weapons",
        "price": "27,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Flowery Tube",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Dungeon: Ant Tunnel I (מנהרת הנמלים 1 ליד סליפיווד)",
      "targetMap": "Hidden Street: The Ant Tunnel Park (פארק מנהרת הנמלים)",
      "landmark": "קשת סלעים עם נר דולק וגולגולת מעל פתח חשוך",
      "landmarkIcon": "💀",
      "coordinates": "בסוף הירידה של מנהרת הנמלים 1",
      "howToEnter": "עמוד מול פתח קשת הסלעים עם הנר ולחץ [↑ חץ למעלה].",
      "warningTip": "המקום המרכזי לחרישת רמות 24-32. פטריות זומבי מתחדשות במהירות עצומה ומפילות מגילות והרבה שיקויים.",
      "miniMap": {
        "theme": "sleepywood",
        "themeName": "Ant Tunnel I (מנהרת הנמלים 1)",
        "platforms": [
          {
            "x": 10,
            "y": 25,
            "w": 80,
            "h": 6,
            "label": "כניסה מסליפיווד"
          },
          {
            "x": 20,
            "y": 55,
            "w": 60,
            "h": 6,
            "label": "מפלס מערה אמצעי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "תחתית מנהרת הנמלים"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 25,
            "y2": 55
          },
          {
            "x": 70,
            "y1": 25,
            "y2": 55
          },
          {
            "x": 50,
            "y1": 55,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 75,
          "y": 84,
          "icon": "💀",
          "name": "קשת סלעים (Ant Tunnel Park)"
        },
        "spawnSpot": {
          "x": 15,
          "y": 21,
          "name": "שער סליפיווד"
        }
      }
    }
  },
  {
    "id": "rocky-mask",
    "name": "Rocky Mask",
    "nameHe": "Rocky Mask",
    "level": 24,
    "hp": 550,
    "mp": 40,
    "exp": 45,
    "icon": "🗿",
    "category": "16-25",
    "town": "Perion",
    "locations": [
      "Excavation Site: Remains II",
      "Excavation Site: Relic Excavation"
    ],
    "directions": [
      "From Perion: Exit right through Rocky Road -> Excavation Site -> cross Remains I into Remains II."
    ],
    "safeSpots": "Use upper stone platforms to snipe downward. They have high physical defense so Lucky Seven ignores armor effectively.",
    "notableDrops": [
      "Rocky Mask Piece",
      "Steel Igor",
      "Scroll for Bottomwear for DEF 10%"
    ],
    "starsClaws": "Steel Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Rocky%20Mask",
    "verifiedDrops": []
  },
  {
    "id": "jr-cactus",
    "name": "Jr. Cactus",
    "nameHe": "Jr. Cactus",
    "level": 24,
    "hp": 520,
    "mp": 30,
    "exp": 42,
    "icon": "🌵",
    "category": "16-25",
    "town": "Ariant",
    "locations": [
      "Cactus Desert 1"
    ],
    "directions": [
      "From Ariant: Dry Desert -> portal to Cactus Desert 1."
    ],
    "safeSpots": "Stand on stone blocks in the sand.",
    "notableDrops": [
      "Cactus Needle",
      "Scroll for Overall Armor for DEX 10%",
      "Bronze Wristell"
    ],
    "starsClaws": "Bronze Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Cactus",
    "verifiedDrops": []
  },
  {
    "id": "wild-boar",
    "name": "Wild Boar",
    "nameHe": "חזיר בר (עציץ פרא)",
    "level": 25,
    "hp": 550,
    "mp": 30,
    "exp": 42,
    "icon": "🐗",
    "category": "16-25",
    "town": "Perion",
    "locations": [
      "Land of Wild Boar I (המפה הסודית בפריון)",
      "Land of Wild Boar II",
      "East Rocky Mountain II"
    ],
    "directions": [
      "מפריון (Perion): צא מהפורטל הימני אל East Rocky Mountain I.",
      "המשך ימינה אל East Rocky Mountain II. חפש שער אבנים עם דלת עץ במרכז ההר, לחץ על מקש החץ למעלה כדי להיכנס אל Land of Wild Boar!"
    ],
    "safeSpots": "קריטי ביותר: לחזירי בר מהירות ריצה גבוהה מאוד! לעולם אל תעמוד באותו מפלס קרקע איתם. עמוד על מדפי הסלע הגבוהים ותקוף מטווח מקסימלי עם Keen Eyes.",
    "notableDrops": [
      "Brown Bamboo Hat (+3 LUK - הכובע הכי חשוב למתנקש ברמה 25!)",
      "Wild Boar Tooth",
      "Steel Igor (כפפה לרמה 25)",
      "Scroll for Shield for DEF 60%"
    ],
    "starsClaws": "Brown Bamboo Hat (+3 LUK) & Steel Igor",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/22",
    "verifiedDrops": [
      {
        "name": "Blue Jester",
        "category": "Equips",
        "price": "2,000 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Weighted Earrings",
        "category": "Equips",
        "price": "5,500 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Knucklevest Pants",
        "category": "Equips",
        "price": "5,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Forked Dagger",
        "category": "Weapons",
        "price": "8,943.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Ryden",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Eagle Crow",
        "category": "Weapons",
        "price": "10,666 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Warrior Potion",
        "category": "Use",
        "price": "327.5 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Stiff Feather",
        "category": "Etc",
        "price": "50 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Adamantium Ore",
        "category": "Etc",
        "price": "86 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Opal Ore",
        "category": "Etc",
        "price": "122 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Bronze Football Helmet",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Guiltian",
        "category": "Equips",
        "price": "5,899 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Guiltian",
        "category": "Equips",
        "price": "36,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Distinction",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Knucklevest",
        "category": "Equips",
        "price": "7,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piette",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piette Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Sabretooth",
        "category": "Weapons",
        "price": "34,888 Mesos",
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: East Rocky Mountain II (הר הסלעים המזרחי 2 ליד פריון)",
      "targetMap": "Hidden Street: The Land of Wild Boar (ארץ חזירי הבר)",
      "landmark": "דלת עץ חומה קטנה של מחסן סלעים החפורה בתוך ההר בצד ימין-תחתון",
      "landmarkIcon": "🐗",
      "coordinates": "בצד ימין-תחתון של המפה (ליד שלט העץ ומחסום העץ)",
      "howToEnter": "רד אל המפלס הימני התחתון של ההר, עמוד צמוד לדלת העץ הסלעית ולחץ [↑ חץ למעלה].",
      "warningTip": "אחת ממפות הציד המפורסמות ביותר לרמות 25-35! המפה בנויה ממדרגות סלע בטוחות (Safe Spots) מושלמות לאסאסין.",
      "miniMap": {
        "theme": "perion",
        "themeName": "East Rocky Mountain II (הר הסלעים המזרחי 2)",
        "platforms": [
          {
            "x": 10,
            "y": 25,
            "w": 40,
            "h": 6,
            "label": "פסגת ההר שמאלה"
          },
          {
            "x": 55,
            "y": 38,
            "w": 35,
            "h": 6,
            "label": "מדף סלע ימין"
          },
          {
            "x": 20,
            "y": 62,
            "w": 55,
            "h": 6,
            "label": "מפלס סלעים מרכזי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המפה"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 25,
            "y2": 62
          },
          {
            "x": 70,
            "y1": 38,
            "y2": 62
          },
          {
            "x": 50,
            "y1": 62,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 85,
          "y": 84,
          "icon": "🚪",
          "name": "דלת עץ בסלע (The Land of Wild Boar)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מ-East Rocky Mountain I"
        }
      }
    }
  },
  {
    "id": "moon-bunny",
    "name": "Moon Bunny",
    "nameHe": "Moon Bunny",
    "level": 25,
    "hp": 600,
    "mp": 40,
    "exp": 45,
    "icon": "🐇",
    "category": "16-25",
    "town": "Korean Folk Town",
    "locations": [
      "Black Mountain: Entrance",
      "Around the Pond"
    ],
    "directions": [
      "From Korean Folk Town: Exit left portal towards Black Mountain: Entrance."
    ],
    "safeSpots": "Stand on wooden fence posts. Bunnies hit with a pestle mortar; easily sniped from range.",
    "notableDrops": [
      "Moon Bunny Mortar",
      "Rice Cake",
      "Scroll for Helmet for DEF 10%"
    ],
    "starsClaws": "Bronze Dagger",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Moon%20Bunny",
    "verifiedDrops": []
  },
  {
    "id": "cactus",
    "name": "Cactus",
    "nameHe": "Cactus",
    "level": 25,
    "hp": 580,
    "mp": 35,
    "exp": 46,
    "icon": "🌵",
    "category": "16-25",
    "town": "Ariant",
    "locations": [
      "Cactus Desert 2"
    ],
    "directions": [
      "From Ariant: Cactus Desert 1 -> Cactus Desert 2."
    ],
    "safeSpots": "Stand on sandstone hills. Cactus shoots needles in a straight line.",
    "notableDrops": [
      "Cactus Stem",
      "Scroll for Topwear for DEF 60%",
      "Mithril Wristell"
    ],
    "starsClaws": "Mithril Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Cactus",
    "verifiedDrops": []
  },
  {
    "id": "evil-eye",
    "name": "Evil Eye",
    "nameHe": "עין הרע (איביל איי)",
    "level": 27,
    "hp": 720,
    "mp": 40,
    "exp": 50,
    "icon": "👁️",
    "category": "26-35",
    "town": "Sleepywood",
    "locations": [
      "Evil Eye Cave I",
      "Evil Eye Cave II",
      "Deep Forest Cave"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): היכנס ל-Ant Tunnel I, צא לפורטל התחתון לעבר Evil Eye Cave I."
    ],
    "safeSpots": "עמוד על גבי נטיפי המערה וקצוות המדפים. מקום אימון קלאסי ומהיר לרמות 25-30.",
    "notableDrops": [
      "Scroll for Shoes for Jump 60%",
      "Evil Eye Tail",
      "Blue Moon Hat"
    ],
    "starsClaws": "Scroll for Shoes for Jump",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/23",
    "verifiedDrops": [
      {
        "name": "Pink Jester",
        "category": "Equips",
        "price": "2,599 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Brown Hawkeye",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Brown Guise",
        "category": "Equips",
        "price": "3,166.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Yellow Square",
        "category": "Equips",
        "price": "3,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Red Knucklevest",
        "category": "Equips",
        "price": "6,999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Green Avelin",
        "category": "Equips",
        "price": "1,554.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "White Crusader Chainmail",
        "category": "Equips",
        "price": "22,222 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Cutlus",
        "category": "Weapons",
        "price": "12,000 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Mithril Maul",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Fork on a Stick",
        "category": "Weapons",
        "price": "4,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Forked Spear",
        "category": "Weapons",
        "price": "11,111 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Speed Potion",
        "category": "Use",
        "price": "299 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Polearm Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "28,888 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Evil Eye Tail",
        "category": "Etc",
        "price": "25 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Silver Ore",
        "category": "Etc",
        "price": "85 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Sapphire Ore",
        "category": "Etc",
        "price": "100 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Hwarang Shirt",
        "category": "Equips",
        "price": "5,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Piette Pants",
        "category": "Equips",
        "price": "19,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Khaki Shadow Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Ocean Mesana",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Scimitar",
        "category": "Weapons",
        "price": "11,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "frilld",
    "name": "Frilld",
    "nameHe": "Frilld",
    "level": 27,
    "hp": 700,
    "mp": 40,
    "exp": 50,
    "icon": "🦎",
    "category": "26-30",
    "town": "Ariant",
    "locations": [
      "Sunset Desert"
    ],
    "directions": [
      "From Ariant: Exit south portal towards Sunset Desert."
    ],
    "safeSpots": "Stand on desert rocks. Frilld expands neck frill before attacking.",
    "notableDrops": [
      "Frilld Collar",
      "Scroll for Shoes for DEX 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Frilld",
    "verifiedDrops": []
  },
  {
    "id": "royal-cactus",
    "name": "Royal Cactus",
    "nameHe": "Royal Cactus",
    "level": 28,
    "hp": 750,
    "mp": 45,
    "exp": 54,
    "icon": "🌵",
    "category": "26-30",
    "town": "Ariant",
    "locations": [
      "Royal Cactus Desert"
    ],
    "directions": [
      "From Ariant: Cactus Desert 2 -> Royal Cactus Desert."
    ],
    "safeSpots": "Stand on the yellow sand mounds.",
    "notableDrops": [
      "Cactus Flower",
      "Scroll for Cape for DEX 60%",
      "Bronze Slain"
    ],
    "starsClaws": "Bronze Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Royal%20Cactus",
    "verifiedDrops": []
  },
  {
    "id": "brown-teddy",
    "name": "Brown Teddy",
    "nameHe": "דובי חום (Brown Teddy)",
    "level": 30,
    "hp": 950,
    "mp": 40,
    "exp": 60,
    "icon": "🧸",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Cloud Terrace <1>",
      "Ludibrium: Terrace Hall"
    ],
    "directions": [
      "מלודיבריום (Ludibrium): צא מהשער השמאלי של העיר אל Cloud Terrace 1."
    ],
    "safeSpots": "עמוד על מדפי הצעצועים מעל הדובים ותקוף בנחת. מפה שטוחה ונוחה להפליא.",
    "notableDrops": [
      "Slain (כפפת אסאסין לרמה 30)",
      "Teddy Cotton",
      "Scroll for Helmet for DEF 60%"
    ],
    "starsClaws": "Slain Claw",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Brown%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "malady",
    "name": "Malady",
    "nameHe": "מלאדי (מכשפה מעופפת על מטאטא)",
    "level": 30,
    "hp": 920,
    "mp": 50,
    "exp": 58,
    "icon": "🧙‍♀️",
    "category": "26-35",
    "town": "Ellinia",
    "locations": [
      "The Forest of Evil I-II (יער הרוע העמוק באליניה)"
    ],
    "directions": [
      "מאליניה: צא דרומה ועבור דרך יערות העצים הענקיים עמוק פנימה אל The Forest of Evil."
    ],
    "safeSpots": "עמוד על ענפי העצים הגבוהים. מכשפה זו מרחפת ויורה קסמי חושך, אך מתנקש עם Keen Eyes פוגע בה מחוץ לטווח הראייה שלה.",
    "notableDrops": [
      "Mokbi Throwing-Stars (+19 ATT)",
      "Witch Hat",
      "Scroll for Wand for M.ATT 60%"
    ],
    "starsClaws": "Mokbi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/47",
    "verifiedDrops": [
      {
        "name": "Black Crystal Ore",
        "category": "Etc",
        "price": "2,500 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Black Hunter",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Brown Stealer",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Maroon Jangoon Armor",
        "category": "Equips",
        "price": "39,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Shouldermail",
        "category": "Equips",
        "price": "42,222 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown China",
        "category": "Equips",
        "price": "160,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Orientican",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Maroon Moon",
        "category": "Equips",
        "price": "26,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue-Lined Kismet",
        "category": "Equips",
        "price": "177,777 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Jangoon Pants",
        "category": "Equips",
        "price": "28,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Shouldermail Pants",
        "category": "Equips",
        "price": "39,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown China Pants",
        "category": "Equips",
        "price": "178,888.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Orientican Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Maroon Moon Pants",
        "category": "Equips",
        "price": "29,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Enamel Boots",
        "category": "Equips",
        "price": "2,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Staff Magic Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "73,749.5 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "jr-sentinel",
    "name": "Jr. Sentinel",
    "nameHe": "Jr. Sentinel",
    "level": 30,
    "hp": 900,
    "mp": 50,
    "exp": 60,
    "icon": "🗿",
    "category": "26-30",
    "town": "Orbis",
    "locations": [
      "Orbis Tower 20th-17th Floor"
    ],
    "directions": [
      "From Orbis: Exit right to Cloud Park I -> head right to entrance of Orbis Tower (20th Floor)."
    ],
    "safeSpots": "Stand on the stone stairs inside the tower. Fire Lucky Seven before they charge.",
    "notableDrops": [
      "Jr. Sentinel Shell",
      "Scroll for Helmet for DEF 10%",
      "Steel Igor"
    ],
    "starsClaws": "Steel Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Sentinel",
    "verifiedDrops": []
  },
  {
    "id": "bubble-fish",
    "name": "Bubble Fish",
    "nameHe": "Bubble Fish",
    "level": 30,
    "hp": 850,
    "mp": 40,
    "exp": 55,
    "icon": "🐡",
    "category": "26-30",
    "town": "Aqua Road",
    "locations": [
      "Crystal Strait",
      "Ocean I.C"
    ],
    "directions": [
      "From Aquarium: Exit left into Ocean I.C -> continue into Crystal Strait."
    ],
    "safeSpots": "Swim near the coral reefs and use ranged stars. Underwater physics give high vertical mobility.",
    "notableDrops": [
      "Bubble Fish Tail",
      "Scroll for Helmet for DEF 10%",
      "Steel Igor"
    ],
    "starsClaws": "Steel Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Bubble%20Fish",
    "verifiedDrops": []
  },
  {
    "id": "cico",
    "name": "Cico",
    "nameHe": "Cico",
    "level": 30,
    "hp": 900,
    "mp": 50,
    "exp": 60,
    "icon": "🐠",
    "category": "26-30",
    "town": "Aqua Road",
    "locations": [
      "Crystal Strait"
    ],
    "directions": [
      "From Aquarium: Exit left into Ocean I.C -> Crystal Strait."
    ],
    "safeSpots": "Keep distance while swimming. Cico dashes forward in short bursts.",
    "notableDrops": [
      "Cico Scale",
      "Scroll for Shoes for DEX 60%",
      "Bronze Wristell"
    ],
    "starsClaws": "Bronze Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Cico",
    "verifiedDrops": []
  },
  {
    "id": "ear-plug-pleasel",
    "name": "Ear Plug Pleasel",
    "nameHe": "Ear Plug Pleasel",
    "level": 30,
    "hp": 900,
    "mp": 50,
    "exp": 60,
    "icon": "🦭",
    "category": "26-30",
    "town": "Ariant",
    "locations": [
      "Outside West Entrance of Ariant"
    ],
    "directions": [
      "From Ariant: Exit west portal into Outside West Entrance."
    ],
    "safeSpots": "Stand on sandstone pedestals.",
    "notableDrops": [
      "Ear Plug",
      "Scroll for Helmet for DEF 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ear%20Plug%20Pleasel",
    "verifiedDrops": []
  },
  {
    "id": "ligator",
    "name": "Ligator",
    "nameHe": "ליגטור (תנין ביצות)",
    "level": 32,
    "hp": 1200,
    "mp": 50,
    "exp": 60,
    "icon": "🐊",
    "category": "26-35",
    "town": "Kerning City",
    "locations": [
      "Kerning City Party Quest: Stage 1 & Stage 4 (KPQ)",
      "Swamp of Despair II & III",
      "Deep Swamp"
    ],
    "directions": [
      "בתוך משימת קרנינג (KPQ): תנינים מופיעים בשלב 1 ובשלב 4. חסל אותם לאיסוף כרטיסים (Coupons).",
      "מחוץ ל-PQ: עמוק בתוך ביצות קרנינג סיטי דרך Swamp of Despair."
    ],
    "safeSpots": "עמוד על ארגזי העץ ב-KPQ או על גשרי הביצה. Lucky Seven חודר את ההגנה הגבוהה שלהם בקלות.",
    "notableDrops": [
      "Scroll for Claw for ATT 60% (מגילת התקפה לכפפה - שווה מיליוני מזו!)",
      "Ligator Skin",
      "Bronze Identity"
    ],
    "starsClaws": "Scroll for Claw for ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/29",
    "verifiedDrops": [
      {
        "name": "Mithril Buckler",
        "category": "Equips",
        "price": "5,500 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Plunger",
        "category": "Weapons",
        "price": "7,500 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Heavy Hammer",
        "category": "Weapons",
        "price": "11,999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Reef Claw",
        "category": "Weapons",
        "price": "11,111 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Gephart",
        "category": "Weapons",
        "price": "39,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Mithril Ore",
        "category": "Etc",
        "price": "170 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Aquamarine Ore",
        "category": "Etc",
        "price": "169 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Bennis Chainmail",
        "category": "Equips",
        "price": "3,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Sky",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Khaki Shadow",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Lamelle",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Jangoon Armor",
        "category": "Equips",
        "price": "8,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Ramel Skirt",
        "category": "Equips",
        "price": "2,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Jangoon Skirt",
        "category": "Equips",
        "price": "9,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Hunter Boots",
        "category": "Equips",
        "price": "3,750 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Two-Handed Axe",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape Magic Def. Scroll: Greater",
        "category": "Scrolls",
        "price": "1,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "fire-boar",
    "name": "Fire Boar",
    "nameHe": "חזיר אש",
    "level": 32,
    "hp": 1200,
    "mp": 40,
    "exp": 60,
    "icon": "🔥",
    "category": "26-35",
    "town": "Perion",
    "locations": [
      "The Burnt Land I (האדמה השרופה בפריון)",
      "The Burnt Land II",
      "Perion Dungeon"
    ],
    "directions": [
      "מפריון (Perion): צא מהפורטל המזרחי דרך Rocky Road, עבור את גשר העץ אל The Burnt Land."
    ],
    "safeSpots": "עמוד על גבי פלטפורמות הסלע מעל הלבה. חזירי האש נעים במהירות גבוהה.",
    "notableDrops": [
      "Kumbi Throwing-Stars (+14 Attack)",
      "Glass Shoe (נעל זכוכית לקווסט של ארווין)",
      "Fire Boar Tooth"
    ],
    "starsClaws": "Kumbi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/30",
    "verifiedDrops": [
      {
        "name": "Red Hawkeye",
        "category": "Equips",
        "price": "1,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Red Guise",
        "category": "Equips",
        "price": "1,999.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Green Pole-Feather Hat",
        "category": "Equips",
        "price": "5,149.5 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Matty",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Guiltian",
        "category": "Equips",
        "price": "5,899 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Pilfer",
        "category": "Equips",
        "price": "5,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Green Knucklevest",
        "category": "Equips",
        "price": "7,000 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Red Shadow",
        "category": "Equips",
        "price": "8,350 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blood Fitted Mail",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Brown Martial Arts Pants",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Legolier Pants",
        "category": "Equips",
        "price": "5,999.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Amoria Skirt",
        "category": "Equips",
        "price": "5,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Black Amoria Skirt",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Red Shadow Pants",
        "category": "Equips",
        "price": "8,888 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Fireman's Axe",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Ryden",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Viper",
        "category": "Weapons",
        "price": "16,333 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Earring STR Scroll: Greater",
        "category": "Scrolls",
        "price": "18,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Wolbi Throwing Stars",
        "category": "Stars",
        "price": "14,222 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Fire Boar's Tooth",
        "category": "Etc",
        "price": "30 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 15,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Arwen's Glass Shoe",
        "category": "Etc",
        "price": "65,000 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Iron Ore",
        "category": "Etc",
        "price": "350 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Garnet Ore",
        "category": "Etc",
        "price": "180 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Diamond Ore",
        "category": "Etc",
        "price": "220 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Brown Pole-Feather Hat",
        "category": "Equips",
        "price": "6,666 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Master Sergeant",
        "category": "Equips",
        "price": "4,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Legolier",
        "category": "Equips",
        "price": "7,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piette",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Knucklevest Pants",
        "category": "Equips",
        "price": "5,555 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Knucklevest Pants",
        "category": "Equips",
        "price": "5,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piette Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Amoria Skirt",
        "category": "Equips",
        "price": "5,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bronze Chain Boots",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bronze Scaler",
        "category": "Equips",
        "price": "9,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Kumbi Throwing Stars",
        "category": "Stars",
        "price": "365,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Snowball",
        "category": "Stars",
        "price": null,
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Hidden Street: The Land of Wild Boar (ארץ חזירי הבר)",
      "targetMap": "Hidden Street: The Land of Wild Boar II (ארץ חזירי האש)",
      "landmark": "פתח מנהרה חשוך החצוב בסלע בראש מדרגת הסלעים האמצעית",
      "landmarkIcon": "🔥",
      "coordinates": "במרכז-עליון של ארץ חזירי הבר",
      "howToEnter": "בתוך ארץ חזירי הבר, טפס למדרגת הסלע האמצעית, עמוד מול הדלת החשוכה ולחץ [↑ חץ למעלה].",
      "warningTip": "חזירי אש ברמה 32 – מפילים כמות EXP אדירה ומגילות נשק. מומלץ להשתמש ב-Lucky Seven מרחוק.",
      "miniMap": {
        "theme": "perion",
        "themeName": "The Land of Wild Boar (ארץ חזירי הבר)",
        "platforms": [
          {
            "x": 30,
            "y": 25,
            "w": 40,
            "h": 6,
            "label": "מדף עליון (פתח מנהרת האש)"
          },
          {
            "x": 10,
            "y": 50,
            "w": 35,
            "h": 6,
            "label": "מדרגת סלע שמאל"
          },
          {
            "x": 55,
            "y": 55,
            "w": 35,
            "h": 6,
            "label": "מדרגת סלע ימין"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המפה"
          }
        ],
        "ropes": [
          {
            "x": 45,
            "y1": 25,
            "y2": 50
          },
          {
            "x": 25,
            "y1": 50,
            "y2": 88
          },
          {
            "x": 75,
            "y1": 55,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 20,
          "icon": "🔥",
          "name": "דלת המנהרה (Land of Wild Boar II)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מ-East Rocky Mountain II"
        }
      }
    }
  },
  {
    "id": "pink-teddy",
    "name": "Pink Teddy",
    "nameHe": "דובי ורוד (Pink Teddy)",
    "level": 32,
    "hp": 1050,
    "mp": 45,
    "exp": 65,
    "icon": "🎀",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Cloud Terrace <2>",
      "Ludibrium: Sky Terrace <1>"
    ],
    "directions": [
      "מלודיבריום: עבור דרך Cloud Terrace 1 אל Terrace 2 ו-Sky Terrace."
    ],
    "safeSpots": "עמוד על מגדלי הלגו והפלטפורמות הורודות. אימונים קלים מאוד למתנקשים חדשים.",
    "notableDrops": [
      "Pink Teddy Heart",
      "Scroll for Topwear for DEF 60%",
      "Garnier"
    ],
    "starsClaws": "Scrolls & Accessories",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Pink%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "ratz",
    "name": "Ratz",
    "nameHe": "ראץ (עכבר מגדל אאוס)",
    "level": 32,
    "hp": 1050,
    "mp": 40,
    "exp": 64,
    "icon": "🧀",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 100th-95th Floor"
    ],
    "directions": [
      "מלודיבריום: היכנס למגדל אאוס (Eos Tower) במערב העיר ורד לקומות 95-100."
    ],
    "safeSpots": "עמוד על הבלוקים והסולמות שבין הקומות.",
    "notableDrops": [
      "Ratz Piece of Cheese",
      "Iron Igor",
      "Scroll for Shoes for DEX 60%"
    ],
    "starsClaws": "Iron Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ratz",
    "verifiedDrops": []
  },
  {
    "id": "sentinel",
    "name": "Sentinel",
    "nameHe": "Sentinel",
    "level": 32,
    "hp": 1050,
    "mp": 60,
    "exp": 68,
    "icon": "🗿",
    "category": "31-50",
    "town": "Orbis",
    "locations": [
      "Orbis Tower 16th-14th Floor"
    ],
    "directions": [
      "From Orbis: Go through Orbis Tower 20th floor down to the 16th floor (use Orbis Magic Rock or climb rope)."
    ],
    "safeSpots": "Rope snipes and platform edges provide total safety.",
    "notableDrops": [
      "Sentinel Shell",
      "Scroll for Shoes for DEX 60%",
      "Bronze Wristell"
    ],
    "starsClaws": "Bronze Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sentinel",
    "verifiedDrops": []
  },
  {
    "id": "leatty",
    "name": "Leatty",
    "nameHe": "Leatty",
    "level": 32,
    "hp": 1000,
    "mp": 50,
    "exp": 65,
    "icon": "🐾",
    "category": "31-50",
    "town": "Orbis",
    "locations": [
      "Orbis Tower 7th-4th Floor"
    ],
    "directions": [
      "From Orbis: Descend Orbis Tower to the lower floors (7th-4th floor)."
    ],
    "safeSpots": "Stay on the stone ledge platforms. Leatties hop around and cannot climb.",
    "notableDrops": [
      "Leatty Fur",
      "Scroll for Claw for ATT 10%",
      "Steel Slain"
    ],
    "starsClaws": "Claw ATT 10%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Leatty",
    "verifiedDrops": []
  },
  {
    "id": "pinboom",
    "name": "Pinboom",
    "nameHe": "Pinboom",
    "level": 32,
    "hp": 1050,
    "mp": 60,
    "exp": 68,
    "icon": "🐡",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Red Coral Forest"
    ],
    "directions": [
      "From Aquarium: Exit left into Ocean I.C -> enter portal to Red Coral Forest."
    ],
    "safeSpots": "Shoot from above or below the coral reefs. Pinboom explodes if it gets too close.",
    "notableDrops": [
      "Pinboom Thorn",
      "Scroll for Topwear for DEF 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Pinboom",
    "verifiedDrops": []
  },
  {
    "id": "cube-slime",
    "name": "Cube Slime",
    "nameHe": "Cube Slime",
    "level": 32,
    "hp": 1050,
    "mp": 60,
    "exp": 68,
    "icon": "🧊",
    "category": "31-50",
    "town": "Magatia",
    "locations": [
      "Lab - Area B-3 (Alcadno Research Lab)"
    ],
    "directions": [
      "From Magatia: Enter Alcadno Research Institute on the right -> descend into Area B-3."
    ],
    "safeSpots": "Stand on laboratory tables and pipes above the floor.",
    "notableDrops": [
      "Cube Slime Fluid",
      "Scroll for Shoes for DEX 60%",
      "Bronze Wristell"
    ],
    "starsClaws": "Bronze Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Cube%20Slime",
    "verifiedDrops": []
  },
  {
    "id": "jr-cellion",
    "name": "Jr. Cellion",
    "nameHe": "ג'וניור סליון (חתול אש אדום צעיר)",
    "level": 33,
    "hp": 1100,
    "mp": 50,
    "exp": 68,
    "icon": "🐱",
    "category": "26-35",
    "town": "Orbis",
    "locations": [
      "Garden of Red I (גן האש באורביס)"
    ],
    "directions": [
      "מאורביס: עבור דרך Cloud Park אל Garden of Red I."
    ],
    "safeSpots": "עמודי המדרגות בעננים. חתול האש אינו יכול לקפוץ לגובה.",
    "notableDrops": [
      "Cellion Tail",
      "Garnier",
      "Red Potion"
    ],
    "starsClaws": "Garnier",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Cellion",
    "verifiedDrops": []
  },
  {
    "id": "jr-lioner",
    "name": "Jr. Lioner",
    "nameHe": "ג'וניור ליאונר (חתול ברק צהוב צעיר)",
    "level": 33,
    "hp": 1100,
    "mp": 50,
    "exp": 68,
    "icon": "⚡",
    "category": "26-35",
    "town": "Orbis",
    "locations": [
      "Garden of Yellow I"
    ],
    "directions": [
      "מאורביס: עבור דרך Cloud Park אל Garden of Yellow I."
    ],
    "safeSpots": "פלטפורמות דשא ועננים.",
    "notableDrops": [
      "Lioner Tail",
      "Scroll for Topwear for DEF 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Lioner",
    "verifiedDrops": []
  },
  {
    "id": "jr-grupin",
    "name": "Jr. Grupin",
    "nameHe": "ג'וניור גרופין (חתול קרח כחול צעיר)",
    "level": 33,
    "hp": 1100,
    "mp": 50,
    "exp": 68,
    "icon": "❄️",
    "category": "26-35",
    "town": "Orbis",
    "locations": [
      "Garden of Blue I"
    ],
    "directions": [
      "מאורביס: עבור דרך Cloud Park אל Garden of Blue I."
    ],
    "safeSpots": "פלטפורמות דשא מוגבהות.",
    "notableDrops": [
      "Grupin Tail",
      "Scroll for Bottomwear for DEF 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Grupin",
    "verifiedDrops": []
  },
  {
    "id": "black-ratz",
    "name": "Black Ratz",
    "nameHe": "בלאק ראץ (עכבר שחור במגדל אאוס)",
    "level": 33,
    "hp": 1100,
    "mp": 40,
    "exp": 67,
    "icon": "🐭",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 94th-91st Floor"
    ],
    "directions": [
      "במגדל אאוס: רד מקומות 95 אל קומות 91-94."
    ],
    "safeSpots": "פלטפורמות הבלוקים והסולמות.",
    "notableDrops": [
      "Black Ratz Piece of Cheese",
      "Scroll for Shield for DEF 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Black%20Ratz",
    "verifiedDrops": []
  },
  {
    "id": "chirppy",
    "name": "Chirppy",
    "nameHe": "צ'ירפי (אפרוח צהוב מעופף)",
    "level": 33,
    "hp": 1050,
    "mp": 40,
    "exp": 66,
    "icon": "🐤",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 90th-81st Floor"
    ],
    "directions": [
      "מלודיבריום (Ludibrium): צא מהקצה השמאלי של העיר והיכנס לפורטל מגדל איאוס (Eos Tower - 100th Floor).",
      "רד במורד המגדל דרך הסולמות או השתמש ב-Eos Tower Rock Scroll לקומות 90 עד 81.",
      "מיקום הציד: ציפורי הצעצוע Chirppy ממלאות את פלטפורמות הצעצועים בקומות 81-90."
    ],
    "safeSpots": "עמוד על הסולמות התלויים והמדפים המבודדים ויורה כוכבים/חצים מבלי להיפגע מתעופת האפרוח.",
    "notableDrops": [
      "Chirppy Feather",
      "Subi"
    ],
    "starsClaws": "Subi",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chirppy",
    "verifiedDrops": []
  },
  {
    "id": "dark-leatty",
    "name": "Dark Leatty",
    "nameHe": "Dark Leatty",
    "level": 33,
    "hp": 1100,
    "mp": 60,
    "exp": 70,
    "icon": "🐾",
    "category": "31-50",
    "town": "Orbis",
    "locations": [
      "Orbis Tower 4th-1st Floor"
    ],
    "directions": [
      "From Orbis: Descend Orbis Tower down to 1st-4th floor (just above El Nath exit)."
    ],
    "safeSpots": "Stand near the rope exits. Sniping from high ground prevents damage.",
    "notableDrops": [
      "Dark Leatty Fur",
      "Scroll for Cape for DEX 60%",
      "Bronze Igor"
    ],
    "starsClaws": "Bronze Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Leatty",
    "verifiedDrops": []
  },
  {
    "id": "seacle",
    "name": "Seacle",
    "nameHe": "Seacle",
    "level": 33,
    "hp": 1100,
    "mp": 60,
    "exp": 70,
    "icon": "🦭",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Western Dolphin Ocean"
    ],
    "directions": [
      "From Aquarium: Exit left to Ocean I.C -> Western Dolphin Ocean."
    ],
    "safeSpots": "Float near the sea floor rocks and snipe upwards.",
    "notableDrops": [
      "Seacle Snorkel",
      "Scroll for Cape for DEX 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Seacle",
    "verifiedDrops": []
  },
  {
    "id": "panda-teddy",
    "name": "Panda Teddy",
    "nameHe": "דובי פנדה (Panda Teddy)",
    "level": 34,
    "hp": 1200,
    "mp": 50,
    "exp": 70,
    "icon": "🐼",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Sky Terrace <2>",
      "Ludibrium: Sky Terrace <3>"
    ],
    "directions": [
      "מלודיבריום: צא שמאלה דרך Cloud Terrace אל Sky Terrace 2-3."
    ],
    "safeSpots": "עמוד על מדפי הצעצועים העליונים. הליכה איטית וחמודה.",
    "notableDrops": [
      "Panda Teddy Cap",
      "Scroll for Cape for HP 60%",
      "Slain"
    ],
    "starsClaws": "Slain Claw",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Panda%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "tweeter",
    "name": "Tweeter",
    "nameHe": "טוויטר (ציפור כחולה מכנית)",
    "level": 34,
    "hp": 1150,
    "mp": 45,
    "exp": 69,
    "icon": "🐦",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 60th-51st Floor"
    ],
    "directions": [
      "מלודיבריום (Ludibrium): היכנס למגדל איאוס (Eos Tower) מהצד השמאלי של העיר.",
      "רד במורד המגדל אל קומות 60 עד 51 (מומלץ להשתמש ב-Eos Tower Scroll לקומה 70 ומשם להמשיך ברגל).",
      "מיקום הציד: ציפורי הטוויטר המכניות מקננות על גבי קוביות הלגו וגלגלי השיניים בקומות אלו."
    ],
    "safeSpots": "עמוד על פלטפורמות המתכת והחבלים התלויים מעל מסלול המעוף שלהם.",
    "notableDrops": [
      "Tweeter Beak",
      "Scroll for Cape for MP 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Tweeter",
    "verifiedDrops": []
  },
  {
    "id": "ice-sentinel",
    "name": "Ice Sentinel",
    "nameHe": "Ice Sentinel",
    "level": 34,
    "hp": 1200,
    "mp": 70,
    "exp": 75,
    "icon": "🧊",
    "category": "31-50",
    "town": "Orbis",
    "locations": [
      "Orbis Tower 13th-11th Floor"
    ],
    "directions": [
      "From Orbis: Descend Orbis Tower to floors 13-11."
    ],
    "safeSpots": "Stand on the steps above their patrol line. Vulnerable to fast ranged hits.",
    "notableDrops": [
      "Ice Sentinel Shell",
      "Scroll for Overall Armor for DEX 60%",
      "Mithril Wristell"
    ],
    "starsClaws": "Mithril Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ice%20Sentinel",
    "verifiedDrops": []
  },
  {
    "id": "fire-sentinel",
    "name": "Fire Sentinel",
    "nameHe": "Fire Sentinel",
    "level": 34,
    "hp": 1200,
    "mp": 70,
    "exp": 75,
    "icon": "🔥",
    "category": "31-50",
    "town": "Orbis",
    "locations": [
      "Orbis Tower 10th-9th Floor"
    ],
    "directions": [
      "From Orbis: Descend Orbis Tower to floors 10-9."
    ],
    "safeSpots": "Stand on upper stairs and snipe down with Lucky Seven.",
    "notableDrops": [
      "Fire Sentinel Shell",
      "Scroll for Topwear for DEF 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Fire%20Sentinel",
    "verifiedDrops": []
  },
  {
    "id": "krappy",
    "name": "Krappy",
    "nameHe": "Krappy",
    "level": 34,
    "hp": 1200,
    "mp": 70,
    "exp": 75,
    "icon": "🦀",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Forked Road: West Sea"
    ],
    "directions": [
      "From Aquarium: Exit right towards Forked Road: West Sea."
    ],
    "safeSpots": "Perch on underwater coral branches.",
    "notableDrops": [
      "Krappy Shell",
      "Scroll for Overall Armor for DEX 60%",
      "Bronze Slain"
    ],
    "starsClaws": "Bronze Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Krappy",
    "verifiedDrops": []
  },
  {
    "id": "desert-giant",
    "name": "Desert Giant",
    "nameHe": "Desert Giant",
    "level": 34,
    "hp": 1200,
    "mp": 70,
    "exp": 75,
    "icon": "🗿",
    "category": "31-50",
    "town": "Ariant",
    "locations": [
      "The Desert of Scarlion"
    ],
    "directions": [
      "From Ariant: Head east past Royal Cactus Desert."
    ],
    "safeSpots": "Stand on elevated sand dunes. Very slow attack animation.",
    "notableDrops": [
      "Giant Stone Piece",
      "Scroll for Overall Armor for DEX 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Desert%20Giant",
    "verifiedDrops": []
  },
  {
    "id": "rumo",
    "name": "Rumo",
    "nameHe": "Rumo",
    "level": 34,
    "hp": 1200,
    "mp": 70,
    "exp": 75,
    "icon": "🌱",
    "category": "31-50",
    "town": "Magatia",
    "locations": [
      "Lab - Area B-1 (Zenumist Research Lab)"
    ],
    "directions": [
      "From Magatia: Enter Zenumist Research Institute on the left -> Area B-1."
    ],
    "safeSpots": "Stand on wooden shelves in the alchemy laboratory.",
    "notableDrops": [
      "Rumo Leaf",
      "Scroll for Overall Armor for DEX 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Rumo",
    "verifiedDrops": []
  },
  {
    "id": "curse-eye",
    "name": "Curse Eye",
    "nameHe": "עין מקוללת",
    "level": 35,
    "hp": 1250,
    "mp": 50,
    "exp": 75,
    "icon": "🧿",
    "category": "26-35",
    "town": "Sleepywood",
    "locations": [
      "Ant Tunnel IV",
      "The Grave of Mushmom Area",
      "Curse Eye Swamp"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): התקדם עמוק במנהרת הנמלים עד מעבר ל-Ant Tunnel III."
    ],
    "safeSpots": "גשרי העץ התלויים מספקים זווית ירי מושלמת מעל ראשי העיניים המקוללות.",
    "notableDrops": [
      "Meba Claw (Drop)",
      "Scroll for Topwear for STR 60%",
      "Curse Eye Tail"
    ],
    "starsClaws": "Meba Claw Drop",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/31",
    "verifiedDrops": [
      {
        "name": "Bronze Pride",
        "category": "Equips",
        "price": "2,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Great Brown Helmet",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Green Matty",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Guiltian",
        "category": "Equips",
        "price": "7,999.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Distinction",
        "category": "Equips",
        "price": "7,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Green Pilfer",
        "category": "Equips",
        "price": "8,888 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Black Knucklevest",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Battle Shield",
        "category": "Equips",
        "price": "12,750 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Lollipop",
        "category": "Weapons",
        "price": "8,260.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Scimitar",
        "category": "Weapons",
        "price": "11,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Axe Pole Arm",
        "category": "Weapons",
        "price": "16,999 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Sniper Potion",
        "category": "Use",
        "price": "299 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Topwear MP Scroll: Greater",
        "category": "Scrolls",
        "price": "1,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Curse Eye Tail",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Topaz Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Brown Piettra Skirt",
        "category": "Equips",
        "price": "15,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bow Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "25,555 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "stumpy",
    "name": "Stumpy (בוס)",
    "nameHe": "סטאמפי (גזע עץ עתיק)",
    "level": 35,
    "hp": 7500,
    "mp": 150,
    "exp": 450,
    "icon": "🪵",
    "category": "bosses",
    "classicPatch": "v1.0.0 (Oct 2026): בוס שדה חדש שהתווסף בהשקה עם אזור החפירות (Excavation Site) בפריון!",
    "town": "Perion",
    "locations": [
      "Excavation Site: Relic Excavation (אתר החפירות הארכיאולוגי)",
      "East Rocky Mountain V (ההר הסלעי בפריון)",
      "East Rocky Mountain VII"
    ],
    "directions": [
      "מפריון (Perion): צא מזרחה לכיוון אזור החפירות (Excavation Site) או עלה ברכס ההרים עד East Rocky Mountain V/VII."
    ],
    "safeSpots": "עמוד על פיגום העץ הארכיאולוגי העליון או על מדף הסלע משמאל למקום הספון שלו. תקוף ממרחק מקסימלי עם Keen Eyes, כך שהוא לא יצליח לגעת בך או להטיל עליך קללות.",
    "notableDrops": [
      "Stumpy's Branch",
      "Scroll for Cape for DEF 60%",
      "Scroll for Overall Armor DEX 60%",
      "Meba",
      "Equip Items"
    ],
    "starsClaws": "Rare Scrolls & Meba",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Stumpy%20(%D7%91%D7%95%D7%A1)",
    "verifiedDrops": []
  },
  {
    "id": "jr-wraith",
    "name": "Jr. Wraith",
    "nameHe": "רוח רפאים צעירה (Jr. Wraith)",
    "level": 35,
    "hp": 1200,
    "mp": 60,
    "exp": 70,
    "icon": "👻",
    "category": "36-50+",
    "town": "Kerning City Subway",
    "locations": [
      "Kerning City Subway: Line 1 <Area 3>",
      "Kerning City Subway: Line 1 <Area 4>"
    ],
    "directions": [
      "מקרנינג סיטי (Kerning City): היכנס לרכבת התחתית, רכוש כרטיס אצל Jake.",
      "עבור דרך Line 1 Area 1 ו-Area 2 עד שתגיע למפות העמוקות Area 3 ו-4."
    ],
    "safeSpots": "עמוד על גבי קורות הברזל והשלדים של הקרונות. הרוחות מרחפות לאט ופגיעות מאוד ל-Lucky Seven.",
    "notableDrops": [
      "Meba (כפפת רמה 20)",
      "Wolbi Throwing-Stars (+17 ATT)",
      "Jr. Wraith Piece of Cloth",
      "Scroll for Claw for ATT 60%"
    ],
    "starsClaws": "Meba & Wolbi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/32",
    "verifiedDrops": [
      {
        "name": "Dark Hawkeye",
        "category": "Equips",
        "price": "2,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Dark Guise",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Yellow Jangoon Armor",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "White Doros Robe",
        "category": "Equips",
        "price": "5,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Red Jack Boots",
        "category": "Equips",
        "price": "2,222 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Bronze Wolfskin",
        "category": "Equips",
        "price": "3,899.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Wooden Buckler",
        "category": "Equips",
        "price": "2,236 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Eloon",
        "category": "Weapons",
        "price": "6,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Dankke",
        "category": "Weapons",
        "price": "12,749 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Hat Accuracy Scroll: Greater",
        "category": "Scrolls",
        "price": "4,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Mokbi Throwing Stars",
        "category": "Stars",
        "price": "145,000 Mesos",
        "votes": 14,
        "source": "reported"
      },
      {
        "name": "Adamantium Ore",
        "category": "Etc",
        "price": "86 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Opal Ore",
        "category": "Etc",
        "price": "122 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Light Scorpio",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Jangoon Armor",
        "category": "Equips",
        "price": "13,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Light Mantis",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Doroness Robe",
        "category": "Equips",
        "price": "6,199.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Jangoon Pants",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Light Scorpio Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Jangoon Skirt",
        "category": "Equips",
        "price": "12,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Shouldermail Pants",
        "category": "Equips",
        "price": "22,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Light Mantis Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Hat HP Scroll: Greater",
        "category": "Scrolls",
        "price": "1,367 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dagger Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "189,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Speed Scroll: Lesser",
        "category": "Scrolls",
        "price": "22,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Speed Scroll: Intermediate",
        "category": "Scrolls",
        "price": "78,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Speed Scroll: Greater",
        "category": "Scrolls",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "star-pixie",
    "name": "Star Pixie",
    "nameHe": "סטאר פיקסי (פיית כוכב בעננים)",
    "level": 35,
    "hp": 1300,
    "mp": 60,
    "exp": 72,
    "icon": "⭐",
    "category": "36-50+",
    "town": "Orbis",
    "locations": [
      "Cloud Park I-II (פארק העננים באורביס)"
    ],
    "directions": [
      "מאורביס (Orbis): צא מהפורטל הימני של העיר אל פארק העננים (Cloud Park I)."
    ],
    "safeSpots": "עמוד על גושי העננים הלבנים מעל הפיקסים. אימונים נוחים ביותר לאסאסין צעיר.",
    "notableDrops": [
      "Star Pixie's Stardust (אבקת כוכבים לקווסטים)",
      "Scroll for Shoes for Speed 60%",
      "Subi"
    ],
    "starsClaws": "Scroll for Speed",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Star%20Pixie",
    "verifiedDrops": []
  },
  {
    "id": "trixter",
    "name": "Trixter",
    "nameHe": "טריקסטר (עכביש אדום)",
    "level": 35,
    "hp": 1250,
    "mp": 50,
    "exp": 72,
    "icon": "🕷️",
    "category": "26-35",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 80th-71st Floor"
    ],
    "directions": [
      "מלודיבריום (Ludibrium): היכנס למגדל איאוס (Eos Tower - קומה 100) מהקצה המערבי של העיר.",
      "רד במורד המגדל אל קומות 80 עד 71 דרך הפורטלים והסולמות הפנימיים.",
      "מיקום הציד: עכבישי Trixter מסתובבים על גבי קוביות הפלסטיק וחוטי הרשת בקומות 71-80."
    ],
    "safeSpots": "עמוד על הסולמות והמדפים הגבוהים ותקוף את העכבישים מלמעלה.",
    "notableDrops": [
      "Trixter's Web",
      "Scroll for Helmet for DEF 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Trixter",
    "verifiedDrops": []
  },
  {
    "id": "jr-boogie",
    "name": "Jr. Boogie",
    "nameHe": "Jr. Boogie",
    "level": 35,
    "hp": 1300,
    "mp": 1000,
    "exp": 80,
    "icon": "👻",
    "category": "31-50",
    "town": "Orbis / Perion",
    "locations": [
      "Cloud Park I",
      "Rocky Road III"
    ],
    "directions": [
      "From Orbis: Go right to Cloud Park I. Jr. Boogie floats on upper cloud platforms."
    ],
    "safeSpots": "Stay at max throwing star range. Jr. Boogie casts Seal, Curse and Weakness; kill from afar with Lucky Seven.",
    "notableDrops": [
      "Jr. Boogie Horn",
      "Scroll for Shield for DEF 60%",
      "Holy Water",
      "Eye Drops"
    ],
    "starsClaws": "Shield DEF 60%",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/33",
    "verifiedDrops": [
      {
        "name": "Iron Ore",
        "category": "Etc",
        "price": "350 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Garnet Ore",
        "category": "Etc",
        "price": "180 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "bloctopus",
    "name": "Bloctopus",
    "nameHe": "בלוקטופוס (תמנון קוביות לגו)",
    "level": 36,
    "hp": 1350,
    "mp": 50,
    "exp": 76,
    "icon": "🐙",
    "category": "36-50+",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 40th-31st Floor"
    ],
    "directions": [
      "מלודיבריום (Ludibrium): היכנס למגדל איאוס (Eos Tower).",
      "רד אל קומות 40 עד 31 (מומלץ לקחת מגילת Eos Tower Scroll לקומה 41 ומשם לרדת קומה אחת).",
      "מיקום הציד: תמנוני קוביות הלגו Bloctopus מקפצים על משטחי הלגו הצבעוניים."
    ],
    "safeSpots": "עמוד על קוביות הלגו הענקיות המוגבהות מעל טווח הקפיצה של התמנונים.",
    "notableDrops": [
      "Bloctopus Key",
      "Scroll for Dagger for ATT 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Bloctopus",
    "verifiedDrops": []
  },
  {
    "id": "flower-fish",
    "name": "Flower Fish",
    "nameHe": "Flower Fish",
    "level": 36,
    "hp": 1400,
    "mp": 70,
    "exp": 82,
    "icon": "🌸",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Forked Road: East Sea"
    ],
    "directions": [
      "From Aquarium: Exit right through Forked Road: West Sea to East Sea."
    ],
    "safeSpots": "Swim above the sea anemones. Flower Fish attacks in slow rhythmic waves.",
    "notableDrops": [
      "Flower Fish Petal",
      "Scroll for Claw for ATT 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Flower%20Fish",
    "verifiedDrops": []
  },
  {
    "id": "scarlion-desert",
    "name": "Scarlion (Desert)",
    "nameHe": "Scarlion (Desert)",
    "level": 36,
    "hp": 1400,
    "mp": 70,
    "exp": 82,
    "icon": "🦂",
    "category": "31-50",
    "town": "Ariant",
    "locations": [
      "Scorching Desert"
    ],
    "directions": [
      "From Ariant: Traverse east through Sunset Desert into Scorching Desert."
    ],
    "safeSpots": "Climb on sand boulders. Quick melee claw swipe.",
    "notableDrops": [
      "Scarlion Tail",
      "Scroll for Shield for DEF 60%",
      "Gold Slain"
    ],
    "starsClaws": "Gold Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Scarlion%20(Desert)",
    "verifiedDrops": []
  },
  {
    "id": "lupin",
    "name": "Lupin",
    "nameHe": "לופין (קוף זורק בננות)",
    "level": 37,
    "hp": 1500,
    "mp": 60,
    "exp": 85,
    "icon": "🐵",
    "category": "36-50+",
    "town": "Ellinia",
    "locations": [
      "Monkey Forest I (יער הקופים באליניה)",
      "Monkey Forest II"
    ],
    "directions": [
      "מאליניה (Ellinia): צא מהפורטל הצפוני דרך עצי היער עד Monkey Forest I."
    ],
    "safeSpots": "זהירות: הקופים זורקים בננות למרחק! עמוד על ענפים גבוהים מחוץ לטווח הזריקה האופקי שלהם.",
    "notableDrops": [
      "Lupin Banana",
      "Red Cross Hat",
      "Scroll for Overall Armor for DEX 60%"
    ],
    "starsClaws": "Scroll for DEX 60%",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/35",
    "verifiedDrops": [
      {
        "name": "Bronze Chain Boots",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Bazlud",
        "category": "Weapons",
        "price": "40,000 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Aluminum Baseball Bat",
        "category": "Weapons",
        "price": "9,999 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Kumbi Throwing Stars",
        "category": "Stars",
        "price": "365,999 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Lupin's Banana",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 10,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Stiff Feather",
        "category": "Etc",
        "price": "50 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Silver Ore",
        "category": "Etc",
        "price": "85 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Emerald Ore",
        "category": "Etc",
        "price": "90 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Opal Ore",
        "category": "Etc",
        "price": "122 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Yellow Bandana",
        "category": "Equips",
        "price": "999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Golden Pride",
        "category": "Equips",
        "price": "4,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Hunter's Armor",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Legolier",
        "category": "Equips",
        "price": "6,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Legolia",
        "category": "Equips",
        "price": "6,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Legolier Pants",
        "category": "Equips",
        "price": "6,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Legolia Pants",
        "category": "Equips",
        "price": "5,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Sneakers",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Mithril Tower Shield",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Titan",
        "category": "Weapons",
        "price": "24,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Snowball",
        "category": "Stars",
        "price": null,
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: Monkey Forest I (יער הקופים 1 באליניה)",
      "targetMap": "Hidden Street: Monkey Forest II (יער הקופים העמוק)",
      "landmark": "גזע עץ ענקי עם חבל קלוע ושילוט בננה מעץ",
      "landmarkIcon": "🍌",
      "coordinates": "צד שמאל-עליון של יער הקופים",
      "howToEnter": "טפס בחבלים לצד שמאל-עליון של העץ ולחץ [↑ חץ למעלה] מול פתח הגזע.",
      "warningTip": "קופים זורקי בננות (רמה 37). מומלץ לעמוד על פלטפורמות עץ מעליהם ולזרוק כוכבים.",
      "miniMap": {
        "theme": "ellinia",
        "themeName": "Monkey Forest I (יער הקופים באליניה)",
        "platforms": [
          {
            "x": 10,
            "y": 25,
            "w": 35,
            "h": 6,
            "label": "ענף שמאלי עליון (פתח הגזע)"
          },
          {
            "x": 55,
            "y": 40,
            "w": 35,
            "h": 6,
            "label": "ענף ימני"
          },
          {
            "x": 25,
            "y": 65,
            "w": 50,
            "h": 6,
            "label": "ענף מרכזי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "תחתית היער"
          }
        ],
        "ropes": [
          {
            "x": 25,
            "y1": 25,
            "y2": 65
          },
          {
            "x": 70,
            "y1": 40,
            "y2": 65
          },
          {
            "x": 50,
            "y1": 65,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 22,
          "y": 21,
          "icon": "🚪",
          "name": "פתח גזע הקופים (Monkey Forest II)"
        },
        "spawnSpot": {
          "x": 85,
          "y": 84,
          "name": "כניסה מאליניה"
        }
      }
    }
  },
  {
    "id": "lorang",
    "name": "Lorang",
    "nameHe": "לורנג (סרטן חוף כחול)",
    "level": 37,
    "hp": 1450,
    "mp": 60,
    "exp": 80,
    "icon": "🦀",
    "category": "36-50+",
    "town": "Florina Beach",
    "locations": [
      "Florina Beach: Clang and Lorang",
      "Florina Beach: Lorang Lorang"
    ],
    "directions": [
      "מליט הארבור (Lith Harbor): שוחח עם Pason (או VIP Cab) ובקש להפליג לחוף פלורינה (Florina Beach).",
      "בחוף פלורינה צא מזרחה עד למפת הסרטנים Clang and Lorang."
    ],
    "safeSpots": "עמוד על דקלי הקוקוס וגזעי העץ הפזורים בחוף. זרוק כוכבים מלמעלה.",
    "notableDrops": [
      "Korean Fan (נשק חלומות 0 DEX לרמה 35!)",
      "Lorang Claws",
      "Scroll for Claw for ATT 10%"
    ],
    "starsClaws": "Korean Fan (Fast 4, 26 ATT)",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/36",
    "verifiedDrops": [
      {
        "name": "Cat's Eye",
        "category": "Equips",
        "price": "18,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Gold Stealer",
        "category": "Equips",
        "price": "4,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Purple Steal",
        "category": "Equips",
        "price": "4,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Black Dragon Robe",
        "category": "Equips",
        "price": "12,000 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Dark Brown Stealer Pants",
        "category": "Equips",
        "price": "5,000 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Purple Steal Pants",
        "category": "Equips",
        "price": "3,299.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Silky Boots",
        "category": "Equips",
        "price": "5,943.5 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Sky Blue Umbrella",
        "category": "Weapons",
        "price": "7,777 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Purple Tube",
        "category": "Weapons",
        "price": "3,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Korean Fan",
        "category": "Weapons",
        "price": "90,000 Mesos",
        "votes": 18,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 8,
        "source": "reported"
      },
      {
        "name": "Garnet Ore",
        "category": "Etc",
        "price": "180 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Black Pao",
        "category": "Equips",
        "price": "3,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Oaker Scorpio",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red-Lined Kismet",
        "category": "Equips",
        "price": "40,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Orange Tai",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Oaker Scorpio Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dagger Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "189,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Speed Scroll: Greater",
        "category": "Scrolls",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pet Equip Jump Scroll: Greater",
        "category": "Scrolls",
        "price": "4,549.5 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "chronos",
    "name": "Chronos",
    "nameHe": "כרונוס (שעון מעופף)",
    "level": 37,
    "hp": 1500,
    "mp": 60,
    "exp": 82,
    "icon": "⏰",
    "category": "36-50+",
    "town": "Ludibrium Clocktower",
    "locations": [
      "Ludibrium: The Path of Time <1>",
      "Ludibrium: Time Warp"
    ],
    "directions": [
      "מלודיבריום: רד במעלית המרכזית אל מגדל השעון (Clocktower Bottom) והיכנס ל-Path of Time 1."
    ],
    "safeSpots": "עמוד על גלגלי השיניים המסתובבים ותקוף את השעונים באוויר.",
    "notableDrops": [
      "Chronos Cogwheel",
      "Scroll for Cape for HP 60%",
      "Mokbi Throwing-Stars"
    ],
    "starsClaws": "Mokbi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chronos",
    "verifiedDrops": []
  },
  {
    "id": "green-trixter",
    "name": "Green Trixter",
    "nameHe": "גרין טריקסטר (עכביש ירוק)",
    "level": 37,
    "hp": 1450,
    "mp": 60,
    "exp": 80,
    "icon": "🕷️",
    "category": "36-50+",
    "town": "Ludibrium",
    "locations": [
      "Ludibrium: Eos Tower 70th-61st Floor"
    ],
    "directions": [
      "מלודיבריום (Ludibrium): היכנס למגדל איאוס (Eos Tower).",
      "רד אל קומות 70 עד 61 (סמוך ליציאות החיצוניות של המגדל).",
      "מיקום הציד: עכבישי Green Trixter נעים על גבי קפיצי הצעצועים ופלטפורמות המתכת."
    ],
    "safeSpots": "עמוד על פלטפורמות המתכת העליונות מעל רשתות הקורים של העכבישים.",
    "notableDrops": [
      "Green Trixter's Web",
      "Scroll for Gloves for DEX 10%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Green%20Trixter",
    "verifiedDrops": []
  },
  {
    "id": "tortie",
    "name": "Tortie",
    "nameHe": "Tortie",
    "level": 37,
    "hp": 1500,
    "mp": 60,
    "exp": 85,
    "icon": "🐢",
    "category": "31-50",
    "town": "Lith Harbor / Florina Beach",
    "locations": [
      "Florina Beach: Warm Sand",
      "Florina Beach: Beach Hill"
    ],
    "directions": [
      "From Lith Harbor: Talk to Pison (requires Florina Beach VIP Ticket or 1,500 mesos) to teleport to Florina Beach -> go right to Warm Sand."
    ],
    "safeSpots": "Stand on the palm trees and elevated wooden sunbenches. Torties have high weapon defense; Lucky Seven cuts right through.",
    "notableDrops": [
      "Tortie Shell",
      "Scroll for Topwear for DEF 60%",
      "Mithril Wristell (Lv. 35 Claw)",
      "Steel Ore"
    ],
    "starsClaws": "Mithril Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/41",
    "verifiedDrops": [
      {
        "name": "Silver Black Stealer",
        "category": "Equips",
        "price": "18,888 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Purple Fairy Top",
        "category": "Equips",
        "price": null,
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Green Huntress Pants",
        "category": "Equips",
        "price": "9,000 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Mithril Ore",
        "category": "Etc",
        "price": "170 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Amethyst Ore",
        "category": "Etc",
        "price": "185 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Red Sonata",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Sonata",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Sonata",
        "category": "Equips",
        "price": "49,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Sneak",
        "category": "Equips",
        "price": "3,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Oaker Shouldermail",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Orientican",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Calas",
        "category": "Equips",
        "price": "44,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Calas",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Lumati",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Choro",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Choro",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Sneak Pants",
        "category": "Equips",
        "price": "2,666 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Oaker Shouldermail Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Orientican Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Tube",
        "category": "Weapons",
        "price": "57,777 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Gloves Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "244,444 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cape STR Scroll: Intermediate",
        "category": "Scrolls",
        "price": "195,000 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "king-bloctopus",
    "name": "King Bloctopus",
    "nameHe": "King Bloctopus",
    "level": 37,
    "hp": 1600,
    "mp": 70,
    "exp": 88,
    "icon": "🐙",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Eos Tower 93rd-91st Floor"
    ],
    "directions": [
      "From Ludibrium: Exit left into Eos Tower -> climb down to the 93rd floor."
    ],
    "safeSpots": "Use the plastic building block ladders and snipe onto horizontal rows.",
    "notableDrops": [
      "King Bloctopus Propeller",
      "Scroll for Helmet for DEF 60%",
      "Steel Igor"
    ],
    "starsClaws": "Steel Igor",
    "meowDbUrl": "https://meowdb.com/msclassic?search=King%20Bloctopus",
    "verifiedDrops": []
  },
  {
    "id": "krip",
    "name": "Krip",
    "nameHe": "Krip",
    "level": 38,
    "hp": 1650,
    "mp": 80,
    "exp": 90,
    "icon": "🦐",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Big Fish Valley"
    ],
    "directions": [
      "From Aquarium: Exit right -> Forked Road: East Sea -> Big Fish Valley."
    ],
    "safeSpots": "Stay high near the water surface and drop stars downward.",
    "notableDrops": [
      "Krip Claws",
      "Scroll for Gloves for ATT 60%",
      "Gold Slain"
    ],
    "starsClaws": "Gold Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Krip",
    "verifiedDrops": []
  },
  {
    "id": "chipmunk",
    "name": "Chipmunk",
    "nameHe": "Chipmunk",
    "level": 38,
    "hp": 1600,
    "mp": 70,
    "exp": 88,
    "icon": "🐿️",
    "category": "31-50",
    "town": "Mu Lung",
    "locations": [
      "Mu Lung: Wild Animal Trail"
    ],
    "directions": [
      "From Mu Lung: Exit left portal into Wild Animal Trail."
    ],
    "safeSpots": "Stand on bamboo fence posts and snipe down.",
    "notableDrops": [
      "Acorn",
      "Scroll for Helmet for DEF 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chipmunk",
    "verifiedDrops": []
  },
  {
    "id": "deo",
    "name": "Deo",
    "nameHe": "Deo",
    "level": 38,
    "hp": 15000,
    "mp": 200,
    "exp": 500,
    "icon": "🌵",
    "category": "Boss",
    "town": "Ariant",
    "locations": [
      "Royal Cactus Desert (מדבר הקקטוסים המלכותי)"
    ],
    "directions": [
      "From Ariant: Cactus Desert 2 -> Royal Cactus Desert (spawns near the middle)."
    ],
    "safeSpots": "Stand on surrounding sandstone ledges. Deo spins like a top across the ground.",
    "notableDrops": [
      "Deo Needle",
      "Scroll for Claw for ATT 60%",
      "Dark Slain",
      "Mithril Slain"
    ],
    "starsClaws": "Dark Slain & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Deo",
    "verifiedDrops": []
  },
  {
    "id": "triple-rumo",
    "name": "Triple Rumo",
    "nameHe": "Triple Rumo",
    "level": 38,
    "hp": 1650,
    "mp": 80,
    "exp": 90,
    "icon": "🌱",
    "category": "31-50",
    "town": "Magatia",
    "locations": [
      "Lab - Area A-1 (Zenumist Research Lab)"
    ],
    "directions": [
      "From Magatia: Zenumist Lab -> descend to Area A-1."
    ],
    "safeSpots": "Stand on high alchemy beakers and pipes.",
    "notableDrops": [
      "Triple Rumo Flask",
      "Scroll for Topwear for DEF 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Triple%20Rumo",
    "verifiedDrops": []
  },
  {
    "id": "propelly",
    "name": "Propelly",
    "nameHe": "Propelly",
    "level": 39,
    "hp": 1750,
    "mp": 70,
    "exp": 92,
    "icon": "🚁",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Eos Tower 70th-67th Floor"
    ],
    "directions": [
      "From Ludibrium: Go down Eos Tower to floors 70-67 (use Eos Rock for fast descent)."
    ],
    "safeSpots": "Stand on the interior block ledges. Propelly flies in a predictable zigzag pattern.",
    "notableDrops": [
      "Propelly Propeller",
      "Scroll for Shoes for DEX 60%",
      "Bronze Wristell"
    ],
    "starsClaws": "Bronze Wristell",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Propelly",
    "verifiedDrops": []
  },
  {
    "id": "zombie-lupin",
    "name": "Zombie Lupin",
    "nameHe": "זומבי לופין (קוף זומבי)",
    "level": 40,
    "hp": 1800,
    "mp": 70,
    "exp": 90,
    "icon": "💀",
    "category": "36-50+",
    "town": "Ellinia",
    "locations": [
      "Monkey Forest: Tree Dungeon (עץ הקופים החלול)",
      "Forest of Evil Energy"
    ],
    "directions": [
      "מאליניה (Ellinia): התקדם ל-Monkey Forest II, חפש פתח מוסתר בעץ במרכז המפה המוביל ל-Tree Dungeon."
    ],
    "safeSpots": "עמוד על הפלטפורמות הצדדיות של העץ החלול. מפת אימון פנומנלית לרמות 35-45.",
    "notableDrops": [
      "Tobis Throwing-Stars (+19 Attack - כוכבי הטלה מעולים!)",
      "Cursed Doll (בובת קללה מבוקשת לקווסטים)",
      "Scroll for Helmet for HP 60%"
    ],
    "starsClaws": "Tobis Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/38",
    "verifiedDrops": [
      {
        "name": "Star Earrings",
        "category": "Equips",
        "price": "5,649.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Moonlight",
        "category": "Equips",
        "price": "25,000 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Black Napoleon",
        "category": "Equips",
        "price": "88,944 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Lionheart",
        "category": "Weapons",
        "price": "20,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Stiff Feather",
        "category": "Etc",
        "price": "50 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Amethyst Ore",
        "category": "Etc",
        "price": "185 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Black Knucklevest",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Purple Shadow",
        "category": "Equips",
        "price": "9,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Purple Moonlight",
        "category": "Equips",
        "price": "17,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Purple Shadow Pants",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Magic Shoes",
        "category": "Equips",
        "price": "4,099.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Noel",
        "category": "Equips",
        "price": "9,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Adamantium Knuckle",
        "category": "Equips",
        "price": "14,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Cass",
        "category": "Weapons",
        "price": "14,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Niam",
        "category": "Weapons",
        "price": "17,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Heckler",
        "category": "Weapons",
        "price": "27,333 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Crow",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "king-slime",
    "name": "King Slime (בוס)",
    "nameHe": "קינג סלים (הבוס של קרנינג)",
    "level": 40,
    "hp": 8000,
    "mp": 200,
    "exp": 800,
    "icon": "👑",
    "category": "bosses",
    "town": "Kerning City",
    "locations": [
      "Kerning City Party Quest: Last Stage (חדר הבוס של ה-KPQ)"
    ],
    "directions": [
      "מקרנינג סיטי (Kerning City): רד לתחנת הרכבת התחתית, חפש את Lakelis כדי להקים קבוצה של 4 שחקנים (רמות 21-30).",
      "פתור את שלבי 1, 2, 3 ו-4 והיכנס לחדר האחרון שבו מופיע קינג סלים!"
    ],
    "safeSpots": "תפקיד המתנקש: לעמוד על החבלים או בקצוות המדפים ולירות Lucky Seven ברצף. קפוץ מעלה כשהבוס מבצע קפיצת רעידת אדמה (Earthquake Jump) כדי לא לחטוף Stun.",
    "notableDrops": [
      "Squishy Shoes (+1 לכל התכונות)",
      "מגילות יקרות ערך (Scrolls)",
      "עפרות מתכת ושיקויים"
    ],
    "starsClaws": "Squishy Shoes & Rare Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=King%20Slime%20(%D7%91%D7%95%D7%A1)",
    "verifiedDrops": []
  },
  {
    "id": "cold-eye",
    "name": "Cold Eye",
    "nameHe": "עין קרה (Cold Eye)",
    "level": 40,
    "hp": 1800,
    "mp": 60,
    "exp": 90,
    "icon": "👁️",
    "category": "36-50+",
    "town": "Sleepywood",
    "locations": [
      "Ant Tunnel: Cold Eye Lair",
      "Deep Cave: Cold Cradle"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): היכנס ל-Ant Tunnel ועבור עמוק פנימה מעבר למערות Evil Eye אל Cold Eye Lair."
    ],
    "safeSpots": "עמוד על זקיפי המערה מעל הנטיפים. מתקפת הקרח שלו איטית ואתה יכול לתקוף ממרחק.",
    "notableDrops": [
      "Cold Eye Tail",
      "Scroll for Shield for DEF 60%",
      "Iron Igor"
    ],
    "starsClaws": "Iron Igor",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/37",
    "verifiedDrops": [
      {
        "name": "Brown Starlight",
        "category": "Equips",
        "price": "18,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Blue Starlight",
        "category": "Equips",
        "price": "44,999 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 5,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Hat HP Scroll: Intermediate",
        "category": "Scrolls",
        "price": "8,888 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Mokbi Throwing Stars",
        "category": "Stars",
        "price": "145,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Icicle",
        "category": "Stars",
        "price": "450,000 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Fragment of Magic",
        "category": "Etc",
        "price": "80 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Iron Ore",
        "category": "Etc",
        "price": "350 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Gold Ore",
        "category": "Etc",
        "price": "98 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Jousting Helmet",
        "category": "Equips",
        "price": "8,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Burgler",
        "category": "Equips",
        "price": "11,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Guiltian",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Distinction",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Yellow Duke",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Legolia",
        "category": "Equips",
        "price": "7,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bloody Mantis",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Fitted Mail",
        "category": "Equips",
        "price": "11,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Lumati",
        "category": "Equips",
        "price": "25,277.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Choro",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Legolia Pants",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bloody Mantis Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Ocean Mesana",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "tick",
    "name": "Tick",
    "nameHe": "טיק (שעון קפיץ צהוב)",
    "level": 40,
    "hp": 1850,
    "mp": 60,
    "exp": 92,
    "icon": "⏱️",
    "category": "36-50+",
    "town": "Ludibrium Clocktower",
    "locations": [
      "Ludibrium: Whirlpool of Time <1>"
    ],
    "directions": [
      "במגדל השעון של לודיבריום: רד ל-Whirlpool of Time 1."
    ],
    "safeSpots": "גלגלי שיניים מסתובבים.",
    "notableDrops": [
      "Tick Spring",
      "Scroll for Overall for DEF 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Tick",
    "verifiedDrops": []
  },
  {
    "id": "mask-fish",
    "name": "Mask Fish",
    "nameHe": "Mask Fish",
    "level": 40,
    "hp": 1850,
    "mp": 80,
    "exp": 96,
    "icon": "🎭",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Mushroom Coral Hill"
    ],
    "directions": [
      "From Aquarium: Traverse east through Big Fish Valley into Mushroom Coral Hill."
    ],
    "safeSpots": "Float between giant mushroom corals.",
    "notableDrops": [
      "Mask Fish Fin",
      "Scroll for Shoes for DEX 60%",
      "Dark Slain"
    ],
    "starsClaws": "Dark Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mask%20Fish",
    "verifiedDrops": []
  },
  {
    "id": "sand-mole",
    "name": "Sand Mole",
    "nameHe": "Sand Mole",
    "level": 40,
    "hp": 1850,
    "mp": 80,
    "exp": 95,
    "icon": "🦔",
    "category": "31-50",
    "town": "Ariant / Magatia",
    "locations": [
      "The Desert of Sand Moles",
      "The Sahel 1",
      "The Sahel 2"
    ],
    "directions": [
      "From Ariant or Magatia: Enter The Sahel 1 & 2 (the famous straight horizontal training road connecting the two towns)."
    ],
    "safeSpots": "Sahel 2 has completely flat terrain and legendary spawn density. Jump-throwing Lucky Seven with Haste allows non-stop grinding.",
    "notableDrops": [
      "Sand Mole Hat",
      "Scroll for Overall Armor for DEX 60%",
      "Steel Slain",
      "Dark Slain"
    ],
    "starsClaws": "Dark Slain & Overall DEX 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sand%20Mole",
    "verifiedDrops": []
  },
  {
    "id": "clang",
    "name": "Clang",
    "nameHe": "קלאנג (סרטן חוף ענק אדום)",
    "level": 41,
    "hp": 1900,
    "mp": 70,
    "exp": 95,
    "icon": "🦞",
    "category": "36-50+",
    "town": "Florina Beach",
    "locations": [
      "Florina Beach: Clang and Lorang",
      "Florina Beach: The Beachway"
    ],
    "directions": [
      "מחוף פלורינה (Florina Beach): המשך 2 מפות מזרחה דרך החולות עד למפת Clang and Lorang."
    ],
    "safeSpots": "פלטפורמות עץ וסלעים לצד המים. לקלאנג יש שריון קשיח, לכן Critical Throw של אסאסין חיוני להריגה מהירה.",
    "notableDrops": [
      "Korean Fan",
      "Clang Shell",
      "Steely Throwing-Stars (נדיר ביותר!)"
    ],
    "starsClaws": "Korean Fan & Steely Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/44",
    "verifiedDrops": [
      {
        "name": "Silver Black Stealer",
        "category": "Equips",
        "price": "18,888 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Purple Fairy Top",
        "category": "Equips",
        "price": null,
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Adamantium Ore",
        "category": "Etc",
        "price": "86 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Aquamarine Ore",
        "category": "Etc",
        "price": "169 Mesos",
        "votes": 6,
        "source": "reported"
      },
      {
        "name": "Aqua Golden Circlet",
        "category": "Equips",
        "price": "150,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Maro",
        "category": "Equips",
        "price": "37,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Maro",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Seraphis",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Seraphis",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Umber Shouldermail",
        "category": "Equips",
        "price": "50,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Shivermail",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Anakamoon",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Anakamoon",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Calaf",
        "category": "Equips",
        "price": "45,678 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Calaf",
        "category": "Equips",
        "price": "99,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Umber Shouldermail Pants",
        "category": "Equips",
        "price": "49,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Shivermail Skirt",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Yellow Umbrella",
        "category": "Weapons",
        "price": "57,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "platoon-chronos",
    "name": "Platoon Chronos",
    "nameHe": "פלטון כרונוס (שעון קסדה כחול)",
    "level": 41,
    "hp": 2050,
    "mp": 70,
    "exp": 98,
    "icon": "🕰️",
    "category": "36-50+",
    "town": "Ludibrium Clocktower",
    "locations": [
      "Ludibrium: The Path of Time <2>",
      "Ludibrium: Lost Time <1>"
    ],
    "directions": [
      "במגדל השעון של לודיבריום: עבור מ-Path of Time 1 אל Path of Time 2 ו-Lost Time 1."
    ],
    "safeSpots": "עמוד על פלטפורמות המתכת התלויות. זוהי אחת המפות המפורסמות במייפל בגלל הדרופ של כפפות!",
    "notableDrops": [
      "Scroll for Gloves for ATT 60% (הדרופ המבוקש ביותר בלודיבריום!)",
      "Esther Shield",
      "Platoon Cogwheel"
    ],
    "starsClaws": "Gloves for ATT 60% Drop",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Platoon%20Chronos",
    "verifiedDrops": [],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Ludibrium: Clocktower Bottom Floor (תחתית מגדל השעון בלודיבריום)",
      "targetMap": "Hidden Street: Lost Time 1 (הזמן האבוד 1)",
      "landmark": "שעון קיר עתיק ומחוגי שעון זהובים ענקיים החרוטים בדלת הכניסה",
      "landmarkIcon": "⏰",
      "coordinates": "קומה תחתונה של מגדל השעון, דלת שעון זהובה",
      "howToEnter": "עמוד מול דלת השעון הענקית ולחץ [↑ חץ למעלה].",
      "warningTip": "מפת הזהב של שחקני האסאסין! מפילה את המגילה היקרה ביותר: כפפות להתקפה 60% (Gloves for ATT 60%)!",
      "miniMap": {
        "theme": "magatia",
        "themeName": "Clocktower: Lost Time 1 (לודיבריום)",
        "platforms": [
          {
            "x": 10,
            "y": 25,
            "w": 80,
            "h": 6,
            "label": "מדף גלגלי שיניים עליון"
          },
          {
            "x": 20,
            "y": 55,
            "w": 60,
            "h": 6,
            "label": "מדף שעונים אמצעי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "רצפת מגדל השעון"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 25,
            "y2": 55
          },
          {
            "x": 70,
            "y1": 25,
            "y2": 55
          },
          {
            "x": 50,
            "y1": 55,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 51,
          "icon": "⏰",
          "name": "דלת השעון המוזהבת (Lost Time 1)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מלודיבריום"
        }
      }
    }
  },
  {
    "id": "flyeye",
    "name": "Flyeye",
    "nameHe": "פליי-איי (עין מעופפת של מכרה זאקום)",
    "level": 41,
    "hp": 1950,
    "mp": 70,
    "exp": 95,
    "icon": "🦇",
    "category": "36-50+",
    "town": "El Nath: Dead Mine",
    "locations": [
      "The Passage of Zakum (המעבר למערת זאקום)"
    ],
    "directions": [
      "במכרה המוות באל נאת': במעבר המוביל למזבח של זאקום."
    ],
    "safeSpots": "פלטפורמות לבה.",
    "notableDrops": [
      "Flyeye Wing",
      "Scroll for Shoes for Speed 60%"
    ],
    "starsClaws": "Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Flyeye",
    "verifiedDrops": []
  },
  {
    "id": "planey",
    "name": "Planey",
    "nameHe": "Planey",
    "level": 41,
    "hp": 1950,
    "mp": 80,
    "exp": 98,
    "icon": "✈️",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Eos Tower 66th-60th Floor"
    ],
    "directions": [
      "From Ludibrium: Descend Eos Tower to the 66th floor."
    ],
    "safeSpots": "Platform sniping is very easy in Eos Tower. Fire Lucky Seven across the open gaps.",
    "notableDrops": [
      "Planey Propeller",
      "Scroll for Cape for DEX 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Planey",
    "verifiedDrops": []
  },
  {
    "id": "roloduck",
    "name": "Roloduck",
    "nameHe": "Roloduck",
    "level": 41,
    "hp": 2000,
    "mp": 80,
    "exp": 100,
    "icon": "🦆",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Cloud Balcony",
      "Terrace Room"
    ],
    "directions": [
      "From Ludibrium: Exit right into Terrace Park -> enter portal into Cloud Balcony."
    ],
    "safeSpots": "Stand on toy block towers. Roloduck moves at moderate speed along the flat ground.",
    "notableDrops": [
      "Roloduck Wheel",
      "Scroll for Overall Armor for DEX 10%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Roloduck",
    "verifiedDrops": []
  },
  {
    "id": "robo",
    "name": "Robo",
    "nameHe": "Robo",
    "level": 41,
    "hp": 2000,
    "mp": 80,
    "exp": 100,
    "icon": "🤖",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Toy Factory: Process 1 <Zone 1>"
    ],
    "directions": [
      "From Ludibrium: Go to Toy Factory entrance -> descend conveyor belts into Process 1."
    ],
    "safeSpots": "Stand on top of the factory control consoles above the conveyor belts.",
    "notableDrops": [
      "Robo Heart",
      "Scroll for Topwear for DEF 60%",
      "Bronze Slain"
    ],
    "starsClaws": "Bronze Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Robo",
    "verifiedDrops": []
  },
  {
    "id": "mateon",
    "name": "Mateon",
    "nameHe": "Mateon",
    "level": 41,
    "hp": 1900,
    "mp": 80,
    "exp": 95,
    "icon": "👽",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Boswell Field I",
      "Boswell Field II"
    ],
    "directions": [
      "From Omega Sector: Exit right portal into Boswell Field I."
    ],
    "safeSpots": "Stand on the yellow alien spacecraft wreckage and antennas.",
    "notableDrops": [
      "Mateon Tentacle",
      "Scroll for Helmet for DEF 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mateon",
    "verifiedDrops": []
  },
  {
    "id": "plateon",
    "name": "Plateon",
    "nameHe": "Plateon",
    "level": 41,
    "hp": 1950,
    "mp": 80,
    "exp": 98,
    "icon": "🛸",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Boswell Field II",
      "Boswell Field III"
    ],
    "directions": [
      "From Omega Sector: Boswell Field I -> enter right portal to Boswell Field II."
    ],
    "safeSpots": "Stand on the high metal scaffolding. Plateon floats inside an armored flying saucer.",
    "notableDrops": [
      "Plateon Helmet",
      "Scroll for Shoes for DEX 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Plateon",
    "verifiedDrops": []
  },
  {
    "id": "scorpion",
    "name": "Scorpion",
    "nameHe": "Scorpion",
    "level": 41,
    "hp": 2000,
    "mp": 80,
    "exp": 100,
    "icon": "🦂",
    "category": "31-50",
    "town": "Ariant / Magatia",
    "locations": [
      "The Sahel 2",
      "The Sahel 3"
    ],
    "directions": [
      "From Magatia or Ariant: Travel to The Sahel 2 (co-spawns with Sand Mole)."
    ],
    "safeSpots": "Flat horizontal line map. Jump-shot Lucky Seven lets you eliminate scorpions before they reach stinging range.",
    "notableDrops": [
      "Scorpion Tail",
      "Scroll for Claw for ATT 60%",
      "Gold Slain",
      "Tobirou Throwing-Stars"
    ],
    "starsClaws": "Tobirou & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Scorpion",
    "verifiedDrops": []
  },
  {
    "id": "iron-hog",
    "name": "Iron Hog",
    "nameHe": "חזיר ברזל (Iron Hog)",
    "level": 42,
    "hp": 2100,
    "mp": 70,
    "exp": 105,
    "icon": "🐗",
    "category": "36-50+",
    "town": "Perion",
    "locations": [
      "Iron Hog Area (אזור חזירי הברזל בפריון)",
      "Perion: East Rocky Mountain IV"
    ],
    "directions": [
      "מפריון: צא מזרחה ועלה בהר הסלעי לעבר East Rocky Mountain IV."
    ],
    "safeSpots": "עמוד על מדפי הסלע הגבוהים. לחזיר ברזל יש הגנה פיזית גבוהה מאוד (Armor), ולכן Critical Throw של מתנקש חותך אותו בקלות!",
    "notableDrops": [
      "Mokbi Throwing-Stars (+19 ATT)",
      "Iron Hog Horseshoe",
      "Scroll for Cape for DEX 60%"
    ],
    "starsClaws": "Mokbi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/24",
    "verifiedDrops": [
      {
        "name": "Dark Silver Stealer",
        "category": "Equips",
        "price": "8,888 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Steal",
        "category": "Equips",
        "price": "7,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Blue Hunter's Pants",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Silver Battle Grieves",
        "category": "Equips",
        "price": "6,250 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Gladius",
        "category": "Weapons",
        "price": "15,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Orange Potion",
        "category": "Use",
        "price": "130 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Arrows for Bows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Iron Hog's Metal Hoof",
        "category": "Etc",
        "price": "53 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Leather",
        "category": "Etc",
        "price": "119 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 7,
        "source": "reported"
      },
      {
        "name": "Adamantium Ore",
        "category": "Etc",
        "price": "86 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Loosecap",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Pilfer",
        "category": "Equips",
        "price": "9,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Orange Golden Circlet",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Jangoon Armor",
        "category": "Equips",
        "price": "18,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue China",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Piettra",
        "category": "Equips",
        "price": "14,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Shouldermail",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Moon (F)",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Engrit",
        "category": "Equips",
        "price": "9,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Jangoon Pants",
        "category": "Equips",
        "price": "13,333 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue China Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Shouldermail Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Moon Pants",
        "category": "Equips",
        "price": "25,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Arrows for Crossbows",
        "category": "Use",
        "price": "0.5 Mesos",
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: Iron Boar Land (ארץ חזירי הבר החרוכים ליד פריון)",
      "targetMap": "Hidden Street: The Burnt Land I (האדמה החרוכה)",
      "landmark": "שער סלעים שרוף מעוטר בקוצים ושלט סכנה",
      "landmarkIcon": "🐗",
      "coordinates": "קצה ימני של דרך האבנים החרוכות בפריון",
      "howToEnter": "עמוד מול שער הסלעים השרופים ולחץ [↑ חץ למעלה].",
      "warningTip": "חזירי בר עטויי שריון עם הגנה פיזית גבוהה מאוד. כגנב, השתמש ב-Lucky Seven שמתעלם מחלק מההגנה!",
      "miniMap": {
        "theme": "perion",
        "themeName": "Iron Boar Land (פריון)",
        "platforms": [
          {
            "x": 15,
            "y": 35,
            "w": 70,
            "h": 6,
            "label": "מצוק סלעים עליון"
          },
          {
            "x": 25,
            "y": 65,
            "w": 50,
            "h": 6,
            "label": "מדף ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "אדמת בזלת חרוכה"
          }
        ],
        "ropes": [
          {
            "x": 40,
            "y1": 35,
            "y2": 65
          },
          {
            "x": 60,
            "y1": 65,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 80,
          "y": 84,
          "icon": "🔥",
          "name": "שער האדמה החרוכה (The Burnt Land)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מפריון"
        }
      }
    }
  },
  {
    "id": "block-golem",
    "name": "Block Golem",
    "nameHe": "Block Golem",
    "level": 42,
    "hp": 2100,
    "mp": 80,
    "exp": 102,
    "icon": "🧱",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Eos Tower 8th-4th Floor"
    ],
    "directions": [
      "From Ludibrium: Take Eos Rock down to 10th floor -> climb down to 8th-4th floor."
    ],
    "safeSpots": "Stand on high block steps. Block Golems walk very slowly, ideal for kiting.",
    "notableDrops": [
      "Block Golem Piece",
      "Scroll for Claw for ATT 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Block%20Golem",
    "verifiedDrops": []
  },
  {
    "id": "mecateon",
    "name": "Mecateon",
    "nameHe": "Mecateon",
    "level": 42,
    "hp": 2100,
    "mp": 80,
    "exp": 102,
    "icon": "🤖",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Boswell Field III",
      "Boswell Field IV"
    ],
    "directions": [
      "From Omega Sector: Head right across Boswell Field II to Boswell Field III."
    ],
    "safeSpots": "Elevated radars and metal boxes allow easy vertical snipes.",
    "notableDrops": [
      "Mecateon Laser Gun",
      "Scroll for Overall Armor for DEX 60%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mecateon",
    "verifiedDrops": []
  },
  {
    "id": "barnard-gray",
    "name": "Barnard Gray",
    "nameHe": "Barnard Gray",
    "level": 42,
    "hp": 2050,
    "mp": 80,
    "exp": 100,
    "icon": "👽",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Kulan Field I",
      "Kulan Field II"
    ],
    "directions": [
      "From Omega Sector: Exit left portal into Kulan Field I."
    ],
    "safeSpots": "Stand on rocky desert mounds and alien pods. Avoid their psychic beam attacks.",
    "notableDrops": [
      "Barnard Gray Cell",
      "Scroll for Topwear for DEF 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Barnard%20Gray",
    "verifiedDrops": []
  },
  {
    "id": "iron-mutae",
    "name": "Iron Mutae",
    "nameHe": "Iron Mutae",
    "level": 42,
    "hp": 2100,
    "mp": 80,
    "exp": 102,
    "icon": "⚙️",
    "category": "31-50",
    "town": "Magatia",
    "locations": [
      "Lab - Area B-3 (Alcadno Lab)"
    ],
    "directions": [
      "From Magatia: Alcadno Lab -> Area B-3."
    ],
    "safeSpots": "Stand on electrical generators above the floor.",
    "notableDrops": [
      "Iron Mutae Shard",
      "Scroll for Claw for ATT 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Iron%20Mutae",
    "verifiedDrops": []
  },
  {
    "id": "tick-tock",
    "name": "Tick-Tock",
    "nameHe": "טיק-טוק (שעון קפיץ סגול מתקדם)",
    "level": 43,
    "hp": 2200,
    "mp": 70,
    "exp": 104,
    "icon": "⏱️",
    "category": "36-50+",
    "town": "Ludibrium Clocktower",
    "locations": [
      "Ludibrium: Whirlpool of Time <2>"
    ],
    "directions": [
      "במגדל השעון של לודיבריום: רד ל-Whirlpool of Time 2."
    ],
    "safeSpots": "קורות שעון תלויות.",
    "notableDrops": [
      "Tick-Tock Spring",
      "Scroll for Shoes for DEX 60%",
      "Bronze Igrit"
    ],
    "starsClaws": "Bronze Igrit",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Tick-Tock",
    "verifiedDrops": []
  },
  {
    "id": "retz",
    "name": "Retz",
    "nameHe": "Retz",
    "level": 43,
    "hp": 2200,
    "mp": 80,
    "exp": 105,
    "icon": "🐭",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Helios Tower 100th-99th Floor"
    ],
    "directions": [
      "From Ludibrium: Exit far right into Helios Tower -> enter top floors 100-99."
    ],
    "safeSpots": "Helios Tower has narrow platforms with very fast spawn rate. Great mob density for rapid leveling.",
    "notableDrops": [
      "Retz Fur",
      "Scroll for Shoes for JUMP 60%",
      "Steel Slain",
      "Mithril Ore"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Retz",
    "verifiedDrops": []
  },
  {
    "id": "zeta-gray",
    "name": "Zeta Gray",
    "nameHe": "Zeta Gray",
    "level": 43,
    "hp": 2200,
    "mp": 80,
    "exp": 105,
    "icon": "👽",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Kulan Field II",
      "Kulan Field III"
    ],
    "directions": [
      "From Omega Sector: Exit left to Kulan Field I -> enter portal to Kulan Field II."
    ],
    "safeSpots": "Stand on stone cliff shelves above their marching path.",
    "notableDrops": [
      "Zeta Gray Cell",
      "Scroll for Cape for DEX 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Zeta%20Gray",
    "verifiedDrops": []
  },
  {
    "id": "poopa",
    "name": "Poopa",
    "nameHe": "Poopa",
    "level": 43,
    "hp": 2200,
    "mp": 90,
    "exp": 108,
    "icon": "🐡",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Deep Sea Trench I"
    ],
    "directions": [
      "From Aquarium: Head east into the deep water trench."
    ],
    "safeSpots": "Use sunken ship wreckage platforms.",
    "notableDrops": [
      "Poopa Tail",
      "Scroll for Overall Armor for DEX 10%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Poopa",
    "verifiedDrops": []
  },
  {
    "id": "red-flower-serpent",
    "name": "Red Flower Serpent",
    "nameHe": "Red Flower Serpent",
    "level": 43,
    "hp": 2200,
    "mp": 80,
    "exp": 105,
    "icon": "🐍",
    "category": "31-50",
    "town": "Mu Lung",
    "locations": [
      "Snake Path"
    ],
    "directions": [
      "From Mu Lung: Exit left -> Wild Animal Trail -> enter portal to Snake Path."
    ],
    "safeSpots": "Stand on the tall wooden training dummies and rocks.",
    "notableDrops": [
      "Snake Scale",
      "Scroll for Overall Armor for DEX 60%",
      "Mithril Slain"
    ],
    "starsClaws": "Mithril Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Red%20Flower%20Serpent",
    "verifiedDrops": []
  },
  {
    "id": "skeledog",
    "name": "Skeledog",
    "nameHe": "Skeledog",
    "level": 44,
    "hp": 2400,
    "mp": 80,
    "exp": 112,
    "icon": "🦴",
    "category": "31-50",
    "town": "Perion",
    "locations": [
      "Excavation Site: Military Camp I",
      "Excavation Site: Military Camp II"
    ],
    "directions": [
      "From Perion: Go right to Rocky Road -> Excavation Site -> Remains II -> pass through the military barricade into Military Camp I."
    ],
    "safeSpots": "Stand on the watchtower steps and wooden fences. Skeledogs run fast so stay on elevated platforms.",
    "notableDrops": [
      "Skeledog Bone",
      "Scroll for Overall Armor for DEX 10%",
      "Steel Slain (Lv. 40 Claw)",
      "Diamonds"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Skeledog",
    "verifiedDrops": []
  },
  {
    "id": "toy-trojan",
    "name": "Toy Trojan",
    "nameHe": "Toy Trojan",
    "level": 44,
    "hp": 2400,
    "mp": 90,
    "exp": 115,
    "icon": "🐴",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Toy Factory: Process 2 <Zone 1>"
    ],
    "directions": [
      "From Ludibrium: Toy Factory -> navigate through Process 1 into Process 2."
    ],
    "safeSpots": "Stand on iron girders above the factory machinery. Toy Trojan shoots cannonballs in a straight line.",
    "notableDrops": [
      "Toy Trojan Wooden Horse Piece",
      "Scroll for Shield for DEF 60%",
      "Gold Slain"
    ],
    "starsClaws": "Gold Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Toy%20Trojan",
    "verifiedDrops": []
  },
  {
    "id": "master-robo",
    "name": "Master Robo",
    "nameHe": "Master Robo",
    "level": 44,
    "hp": 2500,
    "mp": 90,
    "exp": 118,
    "icon": "🤖",
    "category": "31-50",
    "town": "Ludibrium",
    "locations": [
      "Toy Factory: Process 1 <Zone 2>"
    ],
    "directions": [
      "From Ludibrium: Toy Factory -> Process 1 <Zone 2>."
    ],
    "safeSpots": "Stand on conveyor belt pillars. Keep distance from its electrical discharge.",
    "notableDrops": [
      "Master Robo Heart",
      "Scroll for Overall Armor for DEX 60%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Master%20Robo",
    "verifiedDrops": []
  },
  {
    "id": "ultra-gray",
    "name": "Ultra Gray",
    "nameHe": "Ultra Gray",
    "level": 44,
    "hp": 2400,
    "mp": 90,
    "exp": 115,
    "icon": "👽",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Kulan Field III",
      "Kulan Field IV"
    ],
    "directions": [
      "From Omega Sector: Walk left through Kulan Field I & II to Kulan Field III."
    ],
    "safeSpots": "Climb the tall radar towers and snipe down.",
    "notableDrops": [
      "Ultra Gray Cell",
      "Scroll for Claw for ATT 60%",
      "Gold Slain"
    ],
    "starsClaws": "Gold Slain & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ultra%20Gray",
    "verifiedDrops": []
  },
  {
    "id": "poison-poopa",
    "name": "Poison Poopa",
    "nameHe": "Poison Poopa",
    "level": 44,
    "hp": 2400,
    "mp": 90,
    "exp": 115,
    "icon": "🐡",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Deep Sea Trench II"
    ],
    "directions": [
      "From Aquarium: Deep Sea Trench I -> enter portal to Deep Sea Trench II."
    ],
    "safeSpots": "Keep distance to avoid poison mist clouds.",
    "notableDrops": [
      "Poison Poopa Spike",
      "Scroll for Claw for ATT 60%",
      "Mithril Gigantic"
    ],
    "starsClaws": "Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Poison%20Poopa",
    "verifiedDrops": []
  },
  {
    "id": "iron-boar",
    "name": "Iron Boar",
    "nameHe": "חזיר ברזל",
    "level": 45,
    "hp": 2400,
    "mp": 60,
    "exp": 120,
    "icon": "🛡️",
    "category": "36-50+",
    "town": "Perion",
    "locations": [
      "Iron Boar Land (צפון-מזרח פריון)",
      "East Rocky Mountain VII"
    ],
    "directions": [
      "מפריון (Perion): צא צפון-מזרחה, טפס ברכס ההרים הסלעיים דרך East Rocky Mountain עד רמה VII."
    ],
    "safeSpots": "לחזירי ברזל יש שריון כבד. Lucky Seven מתעלם מחלק מחישובי ההגנה הרגילים ולכן גנבים מחסלים אותם במהירות.",
    "notableDrops": [
      "Scroll for Overall Armor for LUK 60%",
      "Bronze Gigantic Claw",
      "Iron Boar Armor"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Iron%20Boar",
    "verifiedDrops": []
  },
  {
    "id": "copper-drake",
    "name": "Copper Drake",
    "nameHe": "קופר דרייק (דרקון נחושת)",
    "level": 45,
    "hp": 2700,
    "mp": 80,
    "exp": 135,
    "icon": "🐲",
    "category": "36-50+",
    "town": "Sleepywood",
    "locations": [
      "Drake Cave: Swampy Path",
      "Drake Cave: Cavern",
      "Sleepywood Dungeon"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): צא מהפורטל המזרחי, המשך דרך הצינוק עד הכניסה ל-Drake Cave."
    ],
    "safeSpots": "עמוד על מדפי הסלע מעל הדרקונים. טווח ה-Keen Eyes הממוקסם מונע מהם לנשוך אותך.",
    "notableDrops": [
      "Scroll for Claw for ATT 60%",
      "Bronze Igor Claw",
      "Drake Skull"
    ],
    "starsClaws": "Scroll for Claw for ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/40",
    "verifiedDrops": [
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Dragon Skin",
        "category": "Etc",
        "price": "200 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Orihalcon Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Black Crystal Ore",
        "category": "Etc",
        "price": "2,500 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Green Pole-Feather Hat",
        "category": "Equips",
        "price": "5,149.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Guiltian",
        "category": "Equips",
        "price": "4,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Distinction",
        "category": "Equips",
        "price": "9,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Pilfer",
        "category": "Equips",
        "price": "9,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Legolier",
        "category": "Equips",
        "price": "5,900 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Scorpio",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Ice Queen",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Crusader Chainmail",
        "category": "Equips",
        "price": "18,694 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Legolier Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Marine Shadow Pants",
        "category": "Equips",
        "price": "11,111 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Shadow Pants",
        "category": "Equips",
        "price": "79,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Scorpio Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Ice Queen Skirt",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Morrican",
        "category": "Equips",
        "price": "3,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Meba",
        "category": "Weapons",
        "price": "12,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Claw Attack Scroll: Greater",
        "category": "Scrolls",
        "price": "92,499.5 Mesos",
        "votes": null,
        "source": "listed"
      }
    ],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Dungeon: Deep Ant Tunnel II (עמוק במערות סליפיווד)",
      "targetMap": "Hidden Street: Drake's Meal Table (שולחן האוכל של הדרקונים)",
      "landmark": "עצמות דינוזאור ענקיות וגולגולת דרקון על פתח מערת לבה",
      "landmarkIcon": "🐲",
      "coordinates": "במרכז קרקעית המערה עמוק בסליפיווד",
      "howToEnter": "עמוד בין צלעות שלד הדרקון הענקיות ולחץ [↑ חץ למעלה].",
      "warningTip": "מפת הדרקונים הטובה ביותר לרמות 45-55! דרקוני נחושת מתחדשים בכמויות ומפילים כלי נשק ומגילות יקרות.",
      "miniMap": {
        "theme": "sleepywood",
        "themeName": "Deep Ant Tunnel (עמקי מערת סליפיווד)",
        "platforms": [
          {
            "x": 15,
            "y": 30,
            "w": 70,
            "h": 6,
            "label": "מצוק סלעים עליון"
          },
          {
            "x": 25,
            "y": 60,
            "w": 50,
            "h": 6,
            "label": "מדף ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המערה (שלד הדרקון)"
          }
        ],
        "ropes": [
          {
            "x": 35,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 65,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 50,
            "y1": 60,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 84,
          "icon": "🐲",
          "name": "שלד הדרקון (Drake's Meal Table)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 26,
          "name": "כניסה מ-Ant Tunnel IV"
        }
      }
    }
  },
  {
    "id": "lunar-pixie",
    "name": "Lunar Pixie",
    "nameHe": "לונאר פיקסי (פיית ירח כחולה)",
    "level": 45,
    "hp": 2300,
    "mp": 80,
    "exp": 108,
    "icon": "🌙",
    "category": "36-50+",
    "town": "Orbis",
    "locations": [
      "Cloud Park III-IV"
    ],
    "directions": [
      "מאורביס: המשך עמוק בפארק העננים דרך Cloud Park II אל מפות III ו-IV."
    ],
    "safeSpots": "ענני הענק המוגבהים. נצל את Haste לקפיצה מהירה מעליהן.",
    "notableDrops": [
      "Lunar Pixie's Moon Piece",
      "Scroll for Gloves for ATT 10%",
      "Bronze Igrit"
    ],
    "starsClaws": "Gloves for ATT 10%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lunar%20Pixie",
    "verifiedDrops": []
  },
  {
    "id": "king-block-golem",
    "name": "King Block Golem",
    "nameHe": "King Block Golem",
    "level": 45,
    "hp": 2600,
    "mp": 90,
    "exp": 125,
    "icon": "🧱",
    "category": "31-50",
    "town": "Ludibrium / Omega Sector",
    "locations": [
      "Eos Tower 3rd-1st Floor"
    ],
    "directions": [
      "From Ludibrium: Descend to bottom of Eos Tower (just before Omega Sector portal)."
    ],
    "safeSpots": "Stand on block stairs. Very slow moving; easy target for Lucky Seven.",
    "notableDrops": [
      "King Block Golem Piece",
      "Scroll for Claw for ATT 10%",
      "Dark Slain"
    ],
    "starsClaws": "Dark Slain & Claw ATT 10%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=King%20Block%20Golem",
    "verifiedDrops": []
  },
  {
    "id": "chief-gray",
    "name": "Chief Gray",
    "nameHe": "Chief Gray",
    "level": 45,
    "hp": 2600,
    "mp": 90,
    "exp": 125,
    "icon": "🛸",
    "category": "31-50",
    "town": "Omega Sector",
    "locations": [
      "Kulan Field V"
    ],
    "directions": [
      "From Omega Sector: Head all the way left through Kulan Field to Kulan Field V."
    ],
    "safeSpots": "Stand on the flying saucer crash hull. Chief Gray floats on a hover chair.",
    "notableDrops": [
      "Chief Gray Signet",
      "Scroll for Gloves for ATT 60%",
      "Dark Slain"
    ],
    "starsClaws": "Dark Slain & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chief%20Gray",
    "verifiedDrops": []
  },
  {
    "id": "blue-flower-serpent",
    "name": "Blue Flower Serpent",
    "nameHe": "Blue Flower Serpent",
    "level": 45,
    "hp": 2500,
    "mp": 90,
    "exp": 120,
    "icon": "🐍",
    "category": "31-50",
    "town": "Mu Lung",
    "locations": [
      "Forest of Training I",
      "Forest of Training II"
    ],
    "directions": [
      "From Mu Lung: Snake Path -> Forest of Training I."
    ],
    "safeSpots": "Elevated stone pedestals provide safe shooting ground.",
    "notableDrops": [
      "Blue Snake Scale",
      "Scroll for Claw for ATT 60%",
      "Gold Slain"
    ],
    "starsClaws": "Gold Slain & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Blue%20Flower%20Serpent",
    "verifiedDrops": []
  },
  {
    "id": "master-chronos",
    "name": "Master Chronos",
    "nameHe": "מאסטר כרונוס (שעון מפקד אדום)",
    "level": 46,
    "hp": 2600,
    "mp": 80,
    "exp": 115,
    "icon": "⏳",
    "category": "36-50+",
    "town": "Ludibrium Clocktower",
    "locations": [
      "Ludibrium: Lost Time <2>"
    ],
    "directions": [
      "במגדל השעון של לודיבריום: רד אל Lost Time 2."
    ],
    "safeSpots": "עמוד על קורות השעון העליונות וירה Lucky Seven למטה.",
    "notableDrops": [
      "Tobi Throwing-Stars (+23 ATT)",
      "Master Cogwheel",
      "Scroll for Shoes for Jump 60%"
    ],
    "starsClaws": "Tobi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Master%20Chronos",
    "verifiedDrops": []
  },
  {
    "id": "peach-monkey",
    "name": "Peach Monkey",
    "nameHe": "Peach Monkey",
    "level": 46,
    "hp": 2700,
    "mp": 90,
    "exp": 130,
    "icon": "🐒",
    "category": "31-50",
    "town": "Mu Lung",
    "locations": [
      "Peach Farm I",
      "Peach Farm II"
    ],
    "directions": [
      "From Mu Lung: Exit left -> Forest of Training II -> enter Peach Farm I."
    ],
    "safeSpots": "Climb peach trees and snipe from fruit branches.",
    "notableDrops": [
      "Peach",
      "Scroll for Shoes for DEX 60%",
      "Dark Slain"
    ],
    "starsClaws": "Dark Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Peach%20Monkey",
    "verifiedDrops": []
  },
  {
    "id": "reinforced-iron-mutae",
    "name": "Reinforced Iron Mutae",
    "nameHe": "Reinforced Iron Mutae",
    "level": 46,
    "hp": 2650,
    "mp": 90,
    "exp": 128,
    "icon": "⚙️",
    "category": "31-50",
    "town": "Magatia",
    "locations": [
      "Lab - Area B-1 (Alcadno Lab)"
    ],
    "directions": [
      "From Magatia: Alcadno Lab -> Area B-1."
    ],
    "safeSpots": "Stand on pipe walkways. Great mob spawn.",
    "notableDrops": [
      "Reinforced Metal",
      "Scroll for Cape for DEX 60%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Reinforced%20Iron%20Mutae",
    "verifiedDrops": []
  },
  {
    "id": "mummydog",
    "name": "Mummydog",
    "nameHe": "Mummydog",
    "level": 47,
    "hp": 2850,
    "mp": 90,
    "exp": 135,
    "icon": "🐕‍🦺",
    "category": "31-50",
    "town": "Perion",
    "locations": [
      "Excavation Site: Military Camp II",
      "Excavation Site: Relic Excavation"
    ],
    "directions": [
      "From Perion: Travel through Excavation Site -> Remains II -> Military Camp I -> take right portal into Military Camp II."
    ],
    "safeSpots": "Climb the ladders and shoot from horizontal ledges. Undead monster; keep your distance to avoid poison/curse attacks.",
    "notableDrops": [
      "Mummydog Bandage",
      "Scroll for Claw for ATT 60%",
      "Gold Slain (Lv. 40 Claw)",
      "Dark Crystal Ore"
    ],
    "starsClaws": "Gold Slain & Claw 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mummydog",
    "verifiedDrops": []
  },
  {
    "id": "wraith",
    "name": "Wraith",
    "nameHe": "רוח רפאים גדולה (Wraith)",
    "level": 48,
    "hp": 2800,
    "mp": 80,
    "exp": 120,
    "icon": "👤",
    "category": "36-50+",
    "town": "Kerning City Subway",
    "locations": [
      "Kerning City Subway: Line 2 <Area 3>"
    ],
    "directions": [
      "מקרנינג סיטי: היכנס לרכבת התחתית לקו Line 2 (דורש כרטיס B1/B2). המשך עד Area 3."
    ],
    "safeSpots": "עמוד על הפלטפורמות התלויות מעל המסילה. השתמש ב-Haste כדי לדלג בין הפלטפורמות.",
    "notableDrops": [
      "Tobi Throwing-Stars (+23 ATT!)",
      "Wraith Cape",
      "Scroll for Overall for LUK 60%"
    ],
    "starsClaws": "Tobi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/43",
    "verifiedDrops": [
      {
        "name": "Emerald Earrings",
        "category": "Equips",
        "price": "18,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red China",
        "category": "Equips",
        "price": "16,666 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red China Pants",
        "category": "Equips",
        "price": "12,345 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Black Jangoon Skirt",
        "category": "Equips",
        "price": "10,111 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Moon Pants",
        "category": "Equips",
        "price": "17,999.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Red Whip",
        "category": "Weapons",
        "price": "40,000 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Black Bandana",
        "category": "Equips",
        "price": "1,234 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Maro",
        "category": "Equips",
        "price": "11,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Maro",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Sonata",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Black Stealer",
        "category": "Equips",
        "price": "18,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Jangoon Armor",
        "category": "Equips",
        "price": "15,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Moon",
        "category": "Equips",
        "price": "13,333 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Ice Queen",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Ice Queen Skirt",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Napoleon",
        "category": "Equips",
        "price": "22,222 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "jr-miner",
    "name": "Jr. Miner",
    "nameHe": "Jr. Miner",
    "level": 48,
    "hp": 3000,
    "mp": 100,
    "exp": 140,
    "icon": "⛏️",
    "category": "31-50",
    "town": "El Nath",
    "locations": [
      "Dead Mine: The Cave of Trial I"
    ],
    "directions": [
      "From El Nath: Exit right to Ice Valley -> Dead Mine -> enter The Cave of Trial I (bring Return Scroll or VIP teleport)."
    ],
    "safeSpots": "Stand on wooden mine carts and scaffolding above the lava pool.",
    "notableDrops": [
      "Miner Hat",
      "Scroll for Shoes for DEX 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Miner",
    "verifiedDrops": []
  },
  {
    "id": "hodori",
    "name": "Hodori",
    "nameHe": "Hodori",
    "level": 48,
    "hp": 3100,
    "mp": 100,
    "exp": 145,
    "icon": "🐯",
    "category": "31-50",
    "town": "Korean Folk Town",
    "locations": [
      "Tiger Forest I",
      "Tiger Forest II"
    ],
    "directions": [
      "From Korean Folk Town: Exit right portal -> Deep Mountain -> enter Tiger Forest I."
    ],
    "safeSpots": "Stand on pine tree branches and stone boulders. Hodori has a fast dash; snipe from above.",
    "notableDrops": [
      "Tiger Skin",
      "Scroll for Shoes for JUMP 60%",
      "Steel Slain"
    ],
    "starsClaws": "Steel Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Hodori",
    "verifiedDrops": []
  },
  {
    "id": "mithril-mutae",
    "name": "Mithril Mutae",
    "nameHe": "Mithril Mutae",
    "level": 48,
    "hp": 3000,
    "mp": 100,
    "exp": 140,
    "icon": "🔩",
    "category": "31-50",
    "town": "Magatia",
    "locations": [
      "Lab - Area A-3 (Alcadno Lab)"
    ],
    "directions": [
      "From Magatia: Alcadno Lab -> Area A-3."
    ],
    "safeSpots": "Stand on steel conduits. High defense against physical, but Lucky Seven ignores defense.",
    "notableDrops": [
      "Mithril Shard",
      "Scroll for Overall Armor for DEX 60%",
      "Mithril Gigantic"
    ],
    "starsClaws": "Mithril Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mithril%20Mutae",
    "verifiedDrops": []
  },
  {
    "id": "drake",
    "name": "Drake",
    "nameHe": "דרייק (דרקון קלאסי)",
    "level": 50,
    "hp": 3200,
    "mp": 100,
    "exp": 155,
    "icon": "🐉",
    "category": "36-50+",
    "town": "Sleepywood",
    "locations": [
      "Drake Cave: Drake's Meal Table",
      "Drake Cave: The Cave of Drakes"
    ],
    "directions": [
      "מסליפיווד (Sleepywood): המשך עמוק בתוך מערות הדראייק עד Drake's Meal Table."
    ],
    "safeSpots": "עמוד על הפלטפורמות התלויות מעל מרכז המפה. לעולם אל תיפול למרכז החדר ללא Dark Sight!",
    "notableDrops": [
      "Steely Throwing-Stars (+20 Attack - כוכבי ההטלה המבוקשים ביותר למתנקשים!)",
      "Dark Slain Claw",
      "Drake Blood"
    ],
    "starsClaws": "Steely Throwing-Stars (+20 ATT)",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/45",
    "verifiedDrops": [
      {
        "name": "Red Lumati",
        "category": "Equips",
        "price": "25,277.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Drake's Blood",
        "category": "Use",
        "price": "681 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Dragon Skin",
        "category": "Etc",
        "price": "200 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Green Jester",
        "category": "Equips",
        "price": "7,888.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Distinction",
        "category": "Equips",
        "price": "9,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Distinction",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Pilfer",
        "category": "Equips",
        "price": "48,944 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Sapphire Earrings",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Orange Lolica Armor",
        "category": "Equips",
        "price": "1,200 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Legolia",
        "category": "Equips",
        "price": "15,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Lumati",
        "category": "Equips",
        "price": "39,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Anakarune",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Anakarune",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Legolia Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Magic Shoes",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Triangular Shield",
        "category": "Equips",
        "price": "7,777 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Warrior Potion",
        "category": "Use",
        "price": "327.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Drake's Meat",
        "category": "Use",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Kumbi Throwing Stars",
        "category": "Stars",
        "price": "365,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "jr-yeti",
    "name": "Jr. Yeti",
    "nameHe": "יטי צעיר (Jr. Yeti)",
    "level": 50,
    "hp": 3700,
    "mp": 90,
    "exp": 145,
    "icon": "❄️",
    "category": "36-50+",
    "town": "El Nath",
    "locations": [
      "El Nath: Ice Valley I",
      "El Nath: Cold Field I"
    ],
    "directions": [
      "מאל נאת' (El Nath): צא מהפורטל הימני של העיר אל Cold Field I והמשך ל-Ice Valley I."
    ],
    "safeSpots": "השתמש בסלעי הקרח המוגבהים. שים לב לנעול נעלי שלג (Snowshoes) כדי לא להחליק.",
    "notableDrops": [
      "Jr. Yeti Skin",
      "Scroll for Claw for ATT 60%",
      "Bronze Igrit"
    ],
    "starsClaws": "Bronze Igrit (Lv 40)",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Yeti",
    "verifiedDrops": []
  },
  {
    "id": "straw-dummy",
    "name": "Straw Dummy",
    "nameHe": "בובת קש (Straw Dummy)",
    "level": 50,
    "hp": 3400,
    "mp": 90,
    "exp": 140,
    "icon": "🌾",
    "category": "36-50+",
    "town": "Mu Lung",
    "locations": [
      "Mu Lung: Practice Field: Beginner"
    ],
    "directions": [
      "ממו לונג (Mu Lung): צא מהפורטל השמאלי של העיר לשדות האימונים Practice Field."
    ],
    "safeSpots": "מפה שטוחה לחלוטין ומושלמת לאימון רצוף של אסאסינים עם Haste ו-Lucky Seven!",
    "notableDrops": [
      "Straw Bundle",
      "Scroll for Cape for DEX 60%",
      "Kumbi Throwing-Stars"
    ],
    "starsClaws": "Kumbi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Straw%20Dummy",
    "verifiedDrops": []
  },
  {
    "id": "faust",
    "name": "Faust",
    "nameHe": "Faust",
    "level": 50,
    "hp": 10500,
    "mp": 250,
    "exp": 450,
    "icon": "🐒",
    "category": "Boss",
    "town": "Ellinia",
    "locations": [
      "Forest of Evil II (יער הרשע 2 באליניה)"
    ],
    "directions": [
      "From Ellinia: Go to North Forest Green -> Tree Dungeon -> Monkey Forest I -> Monkey Forest II -> hidden portal in tree top leads to Forest of Evil II."
    ],
    "safeSpots": "Stand on the tree branches high above the ground. Faust summons Zombie Lupins and throws banana bombs, but cannot reach upper platforms.",
    "notableDrops": [
      "Zombie Lupin Doll",
      "Scroll for Overall Armor for INT 60%",
      "Scroll for Claw for ATT 60%",
      "Mithril Gigantic"
    ],
    "starsClaws": "Claw ATT 60%",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: Monkey Forest II (יער הקופים 2 באליניה)",
      "targetMap": "Forest of Evil II (יער הרשע 2 - מאורת פאוסט)",
      "landmark": "בית עץ עגול של הקופים בראש העץ עם פתח עגול חלול וענפי עלים",
      "landmarkIcon": "🐒",
      "coordinates": "בשיא הגובה של המפה (הענף העליון ביותר במרכז העץ הענקי)",
      "howToEnter": "טפס על חבלי העץ עד לראש המפה, עמוד מול פתח בית העץ ולחץ [↑ חץ למעלה].",
      "warningTip": "היזהר מהקופים הזורקים בננות בדרך למעלה; טפס עם Haste והפעל Dark Sight במידת הצורך.",
      "miniMap": {
        "theme": "ellinia",
        "themeName": "יער העצים הענקיים באליניה (Ellinia Great Tree)",
        "platforms": [
          {
            "x": 35,
            "y": 18,
            "w": 30,
            "h": 6,
            "label": "ענף עליון (בית העץ של פאוסט)"
          },
          {
            "x": 10,
            "y": 36,
            "w": 35,
            "h": 6,
            "label": "ענף שמאל"
          },
          {
            "x": 55,
            "y": 45,
            "w": 35,
            "h": 6,
            "label": "ענף ימין"
          },
          {
            "x": 25,
            "y": 66,
            "w": 50,
            "h": 6,
            "label": "ענף ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "תחתית היער"
          }
        ],
        "ropes": [
          {
            "x": 50,
            "y1": 18,
            "y2": 36
          },
          {
            "x": 25,
            "y1": 36,
            "y2": 66
          },
          {
            "x": 70,
            "y1": 45,
            "y2": 66
          },
          {
            "x": 50,
            "y1": 66,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 14,
          "icon": "🚪",
          "name": "פתח בית העץ (Forest of Evil II)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מ-Monkey Forest I"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Faust",
    "verifiedDrops": []
  },
  {
    "id": "blin",
    "name": "Blin",
    "nameHe": "Blin",
    "level": 50,
    "hp": 3400,
    "mp": 100,
    "exp": 155,
    "icon": "👺",
    "category": "31-50",
    "town": "Korean Folk Town",
    "locations": [
      "Goblin House"
    ],
    "directions": [
      "From Korean Folk Town: Exit right -> Deep Mountain -> hidden portal in the abandoned shack."
    ],
    "safeSpots": "Stand on the straw roof of the goblin hut.",
    "notableDrops": [
      "Goblin Cap",
      "Scroll for Claw for ATT 60%",
      "Gold Slain"
    ],
    "starsClaws": "Gold Slain & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Blin",
    "verifiedDrops": []
  },
  {
    "id": "sparker",
    "name": "Sparker",
    "nameHe": "Sparker",
    "level": 50,
    "hp": 3400,
    "mp": 100,
    "exp": 155,
    "icon": "⚡",
    "category": "31-50",
    "town": "Aqua Road",
    "locations": [
      "Deep Sea Gorge I"
    ],
    "directions": [
      "From Aquarium: Travel deep east into Deep Sea Gorge I."
    ],
    "safeSpots": "Swim above the trench floor. Sparker emits an electrical shockwave around itself.",
    "notableDrops": [
      "Sparker Fin",
      "Scroll for Cape for DEX 60%",
      "Dark Gigantic"
    ],
    "starsClaws": "Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sparker",
    "verifiedDrops": []
  },
  {
    "id": "bellflower-root",
    "name": "Bellflower Root",
    "nameHe": "Bellflower Root",
    "level": 51,
    "hp": 3500,
    "mp": 100,
    "exp": 158,
    "icon": "🌱",
    "category": "51-70",
    "town": "Herb Town",
    "locations": [
      "Herb Town: 10-Year-Old Herb Garden"
    ],
    "directions": [
      "From Herb Town: Exit left portal into 10-Year-Old Herb Garden."
    ],
    "safeSpots": "Stand on the wooden garden fences. Bellflower roots are rooted or hop slowly.",
    "notableDrops": [
      "100-Year-Old Bellflower",
      "Scroll for Overall Armor for DEX 60%",
      "Mithril Gigantic"
    ],
    "starsClaws": "Mithril Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Bellflower%20Root",
    "verifiedDrops": []
  },
  {
    "id": "croco",
    "name": "Croco",
    "nameHe": "קרוקו (תנין ענק)",
    "level": 52,
    "hp": 3800,
    "mp": 80,
    "exp": 160,
    "icon": "🦎",
    "category": "36-50+",
    "town": "Kerning City",
    "locations": [
      "The Swamp: Deep Swamp",
      "Swamp Region: Dangerous Croco"
    ],
    "directions": [
      "מקרנינג סיטי (Kerning City): עבור דרך כל ביצות ה-Swamp of Despair עד למפה העמוקה ביותר (Deep Swamp)."
    ],
    "safeSpots": "עמוד על הגזעים הבולטים מהמים. קרוקו איטי אך מכה חזק מאוד.",
    "notableDrops": [
      "Tobis Throwing-Stars (+19 Attack - כוכבי הטלה מעולים!)",
      "Croco Skin",
      "Blood Slain Claw"
    ],
    "starsClaws": "Tobis Throwing-Stars & Blood Slain",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/46",
    "verifiedDrops": [
      {
        "name": "Jacker",
        "category": "Weapons",
        "price": "29,166.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Bronze Ore",
        "category": "Etc",
        "price": "89 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Opal Ore",
        "category": "Etc",
        "price": "122 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Dark Piette",
        "category": "Equips",
        "price": "15,277.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green China",
        "category": "Equips",
        "price": "57,777 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Orange Calas",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Calas",
        "category": "Equips",
        "price": "33,333 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Calas",
        "category": "Equips",
        "price": "49,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Moonlight",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Moonlight",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Moonlight",
        "category": "Equips",
        "price": "19,443.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Piette Pants",
        "category": "Equips",
        "price": "19,374.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green China Pants",
        "category": "Equips",
        "price": "50,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Pierre Shoes",
        "category": "Equips",
        "price": "33,333 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Traus",
        "category": "Weapons",
        "price": "71,666.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Knuckle Mace",
        "category": "Weapons",
        "price": "149,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Crescent Polearm",
        "category": "Weapons",
        "price": "40,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "luster-pixie",
    "name": "Luster Pixie",
    "nameHe": "לאסטר פיקסי (פיית שמש צהובה חזקה)",
    "level": 52,
    "hp": 3800,
    "mp": 100,
    "exp": 155,
    "icon": "☀️",
    "category": "51-70+",
    "town": "Orbis",
    "locations": [
      "Cloud Park V-VI"
    ],
    "directions": [
      "מאורביס: המשך לסוף פארק העננים אל Cloud Park V ו-VI."
    ],
    "safeSpots": "פלטפורמות ענני השמש הגבוהות.",
    "notableDrops": [
      "Luster Pixie's Sun Piece",
      "Scroll for Claw for ATT 60%",
      "Tobi Throwing-Stars"
    ],
    "starsClaws": "Tobi Stars & Claw Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Luster%20Pixie",
    "verifiedDrops": []
  },
  {
    "id": "freezer",
    "name": "Freezer",
    "nameHe": "Freezer",
    "level": 52,
    "hp": 3700,
    "mp": 110,
    "exp": 165,
    "icon": "🧊",
    "category": "51-70",
    "town": "Aqua Road",
    "locations": [
      "Deep Sea Gorge II"
    ],
    "directions": [
      "From Aquarium: Deep Sea Gorge I -> Deep Sea Gorge II."
    ],
    "safeSpots": "Float on upper thermal vents. Cold based attack; easily dodged by vertical swimming.",
    "notableDrops": [
      "Freezer Fin",
      "Scroll for Shoes for JUMP 60%",
      "Blood Gigantic"
    ],
    "starsClaws": "Blood Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Freezer",
    "verifiedDrops": []
  },
  {
    "id": "reinforced-mithril-mutae",
    "name": "Reinforced Mithril Mutae",
    "nameHe": "Reinforced Mithril Mutae",
    "level": 52,
    "hp": 3700,
    "mp": 110,
    "exp": 165,
    "icon": "🔩",
    "category": "51-70",
    "town": "Magatia",
    "locations": [
      "Lab - Area A-1 (Alcadno Lab)"
    ],
    "directions": [
      "From Magatia: Alcadno Lab -> Area A-1."
    ],
    "safeSpots": "Stand on laboratory catwalks.",
    "notableDrops": [
      "Reinforced Mithril Plate",
      "Scroll for Shoes for DEX 60%",
      "Dark Gigantic"
    ],
    "starsClaws": "Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Reinforced%20Mithril%20Mutae",
    "verifiedDrops": []
  },
  {
    "id": "cellion",
    "name": "Cellion",
    "nameHe": "סליון (חתול אש אדום בוגר)",
    "level": 53,
    "hp": 4200,
    "mp": 100,
    "exp": 165,
    "icon": "🦁",
    "category": "51-70+",
    "town": "Orbis",
    "locations": [
      "Garden of Red II"
    ],
    "directions": [
      "מאורביס: עבור ל-Garden of Red II בעומק גני אורביס."
    ],
    "safeSpots": "עמוד על הפלטפורמות העליונות.",
    "notableDrops": [
      "Cellion Tail",
      "Scroll for Claw for ATT 60%",
      "Kumbi Throwing-Stars"
    ],
    "starsClaws": "Kumbi Stars & Claw Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Cellion",
    "verifiedDrops": []
  },
  {
    "id": "lioner",
    "name": "Lioner",
    "nameHe": "ליאונר (חתול ברק צהוב בוגר)",
    "level": 53,
    "hp": 4200,
    "mp": 100,
    "exp": 165,
    "icon": "⚡",
    "category": "51-70+",
    "town": "Orbis",
    "locations": [
      "Garden of Yellow II"
    ],
    "directions": [
      "מאורביס: עבור ל-Garden of Yellow II בעומק גני אורביס."
    ],
    "safeSpots": "פלטפורמות גבוהות מחוץ לטווח כדורי הברק.",
    "notableDrops": [
      "Lioner Tail",
      "Scroll for Overall for LUK 60%",
      "Kumbi Throwing-Stars"
    ],
    "starsClaws": "Kumbi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lioner",
    "verifiedDrops": []
  },
  {
    "id": "grupin",
    "name": "Grupin",
    "nameHe": "גרופין (חתול קרח כחול בוגר)",
    "level": 53,
    "hp": 4200,
    "mp": 100,
    "exp": 165,
    "icon": "❄️",
    "category": "51-70+",
    "town": "Orbis",
    "locations": [
      "Garden of Blue II"
    ],
    "directions": [
      "מאורביס: עבור ל-Garden of Blue II בעומק גני אורביס."
    ],
    "safeSpots": "פלטפורמות גבוהות מחוץ לטווח כדורי הקרח.",
    "notableDrops": [
      "Grupin Tail",
      "Scroll for Cape for LUK 60%",
      "Kumbi Throwing-Stars"
    ],
    "starsClaws": "Kumbi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Grupin",
    "verifiedDrops": []
  },
  {
    "id": "wooden-dummy",
    "name": "Wooden Dummy",
    "nameHe": "בובת עץ (Wooden Dummy)",
    "level": 53,
    "hp": 4100,
    "mp": 100,
    "exp": 160,
    "icon": "🪵",
    "category": "51-70+",
    "town": "Mu Lung",
    "locations": [
      "Mu Lung: Practice Field: Advanced"
    ],
    "directions": [
      "ממו לונג: עבור משדה האימונים למתחילים לשדה המתקדם."
    ],
    "safeSpots": "מפה ישרה עם ספאון פנומנלי.",
    "notableDrops": [
      "Wooden Board",
      "Scroll for Claw for ATT 60%"
    ],
    "starsClaws": "Claw Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Wooden%20Dummy",
    "verifiedDrops": []
  },
  {
    "id": "dark-jr-yeti",
    "name": "Dark Jr. Yeti",
    "nameHe": "Dark Jr. Yeti",
    "level": 53,
    "hp": 3800,
    "mp": 90,
    "exp": 160,
    "icon": "❄️",
    "category": "51-70",
    "town": "El Nath",
    "locations": [
      "Ice Valley II",
      "Sharp Cliff I"
    ],
    "directions": [
      "From El Nath: Exit right into Cold Field I -> Ice Valley I -> Ice Valley II."
    ],
    "safeSpots": "Stand on ice platforms. Be ready when it transforms into Dark Yeti upon low HP.",
    "notableDrops": [
      "Dark Jr. Yeti Skin",
      "Scroll for Overall Armor for DEX 60%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Jr.%20Yeti",
    "verifiedDrops": []
  },
  {
    "id": "hogul",
    "name": "Hogul",
    "nameHe": "Hogul",
    "level": 53,
    "hp": 3900,
    "mp": 110,
    "exp": 170,
    "icon": "🐯",
    "category": "51-70",
    "town": "Korean Folk Town",
    "locations": [
      "Tiger Forest II",
      "Tiger Ridge"
    ],
    "directions": [
      "From Korean Folk Town: Walk through Tiger Forest I into Tiger Forest II."
    ],
    "safeSpots": "Elevated rock formations allow complete safety against their charging tackle.",
    "notableDrops": [
      "Hogul Claw",
      "Scroll for Overall Armor for DEX 60%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Hogul",
    "verifiedDrops": []
  },
  {
    "id": "the-book-ghost",
    "name": "The Book Ghost",
    "nameHe": "The Book Ghost",
    "level": 53,
    "hp": 3800,
    "mp": 100,
    "exp": 165,
    "icon": "📖",
    "category": "51-70",
    "town": "Mu Lung",
    "locations": [
      "Goblin Forest",
      "Forest of Wandering"
    ],
    "directions": [
      "From Mu Lung: Peach Farm III -> enter portal to Goblin Forest."
    ],
    "safeSpots": "Stand on bamboo scaffolding. Book Ghost floats slowly and casts paper charm curses.",
    "notableDrops": [
      "Old Book Page",
      "Scroll for Cape for DEX 60%",
      "Bronze Gigantic"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=The%20Book%20Ghost",
    "verifiedDrops": []
  },
  {
    "id": "sr-bellflower-root",
    "name": "Sr. Bellflower Root",
    "nameHe": "Sr. Bellflower Root",
    "level": 53,
    "hp": 3900,
    "mp": 110,
    "exp": 170,
    "icon": "🌱",
    "category": "51-70",
    "town": "Herb Town",
    "locations": [
      "Herb Town: 50-Year-Old Herb Garden"
    ],
    "directions": [
      "From Herb Town: 10-Year-Old Herb Garden -> enter portal to 50-Year-Old Herb Garden."
    ],
    "safeSpots": "Stand on stone flower pots and fences.",
    "notableDrops": [
      "1000-Year-Old Bellflower",
      "Scroll for Shoes for JUMP 60%",
      "Dark Gigantic"
    ],
    "starsClaws": "Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sr.%20Bellflower%20Root",
    "verifiedDrops": []
  },
  {
    "id": "mt-09",
    "name": "MT-09",
    "nameHe": "MT-09",
    "level": 54,
    "hp": 18000,
    "mp": 200,
    "exp": 550,
    "icon": "🤖",
    "category": "Boss",
    "town": "Omega Sector",
    "locations": [
      "Kulan Field IV (Secret Area)"
    ],
    "directions": [
      "From Omega Sector: Kulan Field IV -> hidden portal inside the crashed spaceship cockpit."
    ],
    "safeSpots": "Stand on the spaceship wing. MT-09 fires missiles in straight trajectories that miss higher elevations.",
    "notableDrops": [
      "MT-09 Fuel",
      "Scroll for Claw for ATT 60%",
      "Bronze Gigantic",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Claw ATT 60%",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Omega Sector: Kulan Field IV (שדה קולאן 4 באומגה סקטור)",
      "targetMap": "Hidden Street: Crashed UFO (חללית החייזרים שהתרסקה)",
      "landmark": "תא הטייס השבור והמפוחם של חללית החייזרים שהתרסקה באדמה",
      "landmarkIcon": "🛸",
      "coordinates": "במרכז גוף החללית הענקית שהתרסקה",
      "howToEnter": "עמוד בפתח תא הטייס השבור במרכז החללית ולחץ [↑ חץ למעלה].",
      "warningTip": "בפנים מופיע הבוס הרובוטי MT-09 שמפיל סקרולים וציוד יקר.",
      "miniMap": {
        "theme": "omega",
        "themeName": "שדות החייזרים באומגה סקטור (Kulan Field)",
        "platforms": [
          {
            "x": 25,
            "y": 40,
            "w": 50,
            "h": 6,
            "label": "כנף החללית העליונה"
          },
          {
            "x": 10,
            "y": 65,
            "w": 35,
            "h": 6,
            "label": "סלע מכתש שמאל"
          },
          {
            "x": 55,
            "y": 65,
            "w": 35,
            "h": 6,
            "label": "סלע מכתש ימין"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המכתש"
          }
        ],
        "ropes": [
          {
            "x": 40,
            "y1": 40,
            "y2": 88
          },
          {
            "x": 60,
            "y1": 40,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 36,
          "icon": "🛸",
          "name": "תא טייס שבור (Crashed UFO)"
        },
        "spawnSpot": {
          "x": 5,
          "y": 84,
          "name": "כניסה מ-Kulan Field III"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=MT-09",
    "verifiedDrops": []
  },
  {
    "id": "roid",
    "name": "Roid",
    "nameHe": "Roid",
    "level": 54,
    "hp": 4100,
    "mp": 110,
    "exp": 178,
    "icon": "🤖",
    "category": "51-70",
    "town": "Magatia",
    "locations": [
      "Lab - Area C-1 (Alcadno Research Lab)"
    ],
    "directions": [
      "From Magatia: Enter Alcadno Lab -> descend deep into Area C-1."
    ],
    "safeSpots": "Area C-1 has long flat platforms with high density. Assassins can jump-shoot along the middle and bottom lanes without ever getting hit.",
    "notableDrops": [
      "Roid Heart",
      "Scroll for Claw for ATT 60%",
      "Dark Gigantic (Lv. 50 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Roid",
    "verifiedDrops": []
  },
  {
    "id": "stone-golem",
    "name": "Stone Golem",
    "nameHe": "גולם אבן (Stone Golem)",
    "level": 55,
    "hp": 4000,
    "mp": 100,
    "exp": 170,
    "icon": "🗿",
    "category": "51-70+",
    "town": "Henesys / Golem Temple",
    "locations": [
      "Golem Temple I",
      "Golem Temple II",
      "Golem Temple III"
    ],
    "directions": [
      "מהנסיס (Henesys): צא מהפורטל המזרחי של שטח הציד (HHG) לכיוון עמק הגולמים.",
      "היכנס דרך פורטל הסלע ל-Golem Temple I-III."
    ],
    "safeSpots": "עמוד על מדפי המקדש העתיק. הגולמים הולכים לאט ביותר - מתנקש עם Keen Eyes ו-Haste מחסל אותם ממרחק עצום ללא פגיעה.",
    "notableDrops": [
      "Tobi Throwing-Stars (+23 ATT)",
      "Stone Golem Rubble",
      "Scroll for Gloves for ATT 60%"
    ],
    "starsClaws": "Tobi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/48",
    "verifiedDrops": [
      {
        "name": "Tobi Throwing Stars",
        "category": "Stars",
        "price": "1,149,999.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Dark Pole-Feather Hat",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Marine Shadow",
        "category": "Equips",
        "price": "18,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Shadow",
        "category": "Equips",
        "price": "90,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Amoria Top",
        "category": "Equips",
        "price": "11,111 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Amoria Top",
        "category": "Equips",
        "price": "13,166.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Black Amoria Top",
        "category": "Equips",
        "price": "12,499 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Legolia",
        "category": "Equips",
        "price": "12,222 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Shouldermail",
        "category": "Equips",
        "price": "19,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Crusader Chainmail",
        "category": "Equips",
        "price": "60,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blood Chaos Robe",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Chaos Robe",
        "category": "Equips",
        "price": "14,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Legolia Pants",
        "category": "Equips",
        "price": "12,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Shouldermail Pants",
        "category": "Equips",
        "price": "22,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Cross Shield",
        "category": "Equips",
        "price": "9,900 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Wizard Staff",
        "category": "Weapons",
        "price": "7,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bow Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "140,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Crossbow Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "85,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Mokbi Throwing Stars",
        "category": "Stars",
        "price": "145,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Kumbi Throwing Stars",
        "category": "Stars",
        "price": "365,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "hector",
    "name": "Hector",
    "nameHe": "הקטור (זאב שלג חום)",
    "level": 55,
    "hp": 4600,
    "mp": 100,
    "exp": 175,
    "icon": "🐺",
    "category": "51-70+",
    "town": "El Nath",
    "locations": [
      "El Nath: Cold Field II",
      "El Nath: Ice Valley II"
    ],
    "directions": [
      "מאל נאת': המשך ימינה דרך עמק הקרח אל Cold Field II."
    ],
    "safeSpots": "הפלטפורמות השטוחות מעל הזאבים. הקטורים זזים מהר, לכן Haste ו-Keen Eyes חיוניים לשמירת מרחק.",
    "notableDrops": [
      "Steely Throwing-Stars (+25 ATT)",
      "Hector Tail",
      "Dark Scroll for Claw for ATT 70%"
    ],
    "starsClaws": "Steely Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Hector",
    "verifiedDrops": []
  },
  {
    "id": "king-clang",
    "name": "King Clang",
    "nameHe": "King Clang",
    "level": 55,
    "hp": 35000,
    "mp": 300,
    "exp": 900,
    "icon": "🦀",
    "category": "Boss",
    "town": "Lith Harbor / Florina Beach",
    "locations": [
      "Florina Beach: Clang Beach"
    ],
    "directions": [
      "From Lith Harbor: Talk to Pison -> Florina Beach -> head all the way to the right across Warm Sand and Beach Hill until Clang Beach."
    ],
    "safeSpots": "Climb on top of the big seaside rocks. King Clang has an earthquake shockwave attack; jumping while throwing Lucky Seven avoids damage.",
    "notableDrops": [
      "King Clang Shell",
      "Scroll for Cape for DEX 60%",
      "Scroll for Gloves for ATT 10%",
      "Blood Gigantic (Lv. 50 Claw)"
    ],
    "starsClaws": "Blood Gigantic & Gloves ATT 10%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=King%20Clang",
    "verifiedDrops": []
  },
  {
    "id": "alishar",
    "name": "Alishar (בוס LPQ)",
    "nameHe": "אלישר (הבוס של ה-Ludibrium Party Quest)",
    "level": 56,
    "hp": 125000,
    "mp": 2500,
    "exp": 18000,
    "icon": "👁️",
    "category": "bosses",
    "town": "Ludibrium (LPQ)",
    "locations": [
      "Eos Tower 101st Floor: Alishar's Chamber"
    ],
    "directions": [
      "מלודיבריום: עלה לקומה 101 במגדל אאוס והצטרף לפארטי של 6 שחקנים ברמות 35-51.",
      "השלם את 8 השלבים של LPQ והיכנס לחדר הבוס הסופי."
    ],
    "safeSpots": "עמוד על הפלטפורמות בצדדים. מתנקש הוא ה-DPS הראשי של הפארטי מול אלישר בזכות Critical Throw ו-Haste!",
    "notableDrops": [
      "Ludibrium PQ Box",
      "Scroll for Gloves for ATT 10%",
      "Broken Glasses (משקפי LPQ)"
    ],
    "starsClaws": "LPQ Rewards",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Alishar%20(%D7%91%D7%95%D7%A1%20LPQ)",
    "verifiedDrops": []
  },
  {
    "id": "jr-lucida",
    "name": "Jr. Lucida",
    "nameHe": "Jr. Lucida",
    "level": 56,
    "hp": 4500,
    "mp": 110,
    "exp": 185,
    "icon": "🐈‍⬛",
    "category": "51-70",
    "town": "Orbis",
    "locations": [
      "Cloud Park V",
      "Cloud Park VI"
    ],
    "directions": [
      "From Orbis: Exit right to Cloud Park I -> traverse right through Cloud Park II, III, IV, V into VI."
    ],
    "safeSpots": "Stand on cloud platforms above the tree branches. Lucida jumps high, so keep max distance.",
    "notableDrops": [
      "Jr. Lucida Tail",
      "Scroll for Cape for DEX 60%",
      "Bronze Gigantic",
      "Gold Slain"
    ],
    "starsClaws": "Bronze Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Lucida",
    "verifiedDrops": []
  },
  {
    "id": "samiho",
    "name": "Samiho",
    "nameHe": "Samiho",
    "level": 56,
    "hp": 4600,
    "mp": 120,
    "exp": 190,
    "icon": "🦊",
    "category": "51-70",
    "town": "Korean Folk Town",
    "locations": [
      "Fox Ridge"
    ],
    "directions": [
      "From Korean Folk Town: Exit right through Deep Mountain -> Tiger Forest II -> enter portal to Fox Ridge."
    ],
    "safeSpots": "Stand on wooden pagodas. Samiho has high magic evasion, but Lucky Seven always hits accurately.",
    "notableDrops": [
      "Three-Tailed Fox Tail",
      "Scroll for Cape for DEX 60%",
      "Mithril Gigantic"
    ],
    "starsClaws": "Mithril Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Samiho",
    "verifiedDrops": []
  },
  {
    "id": "coolie-zombie",
    "name": "Coolie Zombie",
    "nameHe": "קולי זומבי (זומבי כורה - מפת האימונים האגדית של מייפל!)",
    "level": 57,
    "hp": 4500,
    "mp": 100,
    "exp": 190,
    "icon": "🧟",
    "category": "51-70+",
    "town": "El Nath: Dead Mine",
    "locations": [
      "Dead Mine: Forest of Dead Trees I-IV (יער העצים המתים באל נאת')"
    ],
    "directions": [
      "מאל נאת' (El Nath): צא מזרחה, חצה את הצוקים החדים (Sharp Cliff) והיכנס לתוך מכרה המוות (Dead Mine).",
      "המשך למפות Forest of Dead Trees I-IV."
    ],
    "safeSpots": "עמוד על גבי שורשי העצים המתים והגשרים הרעועים. זוהי מפת האימונים הפופולרית ביותר בהיסטוריה של מייפל סטורי לרמות 50-70! זומבים מתים במהירות ל-Lucky Seven ו-Critical Throw.",
    "notableDrops": [
      "Zombie's Gold Tooth (שן זהב לקווסט זאקום Zakum Quest!)",
      "Dark Scarab",
      "Scroll for Gloves for ATT 60%"
    ],
    "starsClaws": "Gold Tooth & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Coolie%20Zombie",
    "verifiedDrops": []
  },
  {
    "id": "minor-zombie",
    "name": "Minor Zombie",
    "nameHe": "מיינור זומבי (זומבי מכרה נמוך)",
    "level": 57,
    "hp": 4500,
    "mp": 100,
    "exp": 190,
    "icon": "🧟",
    "category": "51-70+",
    "town": "El Nath: Dead Mine",
    "locations": [
      "Dead Mine: The Cave of Dead Mine"
    ],
    "directions": [
      "במכרה המוות באל נאת': במערות הכורים הסמוכות."
    ],
    "safeSpots": "קורות עץ וסולמות.",
    "notableDrops": [
      "Zombie's Lost Tooth",
      "Scroll for Overall for LUK 60%",
      "Kumbi Throwing-Stars"
    ],
    "starsClaws": "Kumbi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Minor%20Zombie",
    "verifiedDrops": []
  },
  {
    "id": "skeleton-soldier",
    "name": "Skeleton Soldier",
    "nameHe": "Skeleton Soldier",
    "level": 57,
    "hp": 4800,
    "mp": 120,
    "exp": 195,
    "icon": "⚔️",
    "category": "51-70",
    "town": "Perion",
    "locations": [
      "Excavation Site: Relic Excavation III",
      "Excavation Site: Camp 3"
    ],
    "directions": [
      "From Perion: Go right into Excavation Site -> Military Camp II -> enter the deep dig tunnels into Relic Excavation III."
    ],
    "safeSpots": "Stay on the wooden construction beams hanging over the excavation pit. Great platform layout for Assassins.",
    "notableDrops": [
      "Rib Bone",
      "Scroll for Gloves for ATT 60%",
      "Bronze Gigantic (Lv. 50 Claw)",
      "Tobirou Throwing-Stars"
    ],
    "starsClaws": "Tobirou & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Skeleton%20Soldier",
    "verifiedDrops": []
  },
  {
    "id": "miner-zombie",
    "name": "Miner Zombie",
    "nameHe": "Miner Zombie",
    "level": 57,
    "hp": 5000,
    "mp": 130,
    "exp": 200,
    "icon": "🧟‍♂️",
    "category": "51-70",
    "town": "El Nath",
    "locations": [
      "Dead Mine: The Cave of Trial II"
    ],
    "directions": [
      "From El Nath: Travel through Dead Mine into The Cave of Trial II."
    ],
    "safeSpots": "Use mine railings to stand above the walking path. Undead monster; vulnerable to holy and lucky seven.",
    "notableDrops": [
      "Gold Tooth (שן זהב מבוקשת מאוד לקווסט זאקום!)",
      "Scroll for Cape for DEX 60%",
      "Blood Slain"
    ],
    "starsClaws": "Gold Tooth & Blood Slain",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Miner%20Zombie",
    "verifiedDrops": []
  },
  {
    "id": "dark-stone-golem",
    "name": "Dark Stone Golem",
    "nameHe": "גולם אבן אפל (Dark Stone Golem)",
    "level": 58,
    "hp": 4800,
    "mp": 110,
    "exp": 200,
    "icon": "🖤",
    "category": "51-70+",
    "town": "Henesys / Golem Temple",
    "locations": [
      "Golem Temple IV",
      "Sleepywood Deep Ant Tunnel"
    ],
    "directions": [
      "ב-Golem Temple: עבור לחדר הפנימי ביותר Golem Temple IV.",
      "חלופה: במעמקי Ant Tunnel בסליפיווד."
    ],
    "safeSpots": "עמוד על משטחי האבן העליונים. גולם זה מפיל שלל מעולה אך פוגע חזק במגע - אל תתקרב אליו.",
    "notableDrops": [
      "Tobi Throwing-Stars (+23 ATT)",
      "Steely Throwing-Stars (+25 ATT)",
      "Dark Stone Golem Rubble",
      "Scroll for Claw for ATT 10%"
    ],
    "starsClaws": "Tobi & Steely Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/49",
    "verifiedDrops": [
      {
        "name": "Umber Mantis",
        "category": "Equips",
        "price": null,
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 4,
        "source": "reported"
      },
      {
        "name": "Tobi Throwing Stars",
        "category": "Stars",
        "price": "1,149,999.5 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Black Crystal Ore",
        "category": "Etc",
        "price": "2,500 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Great Brown Helmet",
        "category": "Equips",
        "price": "8,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Legolier",
        "category": "Equips",
        "price": "10,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Ice Queen",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Starlight",
        "category": "Equips",
        "price": "23,332.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Green Starlight",
        "category": "Equips",
        "price": "24,166 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Starlight",
        "category": "Equips",
        "price": "20,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Tai",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Tai",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Sapphire Fitted Mail",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Emerald Fitted Mail",
        "category": "Equips",
        "price": "14,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Legolier Pants",
        "category": "Equips",
        "price": "18,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Ice Queen Skirt",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Battle Grieves",
        "category": "Equips",
        "price": "6,250 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Zard",
        "category": "Weapons",
        "price": "85,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Viper",
        "category": "Weapons",
        "price": "16,333 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Two-handed Sword Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "79,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Two-handed Axe Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "65,000 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "white-fang",
    "name": "White Fang",
    "nameHe": "וואייט פאנג (זאב שלג לבן)",
    "level": 58,
    "hp": 5200,
    "mp": 110,
    "exp": 205,
    "icon": "🐕",
    "category": "51-70+",
    "town": "El Nath",
    "locations": [
      "El Nath: Cold Field III",
      "El Nath: Ice Valley III"
    ],
    "directions": [
      "מאל נאת': המשך מזרחה מעבר ל-Cold Field II אל Cold Field III."
    ],
    "safeSpots": "עמודי הקרח הגבוהים. לזאב הלבן יש התקפת נשיכת קרח קטלנית מקרוב.",
    "notableDrops": [
      "White Fang Tail",
      "Scroll for Cape for LUK 60%",
      "Kandjar"
    ],
    "starsClaws": "Scrolls & Claws",
    "meowDbUrl": "https://meowdb.com/msclassic?search=White%20Fang",
    "verifiedDrops": []
  },
  {
    "id": "soul-teddy",
    "name": "Soul Teddy",
    "nameHe": "סול טדי (דובי נשמה אפל)",
    "level": 58,
    "hp": 4900,
    "mp": 110,
    "exp": 195,
    "icon": "🧸",
    "category": "51-70+",
    "town": "Ludibrium Deep Clocktower",
    "locations": [
      "Ludibrium: Forgotten Path of Time <1>"
    ],
    "directions": [
      "במעמקי מגדל השעון (Deep Clocktower): רד לשביל הזמן הנשכח Forgotten Path of Time 1."
    ],
    "safeSpots": "שרשראות ופלטפורמות מתכת תלויות באוויר.",
    "notableDrops": [
      "Soul Teddy Yellow Ribbon",
      "Scroll for Cape for LUK 60%",
      "Tobi Throwing-Stars"
    ],
    "starsClaws": "Tobi Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Soul%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "neo-huroid",
    "name": "Neo Huroid",
    "nameHe": "Neo Huroid",
    "level": 58,
    "hp": 5000,
    "mp": 120,
    "exp": 205,
    "icon": "🤖",
    "category": "51-70",
    "town": "Magatia",
    "locations": [
      "Lab - Area C-3 (Alcadno Research Lab)"
    ],
    "directions": [
      "From Magatia: Alcadno Lab -> Area C-1 -> Area C-2 -> Area C-3."
    ],
    "safeSpots": "Use laboratory catwalks. Neo Huroid fires long range electrical sparks.",
    "notableDrops": [
      "Neo Huroid Core",
      "Scroll for Gloves for ATT 60%",
      "Blood Garcina (Lv. 60 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Blood Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Neo%20Huroid",
    "verifiedDrops": []
  },
  {
    "id": "mixed-golem",
    "name": "Mixed Golem",
    "nameHe": "גולם מעורב (Mixed Golem)",
    "level": 59,
    "hp": 5000,
    "mp": 110,
    "exp": 210,
    "icon": "🪨",
    "category": "51-70+",
    "town": "Henesys / Golem Temple",
    "locations": [
      "Golem Temple V"
    ],
    "directions": [
      "ב-Golem Temple: היכנס לפורטל האחרון Golem Temple V."
    ],
    "safeSpots": "פלטפורמות מקדש עליונות. שילוב של אבן ועשב עם כמות EXP מעולה לשחקנים ברמות 50-60.",
    "notableDrops": [
      "Tobi Throwing-Stars",
      "Scroll for Claw for ATT 60%",
      "Scroll for Cape for LUK 60%"
    ],
    "starsClaws": "Tobi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mixed%20Golem",
    "verifiedDrops": []
  },
  {
    "id": "king-sage-cat",
    "name": "King Sage Cat",
    "nameHe": "King Sage Cat",
    "level": 59,
    "hp": 38000,
    "mp": 400,
    "exp": 1100,
    "icon": "🐱",
    "category": "Boss",
    "town": "Korean Folk Town",
    "locations": [
      "Goblin House Entrance (שער בית הגובלינים)"
    ],
    "directions": [
      "From Korean Folk Town: Head past Fox Ridge into Goblin House Entrance."
    ],
    "safeSpots": "Stand on the tall stone lanterns. King Sage Cat casts darkness and lightning; keep eye drops ready.",
    "notableDrops": [
      "Sage Cat Tail",
      "Scroll for Gloves for ATT 60%",
      "Dark Slain",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=King%20Sage%20Cat",
    "verifiedDrops": []
  },
  {
    "id": "sage-cat",
    "name": "Sage Cat",
    "nameHe": "Sage Cat",
    "level": 59,
    "hp": 5200,
    "mp": 130,
    "exp": 210,
    "icon": "🐱",
    "category": "51-70",
    "town": "Mu Lung",
    "locations": [
      "Forest of Wandering",
      "Wild Bear Area"
    ],
    "directions": [
      "From Mu Lung: Travel past Goblin Forest into Forest of Wandering."
    ],
    "safeSpots": "Stand on horizontal stone pillars above the walking path.",
    "notableDrops": [
      "Sage Cat Fur",
      "Scroll for Gloves for ATT 60%",
      "Blood Slain",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Sage%20Cat",
    "verifiedDrops": []
  },
  {
    "id": "mushmom",
    "name": "Mushmom (בוס)",
    "nameHe": "מאש-מאם (אם הפטריות)",
    "level": 60,
    "hp": 20000,
    "mp": 500,
    "exp": 1200,
    "icon": "🍄‍🟫",
    "category": "bosses",
    "town": "Henesys",
    "locations": [
      "Singing Mushroom Forest: Someone Else's House (הבית של מישהו אחר)"
    ],
    "directions": [
      "מהנסיס (Henesys): צא מהפורטל המזרחי ל-Singing Mushroom Forest.",
      "חפש בית פטריה קטן עם דלת מוסתרת (Someone Else's House). לחץ חץ למעלה מול הדלת כדי להיכנס."
    ],
    "safeSpots": "עמוד על המדף הגבוה בצד שמאל של החדר. קפוץ באוויר ברגע שהיא מנחיתה את קפיצת הענק שלה כדי למנוע את רעידת האדמה.",
    "notableDrops": [
      "Ilbi Throwing-Stars (+27 Attack - כוכבי הטלה האגדיים והיקרים ביותר במשחק מייפל סטורי!)",
      "Mushmom Spore",
      "Scroll for Shoes for Jump 60%"
    ],
    "starsClaws": "Ilbi Throwing-Stars (+27 ATT ⭐)",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Mushmom%20(%D7%91%D7%95%D7%A1)",
    "verifiedDrops": [],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Victoria Road: The Hill East of Henesys (הגבעה מזרחית להנסיס)",
      "targetMap": "Hidden Street: Someone Else's House (הבית של מישהו אחר - מאורת מאשמם)",
      "landmark": "ארובת לבנים כתומה בגג בית הפטרייה בצד ימין-למעלה של המפה",
      "landmarkIcon": "🍄",
      "coordinates": "קצה ימני-עליון של המפה (Top-Right Platform, על גג הבית)",
      "howToEnter": "טפס במעלה הגבעות והחבלים עד לבית הפטרייה הימני-עליון, עמוד בדיוק על גבי הארובה ולחץ [↑ חץ למעלה].",
      "warningTip": "מאשמם (Mushmom) היא בוס רמה 40 עם ריספאון של כשעתיים-שלוש. היא מפילה כוכבי Ilbi ומגילת כפפות להתקפה 60%! אם היא לא מופיעה, עבור צ'אנל (Change Channel).",
      "miniMap": {
        "theme": "henesys",
        "themeName": "The Hill East of Henesys (הגבעה מזרחית להנסיס)",
        "platforms": [
          {
            "x": 60,
            "y": 25,
            "w": 35,
            "h": 6,
            "label": "גג בית הפטרייה (ארובת הכניסה)"
          },
          {
            "x": 10,
            "y": 35,
            "w": 35,
            "h": 6,
            "label": "גבעת דשא שמאל"
          },
          {
            "x": 30,
            "y": 60,
            "w": 50,
            "h": 6,
            "label": "מפלס גבעה אמצעי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "שביל העמק התחתון"
          }
        ],
        "ropes": [
          {
            "x": 75,
            "y1": 25,
            "y2": 60
          },
          {
            "x": 25,
            "y1": 35,
            "y2": 60
          },
          {
            "x": 50,
            "y1": 60,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 78,
          "y": 20,
          "icon": "🍄",
          "name": "ארובת הבית (Someone Else's House)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מהנסיס"
        }
      }
    }
  },
  {
    "id": "red-drake",
    "name": "Red Drake",
    "nameHe": "דרקון אדום (Red Drake)",
    "level": 60,
    "hp": 6000,
    "mp": 120,
    "exp": 220,
    "icon": "🐉",
    "category": "51-70+",
    "town": "Sleepywood / Perion",
    "locations": [
      "Dungeon: Drake Area",
      "Red Drake Gorge"
    ],
    "directions": [
      "מסליפיווד: צא מזרחה אל ה-Dungeon ועבור דרך Drake Valley אל Red Drake Gorge."
    ],
    "safeSpots": "עמוד על מדפי סלעי הלבה. השתמש ב-Dark Sight אם אתה צריך לנוע בין פלטפורמות בלי לספוג כדורי אש.",
    "notableDrops": [
      "Steely Throwing-Stars (+25 ATT! הדרופ האייקוני של רד דרייק)",
      "Red Drake Skin",
      "Scroll for Claw for ATT 60%"
    ],
    "starsClaws": "Steely Throwing-Stars (+25 ATT)",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/50",
    "verifiedDrops": [
      {
        "name": "Dark Piettra Skirt",
        "category": "Equips",
        "price": "29,999 Mesos",
        "votes": 1,
        "source": "reported"
      },
      {
        "name": "Steely Throwing Knives",
        "category": "Stars",
        "price": "4,449,999.5 Mesos",
        "votes": 9,
        "source": "reported"
      },
      {
        "name": "Great Red Helmet",
        "category": "Equips",
        "price": "11,499.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Flame Golden Circlet",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Lightning Earrings",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Orientican",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Piettra",
        "category": "Equips",
        "price": "29,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Moon",
        "category": "Equips",
        "price": "82,500 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Violet Platina",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "White Anakamoon",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Anakamoon",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Martial Arts Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Orientican Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Brown Moon Pants",
        "category": "Equips",
        "price": "88,888 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Violet Platina Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Salt Shoes",
        "category": "Equips",
        "price": "8,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Magic Cape",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Elixir",
        "category": "Use",
        "price": "650 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Mana Elixir",
        "category": "Use",
        "price": "1,100 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Earring INT Scroll: Intermediate",
        "category": "Scrolls",
        "price": "74,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Earring INT Scroll: Greater",
        "category": "Scrolls",
        "price": "20,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Shield DEF Scroll: Intermediate",
        "category": "Scrolls",
        "price": "30,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dragon Skin",
        "category": "Etc",
        "price": "200 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Flaming Feather",
        "category": "Etc",
        "price": "85,000 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "pepe",
    "name": "Pepe",
    "nameHe": "פפה (פינגווין ענק)",
    "level": 60,
    "hp": 5500,
    "mp": 110,
    "exp": 215,
    "icon": "🐧",
    "category": "51-70+",
    "town": "El Nath",
    "locations": [
      "El Nath: Ice Valley IV"
    ],
    "directions": [
      "מאל נאת': עבור מ-Ice Valley III ל-Ice Valley IV."
    ],
    "safeSpots": "משטחי הקרח הגבוהים. פפה מחליק במהירות אך קל לחסל אותו במטחי Lucky Seven.",
    "notableDrops": [
      "Pepe Beak",
      "Scroll for Gloves for DEX 60%",
      "Black Scarab"
    ],
    "starsClaws": "Black Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Pepe",
    "verifiedDrops": []
  },
  {
    "id": "master-soul-teddy",
    "name": "Master Soul Teddy",
    "nameHe": "מאסטר סול טדי (דובי נשמה מפקד)",
    "level": 61,
    "hp": 5800,
    "mp": 120,
    "exp": 235,
    "icon": "🧸",
    "category": "51-70+",
    "town": "Ludibrium Deep Clocktower",
    "locations": [
      "Ludibrium: Forgotten Path of Time <2>"
    ],
    "directions": [
      "במעמקי מגדל השעון: המשך ל-Forgotten Path of Time 2."
    ],
    "safeSpots": "פלטפורמות תלויות מעל התהום.",
    "notableDrops": [
      "Free Spirit Soul",
      "Scroll for Claw for ATT 60%",
      "Black Scarab"
    ],
    "starsClaws": "Black Scarab & Claw Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Master%20Soul%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "wild-cargo",
    "name": "Wild Cargo",
    "nameHe": "ווילד קארגו (דינוזאור לילה)",
    "level": 62,
    "hp": 6000,
    "mp": 120,
    "exp": 240,
    "icon": "🐊",
    "category": "51-70+",
    "town": "Sleepywood",
    "locations": [
      "Ant Tunnel: Wild Cargo's Lair",
      "Cold Cradle"
    ],
    "directions": [
      "מסליפיווד: לך עמוק בתוך מערות הנמלים עד למפת Wild Cargo's Lair."
    ],
    "safeSpots": "הפלטפורמות העליונות במערה. היזהר מקפיצות הזינוק המהירות שלו.",
    "notableDrops": [
      "Wild Cargo Eye",
      "Black Scarab (כפפת רמה 60)",
      "Scroll for Cape for DEX 60%"
    ],
    "starsClaws": "Black Scarab (Lv 60)",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Wild%20Cargo",
    "verifiedDrops": []
  },
  {
    "id": "dark-pepe",
    "name": "Dark Pepe",
    "nameHe": "דארק פפה (פינגווין אפל)",
    "level": 62,
    "hp": 6800,
    "mp": 120,
    "exp": 240,
    "icon": "🐧",
    "category": "51-70+",
    "town": "El Nath",
    "locations": [
      "El Nath: Ice Valley V",
      "El Nath: Sharp Cliff I"
    ],
    "directions": [
      "מאל נאת': עבור מ-Ice Valley IV ל-Ice Valley V."
    ],
    "safeSpots": "משטחי קרח גבוהים.",
    "notableDrops": [
      "Dark Pepe Beak",
      "Scroll for Claw for ATT 60%",
      "Black Scarab"
    ],
    "starsClaws": "Black Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Pepe",
    "verifiedDrops": []
  },
  {
    "id": "zombie-mushmom",
    "name": "Zombie Mushmom (בוסית)",
    "nameHe": "זומבי מאשמאם (פטריית הרעל המקוללת)",
    "level": 63,
    "hp": 75000,
    "mp": 1500,
    "exp": 5500,
    "icon": "🍄",
    "category": "bosses",
    "town": "Sleepywood Deep Cave",
    "locations": [
      "Ant Tunnel: The Grave of Mushrooms"
    ],
    "directions": [
      "מסליפיווד: היכנס עמוק לתוך מערת הקברים The Grave of Mushrooms."
    ],
    "safeSpots": "עמוד על גבי המצבות מעל הפטרייה. קפיצות הרעידה שלה מורידות חצי מד חיים אם אתה עומד על הרצפה!",
    "notableDrops": [
      "Ilbi Throwing-Stars (+27 ATT)",
      "Zombie Mushmom Poison Spore",
      "Scroll for Gloves for ATT 60%"
    ],
    "starsClaws": "Ilbi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Zombie%20Mushmom%20(%D7%91%D7%95%D7%A1%D7%99%D7%AA)",
    "verifiedDrops": [],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Dungeon: Ant Tunnel IV (מנהרת הנמלים 4 - עמוק בסליפיווד)",
      "targetMap": "Hidden Street: The Grave of Mushmom (קבר המאשמם)",
      "landmark": "מצבת אבן עתיקה ואפורה ועליה סימני שלד בפינה הימנית-תחתונה",
      "landmarkIcon": "🪦",
      "coordinates": "קרקעית מנהרת הנמלים 4, בקצה הימני של המערה",
      "howToEnter": "רד לתחתית מנהרת הנמלים 4, גש למצבת האבן בקצה הימני ועמוד מולה ולחץ [↑ חץ למעלה].",
      "warningTip": "בוסית זומבית רמה 55. בעלת קפיצת אדמה עם נזק כבד – קפוץ ברגע שהיא נוחתת כדי לחמוק מהרעידה.",
      "miniMap": {
        "theme": "sleepywood",
        "themeName": "Ant Tunnel IV (מנהרת הנמלים 4)",
        "platforms": [
          {
            "x": 10,
            "y": 30,
            "w": 80,
            "h": 6,
            "label": "מפלס עליון (פטריות קרניים)"
          },
          {
            "x": 15,
            "y": 60,
            "w": 70,
            "h": 6,
            "label": "מפלס ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית המערה (המצבה)"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 70,
            "y1": 30,
            "y2": 60
          },
          {
            "x": 50,
            "y1": 60,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 88,
          "y": 84,
          "icon": "🪦",
          "name": "מצבת האבן (The Grave of Mushmom)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 26,
          "name": "כניסה מ-Ant Tunnel III"
        }
      }
    }
  },
  {
    "id": "officer-skeleton",
    "name": "Officer Skeleton",
    "nameHe": "Officer Skeleton",
    "level": 63,
    "hp": 7500,
    "mp": 150,
    "exp": 250,
    "icon": "🛡️",
    "category": "51-70",
    "town": "Perion",
    "locations": [
      "Excavation Site: Relic Excavation IV",
      "Excavation Site: Tomb"
    ],
    "directions": [
      "From Perion: Navigate deep into Excavation Site past Relic Excavation III into Relic Excavation IV."
    ],
    "safeSpots": "Stand on the wooden beam ledges. Fast attack speed; jump-throwing with Lucky Seven is recommended.",
    "notableDrops": [
      "Pelvis Bone",
      "Scroll for Shoes for JUMP 60%",
      "Blood Slain (Lv. 40 Claw)",
      "Dark Gigantic (Lv. 50 Claw)"
    ],
    "starsClaws": "Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Officer%20Skeleton",
    "verifiedDrops": []
  },
  {
    "id": "ice-drake",
    "name": "Ice Drake",
    "nameHe": "דרקון קרח (Ice Drake)",
    "level": 64,
    "hp": 7500,
    "mp": 130,
    "exp": 260,
    "icon": "🧊",
    "category": "51-70+",
    "town": "Sleepywood",
    "locations": [
      "Ant Tunnel: Cold Cradle"
    ],
    "directions": [
      "מסליפיווד: עבור לעומק ה-Ant Tunnel מעבר ל-Wild Cargo אל מערת הקרח Cold Cradle."
    ],
    "safeSpots": "עמוד על עמודי הקרח הגבוהים. דרקון הקרח חלש למתקפות מהירות של Lucky Seven.",
    "notableDrops": [
      "Ice Drake Horn",
      "Scroll for Overall for LUK 60%",
      "Kandjar / Scarab"
    ],
    "starsClaws": "Scarab Claw",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ice%20Drake",
    "verifiedDrops": []
  },
  {
    "id": "saitie",
    "name": "Saitie",
    "nameHe": "Saitie",
    "level": 64,
    "hp": 8000,
    "mp": 160,
    "exp": 270,
    "icon": "👻",
    "category": "51-70",
    "town": "Magatia",
    "locations": [
      "Closed Lab - Area 202 (המעבדה הסגורה במגטיה)"
    ],
    "directions": [
      "From Magatia: Zenumist Lab -> enter hidden portal to the underground Closed Lab -> Area 202."
    ],
    "safeSpots": "One of the top grinding spots in the game! Completely flat lanes with phenomenal spawn. Jump-throw Lucky Seven back and forth.",
    "notableDrops": [
      "Saitie Cloth",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Garcina (Lv. 60 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Garcina",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Magatia: Lab - Area 102 (מעבדת מגטיה אזור 102)",
      "targetMap": "Closed Lab - Area 202 (המעבדה הסגורה במגטיה)",
      "landmark": "צינור אוורור מתכתי חלוד עם רשת ברזל שבורה בקיר המעבדה",
      "landmarkIcon": "👻",
      "coordinates": "על גבי צינור המתכת השמאלי-עליון בקיר המעבדה",
      "howToEnter": "קפוץ על צינור המתכת העליון, עמוד מול פתח האוורור ולחץ [↑ חץ למעלה].",
      "warningTip": "המפה הסגורה 202 היא אחד ממוקדי האימון הטובים במשחק לרמות 60-75 (פלטפורמות שטוחות לגמרי!).",
      "miniMap": {
        "theme": "magatia",
        "themeName": "מעבדות מגטיה (Magatia Research Lab)",
        "platforms": [
          {
            "x": 10,
            "y": 30,
            "w": 35,
            "h": 6,
            "label": "צינור אוורור עליון"
          },
          {
            "x": 55,
            "y": 40,
            "w": 35,
            "h": 6,
            "label": "גשר מתכת ימני"
          },
          {
            "x": 25,
            "y": 65,
            "w": 50,
            "h": 6,
            "label": "קונסולת בקרה מרכזית"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "רצפת המעבדה"
          }
        ],
        "ropes": [
          {
            "x": 20,
            "y1": 30,
            "y2": 65
          },
          {
            "x": 70,
            "y1": 40,
            "y2": 88
          },
          {
            "x": 50,
            "y1": 65,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 18,
          "y": 26,
          "icon": "⚙️",
          "name": "פתח אוורור (Closed Lab 202)"
        },
        "spawnSpot": {
          "x": 90,
          "y": 84,
          "name": "כניסה ממגטיה"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Saitie",
    "verifiedDrops": []
  },
  {
    "id": "yeti",
    "name": "Yeti",
    "nameHe": "ייטי ענק (Yeti)",
    "level": 65,
    "hp": 9000,
    "mp": 140,
    "exp": 310,
    "icon": "🧊",
    "category": "51-70+",
    "town": "El Nath",
    "locations": [
      "El Nath: Sharp Cliff I",
      "El Nath: Sharp Cliff II"
    ],
    "directions": [
      "מאל נאת': עלה בצוקים החדים (Sharp Cliff I-II) בדרך למכרות המתים."
    ],
    "safeSpots": "מדפי הצוקים. זהירות מההפיכה שלו ליטי ופפה מורכב אם אתה פוגע בגרסה המורכבת שלו!",
    "notableDrops": [
      "Yeti Horn",
      "Scroll for Claw for ATT 10%",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Yeti",
    "verifiedDrops": []
  },
  {
    "id": "jr-balrog",
    "name": "Jr. Balrog (בוס סליפיווד)",
    "nameHe": "ג'וניור בלרוג (השד המכונף של סליפיווד)",
    "level": 65,
    "hp": 50000,
    "mp": 1000,
    "exp": 4000,
    "icon": "😈",
    "category": "bosses",
    "town": "Sleepywood Deep Dungeon",
    "locations": [
      "Sanctuary: The Evil Shrine"
    ],
    "directions": [
      "מסליפיווד: צא אל עומק ה-Dungeon ועבור את כל המפות עד The Evil Shrine במקדש המקולל."
    ],
    "safeSpots": "עמוד על עמודי האבן בצדדים. מתקפת הברק שלו יכולה לעשות 1-hit KO לשחקנים עם מעט HP, לכן השתמש ב-Dark Sight למיקום מחדש.",
    "notableDrops": [
      "Steely Throwing-Stars (+25 ATT)",
      "Scroll for Claw for ATT 60%",
      "Balrog Soul"
    ],
    "starsClaws": "Steely Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Jr.%20Balrog%20(%D7%91%D7%95%D7%A1%20%D7%A1%D7%9C%D7%99%D7%A4%D7%99%D7%95%D7%95%D7%93)",
    "verifiedDrops": [],
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Dungeon: Another Entrance (הכניסה השנייה עמוק במערות)",
      "targetMap": "Sanctuary: The Cursed Sanctuary (המקדש המקולל - מאורת הג'וניור בלרוג)",
      "landmark": "דלת אבן ענקית עם סמלי שדים ואש שחורה בקצה המבוך",
      "landmarkIcon": "😈",
      "coordinates": "קצה המקדש המקולל בשיא עומק סליפיווד",
      "howToEnter": "עמוד מול שער המקדש המקולל עם סמלי השדים ולחץ [↑ חץ למעלה].",
      "warningTip": "בוס על רמה 80! בעל מתקפת מגיק אדירה ודיספל (Dispel). התכונן עם שיקויים רבים והפעל Haste מתמיד.",
      "miniMap": {
        "theme": "sleepywood",
        "themeName": "The Cursed Sanctuary (המקדש המקולל)",
        "platforms": [
          {
            "x": 10,
            "y": 35,
            "w": 80,
            "h": 6,
            "label": "עמודי מקדש עליונים"
          },
          {
            "x": 20,
            "y": 65,
            "w": 60,
            "h": 6,
            "label": "במת מזבח ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "רצפת המקדש המקוללת"
          }
        ],
        "ropes": [
          {
            "x": 30,
            "y1": 35,
            "y2": 65
          },
          {
            "x": 70,
            "y1": 35,
            "y2": 65
          },
          {
            "x": 50,
            "y1": 65,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 61,
          "icon": "😈",
          "name": "שער המקדש המקולל (The Cursed Sanctuary)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מ-Deep Ant Tunnel"
        }
      }
    }
  },
  {
    "id": "dyle",
    "name": "Dyle",
    "nameHe": "Dyle",
    "level": 65,
    "hp": 31000,
    "mp": 350,
    "exp": 850,
    "icon": "🐊",
    "category": "Boss",
    "town": "Kerning City",
    "locations": [
      "Swamp of Despair III (ביצת הייאוש 3 ליד קרנינג)"
    ],
    "directions": [
      "From Kerning City: Exit left portal -> Swamp Region -> enter Swamp of Despair I -> go right to Swamp of Despair II -> Swamp of Despair III."
    ],
    "safeSpots": "Stand on the elevated wooden swamp walkways. Dyle crawls along the mud water at the bottom and cannot reach upper walkways.",
    "notableDrops": [
      "Crocodile Skin",
      "Scroll for Claw for ATT 60%",
      "Mithril Mehona (Lv. 50 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dyle",
    "verifiedDrops": []
  },
  {
    "id": "buffoon",
    "name": "Buffoon",
    "nameHe": "Buffoon",
    "level": 66,
    "hp": 10000,
    "mp": 150,
    "exp": 265,
    "icon": "🤡",
    "category": "51-70",
    "town": "Ludibrium",
    "locations": [
      "Path of Time <1>"
    ],
    "directions": [
      "From Ludibrium: Enter the central Clocktower portal -> descend into the Deep Clocktower -> Path of Time <1>."
    ],
    "safeSpots": "Stand on clock gear ledges. Buffoon hops slowly with magic attacks.",
    "notableDrops": [
      "Buffoon Hat",
      "Scroll for Cape for DEX 60%",
      "Dark Gigantic (Lv. 50 Claw)"
    ],
    "starsClaws": "Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Buffoon",
    "verifiedDrops": []
  },
  {
    "id": "dark-drake",
    "name": "Dark Drake",
    "nameHe": "דרקון אפל (Dark Drake)",
    "level": 68,
    "hp": 8500,
    "mp": 140,
    "exp": 300,
    "icon": "🐉",
    "category": "51-70+",
    "town": "Sleepywood",
    "locations": [
      "Dungeon: Drake Gorge",
      "Deep Drake Cave"
    ],
    "directions": [
      "מסליפיווד: עמוק בתוך מערות הדרקונים בעמק Drake Gorge."
    ],
    "safeSpots": "מדפי הסלע השחורים מעל הדרקונים.",
    "notableDrops": [
      "Dark Drake Skin",
      "Steely Throwing-Stars (+25 ATT)",
      "Scroll for Gloves for ATT 60%"
    ],
    "starsClaws": "Steely Stars & Gloves Scrolls",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Drake",
    "verifiedDrops": []
  },
  {
    "id": "lucida",
    "name": "Lucida",
    "nameHe": "Lucida",
    "level": 68,
    "hp": 12000,
    "mp": 180,
    "exp": 310,
    "icon": "🐈‍⬛",
    "category": "51-70",
    "town": "Orbis",
    "locations": [
      "Cloud Park VI",
      "Stairway to the Sky II"
    ],
    "directions": [
      "From Orbis: Cloud Park I -> Cloud Park IV -> Stairway to the Sky I -> Stairway to the Sky II."
    ],
    "safeSpots": "Rope hang and snipe onto the lower clouds. Watch out for its high jump and dark magic attack.",
    "notableDrops": [
      "Lucida Tail",
      "Scroll for Claw for ATT 60%",
      "Blood Garcina (Lv. 60 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Blood Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lucida",
    "verifiedDrops": []
  },
  {
    "id": "dark-yeti",
    "name": "Dark Yeti",
    "nameHe": "Dark Yeti",
    "level": 68,
    "hp": 13000,
    "mp": 180,
    "exp": 320,
    "icon": "🦍",
    "category": "51-70",
    "town": "El Nath",
    "locations": [
      "Ice Valley II",
      "Sharp Cliff II"
    ],
    "directions": [
      "From El Nath: Cold Field II -> Ice Valley II -> sharp cliff portals."
    ],
    "safeSpots": "Stand on the icy mountain ledges. Dark Yeti has an earthquake stomp; jump-shooting avoids the stun.",
    "notableDrops": [
      "Dark Yeti Horn",
      "Scroll for Claw for ATT 60%",
      "Dark Gigantic (Lv. 50 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Gigantic",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Yeti",
    "verifiedDrops": []
  },
  {
    "id": "deep-buffoon",
    "name": "Deep Buffoon",
    "nameHe": "Deep Buffoon",
    "level": 69,
    "hp": 12500,
    "mp": 170,
    "exp": 320,
    "icon": "🤡",
    "category": "51-70",
    "town": "Ludibrium",
    "locations": [
      "Path of Time <2>"
    ],
    "directions": [
      "From Ludibrium: Clocktower bottom -> Path of Time <2>."
    ],
    "safeSpots": "Snipe from the brass clock springs and pendulum platforms.",
    "notableDrops": [
      "Deep Buffoon Cap",
      "Scroll for Claw for ATT 60%",
      "Blood Garcina (Lv. 60 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Blood Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Deep%20Buffoon",
    "verifiedDrops": []
  },
  {
    "id": "tauromacis",
    "name": "Tauromacis",
    "nameHe": "טאורומאקיס (קנטאור אפור עם רומח)",
    "level": 70,
    "hp": 3850,
    "mp": 150,
    "exp": 350,
    "icon": "🐂",
    "category": "51-70+",
    "classicPatch": "v1.0.0 (Oct 2026): HP הופחת רשמית מ-15,000 ל-3,850 בלבד!",
    "town": "Sleepywood Deep Sanctuary",
    "locations": [
      "Dungeon: The Cursed Sanctuary",
      "Deep Ant Tunnel"
    ],
    "directions": [
      "מסליפיווד: לך עד סוף ה-Dungeon אל המקדש המקולל (The Cursed Sanctuary) שבו נמצא גם Jr. Balrog."
    ],
    "safeSpots": "עמוד על כותרות העמודים העתיקים במקדש. אסור בתכלית האיסור לרדת לרצפה ללא Dark Sight!",
    "notableDrops": [
      "Steely Throwing-Stars (+25 ATT)",
      "Tauromacis Horn",
      "Scroll for Claw for ATT 10%"
    ],
    "starsClaws": "Steely Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/52",
    "verifiedDrops": [
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 2,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Fragment of Magic",
        "category": "Etc",
        "price": "80 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Bronze Crusader Helm",
        "category": "Equips",
        "price": "37,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bronze Planet",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pink Mystique",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Requierre",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Pink Mystique Pants",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Duo",
        "category": "Equips",
        "price": "2,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Skull Shield",
        "category": "Equips",
        "price": "111,111 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Silver Ancient Shield",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Jeweled Katar",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Shinkita",
        "category": "Weapons",
        "price": "450,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Sai",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Arc Staff",
        "category": "Weapons",
        "price": "349,999.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "The Rising",
        "category": "Weapons",
        "price": "166,943.5 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Serpent's Tongue",
        "category": "Weapons",
        "price": "249,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "The Nine Dragons",
        "category": "Weapons",
        "price": "550,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Dark Slain",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Power Elixir",
        "category": "Use",
        "price": "3,390 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Mana Elixir",
        "category": "Use",
        "price": "1,100 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "One-Handed Sword Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "25,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "One-Handed Axe Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "17,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Spear Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "86,999 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "captain",
    "name": "Captain",
    "nameHe": "Captain",
    "level": 70,
    "hp": 13500,
    "mp": 180,
    "exp": 340,
    "icon": "🏴‍☠️",
    "category": "51-70",
    "town": "Herb Town",
    "locations": [
      "Red-Nosed Pirate Den 2"
    ],
    "directions": [
      "From Herb Town: Exit right towards Pirate Den -> descend into Red-Nosed Pirate Den 2."
    ],
    "safeSpots": "Stand on suspended wooden pirate crates and barrels.",
    "notableDrops": [
      "Captain Hat",
      "Scroll for Claw for ATT 60%",
      "Dark Garcina (Lv. 60 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Captain",
    "verifiedDrops": []
  },
  {
    "id": "tae-roon",
    "name": "Tae Roon",
    "nameHe": "Tae Roon",
    "level": 71,
    "hp": 45000,
    "mp": 500,
    "exp": 1600,
    "icon": "🐻",
    "category": "Boss",
    "town": "Mu Lung",
    "locations": [
      "Wild Bear Area (אזור דובי הפרא במו לונג)"
    ],
    "directions": [
      "From Mu Lung: Travel through Peach Farm III into Wild Bear Area."
    ],
    "safeSpots": "Climb the tall bamboo trees. Tae Roon uses martial arts kicks and earthquake stomps that only hit ground level.",
    "notableDrops": [
      "Tae Roon Claw",
      "Scroll for Gloves for ATT 60%",
      "Dark Garcina",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Tae%20Roon",
    "verifiedDrops": []
  },
  {
    "id": "cerebes",
    "name": "Cerebes",
    "nameHe": "Cerebes",
    "level": 72,
    "hp": 14000,
    "mp": 200,
    "exp": 430,
    "icon": "🐕‍🦺",
    "category": "71+",
    "town": "El Nath",
    "locations": [
      "The Cave of Trial III",
      "The Passage to Zakum"
    ],
    "directions": [
      "From El Nath: Pass all the way through Dead Mine into Cave of Trial III near the entrance to Zakum Altar."
    ],
    "safeSpots": "Stand on hanging chains and suspended rocks above the bubbling lava.",
    "notableDrops": [
      "Cerebes Dog Tooth",
      "Scroll for Cape for DEX 60%",
      "Dark Garcina (Lv. 60 Claw)",
      "Tobirou Throwing-Stars"
    ],
    "starsClaws": "Dark Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Cerebes",
    "verifiedDrops": []
  },
  {
    "id": "kru",
    "name": "Kru",
    "nameHe": "Kru",
    "level": 72,
    "hp": 14500,
    "mp": 190,
    "exp": 370,
    "icon": "🏴‍☠️",
    "category": "71+",
    "town": "Herb Town",
    "locations": [
      "Red-Nosed Pirate Den 3"
    ],
    "directions": [
      "From Herb Town: Pirate Den 2 -> continue right into Red-Nosed Pirate Den 3."
    ],
    "safeSpots": "Stand on the second level ship deck. High EXP and great mob spawn for early 3rd job.",
    "notableDrops": [
      "Kru Hook",
      "Scroll for Cape for DEX 60%",
      "Blood Garcina",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Blood Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Kru",
    "verifiedDrops": []
  },
  {
    "id": "commander-skeleton",
    "name": "Commander Skeleton",
    "nameHe": "Commander Skeleton",
    "level": 73,
    "hp": 15000,
    "mp": 200,
    "exp": 480,
    "icon": "👑",
    "category": "71+",
    "town": "Perion",
    "locations": [
      "Excavation Site: Tomb of the Shaman",
      "Excavation Site: Relic Excavation IV"
    ],
    "directions": [
      "From Perion: Go all the way to the end of Excavation Site -> Relic Excavation IV -> enter the tomb door at the bottom."
    ],
    "safeSpots": "Use upper stone steps inside the tomb. Dangerous physical attack; keep Haste active and kite constantly.",
    "notableDrops": [
      "Skull Bone",
      "Scroll for Claw for ATT 10%",
      "Dark Garcina (Lv. 60 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Commander%20Skeleton",
    "verifiedDrops": []
  },
  {
    "id": "king-centipede",
    "name": "King Centipede",
    "nameHe": "King Centipede",
    "level": 73,
    "hp": 52000,
    "mp": 600,
    "exp": 1850,
    "icon": "🐛",
    "category": "Boss",
    "town": "Herb Town",
    "locations": [
      "100-Year-Old Herb Garden (גן צמחי המרפא העתיק)"
    ],
    "directions": [
      "From Herb Town: 50-Year-Old Herb Garden -> hidden portal inside giant ginseng pot."
    ],
    "safeSpots": "Stand on the perimeter fence posts. King Centipede crawls along the dirt; easily sniped from above.",
    "notableDrops": [
      "Centipede Poison",
      "Scroll for Claw for ATT 60%",
      "Dark Garcina",
      "Casters"
    ],
    "starsClaws": "Casters & Claw ATT 60%",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Herb Town: 50-Year-Old Herb Garden (גן צמחי המרפא בן ה-50 בהרב טאון)",
      "targetMap": "100-Year-Old Herb Garden (מאורת מרבה הרגליים הענק)",
      "landmark": "כד חרסינה סיני ענקי המעלה אדי צמחים ירוקים",
      "landmarkIcon": "🐛",
      "coordinates": "במרכז המפה, על מדף האבן בין שתי גדרות הבמבוק",
      "howToEnter": "עמוד בדיוק במרכז הפתח של כד החרסינה הענקי ולחץ [↑ חץ למעלה].",
      "warningTip": "בפנים ממתין הבוס King Centipede (רמה 73). פגיע מאוד לירי Lucky Seven מרחוק!",
      "miniMap": {
        "theme": "herb-town",
        "themeName": "שדות הג'ינסנג בהרב טאון (Herb Town Garden)",
        "platforms": [
          {
            "x": 10,
            "y": 35,
            "w": 35,
            "h": 6,
            "label": "שדה ג'ינסנג עליון"
          },
          {
            "x": 55,
            "y": 35,
            "w": 35,
            "h": 6,
            "label": "טרסה ימנית"
          },
          {
            "x": 25,
            "y": 62,
            "w": 50,
            "h": 6,
            "label": "מדף כד החרסינה המרכזי"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "שביל הגן התחתון"
          }
        ],
        "ropes": [
          {
            "x": 25,
            "y1": 35,
            "y2": 62
          },
          {
            "x": 75,
            "y1": 35,
            "y2": 62
          },
          {
            "x": 50,
            "y1": 62,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 50,
          "y": 58,
          "icon": "⚱️",
          "name": "כד חרסינה (100-Year-Old Garden)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מ-10-Year Herb Garden"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=King%20Centipede",
    "verifiedDrops": []
  },
  {
    "id": "homun",
    "name": "Homun",
    "nameHe": "Homun",
    "level": 73,
    "hp": 15000,
    "mp": 200,
    "exp": 470,
    "icon": "🧪",
    "category": "71+",
    "town": "Magatia",
    "locations": [
      "Lab - Unit 201 (Zenumist Lab)"
    ],
    "directions": [
      "From Magatia: Zenumist Lab -> Unit 201."
    ],
    "safeSpots": "Stand on glass test tube racks above the floor.",
    "notableDrops": [
      "Homun Flask",
      "Scroll for Cape for DEX 60%",
      "Casters (Lv. 70 Claw)"
    ],
    "starsClaws": "Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Homun",
    "verifiedDrops": []
  },
  {
    "id": "papa-pixie",
    "name": "Papa Pixie (בוס OPQ)",
    "nameHe": "פאפא פיקסי (הבוס של מגדל האלה באורביס)",
    "level": 74,
    "hp": 520000,
    "mp": 5000,
    "exp": 45000,
    "icon": "🧚‍♂️",
    "category": "bosses",
    "town": "Orbis (OPQ)",
    "locations": [
      "Tower of Goddess: On the Way Up"
    ],
    "directions": [
      "מאורביס: עבור למגדל האלה והצטרף לפארטי ברמות 51-70.",
      "אסוף את חלקי הפסל של האלה מינרווה והילחם בפאפא פיקסי בראש המגדל."
    ],
    "safeSpots": "עמוד על פלטפורמות העננים לצד הפסל. היזהר מקללות החושך והעיוורון שהוא מטיל.",
    "notableDrops": [
      "Minerva Goddess Box",
      "Goddess Wristband",
      "Scroll for Gloves for ATT 60%"
    ],
    "starsClaws": "OPQ Rewards",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Papa%20Pixie%20(%D7%91%D7%95%D7%A1%20OPQ)",
    "verifiedDrops": []
  },
  {
    "id": "beetle",
    "name": "Beetle",
    "nameHe": "Beetle",
    "level": 74,
    "hp": 16000,
    "mp": 200,
    "exp": 500,
    "icon": "🪲",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Leafre: Entrance to Dragon Forest"
    ],
    "directions": [
      "From Leafre: Exit left portal into West Leafre Forest -> Entrance to Dragon Forest."
    ],
    "safeSpots": "Stand on giant tree stumps. Beetle charges in straight lines.",
    "notableDrops": [
      "Beetle Horn",
      "Scroll for Overall Armor for DEX 60%",
      "Casters (Lv. 70 Claw)"
    ],
    "starsClaws": "Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Beetle",
    "verifiedDrops": []
  },
  {
    "id": "taurospear",
    "name": "Taurospear",
    "nameHe": "טאורוספיר (קנטאור אדום עם ברקים)",
    "level": 75,
    "hp": 4200,
    "mp": 200,
    "exp": 450,
    "icon": "⚡",
    "category": "51-70+",
    "classicPatch": "v1.0.0 (Oct 2026): HP הופחת רשמית מ-18,000 ל-4,200 בלבד!",
    "town": "Sleepywood Deep Sanctuary",
    "locations": [
      "Dungeon: The Cursed Sanctuary"
    ],
    "directions": [
      "במעמקי המקדש המקולל של סליפיווד יחד עם Tauromacis."
    ],
    "safeSpots": "עמוד על הפלטפורמות התלויות הגבוהות ביותר. הוא יורה קסמי ברק רבי עוצמה אם אתה בטווח קרוב.",
    "notableDrops": [
      "Steely Throwing-Stars",
      "Red Hinkel (כפפת רמה 70)",
      "Scroll for Cape for LUK 60%"
    ],
    "starsClaws": "Red Hinkel & Steelies",
    "meowDbUrl": "https://meowdb.com/msclassic/monsters/53",
    "verifiedDrops": [
      {
        "name": "White Potion",
        "category": "Use",
        "price": "280 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Blue Potion",
        "category": "Use",
        "price": "199 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Animal Fur Bundle",
        "category": "Etc",
        "price": "40 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Black Crystal Ore",
        "category": "Etc",
        "price": "2,500 Mesos",
        "votes": 3,
        "source": "reported"
      },
      {
        "name": "Bronze Crusader Helm",
        "category": "Equips",
        "price": "37,999 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blue Sonata",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Mithril Planet",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Skull Earrings",
        "category": "Equips",
        "price": "55,555 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Red Moon Shoes",
        "category": "Equips",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Blood Mesana",
        "category": "Equips",
        "price": "4,000 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Skull Shield",
        "category": "Equips",
        "price": "111,111 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Neocora",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Hawkhead",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Tamus",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Thorns",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Sparta",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "The Shining",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "The Blessing",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Holy Spear",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Skylar",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Asianic Bow",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Golden Crow",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Bronze Gigantic",
        "category": "Weapons",
        "price": null,
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Power Elixir",
        "category": "Use",
        "price": "3,390 Mesos",
        "votes": null,
        "source": "listed"
      },
      {
        "name": "Two-handed Axe Attack Scroll: Intermediate",
        "category": "Scrolls",
        "price": "65,000 Mesos",
        "votes": null,
        "source": "listed"
      }
    ]
  },
  {
    "id": "werewolf",
    "name": "Werewolf",
    "nameHe": "וורוולף (איש זאב לבן קטלני)",
    "level": 75,
    "hp": 16000,
    "mp": 200,
    "exp": 520,
    "icon": "👹",
    "category": "51-70+",
    "town": "El Nath: Dead Mine",
    "locations": [
      "El Nath: Dead Mine I",
      "El Nath: Dead Mine II"
    ],
    "directions": [
      "מאל נאת': חצה את הצוקים החדים והיכנס לתוך מכרה המוות (Dead Mine I)."
    ],
    "safeSpots": "פלטפורמות פחם תלויות. הוורוולף מהיר במיוחד ומשתמש בסלאש ארוך טווח.",
    "notableDrops": [
      "Werewolf Toenail",
      "Dark Hinkel (כפפת רמה 70)",
      "Scroll for Overall for LUK 60%"
    ],
    "starsClaws": "Dark Hinkel (Lv 70)",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Werewolf",
    "verifiedDrops": []
  },
  {
    "id": "dual-beetle",
    "name": "Dual Beetle",
    "nameHe": "Dual Beetle",
    "level": 76,
    "hp": 18000,
    "mp": 220,
    "exp": 540,
    "icon": "🪲",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Dragon Forest I"
    ],
    "directions": [
      "From Leafre: West Leafre Forest -> Dragon Forest I."
    ],
    "safeSpots": "Stand on high wooden vine platforms.",
    "notableDrops": [
      "Dual Beetle Horn",
      "Scroll for Shoes for DEX 60%",
      "Dark Casters"
    ],
    "starsClaws": "Dark Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dual%20Beetle",
    "verifiedDrops": []
  },
  {
    "id": "hankie",
    "name": "Hankie",
    "nameHe": "Hankie",
    "level": 77,
    "hp": 19000,
    "mp": 220,
    "exp": 560,
    "icon": "🐑",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Dragon Forest II"
    ],
    "directions": [
      "From Leafre: Dragon Forest I -> Dragon Forest II."
    ],
    "safeSpots": "Stand on the mossy logs. Hankie casts sleep magic; keep Awake Potions ready.",
    "notableDrops": [
      "Hankie Horn",
      "Scroll for Cape for DEX 60%",
      "Casters"
    ],
    "starsClaws": "Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Hankie",
    "verifiedDrops": []
  },
  {
    "id": "yeti-and-pepe",
    "name": "Yeti and Pepe",
    "nameHe": "Yeti and Pepe",
    "level": 78,
    "hp": 20000,
    "mp": 250,
    "exp": 550,
    "icon": "🐧",
    "category": "71+",
    "town": "El Nath",
    "locations": [
      "Sharp Cliff I",
      "Sharp Cliff II"
    ],
    "directions": [
      "From El Nath: Exit right to Cold Field -> Ice Valley II -> portal to Sharp Cliff I."
    ],
    "safeSpots": "Stand on upper cliff platforms. When defeated, it splits into an individual Yeti and Pepe! Be prepared to kite both.",
    "notableDrops": [
      "Yeti Horn",
      "Pepe Beak",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Slain",
      "Ilbi Throwing-Stars"
    ],
    "starsClaws": "Ilbi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Yeti%20and%20Pepe",
    "verifiedDrops": []
  },
  {
    "id": "d-roy",
    "name": "D.Roy",
    "nameHe": "D.Roy",
    "level": 78,
    "hp": 55000,
    "mp": 600,
    "exp": 2200,
    "icon": "🤖",
    "category": "Boss",
    "town": "Magatia",
    "locations": [
      "Lab - Secret Passageway (Alcadno / Zenumist Tunnel)"
    ],
    "directions": [
      "From Magatia: Secret passage connecting Alcadno and Zenumist labs."
    ],
    "safeSpots": "Stand on metal conduits. D.Roy fires homing rockets; keep jumping.",
    "notableDrops": [
      "D.Roy Circuit",
      "Scroll for Gloves for ATT 60%",
      "Casters",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=D.Roy",
    "verifiedDrops": []
  },
  {
    "id": "harp",
    "name": "Harp",
    "nameHe": "Harp",
    "level": 79,
    "hp": 21000,
    "mp": 240,
    "exp": 600,
    "icon": "🦅",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Sky Nest I"
    ],
    "directions": [
      "From Leafre: Exit right into Leafre East Green -> climb the rope into Sky Nest I."
    ],
    "safeSpots": "Stand on the bird nests. Harps fly in predictable arcs.",
    "notableDrops": [
      "Harp Feather",
      "Scroll for Claw for ATT 60%",
      "Dark Casters",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Harp",
    "verifiedDrops": []
  },
  {
    "id": "lycanthrope",
    "name": "Lycanthrope",
    "nameHe": "לייקנתרופ (איש זאב שחור - מפיל אילבי!)",
    "level": 80,
    "hp": 24000,
    "mp": 250,
    "exp": 750,
    "icon": "🐺",
    "category": "51-70+",
    "town": "El Nath: Dead Mine",
    "locations": [
      "El Nath: Dead Mine III",
      "El Nath: Dead Mine IV"
    ],
    "directions": [
      "בעומק מכרה המוות באל נאת' (Dead Mine III-IV) סמוך למערת זאקום."
    ],
    "safeSpots": "עמוד על קרוניות המכרות והקורות הגבוהות ביותר. היזהר מסופת הזאבים שלו.",
    "notableDrops": [
      "Ilbi Throwing-Stars (+27 ATT! הדרופ האגדי)",
      "Lycanthrope Fur",
      "Scroll for Claw for ATT 60%"
    ],
    "starsClaws": "Ilbi Throwing-Stars (+27 ATT)",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lycanthrope",
    "verifiedDrops": []
  },
  {
    "id": "windraider",
    "name": "Windraider",
    "nameHe": "Windraider",
    "level": 80,
    "hp": 23000,
    "mp": 250,
    "exp": 700,
    "icon": "🥷",
    "category": "71+",
    "town": "New Leaf City (NLC) / Masteria",
    "locations": [
      "Lower Ascent",
      "Crimsonwood Mountain"
    ],
    "directions": [
      "From NLC: Take the mountain trail through Phantom Forest -> Crimsonwood Mountain: Lower Ascent."
    ],
    "safeSpots": "Rope hang on the vines and shoot downwards. Windraider runs fast and teleports; keep your elevation.",
    "notableDrops": [
      "Windraider Badge",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Garcina",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Garcina",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Windraider",
    "verifiedDrops": []
  },
  {
    "id": "dark-yeti-and-pepe",
    "name": "Dark Yeti and Pepe",
    "nameHe": "Dark Yeti and Pepe",
    "level": 82,
    "hp": 26000,
    "mp": 300,
    "exp": 720,
    "icon": "🐧",
    "category": "71+",
    "town": "El Nath",
    "locations": [
      "Sharp Cliff II"
    ],
    "directions": [
      "From El Nath: Pass through Sharp Cliff I into Sharp Cliff II."
    ],
    "safeSpots": "Stand on upper mountain rocks. Splits into Dark Yeti and Dark Pepe upon death.",
    "notableDrops": [
      "Dark Yeti Horn",
      "Dark Pepe Beak",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab (Lv. 80 Claw)",
      "Ilbi Throwing-Stars"
    ],
    "starsClaws": "Ilbi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Yeti%20and%20Pepe",
    "verifiedDrops": []
  },
  {
    "id": "rash",
    "name": "Rash",
    "nameHe": "Rash",
    "level": 82,
    "hp": 26000,
    "mp": 280,
    "exp": 750,
    "icon": "🦔",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "West Leafre Forest: Forest of the Priest"
    ],
    "directions": [
      "From Leafre: Exit left -> West Leafre Forest -> Forest of the Priest."
    ],
    "safeSpots": "Stand on tree mushrooms.",
    "notableDrops": [
      "Rash Fur",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Casters"
    ],
    "starsClaws": "Dark Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Rash",
    "verifiedDrops": []
  },
  {
    "id": "eliza",
    "name": "Eliza",
    "nameHe": "Eliza",
    "level": 83,
    "hp": 85000,
    "mp": 600,
    "exp": 2800,
    "icon": "🐈",
    "category": "Boss",
    "town": "Orbis",
    "locations": [
      "Stairway to the Sky II (Eliza Garden)"
    ],
    "directions": [
      "From Orbis: Cloud Park I -> Cloud Park IV -> Stairway to the Sky II -> top-right hidden portal."
    ],
    "safeSpots": "Stand on the upper marble column ledges. Eliza summons Lucidas and casts darkness; use Eyedrops and Flash Jump.",
    "notableDrops": [
      "Eliza Fur",
      "Scroll for Gloves for ATT 60%",
      "Sapphire Slain",
      "Dark Garcina"
    ],
    "starsClaws": "Gloves ATT 60%",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Orbis: Stairway to the Sky II (מדרגות לשמיים 2 באורביס)",
      "targetMap": "Hidden Street: Eliza's Garden (הגן הנסתר של אליזה)",
      "landmark": "עמוד שיש רומי שבור המוקף בענני נוצה סגולים",
      "landmarkIcon": "🐈",
      "coordinates": "בפינה הימנית-עליונה ביותר של גן העננים",
      "howToEnter": "קפוץ על ענני הנוצה לצד ימין למעלה, עמוד מול עמוד השיש השבור ולחץ [↑ חץ למעלה].",
      "warningTip": "המקום שבו מזמנים ונלחמים בבוסית אליזה.",
      "miniMap": {
        "theme": "orbis",
        "themeName": "מדרגות לשמיים באורביס (Stairway to the Sky)",
        "platforms": [
          {
            "x": 60,
            "y": 22,
            "w": 35,
            "h": 6,
            "label": "ענן עליון ימין (עמוד שיש)"
          },
          {
            "x": 10,
            "y": 40,
            "w": 40,
            "h": 6,
            "label": "ענן שמאל"
          },
          {
            "x": 40,
            "y": 65,
            "w": 50,
            "h": 6,
            "label": "ענן ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית העננים (לוסידות)"
          }
        ],
        "ropes": [
          {
            "x": 75,
            "y1": 22,
            "y2": 65
          },
          {
            "x": 30,
            "y1": 40,
            "y2": 65
          },
          {
            "x": 60,
            "y1": 65,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 80,
          "y": 18,
          "icon": "🏛️",
          "name": "עמוד שיש (Eliza's Garden)"
        },
        "spawnSpot": {
          "x": 8,
          "y": 84,
          "name": "כניסה מ-Stairway to the Sky I"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Eliza",
    "verifiedDrops": []
  },
  {
    "id": "ghost-pirate",
    "name": "Ghost Pirate",
    "nameHe": "Ghost Pirate",
    "level": 83,
    "hp": 28000,
    "mp": 300,
    "exp": 820,
    "icon": "🏴‍☠️",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Warped Path of Time <3>"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> take left door into Warped Path of Time -> descend to <3>."
    ],
    "safeSpots": "Use elevated wooden deck beams. Fast flying bullets; jump-throw continuously.",
    "notableDrops": [
      "Ghost Pirate Hat",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Garcina",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Ghost%20Pirate",
    "verifiedDrops": []
  },
  {
    "id": "homunculus",
    "name": "Homunculus",
    "nameHe": "Homunculus",
    "level": 83,
    "hp": 29000,
    "mp": 300,
    "exp": 850,
    "icon": "🧪",
    "category": "71+",
    "town": "Magatia",
    "locations": [
      "Lab - Unit 202 (Zenumist Lab)"
    ],
    "directions": [
      "From Magatia: Zenumist Lab -> Unit 202."
    ],
    "safeSpots": "Stand on elevated alchemy tables. Homunculus casts poison pools; keep your distance.",
    "notableDrops": [
      "Homunculus Blood",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab (Lv. 80 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Homunculus",
    "verifiedDrops": []
  },
  {
    "id": "blood-harp",
    "name": "Blood Harp",
    "nameHe": "Blood Harp",
    "level": 83,
    "hp": 27000,
    "mp": 280,
    "exp": 780,
    "icon": "🦅",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Sky Nest II"
    ],
    "directions": [
      "From Leafre: Sky Nest I -> top portal into Sky Nest II."
    ],
    "safeSpots": "One of the best leveling spots for high 3rd job! Stand on the nest platforms and snipe with Lucky Seven. Great star drops!",
    "notableDrops": [
      "Blood Harp Feather",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab (Lv. 80 Claw)",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Blood%20Harp",
    "verifiedDrops": []
  },
  {
    "id": "birk",
    "name": "Birk",
    "nameHe": "Birk",
    "level": 84,
    "hp": 29000,
    "mp": 300,
    "exp": 880,
    "icon": "🐺",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Crag of the Wolf"
    ],
    "directions": [
      "From Leafre: West Leafre -> Crag of the Wolf."
    ],
    "safeSpots": "Stand on the high rocks above the valley.",
    "notableDrops": [
      "Birk Fur",
      "Scroll for Cape for DEX 60%",
      "Dark Scarab"
    ],
    "starsClaws": "Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Birk",
    "verifiedDrops": []
  },
  {
    "id": "death-teddy",
    "name": "Death Teddy",
    "nameHe": "דת' טדי (דובי מוות - רמה 85)",
    "level": 85,
    "hp": 32000,
    "mp": 280,
    "exp": 1200,
    "icon": "💀",
    "category": "51-70+",
    "town": "Ludibrium Deep Clocktower",
    "locations": [
      "Ludibrium: Forgotten Path of Time <3>"
    ],
    "directions": [
      "במעמקי מגדל השעון: עבור ל-Forgotten Path of Time 3."
    ],
    "safeSpots": "עמוד על הפלטפורמות העליונות ביותר. פוגע קשה מאוד במגע – אסאסין עם Haste 20 ו-Flash Jump שולט במפה.",
    "notableDrops": [
      "Death Teddy Scythe",
      "Steely Throwing-Stars (+25 ATT)",
      "Scroll for Claw for ATT 10%"
    ],
    "starsClaws": "Steely Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Death%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "goby",
    "name": "Goby",
    "nameHe": "Goby",
    "level": 85,
    "hp": 17000,
    "mp": 200,
    "exp": 600,
    "icon": "🐟",
    "category": "71+",
    "town": "Aqua Road",
    "locations": [
      "The Grave of a Wrecked Ship"
    ],
    "directions": [
      "From Aquarium: Travel far east past Deep Sea Gorge II into The Grave of a Wrecked Ship."
    ],
    "safeSpots": "Gobies spawn in swarms from broken submarine shells (Aqua Goby Home). Break the house from high ground and mob them with Avenger or pick them off with Lucky Seven.",
    "notableDrops": [
      "Goby Fin",
      "Scroll for Gloves for ATT 60%",
      "Ilbi Throwing-Stars",
      "Dark Scarab"
    ],
    "starsClaws": "Ilbi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Goby",
    "verifiedDrops": []
  },
  {
    "id": "lord-pirate",
    "name": "Lord Pirate",
    "nameHe": "Lord Pirate",
    "level": 85,
    "hp": 450000,
    "mp": 3000,
    "exp": 25000,
    "icon": "🏴‍☠️",
    "category": "Boss",
    "town": "Herb Town",
    "locations": [
      "Lord Pirate PQ (Pirate Ship Lord Cabin)"
    ],
    "directions": [
      "From Herb Town: Talk to Guon at Pirate Ship entrance to start the Lord Pirate Party Quest (Levels 55-100)."
    ],
    "safeSpots": "Stay on the wooden ship rigging. Lord Pirate charges and shoots cannon fire across the deck.",
    "notableDrops": [
      "Lord Pirate Hat (שדרוגי כובע פיראט אגדיים)",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Lord Pirate Hat",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lord%20Pirate",
    "verifiedDrops": []
  },
  {
    "id": "chimera",
    "name": "Chimera",
    "nameHe": "Chimera",
    "level": 85,
    "hp": 180000,
    "mp": 1200,
    "exp": 5800,
    "icon": "🦁",
    "category": "Boss",
    "town": "Magatia",
    "locations": [
      "Lab - Secret Underground Passage (מעבר תת-קרקעי סודי)"
    ],
    "directions": [
      "From Magatia: Hidden drain pipe at the bottom of the lab canal (requires lab quest completion)."
    ],
    "safeSpots": "Stand on the brick pillars above the canal. Chimera casts poison gas and dark claws.",
    "notableDrops": [
      "Chimera Horn",
      "Scroll for Claw for ATT 60%",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab"
    ],
    "starsClaws": "Dark Scarab & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chimera",
    "verifiedDrops": []
  },
  {
    "id": "dark-rash",
    "name": "Dark Rash",
    "nameHe": "Dark Rash",
    "level": 85,
    "hp": 31000,
    "mp": 300,
    "exp": 950,
    "icon": "🦔",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Valley of the Antelope"
    ],
    "directions": [
      "From Leafre: Forest of the Priest -> Valley of the Antelope."
    ],
    "safeSpots": "Stand on cliff ledges.",
    "notableDrops": [
      "Dark Rash Fur",
      "Scroll for Shoes for JUMP 60%",
      "Dark Scarab",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Rash",
    "verifiedDrops": []
  },
  {
    "id": "stormbreaker",
    "name": "Stormbreaker",
    "nameHe": "Stormbreaker",
    "level": 85,
    "hp": 31000,
    "mp": 300,
    "exp": 950,
    "icon": "⚡",
    "category": "71+",
    "town": "New Leaf City (NLC) / Masteria",
    "locations": [
      "Cavern of Honor",
      "Crimsonwood Keep"
    ],
    "directions": [
      "From Masteria: Lower Ascent -> climb into the Crimsonwood Keep Cavern of Honor."
    ],
    "safeSpots": "Stand on stone cliff ledges. Stormbreaker casts electrical waves across the ground.",
    "notableDrops": [
      "Stormbreaker Badge",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Stormbreaker",
    "verifiedDrops": []
  },
  {
    "id": "dual-birk",
    "name": "Dual Birk",
    "nameHe": "Dual Birk",
    "level": 86,
    "hp": 33000,
    "mp": 320,
    "exp": 1050,
    "icon": "🐺",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Crag of the Wolf"
    ],
    "directions": [
      "From Leafre: Deep inside Crag of the Wolf."
    ],
    "safeSpots": "Snipe from the suspended vine ropes.",
    "notableDrops": [
      "Dual Birk Mane",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dual%20Birk",
    "verifiedDrops": []
  },
  {
    "id": "dual-ghost-pirate",
    "name": "Dual Ghost Pirate",
    "nameHe": "Dual Ghost Pirate",
    "level": 87,
    "hp": 35000,
    "mp": 350,
    "exp": 1150,
    "icon": "🏴‍☠️",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Unfinished Story (Warped Path of Time <4>)"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Warped Path of Time -> go to <4> (Unfinished Story)."
    ],
    "safeSpots": "Stand on the narrow hanging rope platforms. Dual Ghost Pirate is one of the premier Ilbi-dropping monsters in Pre-BigBang!",
    "notableDrops": [
      "Dual Ghost Pirate Helm",
      "Ilbi Throwing-Stars (כוכבי אילבי המבוקשים!)",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab (Lv. 80 Claw)"
    ],
    "starsClaws": "Ilbi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dual%20Ghost%20Pirate",
    "verifiedDrops": []
  },
  {
    "id": "klock",
    "name": "Klock",
    "nameHe": "Klock",
    "level": 87,
    "hp": 36000,
    "mp": 350,
    "exp": 1180,
    "icon": "⏰",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Lost Time <1>"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Warped Path of Time -> enter hidden portal to Lost Time <1>."
    ],
    "safeSpots": "Rope hang and snipe. Klocks float slowly and have high magic defense, but fall easily to Lucky Seven.",
    "notableDrops": [
      "Klock Spring",
      "Scroll for Cape for DEX 60%",
      "Casters (Lv. 70 Claw)"
    ],
    "starsClaws": "Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Klock",
    "verifiedDrops": []
  },
  {
    "id": "homunkullo",
    "name": "Homunkullo",
    "nameHe": "Homunkullo",
    "level": 87,
    "hp": 36000,
    "mp": 350,
    "exp": 1180,
    "icon": "🧪",
    "category": "71+",
    "town": "Magatia",
    "locations": [
      "Lab - Unit 203 (Zenumist Lab)"
    ],
    "directions": [
      "From Magatia: Zenumist Lab -> Unit 203."
    ],
    "safeSpots": "Elevated laboratory pipes allow safe sniping from above.",
    "notableDrops": [
      "Homunkullo Core",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Homunkullo",
    "verifiedDrops": []
  },
  {
    "id": "bain",
    "name": "Bain",
    "nameHe": "ביין (שד אש שחור - רמה 88)",
    "level": 88,
    "hp": 35000,
    "mp": 300,
    "exp": 1350,
    "icon": "🔥",
    "category": "51-70+",
    "town": "El Nath: Dead Mine",
    "locations": [
      "The Cave of Trial III (מערת הניסוי 3 לפני זאקום)"
    ],
    "directions": [
      "במעמקי מכרה המוות באל נאת' סמוך לדלת המזבח של זאקום."
    ],
    "safeSpots": "עמוד על מדפי הלבה הגבוהים ביותר. שד מסוכן ביותר שיורה כדורי אש ענקיים.",
    "notableDrops": [
      "Bain Collar",
      "Steely Throwing-Stars (+25 ATT)",
      "Scroll for Claw for ATT 60%"
    ],
    "starsClaws": "Steely Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Bain",
    "verifiedDrops": []
  },
  {
    "id": "blue-kentaurus",
    "name": "Blue Kentaurus",
    "nameHe": "Blue Kentaurus",
    "level": 88,
    "hp": 37000,
    "mp": 350,
    "exp": 1250,
    "icon": "🐎",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Minar Forest: The Area of Blue Kentaurus",
      "Battlefield of Fire and Water"
    ],
    "directions": [
      "From Leafre: Exit right -> Leafre East Green -> East Border -> enter The Area of Blue Kentaurus."
    ],
    "safeSpots": "Rope snipe and use upper wooden platforms. Blue Kentaurus uses ice breath and charges quickly; use Flash Jump and Haste.",
    "notableDrops": [
      "Blue Kentaurus Mane",
      "Hwabi Throwing-Stars (כוכבי הוואבי המבוקשים!)",
      "Scroll for Cape for DEX 60%",
      "Dark Scarab (Lv. 80 Claw)"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Blue%20Kentaurus",
    "verifiedDrops": []
  },
  {
    "id": "red-kentaurus",
    "name": "Red Kentaurus",
    "nameHe": "Red Kentaurus",
    "level": 88,
    "hp": 37000,
    "mp": 350,
    "exp": 1250,
    "icon": "🐎",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Minar Forest: The Area of Red Kentaurus",
      "Battlefield of Fire and Water"
    ],
    "directions": [
      "From Leafre: East Border -> continue right into The Area of Red Kentaurus."
    ],
    "safeSpots": "Stand on upper cliff platforms. Fire breath attack; easily avoided from above.",
    "notableDrops": [
      "Red Kentaurus Mane",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Red%20Kentaurus",
    "verifiedDrops": []
  },
  {
    "id": "black-kentaurus",
    "name": "Black Kentaurus",
    "nameHe": "Black Kentaurus",
    "level": 88,
    "hp": 37000,
    "mp": 350,
    "exp": 1250,
    "icon": "🐎",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Minar Forest: The Area of Black Kentaurus",
      "Battlefield of Fire and Darkness"
    ],
    "directions": [
      "From Leafre: East Border -> enter The Area of Black Kentaurus."
    ],
    "safeSpots": "Stand on high wooden platforms. Casts darkness and dark magic; keeps your eyes on HP.",
    "notableDrops": [
      "Black Kentaurus Mane",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Black%20Kentaurus",
    "verifiedDrops": []
  },
  {
    "id": "master-death-teddy",
    "name": "Master Death Teddy",
    "nameHe": "Master Death Teddy",
    "level": 89,
    "hp": 40000,
    "mp": 400,
    "exp": 1400,
    "icon": "🧸",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Forgotten Path of Time <4>"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> take right door into Forgotten Path of Time -> descend to <4>."
    ],
    "safeSpots": "Stand on the iron pipe rails. Use Flash Jump to evade its giant ghost fist attack.",
    "notableDrops": [
      "Master Death Teddy Cloth",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Gloves ATT 60% & Steely",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Master%20Death%20Teddy",
    "verifiedDrops": []
  },
  {
    "id": "snowman",
    "name": "Snowman",
    "nameHe": "Snowman",
    "level": 90,
    "hp": 120000,
    "mp": 1200,
    "exp": 4200,
    "icon": "⛄",
    "category": "Boss",
    "town": "El Nath",
    "locations": [
      "Snowman Valley (עמק איש השלג)"
    ],
    "directions": [
      "From El Nath: Go through Ice Valley II -> Sharp Cliff I -> enter hidden portal to Snowman Valley."
    ],
    "safeSpots": "Climb the ice ropes and shoot from high ledges. Snowman summons Yetis and causes falling icicles.",
    "notableDrops": [
      "Snowman Snowball",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Gloves ATT 60% & Steely",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "El Nath: Sharp Cliff I (הצוק החד 1 באל-נאת')",
      "targetMap": "Snowman Valley (עמק איש השלג)",
      "landmark": "פסל איש שלג מקרח עם גזר ושלט עץ קפוא מכוסה שלג",
      "landmarkIcon": "⛄",
      "coordinates": "בראש מצוק הקרח הימני-עליון ביותר",
      "howToEnter": "טפס על חבלי הקרח לקצה הימני-עליון, עמוד מול פסל איש השלג ולחץ [↑ חץ למעלה].",
      "warningTip": "השלג במפה מחליק; מומלץ להצטייד בנעלי Spikes או ללכת בזהירות.",
      "miniMap": {
        "theme": "el-nath",
        "themeName": "מצוקי הקרח של אל-נאת' (Sharp Cliff I)",
        "platforms": [
          {
            "x": 60,
            "y": 22,
            "w": 35,
            "h": 6,
            "label": "צוק קרח עליון (איש השלג)"
          },
          {
            "x": 10,
            "y": 38,
            "w": 40,
            "h": 6,
            "label": "מדף קרח שמאל"
          },
          {
            "x": 40,
            "y": 62,
            "w": 50,
            "h": 6,
            "label": "מדף ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "עמק הקרח התחתון"
          }
        ],
        "ropes": [
          {
            "x": 75,
            "y1": 22,
            "y2": 62
          },
          {
            "x": 30,
            "y1": 38,
            "y2": 62
          },
          {
            "x": 60,
            "y1": 62,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 82,
          "y": 18,
          "icon": "⛄",
          "name": "פסל שלג (Snowman Valley)"
        },
        "spawnSpot": {
          "x": 8,
          "y": 84,
          "name": "כניסה מ-Ice Valley II"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Snowman",
    "verifiedDrops": []
  },
  {
    "id": "dark-klock",
    "name": "Dark Klock",
    "nameHe": "Dark Klock",
    "level": 90,
    "hp": 42000,
    "mp": 420,
    "exp": 1520,
    "icon": "⏰",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Lost Time <2>"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Forgotten Path of Time -> enter hidden portal to Lost Time <2>."
    ],
    "safeSpots": "Stand on upper clock hands. Keep Haste active to maneuver around its dark aura.",
    "notableDrops": [
      "Dark Klock Spring",
      "Scroll for Claw for ATT 60%",
      "Dark Casters (Lv. 70 Claw)",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Dark Casters",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Klock",
    "verifiedDrops": []
  },
  {
    "id": "firebrand",
    "name": "Firebrand",
    "nameHe": "Firebrand",
    "level": 90,
    "hp": 42000,
    "mp": 400,
    "exp": 1450,
    "icon": "🔥",
    "category": "71+",
    "town": "New Leaf City (NLC) / Masteria",
    "locations": [
      "Crimsonwood Keep: Hall of the Brave"
    ],
    "directions": [
      "From Masteria: Crimsonwood Keep interior -> Hall of the Brave."
    ],
    "safeSpots": "Stand on the iron wall torches. Heavy fire magic attack; easy to dodge from above.",
    "notableDrops": [
      "Firebrand Badge",
      "Scroll for Cape for DEX 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Firebrand",
    "verifiedDrops": []
  },
  {
    "id": "nightshadow",
    "name": "Nightshadow",
    "nameHe": "Nightshadow",
    "level": 90,
    "hp": 43000,
    "mp": 400,
    "exp": 1500,
    "icon": "🗡️",
    "category": "71+",
    "town": "New Leaf City (NLC) / Masteria",
    "locations": [
      "Crimsonwood Keep: Shadow Hall"
    ],
    "directions": [
      "From Masteria: Crimsonwood Keep interior -> Shadow Hall."
    ],
    "safeSpots": "Stand on the stone pillars. Nightshadow is an assassin-type mob; jump-throw to intercept his shadow dashes.",
    "notableDrops": [
      "Nightshadow Badge",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Nightshadow",
    "verifiedDrops": []
  },
  {
    "id": "eye-of-time",
    "name": "Eye of Time",
    "nameHe": "Eye of Time",
    "level": 91,
    "hp": 44000,
    "mp": 400,
    "exp": 1400,
    "icon": "👁️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Time Lane: Memory Lane 1"
    ],
    "directions": [
      "From Leafre: Take the dragon flight to Temple of Time -> enter the Three Doors into Memory Lane 1."
    ],
    "safeSpots": "Stand on the marble balustrades. Eye of Time floats and casts gaze attacks.",
    "notableDrops": [
      "Eye of Time Shard",
      "Scroll for Shoes for DEX 60%",
      "Dark Scarab"
    ],
    "starsClaws": "Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Eye%20of%20Time",
    "verifiedDrops": []
  },
  {
    "id": "memory-monk",
    "name": "Memory Monk",
    "nameHe": "Memory Monk",
    "level": 91,
    "hp": 45000,
    "mp": 420,
    "exp": 1450,
    "icon": "🧘",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Time Lane: Memory Lane 1"
    ],
    "directions": [
      "From Three Doors: Enter the first portal into Memory Lane 1."
    ],
    "safeSpots": "Stand on the marble pillars above the walkway.",
    "notableDrops": [
      "Monk Hat",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Scarab",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Memory%20Monk",
    "verifiedDrops": []
  },
  {
    "id": "bone-fish",
    "name": "Bone Fish",
    "nameHe": "Bone Fish",
    "level": 92,
    "hp": 45000,
    "mp": 450,
    "exp": 1600,
    "icon": "🦴",
    "category": "71+",
    "town": "Aqua Road",
    "locations": [
      "Deep Sea Trench II",
      "The Sharp Unknown"
    ],
    "directions": [
      "From Aquarium: Deep east into the dark abyss past Grave of a Wrecked Ship."
    ],
    "safeSpots": "Stand on the wooden mast of the sunken pirate ship. Undead fish; high HP pool.",
    "notableDrops": [
      "Bone Fish Rib",
      "Scroll for Claw for ATT 60%",
      "Dark Garcina",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Bone%20Fish",
    "verifiedDrops": []
  },
  {
    "id": "memory-monk-trainee",
    "name": "Memory Monk Trainee",
    "nameHe": "Memory Monk Trainee",
    "level": 94,
    "hp": 50000,
    "mp": 480,
    "exp": 1750,
    "icon": "🧘",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Time Lane: Memory Lane 2"
    ],
    "directions": [
      "From Memory Lane 1: Clear quest / portal into Memory Lane 2."
    ],
    "safeSpots": "Marble archways provide total sniping immunity.",
    "notableDrops": [
      "Memory Monk Trainee Hat",
      "Scroll for Cape for DEX 60%",
      "Dragon Purple Sleeve"
    ],
    "starsClaws": "Dragon Purple Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Memory%20Monk%20Trainee",
    "verifiedDrops": []
  },
  {
    "id": "phantom-watch",
    "name": "Phantom Watch",
    "nameHe": "Phantom Watch",
    "level": 95,
    "hp": 50000,
    "mp": 500,
    "exp": 1850,
    "icon": "⏱️",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Warped Passage"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Warped Path of Time <4> -> continue into Warped Passage."
    ],
    "safeSpots": "Stand on suspended brass pillars. Phantom Watch casts ice spells; maintain distance.",
    "notableDrops": [
      "Phantom Watch Ice Fragment",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Phantom%20Watch",
    "verifiedDrops": []
  },
  {
    "id": "green-cornian",
    "name": "Green Cornian",
    "nameHe": "Green Cornian",
    "level": 95,
    "hp": 48000,
    "mp": 450,
    "exp": 1750,
    "icon": "🦎",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Forest of Dead Trees I",
      "Forest of Dead Trees II"
    ],
    "directions": [
      "From Leafre: East Border -> Dragon Forest III -> enter Forest of Dead Trees I."
    ],
    "safeSpots": "Stand on fossil bone platforms. Green Cornian wields sword and shield with high physical defense; Lucky Seven bypasses defense.",
    "notableDrops": [
      "Green Cornian Scale",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Green%20Cornian",
    "verifiedDrops": []
  },
  {
    "id": "shark",
    "name": "Shark",
    "nameHe": "Shark",
    "level": 97,
    "hp": 54000,
    "mp": 550,
    "exp": 2000,
    "icon": "🦈",
    "category": "71+",
    "town": "Aqua Road",
    "locations": [
      "Cold Shark Habitat"
    ],
    "directions": [
      "From Aquarium: Deep Sea -> Sharp Unknown -> Cold Shark Habitat."
    ],
    "safeSpots": "Swim above the highest coral peaks. Shark has a fast bite and high knockback.",
    "notableDrops": [
      "Shark Teeth",
      "Scroll for Cape for DEX 60%",
      "Dark Scarab (Lv. 80 Claw)",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Shark",
    "verifiedDrops": []
  },
  {
    "id": "red-wyvern",
    "name": "Red Wyvern",
    "nameHe": "Red Wyvern",
    "level": 97,
    "hp": 52000,
    "mp": 500,
    "exp": 1900,
    "icon": "🐉",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Red Wyvern's Nest"
    ],
    "directions": [
      "From Leafre: Canyon: East Road -> climb dragon mountain into Red Wyvern's Nest."
    ],
    "safeSpots": "Stand on dragon bone perches. Red Wyvern flies and breaths fire cones.",
    "notableDrops": [
      "Red Wyvern Wing",
      "Scroll for Claw for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Red%20Wyvern",
    "verifiedDrops": []
  },
  {
    "id": "memory-guardian",
    "name": "Memory Guardian",
    "nameHe": "Memory Guardian",
    "level": 98,
    "hp": 57000,
    "mp": 550,
    "exp": 2100,
    "icon": "🛡️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Time Lane: Memory Lane 3"
    ],
    "directions": [
      "From Memory Lane 2: Advance through into Memory Lane 3."
    ],
    "safeSpots": "Stand on high decorative platforms.",
    "notableDrops": [
      "Guardian Helmet",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Memory%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "grim-phantom-watch",
    "name": "Grim Phantom Watch",
    "nameHe": "Grim Phantom Watch",
    "level": 99,
    "hp": 58000,
    "mp": 600,
    "exp": 2200,
    "icon": "⏱️",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Forgotten Passage"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Forgotten Path of Time <4> -> enter Forgotten Passage."
    ],
    "safeSpots": "Stand on elevated iron walkways. Very high EXP and notable drops; careful of its homing laser.",
    "notableDrops": [
      "Grim Phantom Watch Shard",
      "Scroll for Gloves for ATT 60%",
      "Black Neos (Lv. 90 Top)",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Grim%20Phantom%20Watch",
    "verifiedDrops": []
  },
  {
    "id": "crimson-balrog",
    "name": "Crimson Balrog (בוס הספינה)",
    "nameHe": "קרימזון בלרוג (הסיוט של הספינה לאורביס!)",
    "level": 100,
    "hp": 100000,
    "mp": 2000,
    "exp": 7000,
    "icon": "👹",
    "category": "bosses",
    "town": "The Sky Ferry (Victoria to Orbis)",
    "locations": [
      "The Sky Ferry: Ship Deck & Sky"
    ],
    "directions": [
      "מאליניה (Ellinia): עלה על הספינה המעופפת לאורביס (נסיעה של 10 דקות).",
      "באמצע הדרך יש סיכוי שמוזיקת הרקע תשתנה והשמיים יחשיכו - שני קרימזון בלרוג מופיעים על הסיפון!"
    ],
    "safeSpots": "היכנס מיד לתוך תא הספינה (Ship Cabin)! רק מתנקשים ברמות 70+ עם Haste ו-Dark Sight יכולים לצאת לסיפון ולהילחם בו.",
    "notableDrops": [
      "Ilbi Throwing-Stars (+27 ATT)",
      "Crimson Balrog Wings",
      "Scroll for Claw for ATT 10%"
    ],
    "starsClaws": "Ilbi Throwing-Stars",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Crimson%20Balrog%20(%D7%91%D7%95%D7%A1%20%D7%94%D7%A1%D7%A4%D7%99%D7%A0%D7%94)",
    "verifiedDrops": []
  },
  {
    "id": "dark-cornian",
    "name": "Dark Cornian",
    "nameHe": "Dark Cornian",
    "level": 100,
    "hp": 58000,
    "mp": 550,
    "exp": 2250,
    "icon": "🦎",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Forest of Dead Trees II",
      "Canyon: East Road"
    ],
    "directions": [
      "From Leafre: Forest of Dead Trees I -> Forest of Dead Trees II."
    ],
    "safeSpots": "Stand on elevated dragon skeletons. Heavy fire breath; kite with Shadow Partner and Lucky Seven.",
    "notableDrops": [
      "Dark Cornian Soul",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve (Lv. 110 Claw)",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Dragon Purple Sleeve & Hwabi",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Cornian",
    "verifiedDrops": []
  },
  {
    "id": "crimson-guardian",
    "name": "Crimson Guardian",
    "nameHe": "Crimson Guardian",
    "level": 100,
    "hp": 58000,
    "mp": 550,
    "exp": 2300,
    "icon": "🛡️",
    "category": "71+",
    "town": "New Leaf City (NLC) / Masteria",
    "locations": [
      "Crimsonwood Keep: Sanctum"
    ],
    "directions": [
      "From Masteria: Deep inside Crimsonwood Keep Sanctum."
    ],
    "safeSpots": "Stand on the altar platforms. High defense and EXP.",
    "notableDrops": [
      "Crimson Guardian Core",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Crimson%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "blue-wyvern",
    "name": "Blue Wyvern",
    "nameHe": "Blue Wyvern",
    "level": 101,
    "hp": 60000,
    "mp": 580,
    "exp": 2400,
    "icon": "🐉",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Blue Wyvern's Nest"
    ],
    "directions": [
      "From Leafre: Canyon: East Road -> Blue Wyvern's Nest."
    ],
    "safeSpots": "Rope climb and snipe across open sky. Ice breath attack; maintain distance.",
    "notableDrops": [
      "Blue Wyvern Wing",
      "Scroll for Cape for DEX 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Blue%20Wyvern",
    "verifiedDrops": []
  },
  {
    "id": "chief-memory-guardian",
    "name": "Chief Memory Guardian",
    "nameHe": "Chief Memory Guardian",
    "level": 101,
    "hp": 63000,
    "mp": 600,
    "exp": 2500,
    "icon": "🛡️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Time Lane: Memory Lane 4"
    ],
    "directions": [
      "From Memory Lane 3: Enter portal to Memory Lane 4."
    ],
    "safeSpots": "Rope climb and snipe across platforms.",
    "notableDrops": [
      "Chief Guardian Shield",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chief%20Memory%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "cold-shark",
    "name": "Cold Shark",
    "nameHe": "Cold Shark",
    "level": 102,
    "hp": 62000,
    "mp": 650,
    "exp": 2500,
    "icon": "🦈",
    "category": "71+",
    "town": "Aqua Road",
    "locations": [
      "The Sharp Unknown"
    ],
    "directions": [
      "From Aquarium: Travel to the deepest trench in Aqua Road."
    ],
    "safeSpots": "Stay high in the water column and fire Lucky Seven downwards.",
    "notableDrops": [
      "Cold Shark Teeth",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Cold%20Shark",
    "verifiedDrops": []
  },
  {
    "id": "dark-wyvern",
    "name": "Dark Wyvern",
    "nameHe": "Dark Wyvern",
    "level": 103,
    "hp": 65000,
    "mp": 620,
    "exp": 2700,
    "icon": "🐉",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Wyvern's Nest",
      "Peak of the Big Nest"
    ],
    "directions": [
      "From Leafre: Pass through Red and Blue Wyvern nests into the central Wyvern's Nest."
    ],
    "safeSpots": "Stand on the dragon nest rim. High EXP per kill; great for Night Lords with Flash Jump.",
    "notableDrops": [
      "Dark Wyvern Heart",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dark%20Wyvern",
    "verifiedDrops": []
  },
  {
    "id": "regret-monk",
    "name": "Regret Monk",
    "nameHe": "Regret Monk",
    "level": 103,
    "hp": 67000,
    "mp": 650,
    "exp": 2800,
    "icon": "🧘",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Road of Regrets 1"
    ],
    "directions": [
      "From Memory Lane 5: Defeat Dodo and pass through the Frozen Gate into Road of Regrets 1."
    ],
    "safeSpots": "Stand on ice marble steps above the walkway.",
    "notableDrops": [
      "Regret Monk Robe",
      "Scroll for Overall Armor for DEX 60%",
      "Dragon Purple Sleeve"
    ],
    "starsClaws": "Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Regret%20Monk",
    "verifiedDrops": []
  },
  {
    "id": "nest-goat",
    "name": "Nest Goat",
    "nameHe": "Nest Goat",
    "level": 105,
    "hp": 70000,
    "mp": 680,
    "exp": 3000,
    "icon": "🐐",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Dragon Forest III"
    ],
    "directions": [
      "From Leafre: East Border -> Dragon Forest III."
    ],
    "safeSpots": "Stand on high rocky mounds. Strong ram attack; kite backwards.",
    "notableDrops": [
      "Nest Goat Horn",
      "Scroll for Overall Armor for DEX 60%",
      "Dark Scarab"
    ],
    "starsClaws": "Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Nest%20Goat",
    "verifiedDrops": []
  },
  {
    "id": "manon",
    "name": "Manon",
    "nameHe": "Manon",
    "level": 105,
    "hp": 3700000,
    "mp": 12000,
    "exp": 185000,
    "icon": "🐲",
    "category": "Boss",
    "town": "Leafre",
    "locations": [
      "Manon's Forest (יער מאנון בליף)"
    ],
    "directions": [
      "From Leafre: Forest of Dead Trees II -> hidden portal into Manon's Forest (crucial for 4th Job Advancement!)."
    ],
    "safeSpots": "Stand on the high fossil tree trunks on the left and right. Manon uses fire breath, dispel and 1/1 stomp. Cast Haste and Shadow Partner immediately after dispel.",
    "notableDrops": [
      "Manon's Cry (פריט למעבר עבודה 4)",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Dragon Sleeve & Hwabi",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Leafre: Forest of Dead Trees II (יער העצים המתים 2 בליף)",
      "targetMap": "Manon's Forest (יער מאנון - בוס עבודה 4)",
      "landmark": "גולגולת שלד דרקון ענקית מאובנת עם שיניים חדות שבורות",
      "landmarkIcon": "🐲",
      "coordinates": "במדף הסלעים השמאלי-עליון של היער",
      "howToEnter": "טפס לסלע השמאלי-עליון, עמוד בתוך חלל הלסת של גולגולת הדרקון ולחץ [↑ חץ למעלה].",
      "warningTip": "בוס חובה למעבר עבודה 4 (מפיל Manon's Cry). מומלץ להיכנס מוכן עם שיקויי HP/MP מלאים.",
      "miniMap": {
        "theme": "leafre",
        "themeName": "יער הדרקונים בליף (Leafre Dragon Forest)",
        "platforms": [
          {
            "x": 10,
            "y": 25,
            "w": 35,
            "h": 6,
            "label": "מדף גולגולת הדרקון"
          },
          {
            "x": 55,
            "y": 35,
            "w": 35,
            "h": 6,
            "label": "סלע עליון ימין"
          },
          {
            "x": 25,
            "y": 60,
            "w": 50,
            "h": 6,
            "label": "מדף עצים מאובנים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית היער (קורניאנים)"
          }
        ],
        "ropes": [
          {
            "x": 25,
            "y1": 25,
            "y2": 60
          },
          {
            "x": 75,
            "y1": 35,
            "y2": 60
          },
          {
            "x": 50,
            "y1": 60,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 22,
          "y": 21,
          "icon": "🦴",
          "name": "גולגולת דרקון (Manon's Forest)"
        },
        "spawnSpot": {
          "x": 90,
          "y": 84,
          "name": "כניסה מ-Forest of Dead Trees I"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Manon",
    "verifiedDrops": []
  },
  {
    "id": "griffey",
    "name": "Griffey",
    "nameHe": "Griffey",
    "level": 105,
    "hp": 3700000,
    "mp": 12000,
    "exp": 185000,
    "icon": "🦅",
    "category": "Boss",
    "town": "Leafre",
    "locations": [
      "Griffey's Forest (יער גריפי בליף)"
    ],
    "directions": [
      "From Leafre: Canyon: East Road -> hidden portal into Griffey's Forest (crucial for 4th Job Advancement!)."
    ],
    "safeSpots": "Stand on the mountain stone pillars. Griffey uses wind tornadoes, dispel, and 1/1 attacks. Rebuff quickly with Booster and Haste.",
    "notableDrops": [
      "Griffey's Wind (פריט למעבר עבודה 4)",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Dragon Sleeve & Hwabi",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Leafre: Canyon: East Road (קניון: דרך מזרחית בליף)",
      "targetMap": "Griffey's Forest (יער גריפי - בוס עבודה 4)",
      "landmark": "קן ציפורים ענקי מקורות עץ וביצי אבן בראש הצוק",
      "landmarkIcon": "🦅",
      "coordinates": "בראש הצוק הימני-עליון של הקניון",
      "howToEnter": "עלה לראש הצוק הימני, עמוד בתוך קן הציפורים ולחץ [↑ חץ למעלה].",
      "warningTip": "מפיל את ה-Griffey's Wind הנדרש למעבר עבודה 4.",
      "miniMap": {
        "theme": "leafre",
        "themeName": "מצוקי הציפורים בליף (Leafre Canyon)",
        "platforms": [
          {
            "x": 60,
            "y": 22,
            "w": 35,
            "h": 6,
            "label": "קן גריפי העליון"
          },
          {
            "x": 10,
            "y": 38,
            "w": 40,
            "h": 6,
            "label": "סלע שמאל"
          },
          {
            "x": 35,
            "y": 62,
            "w": 50,
            "h": 6,
            "label": "מדף ביניים"
          },
          {
            "x": 0,
            "y": 88,
            "w": 100,
            "h": 10,
            "label": "קרקעית הקניון"
          }
        ],
        "ropes": [
          {
            "x": 75,
            "y1": 22,
            "y2": 62
          },
          {
            "x": 25,
            "y1": 38,
            "y2": 62
          },
          {
            "x": 55,
            "y1": 62,
            "y2": 88
          }
        ],
        "portalSpot": {
          "x": 80,
          "y": 18,
          "icon": "🪺",
          "name": "קן הציפורים (Griffey's Forest)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 84,
          "name": "כניסה מקניון ליף"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Griffey",
    "verifiedDrops": []
  },
  {
    "id": "dodo",
    "name": "Dodo",
    "nameHe": "Dodo",
    "level": 106,
    "hp": 3200000,
    "mp": 15000,
    "exp": 145000,
    "icon": "🦤",
    "category": "Boss",
    "town": "Temple of Time",
    "locations": [
      "Time Lane: Memory Lane 5 (בוס דרך הזיכרון)"
    ],
    "directions": [
      "From Memory Lane 4: Portal into Memory Lane 5."
    ],
    "safeSpots": "Stand on the top marble arch ledge. Dodo dashes and casts darkness; use Eyedrops and jump-throw.",
    "notableDrops": [
      "Dodo Helmet",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Dodo",
    "verifiedDrops": []
  },
  {
    "id": "regret-monk-trainee",
    "name": "Regret Monk Trainee",
    "nameHe": "Regret Monk Trainee",
    "level": 106,
    "hp": 73000,
    "mp": 700,
    "exp": 3200,
    "icon": "🧘",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Road of Regrets 2"
    ],
    "directions": [
      "From Road of Regrets 1: Enter portal to Road of Regrets 2."
    ],
    "safeSpots": "Stand on elevated ice columns.",
    "notableDrops": [
      "Trainee Ice Shard",
      "Scroll for Shoes for DEX 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Regret%20Monk%20Trainee",
    "verifiedDrops": []
  },
  {
    "id": "gatekeeper",
    "name": "Gatekeeper",
    "nameHe": "Gatekeeper",
    "level": 108,
    "hp": 75000,
    "mp": 800,
    "exp": 3100,
    "icon": "🚪",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Warped Path of Time (Deep Passage)"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Warped Passage -> portal to the lowest gate."
    ],
    "safeSpots": "Stand on elevated stone balconies above the doorway. Gatekeeper casts 1/1 and stuns; always keep HP potions ready.",
    "notableDrops": [
      "Gatekeeper Key",
      "Scroll for Claw for ATT 10%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Gatekeeper",
    "verifiedDrops": []
  },
  {
    "id": "thanatos",
    "name": "Thanatos",
    "nameHe": "Thanatos",
    "level": 108,
    "hp": 75000,
    "mp": 800,
    "exp": 3100,
    "icon": "💀",
    "category": "71+",
    "town": "Ludibrium",
    "locations": [
      "Forgotten Path of Time (Deep Passage)"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> Forgotten Passage -> portal to the lowest forgotten gate."
    ],
    "safeSpots": "Snipe from high iron platforms. Casts powerful curses and darkness.",
    "notableDrops": [
      "Thanatos Shard",
      "Scroll for Gloves for ATT 10%",
      "Hwabi Throwing-Stars",
      "Dark Scarab"
    ],
    "starsClaws": "Hwabi & Dark Scarab",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Thanatos",
    "verifiedDrops": []
  },
  {
    "id": "pianus",
    "name": "Pianus",
    "nameHe": "Pianus",
    "level": 110,
    "hp": 30000000,
    "mp": 1000000,
    "exp": 1250000,
    "icon": "🐟",
    "category": "Boss",
    "town": "Aqua Road",
    "locations": [
      "The Cave of Pianus (מערת פיאנוס במעמקי הים)"
    ],
    "directions": [
      "From Aquarium: Far east abyss -> The Sharp Unknown -> bottom hidden cave portal into The Cave of Pianus."
    ],
    "safeSpots": "Left Cave and Right Cave have different platforms. Stand on upper coral ledges to dodge its falling lasers and 1/1 bomb explosion.",
    "notableDrops": [
      "Pianus Scale",
      "Scroll for Claw for ATT 60%",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Ilbi Throwing-Stars"
    ],
    "starsClaws": "Ilbi & Dark Scarab",
    "hiddenPortal": {
      "hasPortal": true,
      "parentMap": "Aqua Road: The Sharp Unknown (מעמקי התהום החדה באקווה רואד)",
      "targetMap": "The Cave of Pianus (מערת פיאנוס במעמקי הים)",
      "landmark": "סדק תת-ימי שחור בין שתי שוניות אלמוגים זוהרות באור ירקרק",
      "landmarkIcon": "🐟",
      "coordinates": "בקרקעית הים בפינה הימנית-תחתונה ביותר של התהום",
      "howToEnter": "שחה עד לקרקעית הימנית הקיצונית, עמוד מול הסדק השחור ולחץ [↑ חץ למעלה].",
      "warningTip": "בתוך המערה יש מערה שמאלית ומערה ימנית (לפיאנוס ימני ושמאלי). זהירות מהפצצות הנופלות!",
      "miniMap": {
        "theme": "aqua",
        "themeName": "תהום מעמקי הים (Aqua Road Abyss)",
        "platforms": [
          {
            "x": 15,
            "y": 30,
            "w": 40,
            "h": 6,
            "label": "שונית אלמוגים עליונה"
          },
          {
            "x": 55,
            "y": 48,
            "w": 35,
            "h": 6,
            "label": "שונית ימין"
          },
          {
            "x": 20,
            "y": 68,
            "w": 45,
            "h": 6,
            "label": "אלמוג תחתון"
          },
          {
            "x": 0,
            "y": 90,
            "w": 100,
            "h": 10,
            "label": "קרקעית התהום"
          }
        ],
        "ropes": [],
        "portalSpot": {
          "x": 88,
          "y": 86,
          "icon": "🕳️",
          "name": "סדק שונית שחור (Cave of Pianus)"
        },
        "spawnSpot": {
          "x": 10,
          "y": 25,
          "name": "שחייה ממזרח התהום"
        }
      }
    },
    "meowDbUrl": "https://meowdb.com/msclassic?search=Pianus",
    "verifiedDrops": []
  },
  {
    "id": "skelegon",
    "name": "Skelegon",
    "nameHe": "Skelegon",
    "level": 110,
    "hp": 80000,
    "mp": 800,
    "exp": 3800,
    "icon": "🦖",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "The Dragon Nest Left Behind",
      "Destroyed Dragon Nest"
    ],
    "directions": [
      "From Leafre: Pass Wyvern's Nest -> enter The Dragon Nest Left Behind (legendary endgame training map!)."
    ],
    "safeSpots": "The top hanging rope trick! Hang on the upper horizontal ropes and snipe down with Triple Throw / Lucky Seven. Massive EXP and drops.",
    "notableDrops": [
      "Dragon Bone",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve (Lv. 110 Claw)",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Purple Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Skelegon",
    "verifiedDrops": []
  },
  {
    "id": "regret-guardian",
    "name": "Regret Guardian",
    "nameHe": "Regret Guardian",
    "level": 110,
    "hp": 82000,
    "mp": 800,
    "exp": 3900,
    "icon": "🛡️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Road of Regrets 3"
    ],
    "directions": [
      "From Road of Regrets 2: Advance to Road of Regrets 3."
    ],
    "safeSpots": "Stand on upper icy ledges.",
    "notableDrops": [
      "Regret Guardian Shield",
      "Scroll for Cape for DEX 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Regret%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "targa",
    "name": "Targa",
    "nameHe": "Targa",
    "level": 110,
    "hp": 25000000,
    "mp": 800000,
    "exp": 1100000,
    "icon": "🧸",
    "category": "Boss",
    "town": "Malaysia / Fantasy Theme Park",
    "locations": [
      "Fantasy Theme Park: Entrance to Spooky World"
    ],
    "directions": [
      "From Malaysia: Take bus to Fantasy Theme Park -> enter Spooky World boss arena."
    ],
    "safeSpots": "Stay on the upper roller coaster tracks. Targa rolls forward with massive physical hitboxes; jump-throw continuously.",
    "notableDrops": [
      "Targa Hat (כובע טארגה המפורסם עם תוספות סטטים אדירות)",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Targa Hat & Hwabi",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Targa",
    "verifiedDrops": []
  },
  {
    "id": "scarlion-boss",
    "name": "Scarlion Boss",
    "nameHe": "Scarlion Boss",
    "level": 110,
    "hp": 25000000,
    "mp": 800000,
    "exp": 1100000,
    "icon": "🦁",
    "category": "Boss",
    "town": "Malaysia / Fantasy Theme Park",
    "locations": [
      "Fantasy Theme Park: Entrance to Spooky World"
    ],
    "directions": [
      "From Malaysia: Fantasy Theme Park -> Spooky World (co-boss with Targa)."
    ],
    "safeSpots": "Use upper coaster tracks. Casts 1/1 and stuns; jump-throw with Haste and Shadow Partner.",
    "notableDrops": [
      "Scarlion Hat (כובע סקארליון המבוקש עם DEX/LUK גבוהים)",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Scarlion Hat & Hwabi",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Scarlion%20Boss",
    "verifiedDrops": []
  },
  {
    "id": "skelosaurus",
    "name": "Skelosaurus",
    "nameHe": "Skelosaurus",
    "level": 113,
    "hp": 88000,
    "mp": 880,
    "exp": 4400,
    "icon": "🦖",
    "category": "71+",
    "town": "Leafre",
    "locations": [
      "Destroyed Dragon Nest"
    ],
    "directions": [
      "From Leafre: Dragon Nest Left Behind -> Destroyed Dragon Nest."
    ],
    "safeSpots": "Rope hang on the top ropes. Skelosaurus has an earthquake stomp and poison breath, but cannot hit hanging Assassins.",
    "notableDrops": [
      "Dragon Skull",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Purple Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Skelosaurus",
    "verifiedDrops": []
  },
  {
    "id": "chief-regret-guardian",
    "name": "Chief Regret Guardian",
    "nameHe": "Chief Regret Guardian",
    "level": 113,
    "hp": 90000,
    "mp": 880,
    "exp": 4500,
    "icon": "🛡️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Road of Regrets 4"
    ],
    "directions": [
      "From Road of Regrets 3: Enter portal to Road of Regrets 4."
    ],
    "safeSpots": "Rope hang and snipe across platforms.",
    "notableDrops": [
      "Chief Regret Helm",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chief%20Regret%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "oblivion-monk",
    "name": "Oblivion Monk",
    "nameHe": "Oblivion Monk",
    "level": 115,
    "hp": 95000,
    "mp": 920,
    "exp": 4900,
    "icon": "🧘",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Road to Oblivion: Oblivion Lane 1"
    ],
    "directions": [
      "From Road of Regrets 5: Defeat Lilynouch -> pass through Flaming Gate into Oblivion Lane 1."
    ],
    "safeSpots": "Stand on fiery marble arches.",
    "notableDrops": [
      "Oblivion Mask",
      "Scroll for Overall Armor for DEX 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Oblivion%20Monk",
    "verifiedDrops": []
  },
  {
    "id": "lilynouch",
    "name": "Lilynouch",
    "nameHe": "Lilynouch",
    "level": 118,
    "hp": 4500000,
    "mp": 20000,
    "exp": 220000,
    "icon": "🗿",
    "category": "Boss",
    "town": "Temple of Time",
    "locations": [
      "Road of Regrets 5 (בוס דרך החרטה)"
    ],
    "directions": [
      "From Road of Regrets 4: Enter portal to Road of Regrets 5."
    ],
    "safeSpots": "Stand on the ice pillars. Lilynouch casts ice spikes and physical reflection! Stop attacking immediately when its shield glows.",
    "notableDrops": [
      "Lilynouch Crown",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lilynouch",
    "verifiedDrops": []
  },
  {
    "id": "oblivion-monk-trainee",
    "name": "Oblivion Monk Trainee",
    "nameHe": "Oblivion Monk Trainee",
    "level": 118,
    "hp": 102000,
    "mp": 980,
    "exp": 5400,
    "icon": "🧘",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Oblivion Lane 2"
    ],
    "directions": [
      "From Oblivion Lane 1: Enter portal to Oblivion Lane 2."
    ],
    "safeSpots": "Elevated flame ledges allow safe distance.",
    "notableDrops": [
      "Flame Shard",
      "Scroll for Cape for DEX 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Oblivion%20Monk%20Trainee",
    "verifiedDrops": []
  },
  {
    "id": "oblivion-guardian",
    "name": "Oblivion Guardian",
    "nameHe": "Oblivion Guardian",
    "level": 122,
    "hp": 112000,
    "mp": 1050,
    "exp": 6200,
    "icon": "🛡️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Oblivion Lane 3"
    ],
    "directions": [
      "From Oblivion Lane 2: Advance to Oblivion Lane 3."
    ],
    "safeSpots": "Stand on upper stone columns.",
    "notableDrops": [
      "Oblivion Shield",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Claw ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Oblivion%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "papulatus",
    "name": "Papulatus",
    "nameHe": "Papulatus",
    "level": 125,
    "hp": 2050000,
    "mp": 20000,
    "exp": 1310000,
    "icon": "🕰️",
    "category": "Boss",
    "town": "Ludibrium",
    "locations": [
      "Origin of Clocktower (מרכז שעון הזמן בלודיבריום)"
    ],
    "directions": [
      "From Ludibrium: Deep Clocktower -> enter the central gate into Origin of Clocktower (requires Piece of Cracked Dimension from Flo)."
    ],
    "safeSpots": "Climb the top ladders when Papulatus uses 1/1 and earthquake attacks. Phase 1 has 2.05M HP; Phase 2 ejects a fast flying pilot clock with 1.59M HP.",
    "notableDrops": [
      "Papulatus Certificate",
      "Scroll for Cape for DEX 60%",
      "Scroll for Gloves for ATT 60%",
      "Dark Scarab",
      "Ilbi Throwing-Stars"
    ],
    "starsClaws": "Ilbi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Papulatus",
    "verifiedDrops": []
  },
  {
    "id": "chief-oblivion-guardian",
    "name": "Chief Oblivion Guardian",
    "nameHe": "Chief Oblivion Guardian",
    "level": 125,
    "hp": 120000,
    "mp": 1120,
    "exp": 7000,
    "icon": "🛡️",
    "category": "71+",
    "town": "Temple of Time",
    "locations": [
      "Oblivion Lane 4"
    ],
    "directions": [
      "From Oblivion Lane 3: Enter portal to Oblivion Lane 4."
    ],
    "safeSpots": "Rope snipe and jump-throw.",
    "notableDrops": [
      "Chief Oblivion Crown",
      "Scroll for Gloves for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Gloves ATT 60%",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Chief%20Oblivion%20Guardian",
    "verifiedDrops": []
  },
  {
    "id": "lyka",
    "name": "Lyka",
    "nameHe": "Lyka",
    "level": 130,
    "hp": 6200000,
    "mp": 25000,
    "exp": 310000,
    "icon": "🐂",
    "category": "Boss",
    "town": "Temple of Time",
    "locations": [
      "Oblivion Lane 5 (בוס דרך השכחה)"
    ],
    "directions": [
      "From Oblivion Lane 4: Enter portal to Oblivion Lane 5."
    ],
    "safeSpots": "Stand on the upper flame pedestals. Lyka casts Seduce and 1/1 attacks! Keep Bishop/Hermit smoke or high dodge active.",
    "notableDrops": [
      "Lyka Horn",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Hwabi & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Lyka",
    "verifiedDrops": []
  },
  {
    "id": "zakum",
    "name": "Zakum (בוס העל האגדי)",
    "nameHe": "זאקום (הבוס המפורסם ביותר בתולדות מייפל סטורי!)",
    "level": 140,
    "hp": 66000000,
    "mp": 500000,
    "exp": 1200000,
    "icon": "🗿",
    "category": "bosses",
    "town": "El Nath: Zakum Altar",
    "locations": [
      "Zakum's Altar (מזבח זאקום בעומק מכרה המוות באל נאת')"
    ],
    "directions": [
      "השלם את שלושת חלקי ה-Zakum Quest באל נאת' אצל Adobis.",
      "אסוף Eye of Fire, הקרב אותו על המזבח במרכז החדר לזימון זאקום ו-8 זרועותיו!"
    ],
    "safeSpots": "עמוד על הפלטפורמות בצדדים עם Haste ו-Dark Sight. מתנקשים והרמיטים הם הכוכבים הראשיים של הרייד לחיסול הזרועות העליונות!",
    "notableDrops": [
      "Zakum Helmet (+15 לכל הסטטים!)",
      "Ilbi Throwing-Stars",
      "Skillbooks",
      "Scroll for Gloves for ATT 60%"
    ],
    "starsClaws": "Zakum Helmet & Ilbi",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Zakum%20(%D7%91%D7%95%D7%A1%20%D7%94%D7%A2%D7%9C%20%D7%94%D7%90%D7%92%D7%93%D7%99)",
    "verifiedDrops": []
  },
  {
    "id": "horntail",
    "name": "Horntail",
    "nameHe": "Horntail",
    "level": 160,
    "hp": 275000000,
    "mp": 2000000,
    "exp": 14500000,
    "icon": "🐉",
    "category": "Boss",
    "town": "Leafre",
    "locations": [
      "Cave of Horntail (מערת הורנטייל האגדית)"
    ],
    "directions": [
      "From Leafre: Travel to the deepest reaches of Minar Forest -> Cave of Life -> requires Certificate of the Dragon Squad to enter the Cave of Horntail."
    ],
    "safeSpots": "Night Lords operate from the middle-right and upper platforms. Keep Shadow Shifter and Frailty Curse active. Avoid the tail swipe which deals 20,000+ damage!",
    "notableDrops": [
      "Horntail Necklace (שרשרת הורנטייל האגדית)",
      "Egg of Nine Spirit",
      "Scroll for Claw for ATT 60%",
      "Dragon Purple Sleeve",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Horntail Necklace & Dragon Sleeve",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Horntail",
    "verifiedDrops": []
  },
  {
    "id": "pink-bean",
    "name": "Pink Bean",
    "nameHe": "Pink Bean",
    "level": 180,
    "hp": 2100000000,
    "mp": 5000000,
    "exp": 50000000,
    "icon": "💖",
    "category": "Boss",
    "town": "Temple of Time",
    "locations": [
      "Twilight of the Gods (דמדומי האלים - הבוס האולטימטיבי)"
    ],
    "directions": [
      "From Oblivion Lane 5: Defeat Lyka -> enter the Hall of Pink Bean -> Twilight of the Gods."
    ],
    "safeSpots": "Stand on the side statue platforms. Five goddess statues must be defeated before Pink Bean descends. Watch out for Damage Reflection, 1/1, Seduce, and Genesis!",
    "notableDrops": [
      "Pink Bean Hat",
      "Pink Bean Suit",
      "Timeless Weapons (נשקי טיימלס הטובים ביותר במשחק)",
      "Hwabi Throwing-Stars"
    ],
    "starsClaws": "Timeless Weapons & Hwabi",
    "meowDbUrl": "https://meowdb.com/msclassic?search=Pink%20Bean",
    "verifiedDrops": []
  },
  {
    "id": "crimson-balrog",
    "name": "Crimson Balrog",
    "nameHe": "קרימזון בלרוג (הבוס המעופף של הספינה)",
    "level": 100,
    "hp": 100000,
    "mp": 1200,
    "exp": 3500,
    "icon": "👹",
    "category": "boss",
    "town": "Victoria to Orbis Ship",
    "locations": [
      "On the way to Orbis (Ship Airspace)"
    ],
    "directions": [
      "עלה על הספינה ששטה מאליניה (Ellinia) לכיוון אורביס (Orbis).",
      "באמצע ההפלגה (לאחר כ-5 דקות) השמיים יחשיכו ומוזיקת אימה תחל להתנגן.",
      "קרימזון בלרוג ינחת על סיפון הספינה ויתקוף בעוצמה!"
    ],
    "safeSpots": "רד מיד לתוך תא הנוסעים של הספינה (Ship Cabin) כדי להישאר מוגן לחלוטין!",
    "notableDrops": [
      "Balrog Wings",
      "Scroll for Gloves for ATT 60%",
      "Ilbi Throwing-Stars",
      "Dark Hinkel",
      "Red Katana"
    ],
    "starsClaws": "Ilbi Throwing-Stars (+27 ATT) נדירים ביותר!",
    "verifiedDrops": [
      {
        "item": "Ilbi Throwing-Stars",
        "chance": "0.01%",
        "type": "use"
      },
      {
        "item": "Scroll for Gloves for ATT 60%",
        "chance": "0.1%",
        "type": "scroll"
      },
      {
        "item": "Dark Hinkel",
        "chance": "0.2%",
        "type": "equip"
      }
    ],
    "visualRoute": {
      "town": "Ellinia",
      "waypoints": [
        "Ellinia Station",
        "Ship to Orbis",
        "Mid-Flight Airspace"
      ],
      "destinationMap": "On the way to Orbis",
      "radarNotes": "היזהר! תקיפות קסם AoE הרסניות שמורידות 2000+ HP במכה אחת."
    }
  },
  {
    "id": "zakum",
    "name": "Zakum",
    "nameHe": "זאקום (Zakum - בוס הר הגעש האגדי)",
    "level": 140,
    "hp": 66000000,
    "mp": 300000,
    "exp": 8400000,
    "icon": "🌋",
    "category": "boss",
    "town": "El Nath",
    "locations": [
      "Zakum's Altar (Dead Mine)"
    ],
    "directions": [
      "הגע לעיר אל נאת' (El Nath) וצא ימינה לכיוון הרי השלג והמכרות.",
      "עבור דרך Dead Mine אל תוך מערת הלבה The Cave of Trial.",
      "דבר עם Adobis והשלם את שלושת שלבי ה-Zakum Prequest כדי להשיג Eye of Fire.",
      "השלך את ה-Eye of Fire על המזבח במרכז החדר כדי לזמן את זאקום!"
    ],
    "safeSpots": "עמוד על הפלטפורמות הגבוהות ביותר משני צידי המזבח, אך היזהר מנפילת נטיפי לבה מהתקרה.",
    "notableDrops": [
      "Zakum Helmet",
      "Skill Books (עבודה 4)",
      "Dark Hinkel",
      "Tobi Throwing-Stars",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Zakum Helmet (+15 לכל הסטטים!)",
    "verifiedDrops": [
      {
        "item": "Zakum Helmet",
        "chance": "100%",
        "type": "equip"
      },
      {
        "item": "Steely Throwing-Stars",
        "chance": "5%",
        "type": "use"
      },
      {
        "item": "Scroll for Helmet DEF 60%",
        "chance": "15%",
        "type": "scroll"
      }
    ],
    "visualRoute": {
      "town": "El Nath",
      "waypoints": [
        "El Nath",
        "Dead Mine",
        "Cave of Trial",
        "Zakum's Altar"
      ],
      "destinationMap": "Zakum's Altar",
      "radarNotes": "דורש קבוצה מתואמת (Expedition) עם Priest ל-Dispel ו-Bishop ל-Resurrection."
    }
  },
  {
    "id": "stumpy",
    "name": "Stumpy",
    "nameHe": "סטאמפי (Stumpy - גזע העץ העתיק)",
    "level": 35,
    "hp": 7500,
    "mp": 150,
    "exp": 450,
    "icon": "🪵",
    "category": "boss",
    "classicPatch": "v1.0.0 (Oct 2026): בוס שדה חדש שהתווסף בהשקה עם אזור החפירות (Excavation Site) בפריון!",
    "town": "Perion",
    "locations": [
      "Excavation Site: Relic Excavation (אתר החפירות הארכיאולוגי)",
      "East Rocky Mountain V (ההר הסלעי בפריון)",
      "East Rocky Mountain VII"
    ],
    "directions": [
      "צא מהעיר פריון מזרחה דרך Rocky Mountain.",
      "טפס מעלה עד למפה East Rocky Mountain VII.",
      "סטאמפי מופיע בקומה העליונה של המפה סביב עצי הבוציץ."
    ],
    "safeSpots": "עמוד על המדרגה התחתונה וזרוק כוכבים או חצים מלמטה, מעבר לטווח הפגיעה שלו.",
    "notableDrops": [
      "Stumpy's Branch",
      "Meba",
      "Scroll for Overall Armor DEX 60%"
    ],
    "starsClaws": "כפפת Meba נדירה עם אפשרות לסטטים מוגברים",
    "verifiedDrops": [
      {
        "item": "Meba",
        "chance": "2%",
        "type": "equip"
      },
      {
        "item": "Scroll for Overall Armor DEX 60%",
        "chance": "0.5%",
        "type": "scroll"
      }
    ]
  },
  {
    "id": "zeno",
    "name": "Zeno",
    "nameHe": "זנו (Zeno - רובוט הקרב של החייזרים)",
    "level": 65,
    "hp": 120000,
    "mp": 500,
    "exp": 2800,
    "icon": "🤖",
    "category": "boss",
    "town": "Omega Sector",
    "locations": [
      "Silo / Kulan Field V"
    ],
    "directions": [
      "הגע לבסיס אומגה סקטור (Omega Sector) וצא מערבה אל אזור שדות קולן (Kulan Field).",
      "התקדם אל Kulan Field V שם מתרסקים צלחות מעופפות.",
      "זנו מפטרל במרכז המפה ויורה טילים וחשמל."
    ],
    "safeSpots": "עמוד על הפלטפורמה העליונה של ספינת החייזרים ההרוסה.",
    "notableDrops": [
      "Zeno's Ring",
      "Scroll for Shoes Jump 60%",
      "Steely Throwing-Stars"
    ],
    "starsClaws": "Steely Throwing-Stars (+25 ATT)",
    "verifiedDrops": [
      {
        "item": "Steely Throwing-Stars",
        "chance": "0.5%",
        "type": "use"
      }
    ]
  },
  {
    "id": "timer",
    "name": "Timer",
    "nameHe": "טיימר (Timer - שעון הקוקייה האגדי)",
    "level": 59,
    "hp": 85000,
    "mp": 400,
    "exp": 1950,
    "icon": "🕰️",
    "category": "boss",
    "town": "Ludibrium",
    "locations": [
      "Lost Time <2> (Clocktower)"
    ],
    "directions": [
      "רד במגדל השעון בלודיבריום אל אזור ה-Chronos.",
      "היכנס למפה Lost Time 2.",
      "טיימר מופיע בראש ענף השעון כציפור מכנית גדולה המטילה ביצי זמן."
    ],
    "safeSpots": "פלטפורמת הפנדולום העליונה משמאל.",
    "notableDrops": [
      "Timer's Egg",
      "Scroll for Gloves for ATT 60%",
      "Korean Fan"
    ],
    "starsClaws": "Scroll for Gloves for ATT 60% ששווה הון!",
    "verifiedDrops": [
      {
        "item": "Scroll for Gloves for ATT 60%",
        "chance": "1%",
        "type": "scroll"
      }
    ]
  },
  {
    "id": "frankenroid",
    "name": "Frankenroid",
    "nameHe": "פרנקנרואיד (בוס מעבדת מגטיה)",
    "level": 81,
    "hp": 250000,
    "mp": 800,
    "exp": 6200,
    "icon": "🧟‍♂️",
    "category": "boss",
    "town": "Magatia",
    "locations": [
      "Magatia Lab: Unit 202"
    ],
    "directions": [
      "הגע לעיר האלכימאים מגטיה במדבר ניהל (Nihal Desert).",
      "היכנס למעבדת Zenumist או Alcadno.",
      "פרנקנרואיד מזומן בחדר הניסויים המרכזי."
    ],
    "safeSpots": "צינורות המעבדה התלויים מלמעלה.",
    "notableDrops": [
      "Frankenroid Heart",
      "Scroll for Cape for LUK 60%",
      "Dark Slain"
    ],
    "starsClaws": "Dark Slain לרמה 70",
    "verifiedDrops": [
      {
        "item": "Scroll for Cape for LUK 60%",
        "chance": "1%",
        "type": "scroll"
      }
    ]
  },
  {
    "id": "skelesaurus",
    "name": "Skelesaurus",
    "nameHe": "סקילזאורוס (דינוזאור השלד הקטלני)",
    "level": 113,
    "hp": 92000,
    "mp": 350,
    "exp": 4750,
    "icon": "🦖",
    "category": "leafre",
    "town": "Leafre",
    "locations": [
      "Leafre: The Dragon Nest Left Behind"
    ],
    "directions": [
      "צא מליפרה מזרחה עמוק אל נקיקי הדרקונים.",
      "הגע אל המפה The Dragon Nest Left Behind.",
      "סקילזאורוס הוא מוקד האימונים המפורסם ביותר ברמות 100-140 (Skele Leech)!"
    ],
    "safeSpots": "סולמות העץ והחבלים התלויים בין מפלסי העצמות.",
    "notableDrops": [
      "Dragon Scale",
      "Scroll for Claw ATT 60%",
      "Dark Kage",
      "Tobi Throwing-Stars"
    ],
    "starsClaws": "Scroll for Claw ATT 60% וכוכבי זריקה Tobi",
    "verifiedDrops": [
      {
        "item": "Scroll for Claw ATT 60%",
        "chance": "0.2%",
        "type": "scroll"
      },
      {
        "item": "Tobi Throwing-Stars",
        "chance": "0.3%",
        "type": "use"
      }
    ]
  },
  {
    "id": "viking",
    "name": "Viking",
    "nameHe": "ויקינג (ספינת הצעצוע המרחפת)",
    "level": 93,
    "hp": 45000,
    "mp": 220,
    "exp": 2600,
    "icon": "⛵",
    "category": "ludibrium",
    "town": "Ludibrium",
    "locations": [
      "Warpped Path of Time <4>"
    ],
    "directions": [
      "רד למעמקי מגדל השעון בלודיבריום אל השבילים המעוותים (Warped Path of Time).",
      "ויקינג מרחף בספינת צעצוע מעופפת ויורה תותחים קטנים."
    ],
    "safeSpots": "עמוד על גבי מדרגות השעון מחוץ לטווח התותח.",
    "notableDrops": [
      "Viking Sail",
      "Scroll for Cape for LUK 60%",
      "Dark Hinkel"
    ],
    "starsClaws": "Dark Hinkel לרמה 70",
    "verifiedDrops": [
      {
        "item": "Dark Hinkel",
        "chance": "0.1%",
        "type": "equip"
      }
    ]
  },
  {
    "id": "duku",
    "name": "Duku",
    "nameHe": "דוקו (Duku - שד העץ של יער אולו)",
    "level": 135,
    "hp": 1200000,
    "mp": 2000,
    "exp": 18500,
    "icon": "🌳",
    "category": "singapore",
    "town": "Singapore / Ulu City",
    "locations": [
      "Ulu City: Ulu Estate II"
    ],
    "directions": [
      "הגע לעיר סינגפור וצא אל אזור Ulu City המקולל.",
      "עבור אל Ulu Estate II.",
      "דוקו הוא גזע עץ ענק ואחד ממוקדי ה-Leech המפורסמים ביותר!"
    ],
    "safeSpots": "פלטפורמות הבניין השבור משמאל.",
    "notableDrops": [
      "Duku Soul",
      "White Scroll",
      "Scroll for Claw ATT 60%",
      "Dragon Claw"
    ],
    "starsClaws": "Dragon Claw לרמה 110",
    "verifiedDrops": [
      {
        "item": "White Scroll",
        "chance": "0.01%",
        "type": "scroll"
      },
      {
        "item": "Scroll for Claw ATT 60%",
        "chance": "0.5%",
        "type": "scroll"
      }
    ]
  }
];


export const MONSTERS_DATABASE = RAW_MONSTERS_DATABASE.map(m => {
  const asset = MONSTER_ASSETS_MAP[m.id] || {};
  return {
    ...m,
    wzId: m.wzId || asset.wzId,
    animUrl: m.animUrl || asset.animUrl,
    spriteUrl: m.spriteUrl || asset.spriteUrl,
    renderUrl: m.renderUrl || asset.renderUrl,
    meowDbUrl: m.meowDbUrl || asset.meowDbUrl,
  };
});
