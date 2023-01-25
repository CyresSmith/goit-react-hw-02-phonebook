import {
  ContactsList,
  Contact,
  Name,
  Phone,
  DeletBtn,
} from './Contacts.styled';
import { IoMdPerson, IoIosCall } from 'react-icons/io';
import { MdPersonRemoveAlt1 } from 'react-icons/md';

import Box from 'components/shared/Box';
import theme from 'theme';

const Contacts = ({ contacts, onRemove }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact key={id}>
            <Box>
              <Box display="flex" alignItems="center">
                <IoMdPerson size={20} color={theme.colors.secondary} />
                <Name>{name}</Name>
              </Box>
              <Box display="flex" alignItems="center">
                <IoIosCall size={20} color={theme.colors.secondary} />
                <Phone>{number}</Phone>
              </Box>
            </Box>

            <DeletBtn onClick={() => onRemove(id)}>
              <MdPersonRemoveAlt1 size={20} color={theme.colors.white} />
            </DeletBtn>
          </Contact>
        );
      })}
    </ContactsList>
  );
};

export default Contacts;
