import styled from "styled-components";

export const Container = styled.main`
    display: grid;
    max-width: calc(1115px + 4rem);
    margin: 42px auto 0;
    padding: 100px 2rem 40px;
    column-gap: 2rem;
    grid-template-columns: auto 255px;
    margin-bottom: 20px;
    padding-bottom: 0;

    .loadingContainer {
      margin-top: 67px;
      
      div {
        margin: 16px 0 !important;
      }
    }

    .containerHeader {
        display: flex;
        justify-content: space-between;
        grid-column: 1/3;

        > label {
        }
        
        .searchContainer {
          min-width: 255px;
          display: block;
          position: relative;

          .checkboxContainer {
            position: absolute;
            top: 100%;
            left: 0;
            padding-top: 0.5rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
            
            label {
              font: 400 0.8rem 'Nexa', "Open Sans", sans-serif;
              cursor: pointer;
            }
            
            input {
              cursor: pointer;
              margin: 1.5px 0;
            }
          }
        }
    }

    .otherContentSection {
      display: flex;
      flex-direction: column;
      grid-column: 1/2;

      .intermissionContainer {
        display: none;
      }
    }

    .pagination{
        padding-top: 8.5px;
        border-top: 2px solid rgba(79, 81, 80, 0.5);    
    }
    h2.titleListPage{
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        display: flex;
        align-items: center;

        color: #F5426C;
    }


    @media (max-width: 990px) {

        h2.titleListPage{
            margin-bottom: -25px;
             margin-top: 17px;
        }
        .is-mobileButton{
        display: flex;
        }
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        margin-top: 0;
        padding-top: 70px;
        
        .pagination{
            margin-top: 40px;
        }
        .containerHeader {
        display: none;
        }

        aside,
        > label {
        display: none;
        }
    }
`

export const ConteudoProcurado = styled.div``

export const ContainerYoutube = styled.div`
        display: flex;  
        max-width: 1106px;
        margin: 0 auto;
        gap: 32px;

`
