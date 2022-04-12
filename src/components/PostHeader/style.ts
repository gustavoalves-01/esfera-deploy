import styled from "styled-components";

export const Style = styled.div`
    position: relative;
`;

export const ImgWrapper = styled.div`
    width: 100%;
    height: 376px;
    position: relative;
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 37rem;
    height: 100%;
    justify-content: end;
    padding: 0 0 40px 40px;

    @media (max-width: 990px) {
        width: auto;
        padding: 0 51px 24px 24px;
    }
`;

export const TitleStyle = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 2.625rem;
    line-height: 3.5625rem;
    color: #FFFFFF;
    text-shadow: 2px 2px 7px rgba(245, 66, 108, 0.3);
    margin-top: 1.1rem;

    @media (max-width: 990px) {
        font-size: 2rem;
        line-height: 2.2rem;
    }
`;