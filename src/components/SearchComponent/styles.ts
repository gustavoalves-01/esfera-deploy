import styled from 'styled-components'

interface PropsLabel {
  widthInput: string;
  heightInput: string;

}
export const LabelElement = styled.label<PropsLabel>`
  position: relative;
  cursor: pointer;
  input{
   background: #FFFFFF;
    border: 1px solid #F5426C;
    box-sizing: border-box;
    border-radius: 5px;

    width: ${(props) => props.widthInput};
    height: ${(props) => props.heightInput};
    
    padding-left: 40px;

    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;

    color: #4F5150;
    font-family: "Open Sans";

    &::placeholder{
          color: #4F5150;
          font-weight: 300;

    }

    outline-color:  #F5426C;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
}

  }

  > span{
    position: absolute;
    transform: translateY(-50%);
    top: 60%;
    left: 16px;
  }
`