import React, { Component } from 'react';
import styled from 'styled-components';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

import mapIcon from './assets/map-icon.png';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

class Map extends Component {
  render() {
    const MyMapComponent = withScriptjs(
      withGoogleMap(() => (
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 25.682855, lng: -100.318612 }}
        >
          {this.props.locations.map((sucursal, index) => (
            <Marker
              key={index}
              icon={mapIcon}
              position={{
                lat: sucursal.latitude,
                lng: sucursal.longitude,
              }}
            />
          ))}
        </GoogleMap>
      ))
    );

    return (
      <Div className={this.props.className}>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAbFiZ2YU98zmne6GPvT2s6YW6LyChuDio&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          ref={this.container}
        />
      </Div>
    );
  }
}

export default Map;
