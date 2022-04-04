import React from "react";
import { CardStyle, Legend } from "./style";

interface CardProps {
    imgUrl: string,
    text: string,
}

export default function Card({imgUrl, text} : CardProps) {
    return (
        <CardStyle imgUrl={imgUrl}>
            <Legend>{text}</Legend>
        </CardStyle>
    );
}