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
     <div className="ship"></div>
    )
  }
}

export default Ship;
