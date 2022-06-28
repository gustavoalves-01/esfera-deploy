import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useSWR from 'swr';

import { Container, TimeSkeleton } from './styles';

import fetcher from '../../../utils/fetcher';

interface Props {
  id: string;
}

export default function ReadingTimeComponent({ id }: Props) {
  const [readingTime, setReadingTime] = useState<number | null>(null);
  const readingTimeURL = `https://esferaenergia.com.br/wp-json/wp/v2/posts/${id}/?_fields=id,content`;

  const { data } = useSWR(readingTimeURL, fetcher);

  useEffect(() => {
    if (data) {
      const postContentRaw = data.content.rendered;
      const postContent = postContentRaw.replace(
        /<[^>]*>|\n|\r|\t|&\w{2,5};|<div[^>]+>|<\/div>/g,
        ''
      );
      const time = Math.round(postContent.split(' ').length / 150);
      setReadingTime(time);
    }
  
  }, [data]);

  return (
    <Container>
      {!readingTime ? (
        <TimeSkeleton />
      ) : (
        <>
          <Image
            width={15}
            height={15}
            alt="ícone relógio"
            src="/images/icons/time.svg"
          />
          <span>Tempo de leitura: {readingTime} minutos</span>
        </>
      )}
    </Container>
  );
}
