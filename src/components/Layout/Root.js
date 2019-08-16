/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box, ThemeProvider } from '@mattshirley/design';

import rootStyle from './root.module.css';

const Layout = ({ element }) => (
  <ThemeProvider>
    <Box className={rootStyle.container} p={[4, 5]} my={4} mx={[0, 'auto']} maxWidth={['auto', '52rem']}>
      {element}
    </Box>
  </ThemeProvider>
);

Layout.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Layout;
