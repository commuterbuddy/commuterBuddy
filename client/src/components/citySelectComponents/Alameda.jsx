import React from 'react';

const Alameda = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Oakland">Oakland</option>
    </select>

  );
};

export default Alameda;