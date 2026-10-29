// mapsDatabase.js - Authentic Classic MapleStory Map Database & Live Hidden Portals

// Local Bundled Minimap Imports for Instant Offline Access
import ariantNorthMinimap from '../assets/maps/ariant-north-minimap.png';
import ariantNorthRender from '../assets/maps/ariant-north-render.png';
import pigBeachMinimap from '../assets/maps/pig-beach-minimap.png';
import pigBeachRender from '../assets/maps/pig-beach-render.png';
import threewaySplitMinimap from '../assets/maps/threeway-split-minimap.png';
import threewaySplitRender from '../assets/maps/threeway-split-render.png';
import blueMushroomMinimap from '../assets/maps/blue-mushroom-minimap.png';
import blueMushroomRender from '../assets/maps/blue-mushroom-render.png';
import forestEastHenesysMinimap from '../assets/maps/forest-east-henesys-minimap.png';
import wildBoarMinimap from '../assets/maps/wild-boar-minimap.png';
import wildBoarRender from '../assets/maps/wild-boar-render.png';
import eastRockyMountainMinimap from '../assets/maps/east-rocky-mountain-minimap.png';
import mushmomHouseMinimap from '../assets/maps/mushmom-house-minimap.png';
import mushmomHouseRender from '../assets/maps/mushmom-house-render.png';
import antTunnel1Minimap from '../assets/maps/ant-tunnel-1-minimap.png';
import antTunnelParkMinimap from '../assets/maps/ant-tunnel-park-minimap.png';
import hhg1Minimap from '../assets/maps/hhg1-minimap.png';
import sahel2Minimap from '../assets/maps/sahel-2-minimap.png';
import sahel2Render from '../assets/maps/sahel-2-render.png';
import coldCradleMinimap from '../assets/maps/cold-cradle-minimap.png';
import coldCradleRender from '../assets/maps/cold-cradle-render.png';
import hhg1Render from '../assets/maps/hhg1-render.png';
import treeDungeonMinimap from '../assets/maps/tree-dungeon-minimap.png';
import treeDungeonRender from '../assets/maps/tree-dungeon-render.png';
import monkeyForest2Minimap from '../assets/maps/monkey-forest-2-minimap.png';
import blueMushroomPortalImg from '../assets/portals/blue-mushroom-portal.jpg';

