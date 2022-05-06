import styled from 'styled-components';

interface MaterialStyleProps {
  isWide?: boolean;
}

export const MaterialContainer = styled.div<MaterialStyleProps>`
  max-width: ${({ isWide }) => (isWide ? '100%' : 'calc(50% - 1rem)')};
  width: 100%;

  display: flex;
  flex-direction: ${({ isWide }) => (isWide ? 'row' : 'column')};

  background: var(--gray-200);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(245, 66, 108, 0.05);
    box-shadow: 3px 3px 7px rgba(245, 66, 108, 0.07);
  }

  .materialHeader {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;

    .materialDate {
      font-size: 0.75rem;
    }

    &.mobile {
      display: ${({ isWide }) => (isWide ? 'none' : 'flex')};
    }
  }

  .imageWrapper {
    position: relative;
    width: ${({ isWide }) => (isWide ? '48.6%' : '100%')};
    height: ${({ isWide }) => (isWide ? 'initial' : '224px')};

    .materialImage {
      object-fit: cover;
    }
  }

  .contentWrapper {
    display: ${({ isWide }) => (isWide ? 'grid' : 'flex')};
    width: ${({ isWide }) => (isWide ? '51.4%' : '100%')};
    flex: 1;

    padding: ${({ isWide }) => (isWide ? '24px' : '2rem 1rem 1rem')};
    align-content: center;

    ${({ isWide }) => (isWide ? '' : 'flex-direction: column;')}

    .materialHeader.wide {
      padding: 0;
      grid-column: 1/3;
      grid-row: 1/2;
      margin-bottom: 28px;

      .materialDate {
        font-size: 0.75rem;
      }
    }

    h1 {
      grid-column: 1/3;
      font-size: 1.125rem;
      line-height: 1.45rem;
      margin-bottom: ${({ isWide }) => (isWide ? '1rem' : '1.5rem')};
    }

    p {
      grid-column: 1/3;
      font-size: 0.875rem;
      line-height: 1.187rem;
      margin-bottom: ${({ isWide }) => (isWide ? '30px' : '1.5rem')};

      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      display: -webkit-box;
    }

    .materialFooter {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex: 1;
      z-index: 10;
      grid-column: 1/3;

      button {
        background: var(--pink-500);
        color: #fff;
        padding: 8px 30px;
        border-radius: 5px;
        border: none;
        font-size: 1rem;
        font-weight: 700;
        border: 1px solid var(--pink-500);
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
          background: #fff;
          color: var(--pink-500);
        }
      }
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    max-width: 100%;

    .materialHeader {
      &.wide {
        display: none;
      }
      &.mobile {
        display: flex;
      }
    }

    .imageWrapper {
      width: 100%;
      height: 224px;
    }

    .contentWrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem 0.5rem;

      h1,
      p {
        margin-bottom: 1rem;
      }

      .materialFooter {
        button {
          width: 100%;
          line-height: 24px;
        }
      }
    }
  }
`;
