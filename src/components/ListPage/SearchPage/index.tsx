import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router'
import useSWR from 'swr';

import fetcher from '../../../utils/fetcher'
import handleCategory from '../../../utils/handleCategories';

import Header from '../../Header2';
import Breadcrumb from '../../Breadcrumb';
import SearchComponent from '../../SearchComponent';
import PostPreviewSection from '../../Post/PostPreviewSection';
import Sidebar from '../../Sidebar';
import NewsletterForm from '../../NewsletterForm';
import SidebarList from '../../Sidebar/SidebarList';
import PaginationItem from '../../Pagination';
import MaterialPreviewSection from '../../FreeMaterials/MaterialPreviewSection';
import YoutubeSection from '../../YoutubeSection';
import Footer from '../../Footer';

import { Container, ContainerYoutube, PaginationSkeleton } from './styles';

import { PostPreviewInterface, RawPostPreview } from '../../../entities/Post';
import { CategoryInterface } from '../../../entities/Category';
import { useCategories } from '../../../hooks/useCategories';
import { useFetch } from '../../../hooks/useFetch';
import { PostSkeleton } from '../../Post/PostPreviewSection/PostSkeleton';
import { MaterialPreviewInterface } from '../../../entities/Material';
import { handlePostPreview } from '../../../utils/handleContent';
import handleMaterialPreview from '../../../utils/handleMaterialPreview';
interface PostListProps {
  popularPostsData: any;
}

interface IVideo {
  title: string;
  imageUrl: string;
  link: string;
}

export const SearchPage = ({ popularPostsData }: PostListProps) => {
  // Validating if has search term
  const router = useRouter();
  const searchTerm = router.query?.st;
  const searchCategory = router.query?.category;

  useEffect(() => {
    if (!searchTerm) {
      router.push('/');
    }
  }, [router, searchTerm]);


  const [posts, setPosts] = useState<PostPreviewInterface[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [page, setPage] = useState(1);

  const [videos, setVideos] = useState<IVideo[]>();

  const [popularPosts, setPopularPosts] = useState<PostPreviewInterface[]>();
  const [materials, setMaterials] = useState<MaterialPreviewInterface[]>()
  const { categories } = useCategories();

  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";

  const { data: postsData, isLoading: isLoadingPosts, isError: isPostsError } =
    useFetch(`https://esferaenergia.com.br/wp-json/wp/v2/posts?search=${searchTerm}&per_page=4&page=${page}&_fields=${postFields}${searchCategory ? "&categories=" + searchCategory : ''}`);

  const { data: videosData } =
    useFetch(`https://esferaenergia.com.br/wp-json/wp/v2/video_youtube?per_page=3`);

  useEffect(() => {
    if (videosData) {
      const newVideos: IVideo[] = videosData.data.map((video: any) => {
        return {
          title: video.title.rendered,
          imageUrl: "/" + video.thumbnail_do_video,
          link: video.link_do_video
        }
      })

      setVideos(newVideos);
    }
  }, [videosData])

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
          highlight: false,
        };
      }
    );

    return postList;
  }, [categories]);

  useEffect(() => {
    if (!isLoadingPosts && !isPostsError && categories && postsData) {
      const newPosts = handleFetchedPosts(postsData.data);
      const totalPages = Number(postsData.headers["x-wp-totalpages"]);
      setTotalPages(totalPages);
      setPosts(newPosts);
    }
  }, [categories, handleFetchedPosts, isLoadingPosts, isPostsError, postsData]);

  function pagination(e: number) {
    setPage(e)
  }
  useEffect(() => {
    if (categories && popularPostsData) {
      const posts = handlePostPreview(popularPostsData, categories);
      setPopularPosts(posts);
    }

    if (categories) {
      fetch("https://esferaenergia.com.br/wp-json/wp/v2/materiais_gratuitos")
        .then((res) => res.json())
        .then((data) => {
          const materials = handleMaterialPreview(data, categories);
          setMaterials(materials);
        })
    }
  }, [categories, popularPostsData])

  return (
    <>
      <Head>
        <title>Esfera Energia Pesquisa</title>
      </Head>
      <Header />

      <Container>
        <div className="containerHeader">
          <Breadcrumb path={[{ label: `resultado de busca para ${searchTerm}` }]} />
          <SearchComponent
            widthIcon="50px"
            heightInput="56px"
            widthInput="200px"
            placeholder="Encontre um artigo"
            typeInput="search"
          />
        </div>

        <div className='searchResults'>
          <h2 className="titleListPage">Resultado de busca contendo &#34;{searchTerm}&#34;</h2>
          {isPostsError ?
            <h3 className="semResultados isDesk">Sem resultados para termo de busca</h3>
            : (isLoadingPosts ?
              <div className='loadingContainer'>
                <PostSkeleton amount={2} />
                <PostSkeleton amount={2} />
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
        </div>


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
          {
            totalPages ?
              <PaginationItem funcForPage={pagination} totalPages={totalPages} />
              :
              <PaginationSkeleton />
          }
        </span>
        <div className="otherContentSection">
          {
            popularPosts &&
            <PostPreviewSection
              title="Posts mais acessados"
              posts={popularPosts}
              linkAll={{
                href: '/posts?popular',
                text: 'Ver todos os posts mais acessados',
              }}
            />
          }

          {
            materials &&
            <MaterialPreviewSection
              title="Você pode se interessar por estes outros materiais"
              materials={materials}
            />
          }
        </div>
      </Container>

      {
        videos &&
        <ContainerYoutube>
          <YoutubeSection videosInfos={videos} />

        </ContainerYoutube>
      }

      <Footer />
    </>
  );
}