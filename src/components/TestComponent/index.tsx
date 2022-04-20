import React from 'react'
import { Container } from './styles'

interface TestComponentProps {
  children: React.ReactNode;
}

export function TestComponent({ children }: TestComponentProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}