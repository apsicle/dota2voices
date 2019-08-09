import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SoundBoard from './components/SoundBoard';
import SearchModal from './components/SearchModal';



class App extends Component {
  constructor(props) {
    super(props);
    

  }
 
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/:heroname' component={SoundBoard}/>
        </Switch>
        <SearchModal />
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