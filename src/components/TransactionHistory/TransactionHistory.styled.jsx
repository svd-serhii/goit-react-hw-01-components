import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Thead = styled.thead`
  th {
    border: 1px gray solid;
    padding: 5px 0;
    text-align: center;
    color: #fff;
    background-color: #6392d4;
  }
`;

export const Tbody = styled.tbody`
  border: 1px gray solid;
  td {
    width: 150px;
    text-align: center;
    padding: 5px 0;
    border: 1px gray solid;
  }
  tr {
    border: 1px gray solid;
    :nth-of-type(even) {
      background-color: #e6e6e6;
    }
  }
`;
