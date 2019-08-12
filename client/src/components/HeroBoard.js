import React from 'react';
import './HeroBoard.css';
import helper from '../manifests/manifestHelper.js';

import HeroBoardSection from './HeroBoardSection.js';
import SearchModal from './SearchModal';


class HeroBoard extends React.Component {
  /* Component which displays all of the 100+ heroes available. Implements search feature:
  typing while on this screen narrows down heroes like on Dota pick screen, and pressing enter when
  there is only one valid choice brings you to the Soundboard screen. */
  constructor(props) {
    super(props);

    this.state = {
      heroNames: helper.readAll(),
      agility: helper.readHeroesByStat('agility'),
      strength: helper.readHeroesByStat('strength'),
      intelligence: helper.readHeroesByStat('intelligence'),
      selected: null,
      searchText: "",
    }
  }

  handleUpdate(text) {
    this.setState((state) => {
      return {
        searchText: text
      }
    })
  }

  render() {
    return (
      <div className="hero-board">
        <HeroBoardSection searchText={this.state.searchText} label="strength" heroes={this.state.strength}/>
        <HeroBoardSection searchText={this.state.searchText} label="agility" heroes={this.state.agility}/>
        <HeroBoardSection searchText={this.state.searchText} label="intelligence" heroes={this.state.intelligence}/>
        <SearchModal handleUpdate={this.handleUpdate.bind(this)}/>
      </div>
    )
  }
}

export default HeroBoard;
