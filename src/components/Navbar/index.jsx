import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from './logo.svg';
import { device } from '../../utilities/device';
import Navigation from './Navigation';

const NavLayout = styled.nav`
  z-index: 100;
  display: grid;
  grid-template: repeat(4, minmax(2.5vh, 47px)) / repeat(3, 1fr);
  grid-template-areas:
    'contact contact contact'
    'logo nav nav'
    'logo nav nav'
    '. . .';
  align-items: center;
  justify-content: space-evenly;
  font-family: ${props => props.theme.fontFamily.main};
  position: absolute;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(44, 68, 134, 1) 0%,
    rgba(5, 6, 255, 0) 100%,
    rgba(0, 212, 255, 1) 100%
  );

  ${device.laptop} {
    grid-template-columns: 1fr 2fr 2fr;
  }

  ${device.tablet} {
    grid-template-rows: minmax(5vh, 6em);
    grid-template-columns: 1fr 2fr;    
    grid-template-areas: 'logo nav';
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

  ${device.laptop} {
    flex: 0;
  }
`;

const PhoneSection = styledSection.extend`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  box-sizing: border-box;

  ${device.laptop} {
    flex: 2;
    border-left-width: 0;
  }
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
    padding: 0 2rem;

    ${device.laptop} {
      padding: 0 1rem;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  width: 8em;
  justify-content: space-between;

  ${device.laptop} {
    width: 5em;
  }
`;

const I = styled.i`
  color: white;
  font-size: 2rem;

  ${device.laptop} {
    font-size: 1.8em;
  }
`;

const LogoSection = styled.div`
  display: flex;
  grid-area: logo;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-left: 2em;
  padding-right: 1em;
  color: white;
  flex: 1;

  ${device.laptop} {
    padding-left: 1em;
    padding-right: 0.5em;
  }

  ${device.mobile} {
    padding-left: 0.5em;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  height: 100%;

  &:visited {
    text-decoration: none;
  }
`;

const Img = styled.img`
  width: 20em;
  min-height: 5rem;

  ${device.laptop} {
    width: 13em;
  }

  ${device.tablet} {
    width: 15em;
  }

  ${device.mobile} {
    min-width: 9em;
  }
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
        <SocialIcons>
          <ExternalLink
            target="_blank"
            href="https://www.facebook.com/laboratoriospasteuranalisisclinicos"
          >
            <I className="fab fa-facebook-square" />
          </ExternalLink>
          <ExternalLink
            target="_blank"
            href="https://www.instagram.com/laboratoriospasteur"
          >
            <I className="fab fa-instagram" />
          </ExternalLink>
        </SocialIcons>
      </SocialsSection>
    </ContactSection>
    <LogoSection>
      <Link to="/">
        <Img src={logo} alt="logo" />
      </Link>
    </LogoSection>
    <Navigation />
  </NavLayout>
);

export default Navbar;
