import NotificationMessage from './NotificationMessage.styled';
import Box from 'components/shared/Box';
import theme from 'theme';
import { PropTypes } from 'prop-types';

const Notification = ({ message }) => {
  return (
    <Box
      p={theme.space[4]}
      borderRadius={theme.radii.normal}
      backgroundColor={theme.colors.primary}
      boxShadow={theme.shadow.high}
    >
      <NotificationMessage>{message}</NotificationMessage>
    </Box>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
