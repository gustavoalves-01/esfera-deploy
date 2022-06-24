import Router, { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import fetcher from '../../../utils/fetcher'
import useSWR from 'swr';
import { PostPreviewInterface, RawPostPreview } from '../../../entities/Post';
import handleCategory from '../../../utils/handleCategories';

export const SearchPage = () => {
  const router = useRouter();
  const searchTerm = router.query?.st;

  useEffect(() => {
    if (!searchTerm) {
      router.push('/');
    }
  }, [router, searchTerm])

  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<PostPreviewInterface[]>([]);

  const postFields = "id,date,title,excerpt,slug,categories,tags,yoast_head_json.og_image";

  const { data: postsData, error: postError } = 
    useSWR(`https://esferaenergia.com.br/wp-json/wp/v2/posts?search=${searchTerm}&per_page=4&page=${page}&_fields=${postFields}`, fetcher);

  const { data: categoryList, error: categoryError} = 
    useSWR('https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug', fetcher);

  console.log(postsData);
  

  const handleFetchedPosts = useCallback((data: any) => {
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
          highlight: String(post.tags).includes('3'),
        };
      }
    );

    return postList;
  },[categoryList])

  useEffect(() => {
    if (postsData && categoryList) {
      const newPosts = handleFetchedPosts(postsData);
      setPosts(newPosts); 
    }
  }, [categoryList, handleFetchedPosts, postsData])

  return (
    <div>
      <ul>
        {
          !postsData && !postError && (
            <h1>loading...</h1>
          )
        }
        {posts?.map((post: PostPreviewInterface) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button type='button' onClick={() => setPage(page - 1)}> prev </button>
      <button type='button' onClick={() => setPage(page + 1)}> next </button>
    </div>
  );
}