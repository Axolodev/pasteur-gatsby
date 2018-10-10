import React from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';

const Layout = styled.div`
  grid-area: Sucursales;
`;

const Container = styled.div`
  font-family: ${props => props.theme.fontFamily.main};
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;

  ${device.mobile} {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: left;
  font-size: 2rem;
  color: #333;

  ${device.mobile} {
    text-align: center;
  }
`;

const SucursalName = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  color: #333;
`;

const Direccion = styled.p`
  line-height: 1.2rem;
  font-size: 1em;
  color: #333;
`;

const Sucursal = styled.div`
  box-sizing: border-box;
  padding-right: 1em;
  padding-top: 2em;
  max-width: 13em;
  min-width: 13em;
  flex: 1;
`;

const Locations = ({ locations, title }) => {
  return (
    <Layout>
      <Title> {title || 'Sucursales'} </Title>
      <Container>
        {locations.map((sucursal, index) => (
          <Sucursal key={index}>
            <SucursalName> {sucursal.title} </SucursalName>
            <Direccion> {sucursal.address} </Direccion>
          </Sucursal>
        ))}
      </Container>
    </Layout>
  );
};

export default Locations;
