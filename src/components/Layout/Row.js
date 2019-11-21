import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from '@mattshirley/design';

import rowStyle from './row.module.css';

const Row = ({ title, children }) => (
  <Box className={rowStyle.container}>
    <Box className={rowStyle.header}>
      <Text color="primary" m={0}>{title}</Text>
    </Box>
    <Box className={rowStyle.content} mb={4} borderBottom>
      <Box mb={4}>
        {children}
      </Box>
    </Box>
  </Box>
);

Row.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Row.defaultProps = {
  title: '',
};

export default Row;
