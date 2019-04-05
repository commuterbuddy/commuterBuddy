import React from 'react';
import styles from '../UserFormStyles.css';

const LosAngeles = (props) => {
  if (props.hCiMenu || props.wCiMenu) {
    return (
      <ul className={styles.list}>
        <li className={styles.items} onClick={(event) => props.change(event)} id="burbank">Burbank</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="downey">Downey</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="el monte">El Monte</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="glendale">Glendale</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="lancaster">Lancaster</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="long beach">Long Beach</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="los angeles">Los Angeles</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="norwalk">Norwalk</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="northridge">Northridge</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="palmdale">Palmdale</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="pasadena">Pasadena</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="pomona">Pomona</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="santa clarita">Santa Clarita</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="torrance">Torrance</li>
        <li className={styles.items} onClick={(event) => props.change(event)} id="west covina">West Covina</li>
      </ul>
    )
  }
  return null;
};

export default LosAngeles;