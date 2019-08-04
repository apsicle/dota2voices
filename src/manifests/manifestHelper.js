import parser from 'papaparse';

import { strengthCSV, agilityCSV, intelligenceCSV } from './dota-hero-manifest.js';

let strength, agility, intelligence;
strength = parser.parse(strengthCSV, {header: true});
agility = parser.parse(agilityCSV, {header: true});
intelligence = parser.parse(intelligenceCSV, {header: true});

function readHeroes(stat) {
  switch (stat) {
    case 'strength':
      return strength.data;
    case 'agility':
      return agility.data;
    case 'intelligence':
      return intelligence.data;
    default: 
      return strength.data + agility.data + intelligence.data;
  }
}

export default readHeroes;