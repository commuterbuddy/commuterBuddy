import React from 'react';

const Riverside = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="corona">Corona</option>
      <option value="moreno valley">Moreno Valley</option>
      <option value="murrieta">Murrieta</option>
      <option value="riverside">Riverside</option>
      <option value="temecula">Temecula</option>
    </select>

  );
};

export default Riverside;