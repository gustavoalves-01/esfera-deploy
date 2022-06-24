import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Container, ItemSkeleton, NoItems } from './styles';
import { SidebarLinks } from '../../../entities/Post';
import useSWR from 'swr';
import axios from 'axios';
import handleCategory from '../../../utils/handleCategories';

interface SidebarSectionProps {
  title: string;
  itemsType: 'posts' | 'materials';
}

interface MoreItemsProps {
  itemsType: 'posts' | 'materials';
}

interface Items {
  isLoading: boolean;
  isError?: any;
  data?: any;
}
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const SidebarList = ({ title, itemsType }: SidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [firstItems, setFirstItems] = useState<Items>({ isLoading: true });

  const firstItemsURL = `https://esferaenergia.com.br/wp-json/wp/v2/${itemsType}?_fields=id,title,slug,categories&per_page=4&page=1`;
  const { data, error } = useSWR(firstItemsURL, fetcher);

  const { data: categoriesData, error: categoriesError } =
    useSWR('https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug', fetcher);

  useEffect(() => {
    if ((!error && !data )||(!categoriesData && !categoriesError)) {
      setFirstItems({ isLoading: true });
    } else if (error || categoriesError) {
      setFirstItems({ isLoading: false, isError: error });
    } else {
      setFirstItems({ isLoading: false, data });
    }
  }, [categoriesData, categoriesError, data, error]); 

  const handleToggleExpanded = () => {
    isExpanded === true ? setIsExpanded(false) : setIsExpanded(true);
  };

  return (
    <Container isExpanded={isExpanded}>
      <h1>{title}</h1>
      <ul>
        {firstItems.isLoading ? (
          <>
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
            <ItemSkeleton />
          </>
        ) : firstItems.isError ? (
          <NoItems>
            Desculpe, não temos {title.toLowerCase()} no momento...
          </NoItems>
        ) : (
          firstItems.data.map((item: SidebarLinks) => {
            return (
              <li key={item.id}>
                {console.log(item.categories[0])}
                <Link href={`${handleCategory(item.categories[0], categoriesData).slug}/${item.slug}`}>
                  <a>{item.title.rendered}</a>
                </Link>
              </li>
            );
          })
        )}

        {isExpanded && <MoreItems itemsType={itemsType} />}
      </ul>
      {!firstItems.isError && (
        <button type="button" onClick={() => handleToggleExpanded()}>
          Ver mais {title.toLowerCase()}
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5.75C0.585786 5.75 0.25 6.08579 0.25 6.5C0.25 6.91421 0.585786 7.25 1 7.25V5.75ZM17 6.5L17.5335 7.02715C17.8222 6.735 17.8222 6.265 17.5335 5.97285L17 6.5ZM12.099 0.472854C11.8078 0.178213 11.333 0.17537 11.0383 0.466505C10.7437 0.757639 10.7408 1.2325 11.032 1.52715L12.099 0.472854ZM11.032 11.4729C10.7408 11.7675 10.7437 12.2424 11.0383 12.5335C11.333 12.8246 11.8078 12.8218 12.099 12.5271L11.032 11.4729ZM1 7.25H17V5.75H1V7.25ZM11.032 1.52715L16.4665 7.02715L17.5335 5.97285L12.099 0.472854L11.032 1.52715ZM12.099 12.5271L17.5335 7.02715L16.4665 5.97285L11.032 11.4729L12.099 12.5271Z" fill="#F5426C" />
          </svg>
        </button>
      )}
    </Container>
  );
};

const MoreItems = ({ itemsType }: MoreItemsProps) => {
  const [moreItems, setMoreItems] = useState<Items>({ isLoading: true });
  const moreItemsURL = `https://esferaenergia.com.br/wp-json/wp/v2/${itemsType}?_fields=id,title,slug,categories&per_page=4&page=2`;
  const { data, error } = useSWR(moreItemsURL, fetcher);

  useEffect(() => {
    if (!error && !data) {
      setMoreItems({ isLoading: true });
    } else if (error) {
      setMoreItems({ isLoading: false, isError: error });
    } else {
      setMoreItems({ isLoading: false, data });
    }
  }, [data, error]);

  return moreItems.isLoading || moreItems.isError ? (
    <>
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
      <ItemSkeleton />
    </>
  ) : (
    moreItems.data.map((item: SidebarLinks) => {
      return (
        <li key={item.id}>
          <Link href={item.slug}>
            <a>{item.title.rendered}</a>
          </Link>
        </li>
      );
    })
  );
};

export default SidebarList;
