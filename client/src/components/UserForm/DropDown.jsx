import React from 'react';
// import County from './County.jsx';
import styles from './UserFormStyles.css';

const DropDown = (props) => {

  const { toggleDropdownMenu, countyType, menus, id, counties, handleHomeCountyChange } = props;

  return (
    <div className={styles.dropdown}>            
      <div id={id} className={styles.button} onClick={toggleDropdownMenu}>{countyType ? countyType : 'Select County'}</div>
        { menus.hCoMenu ? 
          (
            <ul className={styles.list}>
              {Object.keys(counties).map(county => {
                return <li className={styles.items} onClick={handleHomeCountyChange} id={county} >{county}</li>
              })}  
            </ul> 
          ) : null
        } 
      </div>
  )
};

export default DropDown;