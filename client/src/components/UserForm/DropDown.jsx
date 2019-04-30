import React from 'react';
import Cities from './Cities.jsx';
import Counties from './Counties.jsx';
import styles from './UserFormStyles.css';

const DropDown = (props) => {

  const { className, toggleDropdownMenu, countyType, cityType, menu, list, id, type, counties, handleDropDownChange, name, keyName } = props;

  return (
    <div className={className}>            
      <div id={id} className={styles.button} onClick={toggleDropdownMenu}>{countyType && type === 'county' ? countyType : cityType && type === 'city' ? cityType : type === 'county' ? 'Select County' : 'Select City'}</div>
        { 
          menu && countyType && type === 'city' ? <Cities dropdownid={id} list={list} cities={counties[countyType]} keyName={keyName} name={name} handleDropDownChange={handleDropDownChange} menu={menu} /> :
  
          menu ? <Counties list={list} dropdownid={id} counties={counties} handleDropDownChange={handleDropDownChange} keyName={keyName} name={name} /> : null
        } 
      </div>
  )
};

export default DropDown;