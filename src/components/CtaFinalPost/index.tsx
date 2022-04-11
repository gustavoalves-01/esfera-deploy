import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
interface PropsCtaFinalProps {
    title: string;
    subtitle: string;
    textButton: string;

    photoUrl: string;
    depoiment: string;

}
function CtaFinalPost({ title, subtitle, textButton, photoUrl, depoiment }: PropsCtaFinalProps) {
    return (
        <Container>
            <MaxContainer>
                <WrapperText>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <button>{textButton}</button>
                </WrapperText>

                <WrapperDepoimento>
                    <WrapperImg>
                        <Image src={photoUrl} alt="Person photo" width="115" height="115" />
                    </WrapperImg>
                    <p>{depoiment}</p>
                </WrapperDepoimento>
            </MaxContainer>
        </Container>
    )
}

export default CtaFinalPost

export const Container = styled.div`
    background: #F5F5F5;
    font-family: 'Open Sans';
    padding: 56px 0;
`

export const WrapperDepoimento = styled.div`
    width: 30%;
    text-align: center;
    margin-left: 36px;
`
export const WrapperText = styled.div`
    width: 70%;
    h3{
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 16px;
        font-family: 'Open Sans';

    }

    h4{
        margin-bottom: 32px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        font-family: 'Open Sans';

    }

    button{
        background: #F5426C;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        border-radius: 5px;
        height: 44px;
        width: 100%;
        border: none;
        transition: all 0.3s;
        cursor: pointer;
        border: 1px solid transparent;
        &:hover{
            background: transparent;
            color: #F5426C;
            border: 1px solid #F5426C;
        }
    }   
`

export const WrapperImg = styled.div``

export const MaxContainer = styled.div`
    max-width: 1100px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
`
