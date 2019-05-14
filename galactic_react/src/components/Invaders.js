import React, { Component } from 'react';

export default class Invaders extends Component {
  render() {
    return (
      <div className="invaders">
        { this.props.children }
      </div>
    )
  }
}
