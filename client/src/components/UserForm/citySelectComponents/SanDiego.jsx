import React from 'react';
import styles from '../UserFormStyles.css';

const SanDiego = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="escondido">Escondido</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="el cajon">El Cajon</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="carlsbad">Carlsbad</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="chula vista">Chula Vista</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="oceanside">Oceanside</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="san diego">San Diego</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="vista">Vista</li>
      </ul>
    )
  }
  return null;
};

export default SanDiego;