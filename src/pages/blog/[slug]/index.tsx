import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import slugify from 'slugify';

import { api } from '../../../services/api';

import Breadcrumb from '../../../components/Breadcrumb';
import SearchComponent from '../../../components/SearchComponent';

import { Container } from './styles';

import {
  FullPostInterface,
  PostShortcutsInterface,
} from '../../../entities/Post';
import PostShortcuts from '../../../components/PostShortcuts';

interface PostPageProps {
  post: FullPostInterface;
}

const Post = ({ post }: PostPageProps) => {
  const [content, setContent] = useState<string>('');
  const [sections, setSections] = useState<PostShortcutsInterface[]>([]);

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

    const shortcuts: PostShortcutsInterface[] = Array.from(
      element.querySelectorAll('h2')
    ).map((heading) => {
      return {
        name: heading.innerText,
        slug: heading.parentElement?.id,
      };
    });

    setSections(shortcuts);
    setContent(element.innerHTML);
  }, [post.content]);

  return (
    <Container>
      <div className="containerHeader">
        <Breadcrumb category={post.categories[0]} titleArticle={post.title} />
        <SearchComponent
          heightInput="56px"
          widthInput="100%"
          placeholder="Encontre um artigo"
          typeInput="search"
        />
      </div>
      <main>
        <PostShortcuts sections={sections} />
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </main>
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
