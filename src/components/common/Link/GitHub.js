import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const GitHubLink = ({ github }) => {
  if (!github) return (null);

  return (
    <Text as="a" href={`https://github.com/${github}`} m={0}>{`https://github.com/${github}`}</Text>
  );
};

GitHubLink.propTypes = {
  github: PropTypes.string,
};

GitHubLink.defaultProps = {
  github: null,
};

export default GitHubLink;
