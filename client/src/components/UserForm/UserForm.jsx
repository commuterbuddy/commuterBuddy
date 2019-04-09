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

          <DropDown toggleDropdownMenu={toggleDropdownMenu} countyType={homeCounty} id='hCoMenu' menus={menus} counties={counties} handleHomeCountyChange={handleHomeCountyChange} />
          
          <div className={styles.cityDropdown}>
            <div id="hCiMenu" className={styles.button} onClick={toggleDropdownMenu}>{startCity ? startCity : 'Select City'}</div>
              {menus.hCiMenu && homeCounty ? <County cities={counties[homeCounty]} change={handleHomeCityChange} hCiMenu={menus.hCiMenu} /> : null}
          </div>
          
          <b>Work</b>

          <DropDown toggleDropdownMenu={toggleDropdownMenu} countyType={workCounty} menus={menus.wCoMenu} counties={counties} handleHomeCountyChange={handleHomeCountyChange} />

          <div className={styles.dropdown}>
            <div id="wCoMenu" className={styles.button} onClick={toggleDropdownMenu}>{workCounty ? workCounty : 'Select County'}</div>
              { menus.wCoMenu ? 
                (
                <ul className={styles.list}>
                  {Object.keys(counties).map(county => {
                    return <li className={styles.items} onClick={handleWorkCountyChange} id={county} >{county}</li>
                  })}
                </ul>
                ) : null
              }   
          </div>

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
