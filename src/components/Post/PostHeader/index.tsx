import React from 'react';
import Image from 'next/image';
import TagCategory from '../../TagCategory';
import PostHeaderCaption from './PostHeaderCaption';
import { Container } from './styles';
import { CategoryInterface } from '../../../entities/Category';
import { IAuthor } from '../../../entities/Post';

interface PostHeaderProps {
  post: {
    bgUrl: string;
    categories: Array<CategoryInterface>;
    title: string;
    createdAt: string;
    id: string;
    slug: string;
    timeToRead: number;
  };
  author: IAuthor | undefined;
}

export default function PostHeader({ post, author }: PostHeaderProps) {

  const postCaption = {
    author: {
      name: author?.name || 'Redação',
      photo: author?.photo || undefined,
    },
    createdAt: post.createdAt,
    id: post.id,
    slug: post.slug,
    timeToRead: post.timeToRead
  }


  return (
    <Container>
      <div className="postHero">
        <div className="heroImgWrapper">
          <Image src={post.bgUrl} alt="Imagem do post" layout="fill" />
        </div>
        <div className="textWrapper">
          {post.categories.map((category) => {
            return <TagCategory key={category.slug} categoryName={category.name} />;
          })}
          <h1>{post.title}</h1>
        </div>
      </div>
      <PostHeaderCaption post={postCaption} />
    </Container >
  );
}
