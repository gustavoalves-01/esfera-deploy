import React from 'react';
import { Container } from './styles';

interface NewsletterFromProps {
  copy: string;
  desc: string;
  cta: string;
  isWide?: boolean;
  isMobile?: boolean;
}

const NewsletterForm = ({
  copy,
  desc,
  cta,
  isWide,
  isMobile,
}: NewsletterFromProps) => {
  return (
    <Container isWide={isWide} isMobile={isMobile}>
      <h1>{copy}</h1>
      <p>{desc}</p>
      <form action="" method="post">
        <input type="text" placeholder="Digite seu e-mail" name="email" />
        <button type="submit">{cta}</button>
      </form>
    </Container>
  );
};

export default NewsletterForm;
