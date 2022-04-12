import React from 'react';
import Image from 'next/image';
import ShareContainer from './ShareContainer';
import { Container } from './styles';
import { useFetch } from '../../../hooks/useFetch';
import Link from 'next/link';
import { TimeSkeleton } from '../../ReadingTimeComponent/styles';

interface PostHeaderCaptionProps {
  post: {
    author: string;
    createdAt: string;
    id: string;
    slug: string;
    timeToRead: number;
  };
}

export default function PostHeaderCaption({ post }: PostHeaderCaptionProps) {
  return (
    <Container>
      <div className="postContent">
        <Link href={'#'} passHref>
          <div className="authorProfile">
            <Image src={'/images/profile_default.png'} layout="fill" alt="" />
          </div>
        </Link>

        <div className="postInfo">
          <span className="author">{post.author}</span>
          <span className="date">
            {new Date(post.createdAt).toLocaleDateString('pt-BR')}
          </span>
          <span className="timeToRead">{post.timeToRead} min de leitura</span>
        </div>
      </div>
      <ShareContainer slug={post.slug} />
    </Container>
  );
}
