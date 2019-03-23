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

            <div className={styles.card}>
              <img className={styles.img} src={this.props.carImg} alt="CarImg" />
              <div className={styles.container}>
                {this.props.carPrice.costPerGallon ? <p>{this.props.carPrice.costPerGallon} per gallon</p> : null}
                {this.props.carPrice.dailyGasCost ? <p>{this.props.carPrice.dailyGasCost} per day</p> : null}
              </div>          
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={this.props.birdImg} alt="BirdLogo" />
              <div className={styles.container}>
                <p>{this.props.birdPrice}</p>
              </div>          
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={this.props.lyftImg} alt="LyftLogo" />
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

            <div className={styles.card}>
              <img className={styles.img} src={this.props.uberImg} alt="LyftLogo" />
              <div className={styles.container}>
                <ul className={styles.options}>
                  {this.props.uberRides.map((option) => {
                    return (
                      <li>
                        <b>{option.name}</b>{option.price}
                      </li>
                    )
                  })}
                </ul>
              </div>          
            </div>

            <div className={styles.saveCard}>
              <img className={styles.saveImg} src={this.props.saveImg} alt="SaveLogo" />                         
              <div className={styles.saveContainer}>
                <div className={styles.saveEntry}>

                  <div className={styles.saveQuestion}><h2>Save this commute?</h2></div>
          
                  <div className={styles.flexInput}>
                    <input type="text" name="tripName" placeholder="Name your trip" onChange={this.props.change} />
                    <input className={styles.button} type="submit" value="Save" onClick={this.props.submit} />
                  </div>
        
                </div>
              </div>          
            </div>  
  
        </div>
      
      </div>
    )
  }
}

export default Statistics;