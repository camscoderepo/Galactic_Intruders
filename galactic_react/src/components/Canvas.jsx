import React, { Component } from 'react';

export default class Canvas extends Component {
  render() {
    return (
      <div className="canvas">
        { this.props.children }
      </div>
    )
  }
}
