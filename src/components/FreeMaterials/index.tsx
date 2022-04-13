import Image from "next/image";
import React from "react";
import { Images, ImageWrapper, RedFilter, Title } from "./style";

interface Props {
    urls: string[];
}

export default function FreeMaterials({urls}: Props) {
    return (
        <div>
            <Title>Materiais gratuitos para te ajudar:</Title>
            <Images>
                {urls.map((url, index) => (
                    <ImageWrapper key={index}>
                        <RedFilter />
                        <Image layout="fill" src={url} alt={`Material ${index}`}/>
                    </ImageWrapper>
                ))}
            </Images>
        </div>
    );
}