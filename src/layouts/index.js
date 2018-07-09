import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components';

import Navbar from './../components/Navbar/index';
import Footer from './../components/Footer/index';
import { globalTheme } from './themes';

import './index.css'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={globalTheme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Navbar />
      {children()}
      <Footer />
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
