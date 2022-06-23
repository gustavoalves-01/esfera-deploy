import styled from 'styled-components';

export const MaterialsConatainer = styled.div`
  display: grid;
  max-width: calc(1115px + 4rem);
  margin: 42px auto 0;
  padding: 100px 2rem 0;
  column-gap: 4rem;
  grid-template-columns: auto 255px;
  margin-bottom: 20px;
  padding-bottom: 0;
  
  h1.pageTitle {
    grid-column: 1/2;
    margin-top: 5rem;
    line-height: 44px;
    color: var(--gray-500);

    b {
      color: var(--pink-500);
      font-weight: 700;
    }
  }

  main {
    grid-column: 1/2;
  }

  aside {
    grid-column: 2/3;
    grid-row: 3/4;
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

    h1.pageTitle {
      margin: 1rem 0 1.5rem;
      font-size: 20px;
      line-height: 27px;
      text-align: center;
    }

    aside {
      display: none;
    }
  }
`;
