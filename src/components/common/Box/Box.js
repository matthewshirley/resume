import styled from 'styled-components';
import {
  color, grid, layout, space, flexbox, typography,
} from 'styled-system';

const borderBottom = props => props.borderBottom && {
  borderBottom: `solid ${props.theme.colors.gray2} 1px`,
};

const Box = styled.div`
    ${color}
    ${layout}
    ${grid}
    ${space}
    ${flexbox}
    ${typography}
    ${borderBottom}
`;

Box.propTypes = {
  ...layout.propTypes,
};

export default Box;
