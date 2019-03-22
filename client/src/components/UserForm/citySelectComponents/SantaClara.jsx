import React from 'react';

const SantaClara = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="cupertino">Cupertino</option>
      <option value="milpitas">Milpitas</option>
      <option value="mountain view">Mountain View</option>
      <option value="palo alto">Palo Alto</option>
      <option value="san jose">San Jose</option>
      <option value="santa clara">Santa Clara</option>
      <option value="stanford">Stanford</option>
      <option value="sunnyvale">Sunnyvale</option>
    </select>

  );
};

export default SantaClara;