import React from 'react';
import styles from './UserFormStyles.css';

const Cities = (props) => {

  const { menu, cities, change } = props;

  if (menu && cities) {
    return (
      <ul className={styles.list}>
        {cities.map(city => {
          return <li className={styles.items} onClick={change} id={city.toLowerCase()}>{city}</li>          
        })}      
      </ul>
    )
  }
  return null;
};

export default Cities;