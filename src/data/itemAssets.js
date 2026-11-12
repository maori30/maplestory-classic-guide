// MapleStory Pre-BigBang Item & Weapon Icon Asset Resolver
// Resolves official pixel-art icons from MeowDB & MapleStory.io
import { ITEMS_DATABASE } from './items.js';

// Pre-indexed map of all item catalog IDs from ITEMS_DATABASE
const GLOBAL_ITEM_WZ_MAP = new Map();
if (Array.isArray(ITEMS_DATABASE)) {
  for (const item of ITEMS_DATABASE) {
    if (item.catalogId) {
      const numId = parseInt(String(item.catalogId).replace(/^[a-z]+:/i, ''), 10);
      if (!isNaN(numId)) {
        if (item.name) GLOBAL_ITEM_WZ_MAP.set(item.name.toLowerCase().trim(), numId);
        if (item.nameHe) GLOBAL_ITEM_WZ_MAP.set(item.nameHe.toLowerCase().trim(), numId);
        if (item.id) GLOBAL_ITEM_WZ_MAP.set(item.id.toLowerCase().trim(), numId);
      }
    }
  }
}

export const WEAPON_WZ_MAP = {
  // === Claws (Thief / Assassin) - with and without prefix ===
  'claw-garnier': 1472000,
  'garnier': 1472000,
  'claw-mountain-snake': 1472001,
  'mountain-snake': 1472001,
  'claw-meba': 1472007,
  'meba': 1472007,
  'claw-iron-igor': 1472004,
  'iron-igor': 1472004,
  'claw-steel-igor': 1472005,
  'steel-igor': 1472005,
  'claw-slain': 1472018,
  'slain': 1472018,
  'claw-korean-fan': 1332020,
  'korean-fan': 1332020,
  'claw-maple-claw': 1472030,
  'maple-claw': 1472030,
  'claw-bronze-igrit': 1472021,
  'bronze-igrit': 1472021,
  'claw-scarab': 1472028,
  'scarab': 1472028,
  'blue-scarab': 1472028,
  'claw-maple-kandayo': 1472032,
  'maple-kandayo': 1472032,
  'claw-black-scarab': 1472037,
  'black-scarab': 1472037,
  'claw-dark-hinkel': 1472035,
  'dark-hinkel': 1472035,
  'claw-red-anis': 1472044,
  'red-anis': 1472044,
  'claw-dragon-purple-sleeve': 1472051,
  'dragon-purple-sleeve': 1472051,
  'claw-maple-skanda': 1472055,
  'maple-skanda': 1472055,
  'claw-casters': 1472056,
  'casters': 1472056,

  // === Throwing Stars (Assassin Secondary / Ammunition) - with and without prefix ===
  'star-subi': 2070000,
  'subi': 2070000,
  'star-wolbi': 2070001,
  'wolbi': 2070001,
  'star-wooden-top': 2070009,
  'wooden-top': 2070009,
  'star-mokbi': 2070002,
  'mokbi': 2070002,
  'star-kumbi': 2070003,
  'kumbi': 2070003,
  'star-tobi': 2070004,
  'tobi': 2070004,
  'star-steely': 2070005,
  'steely': 2070005,
  'star-ilbi': 2070006,
  'ilbi': 2070006,
  'star-hwabi': 2070007,
  'hwabi': 2070007,
  'star-snowball': 2070008,
  'snowball': 2070008,
  'star-icicle': 2070010,
  'icicle': 2070010,
  'star-maple-star': 2070011,
  'maple-star': 2070011,
  'star-balanced-fury': 2070018,
  'balanced-fury': 2070018,

  // === Daggers (Bandit / Thief) ===
  'dagger-fruit-knife': 1332007,
  'fruit-knife': 1332007,
  'dagger-forked-dagger': 1332014,
  'forked-dagger': 1332014,
  'dagger-stiletto': 1332009,
  'stiletto': 1332009,
  'dagger-maple-dagger': 1332025,
  'maple-dagger': 1332025,
  'dagger-gecko-knife': 1332011,
  'gecko-knife': 1332011,
  'dagger-bazlud': 1332017,
  'bazlud': 1332017,
  'dagger-shinkita': 1332019,
  'shinkita': 1332019,
  'dagger-dragon-toenail': 1332023,
  'dragon-toenail': 1332023,

  // === Cleric / Priest / Bishop Wands & Staffs ===
  'mage-wooden-wand': 1372005,
  'wooden-wand': 1372005,
  'mage-wizard-wand': 1372027,
  'wizard-wand': 1372027,
  'mage-wizard-staff': 1382004,
  'wizard-staff': 1382004,
  'mage-maple-staff': 1382009,
  'maple-staff': 1382009,
  'mage-maple-lama-staff': 1382016,
  'maple-lama-staff': 1382016,
  'mage-thorns': 1382006,
  'thorns': 1382006,
  'mage-evil-tale': 1372009,
  'evil-tale': 1372009,
  'mage-dark-ritual': 1382012,
  'dark-ritual': 1382012,

  // === I/L & F/P Arch Mage ===
  'il-wooden-wand': 1372005,
  'il-maple-staff': 1382009,
  'il-maple-lama-staff': 1382016,
  'il-dark-ritual': 1382012,

  // === Swords (Warrior / Fighter / Crusader / Hero / Page) ===
  'sword-wooden-club': 1322000,
  'wooden-club': 1322000,
  'sword-gladius': 1302008,
  'gladius': 1302008,
  'sword-maple-sword': 1302020,
  'maple-sword': 1302020,
  'sword-maple-soul-singer': 1302030,
  'maple-soul-singer': 1302030,
  'sword-sparta': 1302023,
  'sparta': 1302023,
  'sword-japanese-dual-blade': 1302024,
  'japanese-dual-blade': 1302024,
  'sword-doombringer': 1402010,
  'doombringer': 1402010,
  'sword-dragon-carabela': 1402014,
  'dragon-carabela': 1402014,

  // === Spears & Polearms (Spearman / Dragon Knight / Dark Knight) ===
  'spear-fish-spear': 1432002,
  'fish-spear': 1432002,
  'spear-maple-spear': 1432012,
  'maple-spear': 1432012,
  'polearm-snowboard': 1442018,
  'snowboard': 1442018,
  'spear-maple-impaler': 1432014,
  'maple-impaler': 1432014,
  'spear-serpents-tongue': 1432006,
  'serpents-tongue': 1432006,
  'spear-fairfrozen': 1432011,
  'fairfrozen': 1432011,
  'two-hand-note': 1432002,

  // === Bows & Crossbows (Bowman / Hunter / Ranger / Bowmaster / Crossbowman) ===
  'bow-war-bow': 1452000,
  'war-bow': 1452000,
  'bow-battle-bow': 1452003,
  'battle-bow': 1452003,
  'bow-ryden': 1452004,
  'ryden': 1452004,
  'bow-maple-bow': 1452011,
  'maple-bow': 1452011,
  'bow-red-viper': 1452005,
  'red-viper': 1452005,
  'bow-maple-hunter-bow': 1452016,
  'maple-hunter-bow': 1452016,
  'bow-golden-river': 1462007,
  'golden-river': 1462007,
  'bow-metus': 1452019,
  'metus': 1452019,

  // === Guns (Pirate / Gunslinger / Outlaw / Corsair) ===
  'gun-novice-gun': 1492000,
  'novice-gun': 1492000,
  'gun-pistol': 1492001,
  'pistol': 1492001,
  'gun-cold-mind': 1492002,
  'cold-mind': 1492002,
  'gun-maple-gun': 1492014,
  'maple-gun': 1492014,
  'gun-shooting-star': 1492004,
  'shooting-star': 1492004,
  'gun-maple-storm-pistol': 1492020,
  'maple-storm-pistol': 1492020,
  'gun-vepar': 1492007,
  'vepar': 1492007,
  'gun-concerto': 1492012,
  'concerto': 1492012,

  // === Shields, Ammunition & Secondary ===
  'shield-pan-lid': 1092008,
  'pan-lid': 1092008,
  'shield-stolen-fence': 1092000,
  'stolen-fence': 1092000,
  'shield-maple-shield': 1092030,
  'maple-shield': 1092030,
  'shield-esther-shield': 1092011,
  'esther-shield': 1092011,
  'shield-tower-shield': 1092013,
  'tower-shield': 1092013,
  'arrow-regular': 2060000,
  'bow-arrow': 2060000,
  'arrow-titanium': 2060001,
  'steel-arrows': 2060001,
  'bullet-basic': 2330000,
  'basic-bullets': 2330000,
  'bullet-micro-shot': 2330001,
  'micro-shot': 2330001,
  'bullet-silver': 2330002,
  'silver-bullets': 2330002,
  'bullet-vital': 2330003,
  'vital-bullets': 2330003,

  // === Essential Gear ===
  'brown-bamboo-hat': 1002026,
  'bamboo-hat': 1002026,
  'work-gloves': 1082002,
  'bathrobe': 1050100,
  'bathrobe-for-men': 1050100,
  'bathrobe-for-women': 1051098,
  'sauna-robe': 1050100,
  'saunabi-robe': 1050100,
  'snowshoes': 1072169,
  'blue-snowshoes': 1072169,
  'red-snowshoes': 1072168,
  'black-snowshoes': 1072171,
  'icarus-cape': 1102054,
  'zakum-helmet': 1002357,
  'yellow-work-gloves': 1082149,
  'red-burgler': 1002176,
  'blue-burgler': 1002177,
  'green-burgler': 1002178,
  'brown-burgler': 1002179,
  'dark-burgler': 1002180,
};

