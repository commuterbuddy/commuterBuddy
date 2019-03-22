import React from 'react';
import styles from './Scenario.css';

const Scenario = ({ scenario }) => (
  <div className={styles.mainContainer}>
    <div className={`${styles.category} ${styles.title}`}>
      {scenario.tripName}
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.flexTable}>
        <div className={styles.align}>
          Start: {scenario.startCity}
          <br />
          End: {scenario.endCity}
        </div>
      </div>
      <div className={styles.flexTable}>
        <div className={styles.align}>
          Cost (per gallon): {scenario.costPerGallon}
          <br />
          Daily gas cost: {scenario.dailyGasCost}
          <br />
          Bird price: {scenario.birdPrice}
        </div>
      </div>
      <div className={styles.flexTable}>
        <div className={styles.align}>
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
      </div>
      <div className={styles.flexTable}>
        <div className={styles.align}>
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
    </div>
  </div>
);

export default Scenario;