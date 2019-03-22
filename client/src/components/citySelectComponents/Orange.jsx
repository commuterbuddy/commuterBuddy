import React from 'react';

const Orange = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="anaheim">Anaheim</option>
      <option value="dana point">Dana Point</option>
      <option value="huntington beach">Huntington Beach</option>
      <option value="irvine">Irvine</option>
      <option value="laguna beach">Laguna Beach</option>
      <option value="orange">Orange</option>
      <option value="newport beach">Newport Beach</option>
      <option value="san clemente">San Clemente</option>
      <option value="santa ana">Santa Ana</option>
    </select>

  );
};

export default Orange;