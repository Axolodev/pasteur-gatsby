import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: ${props => props.theme.fontFamily.main};
`;

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  line-height: 2.5rem;
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  color: #989898;
`;

const SucursalName = styled.p`
  font-size: 1rem;
  font-weight: 700;
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

const Locations = ({locations}) => {
  return (
    <div>
      <Title> Sucursales </Title>
      <Container>
        {locations.map((sucursal, index) => (
          <Sucursal key={index}>
            <SucursalName> {sucursal.title} </SucursalName>
            <Direccion> {sucursal.address} </Direccion>
          </Sucursal>
        ))}
      </Container>
    </div>
  );
}

export default Locations;