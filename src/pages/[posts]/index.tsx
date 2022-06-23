import {useRouter} from 'next/router'
import React from 'react'
import { PostListPage } from '../../components/ListPage/PostListPage';
import { SearchPage } from '../../components/ListPage/SearchPage';

const Posts = () => {
  const router = useRouter();
  const { posts } = router.query;
  
  if (posts === 'pesquisa') {
    return <SearchPage />;
  } else {
    return <PostListPage />
  }
}

export default Posts;
