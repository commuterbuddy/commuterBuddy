import React from 'react';

const SantaClara = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Cupertino">Cupertino</option>
      <option value="Milpitas">Milpitas</option>
      <option value="Mountain View">Mountain View</option>
      <option value="Palo Alto">Palo Alto</option>
      <option value="San Jose">San Jose</option>
      <option value="Santa Clara">Santa Clara</option>
      <option value="Stanford">Stanford</option>
      <option value="Sunnyvale">Sunnyvale</option>
    </select>

  );
};

export default SantaClara;