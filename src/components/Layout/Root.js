/**
 * Used by Gatsby SSR to generate style sheet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Box, ThemeProvider } from '@mattshirley/design';

import rootStyle from './root.module.css';

const Root = ({ element }) => (
  <ThemeProvider>
    <Box className={rootStyle.container} p={[4, 5]} my={4} mx={[0, 'auto']} maxWidth={['auto', '52rem']}>
      {element}
    </Box>
  </ThemeProvider>
);

Root.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Root;
