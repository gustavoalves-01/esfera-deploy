import React, { useState } from 'react';
import Link from 'next/link';

import { Container, ItemSkeleton, NoItems } from './styles';
import { SidebarLinks } from '../../../entities/Post';
import { useSidebarLinks } from '../../../hooks/useSidebarLinks';

interface SidebarSectionProps {
  title: string;
  itemsType: 'posts' | 'materials';
}

interface MoreItemsProps {
  itemsType: 'posts' | 'materials';
}

const SidebarList = ({ title, itemsType }: SidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const firstItems = useSidebarLinks(1, itemsType);

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
                <Link href={item.slug}>
                  <a>{item.title}</a>
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
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.22109 0.800049L6.22109 4.80005L10.2211 0.800049L11.8211 1.60005L6.22109 7.20005L0.621094 1.60005L2.22109 0.800049Z"
              fill="#F5426C"
            />
          </svg>
        </button>
      )}
    </Container>
  );
};

const MoreItems = ({ itemsType }: MoreItemsProps) => {
  const moreItems = useSidebarLinks(1, itemsType);

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
            <a>{item.title}</a>
          </Link>
        </li>
      );
    })
  );
};

export default SidebarList;
