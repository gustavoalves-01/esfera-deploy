import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
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
import { MaterialPreviewInterface } from '../../entities/Material';
import { PostPreviewInterface, RawPostPreview } from '../../entities/Post';
import { materials, materialsHighlight } from '../../mocks/materialsMock';
import { videosYoutube } from '../../mocks/videosMock';
import fetcher from '../../utils/fetcher';
import handleCategory from '../../utils/handleCategories';
import handleMaterialPreview from '../../utils/handleMaterialPreview';
import handlePostPreview from '../../utils/handlePostPreview';
import MaterialsConatainer from './styles';

const Materials = () => {
  // Fetching categories states
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const { data: categoriesData, error: categoriesError } = useSWR('https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug', fetcher);

  useEffect(() => {
    if (categoriesData) {
      setCategories(categoriesData);
    }
  }, [categoriesData]);

  const [materials, setMaterials] = useState<MaterialPreviewInterface[]>();
  const [popularPosts, setPopularPosts] = useState<PostPreviewInterface[]>();

  const postPreviewFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";
  const fetchPostsURL = "https://esferaenergia.com.br/wp-json/wp/v2/posts";
  const fetchMaterialsUrl = "https://esferaenergia.com.br/wp-json/wp/v2/materiais_gratuitos";

  useEffect(() => {
    if (categories) {
      fetch(fetchMaterialsUrl)
        .then((res) => res.json())
        .then((data) => {
          const materials = handleMaterialPreview(data, categories);
          console.log(materials);
          setMaterials(materials);
        })

      fetch(`${fetchPostsURL}?_fields=${postPreviewFields}&tags_exclude=3&per_page=2&page=2`)
        .then((res) => res.json())
        .then((data) => {
          const posts = handlePostPreview(data, categories);
          setPopularPosts(posts);
        })
    }
  }, [categories]);

console.log(materials)
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
          {
            materials &&
            <>
              <MaterialPreviewSection
                title="Mais acessado"
                materials={materials}
              />
              <MaterialPreviewSection
                title="Você pode se interessar por estes outros materiais"
                materials={materials}
              />
            </>
          }
        </main>
        <div className="mobileContent">
          <NewsletterForm
            copy="Receba os melhores conteúdos sobre o Mercado Livre de Energia e economia de energia para sua empresa."
            desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
            cta="Receber conteúdos"
            isWide
            isMobile
          />
          {
            popularPosts &&
            <PostPreviewSection
              title="Você vai se interessar também"
              posts={popularPosts}
              isMobile={true}
            />
          }
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