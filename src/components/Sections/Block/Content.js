import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@mattshirley/design/src/components/Text';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

import List from './List';


const Content = ({
  summary, highlights,
}) => (
  <Box>
    {summary && <Text fontSize={1}>{summary}</Text>}
    {highlights && <List highlights={highlights} />}
  </Box>
);

Content.propTypes = {
  summary: PropTypes.string,
  highlights: [
    PropTypes.string,
  ],
};

Content.defaultProps = {
  summary: '',
  highlights: [],
};

export default Content;
