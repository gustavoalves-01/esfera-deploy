import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;

  .postHero {
    width: 100%;
    height: 376px;
    position: relative;

    .textWrapper {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 37rem;
      height: 100%;
      justify-content: end;
      padding: 0 0 40px 40px;

      @media (max-width: 990px) {
        width: auto;
        padding: 0 51px 24px 24px;
      }

      h1 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 2.625rem;
        line-height: 3.5625rem;
        color: #ffffff;
        text-shadow: 2px 2px 7px rgba(245, 66, 108, 0.3);
        margin-top: 1.1rem;

        @media (max-width: 990px) {
          font-size: 2rem;
          line-height: 2.2rem;
        }
      }
    }
  }
`;
