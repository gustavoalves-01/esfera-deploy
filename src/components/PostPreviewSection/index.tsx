import Link from 'next/link';
import React from 'react';
import { PostPreviewInterface } from '../../entities/Post';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import PostPreview from './PostPreview';
import { Container } from './styles';

interface PostPreviewSectionInterface {
  title: string;
  linkAll?: {
    href: string;
    text: string;
  };
  posts: PostPreviewInterface[];
}

const PostPreviewSection = ({
  title,
  linkAll,
  posts,
}: PostPreviewSectionInterface) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <div className="header">
        {linkAll ? (
          width >= 990 ? (
            <>
              <h2 className="titleBlog">{title}</h2>
              <Link href={linkAll.href} passHref>
                <a>{linkAll.text}</a>
              </Link>
            </>
          ) : (
            <Link href={linkAll.href} passHref>
              <h2 className="titleBlog">{title}</h2>
            </Link>
          )
        ) : (
          <h2 className="titleBlog">{title}</h2>
        )}
      </div>
      <div className="cardsWrapper">
        {posts.length > 0 &&
          posts.map((post) =>
            post.tags.includes('3') ? (
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
