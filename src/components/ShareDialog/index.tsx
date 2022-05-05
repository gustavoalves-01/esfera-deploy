import Image from "next/image";
import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import { Style } from "./styles";

interface ShareContainerProps {
    slug: string;
}

export default function ShareDialog({ slug }: ShareContainerProps) {
    const postURL = `https://esferaenergia.com.br/blog/${slug}`;
    return(
        <div>
            <RWebShare
                data={{
                url: postURL,
                title: "Compartilhar",
                }}
                onClick={() => console.log("shared successfully!")}
            >
            <Style>
                Compartilhar
                <div className="share-icon">
                    <Image 
                        src="/images/icons/share-icon.svg"
                        alt="compartilhar"
                        layout="fill" 
                    />
                </div>
            </Style>
            </RWebShare>
        </div>
    );
}