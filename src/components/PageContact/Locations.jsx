import React from 'react';
import styled from 'styled-components';

import { device } from '../../utilities/device';

const Layout = styled.div`
  grid-area: Sucursales;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${props => props.theme.fontFamily.main};
  justify-content: space-between;

  ${device.mobile} {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  line-height: 2.5rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  color: #989898;

  ${device.mobile} {
    text-align: center;
  }
`;

const SucursalName = styled.p`
  font-size: 1.3em;
  font-weight: 700;
  color: #989898;
`;

const Direccion = styled.p`
  font-size: 1.3em;
  color: #989898;
  line-height: 1.2rem;
`;

const Sucursal = styled.div`
  box-sizing: border-box;
  max-width: 13em;
  min-width: 13em;
  padding: 2em 1em;
  padding-left: 0;
  padding-bottom: 0;
  flex: 1;
`;

const Locations = ({locations}) => {
  return (
    <Layout>
      <Title> Sucursales </Title>
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
}

export default Locations;