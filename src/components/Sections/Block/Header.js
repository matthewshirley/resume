import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@mattshirley/design/src/components/Text';
import { Box } from '@mattshirley/design/src/components/Layout/Box';
import { Flex } from '@mattshirley/design/src/components/Layout/Flex';

const Header = ({
  company, position, website, location, startDate, endDate,
}) => {
  const formattedStartDate = startDate;
  const formattedEndDate = endDate || 'Present';

  return (
    <Flex justifyContent="space-between" mb={2}>
      <Box>
        <Text fontSize={1} bold>
          {position}
        </Text>
        <Text as="small" fontSize={0}>
          <a href={website} target="_blank" rel="noopener noreferrer">
            {company}
          </a>
          {location && ` - ${location}`}
        </Text>
      </Box>
      <Text fontSize={0}>
        {formattedStartDate}
        {' '}
        -
        {' '}
        {formattedEndDate}
      </Text>
    </Flex>
  );
};

Header.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.oneOf([
    PropTypes.bool, PropTypes.string]).isRequired,
  location: PropTypes.string,
};

Header.defaultProps = {
  location: '',
};

export default Header;
