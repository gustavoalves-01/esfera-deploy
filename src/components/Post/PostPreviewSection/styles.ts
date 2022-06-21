import styled from 'styled-components';

interface PostPreviewSectionStyleProps {
  isMobile?: boolean;
}

export const Container = styled.div<PostPreviewSectionStyleProps>`
  ${({ isMobile }) => (isMobile ? 'display: none;' : 'display: flex;')}
  flex-direction: column;
  margin: 40px 0 60px;
  gap: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--pink-500);
      font-size: 14px;
      text-decoration: none;
      font-weight: 700;

      display: flex;
      align-items: center;
      &:hover{
        text-decoration: underline;
      }
      div{
        position: relative;
        width:16px;
        height: 11px;
        margin-left: 8px;
      }
    }

    &.mobile {
      display: none;
    }
  }

  .cardsWrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 990px) {
    ${({ isMobile }) => (isMobile ? 'display: flex;' : 'display: none;')}

    &:first-of-type {
      margin: 14px 0 0;
    }

    margin: 40px 0 0;

    .header {
      justify-content: center;

      &.desktop {
        display: none;
      }

      &.mobile {
        display: flex;
      }
    }
  }
`;
