import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../common/Grid';

const Layout = ({ children }) => (
  <Grid
    gridTemplateColumns={{
      sm: '10% 1fr 10%',
      lg: '20% 1fr 20%',
      print: '10% 1fr 10%',
    }}
    gridTemplateRows="auto"
    gridTemplateAreas='
            ". header ."
            ". content ."
        '
    my={{
      sm: 4,
      lg: 4,
      print: 5,
    }}
  >
    {children}
  </Grid>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
