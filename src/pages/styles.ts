import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: calc(1115px + 4rem);
  margin: 42px auto 0;
  padding: 0 2rem;
  column-gap: 2rem;
  grid-template-columns: auto 255px;

  .containerHeader {
    display: flex;
    justify-content: space-between;
    grid-column: 1/3;

    label {
      min-width: 255px;

      input {
        width: 100%;
      }
    }
  }

  main {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  aside {
    grid-column: 2/3;
    grid-row: 2/3;
  }

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-top: 0;
    padding-top: 70px;

    .containerHeader {
      display: none;
    }

    aside,
    > label {
      display: none;
    }
  }
`;
