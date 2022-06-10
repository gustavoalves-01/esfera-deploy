import styled from 'styled-components';

export const Container = styled.a`
  width: 396px;
  margin-bottom: 24px;
  .titleVideo {
    display: flex;
    align-items: center;
  }
  h4 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #030303;
    margin-left: 24px;
  }

  @media (max-width: 1100px) {
    margin-right: 24px;
  }
  @media (max-width: 768px) {
    h4 {
      width: 100%;
      font-size: 16px;
    }
    margin-right: 0px;
  }
`;

export const WrapperImage = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 396px;
  width: 100%;
  height: 216px;
  margin-bottom: 16px;

  .overlay {
    width: 100%;
    height: 100%;
    background: #f5426c7d;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  &:hover {
    .overlay {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media (max-width: 768px) {
    height: 196px;
  }
`;
