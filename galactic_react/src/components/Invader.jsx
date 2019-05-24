import React, { Component } from 'react';

export default class Invader extends Component {
  render() {
    return (
      <div className="invader">
        { this.props.children }
      </div>
    )
  }
}
