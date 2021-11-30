import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const google = window.google;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ 
          boxsizing: "border-box",
          height:"50%", 
          padding: "5px" 
        }}
        zoom={17}
        initialCenter={{
            lat: 37.5448909890131, lng: 126.966112188509
        }}
      >
        <Marker 
        icon={{image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }}
          position={{
            lat: 37.5448909890131, lng: 126.966112188509
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_MAP
})(MapContainer)