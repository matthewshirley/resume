import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@mattshirley/design/src/components/Text';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

const Content = ({ summary }) => (
  <Box>
    <Text fontSize={1}>{summary}</Text>
  </Box>
);

Content.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Content;
