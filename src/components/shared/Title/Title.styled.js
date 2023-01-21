import styled from 'styled-components';
import theme from 'theme';

const Title = styled.h3`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.accent};
  margin-bottom: ${theme.space[4]};
  margin-left: auto;
  margin-right: auto;
`;

export default Title;
