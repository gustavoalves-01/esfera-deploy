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
import useWindowDimensions from '../../../hooks/useWindowDimensions';

interface PostPreviewProps {
  post: PostPreviewInterface;
  isWide?: boolean;
}

const PostPreview = ({ post, isWide }: PostPreviewProps) => {
  const { width } = useWindowDimensions();

  return (
    <Link href={post.slug} passHref>
      <PostContainer isWide={isWide}>
        {(!isWide && width <= 650) || width <= 650 ? (
          <div className="postHeader">
            <TagCategory categoryName={post.categories[0]} />
            <span className="postDate">{post.date}</span>
          </div>
        ) : (
          <></>
        )}
        <div className="imageWrapper">
          <Image
            src={post.imageURL}
            alt=""
            layout="fill"
            className="postImage"
          />
        </div>
        <div className="contentWrapper">
          {isWide && width >= 650 && (
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
    </Link>
  );
};

export default PostPreview;
