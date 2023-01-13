import {
  FriendAvatar,
  FriendName,
  FriendStatus,
  ListItem,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem key={id}>
      <FriendStatus status={isOnline ? 'isOnline' : 'offLine'}></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" width="48"></FriendAvatar>
      <FriendName>{name}</FriendName>
    </ListItem>
  );
};
