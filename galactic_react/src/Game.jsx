import React, { Component } from 'react';
import './Game.css';
import Ship from './components/Ship';
import StartButton from './components/Button';
import Stars from './components/Stars';
import Twinkling from './components/Twinkling';
import Score from './components/Score';


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
        <div> 
          <Score />
          <StartButton />
          <Ship />
          <Stars />
          <Twinkling />
        </div>
      </div>
    );
  }
}
export default Game;
