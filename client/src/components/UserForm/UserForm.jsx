import React, { Component } from 'react';
import DropDown from './DropDown.jsx';
import styles from './UserFormStyles.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   }

  render() {

    const { counties, className, toggleDropdownMenu, homeCounty, workCounty, handleHomeCountyChange, handleWorkCountyChange, handleHomeCityChange, handleWorkCityChange, startCity, endCity, menus } = this.props;

    return (
      <div className={`${className} ${styles.form}`}>
        <h1>Find my commute</h1>
          <b>Home</b>

          <DropDown className={styles.dropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} type='county' id='hCoMenu' menu={menus.hCoMenu} counties={counties} handleChange={handleHomeCountyChange} />
          
          <DropDown className={styles.cityDropdown} toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} cityType={startCity} type='city' id='hCiMenu' menu={menus.hCiMenu} counties={counties} handleChange={handleHomeCityChange} />
          
          <div className={styles.cityDropdown}>
            <div id="hCiMenu" className={styles.button} onClick={toggleDropdownMenu}>{startCity ? startCity : 'Select City'}</div>
              {menus.hCiMenu && homeCounty ? <County cities={counties[homeCounty]} change={handleHomeCityChange} hCiMenu={menus.hCiMenu} /> : null}
          </div>
          
          <b>Work</b>

          <DropDown toggleDropdownMenu={toggleDropdownMenu} countyType={workCounty} type='county' id='wCoMenu' menu={menus.wCoMenu} counties={counties} handleCountyChange={handleWorkCountyChange} />

          <div className={styles.cityDropdown}>
            <div id="wCiMenu" className={styles.button} onClick={toggleDropdownMenu}>{endCity ? endCity : 'Select City'}</div>
              {menus.wCiMenu && workCounty ? <County cities={counties[workCounty]} change={handleWorkCityChange} wCiMenu={menus.wCiMenu} /> : null}
          </div>
        
          <b>Average Miles Per Gallon (MPG)</b>   

          <div className={styles.input}>           
            <div>  
              <input className={styles.textInput} type="text" name="mpg" onChange={this.props.handleGasChange} />
            </div>
            <div>
              <input className={styles.submit} type="submit" value="Go" onClick={(e) => this.props.lookupSubmit(e)} />
            </div>
          </div>

        </div>

    )
  }
}

export default UserForm;
