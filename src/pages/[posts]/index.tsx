
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import { PostListPage } from '../../components/ListPage/PostListPage';
import { SearchPage } from '../../components/ListPage/SearchPage';

interface PostListProps {
  popularPostsData: any;
}

const Posts = ({ popularPostsData }: PostListProps) => {
  const router = useRouter();
  const { posts } = router.query;

  if (posts === 'pesquisa') {
    return <SearchPage popularPostsData={popularPostsData}/>;
  } else {
    return <PostListPage popularPostsData={popularPostsData} />
  }
}


export async function getServerSideProps() {
  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";
  const response = await fetch(`https://esferaenergia.com.br/wp-json/wordpress-popular-posts/v1/popular-posts?limit=2&_fields=${postFields}`);
  const popularPostsData = await response.json();
  
  return {
    props: { popularPostsData }
  }
}

export default Posts;