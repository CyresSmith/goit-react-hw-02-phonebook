import { Formik } from 'formik';
import {
  ContactForm as Form,
  FormFieldBox,
  FormFieldInput,
  FormFieldLabel,
} from './ContactForm.styled';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import theme from 'theme';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <Box mb={theme.space[5]}>
          <FormFieldBox>
            <FormFieldLabel htmlFor="firstName">First Name</FormFieldLabel>
            <FormFieldInput
              id="firstName"
              name="firstName"
              placeholder="Name"
            />
          </FormFieldBox>

          <FormFieldBox>
            <FormFieldLabel htmlFor="lastName">Last Name</FormFieldLabel>
            <FormFieldInput
              id="lastName"
              name="lastName"
              placeholder="Last name"
            />
          </FormFieldBox>

          <FormFieldBox>
            <FormFieldLabel htmlFor="tel">Phone</FormFieldLabel>
            <FormFieldInput
              id="tel"
              name="tel"
              placeholder="+000000000000"
              type="tel"
            />
          </FormFieldBox>
        </Box>

        <Button
          type="submit"
          Icon="null"
          //   disabled="false"
          children="Add contact"
          //   iconSize="null"
          //   onClick=""
        ></Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
