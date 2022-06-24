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


    .containerHeader {
        display: flex;
        justify-content: space-between;
        grid-column: 1/3;

        label {
        min-width: 255px;
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

export const ConteudoProcurado = styled.div`

`

export const ContainerYoutube = styled.div`
        display: flex;  
        max-width: 1106px;
        margin: 0 auto;
        gap: 32px;

`
