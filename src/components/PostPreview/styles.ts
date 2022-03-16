import styled from 'styled-components';

interface PostStyleProps {
  isWide?: boolean;
}

export const PostContainer = styled.div<PostStyleProps>`
  max-width: ${({ isWide }) => (isWide ? '100%' : '50%')};

  margin-top: 400px;

  display: flex;
  flex-direction: ${({ isWide }) => (isWide ? 'row' : 'column')};

  background: var(--gray-200);

  .postHeader {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;

    .postDate {
      font-size: 0.75rem;
    }
  }

  .imageWrapper {
    position: relative;
    width: ${({ isWide }) => (isWide ? '48.6%' : '100%')};
    height: ${({ isWide }) => (isWide ? 'initial' : '224px')};

    .postImage {
      object-fit: cover;
    }
  }

  .contentWrapper {
    display: ${({ isWide }) => (isWide ? 'grid' : 'flex')};
    width: ${({ isWide }) => (isWide ? '51.4%' : '100%')};

    padding: ${({ isWide }) => (isWide ? '21px 24px 28px' : '2rem 1rem 1rem')};
    align-content: center;
    gap: 16px 0;

    ${({ isWide }) => (isWide ? '' : 'flex-direction: column;')}

    > div:first-child {
      grid-column: 1/2;
      grid-row: 1/2;
    }

    .postDate {
      grid-column: 2/3;
      grid-row: 1/2;

      font-size: 0.75rem;
      text-align: end;
      align-self: end;
    }

    h1 {
      grid-column: 1/3;
      font-size: 1.125rem;
      line-height: 1.45rem;
    }

    p {
      padding: ${({ isWide }) => (isWide ? '2px 0' : '8px 0 0')};
      grid-column: 1/3;
      font-size: 0.875rem;
      line-height: 1.187rem;

      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }

    .readingTime {
      grid-column: 1/3;
      font-size: 12px;
      line-height: 16px;
    }
  }
`;
