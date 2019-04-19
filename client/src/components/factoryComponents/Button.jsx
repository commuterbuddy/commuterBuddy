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

