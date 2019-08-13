import PropTypes from 'prop-types';

const educationTypes = {
  studyType: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  institution: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default educationTypes;
