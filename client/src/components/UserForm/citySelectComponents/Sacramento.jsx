import React from 'react';
import styles from '../UserFormStyles.css';

const Sacramento = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
    <ul className={styles.list}>
      <li className={styles.items} onClick={(event) => props.change(event)} id="sacramento">Sacramento</li>
    </ul>
    )
  }
  return null;
};

export default Sacramento;