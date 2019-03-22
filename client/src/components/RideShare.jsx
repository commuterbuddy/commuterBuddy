import React, { Component } from 'react';

import OptionStyles from './OptionStyles.css';

const RideShare = (props) => {

  // set state with the prices
    return (
      <div>
        {props.prices.map((option) => {
          return ( 
            <div>
              Option: {option.name} Price: {option.price}
            </div>
          )
        })}
      </div>

    )
  
}


export default RideShare;