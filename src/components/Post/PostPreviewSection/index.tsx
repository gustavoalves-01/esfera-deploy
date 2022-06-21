import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PostPreviewInterface } from '../../../entities/Post';

import PostPreview from './PostPreview';
import { Container } from './styles';

interface PostPreviewSectionInterface {
  title: string;
  linkAll?: {
    href: string;
    text: string;
  };
  posts: PostPreviewInterface[];
  isMobile?: boolean;
}

const PostPreviewSection = ({
  title,
  linkAll,
  posts,
  isMobile,
}: PostPreviewSectionInterface) => {
  return (
    <Container isMobile={isMobile}>
      {linkAll ? (
        <>
          <div className="header desktop">
            <h2 className="titleBlog">{title}</h2>
            <Link href={linkAll.href} passHref>
              <a>{linkAll.text}<div><Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" /></div></a>
            </Link>
          </div>

          <div className="header mobile">
            <Link href={linkAll.href} passHref>
              <h2 className="titleBlog">{title}</h2>
            </Link>
          </div>
        </>
      ) : (
        <div className="header">
          <h2 className="titleBlog">{title}</h2>
        </div>
      )}
      <div className="cardsWrapper">
        {posts.length > 0 &&
          posts.map((post) =>
            post.highlight ? (
              <PostPreview key={post.id} post={post} isWide />
            ) : (
              <PostPreview key={post.id} post={post} />
            )
          )}
      </div>
    </Container>
  );
};

export default PostPreviewSection;
