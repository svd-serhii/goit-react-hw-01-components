import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendsListItem/FriendListItem';
import { ListFriends } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ListFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
