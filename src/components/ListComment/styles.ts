import styled from "styled-components";


export const Container = styled.div`
    width: 919px;
    margin: 0 auto;

    .perfil{
        display: flex;

        div{
            margin-left: 16px;
        }

        span{
            font-family: 'Open Sans';
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #4F5150;
            position: relative;
            top: -4px;
        }
    }

    p{
        margin-top: 0px;
        margin-left: 62px;
        margin-bottom: 27px;
    }

    @media(max-width: 1100px){
        width: 100%;
        padding: 0 24px;
        p{
            margin-left: 0;
        }
    }

`