import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.css';

const Nagivation = ({ authenticate, authenticated }) => {
  const renderNav = authenticated ? styles.links : styles.hide;
  return (
    <div className={styles.navbar}>
      <NavLink to="/results" className={renderNav}>Results</NavLink>
      <NavLink to="/history" className={renderNav}>History</NavLink>
      <NavLink
        to="/"
        className={renderNav}
        style={{float: "right", marginRight: "40px"}}
        onClick={ () => authenticate() }
      >
        Sign Out
      </NavLink>
    </div>
  );
};

export default Nagivation;
