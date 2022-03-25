import React from "react";
import Image from 'next/image';
import { Style, Text } from "./style";
 
interface Props {
    wordsNumber: number;
}

export default function ReadingTimeComponent({wordsNumber}: Props) {
    return <Style>
        <Image width={15} height={15} alt="ícone relógio" src="/images/icons/time.svg"/>

        <Text>Tempo de leitura: {wordsNumber} minutos</Text>
    </Style>
}