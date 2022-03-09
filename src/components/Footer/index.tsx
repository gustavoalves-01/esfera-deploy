import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'


function Footer() {

    const [activeDropDown, setActiveDropDown] = useState("")

    function listActiveFooter() {
        if (activeDropDown) {
            setActiveDropDown("")
        } else {
            setActiveDropDown("active")
        }
    }

    return (
        <Container>
            <MaxContainer>
                <RowOneFooter>
                    <Image width={155} height={54} alt="Logo Esfera Branco" src="/images/logo__esfera--white.png" />

                    <SocialIcons>
                        <a href="https://www.youtube.com/channel/UCBuYVcgaT8JztAdeQhexmRw">
                            <Image width={30} height={30} alt="Icone logo Youtube" src="/images/icons/icon--yt.svg" />
                        </a>
                        <a href="https://www.linkedin.com/company/esfera-energia-consultoria-e-gestão-de-energia-ltda/">
                            <Image width={30} height={30} alt="Icone logo Linkedin" src="/images/icons/icon--ld.svg" />
                        </a>
                        <a href="https://www.facebook.com/esferagestaodeenergia/">
                            <Image width={30} height={30} alt="Icone logo Facebook" src="/images/icons/icon--fb.svg" />
                        </a>
                        <a href="https://www.instagram.com/esferaenergia/">
                            <Image width={30} height={30} alt="Icone logo Instagram" src="/images/icons/icon--insta.svg" />
                        </a>
                    </SocialIcons>
                </RowOneFooter>


                <RowTwoFooter>
                    <p>© 2021 Esfera Energia. All rights reserved.</p>

                    <ListFooter>
                        <li><a href="https://esferaenergia.com.br">Home</a></li>
                        <ListInListFooter className={activeDropDown}>
                            <span onClick={listActiveFooter}>Soluções</span>
                            <a href="https://esferaenergia.com.br/mercado-livre/consumidores-livres/">consumidores livres</a>
                            <a href="https://esferaenergia.com.br/mercado-livre/consumidores-cativos/">consumidores cativos</a>
                            <a href="https://esferaenergia.com.br/mercado-livre/usinas-geradoras/">usinas geradoras</a>
                        </ListInListFooter>

                        <li><a href="https://esferaenergia.com.br/sobre-nos/">sobre nós</a></li>
                        <li><a href="https://esferaenergia.com.br/carreiras/">carreira</a></li>
                        <li><a href="https://esferaenergia.com.br/mercado-livre/">o mercado livre de energia</a></li>
                        <li><a href="https://esferaenergia.com.br/blog/">Blog</a></li>
                    </ListFooter>
                </RowTwoFooter>
            </MaxContainer>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    background: #2d2f40;
    padding: 20px 0px;
    
    @font-face {
        font-family: 'Nexta Light';
        src: url('/fonts/nexta/NexaTextDemo-Light.woff') format('woff');
    }
`
const MaxContainer = styled.div`
    max-width: 1111px;
    margin: 0 auto;

    
    @media(max-width: 1111px){
        padding-left: 10px;
        padding-right: 10px;
    }
    @media(max-width: 768px){
        padding-left: 16px;
        padding-right: 16px;
    }
`
const RowOneFooter = styled.div`
    padding: 40px 0px;

    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4C4D53;

    @media(max-width: 768px){
       flex-direction: column;
       justify-content: center;
       align-items:center;
    }
`

const SocialIcons = styled.div`
    a{
        margin-left: 8px;
    }

    @media(max-width: 768px){
            margin-top: 54px;
    }
`


const RowTwoFooter = styled.div`
    padding-bottom: 40px;
    padding-top: 3.125rem;

    display: flex;
    justify-content: space-between;

    p{
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 40px;
        color: #fff;
        margin: 0;
        font-family: 'Nexta Light', "Open Sans", sans-serif;
    }

    @media(max-width: 768px){
        p{
            text-align: center;
            margin-right: auto;
            margin-left: auto;
        }
    }
    @media(max-width: 500px){
        p{

            max-width: 300px;
        }
    }
`

const ListFooter = styled.ul`
    text-align: right;
    list-style: none;

    li a, span{ 
        transition: all .3s ease;
        font-size: 20px;
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 32px;
        color: #fff;
        text-transform: lowercase;
        text-decoration: none;
        cursor: pointer;

        &:hover{
            color: #f0416e;
        }
    }
    
    @media(max-width: 768px){
        display: none;
    }
`

const ListInListFooter = styled.ul`
    font-family: nexa_boldregular, "Open Sans", sans-serif;
    span::selection{ background: none;}

    span::after{
        display: inline-block;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        position: relative;
        top: 0.125rem;
        border-right: 0.3em solid transparent;
        border-left: 0.3em solid transparent;
        border-top: 0.3em solid #fff;
        border-bottom: 0;
        transition: all .3s ease;
    }

    span:hover::after{
       border-top-color: #f0416e;
    }

    padding: 0;
    a{
        display: none;
        transition: all .3s ease;
        font-size: 18px!important;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 32px;
        color: #fff;
        text-transform: lowercase;
        text-decoration: none;

        &:hover{
            color: #f0416e;
        }
    }

    &.active{
        a{
            display: block;
        }
        span{
            color: #f0416e;

            &::after{
                border-top-color: #f0416e;
                transform: rotate(-180deg);
            }
        }
    }
`
