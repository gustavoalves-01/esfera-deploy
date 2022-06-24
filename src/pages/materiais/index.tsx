import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Footer from '../../components/Footer';
import MaterialPreviewSection from '../../components/FreeMaterials/MaterialPreviewSection';
import Header from '../../components/Header';
import NewsletterForm from '../../components/NewsletterForm';
import PostPreviewSection from '../../components/Post/PostPreviewSection';
import SearchComponent from '../../components/SearchComponent';
import Sidebar from '../../components/Sidebar';
import SidebarList from '../../components/Sidebar/SidebarList';
import YoutubeSection from '../../components/YoutubeSection';
import { CategoryInterface } from '../../entities/Category';
import { PostPreviewInterface, RawPostPreview } from '../../entities/Post';
import { materials, materialsHighlight } from '../../mocks/materialsMock';
import { videosYoutube } from '../../mocks/videosMock';
import handleCategory from '../../utils/handleCategories';
import MaterialsConatainer from './styles';

interface MaterialsProps {
  categoryList: CategoryInterface[];
  postList: PostPreviewInterface[];
}

const Materials = ({ categoryList, postList }: MaterialsProps) => {
  return (
    <>
      <Head>
        <title>Esfera Energia | Materiais Gratuitos</title>
      </Head>
      <Header />

      <MaterialsConatainer>
        <div className="containerHeader">
          <Breadcrumb
            path={[
              { label: 'Blog', href: '/' },
              { label: 'Materiais Gratuitos', href: '/blog/materiais' },
            ]}
          />
        </div>
        <h1 className="pageTitle">
          Receba acesso gratuito <b>a ebooks, guias e calculadoras</b> sobre o
          Mercado Livre de Energia
        </h1>
        <main>
          <MaterialPreviewSection
            title="Mais acessado"
            materials={materialsHighlight}
          />
          <MaterialPreviewSection
            title="Você pode se interessar por estes outros materiais"
            materials={materials}
          />
        </main>
        <div className="mobileContent">
          <NewsletterForm
            copy="Receba os melhores conteúdos sobre o Mercado Livre de Energia e economia de energia para sua empresa."
            desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
            cta="Receber conteúdos"
            isWide
            isMobile
          />
          <PostPreviewSection
            title="Você vai se interessar também"
            posts={postList}
            isMobile={true}
          />
        </div>
        <YoutubeSection videosInfos={videosYoutube} />

        <Sidebar>
          <NewsletterForm
            copy="Receba os melhores conteúdos da Esfera Energia"
            desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
            cta="Receber conteúdos"
          />
          <div className="linksContainer">
            <SearchComponent
              widthIcon="50px"
              heightInput="56px"
              widthInput="200px"
              placeholder="Encontre um material"
              typeInput="search"
            />
            <SidebarList title="Por tipo de conteúdo" itemsType="materials" />
            <SidebarList title="Por tema" itemsType="materials" />
          </div>
        </Sidebar>
      </MaterialsConatainer>
      <Footer />
    </>
  );
};

export default Materials;

export const getServerSideProps = async () => {
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
        };
      }
    );

    return postList;
  };

  const fields =
    'id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image';

  // Fetch Recent Posts
  const recentParams = {
    _fields: fields,
    orderby: 'date',
    order: 'desc',
    per_page: 2,
  };
  const responseRecent = await axios.get(
    'https://esferaenergia.com.br/wp-json/wp/v2/posts',
    { params: recentParams }
  );
  const postList = handleFetchedPosts(responseRecent.data);

  return {
    props: {
      categoryList,
      postList,
    },
  };
};
