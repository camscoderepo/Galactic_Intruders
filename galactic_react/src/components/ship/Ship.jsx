import React, { Component } from 'react';
import shipImg from '../../assets/ship.png';
import styled from 'styled-components';
import store from '../../config/store';

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




function Ship(props) { 
  
    return (
      <StyledShip>
     <img src={shipImg} alt="" />
     </StyledShip>   
    )
}

export default Ship;
