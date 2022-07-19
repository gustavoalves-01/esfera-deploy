import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { api } from '../../../services/api';

import fetcher from '../../../utils/fetcher';
import handleCategory from '../../../utils/handleCategories';

import Breadcrumb from '../../Breadcrumb';
import Footer from '../../Footer';
import Header from '../../Header2'
import NewsletterForm from '../../NewsletterForm';
import PostPreviewSection from '../../Post/PostPreviewSection';
import SearchComponent from '../../SearchComponent';
import Sidebar from '../../Sidebar';
import SidebarList from '../../Sidebar/SidebarList';
import PaginationItem from '../../Pagination';
import MaterialPreviewSection from '../../FreeMaterials/MaterialPreviewSection';
import YoutubeSection from '../../YoutubeSection';

import { Container, ConteudoProcurado, ContainerYoutube } from './styles';

import { CategoryInterface } from '../../../entities/Category';
import { PostPreviewInterface, RawPostPreview } from '../../../entities/Post';
import { useCategories } from '../../../hooks/useCategories';
import { useFetch } from '../../../hooks/useFetch';
import { PostSkeleton } from '../../Post/PostPreviewSection/PostSkeleton';
import { PaginationSkeleton } from '../SearchPage/styles';
import { ItemSkeleton } from '../../Sidebar/SidebarList/styles';
import { handlePostPreview } from '../../../utils/handleContent';
import handleMaterialPreview from '../../../utils/handleMaterialPreview';
import { MaterialPreviewInterface } from '../../../entities/Material';

interface PostListProps {
  popularPostsData: any;
}

interface IVideo {
  title: string;
  imageUrl: string;
  link: string;
}

export const PostListPage = ({ popularPostsData }: PostListProps) => {
  // Query States
  const [currentCategory, setCurrentCategory] = useState<CategoryInterface>();
  const [postsURL, setPostsURL] = useState<string>('');
  const [isCategoryPage, setIsCategoryPage] = useState<boolean>(false);

  // Fetching categories states
  const { categories } = useCategories();

  // Fetching posts states
  const [posts, setPosts] = useState<PostPreviewInterface[]>([]);
  const [popularPosts, setPopularPosts] = useState<PostPreviewInterface[]>();
  const [materials, setMaterials] = useState<MaterialPreviewInterface[]>()

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>();

  const [videos, setVideos] = useState<IVideo[]>();

  const [searchInCategory, setSearchInCategory] = useState<number>();

  const handleSearchInCategory = (checked: boolean) => {
    if (currentCategory && checked) {
      setSearchInCategory(currentCategory.id);
    }
  }


  // Verify if must to return all posts or filter by category
  const router = useRouter();
  const paramsURL = router.query;

  useEffect(() => {
    if (paramsURL.posts === 'posts') {
      setIsCategoryPage(false);
    } else {
      setIsCategoryPage(true);
      setPostsURL(`https://esferaenergia.com.br/wp-json/wp/v2/posts?&per_page=4&page=1&_fields=${postFields}`);
    }
  }, [paramsURL.posts, router]);

  // Carregamento dos Posts
  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";

  useEffect(() => {
    if (isCategoryPage) {
      api.get(`/categories/?slug=${paramsURL.posts}&_fields=id,name,slug`)
        .then((res) => {
          const { data } = res;
          setCurrentCategory(data[0]);
          const categoryId = data[0].id;
          const newURL = `https://esferaenergia.com.br/wp-json/wp/v2/posts?categories=${categoryId}&per_page=4&page=1&_fields=${postFields}`
          setPostsURL(newURL);
        }).catch(err => {
          console.error(err);
        });
    }
  }, [isCategoryPage, paramsURL.posts])

  const { data: postsData, isLoading: isLoadingPosts, isError: isPostsError } = useFetch(postsURL);

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
          highlight: String(post.tags).includes('3'),
        };
      }
    );

    return postList;
  }, [categories])

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
  };

  useEffect(() => {
    if (isCategoryPage && currentCategory) {
      setPostsURL(`https://esferaenergia.com.br/wp-json/wp/v2/posts?categories=${currentCategory.id}&per_page=4&page=${page}&_fields=${postFields}`);
    } else if (!isCategoryPage) {
      setPostsURL(`https://esferaenergia.com.br/wp-json/wp/v2/posts?&per_page=4&page=${page}&_fields=${postFields}`);
    }
  }, [currentCategory, isCategoryPage, page]);

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

  return (
    <>
      <Head>
        <title>Esfera Energia Pesquisa</title>
      </Head>
      <Header />

      <Container>
        <div className="containerHeader">
          {
            isCategoryPage ?
              (currentCategory ?
                <Breadcrumb path={[{ label: `${currentCategory.name}` }]} />
                :
                <div className="loadingContainer">
                  <ItemSkeleton />
                </div>
              )
              :
              <Breadcrumb path={[{ label: "Posts" }]} />
          }
          <div className="searchContainer">
            <SearchComponent
              widthIcon="50px"
              heightInput="56px"
              widthInput="200px"
              placeholder="Encontre um artigo"
              typeInput="search"
              category={searchInCategory}
            />
            {
              currentCategory &&
              <div className='checkboxContainer'>
                <input id="searchInCategory" type="checkbox" onChange={(ev) => handleSearchInCategory(ev.target.checked)} />
                <label htmlFor="searchInCategory">Buscar apenas em <b>{currentCategory.name}</b></label>
              </div>
            }
          </div>
        </div>

        <ConteudoProcurado>
          {
            currentCategory ?
              <h2 className="titleListPage">Posts sobre {currentCategory.name}</h2>
              : !isCategoryPage &&
              <h2 className="titleListPage">Todos os posts</h2>
          }

          {isPostsError ?
            <h3 className="semResultados isDesk">Sem resultados para termo de busca</h3>
            : (isLoadingPosts ?
              <div className='loadingContainer'>
                <PostSkeleton amount={2} />
                <PostSkeleton amount={2} />
              </div>
              :
              isCategoryPage ?
                <PostPreviewSection
                  title=""
                  posts={posts}
                  linkAll={{ href: '/posts', text: 'Ver todos os posts' }}
                />
                :
                <PostPreviewSection
                  title=""
                  posts={posts}
                />
            )
          }

          <PostPreviewSection
            title="Em alta"
            posts={posts}
            isMobile
          />
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
  )
}


