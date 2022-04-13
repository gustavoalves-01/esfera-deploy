import styled from "styled-components";

export const Style = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.span`
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5625rem;
    color: #181818;
`;

export const Images = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 16.125rem;
    margin-top: 1rem;
    position: relative;

    img {
        object-fit: cover;
    }
`;

export const RedFilter = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(245, 66, 108, 0.5), rgba(245, 66, 108, 0.5));
    opacity: .5;
    position: absolute;
    z-index: 9;
`;

