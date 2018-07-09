import React, { Component } from 'react';
import styled from 'styled-components';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { observer } from 'mobx-react';

import Locations from './Locations';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Location = styled(Locations)`
  padding-top: 10px;
  padding-left: 30px;
`;

const sucursales = [
  { id: 1, nombre: 'Suc. Valle Soleado', direccion: "Ave. Israel Cavzos No. 342, Col. Valle Soleado, Guadalupe, N.L.", latitud: 25.645376, longitud: -100.191684 },
  { id: 2, nombre: 'Suc. Coahuila', direccion: "Ave. Coahuila No. 406, Col. Coahuila, Juárez, N.L.", latitud: 25.648376, longitud: -100.199705 },
  { id: 3, nombre: 'Suc. Santa Mónica', direccion: "Ave. Acueducto No. 809, Col. Santa Isabel, Juárez, N.L.", latitud: 25.655559, longitud: -100.199995 },
  { id: 4, nombre: 'Suc. Zertuche', direccion: "Ave. Eloy Cavazos, No. 5729-A, Col. Zertuche, Guadalupe, N.L.", latitud: 25.673432, longitud: -100.192929 },
  { id: 5, nombre: 'Suc. Las Torres', direccion: "Ave. Calle Camino al Mirador, Col. del Paseo Residencial, Monterrey, N.L.", latitud: 25.673432, longitud: -100.192929 },
  { id: 6, nombre: 'Suc. Fomerrey 18', direccion: "Ave. Cuernavaca No. #1800-A, Col. Nuevo San Miguel, Guadalupe, N.L.", latitud: 25.673432, longitud: -100.192929 },
  { id: 7, nombre: 'Suc. La Luz', direccion: "Ave. Paseo de la Luz #102, Plaza \"La Luz\" local 8, Monterrey, N.L.", latitud: 25.673432, longitud: -100.192929 }
];

class Map extends Component {

  render() {
    const MyMapComponent = withScriptjs(withGoogleMap(() => (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 25.645376, lng: -100.191684 }}
      >
        {sucursales.map(sucursal => (
          <Marker
            key={sucursal.id}
            position={{ lat: sucursal.latitud, lng: sucursal.longitud }}
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

export default observer(Map);