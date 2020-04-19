import React from 'react';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Text from '../common/Text';

const List = ({
  highlights,
}) => {
  const listOfHighlights = highlights.map((highlight, index) => (
    <Text key={index} as="li" m={0} my={2}>{highlight}</Text>
  ));

  return (
    <Box as="ul" mt={2} pl={{ sm: '1rem', lg: '2rem', print: '2rem'}}>
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
