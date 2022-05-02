import React from 'react';
import Image from 'next/image';
import TagCategory from '../../TagCategory';
import PostHeaderCaption from './PostHeaderCaption';
import { Container } from './styles';

interface PostHeaderProps {
  post: {
    bgUrl: string;
    categories: Array<string>;
    title: string;
    author: { name?: string; photo?: string };
    createdAt: string;
    id: string;
    slug: string;
    timeToRead: number;
  };
}

export default function PostHeader({ post }: PostHeaderProps) {
  return (
    <Container>
      <div className="postHero">
        <div className="heroImgWrapper">
          <Image src={post.bgUrl} alt="Imagem do post" layout="fill" />
        </div>
        <div className="textWrapper">
          {post.categories.map((category) => {
            return <TagCategory key={category} categoryName={category} />;
          })}
          <h1>{post.title}</h1>
        </div>
      </div>
      <PostHeaderCaption post={post} />
    </Container>
  );
}
