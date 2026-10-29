// MapleStory Classic Pre-BigBang Dynamic Skill Roadmap Generator for all Jobs
// Fully calibrated for MapleStory Classic World (v1.0.0 Global Launch)

import { CLASSES_DATA } from './classesData.js';

// Pre-defined build order for each job
const JOB_BUILD_ORDERS = {
  'assassin': {
    job1: [
      { skillId: 'luckySeven', target: 1, note: 'מתקפת פתיחה לאסאסין' },
      { skillId: 'nimbleBody', target: 3, note: 'דרישת פתיחה ל-Keen Eyes' },
      { skillId: 'keenEyes', target: 15, note: 'מיקסום טווח זריקת כוכבים (15 רמות מקס!)' },
      { skillId: 'luckySeven', target: 20, note: 'מיקסום לאקי סבן - מתקפת הדגל!' },
      { skillId: 'disorder', target: 3, note: 'פתיחת Dark Sight' },
      { skillId: 'darkSight', target: 20, note: 'מיקסום ראיית צללים (ללא האטת מהירות)' }
    ],
    job2: [
      { skillId: 'clawMastery', target: 1, note: 'יציבות נזק ראשונית' },
      { skillId: 'clawBooster', target: 3, note: 'פתיחת מהירות כפפה' },
      { skillId: 'criticalThrow', target: 30, note: 'מיקסום 50% קריטיקל!' },
      { skillId: 'clawMastery', target: 20, note: 'מיקסום שליטה בכפפה והגדלת מאגר כוכבים' },
      { skillId: 'haste', target: 20, note: 'מיקסום הייסט: +40 מהירות ו-+20 קפיצה לפארטי' },
      { skillId: 'clawBooster', target: 20, note: 'מיקסום בוסטר כפפה' },
      { skillId: 'drain', target: 30, note: 'מיקסום שאיבת חיים' },
      { skillId: 'nimbleBody', target: 4, note: 'השלמת SP עודף' }
    ]
  },

  'bandit': {
    job1: [
      { skillId: 'doubleStab', target: 1, note: 'מתקפת פגיון בסיסית' },
      { skillId: 'nimbleBody', target: 3, note: 'דיוק ראשוני' },
      { skillId: 'doubleStab', target: 20, note: 'מיקסום דקירה כפולה' },
      { skillId: 'nimbleBody', target: 18, note: 'העלאת דיוק והתחמקות' },
      { skillId: 'disorder', target: 3, note: 'פתיחת Dark Sight' },
      { skillId: 'darkSight', target: 20, note: 'התגנבות בטוחה ללא פגיעה' }
    ],
    job2: [
      { skillId: 'daggerMastery', target: 1, note: 'יציבות נזק ראשונית' },
      { skillId: 'daggerBooster', target: 3, note: 'פתיחת מהירות פגיון' },
      { skillId: 'savageBlow', target: 30, note: 'מיקסום 6 מכות סכין Savage Blow!' },
      { skillId: 'daggerMastery', target: 20, note: 'שליטה בפגיון 60%' },
      { skillId: 'haste', target: 20, note: 'מיקסום הייסט' },
      { skillId: 'daggerBooster', target: 20, note: 'הכפלת מהירות פגיון' },
      { skillId: 'steal', target: 30, note: 'גניבת חפצים ושיקויים' },
      { skillId: 'nimbleBody', target: 19, note: 'השלמת SP עודף' }
    ]
  },

  'cleric': {
    job1: [
      { skillId: 'energyBolt', target: 1, note: 'מתקפת קסם לפתיחת עץ' },
      { skillId: 'mpRecovery', target: 5, note: 'דרישת מקס MP' },
      { skillId: 'imprMaxMP', target: 10, note: 'חובה למקסם ראשון לקבלת עוד אלפי MP!' },
      { skillId: 'magicClaw', target: 20, note: 'מיקסום טופר קסם' },
      { skillId: 'mpRecovery', target: 16, note: 'מיקסום שחזור MP' },
      { skillId: 'magicGuard', target: 14, note: 'ספיגת נזק ב-MP' }
    ],
    job2: [
      { skillId: 'teleport', target: 1, note: 'שיגור מיידי' },
      { skillId: 'heal', target: 30, note: 'מיקסום ריפוי קדוש והשמדת Undead!' },
      { skillId: 'mpEater', target: 20, note: 'גזילת MP מהאויבים' },
      { skillId: 'invincible', target: 20, note: 'הפחתת 30% נזק פיזי' },
      { skillId: 'bless', target: 20, note: 'באף ברכה לפארטי' },
      { skillId: 'teleport', target: 20, note: 'מיקסום טלפורט' },
      { skillId: 'magicGuard', target: 20, note: 'השלמת מגן קסם ל-20' },
      { skillId: 'holyArrow', target: 5, note: 'חץ קדוש' }
    ]
  },

  'wizard-il': {
    job1: [
      { skillId: 'energyBolt', target: 1, note: 'פתיחת עץ הקסמים' },
      { skillId: 'mpRecovery', target: 5, note: 'דרישת מקס MP' },
      { skillId: 'imprMaxMP', target: 10, note: 'חובה למקסם ראשון!' },
      { skillId: 'magicClaw', target: 20, note: 'מיקסום טופר קסם' },
      { skillId: 'mpRecovery', target: 16, note: 'שחזור פסיבי' },
      { skillId: 'magicGuard', target: 14, note: 'מגן קסם' }
    ],
    job2: [
      { skillId: 'teleport', target: 1, note: 'שיגור מיידי' },
      { skillId: 'coldBeam', target: 30, note: 'מיקסום קרן קיפאון' },
      { skillId: 'thunderbolt', target: 30, note: 'מיקסום ברקים על כל המפה!' },
      { skillId: 'meditate', target: 20, note: 'תוספת +20 Magic ATT' },
      { skillId: 'mpEater', target: 15, note: 'זלילת MP' },
      { skillId: 'teleport', target: 20, note: 'מיקסום טלפורט' },
      { skillId: 'magicGuard', target: 20, note: 'השלמת מגן קסם ל-20' }
    ]
  },

  'fighter': {
    job1: [
      { skillId: 'hpRecovery', target: 5, note: 'דרישת מקס HP' },
      { skillId: 'imprMaxHP', target: 10, note: 'חובה למקסם ראשון לקבלת מקסימום HP!' },
      { skillId: 'powerStrike', target: 20, note: 'מיקסום מכת כוח 260%' },
      { skillId: 'slashBlast', target: 20, note: 'מיקסום סלאש בלאסט לשטח' },
      { skillId: 'hpRecovery', target: 11, note: 'התאוששות חיים' }
    ],
    job2: [
      { skillId: 'swordMastery', target: 20, note: 'שליטה בחרב 60% ודיוק' },
      { skillId: 'swordBooster', target: 3, note: 'פתיחת מהירות חרב' },
      { skillId: 'rage', target: 20, note: 'באף זעם: +12 Weapon ATT לכל הפארטי!' },
      { skillId: 'powerGuard', target: 30, note: 'החזרת 40% נזק לאויב' },
      { skillId: 'swordBooster', target: 20, note: 'הארכת משך הבוסטר' },
      { skillId: 'finalAttack', target: 30, note: 'מכה מסיימת אוטומטית' },
      { skillId: 'hpRecovery', target: 12, note: 'השלמת SP עודף' }
    ]
  },

  'spearman': {
    job1: [
      { skillId: 'hpRecovery', target: 5, note: 'דרישת מקס HP' },
      { skillId: 'imprMaxHP', target: 10, note: 'חובה למקסם ראשון לקבלת מד חיים ענקי!' },
      { skillId: 'slashBlast', target: 20, note: 'מיקסום סלאש בלאסט' },
      { skillId: 'powerStrike', target: 20, note: 'מיקסום מכת כוח' },
      { skillId: 'hpRecovery', target: 11, note: 'התאוששות HP' }
    ],
    job2: [
      { skillId: 'spearMastery', target: 20, note: 'שליטה ברומח 60%' },
      { skillId: 'booster', target: 3, note: 'בוסטר מהירות' },
      { skillId: 'ironWill', target: 3, note: 'דרישת Hyper Body' },
      { skillId: 'hyperBody', target: 30, note: 'הייפר בודי: +60% HP ו-MP לפארטי שלם!' },
      { skillId: 'ironWill', target: 20, note: 'שריון ברזל' },
      { skillId: 'booster', target: 20, note: 'בוסטר ממוקסם' },
      { skillId: 'finalAttack', target: 30, note: 'מכה מסיימת אוטומטית' },
      { skillId: 'hpRecovery', target: 12, note: 'השלמת SP עודף' }
    ]
  },

  'hunter': {
    job1: [
      { skillId: 'arrowBlow', target: 1, note: 'ירייה בסיסית' },
      { skillId: 'eyeOfAmazon', target: 8, note: 'מיקסום טווח ירי ל-400' },
      { skillId: 'criticalShot', target: 20, note: 'מיקסום 40% קריטיקל!' },
      { skillId: 'doubleShot', target: 20, note: 'מיקסום ירייה כפולה' },
      { skillId: 'focus', target: 10, note: 'דיוק והתחמקות' },
      { skillId: 'arrowBlow', target: 3, note: 'השלמת SP' }
    ],
    job2: [
      { skillId: 'bowMastery', target: 20, note: 'שליטה בקשת 60%' },
      { skillId: 'bowBooster', target: 3, note: 'מהירות קשת' },
      { skillId: 'arrowBomb', target: 30, note: 'מיקסום פצצות חץ מהממות' },
      { skillId: 'bowBooster', target: 20, note: 'הארכת בוסטר' },
      { skillId: 'finalAttack', target: 30, note: 'חץ נוסף אוטומטי' },
      { skillId: 'soulArrow', target: 20, note: 'ירי חצים ללא צריכת מלאי' },
      { skillId: 'focus', target: 11, note: 'השלמת SP עודף' }
    ]
  },

  'gunslinger': {
    job1: [
      { skillId: 'doubleFire', target: 20, note: 'מיקסום ירי כפול מהיר' },
      { skillId: 'bulletSmash', target: 20, note: 'מיקסום מחיצת קליע' },
      { skillId: 'dash', target: 10, note: 'ספרינט וריצה מהירה' },
      { skillId: 'somersaultKick', target: 11, note: 'בעיטת סלטה' }
    ],
    job2: [
      { skillId: 'gunMastery', target: 20, note: 'שליטה באקדח והרחבת מחסנית' },
      { skillId: 'gunBooster', target: 20, note: 'הכפלת קצב יריות' },
      { skillId: 'invisibleShot', target: 20, note: 'מיקסום ירייה על 3 מטרות' },
      { skillId: 'wings', target: 10, note: 'דאייה באוויר' },
      { skillId: 'grenade', target: 30, note: 'רימוני נפץ' },
      { skillId: 'blankShot', target: 20, note: 'יריית סרק מהממת' },
      { skillId: 'somersaultKick', target: 12, note: 'השלמת SP עודף' }
    ]
  }
};

