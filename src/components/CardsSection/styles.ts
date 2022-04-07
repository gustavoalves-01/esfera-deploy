import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 60px;
  gap: 21px;

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
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    gap: 1.5rem;
  }

  @media (max-width: 990px) {
    .header {
      justify-content: center;
    }

    .cardsContainer {
      padding-bottom: 254px;
    }

    .cardsWrapper {
      width: auto;
      padding-right: 1rem;
    }

    .cardsViewport {
      overflow-x: scroll;
      position: absolute;
      width: calc(100vw - 1rem);
    }
  }
`;
