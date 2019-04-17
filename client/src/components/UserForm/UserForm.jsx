import React, { Component } from 'react';
import DropDown from './DropDown.jsx';
import Input from '../factoryComponents/Input.jsx';
import Button from '../factoryComponents/Button.jsx';
import styles from './UserFormStyles.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   }

  render() {

    const { counties, className, toggleDropdownMenu, homeCounty, workCounty, handleHomeCountyChange, handleWorkCountyChange, handleHomeCityChange, handleWorkCityChange, handleInputChange, startCity, endCity, menus } = this.props;

    return (
      <div className={`${className} ${styles.form}`}>
        <h1>Find my commute</h1>
          <b>Home</b>

          <DropDown className={styles.dropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} type='county' id='hCoMenu' menu={menus.hCoMenu} counties={counties} handleChange={handleHomeCountyChange} />
          <DropDown className={styles.cityDropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} cityType={startCity} type='city' id='hCiMenu' menu={menus.hCiMenu} counties={counties} handleChange={handleHomeCityChange} />
          
          
          <b>Work</b>

          <DropDown className={styles.dropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={workCounty} type='county' id='wCoMenu' menu={menus.wCoMenu} counties={counties} handleChange={handleWorkCountyChange} />
          <DropDown className={styles.cityDropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={workCounty} cityType={endCity} type='city' id='wCiMenu' menu={menus.wCiMenu} counties={counties} handleChange={handleWorkCityChange} />          

        
          <b>Average Miles Per Gallon (MPG)</b>   

          <div className={styles.input}>  

            <Input className={styles.textInput} id='mpg' handleChange={handleInputChange} type='text' />

            <Button className={styles.submit} id='Go' submitFunc={this.props.lookupSubmit} />

          </div>

        </div>

    )
  }
}

export default UserForm;
