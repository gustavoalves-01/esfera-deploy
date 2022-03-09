import Image from 'next/image'
import React, { useState } from 'react'
import { Container, MaxContainer, RowOneFooter, SocialIcons, RowTwoFooter, ListFooter, ListInListFooter } from "./styles"

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
