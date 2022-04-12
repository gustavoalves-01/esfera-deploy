import styled from "styled-components";

export const Style = styled.div`
    display: flex;
    align-items: center;
`;

export const TextStyle = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1875rem;
    display: flex;
    align-items: flex-end;
    text-decoration-line: underline;
    color: #F5426C;
`;

export const LogosStyle = styled.div`
    display: inline-flex;
    
        div {
            margin-left: 0.5rem;
            width: 1.1875rem;
            height: 1.1875rem;
            position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
`;
