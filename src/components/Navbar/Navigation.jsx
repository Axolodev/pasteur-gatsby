import React, { Component } from 'react';
import _Link from 'gatsby-link';
import styled from 'styled-components';
import { device } from '../../utilities/device';

const NavSection = styled.div`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2em;
  box-sizing: border-box;

  ${device.laptop} {
    padding-right: 1em;
  }

  ${device.tablet} {
    justify-content: flex-end;
    ${({ open }) =>
      open &&
      `
      position: fixed;
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      padding: 0 1em;
      background: rgba(0, 0, 0, 0.9);
      justify-content: flex-start;
      align-items: flex-start;
      top: 0;
      left: 0;
    `};
  }
`;

const MenuButtonSection = styled.div.attrs({
  style: ({ open }) => ({
    paddingRight: open ? '1em' : 0,
  }),
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  height: 6em;

  ${device.tablet} {
    width: 100%;
  }
`;

const MenuButton = styled.div`
  display: none;
  height: 30px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  ${device.tablet} {
    display: flex;
  }

  ${device.mobile} {
    height: 20px;
  }
`;

const MenuButtonBar = styled.span`
  height: 5px;
  width: 36px;
  background-color: white;
  transition: 300ms linear all;
  transform-origin: left;

  ${device.mobile} {
    height: 4px;
    width: 24px;
  }
`;

const BarOne = MenuButtonBar.extend.attrs({
  style: ({ open }) => ({
    transform: `rotate(${open ? '45deg' : 0})`,
  }),
})``;

const BarTwo = MenuButtonBar.extend.attrs({
  style: ({ open }) => ({
    opacity: open ? 0 : 1,
  }),
})``;

const BarThree = MenuButtonBar.extend.attrs({
  style: ({ open }) => ({
    transform: `rotate(${open ? '-45deg' : 0})`,
  }),
})``;

const LinksSection = styled.div`
  flex: 1;
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  > :first-child {
    margin-left: 0;
  }

  > :last-child {
    margin-right: 0;
  }

  ${device.tablet} {
    display: none;
    width: 100%;
    padding-right: 1em;
    justify-content: flex-start;
    flex-direction: column;
    ${({ open }) =>
      open &&
      `
      display: flex;
    `};
  }
`;

const Link = styled(_Link)`
  text-decoration: none;
  font-size: 0.8rem;
  font-family: ${props => props.theme.fontFamily.main};
  text-transform: uppercase;
  color: white;
  text-align: center;
  margin: 0 0.75em;

  &:visited {
    text-decoration: none;
  }

  ${device.tablet} {
    transition: 300ms linear all;
    border: 0 solid white;
    border-width: 1px 0px;
    height: 4rem;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;

    :hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  ${device.mobile} {
    font-size: 1em;
  }
`;

const Anchor = Link.withComponent('a');

class Navigation extends Component {
  state = {
    open: false,
  };

  toggleMenu = () => {
    this.setState(() => {
      return {
        open: !this.state.open,
      };
    });
  };

  closeMenu = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <NavSection open={this.state.open}>
        <MenuButtonSection open={this.state.open}>
          <MenuButton onClick={this.toggleMenu}>
            <BarOne open={this.state.open} />
            <BarTwo open={this.state.open} />
            <BarThree open={this.state.open} />
          </MenuButton>
        </MenuButtonSection>
        <LinksSection onClick={() => this.closeMenu()} open={this.state.open}>
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Sobre Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          {/* <Link to="/noticias">Noticias</Link> */}
          <Anchor
            target="_blank"
            href="http://pasteurlab.fortiddns.com:38080/EclipseWebStandard/login"
          >
            Consulta de resultados
          </Anchor>
          <Link to="/nuevas-aperturas">Nuevas aperturas</Link>
          <Link to="/sucursales">Sucursales</Link>
        </LinksSection>
      </NavSection>
    );
  }
}

export default Navigation;
