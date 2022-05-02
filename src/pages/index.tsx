// Framework and libs Imports
import Head from 'next/head';
import { GetServerSideProps } from 'next';

// API Imports
import { api } from '../services/api';

// Components Imports
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';
import SearchComponent from '../components/SearchComponent';
import Sidebar from '../components/Sidebar';
import PostPreviewSection from '../components/Post/PostPreviewSection';
import CardsSection from '../components/CardsSection';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

// Styles Imports
import Container from './styles';

// Typing Imports
import { CardInterface } from '../entities/Card';
import {
  PostPreviewInterface,
  RawPost,
  RawPostPreview,
} from '../entities/Post';
import { CategoryInterface } from '../entities/Category';
import SidebarList from '../components/Sidebar/SidebarList';
import axios from 'axios';
import handleCategory from '../utils/handleCategories';
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

  const categories: CardInterface[] = [
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
      <Header categories={categoryList} />

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

              <CardsSection
                type="categories"
                title="Categorias em alta"
                linkAll={{ href: '#', text: 'Ver todos as categorias' }}
                cards={categories}
              />
              <CardsSection
                type="categories"
                title="Categorias em alta"
                linkAll={{ href: '#', text: 'Ver todos as categorias' }}
                cards={categories}
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

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch Categories
  const responseCategory = await axios.get(
    'https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug'
  );
  const categoryList = responseCategory.data;

  const handleFetchedPosts = (data: any) => {
    const postList: PostPreviewInterface[] = data?.map(
      (post: RawPostPreview) => {
        const excerptRegex = /<p>|<\/p>|(\[\&)(.*)(\;\])/g;
        const excerpt = post.excerpt.rendered.replace(excerptRegex, '');

        return {
          id: post.id,
          date: new Date(post.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }),
          title: post.title.rendered,
          excerpt: excerpt,
          slug: post.slug,
          categories: post.categories.map((item: number) => {
            return handleCategory(item, categoryList);
          }),
          tags: String(post.tags),
          imageURL: post.yoast_head_json.og_image[0].url,
          highlight: String(post.tags).includes('3'),
        };
      }
    );

    return postList;
  };

  const fields =
    'id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image';

  // Fetch Trending Posts
  const trendingParams = {
    _fields: fields,
    orderby: 'date',
    order: 'desc',
    tags: '3',
    per_page: 1,
  };
  const responseTrending = await axios.get(
    'https://esferaenergia.com.br/wp-json/wp/v2/posts',
    { params: trendingParams }
  );
  const trendingPostList = handleFetchedPosts(responseTrending.data);

  // Fetch Recent Posts
  const recentParams = {
    _fields: fields,
    orderby: 'date',
    order: 'desc',
    tags_exclude: ['3'],
    per_page: 2,
  };
  const responseRecent = await axios.get(
    'https://esferaenergia.com.br/wp-json/wp/v2/posts',
    { params: recentParams }
  );
  const recentPostList = handleFetchedPosts(responseRecent.data);

  // Fetch Most Accessed (PENDING API)
  const mostAccessedParams = {
    _fields: fields,
    orderby: 'date',
    order: 'desc',
    tags_exclude: ['3'],
    per_page: 2,
    page: 2,
  };
  const responseMostAccessed = await axios.get(
    'https://esferaenergia.com.br/wp-json/wp/v2/posts',
    { params: mostAccessedParams }
  );
  const mostAccessedPostList = handleFetchedPosts(responseMostAccessed.data);

  // Fetch All Posts
  const allPostsParams = {
    _fields: fields,
    orderby: 'date',
    order: 'desc',
    tags_exclude: ['3'],
    per_page: 4,
  };
  const responseAllPosts = await axios.get(
    'https://esferaenergia.com.br/wp-json/wp/v2/posts',
    { params: allPostsParams }
  );
  const allPostList = handleFetchedPosts(responseAllPosts.data);

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
