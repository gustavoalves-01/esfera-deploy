// Framework and libs Imports
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';

// Utilities Imports
import fetcher from '../utils/fetcher';
import { handlePostPreview } from '../utils/handleContent';

// Components Imports
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import SearchComponent from '../components/SearchComponent';
import Sidebar from '../components/Sidebar';
import SidebarList from '../components/Sidebar/SidebarList';
import PostPreviewSection from '../components/Post/PostPreviewSection';
import CardsSection from '../components/CardsSection';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

// Styles Imports
import Container from './styles';

// Typing Imports
import { CardInterface } from '../entities/Card';
import { PostPreviewInterface } from '../entities/Post';
import { CategoryInterface } from '../entities/Category';
import { PostSkeleton } from '../components/Post/PostPreviewSection/PostSkeleton';
import { useCategories } from '../hooks/useCategories';

const Home = () => {
  // Fetching categories
  const { categories } = useCategories();

  // Fetching posts states
  const [trendingPosts, setTrendingPosts] = useState<PostPreviewInterface[]>();
  const [popularPosts, setPopularPosts] = useState<PostPreviewInterface[]>();
  const [recentPosts, setRecentPosts] = useState<PostPreviewInterface[]>();
  const [allPosts, setAllPosts] = useState<PostPreviewInterface[]>();
  const [postsError, setPostsError] = useState<string[]>([]);

  // Fetching Posts
  const postPreviewFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";
  const fetchPostsURL = "https://esferaenergia.com.br/wp-json/wp/v2/posts";

  const queryParams = {
    trending: `${fetchPostsURL}?_fields=${postPreviewFields}&tags=3&per_page=1`,
    recent: `${fetchPostsURL}?_fields=${postPreviewFields}&tags_exclude=3&per_page=2`,
    popular: `${fetchPostsURL}?_fields=${postPreviewFields}&tags_exclude=3&per_page=2&page=2`,
    all: `${fetchPostsURL}?_fields=${postPreviewFields}&tags_exclude=3&per_page=4&page=1`
  }

  useEffect(() => {
    if (categories) {
      fetch(queryParams.trending)
        .then((res) => res.json())
        .then((data) => {
          const posts = handlePostPreview(data, categories);
          setTrendingPosts(posts);
        })

      fetch(queryParams.recent)
        .then((res) => res.json())
        .then((data) => {
          const posts = handlePostPreview(data, categories);
          setRecentPosts(posts);
        })

      fetch(queryParams.popular)
        .then((res) => res.json())
        .then((data) => {
          const posts = handlePostPreview(data, categories);
          setPopularPosts(posts);
        })

      fetch(queryParams.all)
        .then((res) => res.json())
        .then((data) => {
          const posts = handlePostPreview(data, categories);
          setAllPosts(posts);
        })
    }
  }, [categories, queryParams.all, queryParams.popular, queryParams.recent, queryParams.trending]);

  const materials: CardInterface[] = [
    {
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },
    {
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },
    {
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },
    {
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },
  ];

  const categoriesHighlight: CardInterface[] = [
    {
      text: 'Categoria 1',
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },

    {
      text: 'Categoria 2',
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },

    {
      text: 'Categoria 3',
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },

    {
      text: 'Categoria 4',
      imgUrl:
        'https://esferaenergia.com.br/wp-content/uploads/2022/03/comite-monitoramento-setor-eletrico.jpg',
      href: '#',
    },
  ];

  return (
    <>
      <Head>
        <title>Esfera Energia Blog</title>
      </Head>
      <Header />

      <Container>
        <div className="containerHeader">
          <Breadcrumb path={[{ label: 'Blog', href: '/' }]} />
          <SearchComponent
            widthIcon="50px"
            heightInput="56px"
            widthInput="200px"
            placeholder="Encontre um artigo"
            typeInput="search"
          />
        </div>

        <main>
          <>
            {trendingPosts ? (
              <>
                <PostPreviewSection title="Em alta" posts={trendingPosts} />
                <PostPreviewSection
                  title="Em alta"
                  posts={trendingPosts}
                  isMobile
                />
              </>
            ) :
              <PostSkeleton isWide />
            }

            {
              recentPosts ?
                <>
                  <PostPreviewSection
                    title="Posts mais recentes"
                    posts={recentPosts}
                    linkAll={{ href: '/posts', text: 'Ver todos os posts' }}
                  />
                  <PostPreviewSection
                    title="Posts mais recentes"
                    posts={recentPosts}
                    linkAll={{ href: '/posts', text: 'Ver todos os posts' }}
                    isMobile
                  />
                  <div className="is-mobileButton">
                    <Link href="/posts">Ver todos os posts</Link>
                    <div>
                      <Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" />
                    </div>
                  </div>
                </>
                :
                <PostSkeleton />
            }

            <CardsSection
              type="materials"
              title="Materiais gratuitos para download"
              linkAll={{ href: '/materiais', text: 'Ver todos os materiais' }}
              cards={materials}
            />
            <CardsSection
              type="materials"
              title="Materiais gratuitos"
              linkAll={{ href: '/materiais', text: 'Ver todos os materiais' }}
              cards={materials}
              isMobile
            />
            <div className="is-mobileButton">
              <Link href="/materiais">Ver todos os materiais</Link>
              <div>
                <Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" />
              </div>
            </div>

            {
              popularPosts ?
                <>
                  <PostPreviewSection
                    title="Posts mais acessados"
                    posts={popularPosts}
                    linkAll={{
                      href: '#',
                      text: 'Ver todos os posts mais acesados',
                    }}
                  />
                  <PostPreviewSection
                    title="Posts mais acessados"
                    posts={popularPosts}
                    linkAll={{
                      href: '#',
                      text: 'Ver todos os posts mais acesados',
                    }}
                    isMobile
                  />
                  <div className="is-mobileButton">
                    <Link href="/">Ver todos os posts mais acessados</Link>
                    <div>
                      <Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" />
                    </div>
                  </div>
                </>
                :
                <PostSkeleton />
            }

            <CardsSection
              type="categories"
              title="Categorias em alta"
              linkAll={{ href: '#', text: 'Ver todos as categorias' }}
              cards={categoriesHighlight}
            />
            <CardsSection
              type="categories"
              title="Categorias em alta"
              linkAll={{ href: '#', text: 'Ver todos as categorias' }}
              cards={categoriesHighlight}
              isMobile
            />
            <div className="is-mobileButton">
              <Link href="/">Ver todas as categorias</Link>
              <div>
                <Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" />
              </div>
            </div>

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

            {
              allPosts ?
                <>
                  <PostPreviewSection
                    title="Todos os posts"
                    posts={allPosts}
                    linkAll={{ href: '/posts', text: 'Ver todos os posts' }}
                  />
                  <PostPreviewSection
                    title="Todos os posts"
                    posts={allPosts}
                    linkAll={{ href: '/posts', text: 'Ver todos os posts' }}
                    isMobile
                  />
                  <div className="is-mobileButton">
                    <Link href="/posts">Ver todos os posts</Link>
                    <div>
                      <Image src="/images/icons/arrow-right-rosa.svg" layout="fill" alt="" />
                    </div>
                  </div>
                </>
                :
                <>
                  <PostSkeleton />
                  <PostSkeleton />
                </>
            }
          </>
        </main>

        <Sidebar>
          <NewsletterForm
            copy="Receba os melhores conteúdos da Esfera Energia"
            desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
            cta="Receber conteúdos"
          />
          <div className="linksContainer">
            <SidebarList title="Posts mais acessados" itemsType="posts" />
            <SidebarList title="Materiais gratuitos" itemsType="materials" />
          </div>
        </Sidebar>
      </Container>
      <Footer />
    </>
  );
}

export default Home;