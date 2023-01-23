import { PropTypes } from 'prop-types';
import { StyledButton, ButtonText } from './Button.styled';

const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
  iconSize,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon size={iconSize} />}
      <ButtonText isIconThere={Icon}>{children}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

export default Button;
