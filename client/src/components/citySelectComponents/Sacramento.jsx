import React from 'react';

const Sacramento = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Sacramento">Sacramento</option>
    </select>

  );
};

export default Sacramento;