// Known drop name and search mappings
export const DROP_NAME_TO_WZ_ID = {
  'brown bamboo hat': 1002026,
  'bamboo hat': 1002026,
  'bathrobe for men': 1050100,
  'bathrobe for women': 1051098,
  'bathrobe for men/women': 1050100,
  'bathrobe for men/women (+luk)': 1050100,
  'sauna robe': 1050100,
  'saunabi robe': 1050100,
  'blue sauna robe': 1050018,
  'red sauna robe': 1051017,
  'work gloves': 1082002,
  'yellow work gloves': 1082149,
  'brown work gloves': 1082149,
  'pan lid': 1092008,
  'stolen fence': 1092000,
  'squishy shoes': 1072153,
  'red burgler': 1002176,
  'blue burgler': 1002177,
  'green burgler': 1002178,
  'brown burgler': 1002179,
  'dark burgler': 1002180,
  'icarus cape': 1102054,
  'blue icarus cape': 1102054,
  'green icarus cape': 1102055,
  'yellow icarus cape': 1102056,
  'icarus cape (1)': 1102054,
  'icarus cape (2)': 1102055,
  'icarus cape (3)': 1102056,
  'zakum helmet': 1002357,
  'snowshoes': 1072169,
  'blue snowshoes': 1072169,
  'red snowshoes': 1072168,
  'black snowshoes': 1072171,
  'yellow snowshoes': 1072239,
  'violet snowshoes': 1072238,
  'garnier': 1472000,
  'mountain snake': 1472001,
  'iron igor': 1472003,
  'steel igor': 1472005,
  'meba': 1472007,
  'stealth thieves': 1472009,
  'slain': 1472018,
  'bronze igrit': 1472021,
  'iron igrit': 1472022,
  'steel igrit': 1472023,
  'adamantium igrit': 1472024,
  'maple claw': 1472027,
  'scarab': 1472028,
  'blue scarab': 1472028,
  'green scarab': 1472029,
  'black scarab': 1472030,
  'gold scarab': 1472031,
  'maple kandayo': 1472032,
  'dark hinkel': 1472035,
  'blood gigantic': 1472038,
  'dark gigantic': 1472040,
  'dragon purple sleeve': 1472051,
  'maple skanda': 1472055,
  'fruit knife': 1332007,
  'stiletto': 1332009,
  'korean fan': 1332020,
  'forked dagger': 1332014,
  'gecko knife': 1332011,
  'bazlud': 1332017,
  'shinkita': 1332019,
  'maple wagstaff': 1332025,
  'maple dagger': 1332025,
  'wooden staff': 1382000,
  'wooden wand': 1372005,
  'wizard wand': 1372027,
  'fairies wand': 1372000,
  'mithril pole arm': 1442004,
  'black knucklevest': 1040063,
  'black sneak pants': 1060039,
  'bennis chainpants': 1062006,
  'bennis chain pants': 1062006,
  'green bennis chainmail (f)': 1041032,
  'blue pao bottoms': 1060031,
  'black pao bottoms': 1060033,
  'subi': 2070000,
  'subi throwing-stars': 2070000,
  'subi throwing stars': 2070000,
  'wolbi': 2070001,
  'wolbi throwing-stars': 2070001,
  'wolbi throwing stars': 2070001,
  'mokbi': 2070002,
  'mokbi throwing-stars': 2070002,
  'mokbi throwing stars': 2070002,
  'kumbi': 2070003,
  'kumbi throwing-stars': 2070003,
  'kumbi throwing stars': 2070003,
  'tobi': 2070004,
  'tobi throwing-stars': 2070004,
  'tobi throwing stars': 2070004,
  'tobis': 2070004,
  'steely': 2070005,
  'steely throwing-stars': 2070005,
  'steely throwing stars': 2070005,
  'steely throwing-knives': 2070005,
  'ilbi': 2070006,
  'ilbi throwing-stars': 2070006,
  'ilbi throwing stars': 2070006,
  'hwabi': 2070007,
  'hwabi throwing-stars': 2070007,
  'hwabi throwing stars': 2070007,
  'snowball': 2070008,
  'snowballs': 2070008,
  'wooden top': 2070009,
  'wooden-top': 2070009,
  'icicle': 2070010,
  'icicles': 2070010,
  'maple star': 2070011,
  'maple throwing-stars': 2070011,
  'crystal ilbi': 2070016,
  'crystal ilbi throwing-stars': 2070016,
  'balanced fury': 2070018,
  'snail shell': 4000019,
  'blue snail shell': 4000000,
  'red snail shell': 4000016,
  'slime bubble': 4000010,
  'squishy liquid': 4000004,
  'mushroom spore': 4000011,
  'orange mushroom cap': 4000001,
  'green mushroom cap': 4000012,
  'blue mushroom cap': 4000013,
  'leather': 4000021,
  "pig's head": 4000017,
  'pig head': 4000017,
  "pig's ribbon": 4000002,
  'octopus leg': 4000006,
  'bubbling bubble': 4000014,
  'evil eye tail': 4000007,
  'curse eye tail': 4000008,
  'cold eye tail': 4000018,
  'fire boar tooth': 4000009,
  'wild boar tooth': 4000020,
  'stiff feather': 4000022,
  'animal skin': 4000021,
  'iron ore': 4010001,
  'bronze ore': 4010000,
  'mithril ore': 4010002,
  'gold ore': 4010006,
  'diamond ore': 4020007,
  'dark crystal ore': 4020009,
  'red potion': 2000000,
  'orange potion': 2000001,
  'white potion': 2000002,
  'blue potion': 2000003,
  'mana elixir': 2000006,
  'elixir': 2000004,
  'power elixir': 2000005,
};

