import styled from 'styled-components'

interface PropsLabel {
    widthInput: string;
    heightInput: string;

}
export const LabelElement = styled.label<PropsLabel>`
  cursor: pointer;

  input{
   background: #FFFFFF;
    border: 1px solid #F5426C;
    box-sizing: border-box;
    border-radius: 5px;

    width: ${(props) => props.widthInput};
    height: ${(props) => props.heightInput};
    
    padding-left: 16px;

    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;

    color: #4F5150;
    font-family: "Nexa", "Open Sans", sans-serif;

    &::placeholder{
          color: #4F5150;
          font-weight: 300;

    }

    outline-color:  #F5426C;
  }
`