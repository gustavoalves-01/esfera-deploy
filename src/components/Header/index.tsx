import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../Button';
import InputComponent from '../InputComponent';
import SearchComponent from '../SearchComponent';
import TagCategory from '../TagCategory'

interface Category {
    name: string;
    slug: string;
}

interface CategoryProps {
    categories: Category[]
}
function Header({ categories }: CategoryProps) {


    //fazer map da parada (categories)

    const [verifyHeaderActive, setVerifyHeaderActive] = useState(true);
    const [activePopupRecebeConteudos, setActivePopupRecebeConteudos] = useState(false);

    const [positionHeader, setPositionHeader] = useState("relative");
    const [numberResponsive, setNumberResponsive] = useState(true);
    const [categorieActive, setCategorieActive] = useState(false);

    useEffect(() => {
        if (window) {
            if (window.innerWidth >= 1200) {
                window.addEventListener("scroll", () => {
                    if (window.scrollY > 100) {
                        setVerifyHeaderActive(false)
                        setPositionHeader("fixed")
                    } else {
                        setVerifyHeaderActive(true)
                        setPositionHeader("relative")
                    }
                })
            }
        }

    })

    function activeCategory() {
        setCategorieActive(!categorieActive)
    }


    useEffect(() => {
        if (window) {
            if (window.innerWidth >= 1200) {
                setNumberResponsive(true)
            } else if (window.innerWidth < 1200) {
                setNumberResponsive(false) //verificar essa linha
                setPositionHeader("fixed")
            }
        }

    }, [])


    function activePopupReceber() {
        setActivePopupRecebeConteudos(!activePopupRecebeConteudos)
    }

    if (numberResponsive) {
        return (
            <HeaderElement myPosition={positionHeader}>
                <MaxContainer>
                    {verifyHeaderActive ? <Image width={240} height={48} alt="Logo novo esfera energia" src="/images/logo__esfera.svg" /> : <Image width={50} height={48} alt="Logo novo esfera energia" src="/images/logo_mini_esfera.svg" />}

                    {verifyHeaderActive ?
                        <PrincipalList>
                            <SublistInUl>
                                <li>Categorias <span><Image width={7} height={7} alt="arrow grey" src="/images/icons/arrow-list.svg" /></span></li>

                                <div>
                                    {categories.map((category) => {
                                        return (
                                            <React.Fragment key={category.slug}><TagCategory categoryName={category.name} link={`/blog/${category.slug}`} /></React.Fragment>
                                        )
                                    })}
                                </div>

                            </SublistInUl>

                            <SublistInUl>
                                <li>Materiais gratuitos <span><Image width={7} height={7} alt="arrow grey" src="/images/icons/arrow-list.svg" /></span></li>
                                <div>
                                    <p>Material 1</p>
                                </div>
                            </SublistInUl>


                            <SublistInUl>
                                <li>Soluções <span><Image width={7} height={7} alt="arrow grey" src="/images/icons/arrow-list.svg" /></span></li>
                                <div>
                                    <p>Soluções</p>
                                </div>
                            </SublistInUl>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="">O Mercado Livre de Energia</a></li>
                        </PrincipalList> :
                        <PrincipalList >
                            <SublistInUl>
                                <li>Categorias <span><Image width={7} height={7} alt="arrow grey" src="/images/icons/arrow-list.svg" /></span></li>
                                <div>
                                    {categories.map((category) => {
                                        return (
                                            <React.Fragment key={category.slug}><TagCategory categoryName={category.name} link={`/blog/${category.slug}`} /></React.Fragment>
                                        )
                                    })}
                                </div>

                            </SublistInUl>

                            <SublistInUl>
                                <li>Materiais gratuitos <span><Image width={7} height={7} alt="arrow grey" src="/images/icons/arrow-list.svg" /></span></li>
                                <div>
                                    <p>Material 1</p>
                                </div>
                            </SublistInUl>


                            <SublistInUl>
                                <li>Soluções <span><Image width={7} height={7} alt="arrow grey" src="/images/icons/arrow-list.svg" /></span></li>
                                <div>
                                    <p>Soluções</p>
                                </div>
                            </SublistInUl>
                            <ContainerInput>
                                <SearchComponent typeInput="search" widthInput='192px' heightInput='40px' placeholder='Encontre um artigo' />
                            </ContainerInput>

                            <ContainerButton>
                                <span onClick={() => activePopupReceber()}>
                                    <Button textButton='Receber conteúdos' widthButton='186px' heightButton='40px' typeButton="" />
                                </span>

                                <PopupConteudos verifyPopup={activePopupRecebeConteudos}>
                                    <p>Receba os melhores conteúdos da Esfera Energia</p>
                                    <InputComponent widthInput='255px' heightInput='53px' placeholder='Digite seu e-mail' typeInput='email' />
                                    <Button textButton='Receber conteúdos' widthButton='255px' heightButton='53px' typeButton="receber" />
                                    <span>Os conteúdos são 100% gratuitos e você pode parar de receber quando quiser.</span>
                                </PopupConteudos>
                            </ContainerButton>


                            <ContainerButton>
                                <Button textButton='Fale com um especialista' widthButton='244px' heightButton='40px' backgroundButton='#BB2F55' radius={39} typeButton="especialista" />
                            </ContainerButton>
                        </PrincipalList>

                    }
                </MaxContainer>
            </HeaderElement>
        )
    } else {
        return (
            <HeaderElement myPosition={positionHeader}>
                <Image width={175} height={37} alt="Logo novo esfera energia" src="/images/logo__esfera.svg" />
                <div>
                    <span onClick={() => activePopupReceber()}><Image width={24} height={24} alt="Logo novo esfera energia" src="/images/icons/search.svg" /></span>
                    <span><Image width={24} height={24} alt="Logo novo esfera energia" src="/images/icons/hamburger.svg" /></span>

                    <OverlayMobile activePopup={activePopupRecebeConteudos}>
                        <ContainerPopupMobile activePopup={activePopupRecebeConteudos} activeCategories={categorieActive}>

                            <ClosePopup onClick={() => activePopupReceber()}><Image width={30} height={30} alt="Close icon novo esfera energia" src="/images/icons/close.svg" /></ClosePopup>
                            <h3>O que você busca?</h3>
                            <SearchComponent widthInput='100%' heightInput='52px' placeholder='Encontre um artigo' typeInput='search' />

                            <SelectButton onClick={() => activeCategory()} activeCategories={categorieActive}>Categorias <Image width={16} height={8} alt="Arrow cinza" src="/images/icons/arrow-select.svg" /></SelectButton>

                            <div>
                                {categories.map((category) => {
                                    return (
                                        <React.Fragment key={category.slug}><TagCategory categoryName={category.name} link={`/blog/${category.slug}`} /></React.Fragment>
                                    )
                                })}
                            </div>

                            <ContainerButtonBuscar>
                                <Button textButton='Buscar' widthButton='152px' heightButton='44px' typeButton="buscar" />
                            </ContainerButtonBuscar>

                        </ContainerPopupMobile>
                    </OverlayMobile>
                </div>
            </HeaderElement>
        )
    }
}



