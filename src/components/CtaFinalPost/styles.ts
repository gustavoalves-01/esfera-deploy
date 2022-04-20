import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  font-family: 'Open Sans';
  padding: 56px 0;
  margin: 40px 0;

  @media (max-width: 1100px) {
    padding: 40px 32px;
  }
`;

export const WrapperDepoimento = styled.div`
  width: 30%;
  text-align: center;
  margin-left: 36px;

  @media (max-width: 1100px) {
    margin-left: 0px;
    width: 100%;
  }
`;
export const WrapperText = styled.div`
  width: 70%;
  h3 {
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    margin-bottom: 16px;
    font-family: 'Open Sans';
  }

  h4 {
    margin-bottom: 32px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    font-family: 'Open Sans';
  }

  button {
    background: #f5426c;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    border-radius: 5px;
    height: 44px;
    width: 100%;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
    border: 1px solid transparent;
    &:hover {
      background: transparent;
      color: #f5426c;
      border: 1px solid #f5426c;
    }
  }

  @media (max-width: 1100px) {
    button {
      margin-bottom: 24px;
      height: auto;
      padding: 8px 0;
    }
    width: 100%;
  }
`;

export const WrapperImg = styled.div``;

export const MaxContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
