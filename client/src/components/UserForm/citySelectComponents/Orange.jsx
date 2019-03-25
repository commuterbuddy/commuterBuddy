import React from 'react';
import styles from '../UserFormStyles.css';

const Orange = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
    <ul className={styles.list}>
      <li className={styles.items} onClick={(event) => props.change(event)} id="anaheim">Anaheim</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="dana point">Dana Point</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="huntington beach">Huntington Beach</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="irvine">Irvine</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="laguna beach">Laguna Beach</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="orange">Orange</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="newport beach">Newport Beach</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="san clemente">San Clemente</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="santa ana">Santa Ana</li>
    </ul>
    )
  }
  return null;
};

export default Orange;