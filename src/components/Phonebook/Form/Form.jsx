import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { IoIosCall, IoMdPerson, IoMdPersonAdd } from 'react-icons/io';
import { PhonebookForm as Form, Input, Label, Error } from './Form.styled';
import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import theme from 'theme';
import { array } from 'prop-types';
import { boolean } from 'yup/lib/locale';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .lowercase()
    .trim()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .lowercase()
    .trim()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Number is not valid')
    .required('Required'),
});

const AddContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        tel: '',
      }}
      validationSchema={ValidationSchema}
      onSubmit={({ firstName, lastName, tel }, { resetForm }) => {
        const name = (firstName, lastName) => {
          if (lastName) {
            return firstName.trim() + ' ' + lastName.trim();
          }
          return firstName;
        };

        const contact = {
          id: nanoid(),
          name: name(firstName, lastName),
          number: tel.trim(),
        };

        onAddContact(contact);
        resetForm();
      }}
    >
      <Form>
        <Box mb={theme.space[4]}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Label htmlFor="firstName">First Name</Label>
            <Box display="flex" alignItems="center" mb={theme.space[5]}>
              <IoMdPerson size={34} color={theme.colors.accent} />
              <Box position="relative">
                <Input id="firstName" name="firstName" placeholder="Name" />
                <ErrorMessage name="firstName" component={Error} />
              </Box>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Label htmlFor="lastName">Last Name</Label>
            <Box display="flex" alignItems="center" mb={theme.space[5]}>
              <IoMdPerson size={34} color={theme.colors.accent} />
              <Box position="relative">
                <Input id="lastName" name="lastName" placeholder="Last name" />
                <ErrorMessage name="lastName" component={Error} />
              </Box>
            </Box>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Label htmlFor="tel">Phone</Label>
            <Box display="flex" alignItems="center" mb={theme.space[5]}>
              <IoIosCall size={34} color={theme.colors.accent} />
              <Box position="relative">
                <Input
                  id="tel"
                  name="tel"
                  placeholder="000000000000"
                  type="tel"
                />
                <ErrorMessage name="tel" component={Error} />
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          type="submit"
          icon={IoMdPersonAdd}
          disabled={false}
          children="Add contact"
          iconSize={20}
          //   onClick=""
        ></Button>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
