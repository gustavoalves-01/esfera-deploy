import React from 'react';
import { NewsletterForm } from '../NewsletterForm';
import { SidebarSection } from './SidebarSection';
import { Container } from './styles';

export const Sidebar = () => {
  return (
    <Container>
      <NewsletterForm
        copy="Receba os melhores conteúdos da Esfera Energia"
        desc="Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser."
        cta="Receber conteúdos"
      />
      <div className="linksContainer">
        <SidebarSection title="Posts mais acessados" itemsType="posts" />
        <SidebarSection title="Materiais gratuitos" itemsType="materials" />
      </div>
    </Container>
  );
};
