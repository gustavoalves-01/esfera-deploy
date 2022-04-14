import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  max-width: calc(1115px + 4rem);
  margin: 42px auto 0;
  padding: 0 2rem;
  column-gap: 2rem;
  grid-template-columns: auto 255px;

  .containerHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 46px;

    > div {
      max-width: 50%;
    }

    label {
      min-width: 255px;
    }
  }

  main {
    grid-column: 1/2;
    display: grid;
    grid-template-columns: 162px auto;
    gap: 72px 29px;

    > div {
      grid-column: 1/3;
    }

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

        &:last-of-type section {
          display: grid;

          img {
            grid-column: 1/2;
            grid-row: 1/3;
          }

          p {
            grid-column: 2/3;
          }
        }
      }

      p {
        font-size: 1rem;
        line-height: 19px;

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

  @media(max-width: 1100px){
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

    .containerHeader{
      display: none;
    }
  }
`;
