import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { PostPreview } from '../components/PostPreview';
import PostPreviewInterface from '../entities/PostPreview';

interface HomeProps {
  postList: PostPreviewInterface[];
}

export default function Home({ postList }: HomeProps) {
  const categories = [
    { name: 'categoria 1', slug: 'categ-1' },
    { name: 'categoria 2', slug: 'categ-2' },
    { name: 'categoria 3', slug: 'categ-3' },
    { name: 'categoria 4', slug: 'categ-4' },
  ];
  return (
    <>
      <Head>
        <title>Esfera Energia Blog</title>
      </Head>
      <Header categories={categories} />
      {/* <PostPreview post={postList[0]} /> */}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/wp/posts');
  const postList = await response.json();

  return {
    props: { postList },
  };
};
