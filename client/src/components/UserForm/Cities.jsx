import React from 'react';
import styles from './UserFormStyles.css';

const Cities = (props) => {

  const { menu, cities, handleDropDownChange, list, keyName } = props;

  if (menu && cities) {
    return (
      <ul className={styles.list}>
        {cities.map(city => {
          return <li keyName={keyName} list={list} className={styles.items} onClick={handleDropDownChange} id={city.toLowerCase()}>{city}</li>          
        })}      
      </ul>
    )
  }
  return null;
};

export default Cities;