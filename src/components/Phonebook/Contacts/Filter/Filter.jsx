import { Label, Input } from './Filter.styled';
import Box from 'components/shared/Box';
import theme from 'theme';
import { ImFilter } from 'react-icons/im';

const Filter = ({ onChange }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flrx-start"
      mb={theme.space[6]}
    >
      <Label htmlFor="filter">Contacts filter</Label>

      <Box display="flex" alignItems="center">
        <ImFilter size={30} color={theme.colors.accent} />
        <Input
          type="text"
          id="filter"
          name="filter"
          placeholder="Contact name"
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default Filter;
