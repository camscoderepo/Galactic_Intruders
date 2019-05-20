import React, { Component } from 'react';
import './Start.css';

export default class Start extends Component {
  render() {
    return (
      <div className="start">
        { this.props.children }
        <button className="startButton">
          S T A R T
        </button>
      </div>
    )
  }
}
