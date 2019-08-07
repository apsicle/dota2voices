import parser from 'papaparse';

import manifest from './dota-heroes.js';

let all = parser.parse(manifest, {header: true});
all.data = all.data.map((hero) => {
  hero.responses_url = hero.responses_url.split(',')[0]
  return hero;
});

function readHeroesByStat(stat) {
  console.log(all);
  return all.data.filter((hero) => {
    return hero.primary_attribute === stat;
  })
}

function readAll() {
  return all.data;
}

export default { readHeroesByStat, readAll };