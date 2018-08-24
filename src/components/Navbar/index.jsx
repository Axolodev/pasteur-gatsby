import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from './logo.svg';
import { device } from '../../utilities/device';

const NavLayout = styled.nav`
  z-index: 1;
  display: grid;
  grid-template: repeat(4, minmax(2.5vh, 47px)) / 3fr 1fr 2fr;
  grid-template-areas: 
    "contact contact contact"
    "logo nav nav"
    "logo nav nav"
    ". . .";
  align-items: center;
  justify-content: space-evenly;
  font-family: ${props => props.theme.fontFamily.main};
  position: absolute;
  width: 100%;
  background: linear-gradient(180deg, rgba(44,68,134,1) 0%, rgba(5,6,255,0) 100%, rgba(0,212,255,1) 100%);
  
  ${device.tablet} {
    grid-template-rows: minmax(5vh, 6em);
    grid-template-areas: "logo nav nav";
  }
`;

const ContactSection = styled.div`
  grid-area: contact;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  box-shadow: inset 0px -2px 0px -1px white;
  
  ${device.tablet} {
    display: none;
  }
`;

const styledSection = styled.div`
  border-left: 1px solid white;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 0.9rem;
  color: white;
  height: 100%;
`;

const Spacer = styled.div`
  flex: 3;
`;

const PhoneSection = styledSection.extend`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  box-sizing: border-box;
`;

const SocialsSection = styledSection.extend`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${props => props.theme.fontFamily.main};
  font-size: 0.8rem;
  box-sizing: border-box;

  > * {
    padding: 0 1em;
  }
`;

const I = styled.i`
  color: white;
  font-size: 2rem;
  padding: 0 0.5em;

  ${device.laptop} {
    font-size: 1.65em;
  }
`;

const LogoSection = styled.div`
  display: flex;
  grid-area: logo;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3.5em;
  color: white;
  font-size: 1.5rem;
  flex: 1;

  ${device.laptop} {
    padding-left: 1em;
  }
`;

const LinksSection = styled.div`
  display: flex;
  grid-area: nav;  
  align-items: center;
  justify-content: space-between;
  padding-right: 3.5em;
  
  ${device.laptop} {
    padding-right: 1em;
  }

  ${device.tablet} {
    display: none;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 0.8rem;
	font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  color: white;

  &:visited {
    text-decoration: none;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  height: 100%;
  width: 100%;

  &:visited {
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 57%;
  min-width: 10em;
`;

const PhoneNumber = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 17%;
  text-align: right;

  ${device.laptop} {
    padding: 0 10%;
    font-size: 0.9em;
  }
`;

const Navbar = () => (
  <NavLayout>
    <ContactSection>
      <Spacer />
      <PhoneSection>
        <PhoneNumber>(81) 8354 8491</PhoneNumber>
        <PhoneNumber>8358 3957</PhoneNumber>
      </PhoneSection>
      <SocialsSection>
        <div>contacto@pasteur.mx</div>
        <div>
          <ExternalLink target="_blank" href="https://www.facebook.com/laboratoriospasteuranalisisclinicos"><I className="fab fa-facebook-square" /></ExternalLink>
          <ExternalLink target="_blank" href="https://www.instagram.com/laboratoriospasteur"><I className="fab fa-instagram" /></ExternalLink>
        </div>
      </SocialsSection>
    </ContactSection>
    <LogoSection><NavLink to="/"><Img src={logo} alt="logo" /></NavLink></LogoSection>
    <LinksSection>
      <Link to="/">Inicio</Link>
      <Link to="/nosotros">Sobre Nosotros</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/contacto">Sucursales</Link>
    </LinksSection>
  </NavLayout>
);

export default Navbar;
