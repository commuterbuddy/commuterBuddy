import React from 'react';
import styles from '../UserFormStyles.css';

const Alameda = (props) => {
  return (
    <ul className={styles.list} id="city" onClick={(event) => props.change(event)}>
      <li className={styles.items} value="Start">Choose your city</li>
      <li className={styles.items} id="oakland" >Oakland</li>
    </ul>

  );
};

export default Alameda;