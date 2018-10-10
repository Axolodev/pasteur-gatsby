import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import ButtonQuote from '../components/ButtonQuote';
import _Layout, { withLayoutPadding } from '../components/Layout';
import quoteBackground from '../components/PageAbout/assets/appointment.jpg';
import { H1 } from '../components/Headers';
import AppLayout from '../components/AppLayout';

const Layout = _Layout.extend`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const input = `
  En Laboratorios Pasteur Análisis Clínicos contamos con más de *21 años* de experiencia en el mercado y con más de 10 sucursales al servicio de las familias de Nuevo León. Nuestro compromiso por el cuidado de la salud nos motiva al constante crecimiento y la búsqueda constante de próximas aperturas.\n\n
  Laboratorios Pasteur, es la accesibilidad y certeza profesional en análisis clínicos que tu y tu familia necesitan.\n\n
  Brindamos servicios corporativos y empresariales facilitando el cuidado de la salud de tu personal e integrantes de tu equipo de trabajo.\n\n
  Creemos en la inversión de relaciones y alianzas a largo plazo.\n
`;

const text = 'Siempre cerca, siempre accesibles';

const CustomH1 = withLayoutPadding(H1);

const Content = styled(ReactMarkdown)`
  width: 100%;
  color: #333;
  font-family: ${props => props.theme.fontFamily.main};
  box-sizing: border-box;

  p {
    margin: 1em 0;
    line-height: 1.5em;
  }
`;

const PageAbout = () => (
  <AppLayout>
    <Layout>
      <H1>Sobre Nosotros</H1>
      <Content source={input} />
    </Layout>
    <ButtonQuote background={`url(${quoteBackground}) center`} quote={text} />
  </AppLayout>
);

export default PageAbout;
