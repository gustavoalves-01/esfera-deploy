import Image from 'next/image';
import React from 'react'
import { Container, WrapperImage } from './styles';


interface PropsYoutubeItem {
    imageUrl: string;
    title: string;
    link: string
}
function YoutubeItem({ imageUrl, title, link }: PropsYoutubeItem) {
    return (
        <Container href={link} target="_blank">
            
            <WrapperImage>
                <Image src={imageUrl} layout="fill" alt={`Imagem do video ${title}`} />

                <div className="overlay">
                    <Image src="/images/icons/youtube.svg" width={50} height={50} alt="youtube icon" />
                </div>
            </WrapperImage>

            <div className="titleVideo">
                <Image src="/images/logo_mini_esfera.svg" width={51} height={51} alt={`Logo Esfera`} />
                <h4>{title}</h4>
            </div>
        </Container>
    )
}

export default YoutubeItem

