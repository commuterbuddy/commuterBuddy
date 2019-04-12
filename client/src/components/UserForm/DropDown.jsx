import React from 'react';
import Cities from './Cities.jsx';
import Counties from './Counties.jsx';
import styles from './UserFormStyles.css';

const DropDown = (props) => {

  const { className, toggleDropdownMenu, countyType, cityType, menu, id, type, counties, handleChange } = props;

  return (
    <div className={className}>            
      <div id={id} className={styles.button} onClick={toggleDropdownMenu}>{countyType && type === 'county' ? countyType : cityType && type === 'city' ? cityType : type === 'county' ? 'Select County' : 'Select City'}</div>
        { 
          menu && countyType && type === 'city' ? <Cities cities={counties[countyType]} change={handleChange} menu={menu} /> :
  
          menu ? <Counties counties={counties} change={handleChange} /> : null
        } 
      </div>
  )
};

export default DropDown;