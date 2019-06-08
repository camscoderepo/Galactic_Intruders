import React, { Component } from 'react';
import './Game.css';
import Ship from './components/ship/Ship';
import Start from './components/Button';
import Stars from './components/Stars';
import Twinkling from './components/Twinkling';
import Score from './components/Score';
import Links from './components/Links';


class Game extends Component {
  constructor() {
    super();
    this.state = {
      invaderCount: 2,
      currentScore: 0,
      topScore: localStorage['topscore'] || 0,
      inGame: false
    }
    this.ship = [];
    this.start = [];
    this.stars = [];
    this.twinkling =[];
  }


  render(){
    return (
      <div className="Game">
        
          <Score />
          <Start />
          <Ship />
          <Stars />
          <Twinkling />
          <Links />
        
      </div>
    );
  }
}
export default Game;
