import React from 'react';
import { Container } from './styles';

interface NewsletterFromProps {
  copy: string;
  desc: string;
  cta: string;
  isWide?: boolean;
  isMobile?: boolean;
  isPostPage?: boolean;
}

const NewsletterForm = ({
  copy,
  desc,
  cta,
  isWide,
  isMobile,
  isPostPage,
}: NewsletterFromProps) => {
  return (
    <Container isWide={isWide} isMobile={isMobile} isPostPage={isPostPage}>
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
