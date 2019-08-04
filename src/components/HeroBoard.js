import React from 'react';
import './HeroBoard.css';
import readHeroes from '../manifests/manifestHelper.js';

import HeroBoardSection from './HeroBoardSection.js';

class HeroBoard extends React.Component {
  /* Component which displays all of the 100+ heroes available. Implements search feature:
  typing while on this screen narrows down heroes like on Dota pick screen, and pressing enter when
  there is only one valid choice brings you to the Soundboard screen. */
  constructor(props) {
    super(props);
    this.state = {
      heroes: readHeroes(),
      agility: readHeroes('agility'),
      strength: readHeroes('strength'),
      intelligence: readHeroes('intelligence'),
    }
  }

  render() {
    return (
      <div className="hero-board">
        <HeroBoardSection label="strength" heroes={this.state.strength}/>
        <HeroBoardSection label="agility" heroes={this.state.agility}/>
        <HeroBoardSection label="intelligence" heroes={this.state.intelligence}/>
      </div>
    )
  }
}

export default HeroBoard;
