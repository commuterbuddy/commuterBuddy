import React, { Component } from 'react';
import County from './County.jsx';
import styles from './UserFormStyles.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   }

  render() {

    const { counties, className, toggleDropdownMenu, homeCounty, workCounty, handleHomeCountyChange, handleWorkCountyChange, handleHomeCityChange, handleWorkCityChange, startCity, endCity, hCiMenu, wCiMenu, hCoMenu, wCoMenu } = this.props;

    return (
      <div className={`${className} ${styles.form}`}>
        <h1>Find my commute</h1>
          <b>Home</b>

          <div className={styles.dropdown}>            
            <div id="hCoMenu" className={styles.button} onClick={toggleDropdownMenu}>{homeCounty ? homeCounty : 'Select County'}</div>
              { hCoMenu ? 
                (

                  <ul className={styles.list}>
                    {Object.keys(counties).map(county => {
                      return <li className={styles.items} onClick={handleHomeCountyChange} id={county} >{county}</li>
                    })}  
                  </ul>
              
                ) : null
            } 
          </div>
          
          <div className={styles.cityDropdown}>
            <div id="hCiMenu" className={styles.button} onClick={toggleDropdownMenu}>{startCity ? startCity : 'Select City'}</div>
              {hCiMenu && homeCounty ? <County cities={counties[homeCounty]} change={handleHomeCityChange} hCiMenu={hCiMenu} /> : null}
          </div>
          
          <b>Work</b>

          <div className={styles.dropdown}>
            <div id="wCoMenu" className={styles.button} onClick={toggleDropdownMenu}>{workCounty ? workCounty : 'Select County'}</div>
              { wCoMenu ? 
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
              {wCiMenu && workCounty ? <County cities={counties[workCounty]} change={handleWorkCityChange} wCiMenu={wCiMenu} /> : null}
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
