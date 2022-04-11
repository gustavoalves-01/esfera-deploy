import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 40px;
    background: #F5426C;
    color: #fff;
    font-family: 'Open Sans';

    h2{
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 110%;
        /* or 35px */
    }
    h3{
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 32px;
    }
    button{
        color: #F5426C;
        background: #fff;
        height: 40px;
        font-size: 16px;
        line-height: 24px;
        width: 100%;
        border: none;
        font-weight: 700;
        border-radius: 5px;
        cursor: pointer;
        transition: .3s;
        &:hover{
            background: #f8b3c5;
            color:#fff;
        }
    }
`

