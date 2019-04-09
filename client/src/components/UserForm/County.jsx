
// an array of cities needs to be passed down from the parent userForm
  // each list item/city needs to be generated in a map function
    // a city can be another smaller component (maybe later)



// This component needs to render a unique id and value (these can be props passed down or parameters)
  // everything else is the same and can be mapped over in the parent UserForm component

import React from 'react';
import styles from './UserFormStyles.css';

const County = (props) => {

  if ((props.menu) && props.cities) {
    return (
      <ul className={styles.list}>
        {props.cities.map(city => {
          return <li className={styles.items} onClick={(event) => props.change(event)} id={city.toLowerCase()}>{city}</li>          
        })}      
      </ul>
    )
  }
  return null;
};

export default County;