import styled from 'styled-components';
import theme from 'theme';

export const Label = styled.label`
  font-size: ${theme.fontSizes.s};
  margin-left: calc(${theme.space[5]} + 5px);
  margin-bottom: ${theme.space[1]};
  color: ${theme.colors.accent};
`;

export const Input = styled.input`
  font-size: ${theme.fontSizes.m};
  margin-left: ${theme.space[3]};
  padding: ${theme.space[3]};
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.primary};

  ::placeholder {
    font-family: ${theme.fonts.body};
    color: ${theme.colors.secondary};
  }
`;
