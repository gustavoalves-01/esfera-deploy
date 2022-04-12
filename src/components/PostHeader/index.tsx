import Image from "next/image";
import React from "react";
import TagCategory from "../TagCategory";
import FooterPost from "./FooterPost";
import { ImgWrapper, Style, TextContent, TitleStyle } from "./style";

interface Props {
    title: string,
    imgUrl: string,
    tagName: string,
    tagLink?: string,
    name: string,
    date: string,
    time: number,
    profileImg: string,
    postUrl: string,
}

export default function PostHeader({imgUrl, tagName, title, name, date, time, profileImg, postUrl} : Props) {
    return(
        <Style>
            <ImgWrapper>
                <Image 
                    src={imgUrl}
                    alt="Imagem do post"
                    layout="fill"
                />
                <TextContent>
                    <TagCategory categoryName={tagName} />
                    <TitleStyle>
                        {title}
                    </TitleStyle>
                </TextContent>
            </ImgWrapper>
            <FooterPost name={name} date={date} time={time} imgUrl={profileImg} postUrl={postUrl}/>
        </Style>
    );
}