import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: baseline;
  text-transform: capitalize;
  font-size: 14px;
  color: #4f5150;
  width: 100%;
  padding-right: 2rem;
  gap: 0.5rem;
  height: 100%;
  align-items: baseline;

  p {
    width: 100%;
  }

  span.sep {
    margin: 0 0.4rem;
  }

  a {
    white-space: nowrap;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all 0.2s;
    font-weight: 600;

    &:hover {
      text-decoration-color: #4f5150;
    }
  }
`;
export const WrapperImage = styled.div`
  position: relative;
  width: 16px;
  height: 14px;
  color: #4f5150;
`;