/**
 * Returns primary MeowDB icon URL for a numeric item WZ ID
 */
export function getWzIconUrl(wzId) {
  if (!wzId) return null;
  return `https://meowdb.com/msclassic/api/assets/icons/${wzId}`;
}

/**
 * Returns fallback MapleStory.io icon URL for a numeric item WZ ID
 */
export function getWzIconFallbackUrl(wzId) {
  if (!wzId) return null;
  return `https://maplestory.io/api/gms/62/item/${wzId}/icon`;
}

/**
 * Resolves WZ ID for any weapon, throwing star, or secondary item
 */
export function resolveWeaponWzId(weapon) {
  if (!weapon) return null;
  const id = typeof weapon === 'object' ? weapon.id : weapon;
  const name = typeof weapon === 'object' ? weapon.name : (typeof weapon === 'string' ? weapon : null);

  // 1. Direct ID lookup
  if (id && WEAPON_WZ_MAP[id]) return WEAPON_WZ_MAP[id];

  // 2. ID without prefix or with alternative prefix
  if (id && typeof id === 'string') {
    const strippedId = id.replace(/^(star|claw|dagger|sword|bow|gun|spear|polearm|mage|il|shield|arrow|bullet)-/, '');
    if (WEAPON_WZ_MAP[strippedId]) return WEAPON_WZ_MAP[strippedId];
    if (WEAPON_WZ_MAP[`star-${strippedId}`]) return WEAPON_WZ_MAP[`star-${strippedId}`];
    if (WEAPON_WZ_MAP[`claw-${strippedId}`]) return WEAPON_WZ_MAP[`claw-${strippedId}`];
    if (WEAPON_WZ_MAP[`dagger-${strippedId}`]) return WEAPON_WZ_MAP[`dagger-${strippedId}`];
    if (WEAPON_WZ_MAP[`shield-${strippedId}`]) return WEAPON_WZ_MAP[`shield-${strippedId}`];
  }

  // 3. Name lookup in DROP_NAME_TO_WZ_ID
  if (name) {
    const clean = name.toLowerCase().replace(/\s*\(.*?\)/, '').trim();
    if (DROP_NAME_TO_WZ_ID[clean]) return DROP_NAME_TO_WZ_ID[clean];

    // Check throwing star keywords in name
    if (clean.includes('ilbi')) return 2070006;
    if (clean.includes('steely')) return 2070005;
    if (clean.includes('tobi')) return 2070004;
    if (clean.includes('kumbi')) return 2070003;
    if (clean.includes('mokbi')) return 2070002;
    if (clean.includes('wooden top')) return 2070009;
    if (clean.includes('wolbi')) return 2070001;
    if (clean.includes('subi')) return 2070000;
    if (clean.includes('hwabi')) return 2070007;
    if (clean.includes('snowball')) return 2070008;
    if (clean.includes('icicle')) return 2070010;
    if (clean.includes('balanced fury')) return 2070018;

    // Check claw keywords in name
    if (clean.includes('garnier')) return 1472000;
    if (clean.includes('mountain snake')) return 1472001;
    if (clean.includes('meba')) return 1472007;
    if (clean.includes('iron igor')) return 1472004;
    if (clean.includes('slain')) return 1472018;
    if (clean.includes('korean fan')) return 1332020;
    if (clean.includes('maple claw')) return 1472030;
    if (clean.includes('bronze igrit')) return 1472021;
    if (clean.includes('scarab')) return 1472028;
    if (clean.includes('kandayo')) return 1472032;
    if (clean.includes('black scarab')) return 1472037;
    if (clean.includes('dark hinkel')) return 1472035;

    // Check essential gear keywords
    if (clean.includes('bamboo hat')) return 1002026;
    if (clean.includes('work gloves')) return 1082002;
    if (clean.includes('bathrobe') || clean.includes('sauna')) return 1050100;
    if (clean.includes('red burgler')) return 1002176;
    if (clean.includes('blue burgler')) return 1002177;
    if (clean.includes('green burgler')) return 1002178;
    if (clean.includes('brown burgler')) return 1002179;
    if (clean.includes('dark burgler')) return 1002180;
    if (clean.includes('burgler')) return 1002176;
    if (clean.includes('snowshoes')) return 1072169;
    if (clean.includes('icarus cape')) return 1102054;
    if (clean.includes('pan lid')) return 1092008;
    if (clean.includes('zakum helmet')) return 1002357;
  }

  return null;
}

