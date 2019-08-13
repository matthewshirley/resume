import React from 'react';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

import workTypes from '../../types/work';

import Header from './Block/Header';
import Content from './Block/Content';

/**
 * Block to display order and display a persons
 * work and experience history.
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
    <Content
      summary={entry.summary}
      highlights={entry.highlights}
    />
  </Box>
));

Experience.propTypes = {
  ...workTypes,
};

export default Experience;
