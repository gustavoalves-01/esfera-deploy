import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: column;
  margin: 48px 0 56px;
  gap: 1.5rem;

  .header {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--pink-500);
      font-size: 14px;
      text-decoration: underline;
    }
  }

  .cardsWrapper {
    display: flex;
    gap: 40px 2rem;
    flex-wrap: wrap;  
    margin-top: 30px;
  }

  .intermissionContainer {
    width: 100%;
    margin: 8px 0;
    padding: 40px;
    background: #f5426c;
    color: #fff;
    font-family: 'Open Sans';
    display: flex;
    flex-direction: column;

    h2 {
      margin-bottom: 1rem;
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 35px;
    }

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 22px;
      margin-bottom: 2rem;
      max-width: 65%;
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

  @media (max-width: 990px) {
    &:first-of-type {
      margin: 0;
    }

    margin: 2rem 0 0;

    h2.titleBlog {
      margin-bottom: 1.5rem;
    }

    .intermissionContainer {
      margin: 0;
      padding: 40px 2rem;
      gap: 1.5rem;
      align-items: center;

      h2 {
        margin: 0;
        font-size: 1.5rem;
        line-height: 27px;
        text-align: center;
      }

      h3 {
        margin: 0;
        font-weight: 400;
        font-size: 1rem;
        line-height: 17.5px;
        text-align: center;
        max-width: 100%;
      }

      a {
        padding: 8px 35px;
      }
    }
  }
`;
