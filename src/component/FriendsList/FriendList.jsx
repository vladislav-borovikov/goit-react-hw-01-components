import PropTypes from "prop-types";
import FriendElement from "./FriendElement";
import { ListOfFrends } from "./FriendList.styled";

const FriendList = (props) => {
  return (
    <ListOfFrends className="friend-list">
      {props.data.map((el) => (
        <FriendElement data={el} key={el.id} />
      ))}
    </ListOfFrends>
  );
};

export default FriendList;

FriendList.propTypes = {
  el: PropTypes.shape({
    "el.id": PropTypes.number.isRequired,
  }),
};
