import styled from 'styled-components';

interface PostStyleProps {
  isWide?: boolean;
}

export const PostContainer = styled.div<PostStyleProps>`
  max-width: ${({ isWide }) => (isWide ? '100%' : 'calc(50% - 1rem)')};
  width: 100%;

  display: flex;
  flex-direction: ${({ isWide }) => (isWide ? 'row' : 'column')};

  background: var(--gray-200);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    /* background: rgba(245, 66, 108, 0.05); */
    background: #dedede;
    box-shadow: 3px 3px 7px rgba(245, 66, 108, 0.07);
  }
  
  .is-mobile {
    display: none;
  }

  @media (max-width: 990px) {
    .is-mobile {
      /* display: block; */
    }
  }

  .postHeader {
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;

    .postDate {
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

    .postImage {
      object-fit: cover;
    }
  }

  .contentWrapper {
    display: ${({ isWide }) => (isWide ? 'grid' : 'flex')};
    width: ${({ isWide }) => (isWide ? '51.4%' : '100%')};
    flex: 1;

    padding: ${({ isWide }) => (isWide ? '21px 24px 28px' : '2rem 1rem 1rem')};
    align-content: center;
    gap: 16px 0;

    ${({ isWide }) => (isWide ? '' : 'flex-direction: column;')}

    .postHeader.wide {
      padding: 0;
      grid-column: 1/3;
      grid-row: 1/2;

      .postDate {
        font-size: 0.75rem;
      }
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

    .postFooter {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex: 1;
      z-index: 10;
      grid-column: 1/3;


      .verPost{
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #F5426C;
        width: 100%;

        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        
        div{
          position: relative;
          width: 16px;
          height: 11px;
          margin-left: 8px;
        }

      }
      .shareBtn {
        display: none;
        font-weight: 300;
        font-size: 12px;
        line-height: 16px;
        gap: 6px;
        color: var(--pink-500);
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
    max-width: 100%;

    .postHeader {
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
      padding: 1rem 0.5rem 1.5rem;

      p {
        ${({ isWide }) => (isWide ? '' : 'display: none;')}
      }

      .postFooter .shareBtn {
        display: flex;
      }
    }
  }
`;
