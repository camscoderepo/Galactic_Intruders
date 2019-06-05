import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  position: absolute;
  padding: 0.25em 1em;
  margin: 1em;
  text-align: center;
  border-radius: 3px;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: solid 5px white;
  z-index: 1;
  left: 50%;
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