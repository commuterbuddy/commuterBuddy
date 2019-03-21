import React from 'react';

const Riverside = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Corona">Corona</option>
      <option value="Moreno Valley">Moreno Valley</option>
      <option value="Murrieta">Murrieta</option>
      <option value="Riverside">Riverside</option>
      <option value="Temecula">Temecula</option>
    </select>

  );
};

export default Riverside;