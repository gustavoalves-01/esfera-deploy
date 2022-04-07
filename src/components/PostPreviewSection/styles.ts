import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 60px;
  gap: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--pink-500);
      font-size: 14px;
      text-decoration: underline;
    }
  }

  .cardsWrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 990px) {
    &:first-of-type {
      margin: 14px 0 0;
    }

    margin: 40px 0 0;

    .header {
      justify-content: center;
    }
  }
`;
