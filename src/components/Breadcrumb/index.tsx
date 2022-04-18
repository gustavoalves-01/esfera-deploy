import Image from 'next/image'
import Link from 'next/link';
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
            <p>
                <Link href="/">Pagina Inicial</Link>
                &gt;<a href="#">{section ? section : null}</a>
                <a href="">{category ? `${category}` : null}</a>
                {titleArticle ? ` > ${titleArticle}` : null}
            </p>
        </BreadcrumbContainer>
    )
}

export default Breadcrumb