export default Header


interface PropsHeader {
    myPosition: string;
}
export const HeaderElement = styled.header<PropsHeader>`

    background: #FFFFFF;

    position: ${(props) => props.myPosition}; 
    padding-top: 22px;
    padding-bottom: 32px;

    width: 100%;
    border: 1px solid ${(props) => props.myPosition === "fixed" ? "#E5E5E5" : "transparent"};
    @media(max-width: 1200px){
        height: 70px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 16px;
        padding-right: 16px;


        padding-top: 0px;
        padding-bottom: 0px;

        div > span{
            margin-left: 24px;
        }
    }
`

export const MaxContainer = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;

    justify-content: space-between;
    align-items: center;
    ul{
        list-style: none;
        display: flex;
        justify-content:  space-between;
    }

    li{
        cursor: pointer;

        margin-left: 32px;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        /* or 171% */
        letter-spacing: 0.1px;

        color: #000000;
        transition: .2s;

        display: flex;
        align-items: center;
    }


    @media(max-width: 1200px){
        ul{
            display: none;
        }    
    }
`
export const SublistInUl = styled.ul`
    position: relative;

    >div{
        opacity: 0;
        pointer-events: all;

        position: absolute;
        top: 50px;
        background: #F5F5F5;
        width: 224.43px;
        display: flex;
        flex-wrap: wrap;
        padding: 22px 18px 0px 18px;

        justify-content: space-between;

        left: 60%;
        transform: translateX(-50%);

        transition: .5s;

        a{
            margin-bottom: 16px;
        }
    }

    span{
        position: relative;
        top: -0.5px;
        padding-left: 5px;
    }
    

    &::after{

        opacity: 0;
        pointer-events: none;
        transition: .5s;

        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;


        border-bottom: 30px solid #F5F5F5;
        top: 30px; /*localização. Experimente alterar para 'bottom'*/
        left: 50%;
    }



    &:hover{
        >div, &::after{
            opacity: 1;
            /* pointer-events: all; */

        }
    }
