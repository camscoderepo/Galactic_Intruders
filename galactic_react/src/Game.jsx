import React, { Component } from 'react';
import './Game.css';
import Ship from './components/Ship';
import Start from './components/Start';

const KEY = {
  LEFT:  37,
  RIGHT: 39,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

class Game extends Component {
  constructor() {
    super();
    this.state = {
      screen: {
        width: window.innerWidth,
        height:window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      keys: {
        left  : 0,
        right : 0,
        space : 0,
      },
      invaderCount: 2,
      currentScore: 0,
      topScore: localStorage['topscore'] || 0,
      inGame: false
    }
    this.ship = [];
  }

  handleKeys(value, e){
    let keys = this.state.keys;
    if(e.keyCode === KEY.LEFT   || e.keyCode === KEY.A) keys.left  = value;
    if(e.keyCode === KEY.RIGHT  || e.keyCode === KEY.D) keys.right = value;
    if(e.keyCode === KEY.SPACE) keys.space = value;
    this.setState({
      keys : keys
    });
  }
  render(){
    return (
      <div className="App">
         
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="startButton"></div>
        <div className="ship"></div>
        
        <canvas ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio} 
        />
      </div>
    );
  }
}
export default Game;
