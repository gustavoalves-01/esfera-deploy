import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import useSWR from 'swr';

import fetcher from '../../../utils/fetcher'
import handleCategory from '../../../utils/handleCategories';

import Header from '../../Header';
import Breadcrumb from '../../Breadcrumb';
import SearchComponent from '../../SearchComponent';
import PostPreviewSection from '../../Post/PostPreviewSection';
import Sidebar from '../../Sidebar';
import NewsletterForm from '../../NewsletterForm';
import SidebarList from '../../Sidebar/SidebarList';
import PaginationItem from '../../Pagination';
import MaterialPreviewSection from '../../FreeMaterials/MaterialPreviewSection';
import { materials } from '../../../mocks/materialsMock';
import YoutubeSection from '../../YoutubeSection';
import Footer from '../../Footer';

import { Container, ContainerYoutube, ConteudoProcurado } from './styles';

import { PostPreviewInterface, RawPostPreview } from '../../../entities/Post';
import { CategoryInterface } from '../../../entities/Category';

export const SearchPage = () => {
  // Validating if has search term
  const router = useRouter();
  const searchTerm = router.query?.st;

  useEffect(() => {
    if (!searchTerm) {
      router.push('/');
    }
  }, [router, searchTerm]);

  // Fetching categories states
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [isCategoriesError, setIsCategoriesError] = useState<boolean>(false);
  // Fetching posts states
  const [posts, setPosts] = useState<PostPreviewInterface[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState<boolean>(true);
  const [isPostsError, setIsPostsError] = useState<boolean>(false);
  // Pagination states
  const [page, setPage] = useState(1);

  // Fetching categories
  const { data: categoriesData, error: categoriesError } =
    useSWR('https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug', fetcher);

  useEffect(() => {
    if (!categoriesData && !categoriesError) {
      setIsLoadingCategories(true);
      setIsCategoriesError(false);
      setCategories([]);
    } else if (categoriesError) {
      setIsLoadingCategories(false);
      setIsCategoriesError(true);
      setCategories([]);
    } else {
      setIsLoadingCategories(false);
      setIsCategoriesError(false);
      setCategories(categoriesData);
    }
  }, [categories, categoriesData, categoriesError]);

  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";

  const { data: postsData, error: postsError } =
    useSWR(`https://esferaenergia.com.br/wp-json/wp/v2/posts?search=${searchTerm}&per_page=4&page=${page}&_fields=${postFields}`, fetcher);

  const handleFetchedPosts = useCallback((data: any) => {
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
            return handleCategory(item, categories);
          }),
          tags: String(post.tags),
          imageURL: post.yoast_head_json.og_image[0].url,
          highlight: false,//String(post.tags).includes('3'),
        };
      }
    );

    return postList;
  }, [categories]);

  useEffect(() => {
    if (!postsData && !postsError) {
      setIsLoadingPosts(true);
      setIsPostsError(false);
      setPosts([]);
    } else if (postsData && categories) {
      setIsLoadingPosts(false);
      setIsPostsError(false);
      const newPosts = handleFetchedPosts(postsData);
      setPosts(newPosts);
    } else {
      setIsLoadingPosts(false);
      setIsPostsError(true);
      setPosts([]);
    }
  }, [categories, handleFetchedPosts, postsData, postsError]);

  function pagination(e: number) {
    setPage(e)
  }

  return (
    <>
      <Head>
        <title>Esfera Energia Pesquisa</title>
      </Head>
      <Header categories={categories} />

      <Container>
        <div className="containerHeader">
          <Breadcrumb path={[{ label: `resultado de busca > ${searchTerm}`, href: '/' }]} />
          <SearchComponent
            widthIcon="50px"
            heightInput="56px"
            widthInput="200px"
            placeholder="Encontre um artigo"
            typeInput="search"
          />
        </div>

        <ConteudoProcurado>
          <h2 className="titleListPage">Resultado de busca contendo &#34;{searchTerm}&#34;</h2>
          {isPostsError ?
            <h3 className="semResultados isDesk">Sem resultados para termo de busca</h3>
            : (isLoadingPosts ?
              <div className='loadingContainer'>
                <div className="spinner" />
              </div>
              :
              <>
                <PostPreviewSection
                  title=""
                  posts={posts}
                  linkAll={{ href: '/posts', text: 'Ver todos os posts' }} />
                <PostPreviewSection
                  title="Em alta"
                  posts={posts}
                  isMobile
                />
              </>
            )
          }
        </ConteudoProcurado>


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

        <span className="pagination">
          <PaginationItem funcForPage={pagination} totalPages={10} />
        </span>

        <span></span>
        <PostPreviewSection
          title="Posts mais acessados"
          posts={posts}
          linkAll={{
            href: '#',
            text: 'Ver todos os posts mais acesados',
          }}
        />

        <span></span>

        <MaterialPreviewSection
          title="Você pode se interessar por estes outros materiais"
          materials={materials}
        />

        <span></span>

      </Container>

      <ContainerYoutube>
        <YoutubeSection videosInfos={[
          { title: "Vídeo 1", imageUrl: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", link: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg" },
          { title: "Vídeo 2", imageUrl: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", link: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg" },
          { title: "Vídeo 3", imageUrl: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", link: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg" }]} />

      </ContainerYoutube>

      <Footer />
    </>
  );
}