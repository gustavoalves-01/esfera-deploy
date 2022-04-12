import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import { Container } from './styles';


interface PropsListComment {
    imageUrl: string;
    name: string;
    date: string;
    depoiment: string;
}
function ListComment({ imageUrl, name, date, depoiment }: PropsListComment) {
    return (
        <Container>
            <div className="perfil">
                <Image width={46} height={46} src={imageUrl} alt={name} />
                <div>
                    <h4>Célio Nunes</h4>
                    <span>{date}</span>
                </div>
            </div>

            <div>
                <p>{depoiment}</p>
            </div>
        </Container>
    )
}

export default ListComment
