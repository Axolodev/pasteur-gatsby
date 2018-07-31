import React from 'react';
import styled from 'styled-components';

import general from './icons/general.svg';
import mujer from './icons/mujer.svg';
import hombre from './icons/hombre.svg';
import adultomayor from './icons/adultomayor.svg';
import deportista from './icons/deportista.svg';
import organizacion from './icons/organizacion.svg';

const Section = styled.section`
  overflow: hidden;
  width: 100%;
  min-height: 760px;
  height: 100vh;
`;

const Layout = styled.div`
  display: grid;
  width: calc(100% - 7em);
  height: calc(100% - 17em);
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-auto-flow: row;
  margin: 8.5em 3.5em;
  grid-gap: 1px;
  overflow: hidden;
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
`;

const GridItemLogo = styled.div`
  width: 20%;
`;

const GridItemTitle = styled.div`
  color: ${props => props.theme.color.lightBlue};
  font-family: ${props => props.theme.fontFamily.main};
  margin: 1rem 0;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: bold;
`;

const GridItemDescription = styled.div`
  font-style: italic;
  font-family: "Times New Roman";
  font-size: 0.9rem;
  width: 80%;
  font-family: ${props => props.theme.fontFamily.secondary};
  color: ${props => props.theme.color.white};
  line-height: 1.1rem;
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
        <GridItem>
          <GridItemLogo><Img src={profile.img} alt={profile.alt}/></GridItemLogo>
          <GridItemTitle>{profile.name}</GridItemTitle>
          <GridItemDescription>{profile.description}</GridItemDescription>
        </GridItem>
      ))}
    </Layout>
  </Section>
);

export default Public;