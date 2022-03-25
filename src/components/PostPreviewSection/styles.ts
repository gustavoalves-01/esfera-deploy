import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 60px;
  gap: 21px;

  .header {
    display: flex;
    justify-content: space-between;
  }

  .cardsWrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;
