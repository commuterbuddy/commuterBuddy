import React from 'react';

const SanDiego = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Escondido">Escondido</option>
      <option value="El Cajon">El Cajon</option>
      <option value="Carlsbad">Carlsbad</option>
      <option value="Chula Vista">Chula Vista</option>
      <option value="Oceanside">Oceanside</option>
      <option value="San Diego">San Diego</option>
      <option value="Vista">Vista</option>
    </select>

  );
};

export default SanDiego;