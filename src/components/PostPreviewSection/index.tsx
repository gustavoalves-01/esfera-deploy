import Link from 'next/link';
import React from 'react';
import PostPreviewInterface, {
  TimeToReadInterface,
} from '../../entities/PostPreview';
import { PostPreview } from '../PostPreview';
import { Container } from './styles';

interface PostPreviewSectionInterface {
  title: string;
  linkAll?: {
    href: string;
    text: string;
  };
  posts: PostPreviewInterface[];
}

export function PostPreviewSection({
  title,
  linkAll,
  posts,
}: PostPreviewSectionInterface) {
  return (
    <Container>
      <div className="header">
        <h2 className="titleBlog">{title}</h2>
        {linkAll && (
          <Link href={linkAll.href} passHref>
            <a>{linkAll.text}</a>
          </Link>
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
}
