import React from 'react';
import styles from '../UserFormStyles.css';

const Riverside = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
    <ul className={styles.list}>
      <li className={styles.items} onClick={(event) => props.change(event)} id="corona">Corona</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="moreno valley">Moreno Valley</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="murrieta">Murrieta</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="riverside">Riverside</li>
      <li className={styles.items} onClick={(event) => props.change(event)} id="temecula">Temecula</li>
    </ul>
    )
  }
  return null;
};

export default Riverside;