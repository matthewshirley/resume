import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

import workTypes from '../../types/work';

import Header from './Block/Header';
import Content from './Block/Content';
import List from './Block/List';

/**
 * Block to display work experience.
 *
 * @param {Object} props
 * @param {Object} props.company
 * @param {Object} props.position
 * @param {Object} props.location
 * @param {Object} props.website
 * @param {Object} props.startDate
 * @param {Object} props.endDate
 * @param {Object} props.summary
 * @param {Object} props.highlights
 */
const Experience = ({ work }) => work.map((entry, index) => (
  <Box key={index} mb={5}>
    <Header
      company={entry.company}
      position={entry.position}
      location={entry.location}
      website={entry.website}
      startDate={entry.startDate}
      endDate={entry.endDate}
    />
    {entry.summary && <Content summary={entry.summary} />}
    {entry.highlights && <List highlights={entry.highlights} />}
  </Box>
));

Experience.propTypes = {
  work: PropTypes.arrayOf(
    PropTypes.shape({
      ...workTypes,
    }),
  ),
};

export default Experience;
