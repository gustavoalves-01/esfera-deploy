import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import slugify from 'slugify';

import Container, { ContainerHeader, Loading, YoutubeContainer } from './styles';

import {
  FullPostInterface,
  PostShortcutsInterface,
  RawPost,
} from '../../../entities/Post';
import { CategoryInterface } from '../../../entities/Category';

import Breadcrumb from '../../../components/Breadcrumb';
import SearchComponent from '../../../components/SearchComponent';
import PostShortcuts from '../../../components/Post/PostShortcuts';
import PostHeader from '../../../components/Post/PostHeader';
import CtaFinalPost from '../../../components/Post/CtaFinalPost';
import Comments from '../../../components/Comments';
import ListComment from '../../../components/ListComment';
import YoutubeSection from '../../../components/YoutubeSection';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import NewsletterForm from '../../../components/NewsletterForm';
import { AuthorSection } from '../../../components/Post/AuthorSection';
import FreeMaterialsCards from '../../../components/FreeMaterials/FreeMaterialsCards';
import CardsSection from '../../../components/CardsSection';

import handleCategory from '../../../utils/handleCategories';
import { videosYoutube } from '../../../mocks/videosMock';
import fetcher from '../../../utils/fetcher';
import useSWR from 'swr';
import { useRouter } from 'next/router';

interface PropsComentarios {
  imageUrl: string;
  name: string;
  date: string;
  depoiment: string;
}

interface Author {
  name: string;
  photo: string;
}

