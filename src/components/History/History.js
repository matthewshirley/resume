import React from 'react';
import PropTypes from 'prop-types';

import Box from '../common/Box';
import Text from '../common/Text';
import Block from '../common/Block';
import Flexbox from '../common/Flexbox';

import List from './List';
import Dates from './Dates';
import Header from './Header';

import workTypes from '../../types/work';
import educationTypes from '../../types/education';

const History = ({ title, history, skipBorder }) => {
  if (!history || history.length === 0) return (null);

  const listToRender = history.map((entry, index) => {
    const {
      company,
      position,
      location,
      website,
      startDate,
      endDate,
      summary,
      highlights,
      institution,
      area,
      studyType,
    } = entry;

    const isLastElement = index === (history.length - 1);

    return (
      <Box paddingBottom={4} borderBottom={!skipBorder && isLastElement}>
        <Flexbox justifyContent="space-between" marginBottom={3}>
          <Header position={position || `${studyType} of ${area}`} company={company || institution} location={location} website={website} />
          <Dates startDate={startDate} endDate={endDate} />
        </Flexbox>
        {summary && <Text m={0}>{summary}</Text>}
        {highlights && <List highlights={highlights} />}
      </Box>
    );
  });

  return (
    <Block title={title}>
      {listToRender}
    </Block>
  );
};

History.propTypes = {
  title: PropTypes.string.isRequired,
  skipBorder: PropTypes.bool,
  history: PropTypes.arrayOf(
    PropTypes.shape({ ...workTypes }),
    PropTypes.shape({ ...educationTypes }),
  ),
};

History.defaultProps = {
  history: [],
  skipBorder: false,
};

export default History;
