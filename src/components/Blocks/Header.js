import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from '..';

// eslint-disable-next-line react/prop-types
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

// eslint-disable-next-line
const renderPositionData = ({ company, position, website, location }) => (
  <Box>
    <Text fontSize={1} m={0} mr={1} bold>
      {position}
    </Text>
    <Text as="small" fontSize={0} m={0}>
      {renderCompany({ website, company })}
      {location && ` - ${location}`}
    </Text>
  </Box>
);

// eslint-disable-next-line react/prop-types
const renderDates = ({ startDate, endDate }) => {
  const isPresent = endDate === false || endDate === 'Jan 1900'; // TODO: Multiple GraphQL types?
  const formattedEndDate = isPresent ? 'Present' : endDate;

  return (
    <Text fontSize={0} m={0}>
      {`${startDate} - ${formattedEndDate}`}
    </Text>
  );
};

const Header = ({
  company, position, website, location, startDate, endDate,
}) => (
  <Flex justifyContent="space-between" mb={2}>
    {renderPositionData({
      company, position, website, location,
    })}
    {renderDates({ startDate, endDate })}
  </Flex>
);

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
