import React, { Component } from 'react';
import axios from 'axios';
import { Map, Marker, InfoWindow, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../config.js';
import MapStyles from './MapStyles.css';
// import ResultsStyles from '../styles/ResultsStyles.css';

export class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathCoords: [
        {lat: 33.6848, lng: -117.8265},
        {lat: 33.8366, lng: -117.9143}
      ],
      showingInfoWindow: false,
      showingDistanceWindow: true,
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
      width: '100%',
      height: '100%',
      position: 'relative'
    };

    return (
      <div className={MapStyles.container}>
      <Map 
        google={this.props.google}
        onClick={this.onMapClicked}
        style={style}
        className={'map'}
        initialCenter={this.state.pathCoords[0]}
        zoom={11}>

        <Marker
          name={'Home'}
          position={this.state.pathCoords[0]}
          onClick={this.onHomeMarkerClick} />

        <Marker

          name={'Work'}
          position={this.state.pathCoords[1]}
          onClick={this.onWorkMarkerClick} />
          
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>

        <Polyline
          path={this.state.pathCoords}
          options={{
            strokeColor: "#1885FF",
            strokeOpacity: 0.8,
            strokeWeight: 4,            
          }}
        />

      </Map>

      <div className={MapStyles.distancePop}>
        <h1>Distance: 500 miles</h1>
      </div>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(Results);

