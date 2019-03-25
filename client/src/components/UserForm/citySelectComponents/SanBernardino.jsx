import React from 'react';
import styles from '../UserFormStyles.css';

const SanBernardino = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="san bernardino">San Bernardino</li>
      </ul>
    )    
  }
  return null;
};

export default SanBernardino;