// Framework and libs Imports
import Head from 'next/head';
import { GetStaticProps } from 'next';

// API Imports
import { api } from '../services/api';

// Components Imports
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import SearchComponent from '../components/SearchComponent';
import Sidebar from '../components/Sidebar';
import PostPreviewSection from '../components/PostPreviewSection';
import CardsSection from '../components/CardsSection';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

// Styles Imports
import { Container } from './styles';

// Typing Imports
import { CardInterface } from '../entities/Card';
import { PostPreviewInterface } from '../entities/Post';
import { CategoryInterface } from '../entities/Category';
import { useEffect, useState } from 'react';
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
  const materials: CardInterface[] = [
    {
      text: 'Categoria 1',
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },
    {
      imgUrl: '/',
      href: '#',
    },
    {
      imgUrl: '/',
      href: '#',
    },
    {
      imgUrl: '/',
      href: '#',
    },
  ];


  const [paddingTopVerify, setPaddingTopVerify] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 1100) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setPaddingTopVerify(true);
        } else {
          setPaddingTopVerify(false);
        }
      });
    }
  });

  
  return (
    <>
      <Head>
        <title>Esfera Energia Blog</title>
      </Head>
      <Header categories={categoryList} />

      <Container myPaddingContainer={paddingTopVerify}>
        <div className="containerHeader">
          <Breadcrumb section="Blog" />
          <SearchComponent
            heightInput="56px"
            widthInput="200px"
            placeholder="Encontre um artigo"
            typeInput="search"
          />
        </div>

        <main>
          {trendingPostList.length > 0 && (
            <>
              <PostPreviewSection title="Em alta" posts={trendingPostList} />
              <PostPreviewSection
                title="Em alta"
                posts={trendingPostList}
                isMobile
              />

              <PostPreviewSection
                title="Posts mais recentes"
                posts={recentPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
              />
              <PostPreviewSection
                title="Posts mais recentes"
                posts={recentPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
                isMobile
              />

              <CardsSection
                type="materials"
                title="Materiais gratuitos para download"
                linkAll={{ href: '#', text: 'Ver todos os materiais' }}
                cards={materials}
              />
              <CardsSection
                type="materials"
                title="Materiais gratuitos"
                linkAll={{ href: '#', text: 'Ver todos os materiais' }}
                cards={materials}
                isMobile
              />

              <PostPreviewSection
                title="Posts mais acessados"
                posts={mostAccessedPostList}
                linkAll={{
                  href: '#',
                  text: 'Ver todos os posts mais acesados',
                }}
              />
              <PostPreviewSection
                title="Posts mais acessados"
                posts={mostAccessedPostList}
                linkAll={{
                  href: '#',
                  text: 'Ver todos os posts mais acesados',
                }}
                isMobile
              />

              <NewsletterForm
                copy="Saiba tudo sobre o Mercado Livre de Energia e como economizar ainda mais na conta de luz da sua empresa"
                desc="Receba conteúdos exclusivos em seu e-mail."
                cta="Receber conteúdos"
                isWide
              />

              <NewsletterForm
                copy="Receba os melhores conteúdos sobre o Mercado Livre de Energia e economia de energia para sua empresa."
                desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
                cta="Receber conteúdos"
                isWide
                isMobile
              />

              <PostPreviewSection
                title="Todos os posts"
                posts={allPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
              />
              <PostPreviewSection
                title="Todos os posts"
                posts={allPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
                isMobile
              />
            </>
          )}
        </main>
        <Sidebar />
      </Container>
      <Footer />
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
