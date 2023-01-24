import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Button from 'components/shared/Button';
import Box from 'components/shared/Box';
import theme from 'theme';
import Section from './Section';
import { PhonebookForm as Form, Input, Label, Error } from './Phonebook.styled';
import Contacts from './Contacts';
import Filter from './Contacts/Filter';
import {
  IoIosCall,
  IoMdPerson,
  IoMdPersonAdd,
  IoIosContacts,
} from 'react-icons/io';

import { RiContactsBook2Fill } from 'react-icons/ri';

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

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase().trim() });
  };

  removeContact = e => {
    const removedContactId = e.currentTarget.id;

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== removedContactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = (value, contacts) => {
      if (value) {
        const filtered = contacts.filter(contact =>
          contact.name.toLowerCase().includes(value)
        );
        if (filtered.length === 0) {
          Notify.failure('No contacts with this name', {
            showOnlyTheLastOne: true,
            position: 'right-bottom',
          });
        } else {
          return filtered;
        }
      }
      return this.state.contacts;
    };

    return (
      <>
        <Section title="Phonebook" Icon={IoIosContacts}>
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

              const { contacts } = this.state;
              const normalizedName = contact.name.toLowerCase();

              const exists = contacts.filter(({ name }) => {
                return name.toLowerCase().trim() === normalizedName;
              });

              if (exists.length > 0) {
                Notify.failure(`${contact.name} already in contacts`, {
                  showOnlyTheLastOne: true,
                  position: 'right-bottom',
                });
              } else {
                resetForm();
                this.setState(({ contacts }) => {
                  return contacts.push(contact);
                });
              }
            }}
          >
            <Form>
              <Box mb={theme.space[4]}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Label htmlFor="firstName">First Name</Label>
                  <Box display="flex" alignItems="center" mb={theme.space[5]}>
                    <IoMdPerson size={34} color={theme.colors.accent} />
                    <Box position="relative">
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Name"
                      />
                      <ErrorMessage name="firstName" component={Error} />
                    </Box>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Label htmlFor="lastName">Last Name</Label>
                  <Box display="flex" alignItems="center" mb={theme.space[5]}>
                    <IoMdPerson size={34} color={theme.colors.accent} />
                    <Box position="relative">
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                      />
                      <ErrorMessage name="lastName" component={Error} />
                    </Box>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
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
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts" Icon={RiContactsBook2Fill}>
            {this.state.contacts.length > 1 && (
              <Filter onChange={this.changeFilter} />
            )}
            <Contacts
              contacts={filteredContacts(filter, contacts)}
              onRemove={this.removeContact}
            ></Contacts>
          </Section>
        )}
      </>
    );
  }
}

export default Phonebook;
