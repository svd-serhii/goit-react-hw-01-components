import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  margin: 0 auto;
  width: 320px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px 4px 4px 4px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding-top: 50px;
  margin-bottom: 30px;
`;

export const ProfileAvatar = styled.img`
  display: block;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  margin-bottom: 30px;
`;

export const ProfileName = styled.p`
  margin: 0 0 10px 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  color: black;
`;

export const ProfileTag = styled.p`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 400;
  color: grey;
`;

export const ProfileLocation = styled.p`
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: 700;
  color: grey;
`;

export const ProfileStats = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  background-color: rgb(244, 241, 241);
  li {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.5px solid rgb(223, 219, 219);
    padding: 20px 30px;
  }
`;

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: grey;
  margin-bottom: 5px;
`;

export const StatQuantity = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: black;
`;
