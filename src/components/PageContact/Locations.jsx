import React from 'react';
import styled from 'styled-components';

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

const Locations = ({data}) => {
  const Sucursales = [];

  return (
    <div>
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

export default Locations;