import React from 'react';
import styles from '../UserFormStyles.css';

const Alameda = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="oakland">Oakland</li>
      </ul>
    )
  }
  return null;  
};

export default Alameda;