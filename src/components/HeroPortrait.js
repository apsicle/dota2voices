import React from 'react';
import './HeroPortrait.css';

class HeroPortrait extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    }
  }

  render() {
    return (
      <div className="hero-portrait">
        {/* {this.props.heroname} */}
        <img src={`https://storage.cloud.google.com/dota-hero-portraits/205x115/${this.props.hero.portrait_path}`} alt=""></img>
      </div>
    )
  }
}

export default HeroPortrait;