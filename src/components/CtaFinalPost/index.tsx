import Image from 'next/image';
import React from 'react'
import { Container, MaxContainer, WrapperDepoimento, WrapperImg, WrapperText } from './styles';
interface PropsCtaFinalProps {
    title: string;
    subtitle: string;
    textButton: string;

    photoUrl: string;
    depoiment: string;

}
function CtaFinalPost({ title, subtitle, textButton, photoUrl, depoiment }: PropsCtaFinalProps) {
    return (
        <Container>
            <MaxContainer>
                <WrapperText>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <button>{textButton}</button>
                </WrapperText>

                <WrapperDepoimento>
                    <WrapperImg>
                        <Image src={photoUrl} alt="Person photo" width="115" height="115" />
                    </WrapperImg>
                    <p>{depoiment}</p>
                </WrapperDepoimento>
            </MaxContainer>
        </Container>
    )
}

export default CtaFinalPost

