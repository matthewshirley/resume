import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from '..';

const Content = ({ summary }) => (
  <Box>
    <Text fontSize={1} m={0}>{summary}</Text>
  </Box>
);

Content.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Content;
