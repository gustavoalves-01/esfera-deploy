import React from 'react'
import { Container } from './styles';

interface PropsIntermision {
    title: string;
    subtitle: string;
    buttonText: string;
}
function Intermision({ title, subtitle, buttonText }: PropsIntermision) {
    return (
        <Container>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>

            <button>{buttonText}</button>
        </Container>
    )
}

export default Intermision