`

export const ContainerInput = styled.span`
    position: relative;
    margin-left: 48px;
`
export const ContainerButton = styled.span`
    position: relative;
 margin-left: 32px;
 
`


interface PropsPopup {
    verifyPopup: boolean;
}
export const PopupConteudos = styled.div<PropsPopup>`
    position: absolute;
    background-color: #F5F5F5;
    padding: 32px 24px;

    left: 50%;
    transform: translateX(-50%);
    top: 72px;

    opacity: ${(props) => props.verifyPopup ? "1" : "0"};
    pointer-events: ${(props) => props.verifyPopup ? "all" : "none"};
        
    transition: .3s;

    &::after{

        opacity: ${(props) => props.verifyPopup ? "1" : "0"};
        pointer-events: ${(props) => props.verifyPopup ? "all" : "none"};
        transition: .5s;

        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;


        border-bottom: 30px solid #F5F5F5;
        top: -23px; /*localização. Experimente alterar para 'bottom'*/
        left: 45%;
    }

    
    p{
        color: #4F5150;
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 110%;
        text-align: center;
        margin-bottom: 16px;
    }

    span{
        font-style: italic;
        font-weight: 300;
        font-size: 12px;
        line-height: 120%;        
        color: #4F5150;
        text-align: center;


        display: flex;
        align-items: center;
        margin-top: 16px;
    }

    button{
        margin-top: 16px;
    }
`

export const PrincipalList = styled.ul`
    @media(max-width: 1200px){
        
    }
`

interface PropsContainerPopupMobile {
    activePopup?: boolean;
    activeCategories?: boolean;
}
export const ContainerPopupMobile = styled.div<PropsContainerPopupMobile>`
    opacity: ${(props) => props.activePopup ? "1" : "0"};
    pointer-events: ${(props) => props.activePopup ? "all" : "none"};
    transition: .3s;

    position: absolute;
    max-width: 369px;
    width: 96%;
    height: auto;
    background: #fff;

    border-radius: 8px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    padding: 40px 32px;



    h3{
        font-weight: 600;
        font-size: 18px;
        line-height: 25px;
        text-align: center;

        color: #181818;
        margin-bottom: 24px;
        margin-bottom: 1;
    }

    >div{
        

        width: 100%;
        border: 1px solid #4F5151;
        border-radius: 5px;
        background: #FFFFFF;

        display: ${(props) => props.activeCategories ? "flex" : "none"};
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 16px;
        padding: 8px 16px;
    }

    a{
        margin-top: 8px;
        margin-bottom: 8px;
        margin-right: 8px;
    }

`

export const OverlayMobile = styled.div<PropsContainerPopupMobile>`

    opacity: ${(props) => props.activePopup ? "1" : "0"};
    pointer-events: ${(props) => props.activePopup ? "all" : "none"};
    transition: .3s;

    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;

    background-color: rgba(0, 0, 0, 0.5);
`

export const SelectButton = styled.button<PropsContainerPopupMobile>`
        font-family: 'Open Sans';
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #4F5151;
        box-sizing: border-box;
        border-radius: 5px;
        height: 48px;
        margin-top: 16px;
        margin-bottom: 16px;

        color: #8F8F8F;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 24px;

        display: flex;
        align-items: center;
        justify-content:  space-between;
        padding:0px 16px;
    
        span{
            transition: .3s;
            transform: ${(props) => props.activeCategories ? "rotate(180deg)" : "rotate(0deg)"};
        }

`
export const ContainerButtonBuscar = styled.span`
        text-align: center;
        margin-left: 0 !important;

        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
`

export const ClosePopup = styled.span`
    position: absolute;
    right: 20px;
    top: 20px;
`