import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;

  .postHero {
    width: 100%;
    padding-top: 2.5rem;
    position: relative;

    .heroImgWrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      img {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
      }
    }

    &::after {
      content: '';
      background: linear-gradient(
        15deg,
        rgba(24, 24, 24, 0.9) 15%,
        rgba(24, 24, 24, 0.3) 50%
      );
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .textWrapper {
      display: flex;
      flex-direction: column;
      max-width: 85%;
      width: 100%;
      height: 100%;
      justify-content: end;
      padding: 40px;
      position: relative;
      z-index: 1;

      h1 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 3.5625rem;
        color: #ffffff;
        text-shadow: 2px 2px 7px rgba(245, 66, 108, 0.3);
        margin-top: 1.1rem;
      }
    }
  }

  @media (max-width: 990px) {
    .postHero {
      padding-top: 3rem;
      .textWrapper {
        width: auto;
        padding: 1.5rem;
        max-width: 100%;

        h1 {
          font-size: 2rem;
          line-height: 2.2rem;
        }
      }
    }
  }
`;
