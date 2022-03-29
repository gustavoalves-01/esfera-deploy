// Framework
import React from 'react';
import Image from 'next/image';

// Components
import TagCategory from '../TagCategory';

// Styles
import { PostContainer } from './styles';
import PostPreviewInterface from '../../entities/PostPreview';
import ReadingTimeComponent from '../ReadingTimeComponent';

interface PostPreviewProps {
  post: PostPreviewInterface;
  isWide?: boolean;
}

export function PostPreview({ post, isWide }: PostPreviewProps) {
  return (
    <PostContainer isWide={isWide}>
      {!isWide && (
        <div className="postHeader">
          <TagCategory categoryName={post.categories[0]} />
          <span className="postDate">{post.date}</span>
        </div>
      )}
      <div className="imageWrapper">
        <Image src={post.imageURL} alt="" layout="fill" className="postImage" />
      </div>
      <div className="contentWrapper">
        {isWide && (
          <>
            <TagCategory categoryName={post.categories[0]} />
            <span className="postDate">{post.date}</span>
          </>
        )}
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <ReadingTimeComponent post={post.id} />
      </div>
    </PostContainer>
  );
}
