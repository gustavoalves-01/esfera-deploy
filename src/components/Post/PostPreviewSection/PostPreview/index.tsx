// Framework
import React from 'react';
import Image from 'next/image';

// Components
import TagCategory from '../../../TagCategory';

// Styles
import { PostContainer } from './styles';
import { PostPreviewInterface } from '../../../../entities/Post';
import ReadingTimeComponent from '../../ReadingTimeComponent';
import { useRouter } from 'next/router';
import ShareDialog from '../../../ShareDialog';

interface PostPreviewProps {
  post: PostPreviewInterface;
  isWide?: boolean;
}

const PostPreview = ({ post, isWide }: PostPreviewProps) => {
  const router = useRouter();

  const handleSelectPost = () => {
    router.push(`/${post.categories[0].slug}/${post.slug}`);
  };  

  return (
    <PostContainer isWide={isWide} onClick={handleSelectPost}>
      <div className="postHeader mobile">
        <TagCategory categoryName={post.categories[0].name} />
        <span className="postDate">{post.date}</span>
      </div>
      <div className="imageWrapper">
        <Image src={post.imageURL} alt="" layout="fill" className="postImage" />
      </div>
      <div className="contentWrapper">
        {isWide && (
          <div className="postHeader wide">
            <TagCategory categoryName={post.categories[0].name} />
            <span className="postDate">{post.date}</span>
          </div>
        )}

        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>

        <div className="postFooter">
          <button className='verPost'>Ver post <div><Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" /></div></button>
          <ReadingTimeComponent postSlug={post.slug} />
          <div className="is-mobile">
            <ShareDialog slug={post.slug} />
          </div>
        </div>
      </div>
    </PostContainer>
  );
};

export default PostPreview;
