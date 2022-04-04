import Image from "next/image";
import React from "react";
import { CardStyle, Filter, Legend } from "./style";

interface CardProps {
    imgUrl?: string,
    text?: string,
}

export default function Card({imgUrl, text} : CardProps) {
    if(!imgUrl) {
        return (
            <CardStyle>
                <Filter>
                    <Legend> Imagem indisponível. </Legend>
                </Filter>
            </CardStyle>
        )
    } else {
        return (
            <CardStyle>
                <Image src={imgUrl} 
                    alt="imagem ilustrativa" 
                    width="11.75rem" 
                    height="15.875rem" 
                    layout="fill"/>
                <Filter>
                    <Legend>{text}</Legend>
                </Filter>
            </CardStyle>
        );

    }

}