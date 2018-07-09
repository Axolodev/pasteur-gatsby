import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const Sucursales = [
  { id: 1, nombre: 'Suc. Valle Soleado', direccion: "Ave. Israel Cavazos No. 342, Col. Valle Soleado, Guadalupe, N.L.", latitud: 25.645376, longitud: -100.191684 },
  { id: 2, nombre: 'Suc. Coahuila', direccion: "Ave. Coahuila No. 406, Col. Coahuila, Juárez, N.L.", latitud: 25.6629138, longitud: -100.1436527 },
  { id: 3, nombre: 'Suc. Santa Mónica', direccion: "Ave. Acueducto No. 809, Col. Santa Isabel, Juárez, N.L.", latitud: 25.655559, longitud: -100.199995 },
  { id: 4, nombre: 'Suc. Zertuche', direccion: "Ave. Eloy Cavazos, No. 5729-A, Col. Zertuche, Guadalupe, N.L.", latitud: 25.673432, longitud: -100.192929 },
  { id: 5, nombre: 'Suc. Las Torres', direccion: "Ave. Calle Camino al Mirador, Col. del Paseo Residencial, Monterrey, N.L.", latitud: 25.673432, longitud: -100.192929 },
  { id: 6, nombre: 'Suc. Fomerrey 18', direccion: "Ave. Cuernavaca No. #1800-A, Col. Nuevo San Miguel, Guadalupe, N.L.", latitud: 25.673432, longitud: -100.192929 },
  { id: 7, nombre: 'Suc. La Luz', direccion: "Ave. Paseo de la Luz #102, Plaza \"La Luz\" local 8, Monterrey, N.L.", latitud: 25.673432, longitud: -100.192929 }
];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.p`
  text-transform: uppercase;
  line-height: 2.5rem;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  color: #989898;
`;

const SucursalName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #989898;
`;

const Direccion = styled.p`
  font-size: 1rem;
  color: #989898;
  line-height: 1.2rem;
`;

const Sucursal = styled.div`
  width: 25%;
  box-sizing: border-box;
  padding-top: 30px;

  &:not(:nth-child(4n + 0)) {
      padding-right: 10px;
  }
`;

const Locations = (props) => {
  return (
    <div className={props.className}>
      <Title> Sucursales </Title>
      <Container>
        {Sucursales.map(sucursal => (
          <Sucursal key={sucursal.id}>
            <SucursalName> {sucursal.nombre} </SucursalName>
            <Direccion> {sucursal.direccion} </Direccion>
          </Sucursal>
        ))}
      </Container>
    </div>
  );
}

export default observer(Locations);