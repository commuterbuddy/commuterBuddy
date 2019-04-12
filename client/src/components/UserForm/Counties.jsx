import React from 'react';
import styles from './UserFormStyles.css';

const Counties = (props) => {

  const { counties, change } = props;

  return (
    <ul className={styles.list}>
      {Object.keys(counties).map(county => {
        return <li className={styles.items} onClick={change} id={county} >{county}</li>
      })}  
    </ul> 
  )

};

export default Counties;

