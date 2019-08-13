import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SoundBoard from './components/SoundBoard';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/:heroname' component={SoundBoard}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;