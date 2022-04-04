import styled from "styled-components";

interface Props {
    imgUrl: string
}

export const CardStyle = styled.div<Props>`
    width: 11.75rem;
    height:  15.875rem;
    background: ${props => `linear-gradient(0deg, rgba(245, 66, 108, 0.5), rgba(245, 66, 108, 0.5)), url(${props.imgUrl}), #F5426C`};
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Legend = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #FFFFFF;
`;