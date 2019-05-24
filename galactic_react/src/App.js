import React, { Component } from 'react';
import './App.css';
import Ship from './components/Ship'
import Start from './components/Start'
import Game from './components/Game'

class App extends Component {
  state = {
    
  }
  render(){
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}
export default App;
