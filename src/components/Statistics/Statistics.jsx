import StatTable from './Statistics.styled';
import StatisticsItem from './StatisticsItem';
import Notification from './Notification';
import { PropTypes } from 'prop-types';

const Statistics = ({ statDataObj }) => {
  const { total } = statDataObj;

  if (!total) {
    return <Notification message="There is no feedback" />;
  } else {
    const statOptionsArr = Object.keys(statDataObj);
    return (
      <StatTable>
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {statOptionsArr.map(key => {
            const votes = statDataObj[key];
            return <StatisticsItem key={key} type={key} votes={votes} />;
          })}
        </tbody>
      </StatTable>
    );
  }
};

Statistics.propTypes = {
  statDataObj: PropTypes.shape({
    optionalProperty: PropTypes.string,
  }),
};

export default Statistics;
