import React, { Component } from 'react';
import RideShare from './RideShare.jsx';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className={this.props.className.statsContainer}>
      <div className={this.props.className.statsFlex}>
          <div>Car: 
            <div>Price Per Gallon: {this.props.carPrice.costPerGallon}</div>
            <div>Daily Gas Cost: {this.props.carPrice.dailyGasCost}</div>
          </div>

          <div>Bird: {this.props.birdPrice}</div>
          <div>Lyft: <RideShare prices={this.props.lyftRides} /></div>
          <div>Uber: <RideShare prices={this.props.uberRides} /></div>
      </div><br />
      <div>Save this commute?</div><br />
      <div>Name your trip:
        <input type="text" name="tripName" onChange={this.props.change} />
        <input type="submit" value="Save" onClick={this.props.submit} />
      </div>
      </div>
    )
  }
}

export default Statistics;