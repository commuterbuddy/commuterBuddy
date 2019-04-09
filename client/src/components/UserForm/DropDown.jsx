import React from 'react';
import County from './County.jsx';
import styles from './UserFormStyles.css';

const DropDown = (props) => {

  const { className, toggleDropdownMenu, countyType, cityType, menu, id, type, counties, handleChange } = props;

  return (
    <div className={className}>            
      <div id={id} className={styles.button} onClick={toggleDropdownMenu}>{countyType && type === 'county' ? countyType : cityType && type === 'city' ? cityType : type === 'county' ? 'Select County' : 'Select City'}</div>
        { 
          menu && countyType ? <County cities={counties[countyType]} change={handleChange} menu={menu} /> :
  
          menu ? 
          (
            <ul className={styles.list}>
              {Object.keys(counties).map(county => {
                return <li className={styles.items} onClick={handleChange} id={county} >{county}</li>
              })}  
            </ul> 
          ) : null
        } 
      </div>
  )
};

export default DropDown;