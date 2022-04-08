import { GetStaticPaths, GetStaticProps } from 'next/types';
import { FullPostInterface } from '../../../entities/Post';
import { api } from '../../../services/api';
import { Container } from './styles';
import parser from 'parser-html-json';

interface PostPageProps {
  post: FullPostInterface;
}

const Post = ({ post }: PostPageProps) => {
  return (
    <Container>
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
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
