import styled from 'styled-components';
import {
  flex,
  alignSelf,
  textAlign,
  fontSize,
  space,
  color,
  height,
  width,
  minWidth,
  maxWidth,
  minHeight,
} from 'styled-system';

export const border = props => props.border && {
  borderRadius: props.theme.radius,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: `${props.theme.colors.gray4}`,
};

export const borderBottom = props => props.borderBottom && {
  borderBottom: `solid ${props.theme.colors.gray4} 1px`,
};

const Box = styled.div`
    box-sizing: 'border-box';
    ${flex}
    ${alignSelf}
    ${width}
    ${minWidth}
    ${maxWidth}
    ${height}
    ${minHeight}
    ${space}
    ${fontSize}
    ${color}
    ${textAlign}
    ${border}
    ${borderBottom}
`;

// Attributes
// TODO: Review whether this is needed since https://www.styled-components.com/docs/api#as-polymorphic-prop does not specify
Box.header = styled(Box).attrs({ as: 'header' })``;
Box.main = styled(Box).attrs({ as: 'main' })``;
Box.article = styled(Box).attrs({ as: 'article' })``;
Box.section = styled(Box).attrs({ as: 'section' })``;
Box.footer = styled(Box).attrs({ as: 'footer' })``;

// Default Props
Box.defaultProps = {};

// Prop Types
Box.propTypes = {
  ...textAlign.propTypes,
  ...fontSize.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...minHeight.propTypes,
  ...height.propTypes,
};

export default Box;
