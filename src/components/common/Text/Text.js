import styled from 'styled-components';
import {
  space, color, typography, flexbox,
} from 'styled-system';

export const caps = props => props.caps && { textTransform: 'uppercase' };
export const bold = props => props.bold && { fontWeight: 'bold' };

const Text = styled.p`
  ${color}
  ${space}
  ${flexbox}
  ${typography}
  ${caps}
  ${bold}
`;

Text.defaultProps = {
  fontSize: 0,
};

export default Text;
