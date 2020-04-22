import React from 'react';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Text from '../common/Text';
import Link from '../common/Link';

const Header = ({
  company, position, location, website,
}) => (
  <Box>
    <Text m={0} mr={1} bold>
      {position}
    </Text>
    <Text as="small" m={0}>
      <Link href={website}>{company}</Link>
      {location && ` - ${location}`}
    </Text>
  </Box>
);

Header.propTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string,
  website: PropTypes.string,
};

Header.defaultProps = {
  location: null,
  website: null,
};

export default Header;
