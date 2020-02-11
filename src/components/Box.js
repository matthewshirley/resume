import styled from 'styled-components';
import {
  space,
  color,
  height,
  width,
  maxWidth,
  minHeight,
} from 'styled-system';

export const borderBottom = props => props.borderBottom && {
  borderBottom: `solid ${props.theme.colors.gray2} 1px`,
};

const Box = styled.div`
    box-sizing: 'border-box';
    ${width}
    ${maxWidth}
    ${space}
    ${color}
    ${borderBottom}
`;

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...minHeight.propTypes,
  ...height.propTypes,
};

export default Box;
