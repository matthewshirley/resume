import styled from 'styled-components';
import {
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
} from 'styled-system';
import Box from './Box';

const Flex = styled(Box)`
    display: flex;
    ${flexWrap}
    ${flexDirection}
    ${alignItems}
    ${justifyContent}
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexDirection.propTypes,
};

export default Flex;
