import React, { Component } from 'react';
import styled from 'styled-components';


const ScoreText = styled.div`
position: absolute;
font-size: 26px;
color: white;
left: 10%;
top: 5%;
z-index: 1;
`



class Score extends Component {
    render() {
        return (
            <ScoreText>
           <div>Score: 100</div>
           </ScoreText>   
          )
    }
    
}

export default Score;