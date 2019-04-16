import React from 'react';
import { Redirect } from 'react-router-dom';

const Button = (props) => {
  return (
    <button className={props.className} type="submit" onClick={props.submitFunc}>{props.id}
      {props.tripSubmitted ? <Redirect to='/history' /> : null}
    </button>
  );
};

export default Button;

/*

1. styling should be MOSTLY the same
2. adjust sizing for second button (in statistics)
3. Similarities
  - html button (not div)
  - type is submit
  - both have onClick functions
4. Differences
  - pass down id, that has "Go" or "Save" 
    - use this to display text

*/
