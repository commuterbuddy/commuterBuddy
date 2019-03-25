import React from 'react';
import styles from '../UserFormStyles.css';

const SantaBarbara = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="santa barbara">Santa Barbara</li>
      </ul>
    )
  }
  return null;
};

export default SantaBarbara;