/**
 * Used by Gatsby SSR to generate style sheet.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mattshirley/design';

const Root = ({ element }) => (
  <ThemeProvider>
    {element}
  </ThemeProvider>
);

Root.propTypes = {
  element: PropTypes.node.isRequired,
};

export default Root;
