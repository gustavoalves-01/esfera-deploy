import styled from 'styled-components';

interface CardStyleProps {
  hasText: boolean;
}

export const Container = styled.div<CardStyleProps>`
  width: 11.75rem;
  height: 15.875rem;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding: 1rem;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--pink-500);
    opacity: ${({ hasText }) => (hasText ? '0.8' : '0.5')};
    z-index: 1;
  }

  .cardBackground {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    font-family: 'Nexa', "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #ffffff;
    z-index: 2;
    text-align: center;
  }
`;
