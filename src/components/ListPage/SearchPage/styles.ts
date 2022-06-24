import { Pagination } from '@zendeskgarden/react-pagination';
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
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .spinner {
        width: 60px;
        height: 60px;
        border: 4px solid rgba(0, 0, 0, 0);
        border-left-color: var(--pink-500);
        border-bottom-color: var(--pink-500);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }


    .semResultados{
        background-color: #eee;
        color: #fff;
        text-align: center;
        font-size: 32px;
        padding: 32px 0px;
        color: #1d1d1d;
        margin-top: 30px;
    }
    .containerHeader {
        display: flex;
        justify-content: space-between;
        grid-column: 1/3;

        label {
        min-width: 255px;
        }
    }
    .isMobile{
        display: none;
    }
    .isDesk{
        display: block;
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
        .isMobile{
            display: block;
        }

        .isDesk{
            display: none;
        }
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

export const ConteudoProcurado = styled.div`

`

export const ContainerYoutube = styled.div`
        display: flex;  
        max-width: 1106px;
        margin: 0 auto;
        gap: 32px;

`
