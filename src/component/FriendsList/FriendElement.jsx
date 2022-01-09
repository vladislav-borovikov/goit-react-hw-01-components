import React from "react";
import PropTypes from "prop-types";
import { FriendItem, FriendName, FriendOnline } from "./FriendList.styled";

const FriendElement = ({ data }) => {
  const { avatar, name, isOnline } = data;
  return (
    <FriendItem className="item">
      <FriendOnline className="status">{isOnline ? "♥" : "☠"}</FriendOnline>
      <img className="avatarr" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};

export default FriendElement;

FriendElement.propTypes = {
  data: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
