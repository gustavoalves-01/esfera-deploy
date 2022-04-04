import React from "react";
import { CardStyle } from "./style";

interface CardProps {
    imgUrl: string,
}

export default function Card({imgUrl} : CardProps) {
    return (
        <CardStyle imgUrl={imgUrl}/>
    );
}