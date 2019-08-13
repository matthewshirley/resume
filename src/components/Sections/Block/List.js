import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '@mattshirley/design/src/components/Text';
import { Box } from '@mattshirley/design/src/components/Layout/Box';

const List = ({
  highlights,
}) => {
  const listOfHighlights = highlights.map((highlight, index) => (
    <Text key={index} as="li" fontSize={1} my={2}>{highlight}</Text>
  ));

  return (
    <Box as="ul" mt={2}>
      {listOfHighlights}
    </Box>
  );
};

List.propTypes = {
  highlights: [
    PropTypes.string.isRequired,
  ].isRequired,
};

export default List;
