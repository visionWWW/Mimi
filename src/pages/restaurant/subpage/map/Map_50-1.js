import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const google = window.google;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{width: "40%", height: "60%", position: 'left'}}
        zoom={15}
        initialCenter={{
            lat: 37.5446371456931, lng: 126.968604586565
        }}
      >
        <Marker 
        icon={{image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }}
          position={{
            lat: 37.5446371456931, lng: 126.968604586565
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_MAP
})(MapContainer)