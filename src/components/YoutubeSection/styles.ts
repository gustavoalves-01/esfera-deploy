import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1253.14px;
    margin: 0 auto;
    padding-bottom: 100px;
    padding-top:74px;
      h2{
        font-family: 'Open Sans';
        font-weight: 700;
        font-size: 32px;
        line-height: 44px;
        color: #F5426C;
        margin-bottom: 24px;
    }
    @media(max-width: 1274px){
        padding-left:16px;
        padding-right: 16px;
    }
    @media(max-width: 1100px){
        h2{
            text-align: center;
        }
    }
    @media(max-width: 768px){
        padding-left:0px;
        padding-right: 0px;
        h2{
            font-size: 20px;
        }
    }
`

export const WrapperVideos = styled.div`

    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    @media(max-width: 1100px){
        justify-content: center;
    }

    @media(max-width: 768px){
        padding-left:16px;
        padding-right: 16px;
    }
`
