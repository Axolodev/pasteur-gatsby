import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
  color: #989898;
  padding-bottom: 30px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.2em;
  color: #989898;
  padding-bottom: 30px;
`;

const Button = styled(NavLink)`
  width: 50%;
  background-color: #2c4486;
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.75rem;
  font-family: ${props => props.theme.fontFamily.main};
  padding: 15px 25px;
  border: none;
  text-decoration: none;

  &:hover{
          background-color: #405496;
          cursor: pointer;
  }
`;

const Delivery = (props) => (
  <Container className={props.className}>
    <Title> Servicio a Domicilio </Title>
    <Text> Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit losequat. </Text>
    <Button to="/"> Servicio a Domicilio </Button>
  </Container>
);

export default Delivery;