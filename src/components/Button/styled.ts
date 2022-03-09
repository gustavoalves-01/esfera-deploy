import styled from "styled-components";

interface ButtonElementProps {
    buttonWidth: string;
    buttonHeight: string;
    buttonBackground?: string;
    buttonRadius?: number;
}
export const ButtonElement = styled.button<ButtonElementProps>`
    cursor: pointer;

    width: ${(props) => props.buttonWidth};
    height: ${(props) => props.buttonHeight};

    background: ${(props) => props.buttonBackground ? props.buttonBackground : '#F5426C'};
    border: 1px solid ${(props) => props.buttonBackground !== "#F5426C" ? props.buttonBackground : '#F5426C'};;
    border-radius: ${(props) => props.buttonRadius ? `${props.buttonRadius}px` : '5px'};

    color: #FFFFFF;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-family: "Open Sans", sans-serif;
    transition: all .3s ease;
    &:hover{
        background: #fff;
        color:${(props) => props.buttonBackground ? props.buttonBackground : '#F5426C'};
    }
`

