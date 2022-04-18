import styled from 'styled-components';

interface SidebarSectionStyleProps {
  isExpanded: boolean;
}

export const Container = styled.div<SidebarSectionStyleProps>`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  h1 {
    font-size: 1.25rem;
    line-height: 27px;
    color: #4f5150;
    margin-bottom: 23px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li a {
      color: #4f5150;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }
  }
  button {
    display: flex;
    border: none;
    background: none;
    margin-top: 1rem;
    font-size: 14px;
    line-height: 19px;
    width: fit-content;
    color: var(--pink-500);
    gap: 6px;
    align-items: center;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: var(--pink-600);

      svg path {
        fill: var(--pink-600);
      }
    }
    svg {
      transition: all 0.2s ease-in-out;
      ${({ isExpanded }) =>
        isExpanded === true ? 'transform: rotate(180deg);' : ''}
    }
  }
`;

export const ItemSkeleton = styled.div`
  width: 100%;
  height: 20px;
  background: linear-gradient(
    90deg,
    #c1c1c1 0%,
    #dddddd 33%,
    #dddddd 66%,
    #c1c1c1 100%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: load 2s infinite;
  border-radius: 14px;

  @keyframes load {
    100% {
      background-position: -100% 0;
    }
  }
`;

export const NoItems = styled.p`
  font-size: 16px;
  color: #8e8e8e;
`;
