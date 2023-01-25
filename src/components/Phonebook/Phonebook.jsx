import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Section from './Section';
import AddContactForm from './Form';
import Contacts from './Contacts';
import Filter from './Contacts/Filter';
import { IoIosContacts } from 'react-icons/io';
import { RiContactsBook2Fill } from 'react-icons/ri';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const { contacts } = this.state;
    const normalizedName = contact.name.toLowerCase();

    const dublicate = contacts.find(
      ({ name }) => name.toLowerCase().trim() === normalizedName
    );
    if (dublicate) {
      Notify.failure(`${contact.name} already in contacts`, {
        showOnlyTheLastOne: true,
        position: 'right-bottom',
      });
    } else {
      this.setState(({ contacts }) => {
        return contacts.push(contact);
      });
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase().trim() });
  };

  removeContact = removedContactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== removedContactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, changeFilter, removeContact } = this;

    const filteredContacts = (value, contacts) => {
      if (value) {
        const filteredContacts = contacts.filter(({ name }) =>
          name.toLowerCase().includes(value)
        );
        if (filteredContacts.length === 0) {
          Notify.failure('No contacts with this name', {
            showOnlyTheLastOne: true,
            position: 'right-bottom',
          });
        } else {
          return filteredContacts;
        }
      }
      return contacts;
    };

    return (
      <>
        <Section title="Phonebook" Icon={IoIosContacts}>
          <AddContactForm onAddContact={addContact} />
        </Section>
        {contacts.length > 0 && (
          <Section title="Contacts" Icon={RiContactsBook2Fill}>
            {contacts.length > 1 && <Filter onChange={changeFilter} />}
            <Contacts
              contacts={filteredContacts(filter, contacts)}
              onRemove={removeContact}
            ></Contacts>
          </Section>
        )}
      </>
    );
  }
}

export default Phonebook;
