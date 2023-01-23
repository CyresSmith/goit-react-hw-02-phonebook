import styled from 'styled-components';
import theme from 'theme';
import { Form, Field } from 'formik';

export const PhonebookForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 200px;
`;

export const Label = styled.label`
  font-size: ${theme.fontSizes.s};
  margin-left: calc(${theme.space[5]} + 10px);
  margin-bottom: ${theme.space[1]};
  color: ${theme.colors.accent};
`;

export const Input = styled(Field)`
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

export const Error = styled.p`
  display: inline;
  position: absolute;
  top: calc(${theme.space[3]} + 34px);
  right: 0;
  font-size: ${theme.fontSizes.m};
  color: red;
`;
