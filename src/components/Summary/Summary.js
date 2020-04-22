import React from 'react';
import PropTypes from 'prop-types';

import Block from '../Block';
import Box from '../common/Box';
import Text from '../common/Text';

const Summary = ({ summary }) => {
  if (!summary) return (null);

  return (
    <Block title="About">
      <Box paddingBottom={3} borderBottom>
        <Text m={0}>{summary}</Text>
      </Box>
    </Block>
  );
};

Summary.propTypes = {
  summary: PropTypes.string,
};

Summary.defaultProps = {
  summary: null,
};

export default Summary;
