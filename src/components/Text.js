import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  fontSize,
  fontWeight,
  textAlign,
  space,
  color,
  borderBottom,
  borderColor,
} from 'styled-system';

export const caps = props => props.caps && { textTransform: 'uppercase' };
export const bold = props => props.bold && { fontWeight: 'bold' };

const Text = styled.p`
        ${space};
        ${fontSize};
        ${color};        
        ${caps};
        ${textAlign};
        ${bold};
        ${fontWeight};
        ${borderBottom};
    `;

const H1 = styled.h1`
        ${fontSize};
        ${space};
        ${color};        
        ${caps};
        ${textAlign};
        ${bold};
        ${fontWeight};
        ${borderBottom};
        ${borderColor};
    `;

Text.displayName = 'Text';
Text.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  maxWidth: PropTypes.number,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...borderBottom.propTypes,
  ...borderColor.propTypes,
};

H1.defaultProps = {
  fontSize: 0,
};

H1.propTypes = {
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  maxWidth: PropTypes.number,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...borderBottom.propTypes,
  ...borderColor.propTypes,
};

H1.defaultProps = {
  fontSize: 7,
  color: 'black',
  bold: true,
  caps: true,
};

Text.span = styled(Text).attrs({ as: 'span' })``;
Text.p = styled(Text).attrs({ as: 'p' })``;
Text.s = styled(Text).attrs({ as: 's' })``;
Text.label = styled(Text).attrs({ as: 'label' })``;

export default Text;
