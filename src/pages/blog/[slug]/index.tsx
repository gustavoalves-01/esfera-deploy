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
import CtaFinalPost from '../../../components/CtaFinalPost';
import Comments from '../../../components/Comments';
import ListComment from '../../../components/ListComment';
import YoutubeItem from '../../../components/YoutubeItem';
import YoutubeSection from '../../../components/YoutubeSection';



interface PostPageProps {
  post: FullPostInterface;
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

const Post = ({ post }: PostPageProps) => {
  const [content, setContent] = useState<string>('');
  const [sections, setSections] = useState<PostShortcutsInterface[]>([]);

  // Limpando HTML do Elementor
  useEffect(() => {
    const element = document.createElement('div');
    element.innerHTML = post.content;
    const titles = element.querySelectorAll('h2');

    titles.forEach((title) => {
      const slug = slugify(title.innerText, { lower: true });

      title.parentElement?.nextElementSibling?.insertAdjacentElement(
        'afterbegin',
        title
      );
      title.parentElement?.setAttribute('id', slug);
    });

    element.querySelectorAll('section').forEach((el) => {
      el.childElementCount === 0 && el.remove();
    });

    const shortcuts: PostShortcutsInterface[] = Array.from(
      element.querySelectorAll('h2')
    ).map((heading) => {
      return {
        name: heading.innerText,
        slug: heading.parentElement?.id,
      };
    });

    setSections(shortcuts);
    setContent(element.innerHTML);
  }, [post.content]);

  const comentarios: PropsComentarios[] = [
    {
      imageUrl: "/images/person.png",
      name: "Célio Nunes",
      date: "9 de novembro",
      depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ipsum quis pharetra tristique. Maecenas dapibus massa vitae vulputate interdum. ",
    },
    {
      imageUrl: "/images/person.png",
      name: "Célio Nunes",
      date: "9 de novembro",
      depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ipsum quis pharetra tristique. Maecenas dapibus massa vitae vulputate interdum. ",
    },
    {
      imageUrl: "/images/person.png",
      name: "Célio Nunes",
      date: "9 de novembro",
      depoiment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare ipsum quis pharetra tristique. Maecenas dapibus massa vitae vulputate interdum. ",
    }
  ]

  const videosYoutube: PropsVideosYoutube[] = [{
    imageUrl: '/images/thumbnail-1.png',
    title: 'Retrospectiva do Mercado de Energia em 2021',
    link: "#"
  },
  {
    imageUrl: '/images/thumbnail-1.png',
    title: 'Retrospectiva do Mercado de Energia em 2021',
    link: "#"
  },
  {
    imageUrl: '/images/thumbnail-1.png',
    title: 'Retrospectiva do Mercado de Energia em 2021',
    link: "#"
  }]

  return (
    <>
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
        <main>
          <PostShortcuts sections={sections} />
          <article dangerouslySetInnerHTML={{ __html: content }} />
        </main>

      </Container>


      {/* ======== CTA FINAL POST ========*/}
      {/* <CtaFinalPost
        photoUrl='/images/person.png'
        title='Terceirize toda a gestão de energia elétrica da sua empresa com segurança'
        subtitle='Reduza custos com energia elétrica com uma gestão que te ajuda a migrar para o mercado livre, gerenciar melhor sua compra e venda de energia e se manter em dia frente às instituições reguladoras.'
        depoiment='“Estou muito satisfeita com a parceria e atendimento da Esfera Energia que nos proporcionou cerca de 35% de economia de energia nos últimos 4 anos.”'
        textButton='Receba o contato de um consultor especialista' /> */}


      {/*======== COMENTÁRIOS ==> Seção para comentar ======== */}
      {/* <Comments /> */}



      {/*======== LISTA DE COMENTÁRIOS RENDERIZADOS COMENTARIOS RENDERIZADOS ========*/}

      {/* {comentarios.map(({ imageUrl, name, date, depoiment }) => {
        return (
          <ListComment key={name} imageUrl={imageUrl} name={name} date={date} depoiment={depoiment} />
        )
      })} */}


      {/* TiTulo dinamico,  imagem dinamica*/}
      {/* <YoutubeSection videosInfos={videosYoutube} /> */}
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

  const post = await (await api.get(`posts/${slug}`)).data;

  return {
    props: { post },
  };
};
