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
            <div id="homeCounty" className={styles.button} onClick={this.props.toggleDropdownMenu}><b> Select County </b></div>
              { this.props.displayMenu ? 
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
              {this.props.workCounty ? <div id="Start" className={styles.button}><b> Select City </b></div> : null}
              {this.props.homeCounty === 'alameda' ? <Alameda change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'los angeles' ? <LosAngeles change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'orange' ? <Orange change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'riverside' ? <Riverside change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'sacramento' ? <Sacramento change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'san bernardino' ? <SanBernardino change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'san diego' ? <SanDiego change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'san francisco' ? <SanFrancisco change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'santa barbara' ? <SantaBarbara change={this.props.handleHomeCityChange} /> :
              this.props.homeCounty === 'santa clara' ? <SantaClara change={this.props.handleHomeCityChange} /> : null}
            </div>
          
          
          <b>Work</b>
          <div className={styles.dropdown}>
            <div>
              <select id="workCounty" onChange={this.props.handleWorkCountyChange}>
                <option value="Start">Select County</option>
                <option value="alameda">Alameda</option>
                <option value="los angeles">Los Angeles</option>
                <option value="orange">Orange</option>
                <option value="riverside">Riverside</option>
                <option value="sacramento">Sacramento</option>
                <option value="san bernardino">San Bernardino</option>
                <option value="san diego">San Diego</option>
                <option value="san francisco">San Francisco</option>
                <option value="santa barbara">Santa Barbara</option>
                <option value="santa clara">Santa Clara</option>
              </select>
            </div>

          <div className={styles.cityDropdown}>
            {this.props.workCounty ? <option value="Start">Select City</option> : null}
            {this.props.workCounty === 'alameda' ? <Alameda change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'los angeles' ? <LosAngeles change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'orange' ? <Orange change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'riverside' ? <Riverside change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'sacramento' ? <Sacramento change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'san bernardino' ? <SanBernardino change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'san diego' ? <SanDiego change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'san francisco' ? <SanFrancisco change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'santa barbara' ? <SantaBarbara change={this.props.handleWorkCityChange} /> :
            this.props.workCounty === 'santa clara' ? <SantaClara change={this.props.handleWorkCityChange} /> : null}
          </div>
        </div>

        <br /><br />


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
