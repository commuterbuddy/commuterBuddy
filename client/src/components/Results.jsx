import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../config.js';
// import ResultsStyles from '../styles/ResultsStyles.css';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onHomeMarkerClick = this.onHomeMarkerClick.bind(this);
    this.onWorkMarkerClick = this.onWorkMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
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

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <Map 
        google={this.props.google}
        onClick={this.onMapClicked}
        style={style}
        initialCenter={{
          lat: 34.0522,
          lng: -118.2437   
        }}
        zoom={10}>
        <Marker
          title={'THIS IS THE TITLE'}
          name={'Home'}
          onClick={this.onHomeMarkerClick} />

        <Marker

          name={'Work'}
          position={{lat: 33.8366, lng: -117.9143}}
          onClick={this.onWorkMarkerClick} />
          
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(Results);

