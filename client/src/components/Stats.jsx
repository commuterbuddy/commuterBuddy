import React, { Component } from 'react';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliding: false
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <h1>Statistics go here!!!!</h1>
      </div>
    )
  }
}

export default Stats;