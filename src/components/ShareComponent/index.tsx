import Image from "next/image";
import React from "react";
import { LogosStyle, Style, TextStyle } from "./styles";

interface Props {
    url: string,
}

export default function ShareComponent({url}:Props) {
    return(
        <Style>
            <TextStyle>Compartilhe esse post:</TextStyle>
            
            <LogosStyle>
                <div onClick={() => window.location.href=`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
                    <Image src="/images/icons/facebook-logo.svg" alt="facebook" layout="fill"/>
                </div>
                <div onClick={() => window.location.href=`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
                    <Image src="/images/icons/linkedin-logo.svg" alt="linkedin" layout="fill"/>
                </div>
                <div onClick={() => window.location.href=`href="https://twitter.com/intent/tweet?text=${url}`}>
                    <Image src="/images/icons/twitter-logo.svg" alt="twitter" layout="fill"/>
                </div>
            </LogosStyle>
        </Style>
    );
}