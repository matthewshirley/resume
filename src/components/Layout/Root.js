/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';
import theme from '@mattshirley/design/src/components/Theme';
import { GlobalStyle, FontsCss } from '@mattshirley/design/src/components/Providers/Theme';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

import rootStyle from './root.module.css';

const Layout = ({ children }) => (
  <ThemeProvider theme={{ breakpoints: ['720px', '1024px'], ...theme }} webfonts>
    <Box className={rootStyle.container} p={4} my={6} mx={[6, 'auto']} maxWidth={['auto', '52rem']}>
      <GlobalStyle />
      <FontsCss />
      {children}
    </Box>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
