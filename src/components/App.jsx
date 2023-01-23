import { Component } from 'react';
import Phonebook from './Phonebook';
import Box from './shared/Box';

class App extends Component {
  state = {};

  render() {
    return (
      <Box variant="container">
        <Phonebook />
      </Box>
    );
  }
}

export default App;
