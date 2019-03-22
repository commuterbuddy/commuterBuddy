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
import axios from 'axios';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={this.props.className}>
        <form>
          <label>
            Home:
            <select id="homeCounty" onChange={this.props.handleHomeCountyChange}>
              <option value="Start">Choose your county</option>
              <option value="alameda" >Alameda</option>
              <option value="los angeles" >Los Angeles</option>
              <option value="orange" >Orange</option>
              <option value="riverside" >Riverside</option>
              <option value="sacramento" >Sacramento</option>
              <option value="san bernardino" >San Bernardino</option>
              <option value="san diego" >San Diego</option>
              <option value="san francisco" >San Francisco</option>
              <option value="santa barbara" >Santa Barbara</option>
              <option value="santa clara" >Santa Clara</option>
            </select>
          </label>
          
          <label>
            City:
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
          </label>

          <br /><br />
          <label>
            Work:
              <select id="workCounty" onChange={this.props.handleWorkCountyChange}>
                <option value="Start">Choose your county</option>
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
          </label>

          <label>
            City:
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
          </label>

          <br /><br />


          <label>
            Average Miles Per Gallon (MPG):
            <input type="text" name="mpg" onChange={this.props.handleGasChange} /><br />
          </label><br />
          <input type="submit" value="Find my commute!" onClick={(e) => this.props.submit(e)} />
        </form>
      </div>

    )
  }
}

export default UserForm;
