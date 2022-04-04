import { GetStaticProps } from 'next';
import Head from 'next/head';

import Breadcrumb from '../components/Breadcrumb';
import Header from '../components/Header';
import { NewsletterForm } from '../components/NewsletterForm';
import { PostPreviewSection } from '../components/PostPreviewSection';
import SearchComponent from '../components/SearchComponent';
import { Sidebar } from '../components/Sidebar';
import CategoryInterface from '../entities/Category';
import { PostPreviewInterface } from '../entities/Post';
import { api } from '../services/api';
import { Container } from './styles';

interface HomeProps {
  categoryList: CategoryInterface[];
  trendingPostList: PostPreviewInterface[];
  mostAccessedPostList: PostPreviewInterface[];
  recentPostList: PostPreviewInterface[];
  allPostList: PostPreviewInterface[];
}

export default function Home({
  categoryList,
  trendingPostList,
  mostAccessedPostList,
  recentPostList,
  allPostList,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>Esfera Energia Blog</title>
      </Head>
      <Header categories={categoryList} />

      <Container>
        <Breadcrumb section="Blog" />
        <SearchComponent
          heightInput="56px"
          widthInput="100%"
          placeholder="Encontre um artigo"
          typeInput="search"
        />
        <main>
          {trendingPostList.length > 0 && (
            <>
              <PostPreviewSection title="Em alta" posts={trendingPostList} />
              <PostPreviewSection
                title="Posts mais recentes"
                posts={recentPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
              />
              <PostPreviewSection
                title="Posts mais acessados"
                posts={mostAccessedPostList}
                linkAll={{
                  href: '#',
                  text: 'Ver todos os posts mais acesados',
                }}
              />
              <NewsletterForm
                copy="Saiba tudo sobre o Mercado Livre de Energia e como economizar ainda mais na conta de luz da sua empresa "
                desc="Receba conteúdos exclusivos em seu e-mail."
                cta="Receber conteúdos"
                isWide
              />
              <PostPreviewSection
                title="Todos os posts"
                posts={allPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
              />
            </>
          )}
        </main>
        <Sidebar />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categoryList = await (await api.get(`list-categories`)).data;

  const trendingPostList = await (await api.get(`posts?trending=true`)).data;

  const allPostList = await (
    await api.get(`posts?recent=true&per_page=4`)
  ).data;

  const mostAccessedPostList = await (
    await api.get(`posts?recent=true&per_page=2&page=2`)
  ).data;

  const recentPostList = await (
    await api.get(`posts?recent=true&per_page=2`)
  ).data;

  return {
    props: {
      categoryList,
      trendingPostList,
      mostAccessedPostList,
      recentPostList,
      allPostList,
    },
  };
};
