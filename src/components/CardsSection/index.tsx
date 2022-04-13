import Link from 'next/link';
import React from 'react';

import Card from './Card';

import { Container } from './styles';

import { CardInterface } from '../../entities/Card';

interface CardsSectionProps {
  title: string;
  linkAll: {
    text: string;
    href: string;
  };
  cards: Array<CardInterface>;
  type: 'materials' | 'categories';
  isMobile?: boolean;
}

const CardsSection = ({
  title,
  linkAll,
  cards,
  isMobile,
}: CardsSectionProps) => {
  return (
    <Container isMobile={isMobile}>
      {linkAll ? (
        <>
          <div className="header desktop">
            <h2 className="titleBlog">{title}</h2>
            <Link href={linkAll.href} passHref>
              <a>{linkAll.text}</a>
            </Link>
          </div>

          <div className="header mobile">
            <Link href={linkAll.href} passHref>
              <h2 className="titleBlog">{title}</h2>
            </Link>
          </div>
        </>
      ) : (
        <div className="header">
          <h2 className="titleBlog">{title}</h2>
        </div>
      )}

      <div className="cardsContainer">
        <div className="cardsViewport">
          <div className="cardsWrapper">
            {cards.length > 0 &&
              cards.map((card) => (
                <Card
                  key={card.href}
                  imgUrl={card.imgUrl}
                  href={card.href}
                  text={card.text}
                />
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardsSection;
