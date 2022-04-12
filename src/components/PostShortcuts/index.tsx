import Link from 'next/link';
import React from 'react';
import { PostShortcutsInterface } from '../../entities/Post';
import { Container } from './styles';

interface PostShortcutsProps {
  sections: PostShortcutsInterface[];
}

const PostShortcuts = ({ sections }: PostShortcutsProps) => {
  return (
    <Container>
      <h1>Atalhos:</h1>
      <ol>
        {sections.map((section) => (
          <li key={section.slug}>
            <Link href={`#${section.slug}`}>
              <a>{section.name}</a>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default PostShortcuts;
