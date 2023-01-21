import { Component } from 'react';
import ContactForm from './ContactForm';
import Box from './shared/Box';
import Section from './shared/Section';

class App extends Component {
  state = {};

  render() {
    return (
      <Box variant="container">
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      </Box>
    );
  }
}

export default App;
