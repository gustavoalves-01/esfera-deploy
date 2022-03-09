import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
    textButton: string;
    widthButton: string;
    heightButton: string;
    backgroundButton?: string;
    radius?: number;
}

import { ButtonElement } from "./styled"

function Button({ textButton, widthButton, heightButton, backgroundButton, radius}: ButtonProps) {
    return (
        <ButtonElement buttonHeight={heightButton} buttonBackground={backgroundButton} buttonWidth={widthButton} buttonRadius={radius}>{textButton}</ButtonElement>
    )
}

export default Button


