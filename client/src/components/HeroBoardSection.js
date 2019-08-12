import React from 'react';
import './HeroBoardSection.css';

import HeroPortrait from './HeroPortrait.js';

class HeroBoardSection extends React.Component {
  render() {
    return (
      <div className="hero-board-section">
        <div className="section-label">
          <span className="section-label__text">{this.props.label.toUpperCase()}</span>
        </div>
        <div className="section-content">
          {this.props.heroes.map((hero) => {
            return <HeroPortrait searchText={this.props.searchText} hero={hero} key={hero.name} />
          })}
        </div>
      </div>
    )
  }
}

export default HeroBoardSection;