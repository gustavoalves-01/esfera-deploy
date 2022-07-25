import styled from 'styled-components';

export const Container = styled.div`
  background: #f5f5f5;
  font-family: 'Open Sans';
  padding: 56px 0;
  margin: 0 0 40px;  
  
  .content {
    display: flex;
    max-width: 1181px;
    padding-left: 223px;
    gap: 33px;
    margin: 0 auto;

    .ctaWrapper {
      display: flex;
      flex-direction: column;
      flex: 1;

      h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 16px;
        font-family: 'Nexa', "Open Sans", sans-serif;
      }

      h4 {
        margin-bottom: 32px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        font-family: 'Open Sans';
      }

      button {
        background: #f5426c;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        border-radius: 5px;
        height: 44px;
        width: 100%;
        border: none;
        transition: all 0.3s;
        cursor: pointer;
        border: 1px solid transparent;
        &:hover {
          background: transparent;
          color: #f5426c;
          border: 1px solid #f5426c;
        }
      }
    }

    .depoimentWrapper {
      max-width: 255px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .imgWrapper {
        display: flex;
        justify-content: center;
      }

      p {
        font-size: 14px;
        line-height: 19px;
        text-align: center;
      }
    }
  }

  @media (max-width: 990px) {
    padding: 40px 0;
    text-align: center;

    .content {
      flex-direction: column;
      padding: 0 2rem;

      .ctaWrapper {        
        h3, h4 {
          margin-bottom: 1.5rem;
        }

        button {
          height: auto;
          padding: 8px 50px;
        }
      }

      .depoimentWrapper {
        margin: 0 auto;
      }


    }
  }
`;



