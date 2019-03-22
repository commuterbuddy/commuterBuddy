import React from 'react';

const SanFrancisco = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="san francisco">San Francisco</option>
    </select>

  );
};

export default SanFrancisco;