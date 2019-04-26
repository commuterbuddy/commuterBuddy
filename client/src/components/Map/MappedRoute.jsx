import React, { Component } from 'react';
import { Map, Marker, InfoWindow, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../../config.js';
import MapStyles from './MapStyles.css';

export class MappedRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onHomeMarkerClick = this.onHomeMarkerClick.bind(this);
    this.onWorkMarkerClick = this.onWorkMarkerClick.bind(this);
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
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

  render() {

    const { google, startCoords, endCoords, route, distance } = this.props;

    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;

    const style = {
      width: '75%',
      height: '720px',
      position: 'absolute'
    };

    return (
        
      <div className={MapStyles.mapContainer} >          
        
        <Map 
          google={google}
          onClick={this.onMapClicked}
          style={style}
          className={'map'}
          initialCenter={{lat: 34.0522, lng: -118.2437}}
          bounds={startCoords ? bounds : null}
          >

          <Marker
            name={'Home'}
            position={startCoords}
            onClick={this.onHomeMarkerClick} 
           />

          <Marker
            name={'Work'}
            position={endCoords}
            onClick={this.onWorkMarkerClick} 
          />
          
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
              
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
        
          </InfoWindow>

          <Polyline
            path={route}
            options={{
              strokeColor: "#1885FF",
              strokeOpacity: 0.8,
              strokeWeight: 4,            
            }}
          />

        </Map>

        {distance ? 
          <div className={MapStyles.distancePop}>
            <h1>Distance: {distance} miles</h1>
          </div>
        : null}

      </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(MappedRoute);


