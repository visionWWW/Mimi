import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const google = window.google;

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{width: "50%", height: "60%", position: 'left'}}
        zoom={17}
        initialCenter={{
            lat: 37.5444119401556, lng: 126.968771587095
        }}
      >
        <Marker 
        icon={{image: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
          }}
          position={{
            lat: 37.5444119401556, lng: 126.968771587095
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4avBeOZV9CvBnJh7aF7oIEqZ14GCnc1U'
})(MapContainer)