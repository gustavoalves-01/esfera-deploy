import { GetStaticPaths, GetStaticProps } from 'next';

interface PostPageProps {}

const Post = (props: PostPageProps) => {
  return <p>Post</p>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);

  return { props: {} };
};
