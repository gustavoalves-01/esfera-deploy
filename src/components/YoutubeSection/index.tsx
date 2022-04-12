import React from 'react'
import YoutubeItem from '../YoutubeItem';
import { Container, WrapperVideos } from './styles';


interface PropsVideosYoutube {
    videosInfos: {
        imageUrl: string;
        title: string;
        link: string;
    }[]
}


function YoutubeSection({ videosInfos }: PropsVideosYoutube) {
    return (
        <Container>
            <h2>Esfera no Youtube</h2>

            <WrapperVideos>
                {videosInfos.map((infoVideo) => {
                    return (
                        <YoutubeItem key={infoVideo.title} imageUrl={infoVideo.imageUrl} link={infoVideo.link} title={infoVideo.title} />
                    )
                })}
            </WrapperVideos>
        </Container>
    )
}

export default YoutubeSection

