import styled from 'styled-components';

interface CardSectionStyleProps {
  isMobile?: boolean;
}

export const Container = styled.div<CardSectionStyleProps>`
  ${({ isMobile }) => (isMobile ? 'display: none;' : 'display: flex;')}
  flex-direction: column;
  margin: 40px 0 60px;
  gap: 21px;

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
      div{
        position: relative;
        margin-left: 8px;
        width: 16px;
        height: 11px;
      }

      &:hover{
        text-decoration: underline;
      }
    }

    &.mobile {
      display: none;
    }
  }

  .cardsWrapper {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
    gap: 1.5rem;
  }

  @media (max-width: 990px) {
    ${({ isMobile }) => (isMobile ? 'display: flex;' : 'display: none;')}
    .header {
      justify-content: center;

      &.desktop {
        display: none;
      }

      &.mobile {
        display: flex;
      }
    }

    .cardsContainer {
      padding-bottom: 254px;
    }

    .cardsWrapper {
      width: auto;
      padding-right: 1rem;
    }

    .cardsViewport {
      overflow-x: scroll;
      position: absolute;
      width: calc(100vw - 1rem);
    }
  }
`;