/**
 * Resolves primary icon URL for a weapon, throwing star, or secondary item
 */
export function getWeaponIconUrl(weapon) {
  const wzId = resolveWeaponWzId(weapon);
  if (!wzId) return null;
  return getWzIconUrl(wzId);
}

/**
 * Resolves fallback icon URL for a weapon, throwing star, or secondary item
 */
export function getWeaponIconFallback(weapon) {
  const wzId = resolveWeaponWzId(weapon);
  if (!wzId) return null;
  return getWzIconFallbackUrl(wzId);
}

/**
 * Resolves icon URL for an item in ITEMS_DATABASE (or catalogId)
 */
export function getItemIconUrl(itemOrCatalogId) {
  if (!itemOrCatalogId) return null;
  const name = typeof itemOrCatalogId === 'object' ? itemOrCatalogId.name : (typeof itemOrCatalogId === 'string' ? itemOrCatalogId : null);
  if (name) {
    const norm = name.toLowerCase().replace(/\s*\(.*?\)/, '').trim();
    if (DROP_NAME_TO_WZ_ID[norm]) {
      return getWzIconUrl(DROP_NAME_TO_WZ_ID[norm]);
    }
  }

  let catalogId = typeof itemOrCatalogId === 'object' ? itemOrCatalogId.catalogId : itemOrCatalogId;
  if (!catalogId) return null;
  const strId = String(catalogId).replace(/^[a-z]+:/i, '').trim();
  const numId = parseInt(strId, 10);
  return isNaN(numId) ? null : getWzIconUrl(numId);
}

