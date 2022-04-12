import Image from "next/image";
import React from "react";
import { Author, ImgWrapper, Style, InfosWrapper, Time, Date } from "./style";

interface Props {
    profileImg: string,
    authorName: string,
    date: string,
    time: number,
}

export default function InfosPostComponent({profileImg = "/images/deletar2.png", authorName, date, time} : Props) {
    return(
        <Style>
            
            <ImgWrapper>
                <Image src={profileImg} layout="fill" alt="autor"/>
            </ImgWrapper>
            
            <InfosWrapper>
                <Author>
                    {authorName}
                </Author>
                <Date>
                    {date}
                </Date>
                <Time>
                    {time} min de leitura
                </Time>
            </InfosWrapper>
        </Style>
    );
}