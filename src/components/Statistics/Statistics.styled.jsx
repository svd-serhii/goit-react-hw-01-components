import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 30px;
  margin: 0 auto;
  width: 450px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 4px 4px 4px 4px;
`;

export const SectionTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  margin-bottom: 40px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  color: #fff;
  background-color: ${({ id }) => {
    switch (id) {
      case 'id-1':
        return 'rgb(112, 68, 68)';
      case 'id-2':
        return 'rgb(60, 62, 179)';
      case 'id-3':
        return 'rgb(190, 79, 79)';
      case 'id-4':
        return 'rgb(33, 82, 84)';
      case 'id-5':
        return 'rgb(93, 181, 181)';
      default:
        return 'grey';
    }
  }};
`;

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

export const StatPercentage = styled.span`
  font-size: 18px;
  font-weight: 400;
`;
