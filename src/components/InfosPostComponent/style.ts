import styled from "styled-components";

export const Style = styled.div`
    display: flex;
    align-items: center;
    
    span {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: flex-end;
        color: #181818;
        border-left: 1px solid #181818;
        padding-left: 1rem;
        margin-left: 1rem;
    }

    @media (max-width: 990px) {
        margin-bottom: 1.5rem;
    }

`;

export const ImgWrapper = styled.div`
    width: 30px;
    height: 30px;
    position: relative;
    
    img {
        border-radius: 50%;
    }

    @media (max-width: 990px) {
        padding-right: 1rem;
    }
`;

export const Author = styled.span`
    border-left: none!important;
    padding-left: 0!important;
`;

export const InfosWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Time = styled.span`
    @media (max-width: 990px) {
        padding-left: 0!important;
        border-left: none!important;
    }
`

export const Date = styled.span`
    @media (max-width: 990px) {
        border-right: 1px solid #181818!important;
        padding-right: 1rem;
    }
`;
