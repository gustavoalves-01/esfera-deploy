import { GetStaticPaths, GetStaticProps } from 'next/types';
import { useEffect, useState } from 'react';
import { FullPostInterface } from '../../../entities/Post';
import { api } from '../../../services/api';
import { Container } from './styles';
import slugify from 'slugify';
import React from 'react';

interface PostPageProps {
  post: FullPostInterface;
}

const Post = ({ post }: PostPageProps) => {
  const [content, setContent] = useState<string>('');

  // Limpando HTML do Elementor
  useEffect(() => {
    const element = document.createElement('div');
    element.innerHTML = post.content;
    const titles = element.querySelectorAll('h2');

    titles.forEach((title) => {
      const slug = slugify(title.innerText, { lower: true });
      title.parentElement?.nextElementSibling?.insertAdjacentElement(
        'afterbegin',
        title
      );
      title.parentElement?.setAttribute('id', slug);
    });

    element.querySelectorAll('section').forEach((el) => {
      el.childElementCount === 0 && el.remove();
    });

    setContent(element.innerHTML);
  }, [post.content]);

  return (
    <Container>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const post = await (await api.get(`posts/${slug}`)).data;

  return {
    props: { post },
  };
};
