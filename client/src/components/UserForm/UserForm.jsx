import React, { Component } from 'react';
import Alameda from './citySelectComponents/Alameda.jsx';
import LosAngeles from './citySelectComponents/LosAngeles.jsx';
import Orange from './citySelectComponents/Orange.jsx';
import Riverside from './citySelectComponents/Riverside.jsx';
import Sacramento from './citySelectComponents/Sacramento.jsx';
import SanBernardino from './citySelectComponents/SanBernardino.jsx';
import SanDiego from './citySelectComponents/SanDiego.jsx';
import SanFrancisco from './citySelectComponents/SanFrancisco.jsx';
import SantaBarbara from './citySelectComponents/SantaBarbara.jsx';
import SantaClara from './citySelectComponents/SantaClara.jsx';
import styles from './UserFormStyles.css';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
   }


  render() {
    return (
      <div className={`${this.props.className} ${styles.form}`}>
        <h1>Find my commute</h1>
          <b>Home</b>

          <div className={styles.dropdown}>            
            <div id="hCoMenu" className={styles.button} onClick={this.props.toggleDropdownMenu}><b> Select County </b></div>
              { this.props.hCoMenu ? 
                (
                <ul className={styles.list}>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="alameda" >Alameda</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="los angeles" >Los Angeles</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="orange" >Orange</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="riverside" >Riverside</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="sacramento" >Sacramento</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="san bernardino" >San Bernardino</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="san diego" >San Diego</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="san francisco" >San Francisco</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="santa barbara" >Santa Barbara</li>
                  <li className={styles.items} onClick={this.props.handleHomeCountyChange} id="santa clara" >Santa Clara</li>
                </ul>
              ) : null
            } 
          </div>
          
          <div className={styles.cityDropdown}>
            <div id="hCiMenu" className={styles.button} onClick={this.props.toggleDropdownMenu}><b> Select City </b></div>
              {this.props.hCiMenu && this.props.homeCounty === 'alameda' ? <Alameda change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'los angeles' ? <LosAngeles change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'orange' ? <Orange change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'riverside' ? <Riverside change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'sacramento' ? <Sacramento change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'san bernardino' ? <SanBernardino change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'san diego' ? <SanDiego change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'san francisco' ? <SanFrancisco change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'santa barbara' ? <SantaBarbara change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> :
              this.props.hCiMenu && this.props.homeCounty === 'santa clara' ? <SantaClara change={this.props.handleHomeCityChange} hCiMenu={this.props.hCiMenu} /> : null}
          </div>
          
          <b>Work</b>

          <div className={styles.dropdown}>
            <div id="wCoMenu" className={styles.button} onClick={this.props.toggleDropdownMenu}><b> Select County </b></div>
              { this.props.wCoMenu ? 
                (
                <ul className={styles.list}>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="alameda">Alameda</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="los angeles">Los Angeles</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="orange">Orange</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="riverside">Riverside</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="sacramento">Sacramento</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="san bernardino">San Bernardino</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="san diego">San Diego</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="san francisco">San Francisco</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="santa barbara">Santa Barbara</li>
                  <li className={styles.items} onClick={this.props.handleWorkCountyChange} id="santa clara">Santa Clara</li>
                </ul>
                ) : null
              }   
          </div>

          <div className={styles.cityDropdown}>
            <div id="wCiMenu" className={styles.button} onClick={this.props.toggleDropdownMenu}><b> Select City </b></div>
              {this.props.wCiMenu && this.props.workCounty === 'alameda' ? <Alameda change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'los angeles' ? <LosAngeles change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'orange' ? <Orange change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'riverside' ? <Riverside change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'sacramento' ? <Sacramento change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'san bernardino' ? <SanBernardino change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'san diego' ? <SanDiego change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'san francisco' ? <SanFrancisco change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'santa barbara' ? <SantaBarbara change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> :
              this.props.wCiMenu && this.props.workCounty === 'santa clara' ? <SantaClara change={this.props.handleWorkCityChange} wCiMenu={this.props.wCiMenu} /> : null}
          </div>
        
          <label>
            Average Miles Per Gallon (MPG):
            <input type="text" name="mpg" onChange={this.props.handleGasChange} /><br />
          </label><br />
          <input type="submit" value="Find my commute!" onClick={(e) => this.props.submit(e)} />
      </div>

    )
  }
}

export default UserForm;
