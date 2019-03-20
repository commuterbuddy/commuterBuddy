import React from 'react';
import { NavLink } from 'react-router-dom';

const Nagivation = (props) => {
  return (
    <div>
      {/* <NavLink to='/results'>Results</NavLink>
      <NavLink to='/history'>History</NavLink> */}
      {props.authenticated ? <NavLink to='/'>Sign Out</NavLink> : ''}
    </div>
  );
};

export default Nagivation;
