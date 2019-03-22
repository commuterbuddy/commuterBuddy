import React from 'react';
import styles from './Scenario.css';

const Scenario = ({ scenario }) => (
  <div className={styles.container}>
    <div className={styles.flexTable}>
      <div className={styles.category}>
        {scenario.scenarioName}
      </div>
      <div>
        Start:
      </div>
      <div>
        End: 
      </div>
      </div>
    <div className={styles.flexTable}>
      Cost (per gallon): {scenario.costPerGallon}
      <br />
      Daily gas cost: {scenario.dailyGasCost}
      <br />
      Bird price: {scenario.birdPrice}
    </div>
    <div className={styles.flexTable}>
      <div className={styles.category}>
        Uber
      </div>
      {scenario.uberRides.map((uber, i) => {
        return (
          <div key={i}>
            <div>{uber.name}: {uber.price}</div>
          </div>
        );
      })}
    </div>
    <div className={styles.flexTable}>
      <div className={styles.category}>
        Lyft
      </div>
      {scenario.lyftRides.map((lyft, i) => {
        return (
          <div key={i}>
            <div>{lyft.name}: {lyft.price}</div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Scenario;