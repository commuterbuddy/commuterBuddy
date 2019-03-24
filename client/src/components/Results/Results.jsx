import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, InfoWindow, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../../config.js';
import MapStyles from './MapStyles.css';
import UserForm from '../UserForm/UserForm.jsx';
import Statistics from '../Statistics/Statistics.jsx';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startCoords: undefined,
      endCoords: undefined,
      showingInfoWindow: false,
      showingDistanceWindow: true,
      activeMarker: {},
      selectedPlace: {},
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
      userName: 'Jun',
      hCoMenu: false,
      hCiMenu: false,
      wCoMenu: false,
      wCiMenu: false,
    };

    this.onHomeMarkerClick = this.onHomeMarkerClick.bind(this);
    this.onWorkMarkerClick = this.onWorkMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHomeCountyChange = this.handleHomeCountyChange.bind(this);
    this.handleHomeCityChange = this.handleHomeCityChange.bind(this);
    this.handleWorkCountyChange = this.handleWorkCountyChange.bind(this);
    this.handleWorkCityChange = this.handleWorkCityChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
    this.handleTripChange = this.handleTripChange.bind(this);
    this.handleTripSubmit = this.handleTripSubmit.bind(this);
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
  }

  toggleDropdownMenu(event) {
    console.log('CLICKED!!!!!!!!!! TOGGLE DROPDOWN MENU');
    // alert('yoooooooo')
    this.setState({
      [event.target.id]: !this.state[event.target.id]
    })
  }


  onHomeMarkerClick(props, marker, event) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }  

  onWorkMarkerClick(props, marker, event) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  handleHomeCountyChange(event) {
    console.log('this is the event.target.id', event.target.id);
    this.setState({
      homeCounty: event.target.id,
      hCoMenu: !this.state.hCoMenu
    })
  }

  handleHomeCityChange(event) {
    console.log('this is the event.target.id', event.target.id);
    this.setState({
      startCity: event.target.id,
      hCiMenu: !this.state.hCiMenu
    })

  }

  handleWorkCountyChange(event) {
    this.setState({
      workCounty: event.target.id,
      wCoMenu: !this.state.wCoMenu
    })
  }

  handleWorkCityChange(event) {
    this.setState({
      endCity: event.target.id,
      wCiMenu: !this.state.wCiMenu 
    })
  }

  handleTripChange(event) {
    this.setState({
      tripName: event.target.value
    })
  }

  handleGasChange(event) {
    let mpg = parseInt(event.target.value);
    this.setState({
      mpg: mpg
    });
  }

  handleTripSubmit(event) {
    event.preventDefault();

    const {userName, tripName, startCity, endCity, birdPrice, lyftRides, uberRides, dailyGasCost, costPerGallon} = this.state;

    axios
      .post('/api/scenariosDev', {userName, tripName, startCity, endCity, birdPrice, lyftRides, uberRides, dailyGasCost, costPerGallon})
      .then(() => {
        console.log('success posting data')
      })
      .catch(err => {
        console.log('Error posting info')
      });
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
      .catch(err => {
        console.log('Error getting data', err)
      });
  }

  getMidpoint(start, end) {
    const lat = ((start.lat + end.lat) / 2);
    const lng = ((start.lng + end.lng) / 2);
    return {lat, lng};
  }

  render() {
    const carObj = {
      dailyGasCost: this.state.dailyGasCost,
      costPerGallon: this.state.costPerGallon
    };


    const style = {
      width: '75%',
      height: '77%',
      position: 'absolute'
    };

    const {costPerGallon, dailyGasCost, birdPrice, lyftRides, uberRides, distance, startCoords, endCoords} = this.state;

    const centerCoords = startCoords ? this.getMidpoint(startCoords, endCoords) : null;

    let points;
    let bounds;

    if (startCoords) {
      points = [
        startCoords, endCoords
      ];
      bounds = new this.props.google.maps.LatLngBounds();
      for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
    }

    return (

      <div className={MapStyles.container}>

        <UserForm 
          className={MapStyles.formContainer} 
          submit={this.handleSubmit}
          handleHomeCountyChange={this.handleHomeCountyChange}
          handleHomeCityChange={this.handleHomeCityChange}
          handleWorkCountyChange={this.handleWorkCountyChange}
          handleWorkCityChange={this.handleWorkCityChange}
          handleGasChange={this.handleGasChange}
          homeCounty={this.state.homeCounty}
          workCounty={this.state.workCounty}
          toggleDropdownMenu={this.toggleDropdownMenu}
          hCoMenu={this.state.hCoMenu}
          hCiMenu={this.state.hCiMenu} 
          wCoMenu={this.state.wCoMenu} 
          wCiMenu={this.state.wCiMenu}  />
        
        <div className={MapStyles.mapContainer} >          
          <Map 
            google={this.props.google}
            onClick={this.onMapClicked}
            style={style}
            className={'map'}
            initialCenter={{lat: 34.0522, lng: -118.2437}}
            bounds={this.state.startCoords ? bounds : null}
            >

            <Marker
              name={'Home'}
              position={this.state.startCoords}
              onClick={this.onHomeMarkerClick} />

            <Marker
              name={'Work'}
              position={this.state.endCoords}
              onClick={this.onWorkMarkerClick} />
          
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
            </InfoWindow>

            <Polyline
              path={[this.state.startCoords, this.state.endCoords]}
              options={{
                strokeColor: "#1885FF",
                strokeOpacity: 0.8,
                strokeWeight: 4,            
              }}
            />

          </Map>
        </div>

        {distance ? 
          <div className={MapStyles.distancePop}>
            <h1>Distance: {distance} miles</h1>
          </div>
         : null}
        
        
        <Statistics 
          className={MapStyles}
          carPrice={carObj}
          birdPrice={birdPrice}
          lyftRides={lyftRides}
          carImg="https://s3.us-east-2.amazonaws.com/carousel-fec/carImg2.png"
          birdImg="https://s3.us-east-2.amazonaws.com/carousel-fec/birdLogo.jpg"
          lyftImg="https://s3.us-east-2.amazonaws.com/carousel-fec/lyftLogo.jpg"
          uberImg="https://s3.us-east-2.amazonaws.com/carousel-fec/uberImg.png"
          saveImg="https://s3.us-east-2.amazonaws.com/carousel-fec/saveImg.png"
          uberRides={uberRides}
          change={this.handleTripChange}
          submit={this.handleTripSubmit}
          path={this.props.path} />
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(Results);

