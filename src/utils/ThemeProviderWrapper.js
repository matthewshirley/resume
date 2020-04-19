import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from '../theme';

/**
 * ThemeProvider for application and test specs
 *
 * @param {object} props
 * @param {element} props.children
 */
const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

ThemeProviderWrapper.propTypes = {
  children: PropTypes.element,
};

ThemeProviderWrapper.defaultProps = {
  children: null,
};

export default ThemeProviderWrapper;