/**
 * Resolves fallback icon URL for an item
 */
export function getItemIconFallback(itemOrCatalogId) {
  if (!itemOrCatalogId) return null;
  const name = typeof itemOrCatalogId === 'object' ? itemOrCatalogId.name : (typeof itemOrCatalogId === 'string' ? itemOrCatalogId : null);
  if (name) {
    const norm = name.toLowerCase().replace(/\s*\(.*?\)/, '').trim();
    if (DROP_NAME_TO_WZ_ID[norm]) {
      return getWzIconFallbackUrl(DROP_NAME_TO_WZ_ID[norm]);
    }
  }

  let catalogId = typeof itemOrCatalogId === 'object' ? itemOrCatalogId.catalogId : itemOrCatalogId;
  if (!catalogId) return null;
  const strId = String(catalogId).replace(/^[a-z]+:/i, '').trim();
  const numId = parseInt(strId, 10);
  return isNaN(numId) ? null : getWzIconFallbackUrl(numId);
}

/**
 * Resolves numeric WZ ID for any drop name by searching ITEMS_DATABASE, DROP_NAME_TO_WZ_ID, and weapons
 */
export function resolveDropWzId(dropName) {
  if (!dropName) return null;
  const clean = String(dropName).toLowerCase().replace(/\s*\(.*?\)/g, '').trim();

  // 1. Direct match in ITEMS_DATABASE (1900+ items)
  if (GLOBAL_ITEM_WZ_MAP.has(clean)) return GLOBAL_ITEM_WZ_MAP.get(clean);

  // 2. Direct match in DROP_NAME_TO_WZ_ID presets
  if (DROP_NAME_TO_WZ_ID[clean]) return DROP_NAME_TO_WZ_ID[clean];

  // 3. Match in weapon resolver
  const weaponId = resolveWeaponWzId(clean);
  if (weaponId) return weaponId;

  // 4. Strip trailing weapon or gear nouns (e.g. "Garnier Claw" -> "Garnier")
  const stripped = clean.replace(/\s+(claw|dagger|sword|bow|crossbow|spear|polearm|wand|staff|gun|knuckle|stars|throwing-stars)$/i, '').trim();
  if (stripped && stripped !== clean) {
    if (GLOBAL_ITEM_WZ_MAP.has(stripped)) return GLOBAL_ITEM_WZ_MAP.get(stripped);
    if (DROP_NAME_TO_WZ_ID[stripped]) return DROP_NAME_TO_WZ_ID[stripped];
    const strippedWepId = resolveWeaponWzId(stripped);
    if (strippedWepId) return strippedWepId;
  }

  // 5. Check singular if ending with 's'
  if (clean.endsWith('s') && clean.length > 3) {
    const singular = clean.slice(0, -1);
    if (GLOBAL_ITEM_WZ_MAP.has(singular)) return GLOBAL_ITEM_WZ_MAP.get(singular);
    if (DROP_NAME_TO_WZ_ID[singular]) return DROP_NAME_TO_WZ_ID[singular];
  }

  // 6. Generic Scroll detection
  if (clean.includes('scroll') || clean.includes('מגיל')) {
    return 2040000;
  }

  return null;
}

