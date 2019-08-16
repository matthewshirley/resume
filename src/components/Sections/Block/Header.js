import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from '@mattshirley/design';

const renderCompany = ({ website, company }) => {
  if (website) {
    return (
      <a href={website} target="_blank" rel="noopener noreferrer">
        {company}
      </a>
    );
  }

  return (company);
};

const Header = ({
  company, position, website, location, startDate, endDate,
}) => {
  const isPresent = endDate === false || endDate === 'Jan 1900'; // TODO: Multiple GraphQL types?
  const formattedEndDate = isPresent ? 'Present' : endDate;

  return (
    <Flex justifyContent="space-between" mb={2}>
      <Box>
        <Text fontSize={1} m={0} bold>
          {position}
        </Text>
        <Text as="small" fontSize={0} m={0}>
          {renderCompany({ website, company })}
          {location && ` - ${location}`}
        </Text>
      </Box>
      <Text fontSize={0} m={0}>
        {`${startDate} - ${formattedEndDate}`}
      </Text>
    </Flex>
  );
};

Header.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  location: PropTypes.string,
  website: PropTypes.string,
};

Header.defaultProps = {
  location: '',
  website: '',
};

export default Header;
