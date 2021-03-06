import React, { Component } from 'react';
import Bullet from './Bullet';
import shipImg from '../assets/ship.png';
import styled from 'styled-components';

const KEY = {
  LEFT:  37,
  RIGHT: 39,
  A: 65,
  D: 68,

  SPACE: 32
};

const StyledShip = styled.image`
  position: absolute;
  left: 50%;
  top: 90%;
  z-index: 1;
`




class Ship extends Component {
  constructor(args) {
    
    super();
    this.position = args.position;
    this.lastShot = 0;
    this.create = args.create;
    
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      keys: {
        left  : 0,
        right : 0,
        space : 0,
      },
    }
   
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
  
  
  
  render() {
    return (
      <StyledShip>
     <img src={shipImg} alt="" />
     </StyledShip>   
    )
  }
}

export default Ship;
