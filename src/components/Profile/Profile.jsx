import PropTypes from 'prop-types';
import {
  StatQuantity,
  StatLabel,
  ProfileStats,
  ProfileLocation,
  ProfileTag,
  ProfileName,
  Description,
  ProfileAvatar,
  ProfileCard,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileCard>
      <Description>
        <ProfileAvatar src={avatar} alt="User avatar"></ProfileAvatar>
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <ProfileStats>
        <li>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </li>
        <li>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </li>
        <li>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </li>
      </ProfileStats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
