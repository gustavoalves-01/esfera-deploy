import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, TimeSkeleton } from './styles';
import useSWR from 'swr';
import axios from 'axios';

interface Props {
  id: string;
}
interface Response {
  isLoading: boolean;
  isError?: any;
  data?: any;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function ReadingTimeComponent({ id }: Props) {
  const [readingTime, setReadingTime] = useState<Response>({ isLoading: true });
  const readingTimeURL = `/api/reading-time?post=${id}`;

  const { data, error } = useSWR(readingTimeURL, fetcher);

  useEffect(() => {
    if (!error && !data) {
      setReadingTime({ isLoading: true });
    } else if (error) {
      setReadingTime({ isLoading: false, isError: error });
    } else {
      setReadingTime({ isLoading: false, data });
    }
  }, [data, error]);

  return (
    <Container>
      {readingTime.isLoading ? (
        <TimeSkeleton />
      ) : readingTime.isError ? (
        <>
          <h1>Erro</h1>
        </>
      ) : (
        <>
          <Image
            width={15}
            height={15}
            alt="ícone relógio"
            src="/images/icons/time.svg"
          />
          <span>Tempo de leitura: {readingTime.data.time} minutos</span>
        </>
      )}
    </Container>
  );
}
