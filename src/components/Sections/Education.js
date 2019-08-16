import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mattshirley/design';

import educationTypes from '../../types/education';

import Header from './Block/Header';
import Content from './Block/Content';

/**
 * Block to display the Education history.
 *
 * @param {Object} props.
 * @param {Object} props.education
 * @param {String} props.education.studyType
 * @param {String} props.education.area
 * @param {String} props.education.institution
 * @param {String} props.education.startDate
 * @param {String} props.education.endDate
 * @param {String} props.education.courses
 */
const Education = ({ education }) => education.map((study, index) => {
  const {
    studyType, area, institution, startDate, endDate, courses,
  } = study;
  const award = `${studyType} of ${area}`;

  return (
    <Box key={index} mb={4}>
      <Header position={award} company={institution} startDate={startDate} endDate={endDate} />
      {courses && <Content summary={courses} />}
    </Box>
  );
});

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      ...educationTypes,
    }),
  ),
};

export default Education;
