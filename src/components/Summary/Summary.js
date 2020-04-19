import React from 'react';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Text from '../common/Text';
import Block from '../common/Block';

const Summary = ({ summary }) => {
  if (!summary) return (null);

  return (
    <Block title="About">
      <Box paddingBottom={4} borderBottom>
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
