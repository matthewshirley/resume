import styled from 'styled-components';
import Text from './Text';

const Heading = styled(Text)``;

Heading.defaultProps = {
  m: 0,
  as: 'h1',
  color: 'primary',
  fontSize: 5,
  caps: true,
  bold: true,
};

export default Heading;
