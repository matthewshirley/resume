import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@mattshirley/design/src/components/Text';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

import rowStyle from './row.module.css';

const Row = ({ title, children }) => (
  <Box className={rowStyle.container}>
    <Box className={rowStyle.header}>
      <Text color="primary" bold>{title}</Text>
    </Box>
    <Box className={rowStyle.content} mb={4} borderBottom>
      <Box mb={5}>
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