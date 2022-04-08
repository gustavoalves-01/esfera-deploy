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
import useWindowDimensions from '../hooks/useWindowDimensions';
import Intermision from '../components/Intermision';

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

  const { width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>Esfera Energia Blog</title>
      </Head>
      <Header categories={categoryList} />

      <Container>
        {width >= 990 && (
          <>
            <Breadcrumb section="Blog" />
            <SearchComponent
              heightInput="56px"
              widthInput="100%"
              placeholder="Encontre um artigo"
              typeInput="search"
            />
          </>
        )}
        <main>
          {trendingPostList.length > 0 && (
            <>
              <PostPreviewSection title="Em alta" posts={trendingPostList} />
              <PostPreviewSection
                title="Posts mais recentes"
                posts={recentPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
              />
              {width >= 990 ? (
                <CardsSection
                  type="materials"
                  title="Materiais gratuitos para download"
                  linkAll={{ href: '#', text: 'Ver todos os materiais' }}
                  cards={materials}
                />
              ) : (
                <CardsSection
                  type="materials"
                  title="Materiais gratuitos"
                  linkAll={{ href: '#', text: 'Ver todos os materiais' }}
                  cards={materials}
                />
              )}
              <PostPreviewSection
                title="Posts mais acessados"
                posts={mostAccessedPostList}
                linkAll={{
                  href: '#',
                  text: 'Ver todos os posts mais acesados',
                }}
              />
              {width >= 990 ? (
                <NewsletterForm
                  copy="Saiba tudo sobre o Mercado Livre de Energia e como economizar ainda mais na conta de luz da sua empresa"
                  desc="Receba conteúdos exclusivos em seu e-mail."
                  cta="Receber conteúdos"
                  isWide
                />
              ) : (
                <NewsletterForm
                  copy="Receba os melhores conteúdos sobre o Mercado Livre de Energia e economia de energia para sua empresa."
                  desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
                  cta="Receber conteúdos"
                  isWide
                />
              )}
              <PostPreviewSection
                title="Todos os posts"
                posts={allPostList}
                linkAll={{ href: '#', text: 'Ver todos os posts' }}
              />
            </>
          )}
        </main>
        {width >= 990 && <Sidebar />}

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
