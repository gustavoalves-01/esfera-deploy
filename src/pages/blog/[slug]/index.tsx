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
import PostHeader from '../../../components/PostHeader';
import { useFetch } from '../../../hooks/useFetch';

interface PostPageProps {
  post: FullPostInterface;
  slug: string;
}

const Post = ({ post }: PostPageProps) => {
  const [content, setContent] = useState<string>('');
  const [sections, setSections] = useState<PostShortcutsInterface[]>([]);

  const timeToRead = Math.round(post.content.split(' ').length / 150);

  // HTML do Elementor
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

    element.querySelectorAll('iframe').forEach((el) => {
      const container = document.createElement('div');
      container.classList.add('iframeContainer');

      el.insertAdjacentElement('beforebegin', container);
      container.insertAdjacentElement('afterbegin', el);
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

  const postHeaderProps = {
    bgUrl: post.imageURL,
    categories: post.categories,
    title: post.title,
    author: post.author,
    createdAt: post.createdAt,
    id: post.id,
    slug: post.slug,
    timeToRead,
  };

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
        <PostHeader post={postHeaderProps} />
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
    props: { post, slug },
  };
};
