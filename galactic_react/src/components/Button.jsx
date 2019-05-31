import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button
`
  position: absolute;
  color: brown;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: solid 5px white;
  z-index: 2;
  left: 921px;
  top: 70%;
`

class StartButton extends Component {

  render() {
    return (
  <Button>Start</Button>
      
    )
  }
}

export default StartButton;