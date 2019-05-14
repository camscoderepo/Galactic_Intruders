import React, { Component } from 'react';

export default class Bullet extends Component {
  render() {
    return (
      <div className="bullet">
        { this.props.children }
      </div>
    )
  }
}
