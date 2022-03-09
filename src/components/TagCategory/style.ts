import styled from "styled-components";

interface PropsMargin {
    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
    marginAll?: number;
}

export const Container = styled.div<PropsMargin>`
    border-radius: 5px;
    border: 1px solid #F5426C;
    width: fit-content;
    background: #fff;

    width: 82px;
    height: 18px;

    padding-left: 5px;
    padding-right: 5px;


    display: flex;
    align-items: center;
    justify-content: center;

    
    margin-top: ${(props) => `${props.marginTop}px`};
    margin-bottom: ${(props) => `${props.marginBottom}px`};
    margin-left: ${(props) => `${props.marginLeft}px`};
    margin-right: ${(props) => `${props.marginRight}px`};
    

    margin: ${(props) => `${props.marginAll}px`};

    span{
        font-weight: bold;
        font-size: 12px;
        line-height: 24px;
        color: #F5426C;
        text-transform: uppercase;
    }
`

export const LinkCategory = styled.a <PropsMargin>`
    border-radius: 5px;
    border: 1px solid #F5426C;

    width: fit-content;
    height: 18px;

    padding-left: 5px;
    padding-right: 5px;

    background: #fff;


    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    color: #F5426C;
    text-transform: uppercase;
    transition: .3s ease;

    
    margin-top: ${(props) => props.marginTop !== undefined ? `${props.marginTop}px` : "0px"};  
    margin-bottom: ${(props) => props.marginBottom !== undefined ? `${props.marginBottom}px` : "0px"};
    margin-left: ${(props) => props.marginLeft !== undefined ? `${props.marginLeft}px` : "0px"};  
    margin-right: ${(props) => props.marginRight !== undefined ? `${props.marginRight}px` : "0px"};
    
    margin: ${(props) => `${props.marginAll}px`};

    
    &:hover{
        background-color: #F5426C;
        color: #fff;
    }
`
