import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const google = window.google;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        initialCenter={{
            lat: 37.5451230722925, lng: 126.966378004153
        }}
      >
        <Marker 
        icon={{image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }}
          position={{
            lat: 37.5451230722925, lng: 126.966378004153
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_MAP
})(MapContainer)