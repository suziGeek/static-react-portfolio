import React, { Component } from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";
class Map extends Component {
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 41.1432, lng: -81.8552 }}
        defaultZoom={9}
      />
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `75vh`, width: "100vw" }} />}
          mapElement={<div style={{ height: `100vh` }} />}
        />
      </div>
    );
  }
}
export default Map;
