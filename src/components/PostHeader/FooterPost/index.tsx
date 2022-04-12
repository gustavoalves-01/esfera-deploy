import React from "react";
import InfosPostComponent from "../../InfosPostComponent";
import ShareComponent from "../../ShareComponent";
import { Style } from "./style";

interface Props {
    name: string,
    date: string,
    time: number,
    imgUrl: string,
    postUrl: string,
}

export default function FooterPost({name, date, time, imgUrl, postUrl}: Props) {
    return(
        <Style>
            <InfosPostComponent 
                authorName={name} 
                date={date}
                time={time}
                profileImg={imgUrl}
            />
            <ShareComponent url={postUrl}/>
        </Style>
    );
}