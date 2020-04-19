import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (children);
};

Link.propTypes = {
  children: PropTypes.element.isRequired,
  website: PropTypes.string,
};

Link.defaultProps = {
  website: null,
};

export default Link;
