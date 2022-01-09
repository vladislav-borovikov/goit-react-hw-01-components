import React from "react";
import PropTypes from "prop-types";
import icon from "../../assets/166494-igra_v_kalmara_squid_game-500x.jpg";
import {
  ProfileContainer,
  ImegProfil,
  ProfileStats,
  StatItem,
} from "./Profile.styled";

const Profile = (props) => {
  const { username, tag, location, stats, avatar } = props.data;
  return (
    <>
      <ProfileContainer className="profile">
        <div className="description">
          <ImegProfil
            src={avatar ? avatar : icon}
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ProfileStats className="stats">
          <StatItem>
            <span className="label">Followers</span>
            <span className="quantity">{stats.followers}</span>
          </StatItem>
          <StatItem>
            <span className="label">Views</span>
            <span className="quantity">{stats.views}</span>
          </StatItem>
          <StatItem>
            <span className="label">Likes</span>
            <span className="quantity">{stats.likes}</span>
          </StatItem>
        </ProfileStats>
      </ProfileContainer>
    </>
  );
};

export default Profile;

Profile.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
