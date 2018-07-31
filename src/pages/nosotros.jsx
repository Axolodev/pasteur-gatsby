import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import ButtonQuote from '../components/ButtonQuote';

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Placeholder = styled.img`
  height: 200px;
  background: white;
`;

const input = `
  # Sobre Nosotros

  En Laboratorios Pasteur Análisis Clínicos contamos con más de *21 años* de experiencia en el mercado y con más de 10 sucursales al servicio de las familias de Nuevo León. Nuestro compromiso por el cuidado de la salud nos motiva al constante crecimiento y la búsqueda constante de próximas aperturas.\n\n
  Laboratorios Pasteur, es la accesibilidad y certeza profesional en análisis clínicos que tu y tu familia necesitan.\n\n
  Brindamos servicios corporativos y empresariales facilitando el cuidado de la salud de tu personal e integrantes de tu equipo de trabajo.\n\n
  Creemos en la inversión de relaciones y alianzas a largo plazo.\n`;

const text = 'Siempre cerca, siempre accesibles';

const Content = styled(ReactMarkdown)`
  width: 85%;
  color: #333;
  font-family: ${props => props.theme.fontFamily.main};

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
  }

  p {
    margin: 1em 0;
    line-height: 1.5em;
  }
`;

const QuoteButton = styled(ButtonQuote)`
  align-self: flex-end;
  width: 100%;
  background: red;
`;

const PageAbout = () => (
  <Layout>
    <Placeholder />
    <Content source={input} />
    <QuoteButton quote={text} />
  </Layout>
);

export default PageAbout;