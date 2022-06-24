import Head from 'next/head';
import React, { useState } from 'react'
import Breadcrumb from '../../Breadcrumb';
import Footer from '../../Footer';
import Header from '../../Header'
import NewsletterForm from '../../NewsletterForm';
import PostPreviewSection from '../../Post/PostPreviewSection';
import SearchComponent from '../../SearchComponent';
import Sidebar from '../../Sidebar';
import SidebarList from '../../Sidebar/SidebarList';
import { Container, ConteudoProcurado, ContainerYoutube } from './styles';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import PaginationItem from '../../Pagination';
import MaterialPreviewSection from '../../FreeMaterials/MaterialPreviewSection';
import { materials, materialsHighlight } from '../../../mocks/materialsMock';
import YoutubeSection from '../../YoutubeSection';
import { useRouter } from 'next/router';


interface PostListPageProps {

}

export const PostListPage = () => {
  const router = useRouter()
  const paramsURL = router.query


  const categoryList = [{ id: 1, name: "Pesquisa", slug: "Pesquisa" }]
  return (
    <>
      <Head>
        <title>Esfera Energia Pesquisa</title>
      </Head>
      <Header categories={categoryList} />

      <Container>
        <div className="containerHeader">
          <Breadcrumb path={[{ label: `resultado de busca > ${paramsURL.posts}`, href: '/' }]} />
          <SearchComponent
            widthIcon="50px"
            heightInput="56px"
            widthInput="200px"
            placeholder="Encontre um artigo"
            typeInput="search"
          />
        </div>

        <ConteudoProcurado>
          <h2>Resultado de busca contendo &#34;{paramsURL.posts}&#34;</h2>
          <PostPreviewSection
            title=""
            posts={[{ id: "post1", title: "Post1", date: "2021", excerpt: "Excerpt", slug: "string", categories: [{ id: 1, slug: "teste", name: "Teste" }], imageURL: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", tags: ["teste"], timeToRead: 1, highlight: false },
            { id: "post1", title: "Post1", date: "2021", excerpt: "Excerpt", slug: "string", categories: [{ id: 1, slug: "teste", name: "Teste" }], imageURL: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", tags: ["teste"], timeToRead: 1, highlight: false },
            { id: "post1", title: "Post1", date: "2021", excerpt: "Excerpt", slug: "string", categories: [{ id: 1, slug: "teste", name: "Teste" }], imageURL: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", tags: ["teste"], timeToRead: 1, highlight: false },
            { id: "post1", title: "Post1", date: "2021", excerpt: "Excerpt", slug: "string", categories: [{ id: 1, slug: "teste", name: "Teste" }], imageURL: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", tags: ["teste"], timeToRead: 1, highlight: false }]}
            linkAll={{ href: '#', text: 'Ver todos os posts' }}
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
          <PaginationItem totalPages={10} />
        </span>

        <span></span>
        <PostPreviewSection
          title="Posts mais acessados"
          posts={[{ id: "post1", title: "Post1", date: "2021", excerpt: "Excerpt", slug: "string", categories: [{ id: 1, slug: "teste", name: "Teste" }], imageURL: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", tags: ["teste"], timeToRead: 1, highlight: false },
          { id: "post1", title: "Post1", date: "2021", excerpt: "Excerpt", slug: "string", categories: [{ id: 1, slug: "teste", name: "Teste" }], imageURL: "https://esferaenergia.com.br/wp-content/uploads/2022/05/consumo-consciente.jpg", tags: ["teste"], timeToRead: 1, highlight: false }]}
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
  )
}