/**
 * Resolves primary icon URL for a drop name
 */
export function getDropIconUrl(dropName) {
  const wzId = resolveDropWzId(dropName);
  if (wzId) return getWzIconUrl(wzId);
  return null;
}

/**
 * Resolves fallback icon URL for a drop name
 */
export function getDropIconFallback(dropName) {
  const wzId = resolveDropWzId(dropName);
  if (wzId) return getWzIconFallbackUrl(wzId);
  return null;
}

/**
 * Returns contextual icon/emoji when no image is available
 */
export function getDropCategoryEmoji(name, category) {
  const c = String(category || '').toLowerCase();
  const n = String(name || '').toLowerCase();
  if (c.includes('scroll') || n.includes('scroll') || n.includes('מגיל')) return '📜';
  if (c.includes('weapon') || n.includes('claw') || n.includes('dagger') || n.includes('sword') || n.includes('bow') || n.includes('gun') || n.includes('wand') || n.includes('staff')) return '🗡️';
  if (c.includes('equip') || c.includes('armor') || n.includes('hat') || n.includes('hood') || n.includes('shoe') || n.includes('suit') || n.includes('robe') || n.includes('glove') || n.includes('pants')) return '🛡️';
  if (c.includes('use') || c.includes('potion') || n.includes('potion') || n.includes('elixir') || n.includes('water') || n.includes('pill')) return '🧪';
  if (n.includes('star') || n.includes('subi') || n.includes('tobi') || n.includes('steely') || n.includes('ilbi')) return '⭐';
  if (n.includes('arrow') || n.includes('bullet')) return '🏹';
  if (n.includes('ore') || n.includes('jewel') || n.includes('crystal')) return '💎';
  return '📦';
}

