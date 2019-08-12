import React from 'react';
import { Link } from 'react-router-dom';
import './HeroPortrait.css';

class HeroPortrait extends React.Component {
  constructor(props) {
    super(props);

    this.formattedName = this.props.hero.name.replace('_', ' ');
  }

  isSelected() {
    if (this.props.searchText === "") {
      return false;
    }
    
    let re = new RegExp(`^${this.props.searchText}.*$`); // match if name starts with search string
    return (re.test(this.formattedName))
  }
  
  render() {
    return (
      <Link className={this.isSelected() ? "hero-portrait hero-portrait--selected" : "hero-portrait"} to={{
        pathname: `/${this.props.hero.name}`,
        state: {
          hero: this.props.hero
        }
      }}>
        <img className="hero-portrait__image" src={`https://storage.cloud.google.com/dota-hero-portraits/205x115/${this.props.hero.portrait_path}`} alt=""></img>
      </Link>
    )
  }

  handleSelect() {
    /* Either from click or from search -> enter, should redirect the user to the soundboard page for this hero.
    Receives path to responses page from this.props.hero.responses_path */
  }
}

export default HeroPortrait;