export function getJobRoadmap(jobId) {
  const job = CLASSES_DATA[jobId] || CLASSES_DATA['assassin'];
  const buildPlan = JOB_BUILD_ORDERS[jobId] || JOB_BUILD_ORDERS['assassin'];

  // 1. Build SKILLS_INFO dictionary
  const skillsInfo = {};
  for (const s of (job.skills1 || [])) {
    skillsInfo[s.id] = {
      id: s.id,
      job: 1,
      name: s.name,
      nameEn: s.name,
      nameHe: s.nameHe,
      max: s.max,
      icon: s.icon,
      desc: s.desc
    };
  }
  for (const s of (job.skills2 || [])) {
    skillsInfo[s.id] = {
      id: s.id,
      job: 2,
      name: s.name,
      nameEn: s.name,
      nameHe: s.nameHe,
      max: s.max,
      icon: s.icon,
      desc: s.desc
    };
  }

  // 2. Generate level 10-70 roadmap
  const roadmap = {};
  const currentSkills = {};
  for (const k of Object.keys(skillsInfo)) {
    currentSkills[k] = 0;
  }

  // Job 1 tracker
  let j1Index = 0;
  // Job 2 tracker
  let j2Index = 0;

  for (let lvl = 10; lvl <= 70; lvl++) {
    // Level 10: 1 SP (1st job)
    // Levels 11-29: 3 SP (1st job)
    // Level 30: 4 SP (3 SP 1st job finishing 61 SP + 1 SP 2nd job advancement bonus)
    // Levels 31-70: 3 SP each (2nd job)
    const spThisLvl = lvl === 10 ? 1 : lvl === 30 ? 4 : 3;
    const addedSkills = [];

    if (lvl < 30) {
      // 1st Job allocation
      let spRemaining = spThisLvl;
      while (spRemaining > 0 && j1Index < buildPlan.job1.length) {
        const step = buildPlan.job1[j1Index];
        const currentPoints = currentSkills[step.skillId] || 0;
        const needed = step.target - currentPoints;
        if (needed <= 0) {
          j1Index++;
          continue;
        }
        const toAdd = Math.min(needed, spRemaining);
        currentSkills[step.skillId] = currentPoints + toAdd;
        addedSkills.push({
          skillId: step.skillId,
          points: toAdd,
          note: step.note
        });
        spRemaining -= toAdd;
        if (currentSkills[step.skillId] >= step.target) {
          j1Index++;
        }
      }
    } else if (lvl === 30) {
      // Level 30: 3 SP complete 1st job (reaching 61 SP) + 1 SP starts 2nd job
      let j1SpRemaining = 3;
      while (j1SpRemaining > 0 && j1Index < buildPlan.job1.length) {
        const step = buildPlan.job1[j1Index];
        const currentPoints = currentSkills[step.skillId] || 0;
        const needed = step.target - currentPoints;
        if (needed <= 0) {
          j1Index++;
          continue;
        }
        const toAdd = Math.min(needed, j1SpRemaining);
        currentSkills[step.skillId] = currentPoints + toAdd;
        addedSkills.push({
          skillId: step.skillId,
          points: toAdd,
          note: step.note
        });
        j1SpRemaining -= toAdd;
        if (currentSkills[step.skillId] >= step.target) {
          j1Index++;
        }
      }

      let j2SpRemaining = 1;
      while (j2SpRemaining > 0 && j2Index < buildPlan.job2.length) {
        const step = buildPlan.job2[j2Index];
        const currentPoints = currentSkills[step.skillId] || 0;
        const needed = step.target - currentPoints;
        if (needed <= 0) {
          j2Index++;
          continue;
        }
        const toAdd = Math.min(needed, j2SpRemaining);
        currentSkills[step.skillId] = currentPoints + toAdd;
        addedSkills.push({
          skillId: step.skillId,
          points: toAdd,
          note: `${step.note} (נקודת פתיחה לעבודה שנייה)`
        });
        j2SpRemaining -= toAdd;
        if (currentSkills[step.skillId] >= step.target) {
          j2Index++;
        }
      }
    } else {
      // Levels 31-70: 2nd Job allocation
      let spRemaining = spThisLvl;
      while (spRemaining > 0 && j2Index < buildPlan.job2.length) {
        const step = buildPlan.job2[j2Index];
        const currentPoints = currentSkills[step.skillId] || 0;
        const needed = step.target - currentPoints;
        if (needed <= 0) {
          j2Index++;
          continue;
        }
        const toAdd = Math.min(needed, spRemaining);
        currentSkills[step.skillId] = currentPoints + toAdd;
        addedSkills.push({
          skillId: step.skillId,
          points: toAdd,
          note: step.note
        });
        spRemaining -= toAdd;
        if (currentSkills[step.skillId] >= step.target) {
          j2Index++;
        }
      }
    }

    const tipTitle = lvl === 10
      ? `מזל טוב על מעבר עבודה לרמה 10 כ-${job.job1Name}!`
      : lvl === 30
      ? `ברכות! הגעת למעבר עבודה שנייה כ-${job.job2Name}!`
      : `התקדמות רמה ${lvl}`;

    const tipDesc = lvl === 10
      ? `התחלת את דרכך בעיר ${job.town}. שים נקודת SP ראשונה והתחל באימונים!`
      : lvl === 30
      ? `גש למדריך העבודה ${job.instructor1} כדי לקבל את מכתב המבחן לעבודה השנייה!`
      : `שפר את הכישורים: ${addedSkills.map(s => `${skillsInfo[s.skillId]?.nameHe || s.skillId} (+${s.points})`).join(', ')}`;

    roadmap[lvl.toString()] = {
      spGained: spThisLvl,
      addedSkills,
      cumulative: { ...currentSkills },
      tipTitle,
      tipDesc
    };
  }

  return { skillsInfo, roadmap };
}
