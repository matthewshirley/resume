import React from 'react';
import PropTypes from 'prop-types';

import Content from './Block/Content';

/**
 * A simple container for the 'About' section.
 *
 * @param {Object} props
 * @param {String} props.summary
 */
const About = ({ summary }) => (
  <Content summary={summary} />
);

About.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default About;
