import React from 'react'
import Image from "next/image"
import styled from 'styled-components'
import { Container, ContainerComment } from './styles'
function Comments() {
    return (
        <Container>
            <h3>Deixe um comentário:</h3>

            <ContainerComment>
                <span className="imagemComment">
                    <Image
                        width={46}
                        height={46}
                        src="/images/personComments.png"
                        alt="personComments"
                    />
                </span>

                <div>
                    <textarea name="" id="" placeholder="Escreva seu comentário...."></textarea>
                    <button>Enviar</button>
                </div>
            </ContainerComment>
        </Container>
    )
}

export default Comments

