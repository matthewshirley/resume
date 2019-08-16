import React from 'react';
import PropTypes from 'prop-types';

import { Box, Flex, Text } from '@mattshirley/design';

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
  <Box as="header" className={headerGrid.container} mb={5}>
    <Box className={headerGrid.Name}>
      <Text as="h1" color="primary" m={0}>{name}</Text>
      <Text as="small" m={0}>{label}</Text>
    </Box>
    <Box className={headerGrid.Contact}>
      <Flex flexDirection="column">
        <a href={`mailto:${email}`}>
          <Text as="small" m={0}>{email}</Text>
        </a>
        <a href={`tel:${phone}`}>
          <Text as="small" m={0}>{phone}</Text>
        </a>
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
