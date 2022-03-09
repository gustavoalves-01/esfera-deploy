import React from 'react'
import { Container, LinkCategory } from "./style"

interface PropsTagCategory {
    categoryName: string;

    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;

    marginAll?: number;

    link?: string;
}


function TagCategory({ categoryName, marginTop, marginBottom, marginRight, marginLeft, link, marginAll }: PropsTagCategory) {
    if (link !== undefined) {
        return (
            <LinkCategory
                marginTop={marginTop}
                marginBottom={marginBottom}
                marginRight={marginRight}
                marginLeft={marginLeft}
                marginAll={marginAll}
                href={link}>
                {categoryName}
            </LinkCategory>
        )
    } else {
        return (
            <Container
                marginTop={marginTop}
                marginBottom={marginBottom}
                marginRight={marginRight}
                marginLeft={marginLeft}
                marginAll={marginAll}
            >

                <span>{categoryName}</span>
            </Container>
        )
    }
}

export default TagCategory


