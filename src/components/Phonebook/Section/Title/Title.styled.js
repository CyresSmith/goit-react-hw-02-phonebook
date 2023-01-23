import styled from 'styled-components';
import theme from 'theme';

const Title = styled.h3`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.accent};
  margin-left: ${theme.space[2]};
`;

export default Title;