// --- Comprehensive Live In-Game Hidden Portals Catalog ---
export const LIVE_HIDDEN_PORTALS = {
  pigBeach: {
    id: 'pigBeach',
    monsterMatch: ['pig', 'ribbon pig', 'iron hog'],
    mapMatch: ['pig beach', '3-way', 'three-way', 'חוף החזירים', 'צומת 3 הדרכים'],
    nameHe: 'חוף החזירים הנסתר (The Pig Beach)',
    nameEn: 'Hidden Street: The Pig Beach',
    parentMapId: 104000100,
    parentMapNameHe: 'צומת שלושת הדרכים (3-Way Road-Split)',
    parentMapNameEn: 'Victoria Road: Three-Way Road-Split',
    targetMapId: 104010001,
    targetMapNameHe: 'חוף החזירים (The Pig Beach)',
    targetMapNameEn: 'Hidden Street: The Pig Beach',
    town: 'Lith Harbor / Henesys',
    townHe: 'נמל לית / הנסיס',
    mobs: ['Pig Lv.7', 'Ribbon Pig Lv.10', 'Iron Hog Lv.24'],
    recommendedLevel: 'Lv. 10-22',
    landmarkHe: 'שיח פרחים צהובים וגדר עץ לבנה בקצה השמאלי-תחתון של המפה (ליד שילוט הדרכים)',
    landmarkEn: 'Patch of yellow flowers & white wooden fence on the lower-left platform near the signpost',
    exactActionHe: 'רד לפלטפורמה הנמוכה בצד שמאל ליד גדר העץ הלבנה, עמוד בדיוק בתוך שיח הפרחים הצהובים ולחץ [↑ חץ למעלה] במקלדת.',
    warningTipHe: 'זהירות! אחת לכמה דקות מזמן בקרקעית המפה חזיר בר מברזל (Iron Hog Lv.24) שיכול לחסל שחקנים רמה 10-15 במכה אחת. מומלץ להישאר במדפים האמצעיים!',
    localMinimap: pigBeachMinimap,
    parentMinimap: threewaySplitMinimap,
    localRender: pigBeachRender,
    parentRender: threewaySplitRender,
    inGamePhoto: threewaySplitRender,
    portalCoords: { x: '18%', y: '82%' },
    photoCaption: 'עמוד על שיח הפרחים הצהובים ליד גדר העץ הלבנה בצד שמאל ולחץ [↑]'
  },

  blueMushroom: {
    id: 'blueMushroom',
    monsterMatch: ['blue mushroom', 'פטריות כחולות'],
    mapMatch: ['blue mushroom', 'forest east of henesys', 'היער מזרחית להנסיס'],
    nameHe: 'יער הפטריות הכחולות (The Blue Mushroom Forest)',
    nameEn: 'Hidden Street: The Blue Mushroom Forest',
    parentMapId: 100020000,
    parentMapNameHe: 'היער מזרחית להנסיס',
    parentMapNameEn: 'Victoria Road: The Forest East of Henesys',
    targetMapId: 100030001,
    targetMapNameHe: 'יער הפטריות הכחולות הנסתר',
    targetMapNameEn: 'Hidden Street: The Blue Mushroom Forest',
    town: 'Henesys',
    townHe: 'הנסיס',
    mobs: ['Blue Mushroom Lv.20'],
    recommendedLevel: 'Lv. 18-28',
    landmarkHe: 'פנס שילוט מעץ על ענף העץ הגבוה בצד שמאל של המפה',
    landmarkEn: 'Wooden street lamp on the high tree branch on the left side of the map',
    exactActionHe: 'טפס לצמרת ענף שמאל במפה, עמוד בצמוד לפנס השילוט מעץ ולחץ [↑ חץ למעלה] במקלדת.',
    warningTipHe: 'נקודת אימון מושלמת למתנקשים רמה 20+ עם כוכבי Lucky Seven. המפה אנכית ומאפשרת לזרוק כוכבים מלמעלה למטה בבטחה מבלי לספוג נזק מגע!',
    inGamePhoto: blueMushroomPortalImg,
    localMinimap: blueMushroomMinimap,
    parentMinimap: forestEastHenesysMinimap,
    localRender: blueMushroomRender,
    portalCoords: { x: '22%', y: '26%' },
    photoCaption: 'עמוד בצמוד לפנס השילוט מעץ על הענף הגבוה בצד שמאל ולחץ [↑]'
  },

  wildBoar: {
    id: 'wildBoar',
    monsterMatch: ['wild boar', 'fire boar', 'חזיר בר', 'חזיר אש'],
    mapMatch: ['wild boar', 'land of wild boar', 'east rocky mountain ii', 'הר הסלעים'],
    nameHe: 'ארץ חזירי הבר (The Land of Wild Boar I & II)',
    nameEn: 'Hidden Street: Land of Wild Boar',
    parentMapId: 102020300,
    parentMapNameHe: 'הר הסלעים המזרחי 2 (East Rocky Mountain II)',
    parentMapNameEn: 'Victoria Road: East Rocky Mountain II',
    targetMapId: 101040001,
    targetMapNameHe: 'ארץ חזירי הבר (Land of Wild Boar)',
    targetMapNameEn: 'Hidden Street: Land of Wild Boar',
    town: 'Perion',
    townHe: 'פריון',
    mobs: ['Wild Boar Lv.25', 'Fire Boar Lv.32', 'Dark Axe Stump Lv.22'],
    recommendedLevel: 'Lv. 24-35',
    landmarkHe: 'דלת עץ ענקית / מחסום קרשים חצוב בסלע האדום בין ההרים',
    landmarkEn: 'Large wooden barricade/door carved into the red rock cliff',
    exactActionHe: 'טפס במרכז המפה מול דלת העץ החצובה בסלע האדום, עמוד מול הדלת ולחץ [↑ חץ למעלה].',
    warningTipHe: 'זהו אחד ממוקדי האימון הרווחיים ביותר בעולם המשחק הקלאסי למתנקשים! קצב ספאון עצום. עמוד על המדפים הגבוהים והפצץ שוריקנים למטה.',
    inGamePhoto: wildBoarRender,
    localMinimap: wildBoarMinimap,
    parentMinimap: eastRockyMountainMinimap,
    localRender: wildBoarRender,
    portalCoords: { x: '46%', y: '58%' },
    photoCaption: 'עמוד מול דלת העץ הגדולה החצובה בסלע האדום ולחץ [↑]'
  },

  mushmom: {
    id: 'mushmom',
    monsterMatch: ['mushmom', 'מאשמם'],
    mapMatch: ['someone else', 'mushmom', 'hill east of henesys', 'הבית של מישהו אחר'],
    nameHe: "הבית של מישהו אחר (מאורת מאשמם - Mushmom)",
    nameEn: "Hidden Street: Someone Else's House",
    parentMapId: 100000005,
    parentMapNameHe: 'הגבעה מזרחית להנסיס (The Hill East of Henesys)',
    parentMapNameEn: 'Victoria Road: The Hill East of Henesys',
    targetMapId: 100000005,
    targetMapNameHe: "הבית של מישהו אחר (מאורת מאשמם)",
    targetMapNameEn: "Hidden Street: Someone Else's House",
    town: 'Henesys',
    townHe: 'הנסיס',
    mobs: ['Mushmom (Boss Lv.60)', 'Orange Mushroom Lv.8'],
    recommendedLevel: 'Lv. 55-70 (או ציידי בוסים)',
    landmarkHe: 'דלת העץ העגולה של בית הפטרייה הנטוש בצמרת הגבעה',
    landmarkEn: 'Round wooden door of the mushroom cottage at the top of the hill',
    exactActionHe: 'טפס לראש הגבעה מזרחית להנסיס, עמוד בדיוק בפתח דלת בית הפטרייה העגולה ולחץ [↑ חץ למעלה].',
    warningTipHe: 'מאשמם מפילה את ה-Ilbi Throwing-Stars הנדירים ביותר! זמן הספאון שלה הוא בין שעתיים וחצי ל-4 שעות מרגע ההריגה.',
    inGamePhoto: mushmomHouseRender,
    localMinimap: mushmomHouseMinimap,
    localRender: mushmomHouseRender,
    portalCoords: { x: '50%', y: '40%' },
    photoCaption: 'עמוד על סף דלת בית הפטרייה הנטוש בראש הגבעה ולחץ [↑]'
  },

  treeDungeon: {
    id: 'treeDungeon',
    monsterMatch: ['green mushroom', 'horny mushroom', 'slime', 'פטריות ירוקות'],
    mapMatch: ['tree dungeon', 'tree that grew', 'forest up north', 'מבוך העץ'],
    nameHe: 'מבוך העץ החלול (The Tree Dungeon באליניה)',
    nameEn: 'Hidden Street: Tree Dungeon, Forest Up North',
    parentMapId: 101010100,
    parentMapNameHe: 'היער צפונית לאליניה (The Forest North of Ellinia)',
    parentMapNameEn: 'Victoria Road: The Forest North of Ellinia',
    targetMapId: 101020002,
    targetMapNameHe: 'גזע העץ החלול (Tree Dungeon I)',
    targetMapNameEn: 'Victoria Road: Tree Dungeon, Forest Up North I',
    town: 'Ellinia',
    townHe: 'אליניה',
    mobs: ['Green Mushroom Lv.15', 'Horny Mushroom Lv.22', 'Slime Lv.6'],
    recommendedLevel: 'Lv. 15-25',
    landmarkHe: 'פתח חלול רחב בתחתית גזע העץ העתיק הענקי',
    landmarkEn: 'Hollow opening at the base of the giant ancient tree trunk',
    exactActionHe: 'היכנס לתוך החלל בבסיס העץ הענקי ולחץ [↑ חץ למעלה] כדי לעבור למבוך 4 הקומות הפנימי.',
    warningTipHe: 'חלל עץ סגור ונוח מאוד לגנבים — שפע ענפים צרים המאפשרים לזרוק שוריקנים מכל קומה בלי לספוג מכות.',
    localMinimap: treeDungeonMinimap,
    localRender: treeDungeonRender,
    inGamePhoto: treeDungeonRender,
    portalCoords: { x: '48%', y: '78%' },
    photoCaption: 'היכנס לפתח בבסיס גזע העץ הענקי ולחץ [↑]'
  },

  antTunnelPark: {
    id: 'antTunnelPark',
    monsterMatch: ['zombie mushroom', 'horned mushroom', 'זומבי מאשרום'],
    mapMatch: ['ant tunnel park', 'ant tunnel', 'מנהרת הנמלים'],
    nameHe: 'פארק מנהרת הנמלים (The Ant Tunnel Park)',
    nameEn: 'Hidden Street: The Ant Tunnel Park',
    parentMapId: 105050000,
    parentMapNameHe: 'מנהרת הנמלים 1 (Ant Tunnel I)',
    parentMapNameEn: 'Dungeon: Ant Tunnel I',
    targetMapId: 105070001,
    targetMapNameHe: 'פארק מנהרת הנמלים',
    targetMapNameEn: 'Hidden Street: The Ant Tunnel Park',
    town: 'Sleepywood',
    townHe: 'סליפיווד',
    mobs: ['Zombie Mushroom Lv.24', 'Horned Mushroom Lv.22'],
    recommendedLevel: 'Lv. 22-30',
    landmarkHe: 'עמוד נטיפים ירוק מואר וצביר שורשי פטריות זוהרים במעמקי המנהרה',
    landmarkEn: 'Glowing green crystal stalactites & root cluster deep in the tunnel',
    exactActionHe: 'עמוד במרכז מנהרת הנמלים מול עמוד הנטיפים הירוק הזוהר ושורשי הפטריות ולחץ [↑ חץ למעלה].',
    warningTipHe: 'נווה מדבר תת-קרקעי במעמקי סליפיווד: כולל סאונה למילוי HP/MP, מוכר שיקויים VIP, וריכוז ספאון גבוה של פטריות זומבי.',
    localMinimap: antTunnelParkMinimap,
    parentMinimap: antTunnel1Minimap,
    portalCoords: { x: '52%', y: '65%' },
    photoCaption: 'עמוד מול עמוד הנטיפים הזוהר בעומק המנהרה ולחץ [↑]'
  },

  ariantSecretOasis: {
    id: 'ariantSecretOasis',
    monsterMatch: ['sand rabbit', 'rabbit', 'ארנב מדבר', 'קקטוס'],
    mapMatch: ['outside north entrance of ariant', 'ariant', 'sahel', 'שער צפוני אריאנט'],
    nameHe: 'מעבר הסתרים של מורדי החול באריאנט (Sand Bandits)',
    nameEn: 'The Secret Oasis & Palace Hidden Passages',
    parentMapId: 260020000,
    parentMapNameHe: 'השער הצפוני של אריאנט (Outside North Entrance of Ariant)',
    parentMapNameEn: 'The Burning Sands: Outside North Entrance of Ariant',
    targetMapId: 260000200,
    targetMapNameHe: 'מעבר הסתרים של מורדי החול (Palace Secret Way)',
    targetMapNameEn: 'Hidden Street: Palace Secret Way',
    town: 'Ariant',
    townHe: 'אריאנט',
    mobs: ['Sand Rabbit (Brown) Lv.20', 'Sand Rabbit (White) Lv.21', 'Bellflower Root Lv.23'],
    recommendedLevel: 'Lv. 20-30',
    landmarkHe: 'אוהל הנוודים עם שטיח החול המלכותי ובאר המים הסודית בתוואי המדבר',
    landmarkEn: 'Nomad tent with tapestry & hidden oasis well in the desert sands',
    exactActionHe: 'עמוד בפתח האוהל מול כד החרס החצי-קבור בחול ולחץ [↑ חץ למעלה].',
    warningTipHe: 'מעבר סודי עוקף המאפשר להיכנס ישירות לתוך ארמון אריאנט בלי לשלם 10,000 מזוס לשומרים החמדנים בשער!',
    localMinimap: ariantNorthMinimap,
    localRender: ariantNorthRender,
    inGamePhoto: ariantNorthRender,
    portalCoords: { x: '35%', y: '70%' },
    photoCaption: 'עמוד בפתח האוהל המדברי ליד כד החרס בחול ולחץ [↑]'
  }
};

