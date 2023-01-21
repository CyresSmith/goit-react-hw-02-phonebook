import { PropTypes } from 'prop-types';
import { StyledButton, ButtonText } from './Button.styled';

const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
  iconSize,
  onClick,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      onClick={() => {
        onClick(children);
      }}
    >
      {Icon && <Icon size={iconSize} />}
      <ButtonText isIconThere={Icon}>{children}</ButtonText>
    </StyledButton>
  );
};

Button.propTypes = {
  icon: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.func,
  children: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
};

export default Button;
