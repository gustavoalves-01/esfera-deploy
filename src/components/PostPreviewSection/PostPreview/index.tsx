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
import { RWebShare } from 'react-web-share';
import { useRouter } from 'next/router';

interface PostPreviewProps {
  post: PostPreviewInterface;
  isWide?: boolean;
}

const PostPreview = ({ post, isWide }: PostPreviewProps) => {
  const router = useRouter();

  const shareData = {
    title: post.title,
    text: post.excerpt,
    url: `http://localhost:3000/blog/${post.slug}`,
  };

  const handleSelectPost = () => {
    router.push(`/blog/${post.slug}`);
  };

  const handleShare = (e: React.MouseEvent) => {
    //
  };

  return (
    <PostContainer isWide={isWide} onClick={handleSelectPost}>
      <div className="postHeader mobile">
        <TagCategory categoryName={post.categories[0]} />
        <span className="postDate">{post.date}</span>
      </div>
      <div className="imageWrapper">
        <Image src={post.imageURL} alt="" layout="fill" className="postImage" />
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

        <div className="postFooter">
          <ReadingTimeComponent postSlug={post.slug} />

          <span className="shareBtn" onClick={handleShare}>
            Compartilhar
            <Image
              src="/images/icons/share-icon.svg"
              alt=""
              width="12px"
              height="12px"
            />
          </span>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostPreview;
