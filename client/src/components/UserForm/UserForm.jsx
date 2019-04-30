import React from 'react';
import DropDown from './DropDown.jsx';
import Input from '../factoryComponents/Input.jsx';
import Button from '../factoryComponents/Button.jsx';
import styles from './UserFormStyles.css';

const UserForm = (props) => {

  const { counties, className, toggleDropdownMenu, handleDropDownChange, handleInputChange, startCity, endCity, menus, homeCounty, workCounty } = props;

  const { hCiMenu, hCoMenu, wCiMenu, wCoMenu } = menus;

  return (

    <div className={`${className} ${styles.form}`}>
      <h1>Find my commute</h1>
      
      <b>Home</b>

      <DropDown className={styles.dropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} list='hCoMenu' type='county' keyName='homeCounty' id='hCoMenu' menu={hCoMenu} counties={counties} handleDropDownChange={handleDropDownChange} />
      <DropDown className={styles.cityDropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} list='hCiMenu' keyName='startCity' cityType={startCity} type='city' id='hCiMenu' menu={hCiMenu} counties={counties} handleDropDownChange={handleDropDownChange} />
      
      <b>Work</b>

      <DropDown className={styles.dropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={workCounty} list='wCoMenu' keyName='workCounty' type='county' id='wCoMenu' menu={wCoMenu} counties={counties} handleDropDownChange={handleDropDownChange} />
      <DropDown className={styles.cityDropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={workCounty} list='wCiMenu' keyName='endCity' cityType={endCity} type='city' id='wCiMenu' menu={wCiMenu} counties={counties} handleDropDownChange={handleDropDownChange} />          

      <b>Average Miles Per Gallon (MPG)</b>   

      <div className={styles.input}>  

        <Input className={styles.textInput} id='mpg' handleChange={handleInputChange} type='text' />
        <Button className={styles.submit} id='Go' submitFunc={props.lookupSubmit} />

      </div>
    </div>

  );
}


export default UserForm;
