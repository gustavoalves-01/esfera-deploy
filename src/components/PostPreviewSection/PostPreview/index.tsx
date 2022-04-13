// Framework
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import TagCategory from '../../TagCategory';

// Styles
import { PostContainer } from './styles';
import { PostPreviewInterface } from '../../../entities/Post';
import ReadingTimeComponent from '../../ReadingTimeComponent';

interface PostPreviewProps {
  post: PostPreviewInterface;
  isWide?: boolean;
}

const PostPreview = ({ post, isWide }: PostPreviewProps) => {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <PostContainer isWide={isWide}>
        <div className="postHeader mobile">
          <TagCategory categoryName={post.categories[0]} />
          <span className="postDate">{post.date}</span>
        </div>
        <div className="imageWrapper">
          <Image
            src={post.imageURL}
            alt=""
            layout="fill"
            className="postImage"
          />
        </div>
        <div className="contentWrapper">
          {isWide && (
            <div className="postHeader wide">
              <TagCategory categoryName={post.categories[0]} />
              <span className="postDate">{post.date}</span>
            </div>
          )}

          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>

          <ReadingTimeComponent postSlug={post.slug} />
        </div>
      </PostContainer>
    </Link>
  );
};

export default PostPreview;
