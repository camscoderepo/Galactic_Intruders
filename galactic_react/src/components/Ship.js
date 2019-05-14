import React, { Component } from 'react';

export default class Ship extends Component {
  render() {
    return (
      <div className="ship">
        { this.props.children }
      </div>
    )
  }
}
