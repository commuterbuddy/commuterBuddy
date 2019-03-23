import React, { Component } from 'react';
// import RideShare from './RideShare.jsx';
import styles from './OptionStyles.css';

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

          <div className={styles.card}>
            <img className={styles.img} src="https://s3.us-east-2.amazonaws.com/carousel-fec/birdLogo.jpg" alt="BirdLogo" />
            <div className={styles.container}>
              <p>{this.props.birdPrice}</p>
            </div>          
          </div>

          <div className={styles.card}>
            <img className={styles.img} src="https://s3.us-east-2.amazonaws.com/carousel-fec/lyftLogo.jpg" alt="LyftLogo" />
            <div className={styles.container}>
              <ul className={styles.options}>
                {this.props.lyftRides.map((option) => {
                  return (
                    <li>
                      <b>{option.name}</b>{option.price}
                    </li>
                  )
                })}
              </ul>
            </div>          
          </div>  
          

      
      <div>Save this commute?</div><br />
      <div>Name your trip:
        <input type="text" name="tripName" onChange={this.props.change} />
        <input type="submit" value="Save" onClick={this.props.submit} />
      </div>
      </div>
      </div>
    )
  }
}

export default Statistics;