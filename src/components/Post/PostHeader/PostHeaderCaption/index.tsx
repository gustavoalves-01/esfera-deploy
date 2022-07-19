import React from 'react';
import Image from 'next/image';
import ShareContainer from './ShareContainer';
import { Container } from './styles';
import Link from 'next/link';

interface PostHeaderCaptionProps {
  post: {
    author: { name?: string; photo?: string };
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
          {post.author.photo ? (
            <div className="authorProfile rounded">
              <Image src={post.author.photo} layout="fill" alt="" />
            </div>
          ) : (
            <div className="authorProfile">
              <Image src={'/images/icons/redacao.png'} layout="fill" alt="" />
            </div>
          )}
        </Link>

        <div className="postInfo">
          <span className="author">{post.author.name}</span>
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
