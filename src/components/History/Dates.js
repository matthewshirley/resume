import React from 'react';
import PropTypes from 'prop-types';

import Text from '../common/Text';

const Dates = ({ startDate, endDate }) => {
  if (!startDate && !endDate) return (null);

  const isPresent = !endDate || endDate === 'Jan 1900'; // TODO: Multiple GraphQL types?
  const formattedEndDate = isPresent ? 'Present' : endDate;

  return (
    <Text m={0}>
      {`${startDate} - ${formattedEndDate}`}
    </Text>
  );
};

Dates.propTypes = {
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};

Dates.defaultProps = {
  startDate: null,
  endDate: null,
};

export default Dates;
