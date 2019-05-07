import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../../config.js';
import axios from 'axios';
import MapStyles from '../Map/MapStyles.css';
import MappedRoute from '../Map/MappedRoute.jsx';
import UserForm from '../UserForm/UserForm.jsx';
import Statistics from '../Statistics/Statistics.jsx';
import { toggleDropdownMenu, handleDropDownChange, handleInputChange } from '../factoryFunctions/functions.js';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counties: {},
      startCoords: undefined,
      endCoords: undefined,
      route: [],
      homeCounty: '',
      workCounty: '',
      startCity: '',
      endCity: '',
      mpg: undefined,
      distance: undefined,
      lyftRides: [],
      uberRides: [],
      birdPrice: undefined,
      dailyGasCost: undefined,
      costPerGallon: undefined,
      tripName: '',
      userName: '',
      hCoMenu: false,
      hCiMenu: false,
      wCoMenu: false,
      wCiMenu: false,
      tripSubmitted: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropDownChange = handleDropDownChange.bind(this);
    this.handleInputChange = handleInputChange.bind(this);
    this.handleTripSubmit = this.handleTripSubmit.bind(this);
    this.toggleDropdownMenu = toggleDropdownMenu.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.getCounties = this.getCounties.bind(this);
  }

  componentDidMount() {
    this.getCounties();
    console.log('THIS IS toggleDropdownMenu: ', this.toggleDropdownMenu);
  };

  getCounties() {
    axios
      .get('/api/counties')
      .then(({data}) => {
        this.setState({
          counties: data
        })
      })
      .catch(err => {
        console.log('Error getting county data', err);
      });
  }

  calculateDistance() {
    const { google } = this.props;
    var directionsService = new google.maps.DirectionsService();

    const request = {
      origin: this.state.startCity,
      destination: this.state.endCity,
      travelMode: 'DRIVING',
    };

    directionsService.route(request, function(result, status) {
      if (status === 'OK') {
        this.setState({
          route: result.routes[0].overview_path.map(p => {return {lat:p.lat(), lng:p.lng()}})
        });
      } else {
        console.err('error getting result', error);
      };
    }.bind(this));
  }

  handleTripSubmit(e) {
    e.preventDefault();

    const userName = localStorage.getItem('user');
    const email = localStorage.getItem('email');
    const {tripName, startCity, endCity, birdPrice, lyftRides, uberRides, dailyGasCost, costPerGallon} = this.state;

    axios
      .post('/api/scenariosDev', {userName, email, tripName, startCity, endCity, birdPrice, lyftRides, uberRides, dailyGasCost, costPerGallon})
      .then(() => {
        console.log('success posting data')
      })
      .then(this.setState({
        tripSubmitted: true
      }))
      .catch(err => {
        console.log('Error posting info')
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {startCity, endCity, mpg} = this.state;

    axios
      .get('/api/prices', {params: {startCity, endCity, mpg}})
      .then(({data}) => {
        this.setState({
          lyftRides: data.lyftRides,
          uberRides: data.uberRides,
          distance: data.distance,
          birdPrice: data.birdPrice,
          dailyGasCost: data.dailyGasCost,
          costPerGallon: data.costPerGallon,
          startCoords: {lat: data.startCoords.startLat, lng: data.startCoords.startLng},
          endCoords: {lat: data.endCoords.endLat, lng: data.endCoords.endLng}
        })
      })
      .then(() => {
        if (!this.state.distance) {
          alert('Sorry, your commute is too far!  Time to move...');
        }
      })
      .then(this.calculateDistance)
      .catch(err => {
        console.log('Error getting data', err)
      });
  }

  render() {

    const {costPerGallon, dailyGasCost, birdPrice, lyftRides, uberRides, distance, startCoords, endCoords, tripSubmitted, route} = this.state;

    const carObj = {
      dailyGasCost: dailyGasCost,
      costPerGallon: costPerGallon
    };

    const menus = {
      hCoMenu: this.state.hCoMenu,
      hCiMenu: this.state.hCiMenu,
      wCoMenu: this.state.wCoMenu,
      wCiMenu: this.state.wCiMenu
    };
    
    return (

      <div className={MapStyles.container}>

        <UserForm 
          className={MapStyles.formContainer}
          counties={this.state.counties} 
          lookupSubmit={this.handleSubmit}
          handleDropDownChange={this.handleDropDownChange}
          handleInputChange={this.handleInputChange}
          homeCounty={this.state.homeCounty}
          workCounty={this.state.workCounty}
          startCity={this.state.startCity}
          endCity={this.state.endCity}
          toggleDropdownMenu={this.toggleDropdownMenu}
          menus={menus} />

        <MappedRoute 
          startCoords={startCoords}
          endCoords={endCoords}
          route={route}
          distance={distance}  
        />
                
        <Statistics 
          className={MapStyles}
          carPrice={carObj}
          birdPrice={birdPrice}
          lyftRides={lyftRides}
          carImg="https://s3.us-east-2.amazonaws.com/carousel-fec/carImg2.png"
          birdImg="https://s3.us-east-2.amazonaws.com/carousel-fec/birdLogo.jpg"
          lyftImg="https://s3.us-east-2.amazonaws.com/carousel-fec/lyftLogo.jpg"
          uberImg="https://s3.us-east-2.amazonaws.com/carousel-fec/uberImg.png"
          uberRides={uberRides}
          handleInputChange={this.handleInputChange}
          tripSubmit={this.handleTripSubmit}
          path={this.props.path}
          tripSubmitted={tripSubmitted} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(Results);


