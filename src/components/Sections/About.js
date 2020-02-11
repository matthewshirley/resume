import React from 'react';
import PropTypes from 'prop-types';

import Content from '../Blocks/Content';

/**
 * Simple container to display a line of text
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
