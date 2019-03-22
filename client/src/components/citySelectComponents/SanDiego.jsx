import React from 'react';

const SanDiego = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="escondido">Escondido</option>
      <option value="el cajon">El Cajon</option>
      <option value="carlsbad">Carlsbad</option>
      <option value="chula vista">Chula Vista</option>
      <option value="oceanside">Oceanside</option>
      <option value="san diego">San Diego</option>
      <option value="vista">Vista</option>
    </select>

  );
};

export default SanDiego;