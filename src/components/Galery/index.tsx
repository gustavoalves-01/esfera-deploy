import Image from "next/image";
import React from "react";
import Card from "./Card";
import { Style } from "./style";

export default function Galery() {
    return(
        <Style>
            <Card />
            <Card />
        </Style>
    );
}