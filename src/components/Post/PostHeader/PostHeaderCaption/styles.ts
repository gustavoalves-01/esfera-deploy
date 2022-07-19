import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .postContent {
    display: flex;

    .postInfo {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }

    span {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      display: flex;
      align-items: flex-end;
      color: #181818;
      border-left: 1px solid #181818;
      padding-left: 1rem;
      margin-left: 1rem;

      &.author {
        border-left: none !important;
        padding-left: 0 !important;
      }

      &.timeToRead {
        @media (max-width: 990px) {
          padding-left: 0 !important;
          border-left: none !important;
        }
      }

      &.date {
        @media (max-width: 990px) {
          border-right: 1px solid #181818 !important;
          padding-right: 1rem;
        }
      }
    }

    .authorProfile {
      width: 30px;
      height: 30px;
      position: relative;

      &.rounded {
        border-radius: 50%;
        overflow: hidden;
      }
    }
  }

  @media (max-width: 990px) {
    flex-direction: column;
    align-items: start;
    gap: 1.5rem;

    .authorProfile {
      padding-right: 1rem;
    }
  }
`;
