import React, { ReactNode } from 'react';
import { Container } from './styles';

interface SidebarProps {
  children: ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
  return <Container>{children}</Container>;
};

export default Sidebar;
