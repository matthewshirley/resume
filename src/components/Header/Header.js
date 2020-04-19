import React from 'react';
import PropTypes from 'prop-types';

import Flexbox from '../common/Flexbox';
import { Heading } from '../common/Text';
import { EmailLink, PhoneLink } from '../common/Link';

const Header = ({ name, email, phone }) => (
  <Flexbox as="header" gridArea="header" justifyContent="space-between" mb={{ sm: 5, lg: 6, print: 6 }} flexDirection={{ sm: 'column', lg: 'row', print: 'row' }}>
    <Heading>{name}</Heading>

    {(email || phone) && (
    <Flexbox flexDirection="column" textAlign={{ sm: 'left', lg: 'right', print: 'right' }}>
      <EmailLink emailAddress={email} />
      <PhoneLink phoneNumber={phone} />
    </Flexbox>
    )}
  </Flexbox>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
};

Header.defaultProps = {
  email: null,
  phone: null,
};

export default Header;
