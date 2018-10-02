import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import Navbar from '../Navbar';
import Footer from '../Footer';
import theme from './themes';
import { gtag } from '../../utilities/gtag';

import './index.css';

const AppLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Laboratorios Pasteur"
        meta={[
          {
            name: 'description',
            content:
              'Siempre accesibles, siempre cerca de ti. Contáctanos ahora.',
          },
          { name: 'keywords', content: 'Laboratorios, Pasteur' },
        ]}
        link={[
          {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            integrity:
              'sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt',
            crossorigin: 'anonymous',
          },
          {
            rel: 'shortcut icon',
            href: '/favicon.ico?v=2',
            type: 'image/x-icon',
          },
          {
            rel: 'icon',
            href: '/favicon.ico?v=2',
            type: 'image/x-icon',
          },
        ]}
      />
      <Navbar />
      {children}
      <Footer />
      {() => {
        gtag('js', new Date());
        gtag('config', 'UA-125738292-1');
      }}
    </div>
  </ThemeProvider>
);
export default AppLayout;
