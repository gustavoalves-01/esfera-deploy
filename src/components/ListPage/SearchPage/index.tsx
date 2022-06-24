import Router, { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import fetcher from '../../../utils/fetcher'
import useSWR from 'swr';
import { PostPreviewInterface, RawPostPreview } from '../../../entities/Post';
import handleCategory from '../../../utils/handleCategories';
import Head from 'next/head';
import Header from '../../Header';
import { Container, ContainerYoutube, ConteudoProcurado } from './styles';
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

export const SearchPage = () => {
  const router = useRouter();
  const searchTerm = router.query?.st;


  useEffect(() => {
    if (!searchTerm) {
      router.push('/');
    }
  }, [router, searchTerm])

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostPreviewInterface[]>([]);


  function pagination(e: number) {
    setPage(e)
  }

  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";

  const { data: postsData, error: postError } =
    useSWR(`https://esferaenergia.com.br/wp-json/wp/v2/posts?search=${searchTerm}&per_page=4&page=${page}&_fields=${postFields}`, fetcher);

  const { data: categoryList, error: categoryError } =
    useSWR('https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug', fetcher);



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
            return handleCategory(item, categoryList);
          }),
          tags: String(post.tags),
          imageURL: post.yoast_head_json.og_image[0].url,
          highlight: false,//String(post.tags).includes('3'),
        };
      }
    );

    return postList;
  }, [categoryList])

  useEffect(() => {
    if (postsData && categoryList) {
      const newPosts = handleFetchedPosts(postsData);
      setPosts(newPosts);
    }
  }, [categoryList, handleFetchedPosts, postsData])

  const categoryList2 = [{ id: 1, name: "Pesquisa", slug: "Pesquisa" }]

  return (
    <>
      {/* <ul>
        {
          !postsData && !postError && (
            <h1>loading...</h1>
          )
        }
        {posts?.map((post: PostPreviewInterface) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button type='button' onClick={() => setPage(page - 1)}> prev </button>
      <button type='button' onClick={() => setPage(page + 1)}> next </button> */}

      <Head>
        <title>Esfera Energia Pesquisa</title>
      </Head>
      <Header categories={categoryList2} />

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

          {posts.length > 0 ? <>
            <PostPreviewSection
              title=""
              posts={posts}
              linkAll={{ href: '#', text: 'Ver todos os posts' }}

            />
          </> : <h3 className="semResultados isDesk">Sem resultados para termo de busca</h3>}


          {posts.length > 0 ? <>
            <PostPreviewSection
              title="Em alta"
              posts={posts}
              isMobile
            />
          </> : <h3 className="semResultados isMobile">Sem resultados para termo de busca</h3>}

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