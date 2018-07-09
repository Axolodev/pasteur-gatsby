import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import tecnologiasSVG from './icons/tecnologia.svg';
import domicilioSVG from './icons/domicilio.svg';
import ubicacionSVG from './icons/ubicacion.svg';

const Section = styled.section`
  overflow: hidden;
  width: 100%;
  min-height: 760px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Compromise = styled.div`
  display: flex;
  flex: 4;
`;

const TextBlock = styled(NavLink)`
  color: white;
  background: ${props => props.backgroundcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-grow: 1;
  text-decoration: none;
  font-size: 1.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  text-align: center;
`;

const Healthcare = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  align-items: center;
  justify-content: center;
`;

const SectionHeader = styled.h1`
  font-family: ${props => props.theme.fontFamily.main};
  color: #959698;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.2rem;
  padding-bottom: 0.5em;
`;

const SectionSubheader = styled.h3`
  font-family: ${props => props.theme.fontFamily.secondary};
  color: #959698;
  font-weight: 1.5em;
  line-height: 1.5rem;
  width: 60%;
  font-style: italic;
  text-align: center;
`;

const ValueProposition = styled.div`
  width: 39em;
  display: flex;
  justify-content: space-between;
  margin-top: 2em;
`;

const ValueCard = styled.div`
  width: 11em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ValueCardIcon = styled.img`
  width: 100%;
  max-width: 120px;
`;

const ValueCardSupportText = styled.div`
  color: #1995c9;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  text-align: center;
  padding-top: 1em;
`;

const Intro = () => (
  <Section>
    <Compromise>
      <TextBlock to="/nosotros" backgroundcolor="#2c4486">Compromiso con<br/>nuestros pacientes</TextBlock>
      <TextBlock to="#" backgroundcolor="#1995c9"></TextBlock>
      <TextBlock to="/" backgroundcolor="#2c4486">Consulta de<br/>resultados</TextBlock>
    </Compromise>
    <Healthcare>
      <SectionHeader>Cuidándonos siempre juntos</SectionHeader>
      <SectionSubheader>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eum sint placeat libero quae maiores vitae labore natus. Possimus, sit ipsam. Omnis vel nulla voluptate consectetur perspiciatis optio, mollitia aliquid?</SectionSubheader>
      <ValueProposition>
        <ValueCard>
          <ValueCardIcon src={tecnologiasSVG}/>
          <ValueCardSupportText>Tecnología<br />de Vanguardia</ValueCardSupportText>
        </ValueCard>
        <ValueCard>
          <ValueCardIcon src={domicilioSVG}/>
          <ValueCardSupportText>Servicio<br/>a domicilio</ValueCardSupportText>
        </ValueCard>
        <ValueCard>
          <ValueCardIcon src={ubicacionSVG}/>
          <ValueCardSupportText>Siempre<br/>cerca de ti</ValueCardSupportText>
        </ValueCard>
      </ValueProposition>
    </Healthcare>
  </Section>
);

export default Intro;