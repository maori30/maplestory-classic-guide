import { QUESTS_DATABASE } from '../src/data/quests.js';

const generic = QUESTS_DATABASE.filter(q => q.walkthrough && q.walkthrough.some(w => w.includes("בצע את ההוראות הדרושות בעיר")));
const grouped = {};
generic.forEach(q => {
  const cat = q.category || 'other';
  grouped[cat] = grouped[cat] || [];
  grouped[cat].push(q);
});

for (const cat in grouped) {
  console.log(`=== Category: ${cat} (${grouped[cat].length} quests) ===`);
  grouped[cat].forEach(q => console.log(`  ${q.id} | "${q.name}" | NPC: ${q.npcName} | Lv: ${q.reqLevel}`));
}
