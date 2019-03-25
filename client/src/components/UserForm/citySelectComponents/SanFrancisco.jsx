import React from 'react';
import styles from '../UserFormStyles.css';

const SanFrancisco = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="san francisco">San Francisco</li>
      </ul>
    )
  }
  return null;
};

export default SanFrancisco;