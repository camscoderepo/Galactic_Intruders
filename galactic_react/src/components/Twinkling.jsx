import React, { Component } from 'react';

class Twinkling extends Component {
  render() {
    return (
      <div className="twinkling">
        { this.props.children }
      </div>
    )
  }
}

export default Twinkling;