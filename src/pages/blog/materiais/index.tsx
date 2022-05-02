import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import Header from '../../../components/Header';
import { CategoryInterface } from '../../../entities/Category';
import { MaterialsConatainer } from './styles';

interface MaterialsProps {
  categoryList: CategoryInterface[];
}

const Materials = ({ categoryList }: MaterialsProps) => {
  return (
    <>
      <Head>
        <title>Esfera Energia | Materiais Gratuitos</title>
      </Head>
      <Header categories={categoryList} />

      <MaterialsConatainer>
        <div className="containerHeader">
          <Breadcrumb
            path={[
              { label: 'Blog', href: '/' },
              { label: 'Materiais Gratuitos', href: '/blog/materiais' },
            ]}
          />
        </div>
        <main>
          <h1>
            Receba acesso gratuito <b>a ebooks, guias e calculadoras</b> sobre o
            Mercado Livre de Energia
          </h1>
        </main>
      </MaterialsConatainer>
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

  return {
    props: {
      categoryList,
    },
  };
};
