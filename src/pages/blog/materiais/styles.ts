import styled from 'styled-components';

export const MaterialsConatainer = styled.div`
  display: grid;
  max-width: calc(1115px + 4rem);
  margin: 42px auto 0;
  padding: 100px 2rem 0;
  column-gap: 2rem;
  grid-template-columns: auto 255px;

  main {
    grid-column: 1/2;
    h1 {
      margin: 5rem 0 3rem;
      line-height: 44px;
      color: var(--gray-500);

      b {
        color: var(--pink-500);
        font-weight: 700;
      }
    }
  }
`;
