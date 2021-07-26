import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React from "react";
import { apikey } from "../../googlemap";

class MapPresenter extends React.Component {
  public render() {
    return (
      <div className={"MapPresenter"}>
        <Map google={this.props.google} zoom={14}>
          <Marker name={"Current location"} />
          <InfoWindow>
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: AIzaSyC4avBeOZV9CvBnJh7aF7oIEqZ14GCnc1U
})(MapPresenter);