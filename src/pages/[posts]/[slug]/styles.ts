import styled from 'styled-components';

export const ContainerHeader = styled.div`
  grid-column: 1/2;
  display: flex;
  justify-content: space-between;
  margin-bottom: 46px;
  margin: 0 auto;
  > div {
    max-width: 50%;
  }

  label {
    min-width: 255px;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const Container = styled.div`
  display: grid;
  max-width: 1181px;
  margin: 42px auto 0;
  padding: 100px 2rem 80px;
  column-gap: 2rem;
  grid-template-columns: auto 255px;

  > div {
    grid-column: 1/2;
    margin-bottom: 72px;

    &:first-of-type {
      align-self: auto;
      display: flex;
      margin: 0;
      align-items: center;

      * {
        margin-bottom: 46px;
      }
    }
  }

  > label {
    max-height: 56px;
    margin-bottom: 46px;
  }

  main {
    grid-column: 1/2;
    display: grid;
    grid-template-columns: 162px auto;
    column-gap: 29px;

    aside {
      grid-column: 1/2;
    }

    article {
      color: var(--gray-900);

      h2 {
        margin: 3rem 0 1.5rem;
        font-size: 2rem;
        line-height: 35px;
        font-weight: 700;
      }

      h3 {
        font-size: 1.5rem;
        line-height: 30px;
        margin-top: 2rem;
      }

      img {
        width: 100%;
      }

      .intermissionContainer {
        width: 100%;
        padding: 40px;
        margin-top: 2rem;
        background: #f5426c;
        color: #fff;
        font-family: "Nexa", "Open Sans", sans-serif;
        display: flex;
        flex-direction: column;

        h2 {
          margin: 0;
          margin-bottom: 1rem;
          font-style: normal;
          font-weight: 700;
          font-size: 2rem;
          line-height: 35px;
        }
        h3 {
          margin: 0;
          font-style: normal;
          font-weight: 700;
          font-size: 1rem;
          line-height: 22px;
          margin-bottom: 2rem;
        }

        a {
          color: #f5426c;
          background: #fff;
          padding: 8px;
          font-size: 16px;
          line-height: 24px;
          width: 100%;
          text-align: center;
          text-decoration: none;
          font-weight: 700;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
          &:hover {
            background: #f8b3c5;
            color: #fff;
          }
        }
      }

      .iframeContainer {
        padding-bottom: 56.25%;
        height: 0;
        position: relative;
        margin: 19px 0;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }

      ul {
        list-style-position: inside;
      }

      section {
        display: flex;
        flex-direction: column;
        gap: 19px;
      }

      p {
        font-size: 1rem;
        line-height: 1.7rem;

        strong {
          color: var(--pink-500);
        }
      }

      > section > img,
      a > img {
        max-width: 100%;
        width: 100%;
        height: 100%;
        margin: 2rem 0;
      }
    }
  }

  .postFooter {
    grid-column: 1/2;    
  }

  .commentsContainer {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  > aside {
    grid-column: 2/3;
    grid-row: 2/4;
    margin-top: 0;
    padding-top: 0;

    &:last-of-type {
      grid-row: 3/4;
    }
  }
     

  @media (max-width: 1100px) {
    padding: 0 1rem;
    padding-top: 46px;
  }
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    main {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      > div {
        margin-bottom: 0.5rem;
      }
    }

    figure img {
      width: 100%;
    }
    .containerHeader {
      display: none;
    }
  }
`;

export const YoutubeContainer = styled.section`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
`;

export const RelatedPostsContainer = styled.div`
  max-width: 1200px;
  margin: 128px auto 0;

  h1 {
    font-family: "Nexa", "Open Sans", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #f5426c;
  }

  .loadingContainer > div {
    grid-template-columns: repeat(3, 1fr);
  }

  > div .cardsWrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    > div {
      max-width: initial;

      .postFooter {
        .verPost {
          width: auto;
          white-space: nowrap;
        }

        > div:first-of-type {
          width: unset;
        }
      }
    }
  }

  @media (max-width: 990px) {
    max-width: 100%;
    padding: 0 16px;
  }

`


export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner {
    width: 60px;
    height: 60px;
    border: 4px solid rgba(0, 0, 0, 0);
    border-left-color: var(--pink-500);
    border-bottom-color: var(--pink-500);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }


  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export default Container;
