import React, { Component } from 'react';
import styled from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

class Map extends Component {

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap(() => (
      <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 25.645376, lng: -100.191684 }}
      >
        {this.props.locations.map((sucursal, index) => (
          <Marker
            key={index}
            position={{ 
              lat: sucursal.latitude, 
              lng: sucursal.longitude
            }}
          />
        ))}
      </GoogleMap>
    )));

    return (
      <Div className={this.props.className}>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9GULpt__ZrXICuni67CorQ79P8FbIP3g&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          ref={this.container}
        />
      </Div>
    )
  }
}

export default Map;