import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, InfoWindow, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../config.js';
import MapStyles from './MapStyles.css';
import UserForm from './UserForm.jsx';
import Stats from './Stats.jsx';

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
      mpg: 0,
      distance: 0,
      lyftRides: [],
      uberRides: [],
      birdPrice: 0,
      dailyGasCost: 0,
      costPerGallon: 0
    };
    this.onHomeMarkerClick = this.onHomeMarkerClick.bind(this);
    this.onWorkMarkerClick = this.onWorkMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHomeChange = this.handleHomeChange.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleGasChange = this.handleGasChange.bind(this);
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

  handleGasChange(event) {
    let mpg = parseInt(event.target.value);
    this.setState({
      mpg: mpg
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
    const style = {
      width: '100%',
      height: '100%',
      position: 'absolute'
    };

    const centerCoords = this.state.startCoords ? this.getMidpoint(this.state.startCoords, this.state.endCoords) : null;

    return (
    
      <div className={MapStyles.container}>

        <UserForm 
          className={MapStyles.formContainer} 
          submit={this.handleSubmit}
          handleHomeChange={this.handleHomeChange}
          handleWorkChange={this.handleWorkChange}
          handleGasChange={this.handleGasChange}
          homeCounty={this.state.homeCounty}
          workCounty={this.state.workCounty} />
        
        <div className={MapStyles.mapContainer} >          
          <Map 
            google={this.props.google}
            onClick={this.onMapClicked}
            style={style}
            className={'map'}
            initialCenter={{lat: 34.0522, lng: -118.2437}}
            center={centerCoords}
            zoom={11}>

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

        <div className={MapStyles.distancePop}>
          <h1>Distance: 500 miles</h1>
        </div>
        
        <Stats className={MapStyles.statsContainer} />


      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(Results);

