import styled from "styled-components";

export const CardStyle = styled.div`
    width: 11.75rem;
    height:  15.875rem;
    position: relative;
    
    img, div {
        border-radius: 30px;
    }
`;

export const Legend = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
    text-align: center;
`;

export const Filter = styled.div`
    background-color: #F5426C;
    opacity: 0.5;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;