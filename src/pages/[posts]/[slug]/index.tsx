import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { api } from '../../../services/api'

import Container, { Loading, RelatedPostsContainer, YoutubeContainer } from './styles';

import {
  FullPostInterface,
  IAuthor,
  PostPreviewInterface,
  PostShortcutsInterface,
} from '../../../entities/Post';

import Breadcrumb from '../../../components/Breadcrumb';
import SearchComponent from '../../../components/SearchComponent';
import PostShortcuts from '../../../components/Post/PostShortcuts';
import PostHeader from '../../../components/Post/PostHeader';
import CtaFinalPost from '../../../components/Post/CtaFinalPost';
import Comments from '../../../components/Comments';
import YoutubeSection from '../../../components/YoutubeSection';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import NewsletterForm from '../../../components/NewsletterForm';
import { AuthorSection } from '../../../components/Post/AuthorSection';
import FreeMaterialsCards from '../../../components/FreeMaterials/FreeMaterialsCards';
import CardsSection from '../../../components/CardsSection';

import { GetStaticPaths, GetStaticProps } from 'next';
import { handlePostContent, handlePostData, handlePostPreview } from '../../../utils/handleContent';
import PostPreviewSection from '../../../components/Post/PostPreviewSection';
import { PostSkeleton } from '../../../components/Post/PostPreviewSection/PostSkeleton';
import { useFetch } from '../../../hooks/useFetch';
import CommentsList from '../../../components/CommentsList';


interface IPostPageProps {
  postData: any;
  categoriesData: any;
}
export interface IComments {
  id: number,
  name: string;
  date: Date;
  content: string;
}

interface PropsMaterials {
  imgUrl: string;
  href: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

interface IVideo {
  title: string;
  imageUrl: string;
  link: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const { data: categoriesData } = await api.get("/categories?_fields=id,name,slug");
  const { data: postData } = await api.get(`/posts/?slug=${slug}`);

  if (!categoriesData || !postData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      postData: postData || {},
      categoriesData: categoriesData || {},
    },
    revalidate: 60 * 60 * 24 * 7 // 7 dias
  }
}

const Post = ({ postData, categoriesData }: IPostPageProps) => {
  const [post, setPost] = useState<FullPostInterface>();
  const [relatedPosts, setRelatedPosts] = useState<PostPreviewInterface[]>();

  useEffect(() => {
    if (postData && categoriesData) {
      const post = handlePostData(postData, categoriesData);
      setPost(post);
    }
  }, [categoriesData, postData]);

  const [content, setContent] = useState<string>('');
  const [sections, setSections] = useState<PostShortcutsInterface[]>([]);
  const [author, setAuthor] = useState<IAuthor>();
  const [postHeader, setPostHeader] = useState<any>();
  const [videos, setVideos] = useState<IVideo[]>();
  const [comments, setComments] = useState<IComments[]>();
  const [commentsUrl, setCommentsUrl] = useState<string>('');


  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";

  useEffect(() => {
    if (post && document) {
      const postContent = handlePostContent(post.content);

      setSections(postContent.shortcuts);
      setAuthor(postContent.author);
      setContent(postContent.content);
      setPostHeader({
        bgUrl: post.imageURL,
        categories: post.categories,
        title: post.title,
        createdAt: post.createdAt,
        id: post.id,
        slug: post.slug,
        timeToRead: Math.round(post.content.split(' ').length / 150),
      });
    }
  }, [post]);

  useEffect(() => {
    if (post && categoriesData) {
      api.get(`/posts?categories=${post.categories[0].id}&per_page=3&_fields=${postFields}`)
        .then((res) => {
          const { data } = res;
          const posts = handlePostPreview(data, categoriesData);
          setRelatedPosts(posts);
        })
    }
  }, [categoriesData, post]);

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
  }, [videosData]);


  useEffect(() => {
    if (post?.id) {
      setCommentsUrl(`https://esferaenergia.com.br/wp-json/wp/v2/comments?post=${post.id}`);
    }
  }, [post, post?.id]);

  const { data: commentsData } = useFetch(commentsUrl);

  useEffect(() => {
    if (commentsData?.data) {
      const data: IComments[] = commentsData.data.map((comment: any) => {
        return {
          id: comment.id,
          name: comment.author_name,
          date: comment.date,
          content: comment.content.rendered,
        }
      });

      setComments(data);
    }
  }, [commentsData?.data])

  const materials: PropsMaterials[] = [
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

  return (
    <>
      {
        (!post || !postHeader) ?
          <Loading>
            <div className="spinner" />
          </Loading>
          :
          <>
            <Head>
              <title>{post.title}</title>
            </Head>
            <Header isPostPage />
            <Container>
              <Breadcrumb
                path={[{ label: post.categories[0].name, href: `/${post.categories[0].slug}` }, { label: post.title }]}
              />

              <SearchComponent
                widthIcon="50px"
                heightInput="56px"
                widthInput="100%"
                placeholder="Encontre um artigo"
                typeInput="search"
              />
              <PostHeader post={postHeader} author={author} />

              <main>
                <PostShortcuts sections={sections} />
                <div>
                  <article dangerouslySetInnerHTML={{ __html: content }} />

                </div>
              </main>
              <Sidebar>
                <NewsletterForm
                  copy="Receba os melhores conteúdos da Esfera Energia"
                  desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
                  cta="Receber conteúdos"
                  isPostPage
                />
              </Sidebar>
              <FreeMaterialsCards materials={materials} />

              <CardsSection
                isMobile={true}
                title="Materiais Gratuitos"
                cards={materials}
                type={'materials'}
                linkAll={{ text: '', href: '/materiais' }}
              />
            </Container>

            <CtaFinalPost
              photoUrl="/images/person.png"
              title="Terceirize toda a gestão de energia elétrica da sua empresa com segurança"
              subtitle="Reduza custos com energia elétrica com uma gestão que te ajuda a migrar para o mercado livre, gerenciar melhor sua compra e venda de energia e se manter em dia frente às instituições reguladoras."
              depoiment="“Estou muito satisfeita com a parceria e atendimento da Esfera Energia que nos proporcionou cerca de 35% de economia de energia nos últimos 4 anos.”"
              textButton="Receba o contato de um consultor especialista"
            />

            {author?.about && author?.photo && (
              <AuthorSection
                name={author.name}
                about={author.about}
                imageURL={author.photo}
              />
            )}

            <div className="postFooter">
              {
                post &&
                <Comments postId={parseInt(post.id)} />
              }

              {
                comments &&
                <CommentsList comments={comments} />
              }

              <RelatedPostsContainer>
                <h1>Você vai se interessar também</h1>
                {
                  relatedPosts ?
                    <PostPreviewSection title="" posts={relatedPosts} />
                    :
                    <div className='loadingContainer'>
                      <PostSkeleton amount={3} />
                    </div>
                }
              </RelatedPostsContainer>

              {
                videos &&
                <YoutubeContainer>
                  <YoutubeSection videosInfos={videos} />
                </YoutubeContainer>
              }
            </div>

            <Footer />
          </>
      }
    </>
  );
};

export default Post;