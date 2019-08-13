import React from 'react';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

import educationTypes from '../../types/education';

import Header from './Block/Header';
import Content from './Block/Content';

/**
 * Block to display order and display a persons
 * Education history.
 *
 * @param {Object} props
 * @param {String} props.studyType
 * @param {String} props.area
 * @param {String} props.institution
 * @param {String} props.startDate
 * @param {String} props.endDate
 * @param {String} props.courses
 */
const Education = ({ education }) => education.map((study, index) => {
  const {
    studyType, area, institution, startDate, endDate, courses,
  } = study;
  const award = `${studyType} of ${area}`;

  return (
    <Box key={index} mb={5}>
      <Header
        position={award}
        company={institution}
        startDate={startDate}
        endDate={endDate}
      />
      <Content summary={courses} />
    </Box>
  );
});

Education.propTypes = {
  ...educationTypes,
};

export default Education;
