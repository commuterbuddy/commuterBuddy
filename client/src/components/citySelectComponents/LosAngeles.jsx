import React from 'react';

const LosAngeles = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="burbank">Burbank</option>
      <option value="downey">Downey</option>
      <option value="el monte">El Monte</option>
      <option value="glendale">Glendale</option>
      <option value="lancaster">Lancaster</option>
      <option value="long beach">Long Beach</option>
      <option value="los angeles">Los Angeles</option>
      <option value="norwalk">Norwalk</option>
      <option value="northridge">Northridge</option>
      <option value="palmdale">Palmdale</option>
      <option value="pasadena">Pasadena</option>
      <option value="pomona">Pomona</option>
      <option value="santa clarita">Santa Clarita</option>
      <option value="torrance">Torrance</option>
      <option value="west covina">West Covina</option>
    </select>

  );
};

export default LosAngeles;