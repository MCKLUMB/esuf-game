// Partida headless:  node cli.js [seed]
const { Match } = require('./src/engine.js');
const [sd, fa, sa, fb, sb] = process.argv.slice(2);
const m = new Match({ seed: Number(sd) || Date.now(), formA: fa, styleA: sa, formB: fb, styleB: sb });
while (!m.over) m.step();
m.events.filter(e => e.type !== 'ref').forEach(e => console.log(e.clock, e.text));
const [a, b] = m.teams, tot = a.stats.poss + b.stats.poss;
console.log(`\n${a.name} ${a.stats.goals} x ${b.stats.goals} ${b.name}`);
for (const k of Object.keys(a.stats)) console.log(k.padEnd(10), String(k === 'poss' ? (a.stats[k] / tot * 100).toFixed(0) + '%' : a.stats[k]).padStart(5), String(k === 'poss' ? (b.stats[k] / tot * 100).toFixed(0) + '%' : b.stats[k]).padStart(5));
console.log('\nMelhores notas:');
[...m.players].sort((x, y) => y.rating - x.rating).slice(0, 5).forEach(p => console.log(p.rating.toFixed(2), p.name, p.team.name));