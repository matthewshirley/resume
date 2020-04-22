import React from 'react';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Text from '../common/Text';
import Grid from '../common/Grid';

const Block = ({ title, children, borderBottom }) => (
  <Grid
    marginBottom={4}
    gridArea="content"
    gridTemplateColumns={{
      sm: '1fr',
      lg: '1fr 1fr 1fr',
      print: '1fr 1fr 1fr',
    }}
    gridTemplateAreas={{
      sm: '"RowTitle" "RowContent"',
      lg: '"RowTitle RowContent RowContent"',
      print: '"RowTitle RowContent RowContent"',
    }}
    borderBottom={borderBottom}
  >
    <Box gridArea="RowTitle">
      <Text as="h2" color="primary" fontSize={2} m={0} mb={{ sm: 2, lg: 0, print: 0 }}>{title}</Text>
    </Box>
    <Box gridArea="RowContent">
      {children}
    </Box>
  </Grid>
);

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  borderBottom: PropTypes.bool,
};

Block.defaultProps = {
  borderBottom: false,
};

export default Block;
