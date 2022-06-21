import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  max-width: calc(1115px + 4rem);
  margin: 42px auto 0;
  padding: 100px 2rem 0;
  column-gap: 2rem;
  grid-template-columns: auto 255px;
  .is-mobile{
    display: none;
  }
  .containerHeader {
    display: flex;
    justify-content: space-between;
    grid-column: 1/3;

    label {
      min-width: 255px;
    }
  }

  main {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  aside {
    grid-column: 2/3;
    grid-row: 2/3;
  }
.is-mobileButton{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 28px;
      a{ 
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
        /* identical to box height */
        color: #F5426C;

        &:hover{
          text-decoration: underline;
        }
      }
      div{
        position: relative;
        width: 16px;
        height: 11px;
        margin-left: 8px;
      }
    }

    
  @media (max-width: 990px) {
    
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    margin-top: 0;
    padding-top: 70px;

    .containerHeader {
      display: none;
    }

    aside,
    > label {
      display: none;
    }
  }
`;

export default Container;
