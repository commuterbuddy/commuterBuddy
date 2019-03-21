import React from 'react';

const LosAngeles = (props) => {
  return (
    <select id="city" onChange={(event) => props.change(event)}>
      <option value="Start">Choose your city</option>
      <option value="Burbank">Burbank</option>
      <option value="Downey">Downey</option>
      <option value="El Monte">El Monte</option>
      <option value="Glendale">Glendale</option>
      <option value="Lancaster">Lancaster</option>
      <option value="Long Beach">Long Beach</option>
      <option value="Los Angeles">Los Angeles</option>
      <option value="Norwalk">Norwalk</option>
      <option value="Northridge">Northridge</option>
      <option value="Palmdale">Palmdale</option>
      <option value="Pasadena">Pasadena</option>
      <option value="Pomona">Pomona</option>
      <option value="Santa Clarita">Santa Clarita</option>
      <option value="Torrance">Torrance</option>
      <option value="West Covina">West Covina</option>
    </select>

  );
};

export default LosAngeles;