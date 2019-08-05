import React from 'react';
import './App.css';

import HeroBoard from './components/HeroBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

callAPI() {
  fetch("http://localhost:5000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res }));
}

componentWillMount() {
  this.callAPI();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          DOTA 2 SOUNDBOARD
        </header>
  
        <HeroBoard />
      </div>
    );
  }
}

export default App;
