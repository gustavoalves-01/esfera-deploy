import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, TimeSkeleton } from './styles';
import { useFetch } from '../../hooks/useFetch';

interface Props {
  post: string;
}

export default function ReadingTimeComponent({ post }: Props) {
  const { data, isLoading, isError } = useFetch(
    `http://localhost:3000/api/wp/posts/${post}/reading-time`
  );

  return (
    <Container>
      {isLoading ? (
        <TimeSkeleton />
      ) : isError ? (
        <></>
      ) : (
        <>
          <Image
            width={15}
            height={15}
            alt="ícone relógio"
            src="/images/icons/time.svg"
          />
          <span>Tempo de leitura: {data.time} minutos</span>
        </>
      )}
    </Container>
  );
}
