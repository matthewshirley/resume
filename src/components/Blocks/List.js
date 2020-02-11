import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from '..';

const List = ({
  highlights,
}) => {
  const listOfHighlights = highlights.map((highlight, index) => (
    <Text key={index} as="li" m={0} my={2} fontSize={1}>{highlight}</Text>
  ));

  return (
    <Box as="ul" mt={2}>
      {listOfHighlights}
    </Box>
  );
};

List.propTypes = {
  highlights: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default List;
