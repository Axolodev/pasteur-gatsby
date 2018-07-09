import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const ButtonCont = styled.div`
  color: ${props => props.theme.color.darkBlue};
  background-color: ${props => props.theme.color.white};
  width: 55%;
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  padding: 2px;
  margin: auto 0px;
`;

/**
 * CHANGE FONT FAMILY
 */
const Text = styled.p`
  font-style: italic;
  font-size: 1.1rem;
  padding: 2px;
  margin: auto 0px;
`;

const Button = styled(NavLink)`
  background-color: ${props => props.theme.color.darkBlue};
  color: ${props => props.theme.color.white};
  text-transform: uppercase;
  font-family: ${props => props.theme.fontFamily.main};
  text-align: center;
  font-size: 1rem;
  padding: 25px;
  border: none;
  text-decoration: none;

  &:hover{
      background-color: #405496;
      cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  height: inherit;
  flex-direction: column;
  line-height: 1em;
  width: ${props => props.width}%;
`;

const DeliveryButton = () => (
  <ButtonCont>
    <Div width={60}>
      <Title>Lorem ipsum dolor sit</Title>
      <Text>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</Text>
    </Div>
    <Div width={35}>
      <Button to="/">Servicio a Domicilio</Button>
    </Div>
  </ButtonCont>
);

export default DeliveryButton;