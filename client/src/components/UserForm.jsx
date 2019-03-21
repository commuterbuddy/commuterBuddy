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
      homeCounty: '',
      workCounty: '',
      homeCity: '',
      workCity: '',
      mpg: 0
    }
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
  }

  handleGasChange(event) {
    this.setState({
      mpg: event.target.value
    });
  }

  handleHomeChange(event) {
    if (this.state.homeCounty.length > 1) {
      this.setState({
        homeCity: event.target.value
      })
    } else {
      this.setState({
        homeCounty: event.target.value
      })
    }
  }

  handleWorkChange(event) {
    if (this.state.workCounty.length > 1) {
      this.setState({
        workCity: event.target.value
      })
    } else {
      this.setState({
        workCounty: event.target.value
      })
    }
  }


  render() {
    return (
      <div className={this.props.className}>
        <form>
          <label>
            Home:
            <select id="homeCounty" onChange={this.handleHomeChange}>
              <option value="Start">Choose your county</option>
              <option value="Alameda" >Alameda</option>
              <option value="Los Angeles" >Los Angeles</option>
              <option value="Orange" >Orange</option>
              <option value="Riverside" >Riverside</option>
              <option value="Sacramento" >Sacramento</option>
              <option value="San Bernardino" >San Bernardino</option>
              <option value="San Diego" >San Diego</option>
              <option value="San Francisco" >San Francisco</option>
              <option value="Santa Barbara" >Santa Barbara</option>
              <option value="Santa Clara" >Santa Clara</option>
            </select>
          </label>
          
          <label>
            City:
            {this.state.homeCounty === 'Alameda' ? <Alameda change={this.handleHomeChange} /> :
            this.state.homeCounty === 'Los Angeles' ? <LosAngeles change={this.handleHomeChange} /> :
            this.state.homeCounty === 'Orange' ? <Orange change={this.handleHomeChange} /> :
            this.state.homeCounty === 'Riverside' ? <Riverside change={this.handleHomeChange} /> :
            this.state.homeCounty === 'Sacramento' ? <Sacramento change={this.handleHomeChange} /> :
            this.state.homeCounty === 'San Bernardino' ? <SanBernardino change={this.handleHomeChange} /> :
            this.state.homeCounty === 'San Diego' ? <SanDiego change={this.handleHomeChange} /> :
            this.state.homeCounty === 'San Francisco' ? <SanFrancisco change={this.handleHomeChange} /> :
            this.state.homeCounty === 'Santa Barbara' ? <SantaBarbara change={this.handleHomeChange} /> :
            this.state.homeCounty === 'Santa Clara' ? <SantaClara change={this.handleHomeChange} /> : null}
          </label>

          <br /><br />
          <label>
            Work:
              <select id="workCounty" onChange={this.handleWorkChange}>
                <option value="Start">Choose your county</option>
                <option value="Alameda">Alameda</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Orange">Orange</option>
                <option value="Riverside">Riverside</option>
                <option value="Sacramento">Sacramento</option>
                <option value="San Bernardino">San Bernardino</option>
                <option value="San Diego">San Diego</option>
                <option value="San Francisco">San Francisco</option>
                <option value="Santa Barbara">Santa Barbara</option>
                <option value="Santa Clara">Santa Clara</option>
            </select>
          </label>

          <label>
            City:
            {this.state.workCounty === 'Alameda' ? <Alameda change={this.handleWorkChange} /> :
            this.state.workCounty === 'Los Angeles' ? <LosAngeles change={this.handleWorkChange} /> :
            this.state.workCounty === 'Orange' ? <Orange change={this.handleWorkChange} /> :
            this.state.workCounty === 'Riverside' ? <Riverside change={this.handleWorkChange} /> :
            this.state.workCounty === 'Sacramento' ? <Sacramento change={this.handleWorkChange} /> :
            this.state.workCounty === 'San Bernardino' ? <SanBernardino change={this.handleWorkChange} /> :
            this.state.workCounty === 'San Diego' ? <SanDiego change={this.handleWorkChange} /> :
            this.state.workCounty === 'San Francisco' ? <SanFrancisco change={this.handleWorkChange} /> :
            this.state.workCounty === 'Santa Barbara' ? <SantaBarbara change={this.handleWorkChange} /> :
            this.state.workCounty === 'Santa Clara' ? <SantaClara change={this.handleWorkChange} /> : null}
          </label>

          <br /><br />


          <label>
            Average Miles Per Gallon (MPG):
            <input type="text" name="mpg" onChange={this.handleGasChange} /><br />
          </label><br />
          <input type="submit" value="Find my commute!" />
        </form>
      </div>

    )
  }
}

export default UserForm;
