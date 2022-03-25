import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import { PostPreviewSection } from '../components/PostPreviewSection';
import PostPreviewInterface from '../entities/PostPreview';
import { Container } from './styles';

interface HomeProps {
  trendingPostList: PostPreviewInterface[];
  mostAccessedPostList: PostPreviewInterface[];
  recentPostList: PostPreviewInterface[];
}

export default function Home({
  trendingPostList,
  mostAccessedPostList,
  recentPostList,
}: HomeProps) {
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

      <Container>
        <main>
          {trendingPostList.length > 0 && (
            <>
              <PostPreviewSection title="Em alta" posts={trendingPostList} />
              <PostPreviewSection
                title="Posts mais recentes"
                posts={recentPostList}
              />
            </>
          )}
        </main>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const responseTrending = await fetch(
    'http://localhost:3000/api/wp/posts?trending=true'
  );
  const trendingPostList = await responseTrending.json();

  const responseMostAccessed = await fetch(
    'http://localhost:3000/api/wp/posts?trending=true'
  );
  const mostAccessedPostList = await responseMostAccessed.json();

  const responseRecent = await fetch(
    'http://localhost:3000/api/wp/posts?recent=true&per_page=2'
  );
  const recentPostList = await responseRecent.json();

  return {
    props: { trendingPostList, mostAccessedPostList, recentPostList },
  };
};
