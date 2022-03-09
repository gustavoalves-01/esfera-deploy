import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    textButton: string
    widthButton: string;
    heightButton: string;
}
function Button({ textButton, widthButton, heightButton }: ButtonProps) {
    return (
        <ButtonElement buttonHeight={heightButton} buttonWidth={widthButton}>{textButton}</ButtonElement>
    )
}

export default Button


interface ButtonElementProps {
    buttonWidth: string;
    buttonHeight: string;
}
export const ButtonElement = styled.button<ButtonElementProps>`
    cursor: pointer;

    width: ${(props) => props.buttonWidth};
    height: ${(props) => props.buttonHeight};

    background: #F5426C;
    border: 1px solid #F5426C;
    border-radius: 5px;

    color: #FFFFFF;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    font-family: "Open Sans", sans-serif;
    transition: all .3s ease;
    &:hover{
        background: #fff;
        color:#F5426C;
    }
`

