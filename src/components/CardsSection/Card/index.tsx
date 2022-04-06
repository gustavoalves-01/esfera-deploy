import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { CardInterface } from '../../../entities/Card';

import { Container } from './style';

export default function Card({ imgUrl, text, href }: CardInterface) {
  return (
    <Link href={href} passHref>
      <Container hasText={text ? true : false}>
        <Image
          src={imgUrl}
          layout="fill"
          className="cardBackground"
          alt={text || ''}
        />
        {text && <h2>{text}</h2>}
      </Container>
    </Link>
  );
}
