import styled from 'styled-components';

interface PropsLabel {
  widthInput: string;
  heightInput: string;
}
export const LabelElement = styled.label<PropsLabel>`
  position: relative;
  cursor: pointer;
  input {
    background: #ffffff;
    border: 1px solid #f5426c;
    box-sizing: border-box;
    border-radius: 5px;

    width: ${(props) => props.widthInput};
    height: ${(props) => props.heightInput};

    padding-left: 16px;

    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;

    color: #4f5150;
    font-family: 'Open Sans';

    transition: 0.2s;
    &:hover {
      border: 1px solid #f8b3c5;
    }

    &::placeholder {
      color: #4f5150;
      font-weight: 300;
    }

    outline-color: #f5426c;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }

  &:hover span {
    background: #f8b3c5;
  }

  > span {
    transition: 0.2s;
    position: absolute;

    right: 0px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: #f5426c;
    height: ${(props) => props.heightInput};
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    top: 50%;
    transform: translateY(-50%);
  }
`;
