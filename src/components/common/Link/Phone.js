import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const PhoneLink = ({ phoneNumber }) => {
  if (!phoneNumber) return (null);

  return (
    <Text as="a" href={`tel:${phoneNumber}`} m={0}>{phoneNumber}</Text>
  );
};

PhoneLink.propTypes = {
  phoneNumber: PropTypes.string,
};

PhoneLink.defaultProps = {
  phoneNumber: null,
};

export default PhoneLink;
