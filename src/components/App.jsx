import { Component } from 'react';
import Box from './shared/Box';
import Section from './shared/Section/Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCollect = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = { total: good + neutral + bad };
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback().total;
    const positive = ((good / total) * 100).toFixed(2);
    const PositiveFeedbackPercentage = {
      positive: positive + '%',
    };
    return PositiveFeedbackPercentage;
  }

  render() {
    const statTypesArr = Object.keys(this.state);
    const statDataObj = Object.assign(
      {},
      this.state,
      this.countTotalFeedback(),
      this.countPositiveFeedbackPercentage()
    );

    return (
      <Box variant="container">
        <Section title="Pleas Leave Feedback">
          <FeedbackOptions
            statTypesArr={statTypesArr}
            onClick={this.feedbackCollect}
          />
        </Section>

        <Section title="Statistic">
          <Statistics statDataObj={statDataObj} />
        </Section>
      </Box>
    );
  }
}

export default App;
