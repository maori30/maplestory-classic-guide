import { useLanguage } from '../context/LanguageContext.jsx';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import {
  getRealMapData,
  getLiveHiddenPortal,
  LIVE_HIDDEN_PORTALS
} from '../data/mapsDatabase.js';
import LiveHiddenPortalViewer from './LiveHiddenPortalViewer.jsx';

// Preset classic Pre-BigBang maps for instant interactive exploration
export const CLASSIC_RADAR_PRESETS = {
  pigBeach: {
    id: 'pigBeach',
    name: 'חוף החזירים (The Pig Beach)',
    nameEn: 'The Pig Beach (Hidden Street)',
    town: 'Henesys / Lith Harbor',
    bg: '#081e28',
    theme: 'henesys',
    platforms: [
      { x: 30, y: 70, w: 180, h: 14, color: '#166534', border: '#4ade80', name: 'פלטפורמת עץ עליונה' },
      { x: 380, y: 75, w: 200, h: 14, color: '#166534', border: '#4ade80', name: 'פלטפורמה מזרחית' },
      { x: 140, y: 130, w: 320, h: 14, color: '#15803d', border: '#86efac', name: 'מפלס אמצעי' },
      { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#4ade80', name: 'קרקעית חוף החזירים' }
    ],
    ropes: [
      { x: 120, y1: 70, y2: 195 },
      { x: 470, y1: 75, y2: 195 },
      { x: 290, y1: 130, y2: 195 }
    ],
    portal: { x: 70, y: 182, label: 'פורטל סודי [↑]', sub: 'בין השיחים בצד שמאל' },
    safeSpot: { x: 60, y: 50, w: 90, label: '🛡️ עמדה בטוחה לגנב/קשת' },
    mobs: [
      { normX: 220, y: 182, icon: '🐷', name: 'Pig Lv.7', bounce: 0, dir: 1, speed: 0.8 },
      { normX: 340, y: 182, icon: '🎀', name: 'Ribbon Pig Lv.10', bounce: 1.2, dir: -1, speed: 0.9 },
      { normX: 490, y: 180, icon: '🐗', name: 'Iron Hog Lv.24 (זהירות!)', bounce: 0.5, dir: 1, speed: 1.3 },
      { normX: 250, y: 118, icon: '🐷', name: 'Pig', bounce: 2.1, dir: -1, speed: 0.7 },
      { normX: 440, y: 64, icon: '🎀', name: 'Ribbon Pig', bounce: 0.8, dir: 1, speed: 0.6 }
    ]
  },

  blueMushroom: {
    id: 'blueMushroom',
    name: 'יער הפטריות הכחולות (Blue Mushroom Forest)',
    nameEn: 'Blue Mushroom Forest (Henesys East)',
    town: 'Henesys',
    bg: '#04221b',
    theme: 'forest',
    platforms: [
      { x: 40, y: 70, w: 170, h: 14, color: '#047857', border: '#34d399', name: 'ענף שמאל עליון' },
      { x: 390, y: 75, w: 180, h: 14, color: '#047857', border: '#34d399', name: 'ענף ימין עליון' },
      { x: 160, y: 130, w: 280, h: 14, color: '#059669', border: '#6ee7b7', name: 'ענף אמצעי' },
      { x: 0, y: 195, w: 600, h: 35, color: '#065f46', border: '#34d399', name: 'קרקעית היער' }
    ],
    ropes: [
      { x: 130, y1: 70, y2: 195 },
      { x: 460, y1: 75, y2: 195 }
    ],
    portal: { x: 80, y: 58, label: 'פורטל נסתר [↑]', sub: 'עמוד לצד פנס השילוט' },
    safeSpot: { x: 440, y: 52, w: 100, label: '🛡️ צמרת בטוחה' },
    mobs: [
      { normX: 240, y: 182, icon: '🍄', name: 'Blue Mushroom Lv.20', bounce: 0.3, dir: 1, speed: 0.7 },
      { normX: 380, y: 182, icon: '🍄', name: 'Blue Mushroom Lv.20', bounce: 1.5, dir: -1, speed: 0.8 },
      { normX: 260, y: 118, icon: '🍄', name: 'Blue Mushroom', bounce: 0.9, dir: 1, speed: 0.6 }
    ]
  },

  hhg1: {
    id: 'hhg1',
    name: 'גבעת הנסיס (HHG1)',
    nameEn: 'Henesys Hunting Ground I',
    town: 'Henesys',
    bg: '#08192d',
    theme: 'henesys',
    platforms: [
      { x: 30, y: 60, w: 160, h: 12, color: '#166534', border: '#4ade80', name: 'ענף עץ עליון' },
      { x: 410, y: 65, w: 160, h: 12, color: '#166534', border: '#4ade80', name: 'צמרת ימנית' },
      { x: 90, y: 105, w: 190, h: 12, color: '#15803d', border: '#86efac', name: 'מפלס שני שמאל' },
      { x: 320, y: 110, w: 190, h: 12, color: '#15803d', border: '#86efac', name: 'מפלס שני ימין' },
      { x: 190, y: 150, w: 220, h: 12, color: '#15803d', border: '#86efac', name: 'במת אמצע' },
      { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#4ade80', name: 'קרקעית גבעת הנסיס' }
    ],
    ropes: [
      { x: 110, y1: 60, y2: 195 },
      { x: 490, y1: 65, y2: 195 },
      { x: 300, y1: 110, y2: 195 }
    ],
    portal: { x: 550, y: 182, label: 'יציאה להנסיס', sub: 'פורטל ראשי' },
    safeSpot: { x: 60, y: 40, w: 80, label: '🛡️ עמדת חבל בטוחה' },
    mobs: [
      { normX: 150, y: 182, icon: '🟢', name: 'Green Slime Lv.6', bounce: 0.1, dir: 1, speed: 0.9 },
      { normX: 280, y: 182, icon: '🍄', name: 'Orange Mushroom Lv.8', bounce: 0.8, dir: -1, speed: 0.7 },
      { normX: 140, y: 92, icon: '🐌', name: 'Snail Lv.1', bounce: 0, dir: 1, speed: 0.4 },
      { normX: 380, y: 98, icon: '🟢', name: 'Green Slime', bounce: 1.4, dir: -1, speed: 0.85 }
    ]
  },

  subway: {
    id: 'subway',
    name: 'רכבת קרנינג (Subway Line 1)',
    nameEn: 'Kerning City Subway Line 1',
    town: 'Kerning City',
    bg: '#14121f',
    theme: 'kerning',
    platforms: [
      { x: 40, y: 80, w: 220, h: 14, color: '#3b0764', border: '#a855f7', name: 'גג קרון רכבת שמאל' },
      { x: 340, y: 80, w: 220, h: 14, color: '#3b0764', border: '#a855f7', name: 'גג קרון רכבת ימין' },
      { x: 150, y: 140, w: 300, h: 14, color: '#4c1d95', border: '#c084fc', name: 'פלטפורמת מתכת אמצעית' },
      { x: 0, y: 195, w: 600, h: 35, color: '#2e1065', border: '#a855f7', name: 'פסי הרכבת (קרקע)' }
    ],
    ropes: [
      { x: 150, y1: 80, y2: 195 },
      { x: 450, y1: 80, y2: 195 }
    ],
    portal: { x: 70, y: 182, label: 'כניסה מקרנינג', sub: 'קרון 1' },
    safeSpot: { x: 390, y: 60, w: 90, label: '🛡️ גג קרון מוגן' },
    mobs: [
      { normX: 230, y: 182, icon: '🦇', name: 'Stirge Lv.20', bounce: 0.2, dir: 1, speed: 1.1 },
      { normX: 370, y: 182, icon: '👻', name: 'Jr. Wraith Lv.35', bounce: 1.6, dir: -1, speed: 0.7 },
      { normX: 250, y: 126, icon: '🦇', name: 'Stirge', bounce: 0.9, dir: 1, speed: 1.0 }
    ]
  },

  antTunnel: {
    id: 'antTunnel',
    name: 'מערת הנמלים (Ant Tunnel I)',
    nameEn: 'Ant Tunnel I (Sleepywood)',
    town: 'Sleepywood',
    bg: '#181120',
    theme: 'sleepywood',
    platforms: [
      { x: 50, y: 70, w: 200, h: 14, color: '#4c0519', border: '#f43f5e', name: 'מדף סלע עליון' },
      { x: 360, y: 80, w: 190, h: 14, color: '#4c0519', border: '#f43f5e', name: 'במת נטיפים' },
      { x: 160, y: 135, w: 280, h: 14, color: '#881337', border: '#fb7185', name: 'מפלס מערה אמצעי' },
      { x: 0, y: 195, w: 600, h: 35, color: '#310a17', border: '#f43f5e', name: 'קרקעית המערה החשוכה' }
    ],
    ropes: [
      { x: 140, y1: 70, y2: 195 },
      { x: 460, y1: 80, y2: 195 }
    ],
    portal: { x: 60, y: 182, label: 'יציאה לסליפיווד', sub: 'עמוק במערות' },
    safeSpot: { x: 100, y: 50, w: 90, label: '🛡️ נטיף סלע בטוח' },
    mobs: [
      { normX: 220, y: 182, icon: '🍄', name: 'Horned Mushroom Lv.22', bounce: 0.4, dir: 1, speed: 0.8 },
      { normX: 380, y: 182, icon: '🧟', name: 'Zombie Mushroom Lv.24', bounce: 1.1, dir: -1, speed: 0.75 },
      { normX: 260, y: 122, icon: '🍄', name: 'Horned Mushroom', bounce: 1.8, dir: -1, speed: 0.7 }
    ]
  }
};

// 20 Authentic Classic MapleStory Map Layouts for Real Recognized Sketched Radar Views
export function getAuthenticMapLayout(locationName, town, monster, locIndex = 0) {
  const mName = monster?.name || 'Monster';
  const mLevel = monster?.level || 1;
  const mIcon = monster?.icon || '👾';
  const mTown = town || monster?.town || 'Victoria Island';
  const locStr = (locationName || '').toLowerCase();
  const townStr = mTown.toLowerCase();

  // 1. The Tree Dungeon (Ellinia hollow tree interior with 4 floors)
  if (locStr.includes('tree dungeon') || locStr.includes('tree that grew') || locStr.includes('גזע העץ') || locStr.includes('עץ הפטריות')) {
    return {
      id: `map_tree_dungeon_${locIndex}`,
      name: locationName || 'The Tree Dungeon (גזע העץ החלול באליניה)',
      town: 'Ellinia',
      bg: '#051811',
      theme: 'ellinia',
      platforms: [
        { x: 0, y: 0, w: 32, h: 230, color: '#1a0f05', border: '#78350f', name: 'גזע עץ שמאל (מעטפת חיצונית)' },
        { x: 568, y: 0, w: 32, h: 230, color: '#1a0f05', border: '#78350f', name: 'גזע עץ ימין (מעטפת חיצונית)' },
        { x: 130, y: 46, w: 340, h: 12, color: '#2e1809', border: '#d97706', name: 'קומה 4: ענפי הצמרת (עמדה בטוחה לצלפים)' },
        { x: 50, y: 92, w: 500, h: 12, color: '#2e1809', border: '#d97706', name: 'קומה 3: קורת עץ עליונה עמוסת פטריות' },
        { x: 80, y: 142, w: 440, h: 12, color: '#2e1809', border: '#d97706', name: 'קומה 2: קורת עץ מרכזית' },
        { x: 0, y: 195, w: 600, h: 35, color: '#1a0f05', border: '#78350f', name: 'קומה 1: קרקעית גזע העץ החלול' }
      ],
      ropes: [
        { x: 300, y1: 46, y2: 195 },
        { x: 160, y1: 92, y2: 195 },
        { x: 440, y1: 92, y2: 195 }
      ],
      portal: { x: 75, y: 182, label: 'פתח יציאה ליער [↑]', sub: 'The Forest South of Ellinia' },
      safeSpot: { x: 150, y: 32, w: 100, label: '🛡️ צמרת בטוחה לצלפים' },
      mobs: [
        { normX: 200, y: 36, minX: 140, maxX: 450, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.1, dir: 1, speed: 0.7 },
        { normX: 380, y: 82, minX: 70, maxX: 520, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 180, y: 132, minX: 100, maxX: 500, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.6, dir: 1, speed: 0.75 },
        { normX: 350, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.85 }
      ]
    };
  }

  // 2. Henesys Hunting Ground I (HHG1)
  if ((locStr.includes('hhg1') || locStr.includes('hunting ground i')) && !locStr.includes('ii') && !locStr.includes('iii')) {
    return {
      id: `map_hhg1_${locIndex}`,
      name: locationName || 'Henesys Hunting Ground I (גבעת הנסיס 1)',
      town: 'Henesys',
      bg: '#081a28',
      theme: 'henesys',
      platforms: [
        { x: 20, y: 155, w: 120, h: 12, color: '#166534', border: '#4ade80', name: 'ענף שמאל 1 (חלזונות וסליימים)' },
        { x: 30, y: 115, w: 110, h: 12, color: '#166534', border: '#4ade80', name: 'ענף שמאל 2 (פטריות כתומות)' },
        { x: 20, y: 75, w: 125, h: 12, color: '#15803d', border: '#86efac', name: 'ענף שמאל 3 (פטריות ירוקות)' },
        { x: 30, y: 35, w: 90, h: 12, color: '#15803d', border: '#86efac', name: 'צמרת שמאל עליונה (Safe Spot)' },
        { x: 230, y: 130, w: 140, h: 14, color: '#15803d', border: '#86efac', name: 'במת אי מרכזית צפה' },
        { x: 460, y: 150, w: 115, h: 12, color: '#166534', border: '#4ade80', name: 'ענף ימין 1' },
        { x: 440, y: 105, w: 125, h: 12, color: '#166534', border: '#4ade80', name: 'ענף ימין 2' },
        { x: 470, y: 60, w: 100, h: 12, color: '#15803d', border: '#86efac', name: 'ענף ימין 3 (פורטל ל-HHG2)' },
        { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#4ade80', name: 'קרקעית גבעת הנסיס (סליימים ו-Iron Hog בימין)' }
      ],
      ropes: [
        { x: 75, y1: 35, y2: 195 },
        { x: 300, y1: 130, y2: 195 },
        { x: 510, y1: 60, y2: 195 }
      ],
      portal: { x: 520, y: 48, label: 'פורטל ל-HHG2 [↑]', sub: 'ענף ימין עליון' },
      safeSpot: { x: 30, y: 22, w: 80, label: '🛡️ צמרת שמאל בטוחה' },
      mobs: [
        { normX: 80, y: 65, minX: 30, maxX: 140, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.7 },
        { normX: 300, y: 118, minX: 240, maxX: 360, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.4, dir: -1, speed: 0.8 },
        { normX: 490, y: 95, minX: 450, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 0.7, dir: 1, speed: 0.65 },
        { normX: 240, y: 182, minX: 50, maxX: 500, icon: mIcon, name: `${mName}`, bounce: 1.9, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 3. Henesys Hunting Ground II & III
  if (locStr.includes('hhg2') || locStr.includes('hhg3') || locStr.includes('hunting ground ii') || locStr.includes('hunting ground iii')) {
    return {
      id: `map_hhg23_${locIndex}`,
      name: locationName || 'Henesys Hunting Ground II / III',
      town: 'Henesys',
      bg: '#061c28',
      theme: 'henesys',
      platforms: [
        { x: 210, y: 45, w: 180, h: 14, color: '#15803d', border: '#86efac', name: 'צמרת עליונה (צפיפות פטריות)' },
        { x: 80, y: 88, w: 170, h: 12, color: '#166534', border: '#4ade80', name: 'מדף שמאלי עליון' },
        { x: 350, y: 88, w: 170, h: 12, color: '#166534', border: '#4ade80', name: 'מדף ימני עליון' },
        { x: 30, y: 135, w: 160, h: 12, color: '#166534', border: '#4ade80', name: 'פלטפורמה אמצעית שמאל' },
        { x: 410, y: 135, w: 160, h: 12, color: '#166534', border: '#4ade80', name: 'פלטפורמה אמצעית ימין' },
        { x: 220, y: 155, w: 160, h: 12, color: '#15803d', border: '#86efac', name: 'גשר עץ אמצעי' },
        { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#4ade80', name: 'קרקעית המפה' }
      ],
      ropes: [
        { x: 120, y1: 88, y2: 195 },
        { x: 480, y1: 88, y2: 195 },
        { x: 300, y1: 45, y2: 155 }
      ],
      portal: { x: 300, y: 35, label: 'מעבר ל-HHG3 [↑]', sub: 'צמרת עליונה' },
      safeSpot: { x: 230, y: 32, w: 90, label: '🛡️ צמרת פירמידה בטוחה' },
      mobs: [
        { normX: 280, y: 35, minX: 220, maxX: 380, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 140, y: 78, minX: 90, maxX: 240, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.1, dir: -1, speed: 0.8 },
        { normX: 420, y: 78, minX: 360, maxX: 510, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.75 },
        { normX: 280, y: 182, minX: 80, maxX: 520, icon: mIcon, name: `${mName}`, bounce: 1.7, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 3a. Henesys Rolling Hills (A Hill West of Henesys, The Hill East/North of Henesys)
  if ((locStr.includes('hill') || locStr.includes('גבעה') || locStr.includes('grassy')) && (locStr.includes('henesys') || townStr.includes('henesys') || !townStr.includes('perion'))) {
    return {
      id: `map_henesys_hills_${locIndex}`,
      name: locationName || 'The Hill East / West of Henesys (גבעות הנסיס)',
      town: 'Henesys',
      bg: '#08251c',
      theme: 'henesys_hills',
      platforms: [
        { x: 360, y: 55, w: 210, h: 14, color: '#15803d', border: '#86efac', name: 'פסגת הגבעה המזרחית (עמדת צלפים ותצפית)' },
        { x: 20, y: 85, w: 190, h: 14, color: '#166534', border: '#4ade80', name: 'מדף גבעה מערבי עליון' },
        { x: 190, y: 115, w: 220, h: 14, color: '#15803d', border: '#86efac', name: 'טרסת דשא אמצעית (מרעה Ribbon Pigs)' },
        { x: 40, y: 150, w: 170, h: 12, color: '#166534', border: '#4ade80', name: 'מדף גבעה תחתון' },
        { x: 400, y: 145, w: 170, h: 12, color: '#166534', border: '#4ade80', name: 'מדרון גבעה מזרחי תחתון' },
        { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#4ade80', name: 'שביל העפר והפרחים בין ערי ויקטוריה' }
      ],
      ropes: [
        { x: 100, y1: 85, y2: 195 },
        { x: 470, y1: 55, y2: 195 },
        { x: 300, y1: 115, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שביל כניסה להנסיס [↑]', sub: 'Victoria Road: Henesys Outskirts' },
      safeSpot: { x: 380, y: 40, w: 100, label: '🛡️ פסגת הגבעה המוגנת' },
      mobs: [
        { normX: 450, y: 45, minX: 370, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.75 },
        { normX: 110, y: 75, minX: 30, maxX: 195, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 290, y: 105, minX: 200, maxX: 390, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.85 },
        { normX: 260, y: 182, minX: 70, maxX: 540, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 3b. The Rain-Forest East of Henesys & Deep Henesys Forest
  if (locStr.includes('rain-forest') || locStr.includes('rain forest') || locStr.includes('יער הגשם') || (locStr.includes('forest') && locStr.includes('henesys'))) {
    return {
      id: `map_rainforest_henesys_${locIndex}`,
      name: locationName || 'The Rain-Forest East of Henesys (יער הגשם ממזרח להנסיס)',
      town: 'Henesys',
      bg: '#041f17',
      theme: 'rainforest',
      platforms: [
        { x: 150, y: 45, w: 300, h: 14, color: '#065f46', border: '#34d399', name: 'גשר חבלים עליון בצמרת יער הגשם' },
        { x: 30, y: 88, w: 180, h: 12, color: '#047857', border: '#34d399', name: 'ענף יער שמאל תלוי גפנים' },
        { x: 390, y: 88, w: 180, h: 12, color: '#047857', border: '#34d399', name: 'ענף יער ימין תלוי גפנים' },
        { x: 180, y: 135, w: 240, h: 12, color: '#059669', border: '#6ee7b7', name: 'גזע עץ עתיק ולוחות גשם' },
        { x: 0, y: 195, w: 600, h: 35, color: '#064e3b', border: '#10b981', name: 'קרקעית יער הגשם הטחובה' }
      ],
      ropes: [
        { x: 110, y1: 88, y2: 195 },
        { x: 480, y1: 88, y2: 195 },
        { x: 300, y1: 45, y2: 195 }
      ],
      portal: { x: 60, y: 182, label: 'יציאה לכיוון Henesys [↑]', sub: 'שביל יער הגשם המערבי' },
      safeSpot: { x: 230, y: 32, w: 100, label: '🛡️ גשר צמרת בטוח' },
      mobs: [
        { normX: 280, y: 35, minX: 160, maxX: 430, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.8 },
        { normX: 120, y: 78, minX: 40, maxX: 190, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.3, dir: -1, speed: 0.8 },
        { normX: 470, y: 78, minX: 400, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.75 },
        { normX: 300, y: 182, minX: 60, maxX: 540, icon: mIcon, name: `${mName}`, bounce: 1.7, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 3c. Singing Mushroom Forest & Someone Else's House
  if (locStr.includes('singing mushroom') || locStr.includes('someone else') || locStr.includes('mushroom garden') || locStr.includes('הפטריות המזמרות') || locStr.includes('מישהו אחר') || locStr.includes('גן הפטריות')) {
    return {
      id: `map_singing_mushroom_${locIndex}`,
      name: locationName || "Singing Mushroom Forest: Someone Else's House (יער הפטריות המזמרות)",
      town: 'Henesys',
      bg: '#18190c',
      theme: 'singing_mushroom',
      platforms: [
        { x: 380, y: 48, w: 180, h: 16, color: '#dc2626', border: '#fca5a5', name: 'כיפת פטרייה אדומה ענקית (Safe Spot)' },
        { x: 40, y: 75, w: 180, h: 16, color: '#2563eb', border: '#93c5fd', name: 'כיפת פטרייה כחולה קופצנית' },
        { x: 170, y: 120, w: 260, h: 14, color: '#ea580c', border: '#fdba74', name: 'כיפת פטרייה כתומה ענקית ומרפסת הבקתה' },
        { x: 0, y: 195, w: 600, h: 35, color: '#166534', border: '#86efac', name: 'שטיח נבגים ופטריות מזמרות' }
      ],
      ropes: [
        { x: 120, y1: 75, y2: 195 },
        { x: 470, y1: 48, y2: 195 },
        { x: 300, y1: 120, y2: 195 }
      ],
      portal: { x: 300, y: 108, label: 'דלת הבית של מישהו אחר [↑]', sub: "Someone Else's House" },
      safeSpot: { x: 400, y: 34, w: 100, label: '🛡️ גג הפטרייה הבטוח' },
      mobs: [
        { normX: 470, y: 38, minX: 390, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.1, dir: 1, speed: 0.8 },
        { normX: 120, y: 65, minX: 50, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.4, dir: -1, speed: 0.85 },
        { normX: 290, y: 110, minX: 180, maxX: 410, icon: mIcon, name: `${mName}`, bounce: 0.7, dir: 1, speed: 0.75 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.9, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 3d. Excavation Site & Relic Ruins (Perion - Stumpy, Wooden Mask, Skeleton)
  if (locStr.includes('excavation') || locStr.includes('relic') || locStr.includes('remains') || locStr.includes('military camp') || locStr.includes('אתר החפירות') || locStr.includes('שרידים') || locStr.includes('stumpy') || locStr.includes('סטאמפי')) {
    return {
      id: `map_excavation_${locIndex}`,
      name: locationName || 'Excavation Site: Relic Excavation (אתר החפירות הארכיאולוגי בפריון)',
      town: 'Perion',
      bg: '#20120a',
      theme: 'excavation',
      platforms: [
        { x: 30, y: 48, w: 170, h: 14, color: '#78350f', border: '#fef08a', name: 'מגדל פיגומים עליון של משלחת החפירות (Safe Spot)' },
        { x: 380, y: 60, w: 190, h: 14, color: '#78350f', border: '#fde047', name: 'גשר קורות עץ ומנוף חפירה (ספון סטאמפי)' },
        { x: 180, y: 105, w: 240, h: 14, color: '#854d0e', border: '#ca8a04', name: 'קשת עצמות דינוזאור ומדף מאובנים' },
        { x: 60, y: 148, w: 200, h: 12, color: '#713f12', border: '#eab308', name: 'מדף חפירה תחתון' },
        { x: 340, y: 148, w: 200, h: 12, color: '#713f12', border: '#eab308', name: 'מדף מאובנים מזרחי' },
        { x: 0, y: 195, w: 600, h: 35, color: '#451a03', border: '#b45309', name: 'תעלת החפירה הארכיאולוגית והעצמות' }
      ],
      ropes: [
        { x: 110, y1: 48, y2: 195 },
        { x: 470, y1: 60, y2: 195 },
        { x: 300, y1: 105, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער למחנה החפירות [↑]', sub: 'Camp 3 / Perion Outskirts' },
      safeSpot: { x: 45, y: 34, w: 100, label: '🛡️ פיגום ארכיאולוגי מוגן' },
      mobs: [
        { normX: 470, y: 50, minX: 390, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 290, y: 95, minX: 190, maxX: 410, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.3, dir: -1, speed: 0.85 },
        { normX: 150, y: 138, minX: 70, maxX: 250, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.75 },
        { normX: 300, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 3e. The Cursed Sanctuary & Evil Shrine (Sleepywood Dungeon - Tauromacis, Taurospear, Jr. Balrog)
  if (locStr.includes('cursed sanctuary') || locStr.includes('evil shrine') || locStr.includes('sanctuary') || locStr.includes('מקדש הקללה') || locStr.includes('המזבח האפל') || (monster && (monster.id === 'tauromacis' || monster.id === 'taurospear' || monster.id === 'jr-balrog'))) {
    return {
      id: `map_cursed_sanctuary_${locIndex}`,
      name: locationName || 'The Cursed Sanctuary (מקדש הקללה האפל בסליפיווד)',
      town: 'Sleepywood Deep Sanctuary',
      bg: '#180408',
      theme: 'cursed_sanctuary',
      platforms: [
        { x: 40, y: 48, w: 160, h: 14, color: '#1c1917', border: '#ef4444', name: 'כותרת עמוד אובסידיאן עליון (Sniper Safe Spot)' },
        { x: 400, y: 48, w: 160, h: 14, color: '#1c1917', border: '#ef4444', name: 'כותרת עמוד מזרחי תלוי שרשראות ברזל' },
        { x: 150, y: 98, w: 300, h: 16, color: '#292524', border: '#dc2626', name: 'מזבח האבן הגותי הקדוש (מוקד כוחות אופל)' },
        { x: 70, y: 148, w: 180, h: 12, color: '#1c1917', border: '#b91c1c', name: 'מדף בזלת שמאלי תחתון' },
        { x: 350, y: 148, w: 180, h: 12, color: '#1c1917', border: '#b91c1c', name: 'מדף בזלת ימני תחתון' },
        { x: 0, y: 195, w: 600, h: 35, color: '#0c0a09', border: '#991b1b', name: 'רצפת המקדש המקולל (אסור לרדת ללא Dark Sight!)' }
      ],
      ropes: [
        { x: 120, y1: 48, y2: 195 },
        { x: 480, y1: 48, y2: 195 },
        { x: 300, y1: 98, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער היציאה למערות [↑]', sub: 'מעבר ל-Deep Ant Tunnel' },
      safeSpot: { x: 50, y: 34, w: 100, label: '🛡️ כותרת עמוד מוגנת' },
      mobs: [
        { normX: 300, y: 86, minX: 170, maxX: 430, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.1, dir: 1, speed: 0.75 },
        { normX: 470, y: 36, minX: 410, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 140, y: 136, minX: 80, maxX: 240, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.9, dir: -1, speed: 0.95 }
      ]
    };
  }

  // 4. The Pig Beach
  if (locStr.includes('pig beach') || locStr.includes('חוף החזירים')) {
    return {
      id: `map_pig_beach_${locIndex}`,
      name: locationName || 'The Pig Beach (חוף החזירים)',
      town: 'Henesys / Lith Harbor',
      bg: '#081e28',
      theme: 'beach',
      platforms: [
        { x: 20, y: 65, w: 170, h: 14, color: '#166534', border: '#4ade80', name: 'צוק דשא עליון שמאל' },
        { x: 410, y: 70, w: 170, h: 14, color: '#166534', border: '#4ade80', name: 'צוק מזרחי' },
        { x: 160, y: 128, w: 280, h: 14, color: '#15803d', border: '#86efac', name: 'גשר עץ אמצעי' },
        { x: 0, y: 195, w: 600, h: 35, color: '#b49842', border: '#facc15', name: 'חוף חול וגלי ים (Pig Beach)' }
      ],
      ropes: [
        { x: 110, y1: 65, y2: 195 },
        { x: 490, y1: 70, y2: 195 },
        { x: 300, y1: 128, y2: 195 }
      ],
      portal: { x: 60, y: 182, label: 'פורטל סודי בשיחים [↑]', sub: 'בין שתי קבוצות הפרחים הצהובים' },
      safeSpot: { x: 50, y: 50, w: 90, label: '🛡️ צוק עליון מוגן' },
      mobs: [
        { normX: 240, y: 118, minX: 170, maxX: 430, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.8 },
        { normX: 470, y: 60, minX: 420, maxX: 570, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.7 },
        { normX: 320, y: 182, minX: 100, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 0.9, dir: 1, speed: 0.85 }
      ]
    };
  }

  // 5. Blue Mushroom Forest
  if (locStr.includes('blue mushroom') || locStr.includes('פטריות כחולות')) {
    return {
      id: `map_blue_mushroom_${locIndex}`,
      name: locationName || 'Blue Mushroom Forest (יער הפטריות הכחולות)',
      town: 'Henesys',
      bg: '#04221b',
      theme: 'forest',
      platforms: [
        { x: 40, y: 68, w: 180, h: 14, color: '#047857', border: '#34d399', name: 'ענף שמאל עליון' },
        { x: 380, y: 72, w: 180, h: 14, color: '#047857', border: '#34d399', name: 'ענף ימין עליון' },
        { x: 150, y: 130, w: 300, h: 14, color: '#059669', border: '#6ee7b7', name: 'ענף אמצעי רחב' },
        { x: 0, y: 195, w: 600, h: 35, color: '#065f46', border: '#34d399', name: 'קרקעית יער הפטריות' }
      ],
      ropes: [
        { x: 130, y1: 68, y2: 195 },
        { x: 460, y1: 72, y2: 195 }
      ],
      portal: { x: 80, y: 56, label: 'פורטל נסתר בפנס [↑]', sub: 'The Forest East of Henesys' },
      safeSpot: { x: 430, y: 54, w: 100, label: '🛡️ צמרת בטוחה' },
      mobs: [
        { normX: 250, y: 120, minX: 160, maxX: 440, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.4, dir: 1, speed: 0.75 },
        { normX: 360, y: 182, minX: 80, maxX: 540, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.5, dir: -1, speed: 0.8 }
      ]
    };
  }

  // 6. Land of Wild Boar (Perion)
  if (locStr.includes('wild boar') || locStr.includes('חזירי הבר')) {
    return {
      id: `map_wild_boar_${locIndex}`,
      name: locationName || 'Land of Wild Boar I & II (ארץ חזירי הבר)',
      town: 'Perion',
      bg: '#251508',
      theme: 'perion',
      platforms: [
        { x: 25, y: 55, w: 160, h: 14, color: '#78350f', border: '#fbbf24', name: 'עמדת תצפית מעץ (Safe Spot)' },
        { x: 410, y: 65, w: 160, h: 14, color: '#9a3412', border: '#fb923c', name: 'צוק פריון עליון (דלת למפה II)' },
        { x: 140, y: 98, w: 150, h: 12, color: '#9a3412', border: '#fb923c', name: 'מדרגת סלע שמאל' },
        { x: 310, y: 105, w: 150, h: 12, color: '#9a3412', border: '#fb923c', name: 'מדרגת סלע ימין' },
        { x: 80, y: 148, w: 440, h: 14, color: '#b45309', border: '#f59e0b', name: 'רמת חזירי הבר המרכזית (ריצת מובים!)' },
        { x: 0, y: 195, w: 600, h: 35, color: '#7c2d12', border: '#f97316', name: 'קרקעית ערוץ הסלעים' }
      ],
      ropes: [
        { x: 95, y1: 55, y2: 195 },
        { x: 220, y1: 98, y2: 195 },
        { x: 480, y1: 65, y2: 195 }
      ],
      portal: { x: 500, y: 53, label: 'דלת סודית ל-Land of Wild Boar II [↑]', sub: 'על גבי הצוק הימני' },
      safeSpot: { x: 35, y: 40, w: 90, label: '🛡️ גדר עץ בטוחה' },
      mobs: [
        { normX: 200, y: 138, minX: 90, maxX: 500, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 1.1 },
        { normX: 380, y: 138, minX: 90, maxX: 500, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.3, dir: -1, speed: 1.2 },
        { normX: 300, y: 182, minX: 60, maxX: 540, icon: mIcon, name: `${mName}`, bounce: 0.7, dir: 1, speed: 0.9 }
      ]
    };
  }

  // 6b. Perion Rocky Mountains, Burnt Land & Iron Boar Land
  if (locStr.includes('rocky mountain') || locStr.includes('burnt land') || locStr.includes('iron boar') || locStr.includes('iron hog') || locStr.includes('perion street') || (townStr.includes('perion') && !locStr.includes('wild boar') && !locStr.includes('excavation'))) {
    const isBurnt = locStr.includes('burnt');
    return {
      id: `map_perion_rocky_${locIndex}`,
      name: locationName || 'Rocky Mountain / The Burnt Land (ההרים הסלעיים בפריון)',
      town: 'Perion',
      bg: isBurnt ? '#2b0c07' : '#221107',
      theme: 'perion_rocky',
      platforms: [
        { x: 30, y: 55, w: 180, h: 14, color: isBurnt ? '#7f1d1d' : '#854d0e', border: '#f97316', name: 'פסגת צוקי אבן חול עליונה (Safe Spot)' },
        { x: 380, y: 55, w: 180, h: 14, color: isBurnt ? '#7f1d1d' : '#854d0e', border: '#f97316', name: 'צוק פריון מזרחי' },
        { x: 170, y: 110, w: 260, h: 14, color: isBurnt ? '#991b1b' : '#a16207', border: '#fb923c', name: 'מדף קניון אמצעי (ספון Fire Boar)' },
        { x: 50, y: 155, w: 170, h: 12, color: '#78350f', border: '#f59e0b', name: 'מדרגת סלע שמאלית' },
        { x: 380, y: 155, w: 170, h: 12, color: '#78350f', border: '#f59e0b', name: 'מדרגת סלע ימנית' },
        { x: 0, y: 195, w: 600, h: 35, color: isBurnt ? '#450a0a' : '#451a03', border: '#ea580c', name: 'קרקעית ערוץ הסלעים והאפר' }
      ],
      ropes: [
        { x: 110, y1: 55, y2: 195 },
        { x: 470, y1: 55, y2: 195 },
        { x: 300, y1: 110, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער לפריון [↑]', sub: 'Perion Town Gate' },
      safeSpot: { x: 45, y: 40, w: 90, label: '🛡️ צוק עליון מוגן' },
      mobs: [
        { normX: 120, y: 45, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 460, y: 45, minX: 390, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.1, dir: -1, speed: 0.85 },
        { normX: 300, y: 100, minX: 180, maxX: 420, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 6c. Kerning City Construction Site & Middle Forest
  if (locStr.includes('construction') || locStr.includes('middle forest') || locStr.includes('kpq') || locStr.includes('אתר הבנייה') || locStr.includes('היער התיכון')) {
    return {
      id: `map_construction_${locIndex}`,
      name: locationName || 'Kerning City: Construction Site & Middle Forest (אתר הבנייה בקרנינג)',
      town: 'Kerning City',
      bg: '#0f172a',
      theme: 'kerning_construction',
      platforms: [
        { x: 40, y: 50, w: 200, h: 14, color: '#eab308', border: '#fef08a', name: 'קורת פלדה עליונה (Safe Spot - פסי אזהרה צהובים)' },
        { x: 370, y: 55, w: 190, h: 14, color: '#334155', border: '#94a3b8', name: 'משטח פיגומי פלדה מזרחי' },
        { x: 160, y: 105, w: 280, h: 14, color: '#475569', border: '#cbd5e1', name: 'גשר צינורות בטון וקורות ברזל' },
        { x: 50, y: 150, w: 180, h: 12, color: '#1e293b', border: '#64748b', name: 'ערמת לבנים וצינורות ניקוז' },
        { x: 370, y: 150, w: 180, h: 12, color: '#1e293b', border: '#64748b', name: 'במת ביניים תחתונה' },
        { x: 0, y: 195, w: 600, h: 35, color: '#090d16', border: '#475569', name: 'רצפת אתר הבנייה והבוץ של קרנינג' }
      ],
      ropes: [
        { x: 130, y1: 50, y2: 195 },
        { x: 470, y1: 55, y2: 195 },
        { x: 300, y1: 105, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'כניסה ממרכז קרנינג [↑]', sub: 'Kerning City Center' },
      safeSpot: { x: 55, y: 36, w: 100, label: '🛡️ קורת פלדה מוגנת' },
      mobs: [
        { normX: 130, y: 40, minX: 50, maxX: 230, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 460, y: 45, minX: 380, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 300, y: 95, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.75 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 7. Kerning City Subway
  if (locStr.includes('subway') || locStr.includes('רכבת') || locStr.includes('line 1') || locStr.includes('line 2')) {
    return {
      id: `map_subway_${locIndex}`,
      name: locationName || 'Kerning Subway Line 1 / 2',
      town: 'Kerning City',
      bg: '#14121f',
      theme: 'kerning',
      platforms: [
        { x: 30, y: 82, w: 230, h: 16, color: '#3b0764', border: '#c084fc', name: 'גג קרון רכבת שמאל' },
        { x: 340, y: 82, w: 230, h: 16, color: '#3b0764', border: '#c084fc', name: 'גג קרון רכבת ימין' },
        { x: 160, y: 138, w: 280, h: 14, color: '#4c1d95', border: '#e879f9', name: 'גשר פלדה ומעבר בין קרונות' },
        { x: 0, y: 195, w: 600, h: 35, color: '#2e1065', border: '#a855f7', name: 'פסי הרכבת התחתית' }
      ],
      ropes: [
        { x: 140, y1: 82, y2: 195 },
        { x: 450, y1: 82, y2: 195 }
      ],
      portal: { x: 60, y: 182, label: 'כניסה מתחנת קרנינג', sub: 'Kerning Subway Station' },
      safeSpot: { x: 380, y: 65, w: 90, label: '🛡️ גג קרון מוגן' },
      mobs: [
        { normX: 130, y: 72, minX: 40, maxX: 250, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 430, y: 72, minX: 350, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.4, dir: -1, speed: 0.85 },
        { normX: 280, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 0.8, dir: 1, speed: 1.0 }
      ]
    };
  }

  // 8. Kerning City Swamp & The Murky Swamp
  if (locStr.includes('swamp') || locStr.includes('ביצה') || locStr.includes('despair') || locStr.includes('murky')) {
    return {
      id: `map_swamp_${locIndex}`,
      name: locationName || 'Swamp of Despair I & II / The Murky Swamp (ביצות קרנינג)',
      town: 'Kerning City',
      bg: '#091912',
      theme: 'swamp',
      platforms: [
        { x: 30, y: 75, w: 170, h: 14, color: '#134e4a', border: '#2dd4bf', name: 'עמדת תצפית עץ על כלונסאות (Safe Spot)' },
        { x: 400, y: 80, w: 170, h: 14, color: '#134e4a', border: '#2dd4bf', name: 'רציף עץ ימני מעל מי הביצה' },
        { x: 170, y: 128, w: 260, h: 14, color: '#115e59', border: '#14b8a6', name: 'גזע עץ שקוע וגשר קרשים רקוב' },
        { x: 50, y: 160, w: 150, h: 12, color: '#042f2e', border: '#0d9488', name: 'ערימת שורשים שקועה' },
        { x: 400, y: 160, w: 150, h: 12, color: '#042f2e', border: '#0d9488', name: 'גזע עץ צף ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#022c22', border: '#059669', name: 'מי ביצה עמוקים ובוץ טובעני (נחשים וקרוקו)' }
      ],
      ropes: [
        { x: 110, y1: 75, y2: 195 },
        { x: 300, y1: 128, y2: 195 },
        { x: 480, y1: 80, y2: 195 }
      ],
      portal: { x: 70, y: 182, label: 'צינור ביוב סודי [↑]', sub: 'מעבר מ-Kerning Middle Forest' },
      safeSpot: { x: 45, y: 60, w: 90, label: '🛡️ רציף כלונסאות מוגן' },
      mobs: [
        { normX: 110, y: 65, minX: 40, maxX: 190, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.7 },
        { normX: 290, y: 118, minX: 180, maxX: 410, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.75 },
        { normX: 350, y: 182, minX: 40, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.85 }
      ]
    };
  }

  // 8b. Golem Temple (Ellinia / Henesys Outskirts)
  if (locStr.includes('golem') || locStr.includes('גולם') || locStr.includes('מקדש הגולמים')) {
    return {
      id: `map_golem_temple_${locIndex}`,
      name: locationName || 'Golem Temple I - V (מקדש הגולמים באליניה / הנסיס)',
      town: 'Ellinia / Henesys Outskirts',
      bg: '#111814',
      theme: 'golem_temple',
      platforms: [
        { x: 210, y: 48, w: 180, h: 14, color: '#3f3f46', border: '#22c55e', name: 'כותרת מקדש אבן עתיק מכוסה קיסוס (Safe Spot)' },
        { x: 30, y: 92, w: 180, h: 14, color: '#27272a', border: '#4ade80', name: 'פסל אליל אבן שמאלי' },
        { x: 390, y: 92, w: 180, h: 14, color: '#27272a', border: '#4ade80', name: 'פסל אליל אבן ימני' },
        { x: 140, y: 142, w: 320, h: 14, color: '#3f3f46', border: '#16a34a', name: 'מדרגות מגליתיות מרכזיות (ריכוז גולמים)' },
        { x: 0, y: 195, w: 600, h: 35, color: '#18181b', border: '#15803d', name: 'חצר המקדש העתיק' }
      ],
      ropes: [
        { x: 120, y1: 92, y2: 195 },
        { x: 480, y1: 92, y2: 195 },
        { x: 300, y1: 48, y2: 142 }
      ],
      portal: { x: 60, y: 182, label: 'שער חצר המקדש [↑]', sub: 'מעבר ליערות אליניה' },
      safeSpot: { x: 230, y: 34, w: 100, label: '🛡️ גג המקדש המוגן' },
      mobs: [
        { normX: 300, y: 38, minX: 220, maxX: 380, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.1, dir: 1, speed: 0.7 },
        { normX: 120, y: 82, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.75 },
        { normX: 480, y: 82, minX: 400, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.7 },
        { normX: 260, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.85 }
      ]
    };
  }

  // 9. Deep Ant Tunnel & Cold Cradle (Sleepywood)
  if (locStr.includes('cold cradle') || locStr.includes('cold eye') || locStr.includes('wild cargo') || locStr.includes('deep ant tunnel') || locStr.includes('evil eye') || locStr.includes('עריסת הקרח')) {
    return {
      id: `map_deep_ant_tunnel_${locIndex}`,
      name: locationName || 'Deep Ant Tunnel & Cold Cradle (מעמקי מנהרת הנמלים ועריסת הקרח)',
      town: 'Sleepywood',
      bg: '#0a0d1e',
      theme: 'deep_tunnel',
      platforms: [
        { x: 40, y: 48, w: 170, h: 14, color: '#1e1b4b', border: '#2dd4bf', name: 'נטיף קרח עליון (Safe Spot)' },
        { x: 390, y: 55, w: 170, h: 14, color: '#1e1b4b', border: '#2dd4bf', name: 'מדף קריסטלים מזרחי' },
        { x: 150, y: 105, w: 300, h: 14, color: '#312e81', border: '#38bdf8', name: 'גשר נטיפים מרכזי (ספון Cold Eyes)' },
        { x: 60, y: 152, w: 180, h: 12, color: '#1e1b4b', border: '#0284c7', name: 'מדף מערה תחתון שמאל' },
        { x: 360, y: 152, w: 180, h: 12, color: '#1e1b4b', border: '#0284c7', name: 'מדף מערה תחתון ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#0f172a', border: '#0369a1', name: 'קרקעית מערת הנמלים העמוקה' }
      ],
      ropes: [
        { x: 110, y1: 48, y2: 195 },
        { x: 470, y1: 55, y2: 195 },
        { x: 300, y1: 105, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'פתח מעלה לסליפיווד [↑]', sub: 'Sleepywood Ant Tunnel' },
      safeSpot: { x: 50, y: 34, w: 90, label: '🛡️ נטיף קרח מוגן' },
      mobs: [
        { normX: 110, y: 38, minX: 45, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 460, y: 45, minX: 400, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.85 },
        { normX: 290, y: 95, minX: 160, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 9b. Ant Tunnel (Sleepywood Upper Levels)
  if (locStr.includes('ant tunnel') || locStr.includes('מערת הנמלים')) {
    return {
      id: `map_ant_tunnel_${locIndex}`,
      name: locationName || 'Ant Tunnel I / II / III / IV',
      town: 'Sleepywood',
      bg: '#181120',
      theme: 'dungeon',
      platforms: [
        { x: 50, y: 55, w: 120, h: 12, color: '#4c0519', border: '#fb7185', name: 'עמדת נטיף מוגנת (Safe Spot)' },
        { x: 360, y: 72, w: 200, h: 14, color: '#4c0519', border: '#fb7185', name: 'מדף מערה ימני' },
        { x: 140, y: 125, w: 320, h: 14, color: '#881337', border: '#f43f5e', name: 'מפלס מערה אמצעי' },
        { x: 220, y: 162, w: 200, h: 12, color: '#881337', border: '#f43f5e', name: 'במת נטיפים תחתונה' },
        { x: 0, y: 195, w: 600, h: 35, color: '#310a17', border: '#e11d48', name: 'קרקעית המערה החשוכה' }
      ],
      ropes: [
        { x: 110, y1: 55, y2: 195 },
        { x: 450, y1: 72, y2: 195 },
        { x: 300, y1: 125, y2: 195 }
      ],
      portal: { x: 55, y: 182, label: 'יציאה לסליפיווד', sub: 'Sleepywood Town' },
      safeSpot: { x: 60, y: 40, w: 80, label: '🛡️ נטיף סלע מוגן' },
      mobs: [
        { normX: 430, y: 62, minX: 370, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.8 },
        { normX: 250, y: 115, minX: 150, maxX: 440, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.3, dir: -1, speed: 0.8 },
        { normX: 350, y: 182, minX: 60, maxX: 540, icon: mIcon, name: `${mName}`, bounce: 0.7, dir: 1, speed: 0.85 }
      ]
    };
  }

  // 10. Drake Cave (Sleepywood)
  if (locStr.includes('drake') || locStr.includes('דרייק')) {
    return {
      id: `map_drake_cave_${locIndex}`,
      name: locationName || "Drake Cave / Drake's Hunting Ground",
      town: 'Sleepywood',
      bg: '#1e0f14',
      theme: 'dungeon',
      platforms: [
        { x: 25, y: 70, w: 180, h: 14, color: '#3f1519', border: '#f87171', name: 'צוק לבה שמאלי' },
        { x: 395, y: 70, w: 180, h: 14, color: '#3f1519', border: '#f87171', name: 'צוק דרייקים ימני' },
        { x: 150, y: 132, w: 300, h: 14, color: '#5b1d24', border: '#ef4444', name: 'גשר סלעים מרכזי' },
        { x: 0, y: 195, w: 600, h: 35, color: '#270c10', border: '#dc2626', name: 'קרקעית מערת הדרייקים' }
      ],
      ropes: [
        { x: 120, y1: 70, y2: 195 },
        { x: 480, y1: 70, y2: 195 }
      ],
      portal: { x: 60, y: 182, label: 'יציאה ממעמקי המערה', sub: 'Sleepywood Deep' },
      safeSpot: { x: 420, y: 55, w: 90, label: '🛡️ צוק בטוח מדרייקים' },
      mobs: [
        { normX: 110, y: 60, minX: 35, maxX: 190, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 470, y: 60, minX: 405, maxX: 565, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.1, dir: -1, speed: 0.85 },
        { normX: 280, y: 122, minX: 160, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.8 }
      ]
    };
  }

  // 10a. Victoria Road: Thicket Around the Beach (Mano & Snails Coastal Grassy Hills)
  if (locStr.includes('thicket around') || locStr.includes('thicket around beach') || locStr.includes('סבך סביב') || locStr.includes('lith harbor outskirts') || (townStr.includes('lith harbor') && !locStr.includes('florina'))) {
    return {
      id: `map_thicket_beach_${locIndex}`,
      name: locationName || 'Victoria Road: Thicket Around the Beach III (סבך סביב החוף 3 - מאורת מאנו)',
      town: 'Lith Harbor Outskirts',
      bg: '#0a2318',
      theme: 'victoria_coast',
      platforms: [
        { x: 30, y: 55, w: 180, h: 14, color: '#14532d', border: '#4ade80', name: 'מדף דשא וסלעי חוף עליון (Safe Spot)' },
        { x: 380, y: 60, w: 190, h: 14, color: '#14532d', border: '#4ade80', name: 'מדף שיחים ימני' },
        { x: 150, y: 112, w: 300, h: 14, color: '#166534', border: '#86efac', name: 'פלטפורמת דשא מרכזית (מאנו)' },
        { x: 40, y: 155, w: 170, h: 12, color: '#15803d', border: '#22c55e', name: 'מדף חלזונות שמאל' },
        { x: 390, y: 155, w: 170, h: 12, color: '#15803d', border: '#22c55e', name: 'מדף חלזונות ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#052e16', border: '#16a34a', name: 'שביל חוף ירוק פאתי ליט הארבור' }
      ],
      ropes: [
        { x: 120, y1: 55, y2: 195 },
        { x: 480, y1: 60, y2: 195 },
        { x: 300, y1: 112, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער ל-Thicket Around Beach II [↑]', sub: 'Beach II Portal' },
      safeSpot: { x: 50, y: 40, w: 100, label: '🛡️ מדף סלעים עליון מוגן' },
      mobs: [
        { normX: 120, y: 45, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.5 },
        { normX: 470, y: 50, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.6 },
        { normX: 290, y: 102, minX: 170, maxX: 430, icon: mIcon, name: `${mName} (Mano Boss)`, bounce: 0.6, dir: 1, speed: 0.4 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.5 }
      ]
    };
  }

  // 10b. Florina Beach & Clang / Lorang Shore
  if (locStr.includes('florina') || (locStr.includes('beach') && !locStr.includes('thicket')) || locStr.includes('clang') || locStr.includes('lorang') || locStr.includes('warm sand') || locStr.includes('חוף פלורינה')) {
    return {
      id: `map_florina_${locIndex}`,
      name: locationName || 'Florina Beach: Clang Beach / Warm Sand (חוף פלורינה)',
      town: 'Florina Beach / Lith Harbor',
      bg: '#072436',
      theme: 'florina',
      platforms: [
        { x: 30, y: 50, w: 180, h: 14, color: '#ca8a04', border: '#fef08a', name: 'צמרת עץ דקל וקוקוסים (Safe Spot)' },
        { x: 390, y: 55, w: 180, h: 14, color: '#ca8a04', border: '#fef08a', name: 'מזח עץ חופי מזרחי' },
        { x: 160, y: 110, w: 280, h: 14, color: '#eab308', border: '#fef9c3', name: 'רפסודת עץ צפה מעל המים' },
        { x: 40, y: 155, w: 170, h: 12, color: '#d97706', border: '#fde047', name: 'מדף חול מערבי' },
        { x: 390, y: 155, w: 170, h: 12, color: '#d97706', border: '#fde047', name: 'מדף חול מזרחי' },
        { x: 0, y: 195, w: 600, h: 35, color: '#b45309', border: '#fde047', name: 'חוף חול זהוב וגלי ים טרופיים' }
      ],
      ropes: [
        { x: 120, y1: 50, y2: 195 },
        { x: 480, y1: 55, y2: 195 },
        { x: 300, y1: 110, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'סירת חזרה לליט הארבור [↑]', sub: 'Lith Harbor Boat' },
      safeSpot: { x: 50, y: 36, w: 100, label: '🛡️ צמרת דקל מוגנת' },
      mobs: [
        { normX: 120, y: 40, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.75 },
        { normX: 470, y: 45, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 290, y: 100, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 10c. Dead Mine & Cave of Trial & Zakum Entrance (El Nath)
  if (locStr.includes('dead mine') || locStr.includes('dead trees') || locStr.includes('cave of trial') || locStr.includes('zakum') || locStr.includes('מכרה המוות') || locStr.includes('העצים המתים') || locStr.includes('זאקום')) {
    return {
      id: `map_dead_mine_${locIndex}`,
      name: locationName || "Dead Mine & Cave of Trial (מכרה המוות ומערות הניסוי של זאקום)",
      town: 'El Nath Deep Mine',
      bg: '#240805',
      theme: 'dead_mine',
      platforms: [
        { x: 40, y: 48, w: 180, h: 14, color: '#292524', border: '#f97316', name: 'צוק בזלת עליון מעל הלבה (Safe Spot)' },
        { x: 380, y: 48, w: 180, h: 14, color: '#292524', border: '#f97316', name: 'מסילת קרונית כורים תלויה' },
        { x: 150, y: 105, w: 300, h: 16, color: '#44403c', border: '#ea580c', name: 'גשר פלדה ומסילת ברזל מעל נהרות לבה' },
        { x: 50, y: 152, w: 180, h: 12, color: '#1c1917', border: '#c2410c', name: 'מדף געשי תחתון שמאל' },
        { x: 370, y: 152, w: 180, h: 12, color: '#1c1917', border: '#c2410c', name: 'מדף געשי תחתון ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#1c1917', border: '#ef4444', name: 'קרקעית מכרה המוות ושפכי לבה' }
      ],
      ropes: [
        { x: 120, y1: 48, y2: 195 },
        { x: 470, y1: 48, y2: 195 },
        { x: 300, y1: 105, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער למזבח זאקום [↑]', sub: "The Passage to Zakum's Altar" },
      safeSpot: { x: 50, y: 34, w: 100, label: '🛡️ צוק בזלת מוגן' },
      mobs: [
        { normX: 130, y: 38, minX: 50, maxX: 210, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.1, dir: 1, speed: 0.75 },
        { normX: 460, y: 38, minX: 390, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 290, y: 95, minX: 160, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.9, dir: -1, speed: 0.95 }
      ]
    };
  }

  // 11. Eos Tower & Helios Tower (Ludibrium)
  if (locStr.includes('eos') || locStr.includes('helios') || locStr.includes('אאוס')) {
    return {
      id: `map_eos_tower_${locIndex}`,
      name: locationName || 'Eos Tower (מגדל אאוס בלודיבריום)',
      town: 'Ludibrium',
      bg: '#0b192e',
      theme: 'toy',
      platforms: [
        { x: 180, y: 40, w: 150, h: 14, color: '#b45309', border: '#fde047', name: 'גלגל שיניים עליון (Safe Spot)' },
        { x: 320, y: 78, w: 160, h: 14, color: '#0284c7', border: '#38bdf8', name: 'קוביות לגו ציאן (קומה 98)' },
        { x: 100, y: 102, w: 160, h: 14, color: '#15803d', border: '#4ade80', name: 'קוביות לגו ירוקות' },
        { x: 340, y: 135, w: 150, h: 14, color: '#ca8a04', border: '#fef08a', name: 'קוביות לגו צהובות' },
        { x: 40, y: 155, w: 150, h: 14, color: '#b91c1c', border: '#f87171', name: 'קוביות לגו אדומות' },
        { x: 0, y: 195, w: 600, h: 35, color: '#1e3a8a', border: '#60a5fa', name: 'רצפת מגדל אאוס' }
      ],
      ropes: [
        { x: 250, y1: 40, y2: 195 },
        { x: 160, y1: 102, y2: 195 },
        { x: 410, y1: 78, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'פורטל מעבר קומות [↑]', sub: 'Eos Tower' },
      safeSpot: { x: 200, y: 28, w: 100, label: '🛡️ גלגל שיניים בטוח' },
      mobs: [
        { normX: 380, y: 68, minX: 330, maxX: 470, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.75 },
        { normX: 170, y: 92, minX: 110, maxX: 250, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 400, y: 125, minX: 350, maxX: 480, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.7 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.6, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 11b. Ludibrium Toy Factory & Clocktower Deep / Path of Time
  if (townStr.includes('ludibrium') || locStr.includes('toy factory') || locStr.includes('path of time') || locStr.includes('clocktower') || locStr.includes('sky terrace') || locStr.includes('לודיבריום')) {
    return {
      id: `map_ludibrium_clocktower_${locIndex}`,
      name: locationName || 'Ludibrium: Toy Factory & Path of Time (מפעל הצעצועים ושעון הזמן)',
      town: 'Ludibrium',
      bg: '#1a0a2a',
      theme: 'ludi_clocktower',
      platforms: [
        { x: 40, y: 50, w: 180, h: 14, color: '#06b6d4', border: '#67e8f9', name: 'מסוע צעצועים עליון שמאל (Safe Spot)' },
        { x: 380, y: 50, w: 180, h: 14, color: '#ec4899', border: '#f472b6', name: 'גלגל שיניים ענק ומסוע מגנטה' },
        { x: 160, y: 108, w: 280, h: 14, color: '#8b5cf6', border: '#c4b5fd', name: 'במת לבני צעצועים מרכזית' },
        { x: 50, y: 155, w: 180, h: 12, color: '#0891b2', border: '#22d3ee', name: 'פס ייצור צעצועים תחתון שמאל' },
        { x: 370, y: 155, w: 180, h: 12, color: '#db2777', border: '#f472b6', name: 'פס ייצור צעצועים תחתון ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#2e1065', border: '#a855f7', name: 'רצפת שעון הזמן והגלגלים המסתובבים' }
      ],
      ropes: [
        { x: 120, y1: 50, y2: 195 },
        { x: 470, y1: 50, y2: 195 },
        { x: 300, y1: 108, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער שעון הזמן [↑]', sub: 'מעבר ל-Path of Time' },
      safeSpot: { x: 50, y: 36, w: 90, label: '🛡️ מסוע צעצועים מוגן' },
      mobs: [
        { normX: 120, y: 40, minX: 50, maxX: 210, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 460, y: 40, minX: 390, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.85 },
        { normX: 290, y: 98, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 12. Orbis Cloud Park
  if (locStr.includes('cloud park') || locStr.includes('עננים') || locStr.includes('pixie')) {
    return {
      id: `map_cloud_park_${locIndex}`,
      name: locationName || 'Orbis Cloud Park (פארק העננים באורביס)',
      town: 'Orbis',
      bg: '#0c1933',
      theme: 'orbis',
      platforms: [
        { x: 40, y: 58, w: 180, h: 16, color: '#0369a1', border: '#7dd3fc', name: 'ענן מרחף עליון שמאל' },
        { x: 380, y: 62, w: 180, h: 16, color: '#0369a1', border: '#7dd3fc', name: 'ענן מרחף עליון ימין' },
        { x: 160, y: 118, w: 280, h: 16, color: '#0284c7', border: '#bae6fd', name: 'אי עננים מרכזי' },
        { x: 60, y: 158, w: 150, h: 14, color: '#0284c7', border: '#bae6fd', name: 'מדרגת ענן שמאל' },
        { x: 390, y: 158, w: 150, h: 14, color: '#0284c7', border: '#bae6fd', name: 'מדרגת ענן ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#075985', border: '#38bdf8', name: 'שטיח ענני אורביס' }
      ],
      ropes: [
        { x: 130, y1: 58, y2: 195 },
        { x: 460, y1: 62, y2: 195 },
        { x: 300, y1: 118, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'יציאה לאורביס', sub: 'Orbis City' },
      safeSpot: { x: 50, y: 44, w: 90, label: '🛡️ ענן צמרת בטוח' },
      mobs: [
        { normX: 130, y: 48, minX: 50, maxX: 210, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 470, y: 52, minX: 390, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.1, dir: -1, speed: 0.85 },
        { normX: 300, y: 108, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.75 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.7, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 13. El Nath Ice Valley / Snow Field
  if (locStr.includes('ice') || locStr.includes('snow') || locStr.includes('cold') || locStr.includes('קרח') || locStr.includes('שלג') || townStr.includes('el nath')) {
    return {
      id: `map_ice_valley_${locIndex}`,
      name: locationName || 'El Nath Ice Valley / Cold Field (עמק הקרח)',
      town: 'El Nath',
      bg: '#08253b',
      theme: 'snow',
      platforms: [
        { x: 30, y: 72, w: 180, h: 14, color: '#0369a1', border: '#a5f3fc', name: 'מדף קרח עליון שמאל' },
        { x: 390, y: 72, w: 180, h: 14, color: '#0369a1', border: '#a5f3fc', name: 'מדף קרח עליון ימין' },
        { x: 160, y: 132, w: 280, h: 14, color: '#0284c7', border: '#cffafe', name: 'גשר קרחונים מרכזי' },
        { x: 0, y: 195, w: 600, h: 35, color: '#082f49', border: '#7dd3fc', name: 'משטח שלג עמוק באל נאת\'' }
      ],
      ropes: [
        { x: 120, y1: 72, y2: 195 },
        { x: 480, y1: 72, y2: 195 },
        { x: 300, y1: 132, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'יציאה לאל נאת\'', sub: 'El Nath Town' },
      safeSpot: { x: 410, y: 58, w: 90, label: '🛡️ צוק שלג מוגן' },
      mobs: [
        { normX: 120, y: 62, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.8 },
        { normX: 480, y: 62, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.3, dir: -1, speed: 0.85 },
        { normX: 300, y: 122, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.7, dir: 1, speed: 0.75 },
        { normX: 250, y: 182, minX: 40, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 13b. Mu Lung & Herb Town
  if (townStr.includes('mu lung') || townStr.includes('herb town') || locStr.includes('herb garden') || locStr.includes('peach farm') || locStr.includes('practice field') || locStr.includes('מו לונג') || locStr.includes('עשבי המרפא')) {
    return {
      id: `map_mu_lung_${locIndex}`,
      name: locationName || 'Mu Lung & Herb Town (גני צמחי המרפא ומו לונג)',
      town: 'Mu Lung / Herb Town',
      bg: '#0c2014',
      theme: 'mu_lung',
      platforms: [
        { x: 30, y: 50, w: 180, h: 14, color: '#451a03', border: '#10b981', name: 'גג פגודה מזרחי (Safe Spot)' },
        { x: 390, y: 50, w: 180, h: 14, color: '#451a03', border: '#10b981', name: 'טרסת במבוק עליונה' },
        { x: 160, y: 108, w: 280, h: 14, color: '#78350f', border: '#34d399', name: 'עמדת אימונים ובובות קש' },
        { x: 50, y: 155, w: 170, h: 12, color: '#27272a', border: '#059669', name: 'ערוגת צמחי מרפא 50 שנה' },
        { x: 380, y: 155, w: 170, h: 12, color: '#27272a', border: '#059669', name: 'ערוגת צמחי מרפא 100 שנה' },
        { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#10b981', name: 'קרקעית גני הצמחים וההר הירוק' }
      ],
      ropes: [
        { x: 120, y1: 50, y2: 195 },
        { x: 480, y1: 50, y2: 195 },
        { x: 300, y1: 108, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער לעיר מו לונג [↑]', sub: 'Mu Lung Dojo Gate' },
      safeSpot: { x: 50, y: 36, w: 90, label: '🛡️ גג פגודה מוגן' },
      mobs: [
        { normX: 120, y: 40, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 470, y: 40, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.85 },
        { normX: 290, y: 98, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.75 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 13c. Leafre & Dragon Nests (Minar Forest, Wyvern's Nest, Horntail)
  if (townStr.includes('leafre') || locStr.includes('minar') || locStr.includes('dragon nest') || locStr.includes('wyvern') || locStr.includes('horntail') || locStr.includes('manon') || locStr.includes('griffey') || locStr.includes('ליף')) {
    return {
      id: `map_leafre_${locIndex}`,
      name: locationName || 'Leafre: Dragon Forest & Wyvern Nest (יערות ליף וקני הדרקונים)',
      town: 'Leafre',
      bg: '#140c22',
      theme: 'leafre',
      platforms: [
        { x: 40, y: 48, w: 180, h: 14, color: '#4a044e', border: '#c084fc', name: 'ענף עץ ענק בשכבות העננים (Safe Spot)' },
        { x: 380, y: 48, w: 180, h: 14, color: '#4a044e', border: '#c084fc', name: 'קן ביצי דרקונים מזרחי' },
        { x: 160, y: 105, w: 280, h: 14, color: '#581c87', border: '#d8b4fe', name: 'במת ענפי דרקון קדומה' },
        { x: 50, y: 152, w: 180, h: 12, color: '#3b0764', border: '#a855f7', name: 'מדף שורשי ענק שמאל' },
        { x: 370, y: 152, w: 180, h: 12, color: '#3b0764', border: '#a855f7', name: 'מדף שורשי ענק ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#2e1065', border: '#9333ea', name: 'קרקעית יער הדרקונים הקדום' }
      ],
      ropes: [
        { x: 120, y1: 48, y2: 195 },
        { x: 470, y1: 48, y2: 195 },
        { x: 300, y1: 105, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער הכפר ליף [↑]', sub: 'Leafre Town Center' },
      safeSpot: { x: 50, y: 34, w: 100, label: '🛡️ ענף עליון מוגן' },
      mobs: [
        { normX: 120, y: 38, minX: 50, maxX: 210, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 460, y: 38, minX: 390, maxX: 550, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.85 },
        { normX: 290, y: 95, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.9, dir: -1, speed: 0.95 }
      ]
    };
  }

  // 13d. Aqua Road & Deep Sea Gorge & Pianus Cave
  if (townStr.includes('aqua') || locStr.includes('deep sea') || locStr.includes('ocean') || locStr.includes('pianus') || locStr.includes('אקווה') || locStr.includes('מעמקי הים')) {
    return {
      id: `map_aqua_road_${locIndex}`,
      name: locationName || 'Aqua Road: Deep Sea Gorge & Trench (מעמקי אקווה רוד)',
      town: 'Aqua Road',
      bg: '#011224',
      theme: 'aqua',
      platforms: [
        { x: 30, y: 55, w: 180, h: 14, color: '#0369a1', border: '#38bdf8', name: 'מדף שונית אלמוגים פלואורסצנטית (Safe Spot)' },
        { x: 390, y: 55, w: 180, h: 14, color: '#0369a1', border: '#38bdf8', name: 'תורן ספינה טרופה מזרחי' },
        { x: 160, y: 112, w: 280, h: 14, color: '#0284c7', border: '#7dd3fc', name: 'שונית אלמוגים מרכזית ובועות אוויר' },
        { x: 0, y: 195, w: 600, h: 35, color: '#082f49', border: '#0284c7', name: 'קרקעית האוקיינוס והמצולות (פיאנוס)' }
      ],
      ropes: [
        { x: 120, y1: 55, y2: 195 },
        { x: 480, y1: 55, y2: 195 },
        { x: 300, y1: 112, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער לאקווריום [↑]', sub: 'Aquarium Town Center' },
      safeSpot: { x: 45, y: 40, w: 90, label: '🛡️ שונית אלמוגים מוגנת' },
      mobs: [
        { normX: 120, y: 45, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.75 },
        { normX: 470, y: 45, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
        { normX: 300, y: 102, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.6, dir: 1, speed: 0.75 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.7, dir: -1, speed: 0.85 }
      ]
    };
  }

  // 13e. Ariant & The Sahel Desert
  if (townStr.includes('ariant') || locStr.includes('sahel') || locStr.includes('cactus') || locStr.includes('desert') || locStr.includes('מדבר') || locStr.includes('אריאנט')) {
    return {
      id: `map_ariant_${locIndex}`,
      name: locationName || 'The Sahel 1 / 2 / 3 & Cactus Desert (מדבר אריאנט)',
      town: 'Ariant',
      bg: '#281507',
      theme: 'desert',
      platforms: [
        { x: 30, y: 60, w: 180, h: 14, color: '#b45309', border: '#fef08a', name: 'חומת ארמון אבן חול (Safe Spot)' },
        { x: 390, y: 60, w: 180, h: 14, color: '#b45309', border: '#fef08a', name: 'דיונת חול מזרחית גבוהה' },
        { x: 160, y: 120, w: 280, h: 14, color: '#d97706', border: '#fde047', name: 'רמת דיונות מרכזית (ספוני קקטוסים)' },
        { x: 0, y: 195, w: 600, h: 35, color: '#78350f', border: '#fbbf24', name: 'קרקעית מדבר הסאהל האינסופית' }
      ],
      ropes: [
        { x: 120, y1: 60, y2: 195 },
        { x: 480, y1: 60, y2: 195 },
        { x: 300, y1: 120, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער לעיר אריאנט [↑]', sub: 'Ariant Oasis Gate' },
      safeSpot: { x: 45, y: 46, w: 90, label: '🛡️ חומת מדבר מוגנת' },
      mobs: [
        { normX: 120, y: 50, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 470, y: 50, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.85 },
        { normX: 300, y: 110, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 13f. Lith Harbor Outskirts & Amherst (Maple Island)
  if (locStr.includes('lith harbor') || locStr.includes('maple island') || locStr.includes('amherst') || locStr.includes('ליט הארבור') || locStr.includes('אי המייפל')) {
    return {
      id: `map_lith_harbor_${locIndex}`,
      name: locationName || 'Lith Harbor Outskirts & Amherst Grass Field (חופי ליט הארבור ואי המייפל)',
      town: 'Lith Harbor / Maple Island',
      bg: '#07212e',
      theme: 'lith_harbor',
      platforms: [
        { x: 30, y: 55, w: 180, h: 14, color: '#15803d', border: '#86efac', name: 'צוק דשא חופי ומגדלור (Safe Spot)' },
        { x: 390, y: 60, w: 180, h: 14, color: '#78350f', border: '#fde047', name: 'רציף סירות דיג מעץ' },
        { x: 160, y: 115, w: 280, h: 14, color: '#166534', border: '#4ade80', name: 'מדף דשא אמצעי וארגזי דיג' },
        { x: 0, y: 195, w: 600, h: 35, color: '#0e7490', border: '#38bdf8', name: 'קו החוף וגלי הים הכחולים' }
      ],
      ropes: [
        { x: 120, y1: 55, y2: 195 },
        { x: 480, y1: 60, y2: 195 },
        { x: 300, y1: 115, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'שער העיר ליט הארבור [↑]', sub: 'Lith Harbor Port' },
      safeSpot: { x: 45, y: 40, w: 90, label: '🛡️ צוק חופי מוגן' },
      mobs: [
        { normX: 120, y: 45, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.8 },
        { normX: 470, y: 50, minX: 400, maxX: 560, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.85 },
        { normX: 300, y: 105, minX: 170, maxX: 430, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.8 },
        { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.8, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 14. Forest of Ellinia / The Great Tree / Monkey Forest
  if (locStr.includes('forest') || townStr.includes('ellinia')) {
    const isMonkey = locStr.includes('monkey');
    return {
      id: `map_ellinia_forest_${locIndex}`,
      name: locationName || (isMonkey ? 'Monkey Forest (יער הקופים באליניה)' : 'The Forest of Ellinia (יערות אליניה ועצי הענק)'),
      town: 'Ellinia',
      bg: isMonkey ? '#031710' : '#04211a',
      theme: 'ellinia',
      platforms: [
        { x: 200, y: 40, w: 200, h: 12, color: '#047857', border: '#34d399', name: 'צמרת עץ הענק (Safe Spot)' },
        { x: 30, y: 75, w: 170, h: 12, color: '#047857', border: '#34d399', name: 'ענף שמאל עליון' },
        { x: 400, y: 80, w: 170, h: 12, color: '#047857', border: '#34d399', name: 'ענף ימין עליון' },
        { x: 140, y: 120, w: 320, h: 12, color: '#059669', border: '#6ee7b7', name: 'ענף אמצעי מרכזי' },
        { x: 60, y: 158, w: 180, h: 12, color: '#059669', border: '#6ee7b7', name: 'ענף תחתון שמאל' },
        { x: 360, y: 158, w: 180, h: 12, color: '#059669', border: '#6ee7b7', name: 'ענף תחתון ימין' },
        { x: 0, y: 195, w: 600, h: 35, color: '#065f46', border: '#34d399', name: 'שורשי עצי הענק' }
      ],
      ropes: [
        { x: 110, y1: 75, y2: 195 },
        { x: 480, y1: 80, y2: 195 },
        { x: 300, y1: 40, y2: 195 }
      ],
      portal: { x: 50, y: 182, label: 'מעבר לעיר אליניה', sub: 'Ellinia Town' },
      safeSpot: { x: 220, y: 28, w: 100, label: '🛡️ צמרת עץ בטוחה' },
      mobs: [
        { normX: 290, y: 30, minX: 210, maxX: 390, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.2, dir: 1, speed: 0.75 },
        { normX: 110, y: 65, minX: 40, maxX: 190, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.1, dir: -1, speed: 0.8 },
        { normX: 480, y: 70, minX: 410, maxX: 560, icon: mIcon, name: `${mName}`, bounce: 0.5, dir: 1, speed: 0.7 },
        { normX: 260, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 1.7, dir: -1, speed: 0.9 }
      ]
    };
  }

  // 15. Default Victoria Island Field
  return {
    id: `map_generic_${locIndex}`,
    name: locationName || `${mTown}: Hunting Map`,
    town: mTown,
    bg: '#081a24',
    theme: 'forest',
    platforms: [
      { x: 30, y: 65, w: 180, h: 14, color: '#166534', border: '#4ade80', name: 'פלטפורמת עץ עליונה שמאל' },
      { x: 390, y: 70, w: 180, h: 14, color: '#166534', border: '#4ade80', name: 'פלטפורמת עץ עליונה ימין' },
      { x: 150, y: 128, w: 300, h: 14, color: '#15803d', border: '#86efac', name: 'במת ביניים מרכזית' },
      { x: 0, y: 195, w: 600, h: 35, color: '#14532d', border: '#4ade80', name: 'קרקעית המפה' }
    ],
    ropes: [
      { x: 120, y1: 65, y2: 195 },
      { x: 480, y1: 70, y2: 195 },
      { x: 300, y1: 128, y2: 195 }
    ],
    portal: { x: 60, y: 182, label: `יציאה לכיוון ${mTown.split('/')[0].trim()}`, sub: 'מעבר מפה' },
    safeSpot: { x: 410, y: 55, w: 90, label: '🛡️ עמדה מוגנת לצלפים' },
    mobs: [
      { normX: 120, y: 55, minX: 40, maxX: 200, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 0.3, dir: 1, speed: 0.8 },
      { normX: 300, y: 118, minX: 160, maxX: 440, icon: mIcon, name: `${mName} Lv.${mLevel}`, bounce: 1.2, dir: -1, speed: 0.8 },
      { normX: 250, y: 182, minX: 50, maxX: 550, icon: mIcon, name: `${mName}`, bounce: 0.7, dir: 1, speed: 0.85 }
    ]
  };
}

// Dynamic Radar Generator for ANY Monster in MapleStory Classic
export function generateMonsterMapRadar(monster, selectedLocIndex = 0) {
  if (!monster) return CLASSIC_RADAR_PRESETS.pigBeach;

  const locList = (monster.locations && monster.locations.length > 0)
    ? monster.locations
    : [`${monster.town || 'Victoria Island'}: Hunting Grounds`];

  const safeIndex = Math.min(Math.max(0, selectedLocIndex), locList.length - 1);
  const primaryLocation = locList[safeIndex];

  const layout = getAuthenticMapLayout(primaryLocation, monster.town, monster, safeIndex);
  return {
    ...layout,
    locationsList: locList,
    activeLocIndex: safeIndex
  };
}

export default function InteractiveMapRadar({

  monster = null,
  hiddenPortal = null,
  initialMapKey = 'pigBeach',
  showControls = true,
  height = 280,
  activeLocationIndex = null,
  onLocationChange = null
}) {
  const { langMode, isRTL, t } = useLanguage();
  const isEn = langMode === 'en';
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredPlatform, setHoveredPlatform] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [internalLocIndex, setInternalLocIndex] = useState(0);

  // Use activeLocationIndex if provided by parent, otherwise internal state
  const selectedLocIndex = (activeLocationIndex !== null && activeLocationIndex !== undefined)
    ? activeLocationIndex
    : internalLocIndex;

  const handleSelectLoc = (idx) => {
    setInternalLocIndex(idx);
    if (onLocationChange) onLocationChange(idx);
  };

  // Reset selected location index when monster changes
  useEffect(() => {
    setInternalLocIndex(0);
  }, [monster?.id]);

  // Mode switcher: 'radar' (2D platforms simulation - default & reliable), 'minimap' (MiniMap HUD), 'render' (authentic HD in-game render)
  const [viewMode, setViewMode] = useState('radar');
  const [minimapError, setMinimapError] = useState(false);
  const [renderError, setRenderError] = useState(false);
  const [showPortalModal, setShowPortalModal] = useState(false);
  const [renderZoom, setRenderZoom] = useState(1);
  const [showPins, setShowPins] = useState(true);
  const [activePin, setActivePin] = useState(null);

  // Reset errors and zoom when active map changes
  useEffect(() => {
    setMinimapError(false);
    setRenderError(false);
    setRenderZoom(1);
  }, [selectedLocIndex, monster?.id, activeLocationIndex]);

  // Close fullscreen on Escape key
  useEffect(() => {
    if (!isExpanded) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsExpanded(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  // Determine active preset key for standalone explorer
  const [activeMapKey, setActiveMapKey] = useState(initialMapKey);

  // Compute the current map dynamically per monster, or from presets
  const currentMap = useMemo(() => {
    if (monster) {
      return generateMonsterMapRadar(monster, selectedLocIndex);
    }
    if (hiddenPortal) {
      const tgt = (hiddenPortal.targetMap || '').toLowerCase();
      if (tgt.includes('pig')) return CLASSIC_RADAR_PRESETS.pigBeach;
      if (tgt.includes('mushroom')) return CLASSIC_RADAR_PRESETS.blueMushroom;
    }
    return CLASSIC_RADAR_PRESETS[activeMapKey] || CLASSIC_RADAR_PRESETS.pigBeach;
  }, [monster, selectedLocIndex, hiddenPortal, activeMapKey]);

  // Active location string and authentic map data from mapsDatabase
  const activeLocName = useMemo(() => {
    if (monster?.locations && monster.locations.length > 0) {
      return monster.locations[selectedLocIndex] || monster.locations[0];
    }
    return currentMap?.name || '';
  }, [monster, selectedLocIndex, currentMap]);

  const realMapData = useMemo(() => {
    return getRealMapData(activeLocName, monster?.town || currentMap?.town, monster);
  }, [activeLocName, monster, currentMap]);

  const liveHiddenPortal = useMemo(() => {
    return getLiveHiddenPortal(monster, activeLocName) || realMapData?.hiddenPortal || null;
  }, [monster, activeLocName, realMapData]);

  // Active mobs array state (to handle movement)
  const mobsRef = useRef([]);
  useEffect(() => {
    mobsRef.current = (currentMap.mobs || []).map(m => ({
      ...m,
      normX: m.normX !== undefined ? m.normX : (m.x || 200)
    }));
  }, [currentMap]);

  // Resolved high-res render and minimap image sources (local files take priority)
  const renderSrc = realMapData?.localRender || realMapData?.render || realMapData?.renderUrl;
  const minimapSrc = realMapData?.localMinimap || realMapData?.minimap || realMapData?.minimapUrl;

  // Main Canvas Render & Animation Loop
  useEffect(() => {
    if (viewMode !== 'radar') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let frame = 0;

    const baseW = 600;
    const baseH = 230;

    const render = () => {
      frame++;

      const width = canvas.width;
      const height = canvas.height;
      const sx = width / baseW;
      const sy = height / baseH;

      // Theme identification for custom biome graphics
      const isDesert = realMapData?.bgTheme === 'desert' || currentMap?.theme === 'desert';
      const isCave = realMapData?.bgTheme === 'cave' || currentMap?.theme === 'cave';

      // 1. Clear & Background
      ctx.fillStyle = isDesert ? '#1a1208' : isCave ? '#070b14' : currentMap.bg;
      ctx.fillRect(0, 0, width, height);

      // 2. Radar Grid Lines (Spacious sci-fi radar look)
      ctx.strokeStyle = isDesert ? 'rgba(245, 158, 11, 0.08)' : 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 3. Ropes & Ladders
      (currentMap.ropes || []).forEach(r => {
        const rx = r.x * sx;
        const ry1 = r.y1 * sy;
        const ry2 = r.y2 * sy;
        ctx.strokeStyle = isDesert ? '#d97706' : '#eab308';
        ctx.lineWidth = 4;
        ctx.setLineDash([5, 4]);
        ctx.beginPath();
        ctx.moveTo(rx, ry1);
        ctx.lineTo(rx, ry2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 4. Platforms
      (currentMap.platforms || []).forEach(p => {
        const px = p.x * sx;
        const py = p.y * sy;
        const pw = p.w * sx;
        const ph = Math.max(16, p.h * sy);

        // Platform Body (Desert sandstone or Cave granite)
        ctx.fillStyle = isDesert ? '#92400e' : isCave ? '#1e293b' : p.color;
        ctx.fillRect(px, py, pw, ph);

        // Platform Border
        ctx.strokeStyle = isDesert ? '#f59e0b' : isCave ? '#38bdf8' : p.border;
        ctx.lineWidth = 2;
        ctx.strokeRect(px, py, pw, ph);

        // Sand/Grass/Trim on top
        ctx.fillStyle = isDesert ? '#fef08a' : isCave ? '#a5f3fc' : '#ffffff';
        ctx.globalAlpha = 0.45;
        ctx.fillRect(px + 2, py + 1, pw - 4, 3);
        ctx.globalAlpha = 1.0;
      });

      // 5. Safe Spot Zone
      if (currentMap.safeSpot) {
        const s = currentMap.safeSpot;
        const sxPos = s.x * sx;
        const syPos = s.y * sy;
        const sWidth = s.w * sx;
        const sHeight = 34;

        ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(sxPos, syPos - 8, sWidth, sHeight, 6);
          ctx.fill();
        } else {
          ctx.fillRect(sxPos, syPos - 8, sWidth, sHeight);
        }

        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 1.6;
        ctx.setLineDash([4, 4]);
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(sxPos, syPos - 8, sWidth, sHeight, 6);
          ctx.stroke();
        } else {
          ctx.strokeRect(sxPos, syPos - 8, sWidth, sHeight);
        }
        ctx.setLineDash([]);

        ctx.fillStyle = '#f3e8ff';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(s.label, sxPos + sWidth / 2, syPos + 9);
      }

      // 6. Portal Spot (Pulsing Golden Glow + Flag Tag)
      if (currentMap.portal) {
        const p = currentMap.portal;
        const pX = p.x * sx;
        const pY = p.y * sy;
        const pulseR = 10 + Math.sin(frame * 0.08) * 5;

        // Wave rings
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(pX, pY, pulseR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(pX, pY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Flag tag box
        const flagW = 130;
        const flagH = 34;
        const flagX = pX - flagW / 2;
        const flagY = pY - 50;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(flagX, flagY, flagW, flagH, 6);
          ctx.fill();
        } else {
          ctx.fillRect(flagX, flagY, flagW, flagH);
        }
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.5;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(flagX, flagY, flagW, flagH, 6);
          ctx.stroke();
        } else {
          ctx.strokeRect(flagX, flagY, flagW, flagH);
        }

        ctx.fillStyle = '#fbbf24';
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(p.label, pX, flagY + 4);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '10.5px sans-serif';
        ctx.fillText(p.sub, pX, flagY + 19);

        // Arrow pointing down from tag to portal
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.moveTo(pX, pY - 14);
        ctx.lineTo(pX - 5, flagY + flagH);
        ctx.lineTo(pX + 5, flagY + flagH);
        ctx.closePath();
        ctx.fill();
      }

      // 7. Animated Bouncing Monsters
      mobsRef.current.forEach(m => {
        if (isPlaying) {
          const spd = m.speed || 0.8;
          m.bounce += 0.08 * spd;
          m.normX += m.dir * spd;

          // Patrol range wrap/bounce within platform boundaries
          const minX = m.minX || 40;
          const maxX = m.maxX || 560;
          if (m.normX > maxX) {
            m.normX = maxX;
            m.dir = -1;
          }
          if (m.normX < minX) {
            m.normX = minX;
            m.dir = 1;
          }
        }

        const drawX = m.normX * sx;
        const drawY = m.y * sy;
        const bounceY = Math.abs(Math.sin(m.bounce)) * 8;

        // Shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.ellipse(drawX, drawY + 6, 16, 5, 0, 0, Math.PI * 2);
        ctx.fill();

        // Mob emoji icon (Larger & clearer)
        const iconSize = Math.max(26, Math.round(26 * (width / 800)));
        ctx.font = `${iconSize}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.fillText(m.icon, drawX, drawY - bounceY);

        // Mob name tag badge
        const nameFont = 'bold 12px sans-serif';
        ctx.font = nameFont;
        const textMetrics = ctx.measureText(m.name);
        const tagW = textMetrics.width + 14;
        const tagH = 20;
        const tagX = drawX - tagW / 2;
        const tagY = drawY - bounceY - iconSize - 6;

        ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(tagX, tagY, tagW, tagH, 6);
          ctx.fill();
        } else {
          ctx.fillRect(tagX, tagY, tagW, tagH);
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.lineWidth = 1;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(tagX, tagY, tagW, tagH, 6);
          ctx.stroke();
        } else {
          ctx.strokeRect(tagX, tagY, tagW, tagH);
        }

        ctx.fillStyle = '#ffffff';
        ctx.font = nameFont;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(m.name, drawX, tagY + tagH / 2);
      });

      // 8. Player Character Marker (Placed on the safe spot platform if available!)
      let playerX = 120 * sx;
      let playerY = 62 * sy;
      if (currentMap.safeSpot) {
        playerX = (currentMap.safeSpot.x + currentMap.safeSpot.w / 2) * sx;
        playerY = (currentMap.safeSpot.y - 4) * sy;
      }
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(playerX, playerY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.font = '16px "Segoe UI Emoji", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('🗡️', playerX, playerY - 8);

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [currentMap, isPlaying, viewMode]);

  // Mouse hover detection over canvas
  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleFactorX = canvas.width / rect.width;
    const scaleFactorY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleFactorX;
    const mouseY = (e.clientY - rect.top) * scaleFactorY;

    const baseW = 600;
    const baseH = 230;
    const sx = canvas.width / baseW;
    const sy = canvas.height / baseH;

    // Check collision with scaled platforms
    const hit = (currentMap.platforms || []).find(p => {
      const px = p.x * sx;
      const py = p.y * sy;
      const pw = p.w * sx;
      const ph = Math.max(16, p.h * sy);
      return mouseX >= px && mouseX <= px + pw && mouseY >= py && mouseY <= py + ph;
    });

    if (hit) {
      setHoveredPlatform(hit.name || 'פלטפורמת אימון');
    } else {
      setHoveredPlatform(null);
    }
  };

  const canvasWidth = isExpanded ? 1100 : 850;
  const canvasHeight = isExpanded ? 460 : height;

  const content = (
    <div className={`bg-slate-950/95 rounded-2xl p-3.5 sm:p-5 border border-sky-400/40 shadow-2xl space-y-4 ${
      isExpanded ? 'w-full max-w-6xl mx-auto' : 'w-full'
    }`}>
      {/* Top Header & Map Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 flex items-center justify-center text-xl shadow">
            {monster?.icon || '🗺️'}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h5 className="text-sm sm:text-base font-black text-white">
                {realMapData.nameHe || currentMap.name}
              </h5>
              {realMapData.mapId && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono border border-slate-700">
                  WZ: {realMapData.mapId}
                </span>
              )}
              {monster && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-400/30">
                  Lv. {monster.level} {monster.nameHe || monster.name}
                </span>
              )}
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-400/30">
                {realMapData.townHe || realMapData.town || currentMap.town}
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              {realMapData.streetName && <strong className="text-cyan-400 font-mono">{realMapData.streetName} • </strong>}
              {viewMode === 'render'
                ? (isEn ? 'High-resolution in-game panoramic terrain render & platforms view' : 'תצלום שטח פנורמי אותנטי מהמשחק ברזולוציה גבוהה')
                : viewMode === 'minimap'
                ? (isEn ? 'Official in-game HUD MiniMap with safe spots & spawns' : 'מפת MiniMap מקורית מהמשחק עם עמדות צלפים וריכוז מפלצות')
                : (isEn ? 'Live 2D physics & platforms tactical radar simulation' : 'סימולציית רדאר שטח 2D מונפשת בזמן אמת')}
            </p>
          </div>
        </div>

        {/* View Switcher: Render vs MiniMap vs Radar + Hidden Portal Trigger + Fullscreen */}
        {showControls && (
          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Segmented Controls */}
            <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-sky-400/30 shadow-inner flex-wrap gap-1">
              <button
                onClick={() => setViewMode('render')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'render'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="הצג תצלום שטח פנורמי מלא של המפה מהמשחק"
              >
                <span>📸</span>
                <span>{isEn ? 'HD Render' : 'תצלום פנורמי'}</span>
              </button>
              <button
                onClick={() => setViewMode('minimap')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'minimap'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="הצג מפת MiniMap אותנטית מחלון המשחק"
              >
                <span>🍁</span>
                <span>{isEn ? 'MiniMap' : 'מפת MiniMap'}</span>
              </button>
              <button
                onClick={() => setViewMode('radar')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  viewMode === 'radar'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="הצג סימולציית רדאר שטח 2D אינטראקטיבית"
              >
                <span>📡</span>
                <span>{isEn ? '2D Radar' : 'רדאר 2D חי'}</span>
              </button>
            </div>

            {/* Live Hidden Portal Showcase Trigger Button */}
            {liveHiddenPortal && (
              <button
                onClick={() => setShowPortalModal(true)}
                className="px-3 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500/20 via-amber-500/30 to-amber-600/20 text-amber-300 border-2 border-amber-400 hover:border-amber-300 transition flex items-center gap-1.5 shadow-md shadow-amber-500/20"
                title="צפה בדוגמה חיה מתוך המשחק לפורטל הנסתר של מפה זו"
              >
                <span>🚪</span>
                <span>{isEn ? 'Hidden Portal Guide' : 'מדריך פורטל סודי'}</span>
              </button>
            )}

            {/* In Radar Mode: Play/Pause */}
            {viewMode === 'radar' && (
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold liquid-glass-pill hover:bg-white/10 text-slate-200 transition flex items-center gap-1 shadow-sm"
                title={isPlaying ? 'עצור אנימציה' : 'הפעל אנימציה'}
              >
                <span>{isPlaying ? '⏸️' : '▶️'}</span>
                <span>{isPlaying ? (isEn ? 'Pause' : 'עצור') : (isEn ? 'Play' : 'הפעל')}</span>
              </button>
            )}

            {/* Fullscreen Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold liquid-glass-pill hover:bg-white/10 text-cyan-300 border border-cyan-500/30 transition flex items-center gap-1 shadow-sm"
              title={isExpanded ? 'הקטן לתצוגה רגילה' : 'הגדל למסך מלא'}
            >
              <span>⛶</span>
              <span>{isExpanded ? (isEn ? 'Collapse' : 'צמצם חזרה') : (isEn ? 'Fullscreen' : 'מסך מלא')}</span>
            </button>
          </div>
        )}
      </div>

      {/* Monster Location Switcher Tabs - ONLY shown if standalone (not controlled by parent) */}
      {monster && monster.locations && monster.locations.length > 1 && (activeLocationIndex === null || activeLocationIndex === undefined) && (
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-2 rounded-xl border border-white/10 text-xs flex-wrap">
          <span className="text-xs text-slate-300 font-bold px-2 shrink-0 flex items-center gap-1">
            <span>📍</span>
            <span>אזורי מחיה לבחירה:</span>
          </span>
          {monster.locations.map((loc, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectLoc(idx)}
              className={`px-3 py-1.5 rounded-lg font-bold transition text-xs flex items-center gap-1.5 ${
                selectedLocIndex === idx
                  ? 'bg-cyan-600 text-white shadow-md ring-1 ring-cyan-300'
                  : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <span>🗺️</span>
              <bdi>{loc}</bdi>
            </button>
          ))}
        </div>
      )}

      {/* --- MODE 1: HIGH-RES PANORAMIC TERRAIN RENDER --- */}
      {viewMode === 'render' && (
        <div className="space-y-3 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-base">📸</span>
              <span className="font-bold text-cyan-300">
                {isEn ? 'Panoramic Terrain View (Scroll & Zoom)' : 'תצלום פנורמי של מפת השטח (גלילה וזום חופשי)'}
              </span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setRenderZoom(prev => Math.max(0.6, prev - 0.2))}
                className="px-2 py-0.5 rounded hover:bg-slate-800 text-slate-300 font-bold cursor-pointer"
                title="הקטן זום"
              >
                -
              </button>
              <span className="font-mono text-[11px] text-cyan-300 px-1 select-none">
                {Math.round(renderZoom * 100)}%
              </span>
              <button
                onClick={() => setRenderZoom(prev => Math.min(2.5, prev + 0.2))}
                className="px-2 py-0.5 rounded hover:bg-slate-800 text-slate-300 font-bold cursor-pointer"
                title="הגדל זום"
              >
                +
              </button>
              <button
                onClick={() => setRenderZoom(1)}
                className="text-[10px] text-slate-400 hover:text-white px-1.5 border-r border-slate-700 mr-1 pr-1.5 font-bold cursor-pointer"
                title="איפוס ל-100%"
              >
                {isEn ? 'Reset' : 'איפוס'}
              </button>
            </div>
          </div>

          {/* Panoramic Scrollable Viewport */}
          <div className="relative rounded-2xl overflow-auto border border-cyan-500/30 bg-slate-950 shadow-inner h-72 sm:h-80 max-h-96 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-950">
            {renderError || (!renderSrc && !minimapSrc) ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                <span className="text-4xl animate-bounce">📡</span>
                <div>
                  <h6 className="font-bold text-white text-sm">{realMapData.nameHe || realMapData.nameEn}</h6>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn ? 'Panoramic render image offline • Use 2D Radar Simulation' : 'תצלום השטח שמור במצב רדאר 2D חי — לחץ למטה לפתיחת הסימולציה'}
                  </p>
                </div>
                <button
                  onClick={() => setViewMode('radar')}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs shadow-md transition cursor-pointer"
                >
                  {isEn ? 'Open 2D Radar Simulation 📡' : 'פתח סקיצת רדאר 2D חי 📡'}
                </button>
              </div>
            ) : (
              <div
                className="w-full flex items-center justify-center p-3 min-h-full transition-transform duration-200"
                style={{
                  transform: `scale(${renderZoom})`,
                  transformOrigin: 'center center'
                }}
              >
                <img
                  src={renderSrc || minimapSrc}
                  onError={() => setRenderError(true)}
                  alt={realMapData.nameEn}
                  className="max-w-none w-auto max-h-[440px] object-contain rounded-xl filter drop-shadow-2xl select-none"
                />
              </div>
            )}

            <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-[10px] text-slate-300 font-mono shadow backdrop-blur">
              🗺️ <bdi>{realMapData.nameEn || realMapData.nameHe}</bdi>
            </div>
          </div>

          {/* Terrain Description Summary */}
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-between flex-wrap gap-2">
            <div>
              <strong className="text-cyan-400 font-bold">{isEn ? 'Terrain Intel: ' : 'אופי השטח: '}</strong>
              <span>{realMapData.terrainDescHe || 'מפת שטח רשמית עם פלטפורמות, סולמות וריכוז מפלצות אותנטי מעולם מייפל סטורי.'}</span>
            </div>
            {realMapData.mapId && (
              <span className="text-[11px] font-mono text-cyan-300/90 bg-slate-950 px-2.5 py-0.5 rounded-lg border border-slate-800">
                WZ MapID: {realMapData.mapId}
              </span>
            )}
          </div>
        </div>
      )}

      {/* --- MODE 2: OFFICIAL IN-GAME MINIMAP HUD --- */}
      {viewMode === 'minimap' && (
        <div className="space-y-3 animate-fade-in">
          <div className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 rounded-2xl p-4 border-2 border-emerald-500/40 shadow-xl space-y-3">
            <div className="flex items-center justify-between border-b border-emerald-500/30 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">🍁</span>
                <div>
                  <h6 className="text-xs sm:text-sm font-black text-emerald-300 flex items-center gap-1.5">
                    <span>MiniMap:</span>
                    <span className="text-white">{realMapData.nameHe}</span>
                  </h6>
                  <p className="text-[11px] font-mono text-slate-400">
                    <bdi>{realMapData.nameEn}</bdi>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPins(!showPins)}
                className={`text-[10px] font-mono px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  showPins
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40 font-bold shadow-sm'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
                title="הצג / הסתר נקודות ציון על מפת המינימאפ"
              >
                {showPins ? '📌 סימוני מפה: פעיל' : '📌 סימוני מפה: כבוי'}
              </button>
            </div>

            {/* Minimap Image with Overlaid Pins */}
            <div className="relative rounded-xl overflow-hidden border-2 border-slate-800 bg-slate-950/90 flex items-center justify-center p-4 min-h-[200px] shadow-inner group">
              {minimapError || !minimapSrc ? (
                <div className="text-slate-400 text-xs font-mono p-6 text-center space-y-2">
                  <span className="text-2xl block">🍁</span>
                  <div className="font-bold text-white">{realMapData.nameHe}</div>
                  <div>מפת ה-MiniMap מוצגת בתצלום הפנורמי וברדאר ה-2D החי</div>
                </div>
              ) : (
                <img
                  src={minimapSrc}
                  onError={() => setMinimapError(true)}
                  alt={realMapData.nameEn}
                  className="max-h-56 max-w-full object-contain filter contrast-125 select-none drop-shadow-md"
                />
              )}

              {/* Interactive Overlaid Pins */}
              {showPins && !minimapError && minimapSrc && (
                <>
                  <button
                    onClick={() => setActivePin({
                      title: 'עמדת צלפים מוגנת (Safe Sniping Spot)',
                      text: realMapData.snipingSpotHe || 'עמדת יתרון גובה לזריקת שוריקנים וחיצים ללא מגע ממפלצות'
                    })}
                    className="absolute top-6 left-8 px-2 py-1 rounded-lg bg-purple-950/90 border border-purple-400 text-purple-200 text-[10px] font-bold shadow-lg hover:scale-110 transition flex items-center gap-1 cursor-pointer"
                    title="לחץ לצפייה בפרטי עמדת הצלפים"
                  >
                    <span>🛡️</span>
                    <span>Safe Spot</span>
                  </button>

                  <button
                    onClick={() => setActivePin({
                      title: 'אזור ספאון מפלצות ראשי',
                      text: `${realMapData.mobSpawnRate || 'צפיפות מפלצות גבוהה'} • מפלצות: ${realMapData.mobsPresent?.join(', ') || monster?.name}`
                    })}
                    className="absolute bottom-6 right-10 px-2 py-1 rounded-lg bg-rose-950/90 border border-rose-400 text-rose-200 text-[10px] font-bold shadow-lg hover:scale-110 transition flex items-center gap-1 cursor-pointer"
                    title="לחץ לצפייה בפרטי ספאון המפלצות"
                  >
                    <span>🔴</span>
                    <span>Mob Spawn</span>
                  </button>

                  {realMapData.portals && realMapData.portals.length > 0 && (
                    <button
                      onClick={() => setActivePin({
                        title: 'פורטלי מעבר במפה',
                        text: realMapData.portals.map(p => `${p.name} -> ${p.toMap}`).join(' • ')
                      })}
                      className="absolute bottom-6 left-10 px-2 py-1 rounded-lg bg-cyan-950/90 border border-cyan-400 text-cyan-200 text-[10px] font-bold shadow-lg hover:scale-110 transition flex items-center gap-1 cursor-pointer"
                      title="לחץ לצפייה בפורטלים"
                    >
                      <span>🚪</span>
                      <span>Portal</span>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Active Pin Callout Details */}
            {activePin && (
              <div className="bg-slate-900/95 p-3 rounded-xl border border-cyan-400/50 text-xs text-slate-200 space-y-1.5 shadow-lg animate-fade-in">
                <div className="flex items-center justify-between text-cyan-300 font-bold">
                  <span>📍 {activePin.title}</span>
                  <button
                    onClick={() => setActivePin(null)}
                    className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5 rounded hover:bg-slate-800"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {activePin.text}
                </p>
              </div>
            )}

            {/* MiniMap Footer Data */}
            <div className="flex items-center justify-between text-[11px] text-slate-300 border-t border-slate-800 pt-2 font-mono flex-wrap gap-2">
              <span>עיר: <strong className="text-white">{realMapData.townHe || realMapData.town}</strong></span>
              <span>מחוז: <strong className="text-cyan-400">{realMapData.streetName || 'Victoria Island'}</strong></span>
              {realMapData.mapId && <span>WZ: <strong className="text-emerald-400">{realMapData.mapId}</strong></span>}
            </div>
          </div>
        </div>
      )}

      {/* --- MODE 3: 2D CANVAS RADAR SIMULATION --- */}
      {viewMode === 'radar' && (
        <div className="space-y-3.5 animate-fade-in">
          {/* Canvas Viewport */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-inner group">
            <canvas
              ref={canvasRef}
              width={canvasWidth}
              height={canvasHeight}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredPlatform(null)}
              className="w-full h-auto block select-none cursor-crosshair"
            />

            {/* Hovered Platform Badge */}
            {hoveredPlatform && (
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-slate-900/95 text-cyan-300 border border-cyan-400/50 text-xs font-mono shadow-lg backdrop-blur">
                📍 {hoveredPlatform}
              </div>
            )}
          </div>

          {/* Standalone Preset Switcher (When no monster is selected) */}
          {!monster && (
            <div className="flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-xl border border-white/10 text-xs overflow-x-auto">
              <button
                onClick={() => setActiveMapKey('pigBeach')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  activeMapKey === 'pigBeach' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '🐷 The Pig Beach' : '🐷 חוף החזירים'}
              </button>
              <button
                onClick={() => setActiveMapKey('blueMushroom')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  activeMapKey === 'blueMushroom' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '🍄 Blue Mushrooms' : '🍄 פטריות כחולות'}
              </button>
              <button
                onClick={() => setActiveMapKey('hhg1')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  activeMapKey === 'hhg1' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '🌲 HHG1' : '🌲 HHG1'}
              </button>
              <button
                onClick={() => setActiveMapKey('subway')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  activeMapKey === 'subway' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '🚇 Kerning Subway' : '🚇 רכבת קרנינג'}
              </button>
              <button
                onClick={() => setActiveMapKey('antTunnel')}
                className={`px-3 py-1 rounded-lg font-bold transition whitespace-nowrap ${
                  activeMapKey === 'antTunnel' ? 'bg-cyan-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isEn ? '🐜 Ant Tunnel' : '🐜 מערת נמלים'}
              </button>
            </div>
          )}

          {/* Radar Legend Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-200">
            <div className="flex items-center gap-2 bg-slate-900/70 px-3 py-2 rounded-xl border border-slate-800 shadow-sm">
              <span className={`w-3 h-3 rounded-full ${realMapData.bgTheme === 'desert' ? 'bg-amber-500' : 'bg-emerald-400'} shrink-0 shadow-sm`}></span>
              <span className="truncate font-medium">
                {realMapData.bgTheme === 'desert' ? (isEn ? 'Desert Dunes & Sandstone' : 'דיונות ואבן חול') : (isEn ? 'Platforms & Ground' : 'פלטפורמות עץ וקרקע')}
              </span>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-900/70 px-3 py-2 rounded-xl border border-amber-500/40 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-amber-400 shrink-0 animate-pulse shadow-sm"></span>
              <span className="font-bold text-amber-300 truncate">{isEn ? 'Secret Portal [↑ Up]' : 'פורטל סודי [חץ למעלה ↑]'}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-slate-900/70 px-3 py-2 rounded-xl border border-purple-500/40 shadow-sm">
              <span className="w-3 h-3 rounded-full bg-purple-400 shrink-0 shadow-sm"></span>
              <span className="text-purple-200 font-medium truncate">{isEn ? 'Safe Perch' : 'עמדת צלפים מוגנת'}</span>
            </div>
            
            <div className="flex items-center justify-between bg-slate-900/70 px-3 py-2 rounded-xl border border-cyan-500/40 shadow-sm">
              <span className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'} shrink-0 shadow-sm`}></span>
                <span className="text-cyan-200 font-medium">{isEn ? 'Live Simulation' : 'אנימציה פעילה'}</span>
              </span>
              <span className="text-cyan-300 font-mono text-[11px] font-bold">
                {isPlaying ? '⚡ LIVE' : '⏸️ OFF'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* --- TACTICAL BATTLEFIELD INTEL CARDS (Spacious 2-column grid, always visible) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
        {/* Safe Spot */}
        <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-purple-500/40 space-y-1.5 shadow-sm">
          <span className="text-purple-300 font-bold flex items-center gap-1.5 text-xs">
            <span>🛡️</span>
            <span>עמדת צלפים מוגנת (Safe Spot):</span>
          </span>
          <p className="text-slate-200 text-xs leading-relaxed">
            {realMapData.snipingSpotHe || 'עמדת יתרון גובה על ענף או מדרגת סלע לזריקת שוריקנים ללא מגע.'}
          </p>
        </div>

        {/* Mob Spawn Density */}
        <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-amber-500/40 space-y-1.5 shadow-sm">
          <span className="text-amber-300 font-bold flex items-center gap-1.5 text-xs">
            <span>👾</span>
            <span>צפיפות ספאון מפלצות:</span>
          </span>
          <p className="text-slate-200 text-xs leading-relaxed">
            {realMapData.mobSpawnRate || 'צפיפות מפלצות גבוהה ורציפה.'}
          </p>
          <div className="text-[11px] font-mono text-slate-400 pt-1">
            {realMapData.mobsPresent?.join(' • ')}
          </div>
        </div>

        {/* Terrain & Mobility */}
        <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-sky-500/40 space-y-1.5 shadow-sm">
          <span className="text-sky-300 font-bold flex items-center gap-1.5 text-xs">
            <span>🏃</span>
            <span>תוואי שטח וניידות:</span>
          </span>
          <p className="text-slate-200 text-xs leading-relaxed">
            {realMapData.terrainDescHe || 'מפת שטח רשמית עם פלטפורמות וסולמות.'}
          </p>
        </div>

        {/* Connected Portals */}
        <div className="bg-slate-900/90 p-3.5 rounded-2xl border border-emerald-500/40 space-y-1.5 shadow-sm">
          <span className="text-emerald-300 font-bold flex items-center gap-1.5 text-xs">
            <span>🚪</span>
            <span>מעברים ופורטלים מקושרים:</span>
          </span>
          <div className="space-y-1 text-slate-200 text-xs leading-relaxed">
            {realMapData.portals && realMapData.portals.length > 0 ? (
              realMapData.portals.map((p, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-emerald-400">•</span>
                  <span>{p.name}</span>
                </div>
              ))
            ) : (
              <span>פורטלים מקושרים לערי ויקטוריה ומפות הציד הסמוכות.</span>
            )}
          </div>
        </div>
      </div>

      {/* Live In-Game Hidden Portal Viewer Modal */}
      {showPortalModal && (
        <LiveHiddenPortalViewer
          activePortal={liveHiddenPortal}
          initialPortalKey={liveHiddenPortal?.id || 'pigBeach'}
          isModal={true}
          onClose={() => setShowPortalModal(false)}
        />
      )}
    </div>
  );

  if (isExpanded) {
    return (
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsExpanded(false);
        }}
        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-auto animate-fadeIn cursor-pointer"
      >
        <div className="cursor-default w-full max-w-6xl">
          {content}
        </div>
      </div>
    );
  }

  return content;
}
