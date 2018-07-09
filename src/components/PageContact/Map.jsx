import React, { Component } from 'react';
import styled from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { observer } from 'mobx-react';

import Locations from './Locations';
import SucursalesStore from './SucursalesStore';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Location = styled(Locations)`
  padding-top: 10px;
  padding-left: 30px;
`;

class Map extends Component {

  render() {
    const { sucursales, arrivedData } = SucursalesStore;

    const MyMapComponent = withScriptjs(withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 25.645376, lng: -100.191684 }}
      >
        {arrivedData === "success" ?
          sucursales.map(sucursal => (
            <Marker
              key={sucursal.id}
              position={{ lat: sucursal.latitud, lng: sucursal.longitud }}
            />
          )) :
          ''}
      </GoogleMap>
    )));

    return (
      <Div className={this.props.className}>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD9GULpt__ZrXICuni67CorQ79P8FbIP3g&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `30vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          ref={this.container}
        />
        {arrivedData === "success" ?
          <Location sucursales={sucursales} /> :
          ''}
      </Div>
    )
  }
}

export default observer(Map);