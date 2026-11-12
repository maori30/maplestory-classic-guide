import { NPC_ASSETS_MAP } from './npcAssets.js';

// MapleStory Pre-BigBang NPCs Database (Locations, Travel Directions & Services)
// Total NPCs: 143 (Comprehensive Pre-BigBang Victoria Island, Ossyria, Ludibrium & Deep Dungeons)
const RAW_NPCS_DATABASE = [
  {
    "id": "dark-lord",
    "name": "Dark Lord",
    "nameHe": "דארק לורד (מדריך הגנבים הראשי)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Kerning City",
    "map": "Thieves' Hideout (מרתף הבר בקרנינג סיטי)",
    "icon": "🥷",
    "role": "העברת עבודה ראשונה (Rogue) ועבודה שנייה (Assassin / Bandit)",
    "desc": "המנהיג האגדי של כל גנבי ויקטוריה איילנד. שוכן במרתף אפל וסודי מתחת לבר בקרנינג סיטי, מוקף במתנקשים ושומרי צללים. אצלו בוחרים את העבודה הראשונה ברמה 10 ואת העבודה השנייה לאסאסין ברמה 30.",
    "thiefRelevance": "ה-NPC החשוב ביותר בחיי הגנב שלך! ברמה 10 עם לפחות 25 DEX הוא יעניק לך את עבודת ה-Rogue ואת כפפת ה-Garnier הראשונה. ברמה 30 הוא יפתח לך את שרשרת המבחן של העבודה השנייה לקראת מעבר ל-Assassin.",
    "directions": [
      "הגע למרכז העיר קרנינג סיטי (Kerning City).",
      "חפש מבנה עם שלט ניאון בצורת בר/מועדון במרכז הרחוב.",
      "היכנס לבניין, רד בגרם המדרגות למטה אל תוך מרתף הגנבים (Thieves' Hideout).",
      "דארק לורד עומד במרכז החדר לבוש גלימת צללים שחורה."
    ],
    "servicesOrQuests": [
      {
        "title": "מעבר עבודה ראשונה (Rogue Job Advancement)",
        "desc": "הופך אותך לגנב (Rogue). מעניק SP ראשון וכפפת Garnier.",
        "reqLevel": "רמה 10 (עם לפחות 25 DEX)",
        "rewards": "מקצוע Rogue, נקודת SP ראשונה וכפפת Garnier"
      },
      {
        "title": "פתיחת מבחן עבודה שנייה (2nd Job Advancement Letter)",
        "desc": "שולח אותך עם מכתב רשמי אל בוחן הגנבים בביצות.",
        "reqLevel": "רמה 30 (עם ניצול כל ה-SP)",
        "rewards": "מכתב הפניה (Dark Lord's Letter) למבחן"
      },
      {
        "title": "קבלת עבודה שנייה: אסאסין (Assassin Job Advancement)",
        "desc": "לאחר השלמת המבחן, הענקת מקצוע אסאסין, הרחבת תיקים ופתיחת סקילי עבודה שנייה (Claw Mastery, Critical Throw ועוד).",
        "reqLevel": "רמה 30 (לאחר סיום המבחן)",
        "rewards": "עבודת Assassin, נקודת SP לעבודה שנייה והרחבת תיק"
      }
    ],
    "relatedItems": [
      "Garnier",
      "Subi Throwing-Stars",
      "Dark Lord's Letter"
    ]
  },
  {
    "id": "thief-instructor",
    "name": "Thief Job Instructor",
    "nameHe": "בוחן הגנבים בעבודה שנייה",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Kerning City",
    "map": "Swamp of Despair I (ביצות היאוש בקרנינג סיטי)",
    "icon": "🗡️",
    "role": "מנהל מבחן העבודה השנייה לאסאסין (30 Dark Marbles)",
    "desc": "השליח המיוחד של דארק לורד הממתין על גשרי העץ בביצות קרנינג סיטי. תפקידו לבחון את כישורי הקרב והזריזות של שחקנים שהגיעו לרמה 30 לפני שהם זוכים בתואר אסאסין.",
    "thiefRelevance": "ברמה 30, לאחר קבלת המכתב מדארק לורד, ניגשים אליו. הוא משגר אותך למפת מבוך מיוחדת שבה עליך לחסל מפלצות ולאסוף 30 כדורי אופל (Dark Marbles) מבלי לקבל עזרה מאחרים.",
    "directions": [
      "מקרנינג סיטי, צא דרך הפורטל הימני התחתון לכיוון הביצות (The Swamp).",
      "התקדם אל תוך המפה Swamp of Despair I.",
      "הבוחן עומד על אחת ממרפסות העץ הבולטות מעל מי הביצה."
    ],
    "servicesOrQuests": [
      {
        "title": "שיגור למפת מבחן הגנבים (Dark Marble Test)",
        "desc": "לוקח את המכתב של דארק לורד ומשגר אותך למפה מבודדת.",
        "reqLevel": "רמה 30 (עם מכתב מדארק לורד)",
        "rewards": "גישה למפת איסוף 30 כדורי אופל (Dark Marbles)"
      },
      {
        "title": "הענקת תעודת הגיבור (Proof of a Hero)",
        "desc": "לאחר הבאת 30 כדורי האופל, מעניק לך את מדליית הגיבור להחזרה לדארק לורד.",
        "reqLevel": "רמה 30 (עם 30 כדורים)",
        "rewards": "The Proof of a Hero"
      }
    ],
    "relatedItems": [
      "Dark Marble",
      "Proof of a Hero"
    ]
  },
  {
    "id": "grendel",
    "name": "Grendel the Really Old",
    "nameHe": "גרנדל הזקן (מדריך הקוסמים)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Ellinia",
    "map": "Magic Library (הספרייה הקסומה באליניה)",
    "icon": "🧙‍♂️",
    "role": "מדריך הקוסמים (Magician Job Instructor)",
    "desc": "הקוסם העתיק והחכם של ויקטוריה איילנד. יושב בצמרת הגבוהה של אליניה בתוך ספרייה מלאת קסמים ומגילות עתיקות.",
    "thiefRelevance": "חשוב לחלק מקווסטים כלליים, וכן לצפייה והיכרות עם צמרת אליניה.",
    "directions": [
      "הגע לעיר היער אליניה (Ellinia).",
      "טפס במעלה העץ הענקי בעזרת החבלים והפורטלים עד למפלס העליון ביותר.",
      "היכנס לפורטל העליון המוביל אל הספרייה הקסומה (Magic Library)."
    ],
    "servicesOrQuests": [
      {
        "title": "מעבר עבודה לקוסם (Magician Job Advancement)",
        "desc": "מעבר עבודה לקוסמים ברמה 8 עם 20 INT.",
        "reqLevel": "רמה 8+",
        "rewards": "עבודת Magician"
      }
    ],
    "relatedItems": [
      "Wizard Potion",
      "Wooden Wand"
    ]
  },
  {
    "id": "dances-with-balrog",
    "name": "Dances with Balrog",
    "nameHe": "רוקד עם באלרוג (מדריך הלוחמים)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Perion",
    "map": "Warriors' Sanctuary (מקדש הלוחמים בפריון)",
    "icon": "🛡️",
    "role": "מדריך הלוחמים (Warrior Job Instructor)",
    "desc": "הצ'יף הלוחם של שבט פריון. יושב בראש הרכס הסלעי של פריון בתוך אוהל עור ענק ומנחה את כל הלוחמים בויקטוריה איילנד.",
    "thiefRelevance": "מנהיג פריון. קשור למספר משימות של עולם מייפל סטורי.",
    "directions": [
      "הגע לעיר ההרים פריון (Perion).",
      "טפס דרך סולמות העץ והצוקים אל המפלס הגבוה ביותר של העיר.",
      "היכנס לאוהל המרכזי הענק המסומן בשלט לוחם (Warriors' Sanctuary)."
    ],
    "servicesOrQuests": [
      {
        "title": "מעבר עבודה ללוחם (Warrior Job Advancement)",
        "desc": "הפיכה ללוחם ברמה 10 עם 35 STR.",
        "reqLevel": "רמה 10+",
        "rewards": "עבודת Warrior"
      }
    ],
    "relatedItems": [
      "Warrior Potion",
      "Sword"
    ]
  },
  {
    "id": "athena-pierce",
    "name": "Athena Pierce",
    "nameHe": "אתנה פירס (מדריכת הקשתים)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Henesys",
    "map": "Bowman Instructional School (בית ספר לקשתים בהנסיס)",
    "icon": "🏹",
    "role": "מדריכת הקשתים (Bowman Job Instructor)",
    "desc": "הקשתית המפורסמת ביותר של עולם מייפל. מאמנת ומדריכה קשתים במועדון המוסתר מתחת לפטריות במזרח הנסיס.",
    "thiefRelevance": "קשתים וגנבים חולקים ציוד וצירי אימון דומים (כמו חזירי בר בפריון ו-KPQ).",
    "directions": [
      "הגע לעיר הפטריות הנסיס (Henesys).",
      "צעד ימינה עד קצה העיר, ליד הפורטל לכיוון Henesys East Forest.",
      "רד במדרגות אל תוך המבנה המקושת מתחת לאדמה."
    ],
    "servicesOrQuests": [
      {
        "title": "מעבר עבודה לקשת (Bowman Job Advancement)",
        "desc": "הפיכה לקשת ברמה 10 עם 25 DEX.",
        "reqLevel": "רמה 10+",
        "rewards": "עבודת Bowman"
      }
    ],
    "relatedItems": [
      "Arrows",
      "Bow"
    ]
  },
  {
    "id": "lakelis",
    "name": "Lakelis",
    "nameHe": "לקליס (מנהלת ה-KPQ בקרנינג סיטי)",
    "category": "pq",
    "categoryName": "משימות קבוצתיות (PQ)",
    "town": "Kerning City",
    "map": "Kerning City (פתח הרכבת התחתית)",
    "icon": "👑",
    "role": "מנהלת Kerning City Party Quest (רמות 21-30)",
    "desc": "הדמות המפורסמת ביותר ברחובות קרנינג סיטי! עומדת ממש ליד תחנת הרכבת התחתית. מנהיג קבוצה ברמות 21-30 שוחח איתה כדי להכניס את הקבוצה למשימת KPQ כדי להילחם בסליימים, בתנינים ובבוס King Slime.",
    "thiefRelevance": "מרכז החיים שלך ברמות 21-30! אסאסינים מבוקשים בטירוף ב-KPQ בגלל הנזק הגבוה והממוקד של Lucky Seven על קינג סלים וליגטורים. כאן משיגים את נעלי הסקווישי (Squishy Shoes) ומגילות 60% יקרות.",
    "directions": [
      "הגע למרכז העיר קרנינג סיטי.",
      "חפש את מבנה תחנת הרכבת התחתית (Subway Station) במרכז המפה.",
      "לקליס עומדת ממש בצד ימין של דלת הכניסה לרכבת, לבושה ז'קט אדום."
    ],
    "servicesOrQuests": [
      {
        "title": "כניסה למשימת קרנינג (Enter Kerning PQ)",
        "desc": "קבוצה של 4 שחקנים (רמות 21-30). מנהיג הקבוצה לוחץ עליה בהקדם כדי לתפוס את הערוץ (Track).",
        "reqLevel": "רמות 21-30",
        "rewards": "עשרות אלפי EXP, נעלי Squishy Shoes, מגילות 60%, עפרות ושיקויים"
      }
    ],
    "relatedItems": [
      "Squishy Shoes",
      "Scroll for Overall Armor for DEX 60%",
      "Pure Water"
    ]
  },
  {
    "id": "chrishrama",
    "name": "Chrishrama",
    "nameHe": "קרישראמה (הנזיר בסאונה בסליפיווד)",
    "category": "shops",
    "categoryName": "חנויות, שיקויים וסאונה",
    "town": "Sleepywood",
    "map": "Sleepywood Hotel: Regular & VIP Sauna",
    "icon": "💧",
    "role": "מוכר Pure Water וחלוקי סאונה (Sauna Robe)",
    "desc": "נזיר עתיק המנהל את בית המרחץ והסאונה במלון סליפיווד. מוכר את השיקוי המבוקש ביותר בהיסטוריה של מייפל סטורי — Pure Water (משחזר 800 MP ב-1,650 מזו בלבד), וכן את חלוקי הסאונה המפורסמים (+10 Speed ו-10 סלוטים לשחקני Dexless).",
    "thiefRelevance": "ה-NPC המסחרי החשוב ביותר למתנקשים! כל אסאסין מגיע אליו כדי להצטייד במאות בקבוקי Pure Water (חיסכון אדיר במסוס מול Mana Elixir) ולקנות Bathrobe לשדרוג במגילות Overall DEX/LUK.",
    "directions": [
      "הגע לעיירה סליפיווד (Sleepywood) במרכז ויקטוריה איילנד.",
      "היכנס למבנה המלון במרכז העיר (Sleepywood Hotel).",
      "שוחח עם פקיד הקבלה ובחר להיכנס ל-VIP Sauna (עלות של 999 מזו).",
      "בתוך הסאונה, קרישראמה עומד במרכז החדר לבוש גלימת נזיר."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת מים טהורים (Pure Water)",
        "desc": "משחזר 800 MP מיידית. יחס MP למזו הטוב ביותר במשחק.",
        "reqLevel": "ללא הגבלה",
        "rewards": "מחיר: 1,650 Mesos ליחידה"
      },
      {
        "title": "מכירת חלוק סאונה (Sauna Robe / Bathrobe)",
        "desc": "מעניק +10 מהירות ו-10 סלוטים לשדרוג לשחקני Dexless.",
        "reqLevel": "רמה 20+",
        "rewards": "מחיר: 30,000 Mesos"
      }
    ],
    "relatedItems": [
      "Pure Water",
      "Sauna Robe (Bathrobe)",
      "White Potion"
    ]
  },
  {
    "id": "perion-potion-merchant",
    "name": "Perion Potion Merchant",
    "nameHe": "סוחר השיקויים בפריון (Warrior Potion)",
    "category": "shops",
    "categoryName": "חנויות, שיקויים וסאונה",
    "town": "Perion",
    "map": "Perion Potion Shop (חנות השיקויים בפריון)",
    "icon": "🍷",
    "role": "מוכר שיקוי לוחם (+5 Weapon ATT ב-500 מזו)",
    "desc": "הסוחר בחנות השיקויים במרכז פריון. ייחודי בכך שהוא מוכר את ה-Warrior Potion ב-500 מזו בלבד, שמעלה +5 Weapon Attack למשך 3 דקות.",
    "thiefRelevance": "טריק סודי של מתנקשים מקצועיים: קונים אצלו עשרות בקבוקי Warrior Potion. שתיית בקבוק כל 3 דקות מעלה את הנזק של Lucky Seven פי כמה ברמות 10-30!",
    "directions": [
      "הגע לעיר פריון (Perion).",
      "רד אל המפלס האמצעי של העיר, חפש שלט עם ציור של בקבוק שיקוי.",
      "היכנס לחנות השיקויים ושוחח עם הסוחר."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת שיקוי לוחם (Warrior Potion)",
        "desc": "תוספת של +5 Weapon Attack ל-3 דקות.",
        "reqLevel": "רמה 1+",
        "rewards": "מחיר: 500 Mesos בלבד"
      }
    ],
    "relatedItems": [
      "Warrior Potion",
      "White Potion",
      "Mana Elixir"
    ]
  },
  {
    "id": "alcaster",
    "name": "Alcaster",
    "nameHe": "אלקסטר הנביא הזקן",
    "category": "shops",
    "categoryName": "חנויות, שיקויים וסאונה",
    "town": "El Nath",
    "map": "Alcaster's House (אל נאט - בית אלקסטר)",
    "icon": "✨",
    "role": "מוכר All Cure Potions, Holy Water ומגילות נדירות",
    "desc": "הנביא והקוסם הבכיר של הרי השלג באל נאט. לאחר השלמת שרשרת הקווסטים המפורסמת שלו (רמה 60), הוא פותח חנות מיוחדת ומוכר שיקויי All Cure ב-400 מזו בלבד, אבני קסם ומגילות.",
    "thiefRelevance": "המקור הזול והאמין ביותר בעולם מייפל סטורי לרכישת All Cure Potions (ריפוי רעל, חושך והשתקה).",
    "directions": [
      "קח ספינה מאורביס אל אל נאט (El Nath).",
      "בעיר אל נאט, צעד ימינה דרך השוק המושלג עד סוף העיר.",
      "היכנס לבית העץ המושלג של אלקסטר בצד ימין."
    ],
    "servicesOrQuests": [
      {
        "title": "קווסט אבן הקודש (Holy Stone Quest)",
        "desc": "שרשרת קווסטים אגדית החושפת את סודות אל נאט ופותחת את החנות.",
        "reqLevel": "רמה 60+",
        "rewards": "פתיחת חנות All Cure Potion ב-400 מזו"
      }
    ],
    "relatedItems": [
      "All Cure Potion",
      "Holy Water",
      "Magic Rock"
    ]
  },
  {
    "id": "jm-from-tha-streetz",
    "name": "JM From tha Streetz",
    "nameHe": "ג'יי-אם מהרחוב (ייצור Work Gloves)",
    "category": "crafting",
    "categoryName": "ייצור, נפחים ומינרלים",
    "town": "Kerning City",
    "map": "Kerning City (הרחוב הראשי ליד בית המרקחת)",
    "icon": "🧤",
    "role": "ייצור כפפות עבודה (Work Gloves) וקווסטים",
    "desc": "טיפוס קשוח ברחובות קרנינג סיטי, לבוש כובע גרב ועומד ליד פחי הזבל ותחנת הדלק. יודע לייצר כפפות עבודה (Work Gloves) עם 5 סלוטים שמשמשות את כל השחקנים לשדרוגי Attack.",
    "thiefRelevance": "ה-NPC שדרכו מייצרים Work Gloves! מביאים לו 15 עורות (Leathers), בורג אחד (1 Screw) ו-1,000 מזו, ומקבלים כפפת עבודה שאותה משדרגים במגילות Glove ATT 60%.",
    "directions": [
      "הגע למרכז העיר קרנינג סיטי.",
      "צעד ימינה על המדרכה הראשית, ממש מול תחנת הדלק ובית המרקחת.",
      "ג'יי-אם עומד ליד חביות הפח והשלטים."
    ],
    "servicesOrQuests": [
      {
        "title": "ייצור כפפות עבודה (Craft Work Gloves)",
        "desc": "מייצר כפפות עבודה עם 5 סלוטים לכל העבודות.",
        "reqLevel": "רמה 10+",
        "rewards": "15 Leathers + 1 Screw + 1,000 Mesos -> Work Gloves"
      },
      {
        "title": "קווסט מידע סודי (JM's Secret Quest)",
        "desc": "משימת איסוף מידע ותיקים בקרנינג סיטי.",
        "reqLevel": "רמה 20+",
        "rewards": "EXP רב ושיקויים"
      }
    ],
    "relatedItems": [
      "Work Gloves",
      "Screws",
      "Scroll for Glove for ATT 60%"
    ]
  },
  {
    "id": "arwen",
    "name": "Arwen the Fairy",
    "nameHe": "הפייה ארוון (זיקוק מינרלים ואבן ירח)",
    "category": "crafting",
    "categoryName": "ייצור, נפחים ומינרלים",
    "town": "Ellinia",
    "map": "Ellinia (מרכז עיר היער)",
    "icon": "🧚‍♀️",
    "role": "מזקקת Moon Rock / Star Piece ומעניקת קווסטים",
    "desc": "פייה עדינה היושבת על ענף מרכזי באליניה. בעלת ידע קסום בזיקוק כל סוגי המינרלים והאבנים היקרות, ומומחית בייצור אבני ירח (Moon Rock) וחלקי כוכב (Star Piece).",
    "thiefRelevance": "מעניקה את קווסט נעל הזכוכית (Glass Shoe) ואת קווסט 1,000 הבובות המקוללות (Cursed Dolls) שמתנקשים אוספים בזמן אימון על קופי זומבי.",
    "directions": [
      "הגע לעיר היער אליניה (Ellinia).",
      "עלה לענף המרכזי שמעל חנות השיקויים.",
      "ארוון עומדת עם כנפי פייה זוהרות ושמלה ירוקה."
    ],
    "servicesOrQuests": [
      {
        "title": "זיקוק אבן ירח (Refine Moon Rock)",
        "desc": "מזקקת אחד מכל סוגי המינרלים לאבן ירח עוצמתית לקווסטים.",
        "reqLevel": "ללא הגבלה",
        "rewards": "Moon Rock"
      },
      {
        "title": "קווסט נעל הזכוכית (Arwen and the Glass Shoe)",
        "desc": "החזרת נעל הזכוכית שנפלה מחזירי אש (Fire Boar).",
        "reqLevel": "רמה 25+",
        "rewards": "כפפה נדירה או פריטי קסם ו-EXP"
      },
      {
        "title": "קווסט 1,000 הבובות (Arwen's Cursed Doll)",
        "desc": "איסוף 1,000 בובות מקוללות מקופי זומבי באליניה.",
        "reqLevel": "רמה 35+",
        "rewards": "EXP רב ונעליים"
      }
    ],
    "relatedItems": [
      "Glass Shoe",
      "Cursed Doll",
      "Moon Rock",
      "Star Piece"
    ]
  },
  {
    "id": "smith",
    "name": "Smith the Blacksmith",
    "nameHe": "הנפח סמית (זיקוק פלדה וברגים בפריון)",
    "category": "crafting",
    "categoryName": "ייצור, נפחים ומינרלים",
    "town": "Perion",
    "map": "Perion (רחוב הנפחים המרכזי)",
    "icon": "🔨",
    "role": "נפח ראשי: זיקוק עפרות ברזל, ברונזה וייצור ברגים (Screws)",
    "desc": "הנפח הוותיק של עיר ההרים פריון. עובד עם סדן ענק ומזקק עפרות מתכת גולמיות (Ores) למטילי פלדה, ארד וברזל, ומייצר ברגים החיוניים לכל שריון וכפפה.",
    "thiefRelevance": "הדרך העיקרית להשיג ברגים (Screws) הנדרשים לייצור כפפות עבודה (Work Gloves) אצל JM בקרנינג סיטי!",
    "directions": [
      "הגע לעיר פריון (Perion).",
      "צעד למרכז הרחוב הראשי ליד חנות כלי הנשק של פריון.",
      "סמית עומד ליד כבשן האש והסדן המעלה עשן."
    ],
    "servicesOrQuests": [
      {
        "title": "ייצור ברגים (Craft Screws)",
        "desc": "מייצר 15 ברגים מ-1 מטיל ברזל (Iron) + 1 מטיל ארד (Bronze).",
        "reqLevel": "ללא הגבלה",
        "rewards": "15 Screws"
      },
      {
        "title": "זיקוק מטילי מתכת (Refine Ores)",
        "desc": "מזקק 10 עפרות ברזל/פלדה/ארד למטיל מוכן.",
        "reqLevel": "ללא הגבלה",
        "rewards": "מטילי Steel, Iron, Bronze"
      }
    ],
    "relatedItems": [
      "Screws",
      "Iron Plate",
      "Steel Plate"
    ]
  },
  {
    "id": "mr-pickall",
    "name": "Mr. Pickall",
    "nameHe": "מר פיקול (ייצור מפתחות בקרנינג סיטי)",
    "category": "crafting",
    "categoryName": "ייצור, נפחים ומינרלים",
    "town": "Kerning City",
    "map": "Kerning City (ליד תחנת הרכבת)",
    "icon": "🗝️",
    "role": "מנעולן, מייצר מפתחות וברגים",
    "desc": "המנעולן המיומן של קרנינג סיטי. עומד ליד הרכבת התחתית ויודע לחשל ברגים, מפתחות לקופסאות נעולות וציוד פריצה.",
    "thiefRelevance": "מאפשר לייצר ברגים (Screws) בתוך קרנינג סיטי בלי לנסוע עד פריון!",
    "directions": [
      "הגע למרכז העיר קרנינג סיטי.",
      "גש לרחבת הרכבת התחתית (סמוך ללקליס).",
      "מר פיקול עומד עם שולחן העבודה והמפתחות שלו."
    ],
    "servicesOrQuests": [
      {
        "title": "ייצור ברגים (Craft Screws)",
        "desc": "ייצור ברגים מחומרי גלם מקומיים בקרנינג סיטי.",
        "reqLevel": "ללא הגבלה",
        "rewards": "Screws"
      }
    ],
    "relatedItems": [
      "Screws"
    ]
  },
  {
    "id": "icarus",
    "name": "Icarus",
    "nameHe": "איקרוס (קווסט גלימת איקרוס)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Kerning City",
    "map": "Kerning City (על גגות המבנים בצד שמאל)",
    "icon": "🪶",
    "role": "מעניק שרשרת קווסטים לגלימת איקרוס (Icarus Cape)",
    "desc": "ילד חולמני שעומד על גגות המבנים בקרנינג סיטי וחולם לעוף. שרשרת המשימות שלו ברמות 32, 37 ו-42 היא המפורסמת ביותר במשחק ומעניקה את גלימת איקרוס הנדירה.",
    "thiefRelevance": "גלימת איקרוס עם +10 Speed או +5 Jump היא החלום של כל אסאסין لتנועה מהירה במפות קרב לפני קבלת Haste מקסימלי!",
    "directions": [
      "הגע לעיר קרנינג סיטי.",
      "צעד שמאלה לכיוון הפורטל ליציאה מהעיר.",
      "טפס על פחי הזבל, המרפסות והשלטים עד שתגיע לגג העליון שבו איקרוס עומד."
    ],
    "servicesOrQuests": [
      {
        "title": "איקרוס והדאון (Icarus and the Glider)",
        "desc": "איסוף חומרים לבניית דאון (בולי עץ ועורות).",
        "reqLevel": "רמה 32+",
        "rewards": "EXP רב"
      },
      {
        "title": "איקרוס והכדור פורח (Icarus and the Balloon)",
        "desc": "איסוף 100 בדים רפאים (Tablecloth) מעטלפים ורוחות.",
        "reqLevel": "רמה 37+",
        "rewards": "EXP רב"
      },
      {
        "title": "איקרוס וגלולת התעופה (Icarus and the Flying Pill)",
        "desc": "השלמת הקווסט הסופי בעזרת הפייה מאליניה.",
        "reqLevel": "רמה 42+",
        "rewards": "Icarus Cape (+10 Speed או +5 Jump או +15 Avoidability)"
      }
    ],
    "relatedItems": [
      "Icarus Cape",
      "Firewood"
    ]
  },
  {
    "id": "nella",
    "name": "Nella",
    "nameHe": "נלה (סדרת משימות קרנינג סיטי)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Kerning City",
    "map": "Kerning City (מרכז הרחוב ליד שלט הניאון)",
    "icon": "👧",
    "role": "מעניקת משימות רב-שלביות לרמות 15, 20 ו-25",
    "desc": "נערה העומדת במרכז הרחוב בקרנינג סיטי. יש לה קשרים עם כל תושבי העיר והיא מחלקת משימות רבות המעניקות ניסיון (EXP) רב, כפפות וציוד מותאם לגנבים.",
    "thiefRelevance": "מקור מצוין לעליית רמות מהירה ברמות 15-25 ללא צורך באימון מפרך בלבד. מעניקה כפפות ושיקויים בתמורה לחלקי מפלצות קלים.",
    "directions": [
      "הגע למרכז העיר קרנינג סיטי.",
      "נלה עומדת ברחוב הראשי ממש מעל המדרגות המובילות לחנות הנשק."
    ],
    "servicesOrQuests": [
      {
        "title": "המשימה של נלה לרמה 15 (Nella's Request Lv. 15)",
        "desc": "איסוף נוזל סליימים ונוצות עטלף.",
        "reqLevel": "רמה 15+",
        "rewards": "EXP וכפפת Garnier"
      },
      {
        "title": "המשימה של נלה לרמה 25 (Nella's Request Lv. 25)",
        "desc": "איסוף עורות ועיניים מקוללות.",
        "reqLevel": "רמה 25+",
        "rewards": "כפפת פלדה ו-EXP רב"
      }
    ],
    "relatedItems": [
      "Garnier",
      "Steel Igor"
    ]
  },
  {
    "id": "maya",
    "name": "Maya",
    "nameHe": "מאיה (קווסט כובע במבוק חום)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Henesys",
    "map": "Maya's House (בית הפטריה של מאיה בהנסיס)",
    "icon": "👒",
    "role": "קווסט התרופה המוזרה (Maya and the Weird Medicine)",
    "desc": "ילדה חולנית המתגוררת בבית פטריה קטן בקצה השמאלי של הנסיס. זקוקה לתרופה מיוחדת שנרקחת ברחבי היבשת.",
    "thiefRelevance": "הקווסט של מאיה הוא אחת הדרכים הידועות להשיג כובעי במבוק, כולל Brown Bamboo Hat המעניק +3 LUK ללא דרישת DEX לשחקני Dexless!",
    "directions": [
      "הגע לעיר הפטריות הנסיס (Henesys).",
      "צעד לקצה השמאלי של העיר, חפש בית פטריה קטן עם גג צהוב-חום.",
      "היכנס דרך הדלת אל תוך ביתה של מאיה."
    ],
    "servicesOrQuests": [
      {
        "title": "מאיה והתרופה המוזרה (Maya and the Weird Medicine)",
        "desc": "איסוף מרכיבים לקלחת התרופה (זנבות עכברים, עלי פטריות).",
        "reqLevel": "רמה 25+",
        "rewards": "כובע במבוק חום (+3 LUK) ו-EXP"
      }
    ],
    "relatedItems": [
      "Brown Bamboo Hat"
    ]
  },
  {
    "id": "pia",
    "name": "Pia",
    "nameHe": "פיה (קווסט פטריות כחולות בהנסיס)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Henesys",
    "map": "Henesys Park (פארק הנסיס)",
    "icon": "🍄",
    "role": "קווסט Pia and the Blue Mushroom",
    "desc": "ילדה חמודה היושבת על ערימת פטריות בפארק הנסיס ומפחדת מפטריות כחולות.",
    "thiefRelevance": "קווסט קליל ומהיר לרמות 15-20 שמעניק מגילות שדרוג ו-EXP רב בתחילת הדרך.",
    "directions": [
      "מהנסיס צא לפורטל הימני העליון המוביל ל-Henesys Park.",
      "פיה יושבת על ערימת עץ ופטריות במרכז הפארק."
    ],
    "servicesOrQuests": [
      {
        "title": "פיה והפטריות הכחולות (Pia and the Blue Mushroom)",
        "desc": "חיסול פטריות כחולות ואיסוף כובעי פטריה.",
        "reqLevel": "רמה 15+",
        "rewards": "מגילת שדרוג ו-EXP"
      }
    ],
    "relatedItems": [
      "Scroll for Helmet for HP 60%"
    ]
  },
  {
    "id": "ronnie",
    "name": "Ronnie",
    "nameHe": "רוני (הילד המפונק בעצי אליניה)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Ellinia",
    "map": "Forest North of Ellinia (עמוק בתוך ענפי העצים)",
    "icon": "👦",
    "role": "קווסט רוני והדרקון המנומנם בסליפיווד",
    "desc": "ילד קטן ומפונק שברח מביתו ומתחבא בענפי העצים הענקיים בין הנסיס לאליניה. מסרב לחזור עד שלא יביאו לו מטעמים מיוחדים.",
    "thiefRelevance": "דורש ראש חזיר (Pig Head) שנאסף מחזירים עם סרט, חלב טרי ויהלום. פותח את קווסט הדרקון בסליפיווד.",
    "directions": [
      "מאליניה צא צפונה לכיוון Forest North of Ellinia.",
      "טפס בענפי העצים ומצא את בקתת העץ הקטנה שבה רוני מסתתר."
    ],
    "servicesOrQuests": [
      {
        "title": "רוני והפינוקים (Ronnie's Craving)",
        "desc": "הבאת Pig Head, Fresh Milk ו-Diamond.",
        "reqLevel": "רמה 30+",
        "rewards": "EXP רב ופתיחת קווסט הדרקון"
      }
    ],
    "relatedItems": [
      "Pig Head"
    ]
  },
  {
    "id": "bruce",
    "name": "Bruce",
    "nameHe": "ברוס (חוקר הפטריות ואביה של איין)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Henesys",
    "map": "Henesys (מרכז העיר מתחת למרפסת המנהל)",
    "icon": "🔬",
    "role": "קווסט חיפוש הבת (I Need to Find My Daughter) ומחקרי פטריות",
    "desc": "החוקר הוותיק בעל המשקפיים העומד במרכז הנסיס. חוקר עציצים ופטריות, ומחפש מזה שנים את בתו האבודה Ayan שחיה בפריון ואיבדה את זיכרונה.",
    "thiefRelevance": "מעניק את קווסט I Need to Find My Daughter 1 ברמה 10, וכן קווסטים של איסוף חלקי עציצים (Tree Branch) ל-EXP מהיר.",
    "directions": [
      "הגע למרכז העיר הנסיס (Henesys).",
      "חפש את הרחבה המרכזית עם הפטריות הצהובות.",
      "ברוס עומד מתחת למרפסת המנהל עם משקפיים וחלוק מחקר."
    ],
    "servicesOrQuests": [
      {
        "title": "I Need to Find My Daughter 1",
        "desc": "מסירת Ayan's Toy Sword לבתו בפריון כדי להחזיר לה את הזיכרון.",
        "reqLevel": "רמה 10+",
        "rewards": "Ayan's Toy Sword, EXP, גישה לקווסט ההמשך בפריון"
      },
      {
        "title": "The Stump Horror Story",
        "desc": "איסוף 30 ענפי עץ (Tree Branch) מעציצים סביב הנסיס.",
        "reqLevel": "רמה 10+",
        "rewards": "שיקויים אדומים ו-300 EXP"
      }
    ],
    "relatedItems": [
      "Ayan's Toy Sword",
      "Tree Branch"
    ]
  },
  {
    "id": "ayan",
    "name": "Ayan",
    "nameHe": "איין (בתו של ברוס בפריון)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Perion",
    "map": "Perion (בכניסה לעיר ליד רכס הצוקים)",
    "icon": "🏹",
    "role": "קווסט מכתב התודה לברוס (I Need to Find My Daughter 2)",
    "desc": "לוחמת צעירה ואמיצה משבט פריון. בעקבות מתקפת מפלצות בעברה היא איבדה את זיכרונה ולא ידעה שאביה ברוס מחפש אותה מהנסיס.",
    "thiefRelevance": "השלמת קווסט I Need to Find My Daughter 2 מול ברוס בהנסיס, וקווסטים לאיסוף שיני חזיר בר בפריון.",
    "directions": [
      "הגע לעיר ההרים פריון (Perion).",
      "איין עומדת ממש סמוך לפורטל הכניסה לרחוב הראשי של העיר לצד מדפי הסלע."
    ],
    "servicesOrQuests": [
      {
        "title": "I Need to Find My Daughter 2",
        "desc": "קבלת חרב הצעצוע, שחזור הזיכרון ושליחת Ayan's Letter חזרה לאביה ברוס.",
        "reqLevel": "רמה 10+",
        "rewards": "1,200 EXP, שיקויים אדומים/כחולים ו-+1 Fame"
      }
    ],
    "relatedItems": [
      "Ayan's Letter",
      "Ayan's Toy Sword",
      "Wild Boar Tooth"
    ]
  },
  {
    "id": "wing-the-fairy",
    "name": "Wing the Fairy",
    "nameHe": "הפייה ווינג (שיעורי בית באליניה)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Ellinia",
    "map": "Ellinia (ענף העץ המרכזי מעל חנות השיקויים)",
    "icon": "🧚",
    "role": "קווסט עזרה בשיעורי בית (I Need Help on My Homework!) וגלולת איקרוס",
    "desc": "פייה צעירה וחצופה בבית הספר לקסמים באליניה. מבקש עזרה באיסוף מצרכים לשיעורי בית ברמה 10, ובהמשך רוקח את גלולת התעופה עבור איקרוס בקרנינג סיטי (Flying Pill).",
    "thiefRelevance": "ברמה 10 מעניק 15 שיקויים כחולים בחינם לשימוש ב-Lucky Seven. ברמה 42 רוקח את גלולת התעופה לקבלת גלימת איקרוס!",
    "directions": [
      "הגע לעיר היער אליניה (Ellinia).",
      "טפס לחבלים במרכז העץ, מעל לחנות השיקויים.",
      "ווינג יושב על הענף עם כנפיים וספר קסמים."
    ],
    "servicesOrQuests": [
      {
        "title": "I Need Help on My Homework!",
        "desc": "איסוף 10 Leaf, 10 Squishy Liquid ו-3 Slime Bubble לשיקוי הקסם של ווינג.",
        "reqLevel": "רמה 10+",
        "rewards": "15 Blue Potions ו-EXP"
      },
      {
        "title": "Wing's Flying Pill (עבור איקרוס)",
        "desc": "רקיחת גלולת התעופה עבור קווסט Icarus and the Flying Pill ברמה 42.",
        "reqLevel": "רמה 42+",
        "rewards": "Flying Pill (המוביל לקבלת Icarus Cape)"
      }
    ],
    "relatedItems": [
      "Leaf",
      "Squishy Liquid",
      "Slime Bubble",
      "Icarus Cape"
    ]
  },
  {
    "id": "francois",
    "name": "Francois",
    "nameHe": "פרנסואה (החייט באליניה)",
    "category": "crafting",
    "categoryName": "ייצור, נפחים ומינרלים",
    "town": "Ellinia",
    "map": "Ellinia (ליד מכונת התפירה Sewing Machine)",
    "icon": "🧵",
    "role": "קווסט שוליית התפירה (Francois in Need of an Apprentice)",
    "desc": "החייט המוכשר של אליניה. עומד לצד מכונת תפירה עתיקה (Sewing Machine) ומחפש שוליה שיסייע לו באיסוף חומרים ובחיסול Dark Stumps.",
    "thiefRelevance": "פותח גישה לתפירת בגדים ומעניק EXP קל ברמה 10 תוך כדי ציד Dark Stumps.",
    "directions": [
      "הגע לעיר אליניה (Ellinia).",
      "רד למפלס התחתון של העיר ליד בתי העץ.",
      "פרנסואה עומד ליד מכונת התפירה המסומנת בשלט Sewing Machine."
    ],
    "servicesOrQuests": [
      {
        "title": "Francois in Need of an Apprentice",
        "desc": "חיסול 30 Dark Stumps ואיסוף 20 עלים (Leaf).",
        "reqLevel": "רמה 10+",
        "rewards": "פתיחת מקצוע התפירה (Tailoring Skill), מתכונים ו-EXP"
      }
    ],
    "relatedItems": [
      "Leaf"
    ]
  },
  {
    "id": "mrs-ming-ming",
    "name": "Mrs. Ming Ming",
    "nameHe": "גברת מינג מינג (קווסט סרטי חזיר בהנסיס)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Henesys",
    "map": "Henesys (מרכז העיר ליד בית העץ)",
    "icon": "🎀",
    "role": "מעניקת קווסטים של סרטי חזירים (Mrs. Ming Ming's First & Second Worry)",
    "desc": "עקרת בית חביבה המתגוררת במרכז הנסיס. מעצבת בגדים ומבקשת שחקנים שיאספו עבורה סרטים אדומים מחזירים עם סרט (Ribbon Pigs) וכובעי פטריה.",
    "thiefRelevance": "מקור מעולה למאה שיקויים חינם ו-3,000 EXP ברמה 21 לפני כניסה ל-KPQ.",
    "directions": [
      "הגע למרכז עיר הפטריות הנסיס (Henesys).",
      "גברת מינג מינג עומדת ליד הגדר מעל המדרגות המובילות לפארק הנסיס."
    ],
    "servicesOrQuests": [
      {
        "title": "Mrs. Ming Ming's First Worry",
        "desc": "איסוף 20 Pig's Ribbon מ-Pig Park ו-100 Blue Mushroom Caps.",
        "reqLevel": "רמה 21+",
        "rewards": "100 Blue / White Potions, +1 Fame, 3,000 EXP"
      },
      {
        "title": "Mrs. Ming Ming's Second Worry",
        "desc": "איסוף 100 Pig's Ribbon ודיו דיונון.",
        "reqLevel": "רמה 25+",
        "rewards": "EXP רב ונעליים"
      }
    ],
    "relatedItems": [
      "Pig's Ribbon"
    ]
  },
  {
    "id": "mr-wetbottom",
    "name": "Mr. Wetbottom",
    "nameHe": "מר ווטבוטום (קווסט חלוק הסאונה)",
    "category": "shops",
    "categoryName": "חנויות, שיקויים וסאונה",
    "town": "Sleepywood",
    "map": "Sleepywood Hotel: Regular Sauna (הסאונה הרגילה)",
    "icon": "🧖‍♂️",
    "role": "קווסט הספר הסודי וחלוק סאונה בחינם (Mr. Wetbottom's Secret Book)",
    "desc": "תושב סליפיווד המתפנק בסאונה של המלון עם מגבת על הראש. אביו של רוני (Ronnie). מחפש את הספר הסודי שלו שבנו לקח ומעניק חלוק סאונה בחינם כפרס!",
    "thiefRelevance": "הדרך הטובה ביותר להשיג Sauna Robe (+10 Speed ו-10 סלוטים) בחינם ברמה 30 במקום לשלם 30,000 מזו!",
    "directions": [
      "הגע למרכז סליפיווד, היכנס למלון (Sleepywood Hotel).",
      "שוחח עם פקיד הקבלה ובחר בסאונה הרגילה (Regular Sauna ב-499 מזו).",
      "מר ווטבוטום עומד במרכז הסאונה עם מגבת על הראש."
    ],
    "servicesOrQuests": [
      {
        "title": "Mr. Wetbottom's Secret Book",
        "desc": "מציאת רוני באליניה, הבאת חלב טרי, ראש חזיר ויהלום, והחזרת הספר.",
        "reqLevel": "רמה 30+",
        "rewards": "Sauna Robe (+10 Speed, 10 Slots) ו-5,500 EXP"
      }
    ],
    "relatedItems": [
      "Sauna Robe (Bathrobe)",
      "Pig Head"
    ]
  },
  {
    "id": "vip-black-cab",
    "name": "VIP Black Cab",
    "nameHe": "המונית השחורה המהירה (VIP Cab לסליפיווד)",
    "category": "transport",
    "categoryName": "מוניות, ספינות ותחבורה",
    "town": "Kerning City, Henesys, Ellinia, Perion",
    "map": "רחובות ראשיים של כל עיר",
    "icon": "🚕",
    "role": "שיגור ישיר אל סליפיווד (Sleepywood Dungeon)",
    "desc": "מונית שחורה מהודרת החונה ברחוב הראשי של ערי ויקטוריה איילנד. מסיעה שחקנים ישירות וללא הליכה לפתח הצינוק של סליפיווד.",
    "thiefRelevance": "הנחת גנבים בלעדית: מחיר הנסיעה הרגיל הוא 10,000 מזו, אך עבור שחקני גנב (Thief) העלות היא 1,000 מזו בלבד! מאפשר להגיע מיד לסאונה בסליפיווד לקנות Pure Water ו-Sauna Robe.",
    "directions": [
      "הגע לרחוב הראשי בכל עיר בויקטוריה איילנד.",
      "חפש מכונית מונית שחורה יוקרתית החונה לצד המדרכה.",
      "שוחח עם הנהג ובחר לנסוע ישירות לסליפיווד."
    ],
    "servicesOrQuests": [
      {
        "title": "נסיעה ישירה לסליפיווד (Travel to Sleepywood)",
        "desc": "משגרת אותך מיד למרכז העיירה סליפיווד.",
        "reqLevel": "ללא הגבלה",
        "rewards": "עלות: 1,000 Mesos לגנבים (10,000 לאחרים)"
      }
    ],
    "relatedItems": [
      "Pure Water",
      "Sauna Robe (Bathrobe)"
    ]
  },
  {
    "id": "regular-taxi",
    "name": "Regular Yellow Cab",
    "nameHe": "המונית הצהובה (מעבר בין ערי ויקטוריה)",
    "category": "transport",
    "categoryName": "מוניות, ספינות ותחבורה",
    "town": "Kerning City, Henesys, Ellinia, Perion, Lith Harbor",
    "map": "רחוב ראשי של כל עיר",
    "icon": "🚖",
    "role": "מעבר מהיר בין ערי ויקטוריה איילנד",
    "desc": "מונית צהובה סטנדרטית המקשרת בין כל ערי היבשת: הנסיס, אליניה, פריון, קרנינג סיטי וליט הארבור תמורת 1,000 מזו (או 100 מזו לתושבים חדשים).",
    "thiefRelevance": "חוסך הליכה של עשרות דקות בין ערים בזמן ביצוע קווסטים וקניות.",
    "directions": [
      "עומדת בכניסה לכל עיר בויקטוריה איילנד.",
      "שוחח עם הנהג ובחר את עיר היעד שלך."
    ],
    "servicesOrQuests": [
      {
        "title": "נסיעה בין ערים (Intercity Travel)",
        "desc": "שיגור מיידי לעיר שנבחרה.",
        "reqLevel": "ללא הגבלה",
        "rewards": "עלות: 1,000 Mesos (100 למתחילים)"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "shanks",
    "name": "Shanks",
    "nameHe": "שאנקס (קברניט המעבורת לאי המתחילים)",
    "category": "transport",
    "categoryName": "מוניות, ספינות ותחבורה",
    "town": "Lith Harbor / Southperry",
    "map": "Lith Harbor Port (נמל ליט הארבור)",
    "icon": "⛵",
    "role": "קברניט הספינה מאי המתחילים לויקטוריה איילנד",
    "desc": "הימאי הוותיק בעל הרטייה שמשיט שחקנים חדשים מסאות'פרי (Southperry שבמייפל איילנד) אל נמל ליט הארבור בויקטוריה איילנד כדי להתחיל את ההרפתקה הגדולה בעולם.",
    "thiefRelevance": "השער של כל דמות חדשה לעולם הרחב לקראת ההגעה לקרנינג סיטי.",
    "directions": [
      "הגע לקצה השמאלי של נמל ליט הארבור (Lith Harbor).",
      "שאנקס עומד על רציף העץ לצד הספינה העוגנת."
    ],
    "servicesOrQuests": [
      {
        "title": "מעבר ליבשת ויקטוריה איילנד (Ferry to Victoria Island)",
        "desc": "הפלגה חד-כיוונית מאי המתחילים ליבשת הראשית.",
        "reqLevel": "רמה 7-8+",
        "rewards": "עלות: 150 Mesos"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "shumi",
    "name": "Shumi",
    "nameHe": "שומי (ג'אמפ קווסט רכבת קרנינג B1 & B2)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Kerning City",
    "map": "Kerning City (רחבת הרכבת התחתית)",
    "icon": "🪙",
    "role": "מנהלת משימות הקפיצה ברכבת התחתית (Shumi's Lost Coin)",
    "desc": "נערה העומדת מחוץ לרציף הרכבת התחתית בקרנינג סיטי. מאבדת שוב ושוב מטבעות וכספים בתוך מנהרות הרכבת המסוכנות ומציעה פרסים ותהילה למי שיעבור את מסלולי הקפיצה.",
    "thiefRelevance": "ג'אמפ קווסט מעולה לגנבים! מעניק נקודות Fame, מגילות מהירות 60% לנעליים ו-EXP רב.",
    "directions": [
      "הגע למרכז קרנינג סיטי.",
      "גש לתחנת הרכבת התחתית (ליד Lakelis).",
      "שומי עומדת ממש ליד שער הכרטיסים."
    ],
    "servicesOrQuests": [
      {
        "title": "Shumi's Lost Coin (B1)",
        "desc": "מסלול מכשולים עם לייזרים ומנופים ב-Subway B1.",
        "reqLevel": "רמה 20+",
        "rewards": "+2 Fame, Return Scrolls, Mana Elixirs, 2,500 EXP"
      },
      {
        "title": "Shumi's Lost Bundle of Money (B2)",
        "desc": "מסלול קפיצות מתקדם B2 ברכבת.",
        "reqLevel": "רמה 30+",
        "rewards": "Scroll for Shoes for Speed 60%, +2 Fame, 4,000 EXP"
      }
    ],
    "relatedItems": [
      "Scroll for Shoes for Speed 60%",
      "Mana Elixir"
    ]
  },
  {
    "id": "john",
    "name": "John",
    "nameHe": "ג'ון (ג'אמפ קווסט סליפיווד)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Lith Harbor",
    "map": "Lith Harbor (נמל ליט הארבור צד ימין)",
    "icon": "🌸",
    "role": "קווסט פרחי הוויולה (John's Pink Flower Basket)",
    "desc": "איש משפחה חביב העומד בנמל ליט הארבור. מבקש פרחים נדירים שצומחים בראש יער הקוצים (Forest of Tenacity) בסליפיווד.",
    "thiefRelevance": "מעניק מגילת קפיצה לנעליים Shoes Jump 10% ונקודות Fame מוקדמות.",
    "directions": [
      "הגע לנמל ליט הארבור (Lith Harbor).",
      "צעד ימינה עד קצה הרחוב העליון.",
      "ג'ון עומד ליד חביות העץ לצד הבית."
    ],
    "servicesOrQuests": [
      {
        "title": "John's Pink Flower Basket",
        "desc": "קטיפת 10 פרחי Pink Viola במסלול הקפיצות בסליפיווד.",
        "reqLevel": "רמה 15+",
        "rewards": "Scroll for Shoes for Jump 10%, +3 Fame, 1,500 EXP"
      }
    ],
    "relatedItems": [
      "Scroll for Shoes for Jump 60%"
    ]
  },
  {
    "id": "jane",
    "name": "Jane",
    "nameHe": "ג'יין (מגילות נשק 60%)",
    "category": "quests",
    "categoryName": "משימות וקווסטים מרכזיים",
    "town": "Lith Harbor",
    "map": "Lith Harbor (ליד חנות הנשק)",
    "icon": "📜",
    "role": "קווסט חזירי הבר (Jane and the Wild Boar)",
    "desc": "נערה צעירה החולמת להיות סוחרת עצמאית. מבקשת שיני חזיר בר מפריון ומעניקה מגילת 60% נדירה לכלי נשק.",
    "thiefRelevance": "סיכוי ישיר לקבלת מגילת Claw ATT 60% ששווה מיליוני מזו עבור מתנקשים!",
    "directions": [
      "הגע לנמל ליט הארבור.",
      "ג'יין יושבת ליד המדרגות במרכז הנמל."
    ],
    "servicesOrQuests": [
      {
        "title": "Jane and the Wild Boar",
        "desc": "איסוף 100 שיני חזיר בר (Wild Boar Tooth) ו-120 קרניים.",
        "reqLevel": "רמה 25+",
        "rewards": "מגילת נשק 60% אקראית (כולל Claw ATT 60%) ו-4,500 EXP"
      }
    ],
    "relatedItems": [
      "Scroll for Claw for ATT 60%",
      "Wild Boar Tooth"
    ]
  },
  {
    "id": "chief-stan",
    "name": "Chief Stan",
    "nameHe": "צ'יף סטאן (ראש העיר הנסיס)",
    "category": "quests",
    "categoryName": "משימות ומנהיגי ערים",
    "town": "Henesys",
    "map": "Henesys (מרכז העיר ליד בית הפטרייה)",
    "icon": "👴",
    "role": "ראש העיר של הנסיס, מעניק משימות מרכזיות כגון Alex the Runaway Boy ו-Chief Stan's Hat.",
    "desc": "ראש העיר הוותיק של כפר הקשתים הנסיס. אביו של אלכס שברח מהבית לקרנינג סיטי. תמיד דואג לרווחת התושבים ומחפש הרפתקנים שיעזרו לקהילה.",
    "thiefRelevance": "מקשר אותך למשימות משמעותיות בין הנסיס לקרנינג סיטי, ומעניק EXP רב לרמות 15-30.",
    "directions": [
      "הגע למרכז הכפר הנסיס.",
      "עמוד מול בית הפטרייה הגדול והמפואר של ראש העיר במפלס העליון.",
      "צ'יף סטאן עומד בכובעו המפורסם ומקל ההליכה שלו."
    ],
    "servicesOrQuests": [
      {
        "title": "Alex the Runaway Boy",
        "desc": "מסור מכתב פיוס מאב לבנו אלכס הנמצא בקרנינג סיטי.",
        "reqLevel": "רמה 20+",
        "rewards": "EXP, מגילה אקראית וכבוד"
      },
      {
        "title": "Chief Stan's Letter",
        "desc": "העברת מסמכים דחופים למדריכי הערים השכנות.",
        "reqLevel": "רמה 15+",
        "rewards": "EXP ושיקויים"
      }
    ],
    "relatedItems": [
      "Chief Stan's Hat",
      "Letter to Alex",
      "Gold Medal"
    ]
  },
  {
    "id": "alex",
    "name": "Alex",
    "nameHe": "אלכס (הנער הבורח)",
    "category": "quests",
    "categoryName": "משימות קרנינג סיטי",
    "town": "Kerning City",
    "map": "Kerning City (ברחוב הראשי ליד גדר הביוב)",
    "icon": "🧢",
    "role": "הבן המורד של צ'יף סטאן מנווה הנסיס, ברח לקרנינג סיטי כדי להיות עצמאי.",
    "desc": "נער צעיר שנמאס לו מהחוקים הנוקשים של אביו צ'יף סטאן ועבר לגור ברחובות הקשוחים של קרנינג סיטי.",
    "thiefRelevance": "עומד ברחוב הראשי של קרנינג סיטי. השלמת משימת הפיוס שלו מעניקה מגילות שוות לציוד.",
    "directions": [
      "צא מתחנת הרכבת או הבר בקרנינג סיטי אל הרחוב המרכזי.",
      "חפש נער עם כובע מצחייה ירוק הנשען על גדר הרשת."
    ],
    "servicesOrQuests": [
      {
        "title": "Alex the Runaway Kid",
        "desc": "עזור לו להחליט האם לחזור לביתו או להישאר עצמאי.",
        "reqLevel": "רמה 20+",
        "rewards": "מגילת Overall Armor או כובע"
      }
    ],
    "relatedItems": [
      "Old Watch",
      "Letter to Dad"
    ]
  },
  {
    "id": "luke",
    "name": "Luke",
    "nameHe": "לוק (שומר השער של הנסיס)",
    "category": "quests",
    "categoryName": "שומרים ומשימות",
    "town": "Henesys",
    "map": "Henesys: The Hill East of Henesys",
    "icon": "🛡️",
    "role": "השומר העייף בשער היציאה המזרחי של הנסיס, תמיד רעב.",
    "desc": "שומר שער הכפר שעומד שעות ארוכות בשמש ומשתוקק לארוחה טובה ויין מוגז.",
    "thiefRelevance": "משימת 'Luke the Security Guy' מעניקה ציוד למתחילים וכמות EXP נוחה.",
    "directions": [
      "צא מהנסיס מזרחה דרך השער העליון לעבר The Hill East of Henesys.",
      "לוק עומד ליד חומת העץ עם חנית ושריון ברזל."
    ],
    "servicesOrQuests": [
      {
        "title": "Luke the Security Guy",
        "desc": "הבא לו אוכל ושיקויים כדי שיוכל לשמור על הכפר בלי להירדם.",
        "reqLevel": "רמה 15+",
        "rewards": "כפפות או שריון לרמה 15 + EXP"
      }
    ],
    "relatedItems": [
      "Stirge Wing",
      "Salad",
      "Pure Water"
    ]
  },
  {
    "id": "camila",
    "name": "Camila",
    "nameHe": "קמילה (ילדת הפרחים של הנסיס)",
    "category": "quests",
    "categoryName": "משימות הנסיס",
    "town": "Henesys",
    "map": "Henesys (ליד בית הפטריות במפלס התחתון)",
    "icon": "👧",
    "role": "ילדה חביבה מנווה הנסיס, מפעילת משימת הג'ם של קמילה (Camila's Gem).",
    "desc": "קמילה היא חברה טובה של יוטה ושל מיה. מפורסמת במשימת שרשרת האבן היקרה שלה שכוללת ביקור אצל המפלצות.",
    "thiefRelevance": "משימת Camila's Gem מעניקה כמות EXP גדולה מאוד לרמות 23+ ועוזרת לצבירת רמות לקראת עבודה 2.",
    "directions": [
      "רד לקומה התחתונה של מרכז הכפר הנסיס.",
      "קמילה עומדת לצד פטרייה קטנה ופרחים צבעוניים."
    ],
    "servicesOrQuests": [
      {
        "title": "Camila's Gem",
        "desc": "קח את האבן היקרה והבא אותה אל סבא של קמילה.",
        "reqLevel": "רמה 23+",
        "rewards": "Cake, EXP, Pig Ribbon"
      }
    ],
    "relatedItems": [
      "Camila's Gem",
      "Flowery Hairpin"
    ]
  },
  {
    "id": "dr-betty",
    "name": "Dr. Betty",
    "nameHe": "ד\"ר בטי (חוקרת הצמחים והמאובנים באליניה)",
    "category": "quests",
    "categoryName": "מדע וחקר",
    "town": "Ellinia",
    "map": "Ellinia (במרפסת העץ העליונה ליד המעבדה)",
    "icon": "🔬",
    "role": "בוטנאית ומדענית מובילה, חוקרת את סודות הצמחים ומאובני העצים.",
    "desc": "מדענית מבריקה החוקרת כיצד עצי האלון של אליניה גדלו לגבהים עצומים ומה גורם לעצי הבוציץ (Stumps) להפוך לעוינים.",
    "thiefRelevance": "שרשרת משימות המאובנים שלה מעניקה מגילות שדרוג יקרות ערך לציוד.",
    "directions": [
      "הגע לעיר היער אליניה (Ellinia).",
      "טפס על הסולמות עד לקומה האמצעית-גבוהה ליד מבנה המעבדה המעוטר במבחנות.",
      "ד\"ר בטי עומדת בחלוק לבן עם משקפיים."
    ],
    "servicesOrQuests": [
      {
        "title": "Dr. Betty's Plant Research",
        "desc": "איסוף עלי פטריות וגזעי עץ שרופים למחקר.",
        "reqLevel": "רמה 22+",
        "rewards": "Scroll for Gloves for DEX / ATT, EXP"
      }
    ],
    "relatedItems": [
      "Plant Sample",
      "Fossil Leaf"
    ]
  },
  {
    "id": "rowen-the-fairy",
    "name": "Rowen the Fairy",
    "nameHe": "רואן הפיה (Rowen the Fairy)",
    "category": "quests",
    "categoryName": "פיות אליניה",
    "town": "Ellinia",
    "map": "Ellinia (במרכז העץ הראשי)",
    "icon": "🧚‍♀️",
    "role": "הפיה המרכזית האחראית על משימת הבובות המקוללות (Cursed Dolls) המפורסמת!",
    "desc": "פיה אצילית מאליניה שנלחמת באל-מתים ובזומבים המאיימים להשחית את יערות הקסם. שולחת שחקנים לחסל זומבי לופין.",
    "thiefRelevance": "משימת 1,000 הבובות המקוללות (Rowen and the Cursed Dolls) היא אחת המשימות הרווחיות ביותר במשחק עבור גנבים וקוסמים!",
    "directions": [
      "הגע למרכז אליניה.",
      "רואן עומדת במפלס הראשי על גבי ענף עץ רחב.",
      "היא נראית כפיה זוהרת עם כנפיים כחולות."
    ],
    "servicesOrQuests": [
      {
        "title": "Rowen and the Cursed Dolls",
        "desc": "השמד זומבי לופין (Zombie Lupins) ואסוף 1,000 בובות מקוללות כדי לטהר את היער.",
        "reqLevel": "רמה 35+",
        "rewards": "מגילות שדרוג 60%, כובע פיות, EXP עצום"
      }
    ],
    "relatedItems": [
      "Cursed Doll",
      "Fairy Dust"
    ]
  },
  {
    "id": "mar-the-fairy",
    "name": "Mar the Fairy",
    "nameHe": "מאר הפיה (החייאת חיות מחמד)",
    "category": "services",
    "categoryName": "שירותי חיות מחמד (Pets)",
    "town": "Ellinia",
    "map": "Ellinia Outskirts: Forest Green",
    "icon": "🐾",
    "role": "הפיה היחידה שיכולה להחיות חיית מחמד שהפכה לבובה עם מים חיים (Water of Life).",
    "desc": "אוהבת את כל היצורים החיים. בעזרת מגילת החיים ומי החיים היא מחזירה חיות מחמד לתחייה.",
    "thiefRelevance": "חיוני לכל שחקן המשתמש בחיית מחמד לאיסוף מזוס וכוכבים שנפלו.",
    "directions": [
      "צא מאליניה לכיוון היער הדרומי.",
      "מאר עומדת סמוך לכניסה למפת החיות."
    ],
    "servicesOrQuests": [
      {
        "title": "Pet Resurrection",
        "desc": "החייאת פט שהפך לבובה לאחר 90 יום בעזרת Water of Life.",
        "reqLevel": "כל רמה",
        "rewards": "חיית מחמד חיה ופעילה"
      }
    ],
    "relatedItems": [
      "Water of Life",
      "Life Scroll"
    ]
  },
  {
    "id": "fanzy",
    "name": "Fanzy",
    "nameHe": "פאנזי (החתול המדבר באליניה)",
    "category": "quests",
    "categoryName": "משימות יער",
    "town": "Ellinia",
    "map": "The Forest South of Ellinia",
    "icon": "🐱",
    "role": "חתול קסום ומסתורי השוכן בצמרות העצים ואוהב דגים וסליימים.",
    "desc": "חתול שקיבל יכולת דיבור מקסמי אליניה. דורש שיפנקו אותו במאכלי דגים לפני שיגלה סודות על המפות הנסתרות.",
    "thiefRelevance": "מעניק משימות איסוף קלות המניבות EXP ומגילות בתחילת הדרך.",
    "directions": [
      "צא מאליניה דרומה אל The Forest South of Ellinia.",
      "טפס על החבל השמאלי אל ענף בודד באמצע הגובה.",
      "פאנזי עומד על הענף ומגרגר."
    ],
    "servicesOrQuests": [
      {
        "title": "Fanzy's Treat",
        "desc": "הבא לפאנזי דגים טריים ונוצות סליימים.",
        "reqLevel": "רמה 25+",
        "rewards": "EXP, מגילות ושיקויי קסם"
      }
    ],
    "relatedItems": [
      "Fresh Fish",
      "Witch Grass"
    ]
  },
  {
    "id": "manji",
    "name": "Manji",
    "nameHe": "מאנג'י (סייף החרב האגדי של פריון)",
    "category": "quests",
    "categoryName": "משימות פריון",
    "town": "Perion",
    "map": "Perion (בראש הצוק המרכזי)",
    "icon": "🗡️",
    "role": "סייף מבודד ועוצמתי, מפעיל משימת החרב העתיקה (Old Gladius) והתמודדות עם בוסים.",
    "desc": "לוחם שקט וקטלני העומד בגובה צוקי פריון. פניו מכוסות במסכת שדים וחרבו שלופה תמיד. רק אלו שיוכיחו אומץ יזכו להדרכתו.",
    "thiefRelevance": "משימת Old Gladius שלו היא אחת המשימות המפורסמות לשדרוג חרבות ופגיונות.",
    "directions": [
      "הגע לעיר הסלעית פריון.",
      "טפס על כל סולמות העץ עד לנקודה הגבוהה ביותר על הצוק שמעל החנויות.",
      "מאנג'י עומד בדממה עם גלימה שחורה וחרב ארוכה."
    ],
    "servicesOrQuests": [
      {
        "title": "Manji's Old Gladius",
        "desc": "איסוף רכיבים נדירים מבלרוג כדי לחדש את כוחה של החרב העתיקה.",
        "reqLevel": "רמה 45+",
        "rewards": "Gladius משודרג, מגילות ATT, EXP רב"
      }
    ],
    "relatedItems": [
      "Old Gladius",
      "Balrog's Claw",
      "Flaming Feather"
    ]
  },
  {
    "id": "winston",
    "name": "Winston",
    "nameHe": "וינסטון (הארכיאולוג של פריון)",
    "category": "quests",
    "categoryName": "חקר ומאובנים",
    "town": "Perion",
    "map": "East Rocky Mountain II",
    "icon": "⛏️",
    "role": "חוקר מאובנים וציוויליזציות עתיקות, שולח לחיסול הבוס Stumpy.",
    "desc": "ארכיאולוג זקן הנמצא במחנה חפירות במזרח הרי פריון. מתמחה בפענוח לוחות סלע וגילוי מפלצות עתיקות.",
    "thiefRelevance": "המשימה שלו לחיסול סטאמפי מעניקה מגילות שוות ל-DEX ו-ATT.",
    "directions": [
      "צא מפריון מזרחה אל East Rocky Mountain II.",
      "וינסטון יושב ליד אוהל חפירות ושולחן שרטוטים."
    ],
    "servicesOrQuests": [
      {
        "title": "Eliminating Stumpy",
        "desc": "השמד את גזע העץ העתיק Stumpy והבא הוכחה לווינסטון.",
        "reqLevel": "רמה 35+",
        "rewards": "EXP, מגילת Overall Armor 60%"
      }
    ],
    "relatedItems": [
      "Ancient Slate",
      "Old Wooden Board"
    ]
  },
  {
    "id": "blackbull",
    "name": "Blackbull",
    "nameHe": "בלאקבול (בעל הקרקעות של פריון)",
    "category": "quests",
    "categoryName": "משימות פריון",
    "town": "Perion",
    "map": "Perion (ליד משרד המקרקעין)",
    "icon": "🐂",
    "role": "לוחם ותיק ועשיר, בעל שטחי אדמה בפריון, מפעיל משימת שטר הקרקע.",
    "desc": "תושב מוביל בפריון. בעבר לוחם אמיץ וכעת מנהל עסקים. זקוק לעזרה בשחזור שטר הבעלות שלו שנאבד בסערה.",
    "thiefRelevance": "מעניק מגן ברמה 20-30 וכסף רב בהשלמת המשימה.",
    "directions": [
      "הגע למפלס האמצעי של פריון.",
      "בלאקבול עומד ליד מבנה אבן עם שלט של שור."
    ],
    "servicesOrQuests": [
      {
        "title": "Blackbull's Deed",
        "desc": "מצא את שטר הקניין שנפל במערות המפלצות.",
        "reqLevel": "רמה 30+",
        "rewards": "Steel Shield, EXP, Mesos"
      }
    ],
    "relatedItems": [
      "Land Deed",
      "Wooden Board"
    ]
  },
  {
    "id": "the-rememberer",
    "name": "The Rememberer",
    "nameHe": "הזוכר (The Rememberer - שומר סליפיווד)",
    "category": "quests",
    "categoryName": "משימות סליפיווד ומעמקים",
    "town": "Sleepywood",
    "map": "Sleepywood (במרכז המקדש האפל)",
    "icon": "📜",
    "role": "חכם עתיק המנהל את משימות הציד ההמוניות (99 / 999 מפלצות) בסליפיווד.",
    "desc": "דמות אניגמטית השומרת על הזיכרון של כל הנופלים במבוך סליפיווד. שולח הרפתקנים לנקות את המערות ממאות מפלצות Evil Eye, Curse Eye ו-Drakes.",
    "thiefRelevance": "מוקד חובה לגנבים ברמות 35-65! משימות ה-999 מעניקות עשרות אלפי EXP ושיקויים רבים.",
    "directions": [
      "רד למרכז העיירה האפלה סליפיווד (Sleepywood).",
      "הזוכר יושב על שטיח אבן ליד נרות דולקים במרכז המתחם."
    ],
    "servicesOrQuests": [
      {
        "title": "Hunting Evil Eyes (99 & 999)",
        "desc": "חסל מאות Evil Eyes במעמקי המבוך.",
        "reqLevel": "רמה 35+",
        "rewards": "EXP אדיר ומגילות שדרוג נשק"
      },
      {
        "title": "Hunting Drakes",
        "desc": "חיסול דרקוני נחושת ודרקונים רגילים במערות.",
        "reqLevel": "רמה 50+",
        "rewards": "כפפות, שריונות ומגילות 60%"
      }
    ],
    "relatedItems": [
      "Drake Skull",
      "Evil Eye Tail"
    ]
  },
  {
    "id": "sabitrama",
    "name": "Sabitrama",
    "nameHe": "סביטרמה (אמן צמחי המרפא)",
    "category": "quests",
    "categoryName": "משימות וקפיצות",
    "town": "Sleepywood",
    "map": "Sleepywood (ליד הכניסה למערת הקפיצות)",
    "icon": "🌿",
    "role": "מומחה צמחי מרפא אקזוטיים, שולח אותך למשימות ה-Jump Quest הקשות בסליפיווד.",
    "desc": "מרפא הודי עתיק המחפש צמחי מרפא נדירים הגדלים אך ורק בראשי צוקי יער הסבלנות והביצות.",
    "thiefRelevance": "מיומנות ה-Haste של האסאסין מקלה לעיתים על מעבר מכשולים, והפרסים כוללים מגילות שיקויים נדירות.",
    "directions": [
      "הגע לסליפיווד ועמוד בצד ימין ליד העצים השחורים.",
      "סביטרמה לבוש טורבן מסורתי ומחזיק קערת עשבים."
    ],
    "servicesOrQuests": [
      {
        "title": "Sabitrama's Anti-Aging Medicine",
        "desc": "השלם את מסלול הקפיצות המאתגר של Deep Forest כדי לקטוף את צמח הנעורים.",
        "reqLevel": "רמה 25+",
        "rewards": "מגילות שדרוג 60%, EXP, שיקויי בריאות מיוחדים"
      }
    ],
    "relatedItems": [
      "Strange Flower",
      "Anti-Aging Herb"
    ]
  },
  {
    "id": "kyrin",
    "name": "Kyrin",
    "nameHe": "קאירין (קפטן הפיראטים של הנאוטילוס)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה",
    "town": "Nautilus Harbor",
    "map": "Nautilus: Navigation Room",
    "icon": "🏴‍☠️",
    "role": "קפטן ספינת הנאוטילוס ומדריכת העבודה של הפיראטים (Pirate Job Instructor).",
    "desc": "קפטן נועזת וצלפית מומחית באקדחים. מנהיגה את כל הפיראטים, האקדחנים (Gunslingers) והמתאגרפים (Brawlers) של עולם מייפל.",
    "thiefRelevance": "ה-NPC המרכזי לכל שחקן פיראט. אצלה עוברים עבודה ראשונה ושנייה ומקבלים אקדחים וכפפות איגרוף.",
    "directions": [
      "הגע לנמל נאוטילוס (Nautilus Harbor).",
      "היכנס אל תוך בטן הצוללת הענקית ועלה לקומה העליונה (Navigation Room).",
      "קאירין עומדת במרכז החדר במדי קפטן כחולים וכובע פיראטים מהודר."
    ],
    "servicesOrQuests": [
      {
        "title": "Pirate Job Advancement",
        "desc": "מעבר עבודה ראשונה לפיראט ברמה 10 עם לפחות 20 DEX.",
        "reqLevel": "רמה 10+",
        "rewards": "מקצוע פיראט, אקדח / Knuckle וכדורים ראשונים"
      },
      {
        "title": "Gunslinger / Brawler 2nd Job",
        "desc": "מבחן מעבר לעבודה שנייה כאקדחן או מתאגרף.",
        "reqLevel": "רמה 30+",
        "rewards": "עבודה 2, נקודת SP וסקילי עבודה שנייה"
      }
    ],
    "relatedItems": [
      "Basic Gun",
      "Bullet",
      "Pirate Boots"
    ]
  },
  {
    "id": "lisa",
    "name": "Lisa",
    "nameHe": "ליזה (הילדה עם חיות המחמד באורביס)",
    "category": "quests",
    "categoryName": "משימות אורביס",
    "town": "Orbis",
    "map": "Orbis (בכיכר הראשית מעל הנמל)",
    "icon": "👧",
    "role": "מפעילת משימות הדגל של אורביס: Lisa's Special Medicine וחיות המחמד.",
    "desc": "ילדה מקסימה הגרה בעיר העננים אורביס ומטפלת בכל היצורים הקטנים. זקוקה לעזרה בהכנת תרופות לפט שלה מופי (Moppie).",
    "thiefRelevance": "משימות אורביס של ליזה הן מוקד EXP עיקרי לשחקנים המגיעים לראשונה לאורביס ברמות 30-40.",
    "directions": [
      "רד מהספינה באורביס ועלה בפורטל אל מרכז העיר.",
      "ליזה עומדת על שביל העננים ליד ספסל עץ צבוע."
    ],
    "servicesOrQuests": [
      {
        "title": "Lisa's Special Medicine",
        "desc": "אסוף עשבי מרפא מפיות הקסם של אורביס.",
        "reqLevel": "רמה 30+",
        "rewards": "EXP, Pet Food, מגילות שוות"
      }
    ],
    "relatedItems": [
      "Lisa's Medicine",
      "Pet Snack"
    ]
  },
  {
    "id": "spiruna",
    "name": "Spiruna",
    "nameHe": "ספירונה (המכשפה של פארק העננים באורביס)",
    "category": "quests",
    "categoryName": "משימות עננים ומכשפות",
    "town": "Orbis",
    "map": "Orbis: Cloud Park IV (בית המכשפה הנסתר)",
    "icon": "🧙‍♀️",
    "role": "מכשפה מסתורית וחזקה, מפעילת משימת כדור הבדולח השבור של ספירונה.",
    "desc": "חיה בבדידות בבית עץ נסתר בעומק פארק העננים (Cloud Park IV). כדור הבדולח הקסום שלה נשבר ודרוש כוח רב כדי לשחזרו.",
    "thiefRelevance": "אחת משרשראות המשימות המפורסמות והמתגמלות ביותר ברמות 40-50! מעניקה מגילות שדרוג 60% נדירות.",
    "directions": [
      "צא מאורביס ימינה לכיוון Cloud Park.",
      "התקדם עד ל-Cloud Park IV וחפש פורטל קטן הנכנס לתוך בקתת עץ.",
      "ספירונה עומדת ליד כדור בדולח שחור וספרי כישוף."
    ],
    "servicesOrQuests": [
      {
        "title": "Spiruna's Black Crystal",
        "desc": "אסוף אבקות פיות וקריסטלים שחורים כדי לתקן את כדור הבדולח.",
        "reqLevel": "רמה 40+",
        "rewards": "מגילת נשק 60%, Fairy Dust, EXP עצום"
      }
    ],
    "relatedItems": [
      "Black Crystal",
      "Fairy Dust"
    ]
  },
  {
    "id": "staff-sgt-charlie",
    "name": "Staff Sgt. Charlie",
    "nameHe": "סמל צ'ארלי (אמן ההחלפות של אורביס)",
    "category": "services",
    "categoryName": "החלפת חפצי מפלצות (Exchange)",
    "town": "Orbis",
    "map": "Orbis (ליד תחנת הרכבל והספינות)",
    "icon": "🎖️",
    "role": "ה-NPC המפורסם ביותר למסחר בחפצי מפלצות (Etc Items) בתמורה למגילות ושיקויים!",
    "desc": "קצין חיל האוויר של אורביס האוסף מצרכי שלד מפלצות מכל שחקני המשחק ומחלק בתמורה מגילות שדרוג, שיקויי אלכימאי ו-EXP.",
    "thiefRelevance": "מכרה זהב לכל שחקן! מסור לו 100 חלקי מפלצות (כגון Hector Tails, Star Pixie Stargells, Jr. Yeti Skins) וקבל מגילות שדרוג ו-EXP מיידי.",
    "directions": [
      "הגע לכיכר העיר באורביס ליד הכניסה למזח הספינות.",
      "סמל צ'ארלי עומד במדי צבא ירוקים ומצדיע."
    ],
    "servicesOrQuests": [
      {
        "title": "Charlie's Exchange Quest",
        "desc": "החלף 100 חלקי מפלצות באקראי במגילות, חפצי שדרוג או שיקויים.",
        "reqLevel": "רמה 10+",
        "rewards": "מגילות שדרוג נדירות (Scroll for ATT 10%/60%), שיקויים, EXP"
      }
    ],
    "relatedItems": [
      "Hector Tail",
      "White Fang Tail",
      "Stargell"
    ]
  },
  {
    "id": "arec",
    "name": "Arec",
    "nameHe": "אריק (ראש מסדר הגנבים באל נאת')",
    "category": "jobs",
    "categoryName": "עבודה שלישית (3rd Job)",
    "town": "El Nath",
    "map": "El Nath: Chief's Residence",
    "icon": "🥷",
    "role": "המדריך הראשי של כל הגנבים לעבודה שלישית (Hermit / Chief Bandit).",
    "desc": "מתנקש עילית ותיק השוכן בבית מנהיגי העבודות באל נאת'. מעביר את מבחן העבודה השלישית המפרך הכולל דו-קרב מול השיבוט האפל והשגת שרשרת החוזק.",
    "thiefRelevance": "ה-NPC החשוב ביותר ברמה 70! הוא זה שהופך אסאסין ל-Hermit ופותח את הסקילים האגדיים Shadow Partner ו-Flash Jump!",
    "directions": [
      "הגע לעיר הקפואה אל נאת' (El Nath).",
      "היכנס אל Chief's Residence בפינה השמאלית העליונה של העיר.",
      "אריק עומד בתוך החדר לצד מדריכי הלוחמים והקוסמים."
    ],
    "servicesOrQuests": [
      {
        "title": "Hermit / Chief Bandit 3rd Job Advancement",
        "desc": "מבחן העבודה השלישית הכולל ניצחון על השיבוט של דארק לורד במערת הקרח.",
        "reqLevel": "רמה 70 (עם כל נקודות ה-SP מנוצלות)",
        "rewards": "מקצוע Hermit / Chief Bandit, נקודת SP ראשונה לעבודה 3"
      }
    ],
    "relatedItems": [
      "Dark Lord Clone Token",
      "Necklace of Strength"
    ]
  },
  {
    "id": "scadur",
    "name": "Scadur",
    "nameHe": "סקאדור (צייד הפרוות של אל נאת')",
    "category": "quests",
    "categoryName": "משימות אל נאת'",
    "town": "El Nath",
    "map": "El Nath (ליד המדורה במרכז העיר)",
    "icon": "🏹",
    "role": "צייד ותיק המכיר כל פינה בשדות הקרח של אל נאת', מפעיל משימת הבגדים החמים.",
    "desc": "צייד חסון שמתמודד עם זאבי ההקטור ודובי הקרח של הרי השלג. עוזר להרפתקנים להכין ביגוד מגן נגד הקור המקפיא.",
    "thiefRelevance": "משימותיו מביאות את השחקן ישירות למפות האימון הטובות ביותר לרמות 50-65 (Cold Field).",
    "directions": [
      "הגע למרכז אל נאת'.",
      "סקאדור יושב ליד המדורה הגדולה לבוש מעיל פרווה כבד."
    ],
    "servicesOrQuests": [
      {
        "title": "Scadur's Fur Hunt",
        "desc": "הבא לו פרוות Hector ו-White Fang בתמורה לביגוד חם ו-EXP.",
        "reqLevel": "רמה 50+",
        "rewards": "EXP, מגילות וביגוד מגן"
      }
    ],
    "relatedItems": [
      "Hector Tail",
      "White Fang Tail"
    ]
  },
  {
    "id": "marcel",
    "name": "Marcel",
    "nameHe": "מרסל (מפקד חיילי הצעצוע בלודיבריום)",
    "category": "quests",
    "categoryName": "משימות לודיבריום",
    "town": "Ludibrium",
    "map": "Ludibrium (בכניסה למגדל אאוס)",
    "icon": "💂",
    "role": "מפקד המשמר של לודיבריום, מפעיל משימות טיהור מגדל אאוס וחיסול מפלצות הצעצוע.",
    "desc": "חייל צעצוע גאה העומד על המשמר בשער מגדל אאוס. מוטרד מהשתלטות הרובוטים והעכבישים על המגדל ומגייס שחקנים לטהר את הקומות.",
    "thiefRelevance": "משימותיו מעניקות כמויות EXP נכבדות ומגילות כפפות ונעליים ברמות 35-50.",
    "directions": [
      "הגע לעיר הצעצועים לודיבריום.",
      "התקדם שמאלה אל פתח מגדל אאוס (Eos Tower Entrance).",
      "מרסל עומד במדי חייל בריטי אדומים וכובע שחור גבוה."
    ],
    "servicesOrQuests": [
      {
        "title": "Cleaning Eos Tower",
        "desc": "חסל Ratz, Black Ratz ו-Bloctopus במגדל אאוס.",
        "reqLevel": "רמה 35+",
        "rewards": "Scroll for Gloves for ATT / DEX, EXP"
      }
    ],
    "relatedItems": [
      "Ratz Tail",
      "Bloctopus Tentacle"
    ]
  },
  {
    "id": "dr-kim",
    "name": "Dr. Kim",
    "nameHe": "ד\"ר קים (מפקד בסיס אומגה סקטור)",
    "category": "quests",
    "categoryName": "משימות אומגה סקטור",
    "town": "Omega Sector",
    "map": "Omega Sector: Command Center (Silo)",
    "icon": "👨‍🔬",
    "role": "המדען הראשי ומפקד מבצע ההגנה מפני פלישת החייזרים Gray ו-Mateon.",
    "desc": "מנהיג את בסיס הטילים התת-קרקעי באומגה סקטור. מנהל מחקרים על טכנולוגיית החייזרים ומפתח נשקי מגן מתקדמים.",
    "thiefRelevance": "משימות שוות לרמות 40-50 שמעניקות Warp Cards חזרה ללודיבריום ומגילות נשק יקרות.",
    "directions": [
      "רד במגדל אאוס עד לקומה 1 וצא אל אומגה סקטור.",
      "היכנס אל מרכז הפיקוד בתוך הסילו (Command Center).",
      "ד\"ר קים עומד ליד מחשבי העל ומסכי הרדאר."
    ],
    "servicesOrQuests": [
      {
        "title": "Alien Invasion Defense",
        "desc": "איסוף תאי אנרגיה מחייזרי ה-Barnard Gray וצלחות מעופפות.",
        "reqLevel": "רמה 42+",
        "rewards": "Omega Sector Warp Card, Scroll for Claw ATT 60%, EXP"
      }
    ],
    "relatedItems": [
      "Alien Cell",
      "Mateon Tentacle"
    ]
  },
  {
    "id": "biggs",
    "name": "Biggs",
    "nameHe": "ביגס (הסוחר הנודד בליט הארבור)",
    "category": "quests",
    "categoryName": "משימות מתחילים",
    "town": "Lith Harbor",
    "map": "Lith Harbor (ליד הרציף הראשי)",
    "icon": "🧳",
    "role": "סוחר חייכן המעניק את משימת הפתיחה Biggs's Collection of Items.",
    "desc": "סוחר שמגיע עם ספינות המסחר לנמל ליט הארבור. מבקש חלזונות ופטריות כדי להתחיל לסחור באי ויקטוריה.",
    "thiefRelevance": "מעניק את הפגיון / סכין הראשונה וכמות EXP שמקפיצה שחקנים מתחילים ישירות מרמה 10.",
    "directions": [
      "רד מהספינה ממייפל איילנד ברציף ליט הארבור.",
      "ביגס עומד ליד חביות העץ עם תרמיל מסע ענק."
    ],
    "servicesOrQuests": [
      {
        "title": "Biggs's Collection of Items",
        "desc": "אסוף 10 קונכיות חילזון כחולות וכובע פטרייה כתומה.",
        "reqLevel": "רמה 3+",
        "rewards": "Fruit Knife / Razor, EXP"
      }
    ],
    "relatedItems": [
      "Fruit Knife",
      "Blue Snail Shell"
    ]
  },
  {
    "id": "teo",
    "name": "Teo",
    "nameHe": "תיאו (רב החובל הזקן בליט הארבור)",
    "category": "quests",
    "categoryName": "משימות ליט הארבור",
    "town": "Lith Harbor",
    "map": "Lith Harbor (במזח המזרחי ליד הסירות)",
    "icon": "⚓",
    "role": "רב חובל ותיק שהפליג בכל שבעת הימים, מפעיל משימות שונות מול ג'יין ומאיה.",
    "desc": "ימאי מנוסה המכיר כל שרטון ומערבולת. מקושר למשימת התרופה של מאיה ולרפואת הצמחים.",
    "thiefRelevance": "חלק משרשרת משימות ה-Bamboo Hat והתרופות שכל שחקן עובר.",
    "directions": [
      "התקדם לקצה הימני של מזח ליט הארבור.",
      "תיאו עומד עם מקטרת וכובע מלחים ליד סירת משוטים."
    ],
    "servicesOrQuests": [
      {
        "title": "Teo's Prescription",
        "desc": "השגת רכיבי תרופה עבור מאיה מהנסיס.",
        "reqLevel": "רמה 25+",
        "rewards": "EXP, Brown Bamboo Hat"
      }
    ],
    "relatedItems": [
      "Teo's Medicine",
      "Old Wooden Plank"
    ]
  },
  {
    "id": "anne",
    "name": "Anne",
    "nameHe": "Anne (Amherst)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Amherst",
    "map": "Amherst Main Street",
    "icon": "👧",
    "role": "תושבת מייפל איילנד, מסייעת להרפתקנים מתחילים",
    "desc": "Anne שוכן בעיר Amherst. תושבת מייפל איילנד, מסייעת להרפתקנים מתחילים.",
    "thiefRelevance": "דמות מפתח בעיר Amherst המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Amherst.",
      "חפש את Anne במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Anne",
        "desc": "עזרה וסיוע בעיר Amherst.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "arthur",
    "name": "Arthur",
    "nameHe": "Arthur (Kerning City)",
    "category": "merchants",
    "categoryName": "סוחרים וחנויות",
    "town": "Kerning City",
    "map": "Kerning City Main Street",
    "icon": "👨",
    "role": "סוחר ברחובות קרנינג סיטי",
    "desc": "Arthur שוכן בעיר Kerning City. סוחר ברחובות קרנינג סיטי.",
    "thiefRelevance": "דמות מפתח בעיר Kerning City המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Kerning City.",
      "חפש את Arthur במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Arthur",
        "desc": "עזרה וסיוע בעיר Kerning City.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "arturo",
    "name": "Arturo",
    "nameHe": "Arturo (Lith Harbor)",
    "category": "merchants",
    "categoryName": "סוחרים וחנויות",
    "town": "Lith Harbor",
    "map": "Lith Harbor Main Street",
    "icon": "🎣",
    "role": "מלח ודייג בנמל ליט הארבור",
    "desc": "Arturo שוכן בעיר Lith Harbor. מלח ודייג בנמל ליט הארבור.",
    "thiefRelevance": "דמות מפתח בעיר Lith Harbor המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Lith Harbor.",
      "חפש את Arturo במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Arturo",
        "desc": "עזרה וסיוע בעיר Lith Harbor.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "ben",
    "name": "Ben",
    "nameHe": "Ben (Ellinia)",
    "category": "services",
    "categoryName": "שירותי עזר",
    "town": "Ellinia",
    "map": "Ellinia Main Street",
    "icon": "🧗",
    "role": "עוזר למטפסי העצים באליניה",
    "desc": "Ben שוכן בעיר Ellinia. עוזר למטפסי העצים באליניה.",
    "thiefRelevance": "דמות מפתח בעיר Ellinia המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Ellinia.",
      "חפש את Ben במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Ben",
        "desc": "עזרה וסיוע בעיר Ellinia.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "betty",
    "name": "Betty",
    "nameHe": "Betty (Ellinia)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ellinia",
    "map": "Ellinia Main Street",
    "icon": "🔬",
    "role": "חוקרת הטבע והמאובנים באליניה",
    "desc": "Betty שוכן בעיר Ellinia. חוקרת הטבע והמאובנים באליניה.",
    "thiefRelevance": "דמות מפתח בעיר Ellinia המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Ellinia.",
      "חפש את Betty במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Betty",
        "desc": "עזרה וסיוע בעיר Ellinia.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "casey",
    "name": "Casey",
    "nameHe": "Casey (Henesys)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Henesys",
    "map": "Henesys Main Street",
    "icon": "🏡",
    "role": "תושב הנסיס, מפעיל משימות משק הבית",
    "desc": "Casey שוכן בעיר Henesys. תושב הנסיס, מפעיל משימות משק הבית.",
    "thiefRelevance": "דמות מפתח בעיר Henesys המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Henesys.",
      "חפש את Casey במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Casey",
        "desc": "עזרה וסיוע בעיר Henesys.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "chun-ji",
    "name": "Chun Ji",
    "nameHe": "Chun Ji (Perion)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🥋",
    "role": "מאסטר אמנויות לחימה בפריון",
    "desc": "Chun Ji שוכן בעיר Perion. מאסטר אמנויות לחימה בפריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Chun Ji במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Chun Ji",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "don-hwang",
    "name": "Don Hwang",
    "nameHe": "Don Hwang (Kerning City)",
    "category": "merchants",
    "categoryName": "סוחרים וחנויות",
    "town": "Kerning City",
    "map": "Kerning City Main Street",
    "icon": "💼",
    "role": "מנהל המסחר והפיננסים בקרנינג סיטי",
    "desc": "Don Hwang שוכן בעיר Kerning City. מנהל המסחר והפיננסים בקרנינג סיטי.",
    "thiefRelevance": "דמות מפתח בעיר Kerning City המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Kerning City.",
      "חפש את Don Hwang במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Don Hwang",
        "desc": "עזרה וסיוע בעיר Kerning City.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "doofus",
    "name": "Doofus",
    "nameHe": "Doofus (Sleepywood)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Sleepywood",
    "map": "Sleepywood Main Street",
    "icon": "😵",
    "role": "הרפתקן שנאבד במבוך סליפיווד",
    "desc": "Doofus שוכן בעיר Sleepywood. הרפתקן שנאבד במבוך סליפיווד.",
    "thiefRelevance": "דמות מפתח בעיר Sleepywood המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Sleepywood.",
      "חפש את Doofus במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Doofus",
        "desc": "עזרה וסיוע בעיר Sleepywood.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "dr-faymus",
    "name": "Dr. Faymus",
    "nameHe": "Dr. Faymus (Kerning City)",
    "category": "services",
    "categoryName": "שירותי עזר",
    "town": "Kerning City",
    "map": "Kerning City Main Street",
    "icon": "🩺",
    "role": "הרופא המחוזי של קרנינג סיטי",
    "desc": "Dr. Faymus שוכן בעיר Kerning City. הרופא המחוזי של קרנינג סיטי.",
    "thiefRelevance": "דמות מפתח בעיר Kerning City המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Kerning City.",
      "חפש את Dr. Faymus במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Dr. Faymus",
        "desc": "עזרה וסיוע בעיר Kerning City.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "el-moth",
    "name": "El Moth",
    "nameHe": "El Moth (El Nath)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "El Nath",
    "map": "El Nath Main Street",
    "icon": "❄️",
    "role": "חוקר סערות השלג באל נאת'",
    "desc": "El Moth שוכן בעיר El Nath. חוקר סערות השלג באל נאת'.",
    "thiefRelevance": "דמות מפתח בעיר El Nath המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר El Nath.",
      "חפש את El Moth במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של El Moth",
        "desc": "עזרה וסיוע בעיר El Nath.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "estelle",
    "name": "Estelle",
    "nameHe": "Estelle (Ellinia)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ellinia",
    "map": "Ellinia Main Street",
    "icon": "🧪",
    "role": "ילדת הקסם המכינה רטבי סליימים ומשקאות",
    "desc": "Estelle שוכן בעיר Ellinia. ילדת הקסם המכינה רטבי סליימים ומשקאות.",
    "thiefRelevance": "דמות מפתח בעיר Ellinia המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Ellinia.",
      "חפש את Estelle במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Estelle",
        "desc": "עזרה וסיוע בעיר Ellinia.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "flint",
    "name": "Flint",
    "nameHe": "Flint (Perion)",
    "category": "crafting",
    "categoryName": "שירותי עזר",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🔨",
    "role": "נפח כלי נשק ועבודות מתכת בפריון",
    "desc": "Flint שוכן בעיר Perion. נפח כלי נשק ועבודות מתכת בפריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Flint במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Flint",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "flora-the-fairy",
    "name": "Flora the Fairy",
    "nameHe": "Flora the Fairy (Orbis)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Orbis",
    "map": "Orbis Main Street",
    "icon": "🌸",
    "role": "פיית הפרחים בפארק העננים באורביס",
    "desc": "Flora the Fairy שוכן בעיר Orbis. פיית הפרחים בפארק העננים באורביס.",
    "thiefRelevance": "דמות מפתח בעיר Orbis המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Orbis.",
      "חפש את Flora the Fairy במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Flora the Fairy",
        "desc": "עזרה וסיוע בעיר Orbis.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "harry",
    "name": "Harry",
    "nameHe": "Harry (Henesys)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Henesys",
    "map": "Henesys Main Street",
    "icon": "🏹",
    "role": "שומר יער הפטריות במערב הנסיס",
    "desc": "Harry שוכן בעיר Henesys. שומר יער הפטריות במערב הנסיס.",
    "thiefRelevance": "דמות מפתח בעיר Henesys המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Henesys.",
      "חפש את Harry במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Harry",
        "desc": "עזרה וסיוע בעיר Henesys.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "jane-doe",
    "name": "Jane Doe",
    "nameHe": "Jane Doe (Kerning City)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Kerning City",
    "map": "Kerning City Main Street",
    "icon": "🕵️‍♀️",
    "role": "דמות מסתורית ברכבת התחתית",
    "desc": "Jane Doe שוכן בעיר Kerning City. דמות מסתורית ברכבת התחתית.",
    "thiefRelevance": "דמות מפתח בעיר Kerning City המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Kerning City.",
      "חפש את Jane Doe במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Jane Doe",
        "desc": "עזרה וסיוע בעיר Kerning City.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "karl",
    "name": "Karl",
    "nameHe": "Karl (Perion)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🛡️",
    "role": "לוחם ותיק שסייר במערות האש",
    "desc": "Karl שוכן בעיר Perion. לוחם ותיק שסייר במערות האש.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Karl במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Karl",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "len-the-fairy",
    "name": "Len the Fairy",
    "nameHe": "Len the Fairy (Ellinia)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ellinia",
    "map": "Ellinia Main Street",
    "icon": "🍃",
    "role": "פיית עלים וטל הבוקר באליניה",
    "desc": "Len the Fairy שוכן בעיר Ellinia. פיית עלים וטל הבוקר באליניה.",
    "thiefRelevance": "דמות מפתח בעיר Ellinia המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Ellinia.",
      "חפש את Len the Fairy במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Len the Fairy",
        "desc": "עזרה וסיוע בעיר Ellinia.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "lucas",
    "name": "Lucas",
    "nameHe": "Lucas (Amherst)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Amherst",
    "map": "Amherst Main Street",
    "icon": "🎩",
    "role": "ראש כפר אמהרסט במייפל איילנד",
    "desc": "Lucas שוכן בעיר Amherst. ראש כפר אמהרסט במייפל איילנד.",
    "thiefRelevance": "דמות מפתח בעיר Amherst המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Amherst.",
      "חפש את Lucas במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Lucas",
        "desc": "עזרה וסיוע בעיר Amherst.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "lucy",
    "name": "Lucy",
    "nameHe": "Lucy (Amherst)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Amherst",
    "map": "Amherst Main Street",
    "icon": "👗",
    "role": "תושבת אמהרסט, מפעילה משימות לימוד",
    "desc": "Lucy שוכן בעיר Amherst. תושבת אמהרסט, מפעילה משימות לימוד.",
    "thiefRelevance": "דמות מפתח בעיר Amherst המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Amherst.",
      "חפש את Lucy במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Lucy",
        "desc": "עזרה וסיוע בעיר Amherst.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "mai",
    "name": "Mai",
    "nameHe": "Mai (Southperry)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Southperry",
    "map": "Southperry Main Street",
    "icon": "⚔️",
    "role": "מדריכת הקרב של מייפל איילנד",
    "desc": "Mai שוכן בעיר Southperry. מדריכת הקרב של מייפל איילנד.",
    "thiefRelevance": "דמות מפתח בעיר Southperry המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Southperry.",
      "חפש את Mai במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Mai",
        "desc": "עזרה וסיוע בעיר Southperry.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "max",
    "name": "Max",
    "nameHe": "Max (Perion)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🪨",
    "role": "לוחם סלעים בפריון",
    "desc": "Max שוכן בעיר Perion. לוחם סלעים בפריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Max במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Max",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "mina",
    "name": "Mina",
    "nameHe": "Mina (Henesys)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Henesys",
    "map": "Henesys Main Street",
    "icon": "🎯",
    "role": "קשתית מתחילה ביער הנסיס",
    "desc": "Mina שוכן בעיר Henesys. קשתית מתחילה ביער הנסיס.",
    "thiefRelevance": "דמות מפתח בעיר Henesys המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Henesys.",
      "חפש את Mina במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Mina",
        "desc": "עזרה וסיוע בעיר Henesys.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "mr-thunder",
    "name": "Mr. Thunder",
    "nameHe": "Mr. Thunder (Perion)",
    "category": "crafting",
    "categoryName": "שירותי עזר",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "⚡",
    "role": "נפח החרבות של צוקי פריון",
    "desc": "Mr. Thunder שוכן בעיר Perion. נפח החרבות של צוקי פריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Mr. Thunder במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Mr. Thunder",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "olaf",
    "name": "Olaf",
    "nameHe": "Olaf (Lith Harbor)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Lith Harbor",
    "map": "Lith Harbor Main Street",
    "icon": "🧭",
    "role": "מדריך ההרפתקנים הראשי בליט הארבור",
    "desc": "Olaf שוכן בעיר Lith Harbor. מדריך ההרפתקנים הראשי בליט הארבור.",
    "thiefRelevance": "דמות מפתח בעיר Lith Harbor המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Lith Harbor.",
      "חפש את Olaf במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Olaf",
        "desc": "עזרה וסיוע בעיר Lith Harbor.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "phil",
    "name": "Phil",
    "nameHe": "Phil (Lith Harbor)",
    "category": "travel",
    "categoryName": "שירותי עזר",
    "town": "Lith Harbor",
    "map": "Lith Harbor Main Street",
    "icon": "🎟️",
    "role": "מוכר כרטיסי המעבורת והספינות בליט הארבור",
    "desc": "Phil שוכן בעיר Lith Harbor. מוכר כרטיסי המעבורת והספינות בליט הארבור.",
    "thiefRelevance": "דמות מפתח בעיר Lith Harbor המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Lith Harbor.",
      "חפש את Phil במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Phil",
        "desc": "עזרה וסיוע בעיר Lith Harbor.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "rain",
    "name": "Rain",
    "nameHe": "Rain (Amherst)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Amherst",
    "map": "Amherst Main Street",
    "icon": "🌧️",
    "role": "נערה העוזרת בהכרת מיומנויות הבסיס",
    "desc": "Rain שוכן בעיר Amherst. נערה העוזרת בהכרת מיומנויות הבסיס.",
    "thiefRelevance": "דמות מפתח בעיר Amherst המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Amherst.",
      "חפש את Rain במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Rain",
        "desc": "עזרה וסיוע בעיר Amherst.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "riel",
    "name": "Riel",
    "nameHe": "Riel (Florina Beach)",
    "category": "travel",
    "categoryName": "שירותי עזר",
    "town": "Florina Beach",
    "map": "Florina Beach Main Street",
    "icon": "🏖️",
    "role": "מדריכת התיירים בחוף פלורינה",
    "desc": "Riel שוכן בעיר Florina Beach. מדריכת התיירים בחוף פלורינה.",
    "thiefRelevance": "דמות מפתח בעיר Florina Beach המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Florina Beach.",
      "חפש את Riel במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Riel",
        "desc": "עזרה וסיוע בעיר Florina Beach.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "rina",
    "name": "Rina",
    "nameHe": "Rina (Henesys)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Henesys",
    "map": "Henesys Main Street",
    "icon": "🍲",
    "role": "מנהלת בית הארחה והבישול בהנסיס",
    "desc": "Rina שוכן בעיר Henesys. מנהלת בית הארחה והבישול בהנסיס.",
    "thiefRelevance": "דמות מפתח בעיר Henesys המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Henesys.",
      "חפש את Rina במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Rina",
        "desc": "עזרה וסיוע בעיר Henesys.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "river",
    "name": "River",
    "nameHe": "River (Perion)",
    "category": "crafting",
    "categoryName": "שירותי עזר",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🪵",
    "role": "בונה בקתות העץ בפריון",
    "desc": "River שוכן בעיר Perion. בונה בקתות העץ בפריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את River במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של River",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "roxy",
    "name": "Roxy",
    "nameHe": "Roxy (Kerning City)",
    "category": "services",
    "categoryName": "שירותי עזר",
    "town": "Kerning City",
    "map": "Kerning City Main Street",
    "icon": "✂️",
    "role": "מעצבת שיער ותלבושות בקרנינג",
    "desc": "Roxy שוכן בעיר Kerning City. מעצבת שיער ותלבושות בקרנינג.",
    "thiefRelevance": "דמות מפתח בעיר Kerning City המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Kerning City.",
      "חפש את Roxy במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Roxy",
        "desc": "עזרה וסיוע בעיר Kerning City.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "sam",
    "name": "Sam",
    "nameHe": "Sam (Amherst)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Amherst",
    "map": "Amherst Main Street",
    "icon": "🍎",
    "role": "עוזר למתחילים במייפל איילנד",
    "desc": "Sam שוכן בעיר Amherst. עוזר למתחילים במייפל איילנד.",
    "thiefRelevance": "דמות מפתח בעיר Amherst המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Amherst.",
      "חפש את Sam במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Sam",
        "desc": "עזרה וסיוע בעיר Amherst.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "serabi-the-fairy",
    "name": "Serabi the Fairy",
    "nameHe": "Serabi the Fairy (Orbis)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Orbis",
    "map": "Orbis Main Street",
    "icon": "🧚",
    "role": "פיית הקסם במגדל אורביס",
    "desc": "Serabi the Fairy שוכן בעיר Orbis. פיית הקסם במגדל אורביס.",
    "thiefRelevance": "דמות מפתח בעיר Orbis המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Orbis.",
      "חפש את Serabi the Fairy במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Serabi the Fairy",
        "desc": "עזרה וסיוע בעיר Orbis.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "shane",
    "name": "Shane",
    "nameHe": "Shane (Ellinia)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ellinia",
    "map": "Ellinia Main Street",
    "icon": "🌲",
    "role": "שומר יער הסבלנות (Forest of Patience Jump Quest)",
    "desc": "Shane שוכן בעיר Ellinia. שומר יער הסבלנות (Forest of Patience Jump Quest).",
    "thiefRelevance": "דמות מפתח בעיר Ellinia המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Ellinia.",
      "חפש את Shane במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Shane",
        "desc": "עזרה וסיוע בעיר Ellinia.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "sophia",
    "name": "Sophia",
    "nameHe": "Sophia (Perion)",
    "category": "merchants",
    "categoryName": "סוחרים וחנויות",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🧪",
    "role": "רוקחת השיקויים בחנות פריון",
    "desc": "Sophia שוכן בעיר Perion. רוקחת השיקויים בחנות פריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Sophia במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Sophia",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "todd",
    "name": "Todd",
    "nameHe": "Todd (Amherst)",
    "category": "beginners",
    "categoryName": "שירותי עזר",
    "town": "Amherst",
    "map": "Amherst Main Street",
    "icon": "🐌",
    "role": "מדריך צייד חלזונות במייפל איילנד",
    "desc": "Todd שוכן בעיר Amherst. מדריך צייד חלזונות במייפל איילנד.",
    "thiefRelevance": "דמות מפתח בעיר Amherst המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Amherst.",
      "חפש את Todd במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Todd",
        "desc": "עזרה וסיוע בעיר Amherst.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "valen",
    "name": "Valen",
    "nameHe": "Valen (Florina Beach)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Florina Beach",
    "map": "Florina Beach Main Street",
    "icon": "🥥",
    "role": "שומר החוף בפלורינה ביץ'",
    "desc": "Valen שוכן בעיר Florina Beach. שומר החוף בפלורינה ביץ'.",
    "thiefRelevance": "דמות מפתח בעיר Florina Beach המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Florina Beach.",
      "חפש את Valen במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Valen",
        "desc": "עזרה וסיוע בעיר Florina Beach.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "vicious",
    "name": "Vicious",
    "nameHe": "Vicious (Henesys)",
    "category": "crafting",
    "categoryName": "שירותי עזר",
    "town": "Henesys",
    "map": "Henesys Main Street",
    "icon": "🛡️",
    "role": "נפח השריונות של הנסיס",
    "desc": "Vicious שוכן בעיר Henesys. נפח השריונות של הנסיס.",
    "thiefRelevance": "דמות מפתח בעיר Henesys המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Henesys.",
      "חפש את Vicious במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Vicious",
        "desc": "עזרה וסיוע בעיר Henesys.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "weston",
    "name": "Weston",
    "nameHe": "Weston (Perion)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "🗺️",
    "role": "חוקר ערוצי הסלע בפריון",
    "desc": "Weston שוכן בעיר Perion. חוקר ערוצי הסלע בפריון.",
    "thiefRelevance": "דמות מפתח בעיר Perion המסייעת באיסוף EXP, ציוד ומשימות.",
    "directions": [
      "הגע למרכז העיר Perion.",
      "חפש את Weston במפה הראשית ליד החנויות."
    ],
    "servicesOrQuests": [
      {
        "title": "משימות של Weston",
        "desc": "עזרה וסיוע בעיר Perion.",
        "reqLevel": "לפי שלב המשימה",
        "rewards": "EXP, מסוס וציוד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "jake",
    "name": "Jake",
    "nameHe": "ג'ייק (כרטיסן הרכבת התחתית בקרנינג סיטי)",
    "category": "transport",
    "categoryName": "רכבת תחתית ותחבורה / משימות",
    "town": "Kerning City",
    "map": "Kerning City Subway (תחנת הרכבת התחתית)",
    "icon": "🚇",
    "role": "מכירת כרטיסים לרכבת התחתית ופתיחת קווי הרכבת (Line 1, Line 2, מבוך B1/B2/B3)",
    "desc": "הכרטיסן והאחראי הראשי על תחנת הרכבת התחתית של קרנינג סיטי. עומד ליד שערי הכרטיסים (Ticket Gate) ומוכר כרטיסי נסיעה ב-500 מזו לקווי הרכבת השונים (Subway Construction Site B1/B2/B3, Line 1/Line 2) שבהם שוכצים Bat, Stirge, Junior Wraith ו-Wraith. הוא מעניק את קווסט הניקיון המפורסם של הרכבת התחתית (Jake's Clean-Up / The Crack on the Wall) הדורש 100 Stirge Wings ו-50 Jr. Wraith Bands.",
    "thiefRelevance": "חיוני ביותר לכל מתנקש וגנב ברמות 20 עד 45! דרכו רוכשים כרטיסי נסיעה (500 Mesos) כדי להיכנס למתחמי האימון של העטלפים (Stirge) והרוחות (Wraith), וכן למסלולי ה-Jump Quest המאתגרים של שומי B1/B2/B3 לקבלת שיקויי מאנה, נעליים וסקרולים!",
    "directions": [
      "ממרכז קרנינג סיטי (Kerning City), פנה שמאלה אל עבר הבניין עם השלט הצהוב המואר של הרכבת התחתית (Subway).",
      "רד בגרם המדרגות למטה אל תוך אולם הרציפים התת-קרקעי.",
      "ג'ייק עומד מול שער הכרטיסים המוביל לרציפי Line 1 ו-Line 2."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת כרטיסי רכבת (Subway Tickets)",
        "desc": "כרטיס רגיל ב-500 מזו לקווי הרכבת Line 1 / Line 2 וכרטיסי אתר הבנייה B1/B2/B3.",
        "reqLevel": "רמה 20+",
        "rewards": "כרטיס נסיעה (Subway Ticket) למעבר בשער"
      },
      {
        "title": "הסדק בקיר הרכבת (Jake's Crack on the Wall / Clean-Up)",
        "desc": "חיסול Stirge ו-Jr. Wraith שאחראים להרס הרציף והבאת 100 כנפי עטלף (Stirge Wings) ו-50 רצועות רוח (Jr. Wraith Bands).",
        "reqLevel": "רמה 20+",
        "rewards": "מגילות שיפור (Scrolls), EXP ונקודות תהילה"
      },
      {
        "title": "תרופה לכאבי הבטן של ג'ייק (Jake's Stomachache)",
        "desc": "הבאת שורש פעמונית (Bellflower Root) מסליפיווד או סוחרים כדי לרפא את כאבי הבטן של ג'ייק.",
        "reqLevel": "רמה 25+",
        "rewards": "שיקויים, EXP וכרטיסי בונוס"
      }
    ],
    "relatedItems": [
      "Regular Subway Ticket",
      "Construction Site B1 Ticket",
      "Stirge Wing",
      "Jr. Wraith Band",
      "Bellflower Root"
    ]
  },
  {
    "id": "cutthroat-manny",
    "name": "Cutthroat Manny",
    "nameHe": "קאט-ת'רוט מאני (סוחר נשקי גנבים בקרנינג סיטי)",
    "category": "shops",
    "categoryName": "חנויות ומסחר",
    "town": "Kerning City",
    "map": "Kerning City Weapon Shop (חנות הנשקים בקרנינג סיטי)",
    "icon": "🗡️",
    "role": "סוחר כלי נשק לגנבים: כפפות טפרים (Claws), פגיונות (Daggers) וכוכבי זריקה",
    "desc": "הסוחר הראשי של כלי הנשק בקרנינג סיטי. חנותו מציעה את כל סוגי הפגיונות והכפפות לרמות 10 עד 35 (Garnier, Venom, Bronze Igor, Meba), כמו גם מילוי מלאי כוכבי זריקה.",
    "thiefRelevance": "תחנת חובה לכל גנב מתחיל! אצלו קונים את כפפת ה-Meba לרמה 20 ואת הפגיונות המוקדמים, וכן ממלאים מחדש את כוכבי הזריקה.",
    "directions": [
      "הגע למרכז קרנינג סיטי.",
      "רד במדרגות במרכז הרחוב ליד שלט הנשקים המוצלב אל תוך חנות הנשקים.",
      "מאני עומד מאחורי הדלפק ומציע נשקים לגנבים."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת כלי נשק למתנקשים ובנדיטים",
        "desc": "מכירת Meba, Garnier, Stinger, Daggers ומילוי כוכבי זריקה (Recharge Stars).",
        "reqLevel": "כל הרמות",
        "rewards": "כלי נשק ותחמושת"
      }
    ],
    "relatedItems": [
      "Meba",
      "Garnier",
      "Subi Throwing-Stars",
      "Steel Dagger"
    ]
  },
  {
    "id": "cloto",
    "name": "Cloto",
    "nameHe": "קלוטו (שומרת שלבי ה-KPQ בקרנינג סיטי)",
    "category": "pq",
    "categoryName": "משימות קבוצתיות (PQ)",
    "town": "Kerning City",
    "map": "Kerning City Subway / First Companion PQ Stages",
    "icon": "🧩",
    "role": "ניהול שלבי ה-KPQ, איסוף קופונים וחידות מספריים ברמות 21-30",
    "desc": "הגבירה החכמה העומדת בתוך חדרי ה-Party Quest של קרנינג סיטי. היא בוחנת את עבודת הצוות, אוספת את הכרטיסים (Passes) והקופונים מכל חבר פארטי ומשגרת את הקבוצה לשלבים הבאים עד לבוס King Slime.",
    "thiefRelevance": "בזכות הדיוק והטווח של האסאסין וה-Dark Sight של הגנב, המתנקש הוא התפקיד המוביל באיסוף קופונים בשלבי קלוטו ובחיסול מהיר של קינג סליים!",
    "directions": [
      "התחבר לקבוצה של 4 שחקנים ברמות 21-30 אצל לקליס (Lakelis) בקרנינג סיטי.",
      "היכנסו ל-KPQ; קלוטו מחכה בכל אחד מ-4 השלבים הפנימיים."
    ],
    "servicesOrQuests": [
      {
        "title": "בדיקת קופונים והעברה לשלב הבא",
        "desc": "איסוף כרטיסי המעבר מהמפלצות Ligator ו-Curse Eye ופתיחת הפורטלים.",
        "reqLevel": "רמות 21-30",
        "rewards": "EXP קבוצתי ומעבר לשלב הבא"
      }
    ],
    "relatedItems": [
      "Pass",
      "Coupon",
      "Squishy Liquid"
    ]
  },
  {
    "id": "andre",
    "name": "Andre",
    "nameHe": "אנדרה (מעצב השיער של קרנינג סיטי)",
    "category": "services",
    "categoryName": "שירותי עזר ויופי",
    "town": "Kerning City",
    "map": "Kerning City Hair Salon",
    "icon": "✂️",
    "role": "עיצוב וצביעת תסרוקות בסגנון אורבני מודרני לגנבים ולשחקנים",
    "desc": "מעצב השיער המפורסם של קרנינג סיטי. מציע תספורות ייחודיות וסגנונות שיער פרועים התואמים את אופי העיר האפלה.",
    "thiefRelevance": "שחקנים רבים מעצבים אצלו את מראה המתנקש האורבני עם שיער מחודד או צבעי צללים.",
    "directions": [
      "במרכז קרנינג סיטי, היכנס לבניין עם שלט המספריים הניאוניים.",
      "אנדרה ממתין בפנים ליד מראות העיצוב."
    ],
    "servicesOrQuests": [
      {
        "title": "שינוי תסרוקת וצבע שיער",
        "desc": "שימוש בקופוני VIP או רגילים לשינוי עיצוב השיער.",
        "reqLevel": "כל הרמות",
        "rewards": "עיצוב שיער חדש"
      }
    ],
    "relatedItems": [
      "Kerning City Hair Style Coupon",
      "VIP Hair Color Coupon"
    ]
  },
  {
    "id": "chris",
    "name": "Chris",
    "nameHe": "כריס (נפח המתכות ושדרוג התכשיטים בקרנינג סיטי)",
    "category": "crafting",
    "categoryName": "נפחים וייצור חפצים",
    "town": "Kerning City",
    "map": "Kerning City Street (סמוך לבר הגנבים)",
    "icon": "🔨",
    "role": "זיקוק מטילי מתכת, יהלומים ויצירת כפפות טפרים ופגיונות מותאמים אישית",
    "desc": "הנפח והצורף של קרנינג סיטי. עומד סמוך לבניין הבר ברחוב הראשי ויכול להתיך מינרלים גולמיים (Ores) למטילים מושלמים (Steel, Bronze, Silver, Gold, Black Crystal) הדרושים ליצירת כפפות וציוד מתקדם.",
    "thiefRelevance": "חיוני ביותר ליצירת Garnier, Slime Shoes, כפפות טפרים וכוכבי זריקה מתקדמים מחומרי גלם!",
    "directions": [
      "הגע למרכז קרנינג סיטי.",
      "עמוד מול דלת הכניסה לבר הגנבים; כריס עומד משמאל ליד שולחן העבודה והסדן שלו."
    ],
    "servicesOrQuests": [
      {
        "title": "זיקוק מטילי מתכת ואבני חן (Refining Ores)",
        "desc": "המרת 10 עפרות גולמיות למטיל מתכת או יהלום תמורת מזו.",
        "reqLevel": "כל הרמות",
        "rewards": "Steel Plate, Bronze Plate, Black Crystal"
      }
    ],
    "relatedItems": [
      "Steel Ore",
      "Bronze Ore",
      "Dark Crystal Ore",
      "Steel Plate"
    ]
  },
  {
    "id": "mong-from-kong",
    "name": "Mong from Kong",
    "nameHe": "מונג מקונג (רופא ומומחה צמחים בקרנינג סיטי)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Kerning City",
    "map": "Kerning City Pharmacy / Backstreet",
    "icon": "🧪",
    "role": "מומחה צמחי מרפא אסיאתיים, רוקח תרופות ומעניק משימות רפואה מסורתית",
    "desc": "רוקח סיני שהגיע מעבר לים ופתח קליניקת מרפא ברחובות האחוריים של קרנינג סיטי. מציע מרקחות מסורתיות ומשימות לאיסוף מרכיבים נדירים ממפלצות הסביבה.",
    "thiefRelevance": "מקור מצוין לשיקויים ייחודיים ומשימות צד ברמות 25-40.",
    "directions": [
      "ממרכז קרנינג סיטי, התקדם ימינה לעבר המבנים העתיקים.",
      "מונג עומד בתוך חנות המרקחת המסורתית מוקף צנצנות עשבים."
    ],
    "servicesOrQuests": [
      {
        "title": "מרקחת המרפא של מונג (Mong's Herbal Remedy)",
        "desc": "איסוף עשבי מרפא וחומרי גלם מ-Wild Boar ו-Jr. Necki.",
        "reqLevel": "רמה 25+",
        "rewards": "שיקויי אנרגיה, EXP ומסוס"
      }
    ],
    "relatedItems": [
      "Wild Boar Tooth",
      "Jr. Necki Skin"
    ]
  },
  {
    "id": "barric",
    "name": "Barric",
    "nameHe": "באריק (שומר פתחי הביוב בקרנינג סיטי)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Kerning City",
    "map": "Kerning City Swamp Entrance",
    "icon": "🚧",
    "role": "שמירה על מעברי הביוב והביצות, משימות מחקר ביוב",
    "desc": "שומר ותיק של תעלות הניקוז העירוניות בקרנינג סיטי המזהיר שחקנים מפני היצורים המסוכנים בביצות ובביוב.",
    "thiefRelevance": "מעניק משימות הכוונה לאזורי הביצות של ה-Jr. Necki וה-Ligator.",
    "directions": [
      "רד לתחתית העיר קרנינג סיטי.",
      "פנה לכיוון פתח צינור הניקוז הענקי המוביל אל הביצה."
    ],
    "servicesOrQuests": [
      {
        "title": "סקר תעלות הביוב של קרנינג",
        "desc": "טיהור תעלות הניקוז מסליים ותנינים.",
        "reqLevel": "רמה 20+",
        "rewards": "EXP וציוד בסיסי"
      }
    ],
    "relatedItems": [
      "Ligator Skin"
    ]
  },
  {
    "id": "dorang",
    "name": "Dorang",
    "nameHe": "דוראנג (שומר רציפי הרכבת התחתית)",
    "category": "transport",
    "categoryName": "רכבת תחתית ותחבורה / משימות",
    "town": "Kerning City",
    "map": "Kerning City Subway Line 1 Area 1",
    "icon": "🦺",
    "role": "שמירה על פנים הרציפים ואזהרה ממפלצות Wraith",
    "desc": "עובד תחזוקה ברציפי הרכבת הפנימיים. מסייע לשחקנים שנלכדו ברציפים העמוקים לחזור בבטחה.",
    "thiefRelevance": "מוצב במפות האימון של העטלפים והרוחות התת-קרקעיות.",
    "directions": [
      "היכנס לרכבת התחתית דרך ג'ייק בעזרת כרטיס נסיעה.",
      "התקדם לתוך Line 1 Area 1; דוראנג עומד ליד עמוד התאורה."
    ],
    "servicesOrQuests": [
      {
        "title": "חילוץ מאיזור הרציף המסוכן",
        "desc": "החזרת שחקנים אל תחנת הרכבת הראשית ללא עלות.",
        "reqLevel": "רמה 20+",
        "rewards": "חזרה לתחנת קרנינג סיטי"
      }
    ],
    "relatedItems": [
      "Regular Subway Ticket"
    ]
  },
  {
    "id": "chun-wha",
    "name": "Chun Wha",
    "nameHe": "צ'ון וואה (עוזרת הרפואה המסורתית)",
    "category": "shops",
    "categoryName": "חנויות ומסחר",
    "town": "Kerning City",
    "map": "Kerning City Traditional Clinic",
    "icon": "🍵",
    "role": "מכירת שיקויי מאנה, צמחי מרפא ותה ירוק",
    "desc": "מוכרת שיקויים מסורתיים ומרקחות ריפוי באווירה מזרחית במזרח קרנינג סיטי.",
    "thiefRelevance": "מציעה שיקויי מאנה יעילים וחסכוניים למתנקשים שמרבים להשתמש ב-Lucky Seven.",
    "directions": [
      "בחלק המזרחי של קרנינג סיטי, היכנס לקליניקה המסורתית."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת שיקויי מרפא מזרחיים",
        "desc": "שיקויי מאנה, תה ירוק וצמחי מרפא.",
        "reqLevel": "כל הרמות",
        "rewards": "שיקויים ותרופות"
      }
    ],
    "relatedItems": [
      "Mana Elixir",
      "Pure Water"
    ]
  },
  {
    "id": "silas-irons",
    "name": "Silas Irons",
    "nameHe": "סילאס איירונס (סוחר המפתחות והמנעולים)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Henesys",
    "map": "Henesys Park",
    "icon": "🗝️",
    "role": "מנעולן מומחה, מעניק משימות סודיות לקופסאות נעולות ומפתחות עתיקים",
    "desc": "סוחר מפתחות נודד שנמצא בפארק של הנסיס. מתעסק במנעולים עתיקים ובקופסאות אוצר מסתוריות שנמצאו במערות ויקטוריה.",
    "thiefRelevance": "גנבים אוהבים את משימות הפריצה והמנעולים שלו המעניקות EXP וסקרולים.",
    "directions": [
      "הגע להנסיס (Henesys) וצא אל פארק הנסיס (Henesys Park) בצד ימין.",
      "סילאס עומד ליד ספסל הפארק."
    ],
    "servicesOrQuests": [
      {
        "title": "המנעול השבור של סילאס",
        "desc": "איסוף רסיסי מתכת מ-Iron Hog לפריצת מנעול עתיק.",
        "reqLevel": "רמה 30+",
        "rewards": "EXP, מגילות ושריון"
      }
    ],
    "relatedItems": [
      "Iron Hog Iron"
    ]
  },
  {
    "id": "bowman-job-instructor",
    "name": "Bowman Job Instructor",
    "nameHe": "בוחן הקשתים בעבודה שנייה",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Henesys",
    "map": "The Field Up North of Henesys",
    "icon": "🏹",
    "role": "ניהול מבחן העבודה השנייה לקשתים (Hunter / Crossbowman)",
    "desc": "הנציג הרשמי של הלנה במעמקי יער הפטריות מצפון להנסיס. משגר קשתים ברמה 30 עם מכתב רשמי למפת מבחן לאיסוף 30 Dark Marbles.",
    "thiefRelevance": "מקביל לבוחן הגנבים של קרנינג; חלק בלתי נפרד מעולם העבודות הקלאסי של מייפל.",
    "directions": [
      "צא מהנסיס דרך הפורטל הימני העליון אל עבר The Field Up North of Henesys.",
      "הבוחן ממתין בפלטפורמת העץ הגבוהה."
    ],
    "servicesOrQuests": [
      {
        "title": "מבחן עבודה שנייה לקשתים (30 Dark Marbles)",
        "desc": "שיגור למפת המבחן וקבלת The Proof of a Hero.",
        "reqLevel": "רמה 30 קשת",
        "rewards": "The Proof of a Hero למעבר ל-Hunter או Crossbowman"
      }
    ],
    "relatedItems": [
      "Dark Marble",
      "Proof of a Hero"
    ]
  },
  {
    "id": "warrior-job-instructor",
    "name": "Warrior Job Instructor",
    "nameHe": "בוחן הלוחמים בעבודה שנייה",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Perion",
    "map": "Rocky Road II (דרך הסלעים בפריון)",
    "icon": "⚔️",
    "role": "ניהול מבחן העבודה השנייה ללוחמים (Fighter / Page / Spearman)",
    "desc": "הנציג הרשמי של דאנסס ווית' באלרוג בפריון. עומד ברכס הסלעים ומשגר לוחמים ברמה 30 למפת המבחן לאיסוף 30 Dark Marbles.",
    "thiefRelevance": "דמות מפתח במערך מקצועות הלוחמים של עולם מייפל.",
    "directions": [
      "צא מפריון דרך הפורטל הימני אל עבר דרך הסלעים (Rocky Road).",
      "הבוחן עומד על אחת מפסגות הסלעים הגבוהות."
    ],
    "servicesOrQuests": [
      {
        "title": "מבחן עבודה שנייה ללוחמים",
        "desc": "שיגור למפת איסוף 30 כדורי האופל.",
        "reqLevel": "רמה 30 לוחם",
        "rewards": "The Proof of a Hero למעבר ל-Fighter, Page או Spearman"
      }
    ],
    "relatedItems": [
      "Dark Marble",
      "Proof of a Hero"
    ]
  },
  {
    "id": "magician-job-instructor",
    "name": "Magician Job Instructor",
    "nameHe": "בוחן הקוסמים בעבודה שנייה",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Ellinia",
    "map": "The Forest North of Ellinia",
    "icon": "🧙‍♂️",
    "role": "ניהול מבחן העבודה השנייה לקוסמים (Cleric / Wizard F/P / Wizard I/L)",
    "desc": "השליח המיוחד של גרנדל הזקן בצמרת יערות אליניה. משגר קוסמים ברמה 30 לאיסוף 30 Dark Marbles במפת המבחן הקסומה.",
    "thiefRelevance": "חשוב להכרת מערך העבודות הקלאסי של ויקטוריה איילנד.",
    "directions": [
      "צא מאליניה צפונה אל עבר The Forest North of Ellinia.",
      "טפס על ענפי העץ הגדול עד שתפגוש את הבוחן בצמרת."
    ],
    "servicesOrQuests": [
      {
        "title": "מבחן עבודה שנייה לקוסמים",
        "desc": "שיגור למפת המבחן של הקוסמים.",
        "reqLevel": "רמה 30 קוסם",
        "rewards": "The Proof of a Hero למעבר ל-Cleric, Wizard I/L או Wizard F/P"
      }
    ],
    "relatedItems": [
      "Dark Marble",
      "Proof of a Hero"
    ]
  },
  {
    "id": "pirate-job-instructor",
    "name": "Pirate Job Instructor",
    "nameHe": "בוחן הפיראטים בעבודה שנייה",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "Nautilus Harbor",
    "map": "Navigation Room (חדר הניווט בנאוטילוס)",
    "icon": "⚓",
    "role": "ניהול מבחן העבודה השנייה לפיראטים (Gunslinger / Brawler)",
    "desc": "הנציג של קיירין בבטן ספינת הצוללת נאוטילוס. משגר פיראטים ברמה 30 למבחן קרבי לאיסוף 30 כדורי אופל.",
    "thiefRelevance": "מקצוע הגאנר משתף שימוש בתחמושת (Bullets) בדומה לכוכבי הזריקה של האסאסין.",
    "directions": [
      "היכנס לספינת הצוללת נאוטילוס ורד לקומת הפיקוד התחתונה.",
      "שוחח עם הבוחן העומד ליד לוחות המכשירים."
    ],
    "servicesOrQuests": [
      {
        "title": "מבחן עבודה שנייה לפיראטים",
        "desc": "שיגור למבחן עבודה שנייה.",
        "reqLevel": "רמה 30 פיראט",
        "rewards": "The Proof of a Hero למעבר ל-Gunslinger או Brawler"
      }
    ],
    "relatedItems": [
      "Dark Marble",
      "Proof of a Hero"
    ]
  },
  {
    "id": "community-board-kerning",
    "name": "Community Board (Kerning City)",
    "nameHe": "לוח המודעות הקהילתי (קרנינג סיטי)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Kerning City",
    "map": "Kerning City Center",
    "icon": "📋",
    "role": "פרסום משימות עירוניות ומודעות עזרה מתושבי קרנינג סיטי (Jake, Nella, JM, Alex)",
    "desc": "לוח מודעות גדול ומרכזי ברחוב הראשי של קרנינג סיטי. שחקנים יכולים לקרוא בו מודעות רשמיות מתושבי העיר ולהתחיל משימות כמו 'Asking After Jake', 'First Greeting with Jake' ועוד.",
    "thiefRelevance": "מומלץ לבדוק את הלוח בכל עליית רמה כדי לקבל משימות עתירות EXP ומסוס בקרנינג סיטי!",
    "directions": [
      "הגע למרכז קרנינג סיטי.",
      "הלוח עומד במרכז המדרכה בין תחנת הרכבת לבר הגנבים."
    ],
    "servicesOrQuests": [
      {
        "title": "ברכת שלום ראשונה עם ג'ייק (First Greeting with Jake)",
        "desc": "מודעה המפנה שחקנים להכיר את ג'ייק ברכבת התחתית.",
        "reqLevel": "רמה 20+",
        "rewards": "EXP והכוונה לרכבת התחתית"
      },
      {
        "title": "דרישת שלום לג'ייק (Asking After Jake, the Town Resident)",
        "desc": "ביקור אצל ג'ייק וסיוע בענייני תחזוקת הרציפים.",
        "reqLevel": "רמה 20+",
        "rewards": "EXP ומסוס"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "community-board-henesys",
    "name": "Community Board (Henesys)",
    "nameHe": "לוח המודעות הקהילתי (הנסיס)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Henesys",
    "map": "Henesys Town Center",
    "icon": "📋",
    "role": "פרסום משימות לתושבי הנסיס, הודעות עזרה מחקלאים ומחקר פטריות",
    "desc": "לוח המודעות של כפר הפטריות הנסיס. מרכז את בקשות התושבים לסיוע בהדברת מזיקים ואיסוף מזון.",
    "thiefRelevance": "מקור נהדר למשימות למתחילים ברמות 10-25.",
    "directions": [
      "הגע למרכז הנסיס; הלוח מוצב ליד חנות השיקויים הראשית."
    ],
    "servicesOrQuests": [
      {
        "title": "מודעות קהילת הנסיס",
        "desc": "משימות לעזרה לצ'יף סטן, מאיה וברוס.",
        "reqLevel": "רמה 10+",
        "rewards": "EXP וציוד בסיסי"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "community-board-perion",
    "name": "Community Board (Perion)",
    "nameHe": "לוח המודעות הקהילתי (פריון)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Perion",
    "map": "Perion Main Street",
    "icon": "📋",
    "role": "פרסום משימות ציד וסיוע ללוחמים בפריון",
    "desc": "לוח הודעות לוחמים מעץ גס בפריון המרכז משימות ציד באזורי הסלעים.",
    "thiefRelevance": "משימות ציד Wild Boar ו-Fire Boar המניבות EXP גבוה.",
    "directions": [
      "הגע למרכז פריון; הלוח עומד ליד חנות הנשקים."
    ],
    "servicesOrQuests": [
      {
        "title": "ציד באזורי הסלע",
        "desc": "משימות ציד חזירי בר וחזירי ברזל.",
        "reqLevel": "רמה 20+",
        "rewards": "EXP ומגילות"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "community-board-ellinia",
    "name": "Community Board (Ellinia)",
    "nameHe": "לוח המודעות הקהילתי (אליניה)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ellinia",
    "map": "Ellinia Center",
    "icon": "📋",
    "role": "פרסום משימות קסם, צמחי יער ובקשות הפיות",
    "desc": "לוח מודעות קסום המעוטר בעלים באליניה.",
    "thiefRelevance": "משימות לאיסוף מרכיבי קסם ושלל מפלצות יער.",
    "directions": [
      "הגע למרכז אליניה; הלוח עומד על אחת ממרפסות העץ הראשיות."
    ],
    "servicesOrQuests": [
      {
        "title": "בקשות הפיות של אליניה",
        "desc": "איסוף עלים וכנפי פיות.",
        "reqLevel": "רמה 15+",
        "rewards": "EXP ושיקויים"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "community-board-lith",
    "name": "Community Board (Lith Harbor)",
    "nameHe": "לוח המודעות הקהילתי (ליתי' הרבור)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Lith Harbor",
    "map": "Lith Harbor Port",
    "icon": "📋",
    "role": "פרסום מודעות למגיעים החדשים מ-Maple Island",
    "desc": "לוח המודעות הניצב על מזח הנמל ומסייע לטירונים להכיר את היבשת הגדולה.",
    "thiefRelevance": "הכוונה ראשונית אל קרנינג סיטי לבחירת מקצוע הגנב.",
    "directions": [
      "רד מספינת הנמל בליברטי הרבור; הלוח מוצב ליד אולף (Olaf)."
    ],
    "servicesOrQuests": [
      {
        "title": "ברוכים הבאים לויקטוריה איילנד",
        "desc": "הכוונה לערי המקצועות השונים.",
        "reqLevel": "רמה 10",
        "rewards": "EXP ומדריך ערים"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "mr-sweatbottom",
    "name": "Mr. Sweatbottom",
    "nameHe": "מר סוואטבוטום (סאונת מלון סליפיווד)",
    "category": "services",
    "categoryName": "שירותי עזר ויופי",
    "town": "Sleepywood",
    "map": "Sleepywood Hotel (VIP Sauna)",
    "icon": "🧖",
    "role": "מכירת כותנות סאונה (Bathrobes) לגברים ולנשים ומילוי HP/MP מואץ",
    "desc": "מנהל חדר הסאונה המפורסם של מלון סליפיווד. אצלו קונים את בגד הסאונה האגדי (Bathrobe for Men / Bathrobe for Women ב-30,000 מזו) בעל 10 סלוטים לגלילה ומהירות תנועה +10!",
    "thiefRelevance": "פריט קריטי לכל מתנקש וגנב במשחק! בגד הסאונה שקונים אצלו הוא השריון המרכזי עליו מגלגלים מגילות Overall DEX 100%/60%/10% לטובת בניית ה-DEX של האסאסין!",
    "directions": [
      "הגע לעיר המערות סליפיווד (Sleepywood).",
      "היכנס למלון סליפיווד ושוחח עם פקיד הקבלה כדי להיכנס לסאונת ה-VIP.",
      "מר סוואטבוטום עומד ליד בריכת המים החמים בפנים."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת בגדי סאונה (Bathrobe for Men & Women)",
        "desc": "בגד סאונה לרמה 20 עם +10 Speed ו-10 Slots לגלילה.",
        "reqLevel": "רמה 20+",
        "rewards": "Bathrobe for Men / Bathrobe for Women"
      }
    ],
    "relatedItems": [
      "Bathrobe for Men",
      "Bathrobe for Women",
      "Overall DEX 60%"
    ]
  },
  {
    "id": "pason",
    "name": "Pason",
    "nameHe": "פסון (כרטיסן פלורינה ביץ' בליתי' הרבור)",
    "category": "transport",
    "categoryName": "תחבורה ומעברים",
    "town": "Lith Harbor",
    "map": "Lith Harbor Port",
    "icon": "🏖️",
    "role": "מכירת כרטיסים והסעה בסירה אל חוף פלורינה ביץ' (Florina Beach)",
    "desc": "הספן העומד בנמל ליברטי הרבור ומסיע שחקנים בסירתו אל החוף הטרופי פלורינה ביץ' תמורת דמי נסיעה או כרטיס VIP.",
    "thiefRelevance": "מאפשר גישה לאזורי האימון של Lupopin ו-Clang בפלורינה ביץ'.",
    "directions": [
      "הגע לנמל ליברטי הרבור.",
      "רד אל הרציף הימני ביותר; פסון עומד ליד סירת המשוטים."
    ],
    "servicesOrQuests": [
      {
        "title": "הפלגה לפלורינה ביץ'",
        "desc": "שיגור ישיר אל חוף הים הטרופי תמורת 1,500 מזו.",
        "reqLevel": "רמה 20+",
        "rewards": "הגעה לפלורינה ביץ'"
      }
    ],
    "relatedItems": [
      "Florina Beach Ticket"
    ]
  },
  {
    "id": "lalun",
    "name": "Lalun",
    "nameHe": "ללון (מנהל חוף פלורינה ביץ')",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Florina Beach",
    "map": "Florina Beach",
    "icon": "🥥",
    "role": "מנהל הנופש בחוף, משימות איסוף קליפות קוקוס ובננות מ-Lupin",
    "desc": "המנהל הידידותי של חוף פלורינה ביץ'. מתחזק את אתר הנופש ומבקש עזרה בהרחקת הקופים השובבים.",
    "thiefRelevance": "מעניק משימות עתירות EXP לחובבי ציד קופים וסרטנים.",
    "directions": [
      "הגע לפלורינה ביץ' דרך פסון בליברטי הרבור.",
      "ללון עומד תחת עץ הדקל במרכז החוף."
    ],
    "servicesOrQuests": [
      {
        "title": "הקופים השובבים של פלורינה",
        "desc": "איסוף בננות וקוקוסים מ-Lupin.",
        "reqLevel": "רמה 35+",
        "rewards": "EXP ושיקויים טרופיים"
      }
    ],
    "relatedItems": [
      "Banana",
      "Coconut"
    ]
  },
  {
    "id": "kriel-the-fairy",
    "name": "Kriel the Fairy",
    "nameHe": "קריאל הפיה (אורביס)",
    "category": "crafting",
    "categoryName": "נפחים וייצור חפצים",
    "town": "Orbis",
    "map": "Orbis Park",
    "icon": "🧚‍♀️",
    "role": "רקחית שיקויי עננים ושיקוי העצמת חיים באורביס",
    "desc": "פיה חכמה השוכנת בפארק אורביס בעיר השמיים. מתמחה ביצירת שיקויים נדירים מחלקיקי עננים ואבני קסם.",
    "thiefRelevance": "משימת 'השיקוי של קריאל' מעניקה מגילות שוות וכמויות EXP נכבדות ברמות 40-50.",
    "directions": [
      "הגע לעיר השמיים אורביס (Orbis).",
      "פנה ימינה אל פארק אורביס (Orbis Park); קריאל עומדת ליד המזרקה."
    ],
    "servicesOrQuests": [
      {
        "title": "השיקוי המיוחד של קריאל הפיה",
        "desc": "איסוף חלקיקי Star Pixie ו-Lunar Pixie.",
        "reqLevel": "רמה 40+",
        "rewards": "EXP ומגילות שיפור"
      }
    ],
    "relatedItems": [
      "Star Piece",
      "Lunar Piece"
    ]
  },
  {
    "id": "hera",
    "name": "Hera",
    "nameHe": "הרה (כרטיסנית רציף הספינות באורביס)",
    "category": "transport",
    "categoryName": "תחבורה ומעברים",
    "town": "Orbis",
    "map": "Orbis Station",
    "icon": "🚢",
    "role": "מכירת כרטיסי טיסה בספינות אוויר לאליניה, אל נאט ולודיבריום",
    "desc": "הכרטיסנית הראשית בתחנת ספינות האוויר של אורביס. מוכרת כרטיסי הפלגה חזרה לויקטוריה איילנד או הלאה ליבשות אוסיריה ולודיבריום.",
    "thiefRelevance": "תחנת מעבר חובה למתנקשים הנוסעים לאל נאט לביצוע עבודה שלישית (Level 70).",
    "directions": [
      "טפס לראש תחנת ספינות האוויר באורביס (Orbis Station).",
      "הרה עומדת ליד תאי מכירת הכרטיסים."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת כרטיסי טיסה בספינת אוויר",
        "desc": "כרטיסים לאליניה (Ellinia), אל נאט (El Nath) ולודיבריום (Ludibrium).",
        "reqLevel": "כל הרמות",
        "rewards": "Ship Ticket"
      }
    ],
    "relatedItems": [
      "Ticket to Ellinia",
      "Ticket to Ludibrium"
    ]
  },
  {
    "id": "ericsson",
    "name": "Ericsson",
    "nameHe": "אריקסון (שומר העיר אורביס)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Orbis",
    "map": "Orbis Street",
    "icon": "🛡️",
    "role": "שומר השערים של אורביס, משימות הגנה מפני ה-Pixies",
    "desc": "הקצין השומר על ביטחון תושבי עיר העננים אורביס. מעניק משימות לחיסול יצורי הפיקסי התוקפניים.",
    "thiefRelevance": "משימות ציד מעולות לאסאסינים ברמות 35-45.",
    "directions": [
      "במרכז העיר אורביס, ליד שער היציאה למפות העננים."
    ],
    "servicesOrQuests": [
      {
        "title": "הגנת עיר העננים",
        "desc": "חיסול Star Pixie ו-Lunar Pixie.",
        "reqLevel": "רמה 38+",
        "rewards": "EXP ושיקויי מאנה"
      }
    ],
    "relatedItems": [
      "Star Piece"
    ]
  },
  {
    "id": "moppy",
    "name": "Moppy",
    "nameHe": "מופי (מוכר השיקויים באל נאט)",
    "category": "shops",
    "categoryName": "חנויות ומסחר",
    "town": "El Nath",
    "map": "El Nath Potion Shop",
    "icon": "🧪",
    "role": "מכירת שיקויי חיים ומאנה מותאמים לקור של אל נאט ומרקחות ריפוי",
    "desc": "מוכר השיקויים הראשי בעיר השלג אל נאט. מוכר בין היתר שיקויי White Potion, Mana Elixir ו-Ginger Ale המאפשרים הישרדות במזג האוויר המקפיא.",
    "thiefRelevance": "ספק השיקויים המרכזי במהלך אימונים בהרי השלג ועבודת המקצוע השלישית.",
    "directions": [
      "הגע למרכז עיר השלג אל נאט (El Nath).",
      "היכנס לחנות השיקויים בצד שמאל של הרחוב."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת שיקויים באל נאט",
        "desc": "שיקויי מאנה, חיים ומזון מחמם.",
        "reqLevel": "כל הרמות",
        "rewards": "שיקויים"
      }
    ],
    "relatedItems": [
      "White Potion",
      "Mana Elixir"
    ]
  },
  {
    "id": "jade",
    "name": "Jade",
    "nameHe": "ג'ייד (תושבת העיר המושלגת אל נאט)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "El Nath",
    "map": "El Nath Center",
    "icon": "🧣",
    "role": "מעניקת משימת הטבעת האבודה (Jade's Ring) והתרופה מסבתא בנסון",
    "desc": "תושבת ותיקה ואהובה בעיר השלג אל נאט. מחפשת את טבעתה היקרה שנפלה באזורי השלג ומבקשת מרקחות חמות מחברותיה בעולם.",
    "thiefRelevance": "שרשרת משימות קלאסית עם EXP ענקי וסקרולים שווים ברמות 40-55.",
    "directions": [
      "עמוד במרכז אל נאט ליד הבתים החמים המעוטרים בשלג."
    ],
    "servicesOrQuests": [
      {
        "title": "הטבעת האבודה של ג'ייד (Jade's Ring)",
        "desc": "חיפוש הטבעת בין מפלצות הקרח והשלג.",
        "reqLevel": "רמה 45+",
        "rewards": "EXP ומגילת שיפור לשריון"
      }
    ],
    "relatedItems": [
      "Jade's Ring"
    ]
  },
  {
    "id": "shammos",
    "name": "Shammos",
    "nameHe": "שאמוס (המכשף העיוור במרתף הראשי באל נאט)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "El Nath",
    "map": "Chief's Residence (מרתף המפקדה באל נאט)",
    "icon": "🧙‍♂️",
    "role": "המכשף העיוור והמסוכן, פותח קווסטים של ההובגובלין רקסי וסודות עתיקים",
    "desc": "מכשף מנודה בעל עיניים קשורות היושב במרתף מתחת לבית המפקדים באל נאט. בעל ידע אפל על זאקום ועל מפלצות הקרח הקדומות.",
    "thiefRelevance": "קשור למשימות מתקדמות של הרמות הגבוהות (Level 60+).",
    "directions": [
      "היכנס למבנה המפקדים (Chief's Residence) באל נאט.",
      "רד במדרגות הסודיות למרתף התחתון; שאמוס יושב בפינה החשוכה."
    ],
    "servicesOrQuests": [
      {
        "title": "סודותיו של שאמוס העיוור",
        "desc": "משימות איסוף חומרים אפלים ממעמקי הרי השלג.",
        "reqLevel": "רמה 60+",
        "rewards": "EXP רב ופריטים נדירים"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "tylus",
    "name": "Tylus",
    "nameHe": "טילוס (מדריך הלוחמים לעבודה שלישית באל נאט)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "El Nath",
    "map": "Chief's Residence (אל נאט)",
    "icon": "⚔️",
    "role": "העברת עבודה שלישית ללוחמים (Crusader / White Knight / Dragon Knight)",
    "desc": "המדריך האגדי של הלוחמים ביבשת אוסיריה. מעביר את מבחני העבודה השלישית ברמה 70 ומלמד את סקיל ה-Stance.",
    "thiefRelevance": "עמיתו של ארק (Arec) במפקדת העבודה השלישית.",
    "directions": [
      "היכנס ל-Chief's Residence במרכז אל נאט.",
      "טילוס עומד בשורה הראשונה לצד שאר מדריכי העבודה השלישית."
    ],
    "servicesOrQuests": [
      {
        "title": "עבודה שלישית ללוחמים (3rd Job Advancement)",
        "desc": "מעבר ל-Crusader, White Knight או Dragon Knight.",
        "reqLevel": "רמה 70",
        "rewards": "עבודה שלישית וסקילי רמה 70"
      }
    ],
    "relatedItems": [
      "Dark Crystal"
    ]
  },
  {
    "id": "robeira",
    "name": "Robeira",
    "nameHe": "רוביירה (מדריכת הקוסמים לעבודה שלישית באל נאט)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "El Nath",
    "map": "Chief's Residence (אל נאט)",
    "icon": "🪄",
    "role": "העברת עבודה שלישית לקוסמים (Priest / Mage F/P / Mage I/L)",
    "desc": "מדריכת הקוסמים הדגולה ביבשת אוסיריה. מעניקה את תואר ה-Priest וה-Mage ברמה 70.",
    "thiefRelevance": "יושבת לצד Arec בבית המפקדים באל נאט.",
    "directions": [
      "היכנס ל-Chief's Residence באל נאט; רוביירה עומדת ליד טילוס."
    ],
    "servicesOrQuests": [
      {
        "title": "עבודה שלישית לקוסמים (Priest / Mage)",
        "desc": "העברת עבודה שלישית לקוסמים ברמה 70.",
        "reqLevel": "רמה 70",
        "rewards": "עבודה שלישית"
      }
    ],
    "relatedItems": [
      "Dark Crystal"
    ]
  },
  {
    "id": "rene",
    "name": "Rene",
    "nameHe": "רנה (מדריכת הקשתים לעבודה שלישית באל נאט)",
    "category": "jobs",
    "categoryName": "מדריכי עבודה וקידום",
    "town": "El Nath",
    "map": "Chief's Residence (אל נאט)",
    "icon": "🏹",
    "role": "העברת עבודה שלישית לקשתים (Ranger / Sniper)",
    "desc": "הקשתית המופלאה של אל נאט המעבירה קשתים ברמה 70 למקצועות Ranger ו-Sniper.",
    "thiefRelevance": "מדריכת עבודה שלישית באל נאט.",
    "directions": [
      "היכנס ל-Chief's Residence באל נאט; רנה עומדת לצד Arec."
    ],
    "servicesOrQuests": [
      {
        "title": "עבודה שלישית לקשתים (Ranger / Sniper)",
        "desc": "העברת קשתים ברמה 70 לעבודה שלישית.",
        "reqLevel": "רמה 70",
        "rewards": "עבודה שלישית"
      }
    ],
    "relatedItems": [
      "Dark Crystal"
    ]
  },
  {
    "id": "nemi",
    "name": "Nemi",
    "nameHe": "נמי (נערת עוגת האורז בלודיבריום)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ludibrium",
    "map": "Ludibrium Village",
    "icon": "👧",
    "role": "קווסט האוכל והמצרכים החמים בעיר הצעצועים לודיבריום",
    "desc": "ילדה מקסימה בעיר הצעצועים לודיבריום המכינה ארוחות חמות לתושבי המגדל ומבקשת מרכיבי מזון מעניינים.",
    "thiefRelevance": "משימה קלה ומתגמלת להפליא ברמות 30-40 המעניקה EXP רב.",
    "directions": [
      "הגע לעיר הצעצועים לודיבריום (Ludibrium).",
      "נמי עומדת במרכז הרחוב הצבעוני ליד בתי הצעצועים."
    ],
    "servicesOrQuests": [
      {
        "title": "הבישול של נמי (Nemi's Cooking)",
        "desc": "הבאת מרכיבי בישול מלודיבריום וממגדל איאוס.",
        "reqLevel": "רמה 32+",
        "rewards": "EXP, שיקויים ומזון מיוחד"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "toly",
    "name": "Toly",
    "nameHe": "טולי (שומר מגדל איאוס בלודיבריום)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Ludibrium",
    "map": "Eos Tower 100th Floor",
    "icon": "🤖",
    "role": "שמירה על הכניסה למגדל איאוס ומשימות טיהור המגדל מרובוטים מקולקלים",
    "desc": "שומר המגדל המוצב בקומה ה-100 של מגדל איאוס. שולח הרפתקנים לנקות את הקומות מרובוטים פגומים (Ratz, Black Ratz, Bloctopus).",
    "thiefRelevance": "מספק את מגילות השיגור של מגדל איאוס (Eos Tower Scroll) שמקצרות את הטיפוס ב-100 קומות!",
    "directions": [
      "ממרכז לודיבריום, צא שמאלה אל עבר מגדל איאוס (Eos Tower).",
      "טולי עומד ממש בכניסה לקומה ה-100."
    ],
    "servicesOrQuests": [
      {
        "title": "מגילות הקיצור של מגדל איאוס",
        "desc": "השגת Eos Tower Rock Scroll לתנועה מהירה במגדל.",
        "reqLevel": "רמה 30+",
        "rewards": "Eos Tower Rock Scrolls ו-EXP"
      }
    ],
    "relatedItems": [
      "Eos Tower Rock Scroll"
    ]
  },
  {
    "id": "murn",
    "name": "Murn",
    "nameHe": "מורן (טכנאי הצעצועים של לודיבריום)",
    "category": "crafting",
    "categoryName": "נפחים וייצור חפצים",
    "town": "Ludibrium",
    "map": "Ludibrium Factory",
    "icon": "🔧",
    "role": "תיקון מכונות צעצוע, ייצור קפיצים וסוללות",
    "desc": "המהנדס הראשי של מפעל הצעצועים בלודיבריום. מסייע בייצור חלקי מתכת וקפיצים מכניים.",
    "thiefRelevance": "חשוב לקווסטים הדורשים ברגים (Screws) וקפיצים.",
    "directions": [
      "היכנס למפעל הצעצועים בלודיבריום; מורן עומד ליד פס הייצור."
    ],
    "servicesOrQuests": [
      {
        "title": "הברגים החסרים של מורן",
        "desc": "איסוף חלקי מתכת וייצור Screws.",
        "reqLevel": "רמה 35+",
        "rewards": "Screws ו-EXP"
      }
    ],
    "relatedItems": [
      "Screw"
    ]
  },
  {
    "id": "gunner-holden",
    "name": "Gunner Holden",
    "nameHe": "גאנר הולדן (קצין המבצעים באומגה סקטור)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Omega Sector",
    "map": "Omega Sector Command Center",
    "icon": "🎖️",
    "role": "קצין המבצעים הקרביים של אומגה סקטור נגד צבא החייזרים Gray ו-Mateon",
    "desc": "מפקד הכוחות הקרקעיים בבסיס הצבאי הסודי אומגה סקטור. מארגן פשיטות על בסיסי החייזרים ומחלק משימות ציד קרביות.",
    "thiefRelevance": "משימות ציד מעולות לאסאסינים ברמות 40-50 עם רווחי EXP מעולים.",
    "directions": [
      "רד לתחתית מגדל איאוס (קומה 1) וצא אל בסיס אומגה סקטור (Omega Sector).",
      "הולדן עומד במרכז הבסיס מוקף חיילים וטילים."
    ],
    "servicesOrQuests": [
      {
        "title": "בלימת מתקפת החייזרים (Mateon Attack)",
        "desc": "חיסול Mateon ו-Plateon ואיסוף תאי דלק.",
        "reqLevel": "רמה 41+",
        "rewards": "EXP, מגילות ושיקויי קרב"
      }
    ],
    "relatedItems": [
      "Mateon's Tentacle"
    ]
  },
  {
    "id": "spindle",
    "name": "Spindle",
    "nameHe": "ספינדל (חוקר החייזרים באומגה סקטור)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Omega Sector",
    "map": "Omega Sector Silo",
    "icon": "🛸",
    "role": "מדען ראשי לחקר עבמי\"ם וחייזרים וניתוח טכנולוגיה חייזרית",
    "desc": "המדען המבריק החוקר את שברי הצלחות המעופפות והחייזרים מסוג Gray. בונה מכשירי תרגום ומכ\"מים מיוחדים.",
    "thiefRelevance": "משימות מדעיות עם פרסים נדירים לרמות 45+.",
    "directions": [
      "בבסיס אומגה סקטור, היכנס למעבדה בתוך הטיל המרכזי."
    ],
    "servicesOrQuests": [
      {
        "title": "ניתוח הטכנולוגיה של החייזרים Gray",
        "desc": "איסוף צלחות וציוד מ-Barnard Gray ו-Zeta Gray.",
        "reqLevel": "רמה 44+",
        "rewards": "EXP ומגילות שיפור נשק"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "kenta",
    "name": "Kenta",
    "nameHe": "קנטה (מומחה יצורי הים ורכיבה באקווה רוד)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Aqua Road",
    "map": "Aquarium Zoo (גן החיות באקווריום)",
    "icon": "🐬",
    "role": "מומחה עולמי לביולוגיה ימית ומנהל קווסט הרכיבה על חיות (Mount Quest ברמה 70)",
    "desc": "חוקר החיות הימיות האגדי של עיר המעמקים אקווריום. ידוע במיוחד כ-NPC שמעניק את קווסט הרכיבה על חזיר הבר (Monster Riding Quest) ברמה 70!",
    "thiefRelevance": "קריטי לכל אסאסין ברמה 70! דרך קנטה משיגים את סקיל הרכיבה על ה-Hog שמספק תנועה מהירה (Speed + Movement) בכל רחבי העולם!",
    "directions": [
      "הגע לעיר המעמקים אקווריום (Aquarium) דרך מגדל אורביס או אל נאט.",
      "היכנס לגן החיות הימי (Aquarium Zoo) בצד ימין של העיר; קנטה עומד במרכז."
    ],
    "servicesOrQuests": [
      {
        "title": "קווסט הרכיבה על חיות (Monster Riding Quest - Hog)",
        "desc": "איסוף מרכיבים מיוחדים ורכישת האוכף (Saddle) והחזיר לרכיבה.",
        "reqLevel": "רמה 70+",
        "rewards": "סקיל רכיבה (Monster Rider), חזיר בר (Hog) ואוכף"
      }
    ],
    "relatedItems": [
      "Pheromone",
      "Saddle"
    ]
  },
  {
    "id": "muse",
    "name": "Muse",
    "nameHe": "מוז (שומרת גן החיות הימי באקווה רוד)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Aqua Road",
    "map": "Aquarium Zoo",
    "icon": "🦭",
    "role": "שמירה על חיות המצולות ומשימות איסוף מזון לדולפינים וכלבי הים",
    "desc": "שומרת הטבע הימי באקווריום. דואגת להזנת כלבי הים והדגים הנדירים.",
    "thiefRelevance": "משימות מים פשוטות עם פרסי EXP מצוינים לרמות 40-50.",
    "directions": [
      "בגן החיות של אקווריום ליד קנטה."
    ],
    "servicesOrQuests": [
      {
        "title": "האכלת יצורי הים של מוז",
        "desc": "איסוף פריטי מזון מ-Poopa ו-Freezer.",
        "reqLevel": "רמה 40+",
        "rewards": "EXP ושיקויים ימיים"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "tae-gong",
    "name": "Tae Gong",
    "nameHe": "טאי גונג (הדייג הזקן בסירת הדייגים באקווה רוד)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Aqua Road",
    "map": "Not So Small Fishing Hole (אקווה רוד)",
    "icon": "🎣",
    "role": "דייג ותיק הצף בסירת עץ על פני המים, מקשר בין אקווה רוד לקוריאן פולק טאון",
    "desc": "דייג קשיש וחביב היושב בסירתו הזעירה במים של אקווה רוד. בעלה של סבתא בנסון. מתגעגע לאוכל הביתי של אשתו ומבקש עזרה בהעברת מכתבים ומזון.",
    "thiefRelevance": "שרשרת משימות מקסימה וקלה שמחברת בין העולמות ומעניקה המון EXP.",
    "directions": [
      "שחה מאקווריום ימינה לעבר המים הרדודים.",
      "טאי גונג צף בסירת משוטים קטנה על פני המים."
    ],
    "servicesOrQuests": [
      {
        "title": "הדייג של טאי גונג (Tae Gong's Love for his Wife)",
        "desc": "העברת מכתב לסבתא בנסון בעיירת הפולקלור הקוריאנית.",
        "reqLevel": "רמה 35+",
        "rewards": "EXP ומגילות שיפור"
      }
    ],
    "relatedItems": [
      "Tae Gong's Letter"
    ]
  },
  {
    "id": "grandma-benson",
    "name": "Grandma Benson",
    "nameHe": "סבתא בנסון (עיירת הפולקלור הקוריאנית)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Korean Folk Town",
    "map": "Korean Folk Town",
    "icon": "👵",
    "role": "הכנת מטעמים מסורתיים, עוגות אורז ומכתבי אהבה לבעלה טאי גונג",
    "desc": "סבתא חמה ואהובה בעיירת האגדות הקוריאנית. אופה עוגות אורז ומכינה תרופות מסורתיות.",
    "thiefRelevance": "חלק משרשרת המשימות של טאי גונג.",
    "directions": [
      "רד בבאר של אקווה רוד אל עבר Korean Folk Town; סבתא בנסון יושבת מחוץ לבית הקש שלה."
    ],
    "servicesOrQuests": [
      {
        "title": "עוגת האורז של סבתא בנסון",
        "desc": "משלוח עוגת אורז חמה אל טאי גונג באקווה רוד.",
        "reqLevel": "רמה 35+",
        "rewards": "EXP ועוגות אורז מחזקות"
      }
    ],
    "relatedItems": [
      "Rice Cake"
    ]
  },
  {
    "id": "pio",
    "name": "Pio",
    "nameHe": "פיו (ילד איסוף החביות וכיסא Relaxer במייפל איילנד)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Amherst",
    "map": "Amherst (Maple Island)",
    "icon": "🪑",
    "role": "הקווסט האגדי של כיסא המנוחה הראשון (Relaxer) שמחדש 50 HP כל 10 שניות!",
    "desc": "הילד המפורסם ביותר במייפל איילנד! מבקש לאסוף חלקי עץ וברגים מחביות וקופסאות שנשברו בעיר אמהרסט (Pio's Collecting Recycled Goods), ובתמורה בונה עבורך את כיסא ה-Relaxer האייקוני שכל שחקן מייפל זוכר!",
    "thiefRelevance": "חובה לכל שחקן בעולם! כיסא ה-Relaxer מאפשר לשבת בכל מקום ולחדש חיים במהירות בלי לבזבז שיקויים יקרים בתחילת המשחק.",
    "directions": [
      "באי המתחילים מייפל איילנד (Maple Island), היכנס לעיירה אמהרסט (Amherst).",
      "פיו עומד ליד חביות העץ בצד ימין של הרחוב."
    ],
    "servicesOrQuests": [
      {
        "title": "איסוף חומרים ממוחזרים (Pio's Collecting Recycled Goods)",
        "desc": "חבוט בקופסאות עץ ישנות ואסוף קרשים וברגים עבור פיו.",
        "reqLevel": "רמה 3-8",
        "rewards": "כיסא ה-Relaxer האגדי ו-EXP"
      }
    ],
    "relatedItems": [
      "Relaxer",
      "Recycled Wood",
      "Screw"
    ]
  },
  {
    "id": "robin",
    "name": "Robin",
    "nameHe": "רובין (מדריכת המתחילים במייפל איילנד)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Amherst",
    "map": "Maple Road",
    "icon": "🍎",
    "role": "הדרכה בסיסית על תפריטים, מקשים וממשק המשחק",
    "desc": "מדריכה סבלנית המלמדת שחקנים חדשים במייפל איילנד כיצד להשתמש במפה, במלאי ובחלון הסקילים.",
    "thiefRelevance": "מיועדת לשחקנים מתחילים.",
    "directions": [
      "לאורך שבילי Maple Road לפני הכניסה לאמהרסט."
    ],
    "servicesOrQuests": [
      {
        "title": "שיעור ראשון במייפל",
        "desc": "לימוד פתיחת חלונות סטטים ומקשים.",
        "reqLevel": "רמה 2+",
        "rewards": "EXP ותפוח אדום"
      }
    ],
    "relatedItems": [
      "Red Apple"
    ]
  },
  {
    "id": "heena",
    "name": "Heena",
    "nameHe": "חינה (תושבת מייפל איילנד)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Amherst",
    "map": "Mushroom Town (Maple Island)",
    "icon": "👧",
    "role": "חברתה של מאי, מעניקה משימות איסוף חלזונות ומזון",
    "desc": "ילדה מקומית במייפל איילנד שמלמדת כיצד לתקוף חלזונות כחולים וירוקים.",
    "thiefRelevance": "משימות התחלה ברמות 2-5.",
    "directions": [
      "במפת היציאה מ-Mushroom Town במייפל איילנד."
    ],
    "servicesOrQuests": [
      {
        "title": "ציד החלזונות הראשון של חינה",
        "desc": "חיסול חלזונות ירוקים ואיסוף קליפות.",
        "reqLevel": "רמה 2+",
        "rewards": "EXP ותפוחים"
      }
    ],
    "relatedItems": [
      "Snail Shell"
    ]
  },
  {
    "id": "peter",
    "name": "Peter",
    "nameHe": "פיטר (מדריך הצעדים הראשונים במייפל איילנד)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Amherst",
    "map": "Mushroom Town Training Camp",
    "icon": "🏕️",
    "role": "ה-NPC הראשון שפוגשים במשחק מיד לאחר יצירת הדמות!",
    "desc": "המדריך המברך את השחקן מיד כשהוא נוחת בעולם מייפל סטורי. מעניק את חולצת ומכנסי המתחילים ואת החרב הבסיסית.",
    "thiefRelevance": "תחילת הדרך של כל דמות בעולם מייפל.",
    "directions": [
      "מפת הפתיחה הראשונה שבה מופיעים לאחר יצירת דמות."
    ],
    "servicesOrQuests": [
      {
        "title": "הצעד הראשון במייפל סטורי",
        "desc": "היכרות עם מקשי התנועה והתקיפה.",
        "reqLevel": "רמה 1",
        "rewards": "Sword, Apple, EXP"
      }
    ],
    "relatedItems": [
      "Sword",
      "Apple"
    ]
  },
  {
    "id": "sera",
    "name": "Sera",
    "nameHe": "סרה (האחות הבכורה במייפל איילנד)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Amherst",
    "map": "Sera's House (Maple Road)",
    "icon": "🏡",
    "role": "משימת המראה והמראה היפה, הסבר על פריטים בסיסיים",
    "desc": "אחות גדולה הממתינה בבית עץ קטן לאורך הדרך הראשית ומחלקת ממתקים וציוד למטיילים.",
    "thiefRelevance": "משימות מתחילים.",
    "directions": [
      "לאורך שביל Maple Road בתוך בית העץ."
    ],
    "servicesOrQuests": [
      {
        "title": "המבחן של סרה",
        "desc": "מענה על חידון קצר על חוקי עולם מייפל.",
        "reqLevel": "רמה 3+",
        "rewards": "EXP וממתקים"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "maria",
    "name": "Maria",
    "nameHe": "מריה (נערת הכפר אמהרסט)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Amherst",
    "map": "Amherst Outskirts",
    "icon": "💌",
    "role": "משלוח מכתב האהבה לראש הכפר לוקאס (Lucas)",
    "desc": "נערה כפרית המבקשת להעביר מכתב חסוי אל ראש העיר לוקאס באמהרסט.",
    "thiefRelevance": "משימת EXP מהירה במייפל איילנד.",
    "directions": [
      "ביציאה המזרחית של כפר אמהרסט."
    ],
    "servicesOrQuests": [
      {
        "title": "המכתב של מריה ללוקאס (Maria's Letter)",
        "desc": "מסירת המכתב לראש הכפר לוקאס.",
        "reqLevel": "רמה 4+",
        "rewards": "EXP וכובע ראשוני"
      }
    ],
    "relatedItems": [
      "Maria's Letter"
    ]
  },
  {
    "id": "bari",
    "name": "Bari",
    "nameHe": "ברי (הילד בנמל סאות'פרי)",
    "category": "beginners",
    "categoryName": "מתחילים ומדריכים ראשונים",
    "town": "Southperry",
    "map": "Southperry (נמל הדרום במייפל איילנד)",
    "icon": "🪵",
    "role": "משימת העץ עבור ספינת המעבר ליבשת הגדולה",
    "desc": "ילד שובב בנמל סאות'פרי שמבקש עצים כדי לתקן את הסירות בנמל.",
    "thiefRelevance": "משימת מעבר לפני ההפלגה לויקטוריה איילנד.",
    "directions": [
      "בנמל סאות'פרי ליד המעגן של שנקס."
    ],
    "servicesOrQuests": [
      {
        "title": "קרשי העץ של ברי",
        "desc": "איסוף ענפים מ-Stump.",
        "reqLevel": "רמה 6+",
        "rewards": "EXP ומסוס למימון כרטיס הספינה"
      }
    ],
    "relatedItems": [
      "Tree Branch"
    ]
  },
  {
    "id": "tangyoon",
    "name": "Tangyoon",
    "nameHe": "טאנגיון (השף הראשי של ספינת נאוטילוס)",
    "category": "crafting",
    "categoryName": "נפחים וייצור חפצים",
    "town": "Nautilus Harbor",
    "map": "Nautilus Galley (המטבח הראשי בנאוטילוס)",
    "icon": "🍳",
    "role": "השף האגדי של הפיראטים, בישול מרקים מיוחדים ומשימות קולינריות",
    "desc": "השף הקשוח והמוכשר של ספינת הצוללת נאוטילוס. מחפש תמיד מצרכים אקזוטיים (בשר חזירים, פטריות וביצים) להכנת מרקים המחזקים את הצוות.",
    "thiefRelevance": "קווסטים מעולים ברמות 15-30 עם שיקויי התקפה ומהירות ייחודיים.",
    "directions": [
      "היכנס לספינת נאוטילוס, פנה לקומה העליונה אל תוך המטבח (Galley).",
      "טאנגיון עומד ליד סיר המרק הענק עם כובע שף."
    ],
    "servicesOrQuests": [
      {
        "title": "המרק המיוחד של טאנגיון",
        "desc": "הבאת פטריות ובשר חזיר לבישול מרק הפיראטים.",
        "reqLevel": "רמה 18+",
        "rewards": "EXP ומנות מרק המעלות Weapon Attack"
      }
    ],
    "relatedItems": [
      "Pork",
      "Orange Mushroom Cap"
    ]
  },
  {
    "id": "muirhat",
    "name": "Muirhat",
    "nameHe": "מוירהאט (הנווט החוקר של נאוטילוס)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Nautilus Harbor",
    "map": "Nautilus Top Deck",
    "icon": "🧭",
    "role": "חקר יבשת ויקטוריה ואיתור מפלצות נדירות ופורטלים סודיים",
    "desc": "הנווט הבכיר של קיירין. עומד על הסיפון העליון של נאוטילוס ומתצפת על חופי ויקטוריה.",
    "thiefRelevance": "מעניק משימות סריקה וסיור ברחבי ויקטוריה איילנד.",
    "directions": [
      "עלה אל הסיפון העליון הפתוח של ספינת נאוטילוס."
    ],
    "servicesOrQuests": [
      {
        "title": "סיור חופי ויקטוריה",
        "desc": "איתור מפלצות ודיווח לצוות הספינה.",
        "reqLevel": "רמה 25+",
        "rewards": "EXP וציוד ניווט"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "jack",
    "name": "Jack",
    "nameHe": "ג'ק (מנקה הסיפון בנאוטילוס)",
    "category": "quests",
    "categoryName": "משימות והרפתקאות",
    "town": "Nautilus Harbor",
    "map": "Nautilus Lower Hallway",
    "icon": "🧹",
    "role": "מנקה הספינה, משימות איסוף אשפה וחיסול עכברים ומזיקים",
    "desc": "מלח צעיר העובד בניקיון ספינת נאוטילוס. תמיד נקלע לצרות עם העכברים והעטלפים שחודרים לספינה.",
    "thiefRelevance": "משימות קלות ל-EXP נוסף ברמות 15-25.",
    "directions": [
      "במסדרון התחתון של נאוטילוס ליד המחסנים."
    ],
    "servicesOrQuests": [
      {
        "title": "ניקוי סיפון הנאוטילוס",
        "desc": "חיסול מזיקים והבאת חלקי ניקוי.",
        "reqLevel": "רמה 16+",
        "rewards": "EXP ומסוס"
      }
    ],
    "relatedItems": []
  },
  {
    "id": "shally",
    "name": "Shally",
    "nameHe": "שאלי (אחות המרפאה בנאוטילוס)",
    "category": "shops",
    "categoryName": "חנויות ומסחר",
    "town": "Nautilus Harbor",
    "map": "Nautilus Infirmary",
    "icon": "💊",
    "role": "רופאת הספינה, מכירת שיקויי רפואה ותחבושות לפיראטים",
    "desc": "האחות הראשית במרפאת נאוטילוס המציעה שיקויים ותרופות במחירים נוחים לכל ההרפתקנים.",
    "thiefRelevance": "חנות שיקויים חלופית נוחה למי שמתאמן באזור הנמל.",
    "directions": [
      "בתוך ספינת נאוטילוס, היכנס למרפאה (Infirmary)."
    ],
    "servicesOrQuests": [
      {
        "title": "מכירת שיקויי מרפאה",
        "desc": "שיקויי HP ו-MP ותרופות לריפוי רעל.",
        "reqLevel": "כל הרמות",
        "rewards": "שיקויים ותרופות"
      }
    ],
    "relatedItems": [
      "Cider",
      "Red Potion",
      "Blue Potion"
    ]
  }
];

export const NPCS_DATABASE = RAW_NPCS_DATABASE.map(npc => {
  const asset = NPC_ASSETS_MAP[npc.id] || {};
  return {
    ...npc,
    npcId: npc.npcId || asset.npcId,
    iconUrl: npc.iconUrl || asset.iconUrl,
    renderUrl: npc.renderUrl || asset.renderUrl,
  };
});
