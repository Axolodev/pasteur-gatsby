import React from 'react';
import styled from 'styled-components';

import background from './assets/appointment.jpg';
import general from './icons/general.svg';
import mujer from './icons/mujer.svg';
import hombre from './icons/hombre.svg';
import adultomayor from './icons/adultomayor.svg';
import deportista from './icons/deportista.svg';
import organizacion from './icons/organizacion.svg';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  padding: 8.5em 3.5em;
  box-sizing: border-box;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url('${background}') center;
    z-index: -1;
  }
`;

const Layout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-auto-flow: row;
  grid-gap: 1px;
  overflow: hidden;

  @media (max-width: 50em) {
    height: auto;
    grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  outline-style: solid;
  outline-color: ${props => props.theme.color.white};
  outline-width: 1px; 
  padding: 1em 0;
`;

const GridItemLogo = styled.div`
  width: 20%;
`;

const GridItemTitle = styled.div`
  color: ${props => props.theme.color.lightBlue};
  font-family: ${props => props.theme.fontFamily.main};
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: bold;
`;

const GridItemDescription = styled.div`
  font-style: italic;
  font-family: "Times New Roman";
  font-size: 1em;
  line-height: 1.3em;
  width: 80%;
  font-family: ${props => props.theme.fontFamily.secondary};
  color: ${props => props.theme.color.white};
`;

const Img = styled.img`
  width: 70%;
`;

const profiles = [{
  name: 'general',
  alt: 'perfil general',
  description: 'Nuestro objetivo es facilitar nuestros servicios a todos los integrantes de la familia, liberándote de preocupaciones y brindando tranquilidad accesible a todos. Calidad de vida con la tranquilidad de que estamos cerca de ti.',
  img: general
}, {
  name: 'mujer',
  alt: 'perfil mujer',
  description: 'Día con día estamos consientes de la importancia del rola de la mujer en las familias de todos nuestros pacientes. Buscamos siempre crear  un servicio que faciliten su acelerada rutina.',
  img: mujer
}, {
  name: 'hombre',
  alt: 'perfil hombre',
  description: 'El hombre de familia esta en constante preocupación por el trabajo y los integrantes de su hogar, por lo que nos enfocamos en crear servicios que faciliten su rutina, y brindar la tranquilidad a su familia del cuidado de su salud.',
  img: hombre
}, {
  name: 'adultomayor',
  alt: 'perfil adulto mayor',
  description: 'Nuestro objetivo es facilitar nuestros servicios a todos los integrantes de la familia, liberándote de preocupaciones y brindando tranquilidad accesible a todos. Calidad de vida con la tranquilidad de que estamos cerca de ti.',
  img: adultomayor
}, {
  name: 'deportista',
  alt: 'perfil deportista',
  description: 'Sabemos que el deporte es un privilegio que se disfruta con el cuidado y la prevención de la salud. Nosotros creamos servicios para aquellos que se retan todos los días, se ponen nuevas metas deportivas y dentro de su rutina se encuentra el hábito de la revisión constante.',
  img: deportista
}, {
  name: 'corporativo',
  alt: 'perfil corporativo',
  description: 'El capital humano es el recurso más valioso dentro de las organizaciones, por este motivo, creamos servicios y programas que te permitirán estar tranquilo sobre la salud de cada integrante de tu equipo de trabajo.',
  img: organizacion
}]

const Public = () => (
  <Section>
    <Layout>
      {profiles.map(profile => (
        <GridItem key={profile.name}>
          <GridItemLogo><Img src={profile.img} alt={profile.alt}/></GridItemLogo>
          <GridItemTitle>{profile.name}</GridItemTitle>
          <GridItemDescription>{profile.description}</GridItemDescription>
        </GridItem>
      ))}
    </Layout>
  </Section>
);

export default Public;