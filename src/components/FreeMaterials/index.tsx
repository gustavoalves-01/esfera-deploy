import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Images, ImageWrapper, RedFilter, Style, Title } from './style';

interface Props {
  materials: Array<{
    imgUrl: string;
    href: string;
  }>;
}

export default function FreeMaterials({ materials }: Props) {
  return (
    <Style>
      <Title>Materiais gratuitos para te ajudar:</Title>
      <Images>
        {materials.map((material, index) => (
          <Link
            key={`${Math.floor(1000 + Math.random() * 9000)}${material.href}`}
            href={material.href}
            passHref
          >
            <ImageWrapper key={index}>
              <RedFilter />
              <Image
                layout="fill"
                src={material.imgUrl}
                alt={`Material ${index}`}
              />
            </ImageWrapper>
          </Link>
        ))}
      </Images>
    </Style>
  );
}
