import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.p`
  text-transform: uppercase;
  line-height: 2.5rem;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  color: #333;
  padding-bottom: 30px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2em;
  color: #333;
  padding-bottom: 30px;
  font-family: ${({ theme }) => theme.fontFamily.main};
`;

const Delivery = props => (
  <Container className={props.className}>
    <Title> Servicio a Domicilio </Title>
    <Text> Siempre accesibles, siempre cerca de ti. Contáctanos ahora. </Text>
  </Container>
);

export default Delivery;
