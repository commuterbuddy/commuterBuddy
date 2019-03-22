import React from 'react';

const SantaBarbara = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="santa barbara">Santa Barbara</option>
    </select>

  );
};

export default SantaBarbara;