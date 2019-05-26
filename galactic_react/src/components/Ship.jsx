import React, { Component } from 'react';
import Bullet from './Bullet';

class Ship extends Component {
  constructor(args) {
    super();
    this.position = args.position
    this.lastShot = 0;
    this.create = args.create;
  }
  
  
  render() {
    return (
      <div className="container">
        <div className="arrow-up"></div>
      </div>
    )
  }
}

export default Ship;
