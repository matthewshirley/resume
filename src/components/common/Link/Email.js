import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const EmailLink = ({ emailAddress }) => {
  if (!emailAddress) return (null);

  return (
    <Text as="a" href={`mailto:${emailAddress}`} m={0}>{emailAddress}</Text>
  );
};

EmailLink.propTypes = {
  emailAddress: PropTypes.string,
};

EmailLink.defaultProps = {
  emailAddress: null,
};

export default EmailLink;
