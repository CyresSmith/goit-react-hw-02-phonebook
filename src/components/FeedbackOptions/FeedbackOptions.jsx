import { List, Item } from './FeedbackOptions.styled';
import Button from 'components/shared/Button';
import { FaThumbsUp, FaThumbsDown, FaMeh } from 'react-icons/fa';
import { PropTypes } from 'prop-types';

const FeedbackOptions = ({ statTypesArr, onClick }) => {
  const iconsArr = [];
  iconsArr.splice(0, 0, FaThumbsUp, FaMeh, FaThumbsDown);

  const ButtonsPropsArr = (statTypesArr, iconsArr) => {
    let ButtonsPropsArr = [];
    for (var i = 0; i < statTypesArr.length; i++) {
      ButtonsPropsArr.push({
        type: statTypesArr[i],
        icon: iconsArr[i],
      });
    }
    return ButtonsPropsArr;
  };

  return (
    <List>
      {ButtonsPropsArr(statTypesArr, iconsArr).map(prop => {
        const { type, icon } = prop;

        return (
          <Item key={type}>
            <Button
              icon={icon}
              children={type}
              iconSize={18}
              onClick={onClick}
            ></Button>
          </Item>
        );
      })}
    </List>
  );
};

FeedbackOptions.propTypes = {
  statTypesArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
