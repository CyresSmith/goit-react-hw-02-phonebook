import styled from 'styled-components';
import theme from 'theme';

const NotificationMessage = styled.p`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.secondary};
  margin-left: auto;
  margin-right: auto;
`;

export default NotificationMessage;
