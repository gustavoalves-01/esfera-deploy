import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 20px;
    line-height: 27px;
    color: var(--gray-900);
  }

  ol {
    border: 1px solid var(--gray-500);
    padding: 0.5rem;
    list-style-position: inside;
    color: var(--pink-500);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      font-size: 14px;
      line-height: 19px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 990px) {
    gap: 1.5rem;

    ol {
      padding: 1.5rem;

      li {
        font-size: 1rem;
        line-height: 22px;
      }
    }
  }
`;
