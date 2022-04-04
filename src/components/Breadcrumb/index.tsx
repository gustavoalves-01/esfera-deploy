import Image from 'next/image'
import React from 'react'
import { WrapperImage, BreadcrumbContainer } from './styles';

interface BreadcrumbProps {
    section?: string;
    category?: string;
    titleArticle?: string;
}
function Breadcrumb({ section, category, titleArticle }: BreadcrumbProps) {
    return (
        <BreadcrumbContainer>
            <WrapperImage>
                <Image layout='fill' src="/images/icons/home.svg" alt="Icone de casa" />
            </WrapperImage>
            Pagina Inicial
            {section ? ` > ${section}` : null}
            {category ? ` > ${category}` : null}
            {titleArticle ? ` > ${titleArticle}` : null}
        </BreadcrumbContainer>
    )
}

export default Breadcrumb