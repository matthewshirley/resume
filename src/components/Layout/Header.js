import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '@mattshirley/design/src/components/Layout/Flex';
import { Box } from '@mattshirley/design/src/components/Layout/Box';
import { Text } from '@mattshirley/design/src/components/Text';

import headerGrid from './header.module.css';

/**
 * The page header outlining basic information (name, phone number).
 *
 * @param {String} name
 * @param {String} label
 * @param {String} email
 * @param {String} phone
 */
const PageHeader = ({
  name, label, email, phone,
}) => (
  <Box as="header" className={headerGrid.container} mb={6}>
    <Box className={headerGrid.Name}>
      <Text as="H1" color="primary">{name}</Text>
      <Text as="small">{label}</Text>
    </Box>
    <Box className={headerGrid.Contact}>
      <Flex flexDirection="column">
        <Text as="small">{email}</Text>
        <Text as="small">{phone}</Text>
      </Flex>
    </Box>
  </Box>
);

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

PageHeader.defaultProps = {
  label: '',
  email: '',
  phone: '',
};

export default PageHeader;