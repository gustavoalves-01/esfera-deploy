import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import slugify from 'slugify';

import { api } from '../../../services/api';

import Breadcrumb from '../../../components/Breadcrumb';
import SearchComponent from '../../../components/SearchComponent';

import { Container } from './styles';

import {
  FullPostInterface,
  PostShortcutsInterface,
} from '../../../entities/Post';
import PostShortcuts from '../../../components/PostShortcuts';
import PostHeader from '../../../components/PostHeader';
import CtaFinalPost from '../../../components/CtaFinalPost';
import Comments from '../../../components/Comments';
import ListComment from '../../../components/ListComment';
import YoutubeSection from '../../../components/YoutubeSection';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import NewsletterForm from '../../../components/NewsletterForm';
import { CategoryInterface } from '../../../entities/Category';
import { AuthorSection } from '../../../components/AuthorSection';

interface PostPageProps {
  post: FullPostInterface;
  categoryList: CategoryInterface[];
}

interface PropsComentarios {
  imageUrl: string;
  name: string;
  date: string;
  depoiment: string;
}

interface PropsVideosYoutube {
  imageUrl: string;
  title: string;
  link: string;
}

interface Author {
  name: string;
  photo: string;
}

const Post = ({ post, categoryList }: PostPageProps) => {
  const [content, setContent] = useState<string>('');
  const [sections, setSections] = useState<PostShortcutsInterface[]>([]);
  const [author, setAuthor] = useState<Author | null>(null);
  const [authorContent, setAuthorContent] = useState<string>('');

  const timeToRead = Math.round(post.content.split(' ').length / 150);

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

    if (titles.length >= 5) {
      // first content part (before intermission)
    } else {
      // second content part (after intermission)
    }
    setContent(element.innerHTML);
  }, [post.content]);

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

  const videosYoutube: PropsVideosYoutube[] = [
    {
      imageUrl: '/images/thumbnail-1.png',
      title: 'Retrospectiva do Mercado de Energia em 2021',
      link: '#',
    },
    {
      imageUrl: '/images/thumbnail-1.png',
      title: 'Retrospectiva do Mercado de Energia em 2021',
      link: '#',
    },
    {
      imageUrl: '/images/thumbnail-1.png',
      title: 'Retrospectiva do Mercado de Energia em 2021',
      link: '#',
    },
  ];

  return (
    <>
      <Header categories={categoryList} />
      <Container>
        <div className="containerHeader">
          <Breadcrumb category={post.categories[0]} titleArticle={post.title} />
          <SearchComponent
            heightInput="56px"
            widthInput="100%"
            placeholder="Encontre um artigo"
            typeInput="search"
          />
        </div>
        <PostHeader post={postHeaderProps} />

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
              key={name}
              imageUrl={imageUrl}
              name={name}
              date={date}
              depoiment={depoiment}
            />
          );
        })}

        {/* TiTulo dinamico,  imagem dinamica*/}
        <YoutubeSection videosInfos={videosYoutube} />
      </div>

      <Footer />
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const categoryList = await (await api.get(`list-categories`)).data;

  const post = await (await api.get(`posts/${slug}`)).data;

  return {
    props: { post, categoryList },
  };
};
