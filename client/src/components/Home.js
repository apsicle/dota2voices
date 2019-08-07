import React from 'react';
import './Home.css';

import HeroBoard from './HeroBoard';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:5000/users")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          {/* <img src={logo} className="Home-logo" alt="logo" /> */}
          {/* DOTA 2 SOUNDBOARD */}
        </header>
  
        <HeroBoard />
      </div>
    );
  }
}

export default Home;
