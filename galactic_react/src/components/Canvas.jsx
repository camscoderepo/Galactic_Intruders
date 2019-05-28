import React, { Component } from 'react';

class Canvas extends Component {
    constructor() {
        super();
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
              },
            
        }
            
        
    }
  render() {
    return (
        <canvas ref="canvas"
        width={this.state.screen.width * this.state.screen.ratio}
        height={this.state.screen.height * this.state.screen.ratio} 
        />
    )
  }
}

export default Canvas;