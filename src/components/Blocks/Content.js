import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '..';

const Content = ({ summary }) => <Text fontSize={1} m={0}>{summary}</Text>;

Content.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default Content;
