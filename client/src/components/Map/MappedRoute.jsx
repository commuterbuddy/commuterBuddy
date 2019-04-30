import React, { Component, useState } from 'react';
import { Map, Marker, InfoWindow, Polyline, GoogleApiWrapper } from 'google-maps-react';
import { googleMapsToken } from '../../../../config.js';
import MapStyles from './MapStyles.css';

export const MappedRoute = (props) => {

  const [status, setStatus] = useState({
    selectedPlace: '',
    activeMarker: {},
    showingInfoWindow: false
  });

  const { showingInfoWindow, activeMarker, selectedPlace } = status;

  const { google, startCoords, endCoords, route, distance } = props;

  const updateMarker = (props, marker) => {
    const markerName = marker.name;
    setStatus({
      showingInfoWindow: true,
      selectedPlace: markerName,
      activeMarker: marker
    });
  }

  const hideMarker = props => {
    if (showingInfoWindow) {
      setStatus({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  const renderRoute = () => {
    let points;
    let bounds;

    if (props.startCoords) {
      points = [
        props.startCoords, props.endCoords
      ];
      
      bounds = new props.google.maps.LatLngBounds();
    
      for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
    }
    return bounds;
  }

    const style = {
      width: '75%',
      height: '720px',
      position: 'absolute'
    };

    return (
        
      <div className={MapStyles.mapContainer} >          
        
        <Map 
          google={google}
          onClick={hideMarker}
          style={style}
          className={'map'}
          initialCenter={{lat: 34.0522, lng: -118.2437}}
          bounds={startCoords ? renderRoute() : null}
          >

          <Marker
            name={'Home'}
            position={startCoords}
            onClick={updateMarker} 
           />

          <Marker
            name={'Work'}
            position={endCoords}
            onClick={updateMarker} 
          />
          
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}
          >
              
            <div>
              <h1>{selectedPlace}</h1>
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

export default GoogleApiWrapper({
  apiKey: googleMapsToken
})(MappedRoute);


