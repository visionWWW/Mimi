import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map Map google={this.props.google}
      style={{width: "40%", height: "60%", position: 'left'}}
      initialCenter={{
        lat:37.54739337012173,
        lng:126.9645628186036
      }}
      zoom={15}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_API_KEY)
})(MapContainer)