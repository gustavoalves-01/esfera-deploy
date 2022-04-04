import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: 1115px;
  margin: 0 auto;
  column-gap: 2rem;
  grid-template-columns: auto 255px;
  margin-top: 42px;

  main {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  aside {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;
