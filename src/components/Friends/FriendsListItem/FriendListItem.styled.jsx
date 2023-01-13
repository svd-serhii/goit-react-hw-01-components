import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 250px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px 4px 4px 4px;
  padding: 5px 5px 5px 10px;
  box-sizing: border-box;
  transition: scale 300ms ease-in-out;

  :not(:last-child) {
    margin-bottom: 10px;
  }
  :hover {
    scale: 1.2;
    cursor: pointer;
  }
`;

export const FriendName = styled.p`
  margin-left: 20px;
`;

export const FriendStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${({ status }) => {
    switch (status) {
      case 'isOnline':
        return 'green';
      case 'offLine':
        return 'red';
      default:
        return 'grey';
    }
  }};
`;

export const FriendAvatar = styled.img``;
