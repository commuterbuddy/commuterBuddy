import React from 'react';
import styles from './Scenario.css';

const Scenario = ({ scenario }) => (
  <div className={styles.mainContainer}>
    <div className={`${styles.category} ${styles.title}`}>
      {scenario.tripName}
    </div>
    <div className={styles.flexContainer}>
      <div className={styles.flexTable}>
        <img className={styles.carImg} src={"https://s3.us-east-2.amazonaws.com/carousel-fec/carImg2.png"} alt="CarImg" />
        <div className={styles.align}>
        <div className={styles.innerFlex}>
          <div><b>Start:</b></div><div>{scenario.startCity}</div>
        </div>
        <div className={styles.innerFlex}>
          <div><b>End:</b></div><div>{scenario.endCity}</div>
        </div>
        <br />
        <div className={styles.innerFlex}>
          <div><b>Daily gas cost:</b></div><div>{scenario.dailyGasCost}</div>
        </div>
        </div>
      </div>
      <div className={styles.flexTable}>
        <img className={styles.img} src={"https://s3.us-east-2.amazonaws.com/carousel-fec/birdLogo.jpg"} alt="BirdLogo" />
        <div className={styles.align}>
          <div className={styles.innerFlex}>
            <div><b>Scooter:</b></div><div>{scenario.birdPrice}</div>
          </div>
        </div>
      </div>
      <div className={styles.flexTable}>
        <img className={styles.img} src={"https://s3.us-east-2.amazonaws.com/carousel-fec/lyftLogo.jpg"} alt="LyftLogo" />
        <div className={styles.align}>
          {scenario.lyftRides.map((lyft, i) => {
            return (
              <div key={i} className={styles.innerFlex}>
                <div><b>{lyft.name}:</b></div>
                <div>{lyft.price}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.flexTable}>
      <img className={styles.img} src={"https://s3.us-east-2.amazonaws.com/carousel-fec/uberImg.png"} alt="UberLogo" />
        <div className={styles.align}>
          {scenario.uberRides.map((uber, i) => {
            return (
              <div key={i} className={styles.innerFlex}>
                <div><b>{uber.name}:</b></div>
                <div>{uber.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

export default Scenario;