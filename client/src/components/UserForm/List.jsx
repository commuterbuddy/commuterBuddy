import React from 'react';
import styles from './UserFormStyles.css';

const List = (props) => {

  const { counties, handleChange, menu, cities, change } = props;

  // THIS IS THE LIST FOR CITIES

  if (menu && cities) {
    return (
      <ul className={styles.list}>
        {cities.map(city => {
          return <li className={styles.items} onClick={(event) => change(event)} id={city.toLowerCase()}>{city}</li>          
        })}      
      </ul>
    )
  }
  return null;
};

// THIS IS THE LIST FOR COUNTIES

<ul className={styles.list}>
  {Object.keys(counties).map(county => {
    return <li className={styles.items} onClick={handleChange} id={county} >{county}</li>
  })}  
</ul> 


export default List;