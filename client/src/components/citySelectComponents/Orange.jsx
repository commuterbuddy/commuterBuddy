import React from 'react';

const Orange = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Anaheim">Anaheim</option>
      <option value="Dana Point">Dana Point</option>
      <option value="Huntington Beach">Huntington Beach</option>
      <option value="Irvine">Irvine</option>
      <option value="Laguna Beach">Laguna Beach</option>
      <option value="Orange">Orange</option>
      <option value="Newport Beach">Newport Beach</option>
      <option value="San Clemente">San Clemente</option>
      <option value="Santa Ana">Santa Ana</option>
    </select>

  );
};

export default Orange;