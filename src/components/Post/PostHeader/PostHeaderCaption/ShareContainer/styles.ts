import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: "Nexa", "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    display: flex;
    align-items: flex-end;
    text-decoration-line: underline;
    color: #f5426c;
  }

  .linksContainer {
    display: inline-flex;

    .socialIcon {
      margin-left: 0.5rem;
      width: 1.1875rem;
      height: 1.1875rem;
      position: relative;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
