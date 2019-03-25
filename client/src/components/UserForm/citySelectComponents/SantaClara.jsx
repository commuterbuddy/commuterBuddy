import React from 'react';
import styles from '../UserFormStyles.css';

const SantaClara = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="cupertino">Cupertino</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="milpitas">Milpitas</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="mountain view">Mountain View</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="palo alto">Palo Alto</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="san jose">San Jose</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="santa clara">Santa Clara</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="stanford">Stanford</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="sunnyvale">Sunnyvale</li>
      </ul>
    )
  }
  return null;
};

export default SantaClara;