// --- Comprehensive Real Map Registry ---
export const REAL_MAPS_REGISTRY = {
  // 1. Outside North Entrance of Ariant (Sand Rabbit Brown)
  'ariant_north': {
    mapId: 260020000,
    nameHe: 'השער הצפוני של אריאנט',
    nameEn: 'Outside North Entrance of Ariant',
    streetName: 'The Burning Sands (מדבר ניהאל)',
    town: 'Ariant',
    townHe: 'אריאנט',
    minimapUrl: ariantNorthMinimap,
    renderUrl: ariantNorthRender,
    bgTheme: 'desert',
    terrainDescHe: 'דיונות חול מדבריות רחבות ופתוחות, עצי דקל ושער אבן חול מונומנטלי.',
    mobsPresent: ['Sand Rabbit (Brown) Lv.20', 'Sand Rabbit (White) Lv.21', 'Meercat Lv.24'],
    mobSpawnRate: 'צפיפות ספאון גבוהה מאוד בקרקעית הדיונות (אחד ממוקדי האימון הטובים למתנקש רמה 20-30)',
    snipingSpotHe: 'חומת אבן חול מוגבהת מעל המישור (אין מגע עם ארנבים - טווח צליפת Lucky Seven אידיאלי)',
    npcs: ['Le Petit Prince (הנסיך הקטן)', 'Camel Cab (מונית גמלים)'],
    portals: [
      { name: 'שער דרומי לעיר אריאנט [↑]', toMap: 'Ariant Town', x: 12, y: 82 },
      { name: 'שער צפוני לדרך המדבר 1 [↑]', toMap: 'North Desert Road 1', x: 88, y: 18 }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.ariantSecretOasis
  },

  // 2. The Pig Beach (Pig & Ribbon Pig)
  'pig_beach': {
    mapId: 104010001,
    nameHe: 'חוף החזירים הנסתר (The Pig Beach)',
    nameEn: 'Hidden Street: The Pig Beach',
    streetName: 'Hidden Street',
    town: 'Lith Harbor / Henesys',
    townHe: 'נמל לית / הנסיס',
    minimapUrl: pigBeachMinimap,
    renderUrl: pigBeachRender,
    bgTheme: 'beach',
    terrainDescHe: 'חוף חולי עם 4 מפלסי עץ וענפים עמוסי חזירים.',
    mobsPresent: ['Pig Lv.7', 'Ribbon Pig Lv.10', 'Iron Hog Lv.24'],
    mobSpawnRate: 'ספאון חזירים מסיבי ורציף בכל הקומות',
    snipingSpotHe: 'ענף עץ עליון צד שמאל - טווח ראייה מלא לכל חצי המפה',
    portals: [
      { name: 'יציאה לצומת שלושת הדרכים [↑]', toMap: '3-Way Road-Split', x: 10, y: 82 }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.pigBeach
  },

  // 3. Three-Way Road-Split (Parent map for Pig Beach)
  'threeway_split': {
    mapId: 104000100,
    nameHe: 'צומת שלושת הדרכים (3-Way Road-Split)',
    nameEn: 'Victoria Road: Three-Way Road-Split',
    streetName: 'Victoria Road',
    town: 'Lith Harbor',
    townHe: 'נמל לית',
    minimapUrl: threewaySplitMinimap,
    renderUrl: threewaySplitRender,
    bgTheme: 'grass',
    terrainDescHe: 'צומת הדרכים המרכזי של ויקטוריה איילנד. מכיל את הפורטל הנסתר לחוף החזירים.',
    portals: [
      { name: 'שער מערבי לנמל לית [↑]', toMap: 'Lith Harbor', x: 5, y: 80 },
      { name: 'שער מזרחי להנסיס [↑]', toMap: 'Henesys', x: 95, y: 80 },
      { name: 'פורטל סודי לחוף החזירים [↑]', toMap: 'The Pig Beach', x: 18, y: 82, isSecret: true }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.pigBeach
  },

  // 4. Blue Mushroom Forest
  'blue_mushroom': {
    mapId: 100030001,
    nameHe: 'יער הפטריות הכחולות (The Blue Mushroom Forest)',
    nameEn: 'Hidden Street: The Blue Mushroom Forest',
    streetName: 'Hidden Street',
    town: 'Henesys',
    townHe: 'הנסיס',
    minimapUrl: blueMushroomMinimap,
    renderUrl: blueMushroomRender,
    bgTheme: 'forest',
    terrainDescHe: 'חלל יער אנכי סודי עמוס פטריות כחולות.',
    mobsPresent: ['Blue Mushroom Lv.20'],
    mobSpawnRate: 'צפיפות פטריות גבוהה מאוד במדפים',
    snipingSpotHe: 'צמרת עץ שמאל ליד הפנס - לזרוק כוכבים מלמעלה',
    portals: [
      { name: 'יציאה ליער מזרחית להנסיס [↑]', toMap: 'The Forest East of Henesys', x: 22, y: 26 }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.blueMushroom
  },

  // 5. Land of Wild Boar (Wild Boar & Fire Boar)
  'wild_boar': {
    mapId: 101040001,
    nameHe: 'ארץ חזירי הבר (Land of Wild Boar)',
    nameEn: 'Hidden Street: Land of Wild Boar',
    streetName: 'Hidden Street',
    town: 'Perion',
    townHe: 'פריון',
    minimapUrl: wildBoarMinimap,
    renderUrl: wildBoarRender,
    bgTheme: 'canyon',
    terrainDescHe: 'קניון סלעי אדום סודי עם דלת חצובה ומדרגות סלע.',
    mobsPresent: ['Wild Boar Lv.25', 'Fire Boar Lv.32', 'Dark Axe Stump Lv.22'],
    mobSpawnRate: 'קצב הריגה וספאון מהיר ביותר',
    snipingSpotHe: 'מדפי הסלע האמצעיים - אין מגע עם מטעני חזירי הבר',
    portals: [
      { name: 'יציאה להר הסלעים המזרחי 2 [↑]', toMap: 'East Rocky Mountain II', x: 12, y: 78 }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.wildBoar
  },

  // 6. Someone Else's House (Mushmom)
  'mushmom': {
    mapId: 100000005,
    nameHe: "הבית של מישהו אחר (Someone Else's House)",
    nameEn: "Hidden Street: Someone Else's House",
    streetName: 'Hidden Street',
    town: 'Henesys',
    townHe: 'הנסיס',
    minimapUrl: mushmomHouseMinimap,
    renderUrl: mushmomHouseRender,
    bgTheme: 'henesys',
    terrainDescHe: 'חדר סודי בתוך בית הפטרייה בראש הגבעה. מאורת הבוס מאשמם.',
    mobsPresent: ['Mushmom (Boss Lv.60)', 'Orange Mushroom Lv.8'],
    mobSpawnRate: 'בוסית אחת כל 2.5-4 שעות',
    snipingSpotHe: 'מדף עץ ימני עליון מעל מאשמם - זריקת שוריקנים בטוחה מרחוק',
    portals: [
      { name: 'יציאה לגבעה מזרחית להנסיס [↑]', toMap: 'The Hill East of Henesys', x: 15, y: 80 }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.mushmom
  },

  // 7. Ant Tunnel Park (Zombie Mushroom)
  'ant_tunnel_park': {
    mapId: 105070001,
    nameHe: 'פארק מנהרת הנמלים (The Ant Tunnel Park)',
    nameEn: 'Hidden Street: The Ant Tunnel Park',
    streetName: 'Dungeon',
    town: 'Sleepywood',
    townHe: 'סליפיווד',
    minimapUrl: antTunnelParkMinimap,
    bgTheme: 'cave',
    terrainDescHe: 'מתחם רגיעה ומסחר תת-קרקעי עם ספאון פטריות זומבי.',
    mobsPresent: ['Zombie Mushroom Lv.24', 'Horned Mushroom Lv.22'],
    portals: [
      { name: 'יציאה למנהרת הנמלים 1 [↑]', toMap: 'Ant Tunnel I', x: 10, y: 85 }
    ],
    hiddenPortal: LIVE_HIDDEN_PORTALS.antTunnelPark
  },

  // 8. Henesys Hunting Ground I (HHG1)
  'hhg1': {
    mapId: 104040000,
    nameHe: 'גבעת הנסיס 1 (Henesys Hunting Ground I)',
    nameEn: 'Victoria Road: Henesys Hunting Ground I',
    streetName: 'Victoria Road',
    town: 'Henesys',
    townHe: 'הנסיס',
    minimapUrl: hhg1Minimap,
    renderUrl: hhg1Render,
    bgTheme: 'henesys',
    terrainDescHe: 'שדה האימונים המפורסם ביותר בכל הזמנים ברמות 1-15.',
    mobsPresent: ['Snail Lv.1', 'Blue Snail Lv.2', 'Red Snail Lv.5', 'Slime Lv.6', 'Orange Mushroom Lv.8', 'Green Mushroom Lv.15'],
    snipingSpotHe: 'ענף שמאל עליון (רמה 10+ יכולים להפגיז סליימים ללא מגע)'
  },

  // 9. The Tree Dungeon (Ellinia)
  'tree_dungeon': {
    mapId: 101020002,
    nameHe: 'גזע העץ החלול (The Tree Dungeon באליניה)',
    nameEn: 'Victoria Road: Tree Dungeon, Forest Up North I',
    streetName: 'Victoria Road (Ellinia)',
    town: 'Ellinia',
    townHe: 'אליניה',
    minimapUrl: treeDungeonMinimap,
    renderUrl: treeDungeonRender,
    bgTheme: 'forest',
    terrainDescHe: 'חלל עץ פנימי ענקי בעל 4 קומות עמוסות פטריות ירוקות וקוצניות.',
    mobsPresent: ['Green Mushroom Lv.15', 'Horny Mushroom Lv.22', 'Slime Lv.6'],
    mobSpawnRate: 'צפיפות פטריות מטורפת בכל קומה - נקיון מהיר עם שוריקנים',
    snipingSpotHe: 'ענפי הצמרת בקומה 4 מאפשרים הפגזת Lucky Seven בטוחה ללא שום מגע!',
    hiddenPortal: LIVE_HIDDEN_PORTALS.treeDungeon
  },

  // 10. The Sahel 2 (Scorpion & Sand Mole)
  'sahel_2': {
    mapId: 260020600,
    nameHe: 'סאהל 2 (The Sahel 2)',
    nameEn: 'Sunset Road: Sahel 2',
    streetName: 'Sunset Road (מדבר אריאנט / מגטיה)',
    town: 'Magatia / Ariant',
    townHe: 'מגטיה / אריאנט',
    minimapUrl: sahel2Minimap,
    renderUrl: sahel2Render,
    bgTheme: 'desert',
    terrainDescHe: 'הקו הישר המושלם בעולם המשחק לאימון מהיר ורצוף.',
    mobsPresent: ['Scorpion Lv.52', 'Sand Mole Lv.54'],
    mobSpawnRate: 'צפיפות קיצונית של עקרבים וחולדי חול בקו ישר אחד',
    snipingSpotHe: 'מישור פתוח ורחב - מומלץ Flash Jump + Lucky Seven מקצה לקצה'
  },

  // 11. Cold Cradle (Drake)
  'cold_cradle': {
    mapId: 105090300,
    nameHe: 'ערש הקור - מאורת הדרקונים (Cold Cradle)',
    nameEn: 'Dungeon: Cold Cradle',
    streetName: 'Dungeon (Sleepywood)',
    town: 'Sleepywood',
    townHe: 'סליפיווד',
    minimapUrl: coldCradleMinimap,
    renderUrl: coldCradleRender,
    bgTheme: 'cave',
    terrainDescHe: 'מערת נטיפים עמוקה וקרה המאוכלסת בדרקונים אדומים וכחולים.',
    mobsPresent: ['Drake Lv.50', 'Red Drake Lv.60', 'Ice Drake Lv.64'],
    mobSpawnRate: 'ספאון דרקונים איכותי עם נפילות נשק שוות',
    snipingSpotHe: 'פלטפורמות סלע עליונות מעל ראשי הדרקונים'
  }
};

// Helper: Resolve any location string, town or monster object to authentic real map data
export function getRealMapData(locationName, town, monster) {
  const locStr = (locationName || '').toLowerCase();
  const townStr = (town || monster?.town || '').toLowerCase();
  const mobStr = (monster?.name || '').toLowerCase();

  // 1. Sand Rabbit / Outside North Entrance of Ariant
  if (locStr.includes('north entrance') || locStr.includes('outside north') || locStr.includes('ariant') || mobStr.includes('sand rabbit') || townStr.includes('ariant')) {
    if (locStr.includes('sahel 2') || locStr.includes('sahel2')) {
      return REAL_MAPS_REGISTRY.sahel_2;
    }
    return REAL_MAPS_REGISTRY.ariant_north;
  }

  // 2. Pig Beach
  if (locStr.includes('pig beach') || locStr.includes('חוף החזירים') || mobStr.includes('ribbon pig') || mobStr.includes('pig')) {
    return REAL_MAPS_REGISTRY.pig_beach;
  }

  // 3. Three-Way Road-Split
  if (locStr.includes('3-way') || locStr.includes('three-way') || locStr.includes('צומת 3')) {
    return REAL_MAPS_REGISTRY.threeway_split;
  }

  // 4. Blue Mushroom
  if (locStr.includes('blue mushroom') || mobStr.includes('blue mushroom')) {
    return REAL_MAPS_REGISTRY.blue_mushroom;
  }

  // 5. Land of Wild Boar
  if (locStr.includes('wild boar') || mobStr.includes('wild boar') || mobStr.includes('fire boar')) {
    return REAL_MAPS_REGISTRY.wild_boar;
  }

  // 6. Mushmom
  if (locStr.includes('mushmom') || mobStr.includes('mushmom') || locStr.includes('someone else')) {
    return REAL_MAPS_REGISTRY.mushmom;
  }

  // 7. Ant Tunnel Park / Zombie Mushroom
  if (locStr.includes('ant tunnel park') || mobStr.includes('zombie mushroom')) {
    return REAL_MAPS_REGISTRY.ant_tunnel_park;
  }

  // 8. Sahel 2
  if (locStr.includes('sahel') || mobStr.includes('scorpion') || mobStr.includes('sand mole')) {
    return REAL_MAPS_REGISTRY.sahel_2;
  }

  // 9. Drake / Cold Cradle
  if (locStr.includes('cradle') || locStr.includes('drake') || mobStr.includes('drake')) {
    return REAL_MAPS_REGISTRY.cold_cradle;
  }

  // 10. Henesys Hunting Ground (HHG1)
  if (locStr.includes('hhg1') || locStr.includes('hunting ground i')) {
    return REAL_MAPS_REGISTRY.hhg1;
  }

  // 11. Tree Dungeon (Ellinia)
  if (locStr.includes('tree dungeon') || locStr.includes('tree that grew') || locStr.includes('גזע העץ')) {
    return REAL_MAPS_REGISTRY.tree_dungeon;
  }

  // Fallback: build a dynamic authentic data object with maplestory.io URLs
  return {
    mapId: 100000000,
    nameHe: locationName || `${town || 'Victoria Island'} Hunting Grounds`,
    nameEn: locationName || `${town || 'Victoria Island'} Hunting Grounds`,
    streetName: town || 'Victoria Island',
    town: town || 'Victoria Island',
    townHe: town || 'ויקטוריה איילנד',
    minimapUrl: `https://maplestory.io/api/gms/83/map/100000000/minimap`,
    renderUrl: `https://maplestory.io/api/gms/83/map/100000000/render`,
    bgTheme: 'grass',
    terrainDescHe: 'שדה אימונים אותנטי מעולם מייפל סטורי הקלאסי.',
    mobsPresent: monster ? [`${monster.name} Lv.${monster.level}`] : [],
    snipingSpotHe: 'עמדת יתרון גובה על ענף או מדרגת סלע לזריקת שוריקנים בטוחה.'
  };
}

// Helper: Check if monster or map has a live hidden portal example
export function getLiveHiddenPortal(monster, locationName) {
  const mName = (monster?.name || '').toLowerCase();
  const mHe = (monster?.nameHe || '').toLowerCase();
  const loc = (locationName || '').toLowerCase();

  for (const key of Object.keys(LIVE_HIDDEN_PORTALS)) {
    const p = LIVE_HIDDEN_PORTALS[key];
    const matchMob = p.monsterMatch?.some(term => mName.includes(term) || mHe.includes(term));
    const matchMap = p.mapMatch?.some(term => loc.includes(term));
    if (matchMob || matchMap) {
      return p;
    }
  }

  // Check if monster object already has hiddenPortal attribute from monsters.js
  if (monster?.hiddenPortal) {
    return {
      ...monster.hiddenPortal,
      nameHe: monster.hiddenPortal.targetMap,
      nameEn: monster.hiddenPortal.targetMap,
      landmarkHe: monster.hiddenPortal.landmark,
      exactActionHe: monster.hiddenPortal.howToEnter || monster.hiddenPortal.coordinates,
      warningTipHe: monster.hiddenPortal.warningTip
    };
  }

  return null;
}
