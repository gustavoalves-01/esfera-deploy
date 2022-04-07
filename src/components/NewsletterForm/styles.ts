import { MaxContainer } from './../Header/styles';
import styled from 'styled-components';

interface NewsletterFormStyleProps {
  isWide?: boolean;
}

export const Container = styled.div<NewsletterFormStyleProps>`
  width: 100%;
  display: grid;
  row-gap: ${({ isWide }) => (isWide ? '0' : '1rem')};
  padding: ${({ isWide }) => (isWide ? '40px' : '9px 0 0')};
  background: ${({ isWide }) => (isWide ? '#F4F4F4' : 'none')};

  h1 {
    font-weight: ${({ isWide }) => (isWide ? '600' : '400')};
    font-size: ${({ isWide }) => (isWide ? '1.5rem' : '1rem')};
    line-height: ${({ isWide }) => (isWide ? '32px' : '18px')};
    margin-bottom: ${({ isWide }) => (isWide ? '8px' : '0')};
    color: ${({ isWide }) => (isWide ? '#181818' : '#4f5150')};
    text-align: ${({ isWide }) => (isWide ? 'left' : 'center')};
    padding-right: ${({ isWide }) => (isWide ? '30px' : '0')};
  }

  p {
    grid-row: ${({ isWide }) => (isWide ? '2' : '3')};
    font-style: ${({ isWide }) => (isWide ? 'normal' : 'italic')};
    font-weight: ${({ isWide }) => (isWide ? '400' : '300')};
    font-size: ${({ isWide }) => (isWide ? '17px' : '12px')};
    line-height: ${({ isWide }) => (isWide ? '23px' : '14px')};
    color: ${({ isWide }) => (isWide ? '#181818' : '#4f5150')};
    text-align: ${({ isWide }) => (isWide ? 'left' : 'center')};
    padding: ${({ isWide }) => (isWide ? '0' : '0 1rem')};
    margin-bottom: ${({ isWide }) => (isWide ? '2rem' : '0')};
  }

  form {
    display: ${({ isWide }) => (isWide ? 'grid' : 'flex')};
    ${({ isWide }) =>
      isWide
        ? 'grid-template-columns: repeat(2, 1fr); width: fit-content;'
        : 'flex-direction: column'};
    gap: ${({ isWide }) => (isWide ? '1.5rem' : '1rem')};

    input {
      font-size: 1rem;
      line-height: 24px;
      font-weight: 300;
      padding: 14px;
      background: #ffffff;
      border: 1px solid var(--pink-500);
      border-radius: 5px;
    }

    button {
      font-weight: 800;
      font-size: 16px;
      line-height: 24px;
      padding: ${({ isWide }) => (isWide ? '14px 1.5rem' : '1rem 0')};
      border: none;
      background: var(--pink-500);
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--pink-300);
      }
    }
  }

  @media (max-width: 990px) {
    padding: 1.5rem 0.5rem;
    margin-top: 40px;

    h1 {
      font-size: 1rem;
      line-height: 19px;
      margin-bottom: 1.5rem;
      padding: 0;
      text-align: center;
    }

    p {
      grid-row: 3;
      margin-bottom: 0;
      font-style: italic;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      color: #4f5150;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      margin-bottom: 1rem;

      input {
        padding: 10px 1rem;
      }

      button {
        padding: 10px 0;
        border-radius: 0;
      }
    }
  }
`;
