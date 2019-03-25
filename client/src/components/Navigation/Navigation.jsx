import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

const Nagivation = (props) => {
  return (
    <div className={styles.navbar}>
      <NavLink to="/results" className={styles.links}>Results</NavLink>
      <NavLink to="/history" className={styles.links}>History</NavLink>
      <NavLink
        to="/"
        className={props.authenticated ? styles.links : styles.hide}
        style={{float: "right", marginRight: "40px"}}
        onClick={ () => props.authenticate() }
      >
        Sign Out
      </NavLink>
    </div>
  );
};

export default Nagivation;