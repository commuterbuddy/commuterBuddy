import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, InfoWindow, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../../config.js';
import MapStyles from './MapStyles.css';
import UserForm from '../UserForm/UserForm.jsx';
import Statistics from '../Statistics/Statistics.jsx';

// need to add componentDidMount -- send a get request to a cities endpoint - return an object with all of the cities for each county

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counties: {},
      startCoords: undefined,
      endCoords: undefined,
      route: [],
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
      hCoMenu: false,
      hCiMenu: false,
      wCoMenu: false,
      wCiMenu: false,
      selectHomeCounty: undefined,
      selectHomeCity: undefined,
      selectWorkCounty: undefined,
      selectWorkCity: undefined,
      tripSubmitted: false
    };

    this.onHomeMarkerClick = this.onHomeMarkerClick.bind(this);
    this.onWorkMarkerClick = this.onWorkMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHomeCountyChange = this.handleHomeCountyChange.bind(this);
    this.handleHomeCityChange = this.handleHomeCityChange.bind(this);
    this.handleWorkCountyChange = this.handleWorkCountyChange.bind(this);
    this.handleWorkCityChange = this.handleWorkCityChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTripSubmit = this.handleTripSubmit.bind(this);
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this);
    this.calculateDistance = this.calculateDistance.bind(this);
    this.getCounties = this.getCounties.bind(this);
  }

  componentDidMount() {
    this.getCounties();
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

  toggleDropdownMenu(event) {
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
    // console.log('this is the event.target.id', event.target.id);

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

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleTripSubmit(e) {
    e.preventDefault();

    const email = localStorage.getItem('email');
    const {tripName, startCity, endCity, birdPrice, lyftRides, uberRides, dailyGasCost, costPerGallon} = this.state;

    axios
      .post('/api/scenariosDev', {email, tripName, startCity, endCity, birdPrice, lyftRides, uberRides, dailyGasCost, costPerGallon})
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
      height: '720px',
      position: 'absolute'
    };

    const {costPerGallon, dailyGasCost, birdPrice, lyftRides, uberRides, distance, startCoords, endCoords, tripSubmitted} = this.state;

    const menus = {
      hCoMenu: this.state.hCoMenu,
      hCiMenu: this.state.hCiMenu,
      wCoMenu: this.state.wCoMenu,
      wCiMenu: this.state.wCiMenu
    };

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
          counties={this.state.counties} 
          lookupSubmit={this.handleSubmit}
          handleHomeCountyChange={this.handleHomeCountyChange}
          handleHomeCityChange={this.handleHomeCityChange}
          handleWorkCountyChange={this.handleWorkCountyChange}
          handleWorkCityChange={this.handleWorkCityChange}
          handleInputChange={this.handleInputChange}
          homeCounty={this.state.homeCounty}
          workCounty={this.state.workCounty}
          startCity={this.state.startCity}
          endCity={this.state.endCity}
          toggleDropdownMenu={this.toggleDropdownMenu}
          menus={menus} />
        
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
              path={this.state.route}
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

