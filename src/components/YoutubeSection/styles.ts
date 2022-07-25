import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: space-between;
  overflow-x: hidden;
  grid-column: 1/3;

  h2 {
    font-family: "Nexa", "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #f5426c;
    margin-bottom: 24px;
  }
  @media (max-width: 1274px) {
    padding: 0 1rem;
  }
  @media (max-width: 1100px) {
    h2 {
      text-align: center;
    }
  }
  @media (max-width: 990px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 20px;
    }
  }
`;

export const WrapperVideos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1100px) {
    justify-content: center;
  }

  @media (max-width: 990px) {
    overflow-x: hidden;
    flex-wrap: wrap;
  }
`;
