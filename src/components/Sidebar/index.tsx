import React from 'react';
import { SidebarSection } from './SidebarSection';
import { Container } from './styles';

export const Sidebar = () => {
  return (
    <Container>
      <div className="linksContainer">
        <SidebarSection title="Posts mais acessados" itemsType="posts" />
        <SidebarSection title="Materiais gratuitos" itemsType="materials" />
      </div>
    </Container>
  );
};
