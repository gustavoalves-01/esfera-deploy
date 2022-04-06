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
}

const CardsSection = ({ title, linkAll, cards }: CardsSectionProps) => {
  console.log(cards);

  return (
    <Container>
      <div className="header">
        <h2 className="titleBlog">{title}</h2>
        {linkAll && (
          <Link href={linkAll.href} passHref>
            <a>{linkAll.text}</a>
          </Link>
        )}
      </div>
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
    </Container>
  );
};

export default CardsSection;