/**
 * Calculates authentic classic MapleStory Meso drop range based on monster level and boss status
 */
export function getMonsterMesoDropRange(monster) {
  if (!monster) return null;
  const lvl = monster.level || 1;
  const mobName = (monster.name || '').toLowerCase();
  const isBoss = monster.category === 'boss' ||
    (monster.hp && monster.hp > 15000) ||
    mobName.includes('mushmom') ||
    mobName.includes('balrog') ||
    mobName.includes('zakum') ||
    mobName.includes('mano') ||
    mobName.includes('stumpy') ||
    mobName.includes('deorang');

  if (isBoss) {
    if (lvl < 25) return { min: 250, max: 600, bag: 'שקית כסף בינונית', bagEn: 'Medium Meso Pouch' };
    if (lvl < 40) return { min: 650, max: 1400, bag: 'שקית זהב עשירה', bagEn: 'Rich Gold Pouch' };
    if (lvl < 65) return { min: 1400, max: 3200, bag: 'שק זהב כבד', bagEn: 'Heavy Gold Bag' };
    if (lvl < 85) return { min: 3000, max: 7500, bag: 'אוצר זהב מובחר', bagEn: 'Grand Gold Sack' };
    return { min: 8000, max: 25000, bag: 'אוצר מסוס אגדי', bagEn: 'Legendary Meso Chest' };
  }

  if (lvl <= 5) return { min: 1, max: 4, bag: 'מטבע נחושת', bagEn: 'Copper Coin' };
  if (lvl <= 10) return { min: 4, max: 12, bag: 'מטבעות כסף קטנים', bagEn: 'Small Silver Coins' };
  if (lvl <= 15) return { min: 14, max: 35, bag: 'מטבעות כסף', bagEn: 'Silver Coins' };
  if (lvl <= 20) return { min: 25, max: 55, bag: 'צרור מטבעות', bagEn: 'Coin Bundle' };
  if (lvl <= 25) return { min: 45, max: 85, bag: 'שקית מסוס קטנה', bagEn: 'Small Meso Pouch' };
  if (lvl <= 35) return { min: 70, max: 140, bag: 'שקית מסוס קטנה', bagEn: 'Small Meso Pouch' };
  if (lvl <= 45) return { min: 120, max: 220, bag: 'שקית מסוס בינונית', bagEn: 'Medium Meso Pouch' };
  if (lvl <= 55) return { min: 180, max: 340, bag: 'שקית מסוס בינונית', bagEn: 'Medium Meso Pouch' };
  if (lvl <= 70) return { min: 280, max: 520, bag: 'שק מסוס כבד', bagEn: 'Heavy Meso Bag' };
  return { min: 450, max: 850, bag: 'שק מסוס עשיר', bagEn: 'Rich Meso Bag' };
}

/**
 * Cleanly formats MesoWatch market price strings into clean whole integers with commas
 */
export function formatMesoPrice(priceStr, isEnglish = false) {
  if (!priceStr) return null;
  const raw = String(priceStr).replace(/,/g, '').trim();
  const match = raw.match(/([0-9]+(?:\.[0-9]+)?)/);
  if (!match) return priceStr;
  const num = parseFloat(match[1]);
  if (isNaN(num)) return priceStr;

  if (num < 1.5) {
    return isEnglish ? '~1 Meso (NPC rate)' : '~1 מסוס (שווי סוחר)';
  }

  const rounded = Math.round(num);
  const formatted = rounded.toLocaleString();
  return isEnglish ? `${formatted} Mesos` : `${formatted} מסוס`;
}
