import React from 'react';

const SanBernardino = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="san bernardino">San Bernardino</option>
    </select>

  );
};

export default SanBernardino;