import styled from "styled-components";


export const Container = styled.div`
  max-width: 851px;
  width: 100%;
  margin: 3rem auto 1rem;
  display: flex;
  flex-direction: column;
  
  h4 {
    font: 600 18px/24px 'Nexa', "Open Sans", sans-serif;
  }

  span{
    font-family: 'Nexa', "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #4F5150;
    position: relative;
  }
  
  .content {
    margin-top: 1rem;
    display: flex;
  }

  @media (max-width: 990px) {
    max-width: 100%;
    padding: 1rem;
  }
`