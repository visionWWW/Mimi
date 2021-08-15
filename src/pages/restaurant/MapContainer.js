import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map Map google={this.props.google}
      style={{width: "500px", height: "500px", position: 'left'}}
      initialCenter={{
        lat:37.54739337012173,
        lng:126.9645628186036
     }}
      zoom={15}
      >

     <Marker
      title={'The marker`s title will appear as a tooltip.'}
      name={'다른 마커 추가 가능'}
      position={{
          lat: 37.545518993227454, 
          lng: 126.96811089586225}} />

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
                <h1>test</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)