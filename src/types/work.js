import PropTypes from 'prop-types';

const workTypes = {
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
}.isRequired;

export default workTypes;
