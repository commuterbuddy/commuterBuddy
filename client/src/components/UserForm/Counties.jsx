import React from 'react';
import styles from './UserFormStyles.css';

const Counties = (props) => {

  const { counties, handleDropDownChange, keyName, name, list } = props;

  return (
    <ul className={styles.list}>
      {Object.keys(counties).map(county => {
        return <li list={list} keyName={keyName} className={styles.items} onClick={handleDropDownChange} id={name}>{county}</li>
      })}  
    </ul> 
  )

};

export default Counties;

