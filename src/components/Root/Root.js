import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Meta from '../Meta';

import PageStyle from '../../theme/global';
import defaultTheme from '../../theme';

const Root = ({ element }) => (
  <ThemeProvider theme={defaultTheme}>
    <Meta />
    <PageStyle />
    {element}
  </ThemeProvider>
);

Root.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Root;
