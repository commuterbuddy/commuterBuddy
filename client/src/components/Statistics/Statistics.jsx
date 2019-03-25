import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
              <img className={styles.carImg} src={this.props.carImg} alt="CarImg" />
              <div className={styles.carContainer}>
                <div className={styles.options}>
                  {this.props.carPrice.costPerGallon ? <p className={styles.item}><b>Price per gallon</b>{`$${this.props.carPrice.costPerGallon.toFixed(2)}`}</p> : null}
                  {this.props.carPrice.dailyGasCost ? <p className={styles.item}><b>Price per day</b>{this.props.carPrice.dailyGasCost}</p> : null}
                </div>
              </div>          
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={this.props.birdImg} alt="BirdLogo" />
              <div className={styles.container}>
                <div className={styles.options}>
                  {this.props.birdPrice ? <p className={styles.item}><b>Scooter</b>{this.props.birdPrice}</p> : null}
                </div>
              </div>          
            </div>

            <div className={styles.card}>
              <img className={styles.img} src={this.props.lyftImg} alt="LyftLogo" />
              <div className={styles.container}>
                <ul className={styles.options}>
                  {this.props.lyftRides.map((option) => {
                    return (
                      <li className={styles.item}>
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
                      <li className={styles.item}>
                        <b>{option.name}</b>{option.price}
                      </li>
                    )
                  })}
                </ul>
              </div>          
            </div>

            
            {this.props.carPrice.costPerGallon ? 
            <div className={styles.flexInput}>

              <div className={styles.border}>
            
                <div>
                  <h2>Save this commute?</h2>
                </div>  
              
                <div className={styles.flexSubmit}>
                  <div><input className={styles.textInput} type="text" name="tripName" placeholder="Name your trip" onChange={this.props.change} /></div>
                
                <button className={styles.button} type="submit" onClick={(e) => this.props.tripSubmit(e)}>Save
                  {this.props.tripSubmitted ? <Redirect to='/history' /> : null}
                </button>
                                  
                </div>
            
              </div>
            
            </div> 
             : null}
        
        </div>
  
      </div>
    )
  }
}

export default Statistics;