interface PropsMaterials {
  imgUrl: string;
  href: string;
}

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  const [post, setPost] = useState<FullPostInterface>();

  // Fetching Categories
  const { data: categoriesData, error: categoriesError } = useSWR('https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug', fetcher);

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [categoriesData]);

  const handlePostContent = useCallback((data: any) => {
    const handleContent = (content: string) => {
      const divsRemoved = content.replace(/<[\/]{0,1}(div)[^><]*>/g, '');
      const spansRemoved = divsRemoved.replace(/<[\/]{0,1}(span)[^><]*>/g, '');
      return spansRemoved;
    };

    const fullPost: FullPostInterface = data.map((post: RawPost) => {
      return {
        id: post.id,
        title: post.title.rendered,
        author: post.author,
        categories: post.categories.map((item) => {
          return handleCategory(item, categories);
        }),
        content: handleContent(post.content.rendered),
        imageURL: post.yoast_head_json.og_image[0].url,
        createdAt: post.date,
        slug: post.slug,
      };
    })[0];

    return fullPost;
  }, [categories]);

  useEffect(() => {
    if (categories) {
      fetch(`https://esferaenergia.com.br/wp-json/wp/v2/posts/?slug=${slug}`)
        .then((res) => res.json())
        .then((data) => {
          const post = handlePostContent(data);
          setPost(post);
        })
    }
  }, [categories, handlePostContent, slug]);

  const [content, setContent] = useState<string>('');
  const [sections, setSections] = useState<PostShortcutsInterface[]>([]);
  const [author, setAuthor] = useState<Author | null>(null);
  const [authorContent, setAuthorContent] = useState<string>('');
  const [timeToRead, setTimeToRead] = useState<number>();
  const [postHeader, setPostHeader] = useState<any>();


  useEffect(() => {
    if (post) {
      const ttr = Math.round(post.content.split(' ').length / 150);
      setTimeToRead(ttr);
    }
  }, [post])

  const removeAttributes = (element: Element) => {
    Array.from(element.attributes).forEach((attr) => {
      switch (attr.name) {
        case 'id':
          if (element.tagName === 'H2' || element.tagName === 'SECTION') {
            break;
          }
        case 'src':
          break;
        case 'target':
          break;
        case 'href':
          break;
        default:
          element.attributes.removeNamedItem(attr.name);
          break;
      }
    });
  };

  // HTML do Elementor
  useEffect(() => {
    if (post) {

      const element = document.createElement('div');
      element.innerHTML = post.content;
      const titles = element.querySelectorAll('h2');

      titles.forEach((title) => {
        const slug = slugify(title.innerText, { lower: true });
        title.id = slug;
      });

      element.querySelectorAll('*:not(iframe)').forEach((el) => {
        removeAttributes(el);
      });

      element.querySelectorAll('iframe').forEach((el) => {
        const container = document.createElement('div');
        container.classList.add('iframeContainer');

        el.insertAdjacentElement('beforebegin', container);
        container.insertAdjacentElement('afterbegin', el);
      });

      const shortcuts: PostShortcutsInterface[] = Array.from(
        element.querySelectorAll('h2')
      ).map((heading) => {
        return {
          name: heading.innerText,
          slug: heading.id,
        };
      });

      // Author information
      const sections = element.querySelectorAll('section'),
        lastSection = sections[sections.length - 1],
        lastSectionTitle = lastSection?.children[1]?.children[0]?.innerHTML;

      if (lastSectionTitle) {
        if (lastSectionTitle.indexOf('produzido') !== -1) {
          lastSection.id = 'authorSection';
          const photo = lastSection.children[0].getAttribute('src');
          const name = lastSectionTitle
            .replace('Esse texto foi produzido por&nbsp;', '')
            .replace('.', '');
          const about = lastSection?.children[2].innerHTML.replace(
            /<[\/]{0,1}(i)[^><]*>/g,
            ''
          );

          setAuthorContent(about);

          const author =
            name !== null && photo !== null ? { name: name, photo: photo } : null;

          setAuthor(author);
          lastSection.remove();
        }
      }

      setSections(shortcuts);

      const intermission = document.createElement('div');
      intermission.classList.add('intermissionContainer');
      intermission.innerHTML = `
    <h2>A conta de luz da sua empresa é maior que 50 mil reais por mês?</h2>
    <h3>Economize até 35% da sua conta de energia todos os meses com a gestão da Esfera Energia.</h3>
    <a href="/">Receba o contato de um consultor especialista</a>
    `;

      if (titles.length >= 5) {
        element.querySelectorAll('h2').forEach((section, index) => {
          if (index === 2) {
            section.insertAdjacentElement('beforebegin', intermission);
          }
        });
      } else {
        element.querySelectorAll('h2').forEach((section, index) => {
          if (index === Math.floor(titles.length / 2)) {
            section.insertAdjacentElement('beforebegin', intermission);
          }
        });
      }
      setContent(element.innerHTML);
    }
  }, [post]);

  useEffect(() => {
    if (post && timeToRead) {
      const postHeaderProps = {
        bgUrl: post.imageURL,
        categories: post.categories,
        title: post.title,
        author: author !== null ? author : { name: post.author, photo: undefined },
        createdAt: post.createdAt,
        id: post.id,
        slug: post.slug,
        timeToRead,
      };

      setPostHeader(postHeaderProps);
    }
  }, [author, post, timeToRead])


  const comentarios: PropsComentarios[] = [
    {
      imageUrl: '/images/person.png',
      name: 'Célio Nunes',
      date: '9 de novembro',
      depoiment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ipsum quis pharetra tristique. Maecenas dapibus massa vitae vulputate interdum. ',
    },
    {
      imageUrl: '/images/person.png',
      name: 'Célio Nunes',
      date: '9 de novembro',
      depoiment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ipsum quis pharetra tristique. Maecenas dapibus massa vitae vulputate interdum. ',
    },
    {
      imageUrl: '/images/person.png',
      name: 'Célio Nunes',
      date: '9 de novembro',
      depoiment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ipsum quis pharetra tristique. Maecenas dapibus massa vitae vulputate interdum. ',
    },
  ];

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
            <Header />
            <Container>
              <ContainerHeader>
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
              </ContainerHeader>
              <PostHeader post={postHeader} />

              <main>
                <PostShortcuts sections={sections} />
                <article dangerouslySetInnerHTML={{ __html: content }} />
              </main>
              <Sidebar>
                <NewsletterForm
                  copy="Receba os melhores conteúdos da Esfera Energia"
                  desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
                  cta="Receber conteúdos"
                />
              </Sidebar>
              <FreeMaterialsCards materials={materials} />

              <CardsSection
                isMobile={true}
                title="Materiais Gratuitos"
                cards={materials}
                type={'materials'}
                linkAll={{ text: 'Categoria 1', href: '#' }}
              />
            </Container>

            <CtaFinalPost
              photoUrl="/images/person.png"
              title="Terceirize toda a gestão de energia elétrica da sua empresa com segurança"
              subtitle="Reduza custos com energia elétrica com uma gestão que te ajuda a migrar para o mercado livre, gerenciar melhor sua compra e venda de energia e se manter em dia frente às instituições reguladoras."
              depoiment="“Estou muito satisfeita com a parceria e atendimento da Esfera Energia que nos proporcionou cerca de 35% de economia de energia nos últimos 4 anos.”"
              textButton="Receba o contato de um consultor especialista"
            />

            {author !== null && (
              <AuthorSection
                name={author.name}
                about={authorContent}
                imageURL={author.photo}
              />
            )}

            <div className="postFooter">
              <Comments />

              {/*======== LISTA DE COMENTÁRIOS RENDERIZADOS COMENTARIOS RENDERIZADOS ========*/}
              {comentarios.map(({ imageUrl, name, date, depoiment }) => {
                return (
                  <ListComment
                    key={`${Math.floor(1000 + Math.random() * 9000)}${name}`}
                    imageUrl={imageUrl}
                    name={name}
                    date={date}
                    depoiment={depoiment}
                  />
                );
              })}

              {/* TiTulo dinamico,  imagem dinamica*/}
              <YoutubeContainer>
                <YoutubeSection videosInfos={videosYoutube} />
              </YoutubeContainer>
            </div>

            <Footer />
          </>
      }
    </>
  );
};

export default Post;