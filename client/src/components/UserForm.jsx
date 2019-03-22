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
      startCity: '',
      endCity: '',
      mpg: 0,
      distance: 0,
      lyftRides: [],
      uberRides: [],
      birdPrice: 0,
      dailyGasCost: 0,
      costPerGallon: 0
    }
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGasChange(event) {
    let mpg = parseInt(event.target.value);
    this.setState({
      mpg: mpg
    });
  }

  handleHomeChange(event) {
    if (this.state.homeCounty.length > 1) {
      this.setState({
        startCity: event.target.value
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
        endCity: event.target.value
      })
    } else {
      this.setState({
        workCounty: event.target.value
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {startCity, endCity, mpg} = this.state;

    console.log('THESE ARE THE PARAMS------------', startCity, endCity, mpg);

    axios
      .get('/api/prices', {params: {startCity, endCity, mpg}})
      .then(({data}) => {
        this.setState({
          lyftRides: data.lyftRides,
          uberRides: data.uberRides,
          distance: data.distance,
          birdPrice: data.birdPrice,
          dailyGasCost: data.dailyGasCost,
          costPerGallon: data.costPerGallon
        })
      })
      .catch(err => {
        console.log('Error getting data', err)
      });
  }


  render() {
    return (
      <div className={this.props.className}>
        <form>
          <label>
            Home:
            <select id="homeCounty" onChange={this.handleHomeChange}>
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
            {this.state.homeCounty === 'alameda' ? <Alameda change={this.handleHomeChange} /> :
            this.state.homeCounty === 'los angeles' ? <LosAngeles change={this.handleHomeChange} /> :
            this.state.homeCounty === 'orange' ? <Orange change={this.handleHomeChange} /> :
            this.state.homeCounty === 'riverside' ? <Riverside change={this.handleHomeChange} /> :
            this.state.homeCounty === 'sacramento' ? <Sacramento change={this.handleHomeChange} /> :
            this.state.homeCounty === 'san bernardino' ? <SanBernardino change={this.handleHomeChange} /> :
            this.state.homeCounty === 'san diego' ? <SanDiego change={this.handleHomeChange} /> :
            this.state.homeCounty === 'san francisco' ? <SanFrancisco change={this.handleHomeChange} /> :
            this.state.homeCounty === 'santa barbara' ? <SantaBarbara change={this.handleHomeChange} /> :
            this.state.homeCounty === 'santa clara' ? <SantaClara change={this.handleHomeChange} /> : null}
          </label>

          <br /><br />
          <label>
            Work:
              <select id="workCounty" onChange={this.handleWorkChange}>
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
            {this.state.workCounty === 'alameda' ? <Alameda change={this.handleWorkChange} /> :
            this.state.workCounty === 'los angeles' ? <LosAngeles change={this.handleWorkChange} /> :
            this.state.workCounty === 'orange' ? <Orange change={this.handleWorkChange} /> :
            this.state.workCounty === 'riverside' ? <Riverside change={this.handleWorkChange} /> :
            this.state.workCounty === 'sacramento' ? <Sacramento change={this.handleWorkChange} /> :
            this.state.workCounty === 'san bernardino' ? <SanBernardino change={this.handleWorkChange} /> :
            this.state.workCounty === 'dan diego' ? <SanDiego change={this.handleWorkChange} /> :
            this.state.workCounty === 'san francisco' ? <SanFrancisco change={this.handleWorkChange} /> :
            this.state.workCounty === 'santa barbara' ? <SantaBarbara change={this.handleWorkChange} /> :
            this.state.workCounty === 'santa clara' ? <SantaClara change={this.handleWorkChange} /> : null}
          </label>

          <br /><br />


          <label>
            Average Miles Per Gallon (MPG):
            <input type="text" name="mpg" onChange={this.handleGasChange} /><br />
          </label><br />
          <input type="submit" value="Find my commute!" onClick={this.handleSubmit} />
        </form>
      </div>

    )
  }
}

export default UserForm;
