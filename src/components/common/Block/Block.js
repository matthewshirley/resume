import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Text from '../Text';
import Grid from '../Grid';

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
      <Text color="primary" fontSize={3} m={0} mb={{ sm: 2, lg: 0, print: 0 }}>{title}</Text>
    </Box>
    <Box gridArea="RowContent">
      {children}
    </Box>
  </Grid>
);

Block.propTypes = {
  title: PropTypes.string,
  borderBottom: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Block.defaultProps = {
  title: '',
  borderBottom: false,
};

export default Block;
