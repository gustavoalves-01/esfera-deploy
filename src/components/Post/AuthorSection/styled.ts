import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  max-width: 920px;
  margin: 0 auto;
  gap: 1rem 2rem;
  padding: 2rem;
  border: 1px solid rgba(24, 24, 24, 1);

  .profilePicWrapper {
    position: relative;
    width: 100%;
    height: 90px;

    grid-row: 1/4;
    grid-column: 1/2;

    img {
      transform: scale(1.1);
    }
  }

  .authorHeader {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    span {
      font-size: 14px;
      line-height: 19px;
    }
    h1 {
      font-size: 18px;
      line-height: 25px;
    }
  }

  .linksSection {
    display: flex;
    grid-column: 2/3;
    margin-top: 1rem;
    gap: 0.5rem;
    height: 1rem;

    .socialIcon {
      height: 100%;
      width: 1rem;
      position: relative;
    }
  }

  @media (max-width: 990px) {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 0 1.5rem;

    .profilePicWrapper {
      width: 54px;
      height: 54px;
    }

    .authorHeader {
      h1 {
        font-size: 20px;
      }
    }

    p {
      font-size: 14px;
    }

    .linksSection {
      margin-top: 0;
    }
  }
`;
