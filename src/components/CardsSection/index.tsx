import Link from 'next/link';
import React from 'react';

import Card from './Card';

import { Container } from './styles';

import { CardInterface } from '../../entities/Card';
import useWindowDimensions from '../../hooks/useWindowDimensions';

interface CardsSectionProps {
  title: string;
  linkAll: {
    text: string;
    href: string;
  };
  cards: Array<CardInterface>;
  type: 'materials' | 'categories';
}

const CardsSection = ({ title, linkAll, cards }: CardsSectionProps) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <div className="header">
        {linkAll ? (
          width >= 990 ? (
            <>
              <h2 className="titleBlog">{title}</h2>
              <Link href={linkAll.href} passHref>
                <a>{linkAll.text}</a>
              </Link>
            </>
          ) : (
            <Link href={linkAll.href} passHref>
              <h2 className="titleBlog">{title}</h2>
            </Link>
          )
        ) : (
          <h2 className="titleBlog">{title}</h2>
        )}
      </div>
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
