import React from 'react';
import { Container } from './styles';

interface NewsletterFromProps {
  copy: string;
  desc: string;
  cta: string;
  isWide?: boolean;
}

export const NewsletterForm = ({
  copy,
  desc,
  cta,
  isWide,
}: NewsletterFromProps) => {
  return (
    <Container isWide={isWide}>
      <h1>{copy}</h1>
      <p>{desc}</p>
      <form action="" method="post">
        <input type="text" placeholder="Digite seu e-mail" name="email" />
        <button type="submit">{cta}</button>
      </form>
    </Container>
  );
};
