import React, { Component } from 'react';

class Start extends Component {
  state = {
    logo: `Example logo`,
    button: ``
  }
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

export default Start;