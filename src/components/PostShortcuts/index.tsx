import Link from 'next/link';
import React, { useCallback } from 'react';
import { PostShortcutsInterface } from '../../entities/Post';
import { Container } from './styles';

interface PostShortcutsProps {
  sections: PostShortcutsInterface[];
}

const PostShortcuts = ({ sections }: PostShortcutsProps) => {
  const handleScroll = useCallback((pos) => {
    if (window.innerWidth > 990) {
      window.scrollTo({ top: pos - 104 })
    } else {
      window.scrollTo({ top: pos - 70 })
    }

  }, [])


  return (
    <Container>
      <h1>Atalhos:</h1>
      <ol>
        {sections.map((section) => (
          <li key={section.slug}>
            {console.log(section)}
            <span onClick={() => handleScroll(section.pos)}>{section.name}</span>
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default PostShortcuts;
