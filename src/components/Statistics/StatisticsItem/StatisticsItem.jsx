import { PropTypes } from 'prop-types';

const StatisticsItem = ({ type, votes }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{votes}</td>
    </tr>
  );
};

StatisticsItem.propTypes = {
  type: PropTypes.string.isRequired,
  votes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StatisticsItem;
