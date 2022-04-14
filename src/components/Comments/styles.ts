import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 851px;


    h3{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        /* identical to box height */
        color: #181818;
        margin-bottom: 40px;
    }
   

    @media(max-width: 1100px){
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
    }
`

export const ContainerComment = styled.div`
    display: flex;
    align-items: flex-start;
    textarea{
        border: 1px solid #181818;
        height: 144px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        padding: 14px 20px;
        font-family: 'Open Sans';
        margin-left: 16px;
        width: 100%;
        &::placeholder{
            color: #181818;
        }
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 100%;
        margin-left:16px ;
    }

    button{
        width:160px;
        height:40px;
        font-family: "Roboto";
        font-weight: 800;
        color: #fff;
        background: #F5426C;
        border-radius: 5px;
        border: none;
        margin-top: 16px;
        font-size: 16px;
        cursor: pointer;
    }

     @media(max-width: 1100px){
        .imagemComment{
            display: none;
        }
        div{
            margin-left: 0;
        }
    }
`