/**
 * Used by Gatsby SSR to generate style sheet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Box from '../Box';
import PageStyle from '../../theme/global';

import defaultTheme from '../../theme';
import rootStyle from './root.module.css';

const Root = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <PageStyle />
    <Box className={rootStyle.container} p={[5, 5]} my={4} mx={[3, 'auto']} maxWidth={['auto', '52rem']}>
      {element}
    </Box>
  </ThemeProvider>
);

Root.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Root;
