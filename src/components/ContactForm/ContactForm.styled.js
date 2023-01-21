import styled from 'styled-components';
import theme from 'theme';
import { Form, Field, ErrorMessage } from 'formik';
import Box from 'components/shared/Box';

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

export const FormFieldLabel = styled.label`
  font-size: ${theme.fontSizes.m};
  margin-bottom: ${theme.space[3]};
  color: ${theme.colors.accent};
`;

export const FormFieldInput = styled(Field)`
  font-size: ${theme.fontSizes.m};
  padding: ${theme.space[3]};
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.primary};

  :not(#tel) {
    margin-bottom: ${theme.space[4]};
  }
`;

export const FormFieldBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
