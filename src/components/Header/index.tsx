import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import InputComponent from '../InputComponent';
import SearchComponent from '../SearchComponent';
import TagCategory from '../TagCategory';
import {
  CategoryContainer,
  CloseIcon,
  ClosePopup,
  ContainerButton,
  ContainerButtonBuscar,
  ContainerDesktop,
  ContainerInput,
  ContainerMenuMobile,
  ContainerMobile,
  ContainerPopupMobile,
  HeaderElement,
  Line,
  MaxContainer,
  OverlayMobile,
  PopupConteudos,
  PrincipalList,
  SelectButton,
  SublistInUl,
} from './styles';

interface Category {
  name: string;
  slug: string;
}

interface CategoryProps {
  categories: Category[];
}
function Header({ categories }: CategoryProps) {
  const [verifyHeaderActive, setVerifyHeaderActive] = useState(true);
  const [activePopupRecebeConteudos, setActivePopupRecebeConteudos] =
    useState(false);

  const [positionHeader, setPositionHeader] = useState('relative');
  const [categorieActive, setCategorieActive] = useState(false);

  const [widthLine, setWidthLine] = useState(0);
  const [menuMobileActive, setMenuMobileActive] = useState('100%');

  function handleSetMenuMobileActive() {
    if (menuMobileActive == '100%') {
      setMenuMobileActive('0%');
    } else {
      setMenuMobileActive('100%');
    }
  }

  useEffect(() => {
    if (window.innerWidth >= 1100) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setVerifyHeaderActive(false);
          setPositionHeader('fixed');
        } else {
          setVerifyHeaderActive(true);
          setPositionHeader('relative');
        }
      });
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 1100) {
    } else if (window.innerWidth < 1100) {
      setPositionHeader('fixed');
    }
  }, []);

  function activeCategory() {
    setCategorieActive(!categorieActive);
  }

  function activePopupReceber() {
    setActivePopupRecebeConteudos(!activePopupRecebeConteudos);
  }


  const showProgressBar = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("js-barraDeLeitura")!.style.width = `${scrolled}%`;
  };

  useEffect(() => {
    window.onscroll = () => {
      showProgressBar();
    };
  }, [])


  return (
    <>
      <ContainerDesktop>
        <HeaderElement myPosition={positionHeader}>
          <div className="progress-container">
            <div className="progress-bar" id="js-barraDeLeitura"></div>
          </div>

          <MaxContainer>
            {verifyHeaderActive ? (
              <span className="logo">
                <Link href="/" passHref>
                  <Image
                    width={240}
                    height={48}
                    alt="Logo novo esfera energia"
                    src="/images/logo__esfera.svg"
                  />
                </Link>
              </span>
            ) : (
              <Link href="/" passHref>
                <Image
                  width={50}
                  height={48}
                  alt="Logo novo esfera energia"
                  src="/images/logo_mini_esfera.svg"
                />
              </Link>
            )}

            {verifyHeaderActive ? (
              <PrincipalList>
                <SublistInUl>
                  <li>
                    Categorias{' '}
                    <span>
                      <Image
                        width={7}
                        height={7}
                        alt="arrow grey"
                        src="/images/icons/arrow-list.svg"
                      />
                    </span>
                  </li>

                  <div>
                    {categories.map((category) => {
                      return (
                        <React.Fragment key={category.slug}>
                          <TagCategory
                            categoryName={category.name}
                            link={`/${category.slug}`}
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </SublistInUl>
                <Link href="/materiais" passHref>
                  <li>Materiais gratuitos</li>
                </Link>

                <>
                  <li>
                    Soluções{' '}
                  </li>
                </>
                <li>
                  <a href="#">Sobre nós</a>
                </li>
                <li>
                  <a href="">O Mercado Livre de Energia</a>
                </li>
              </PrincipalList>
            ) : (
              <PrincipalList>
                <SublistInUl>
                  <li>
                    Categorias{' '}
                    <span>
                      <Image
                        width={7}
                        height={7}
                        alt="arrow grey"
                        src="/images/icons/arrow-list.svg"
                      />
                    </span>
                  </li>
                  <div>
                    {categories.map((category) => {
                      return (
                        <React.Fragment key={category.slug}>
                          <TagCategory
                            categoryName={category.name}
                            link={`/blog/${category.slug}`}
                          />
                        </React.Fragment>
                      );
                    })}
                  </div>
                </SublistInUl>

                <>
                  <Link href="/materiais" passHref>
                    <li>Materiais gratuitos</li>
                  </Link>
                </>

                <>
                  <li>
                    Soluções{' '}
                  </li>
                </>
                <div className="containerInput">
                  <ContainerInput>
                    <SearchComponent
                      widthIcon="40px"
                      typeInput="search"
                      widthInput="192px"
                      heightInput="40px"
                      placeholder="Encontre um artigo"
                    />
                  </ContainerInput>
                </div>

                <ContainerButton>
                  <PopupConteudos verifyPopup={activePopupRecebeConteudos}>
                    <p>Receba os melhores conteúdos da Esfera Energia</p>
                    <InputComponent
                      widthInput="255px"
                      heightInput="53px"
                      placeholder="Digite seu e-mail"
                      typeInput="email"
                    />
                    <Button
                      textButton="Receber conteúdos"
                      widthButton="255px"
                      heightButton="53px"
                      typeButton="receber"
                    />
                    <span>
                      Os conteúdos são 100% gratuitos e você pode parar de
                      receber quando quiser.
                    </span>
                  </PopupConteudos>
                </ContainerButton>

                <ContainerButton>
                  <Button
                    textButton="Fale com um especialista"
                    widthButton="244px"
                    heightButton="40px"
                    backgroundButton="#F5426C"
                    typeButton="especialista"
                  />
                </ContainerButton>

                <Line myWidth={widthLine}></Line>
              </PrincipalList>
            )}
          </MaxContainer>
        </HeaderElement>
      </ContainerDesktop>

      <ContainerMobile>
        <HeaderElement myPosition={positionHeader}>
          <Link href="/" passHref>
            <Image
              width={190}
              height={37}
              alt="Logo novo esfera energia"
              src="/images/logo__esfera.svg"
            />
          </Link>

          <div>
            <span onClick={() => activePopupReceber()}>
              <Image
                width={24}
                height={24}
                alt="Logo novo esfera energia"
                src="/images/icons/search-rosa.svg"
              />
            </span>

            <span onClick={() => handleSetMenuMobileActive()}>
              <Image
                width={24}
                height={24}
                alt="Logo novo esfera energia"
                src="/images/icons/hamburger.svg"
              />
            </span>

            {/*  ======== MENU MOBILE ======== */}
            <ContainerMenuMobile myLeft={menuMobileActive}>
              <CloseIcon onClick={() => handleSetMenuMobileActive()}>
                <Image
                  width={40}
                  height={40}
                  src="/images/icons/close.svg"
                  alt="Close icon"
                />
              </CloseIcon>
              <Link href="/materiais">
                <a>Materiais Gratuitos</a>
              </Link>

              <Link href="/">
                <a>Seluções</a>
              </Link>

              <Link href="/">
                <a>Sobre nós</a>
              </Link>
              <Link href="/">
                <a>O mercado livre de energia</a>
              </Link>

              <SearchComponent
                widthInput="100%"
                heightInput="52px"
                widthIcon="40px"
                typeInput="search"
                placeholder="Encontre um artigo"
              />
              <SelectButton
                onClick={() => activeCategory()}
                activeCategories={categorieActive}
              >
                Categorias{' '}
                <Image
                  width={16}
                  height={8}
                  alt="Arrow cinza"
                  src="/images/icons/arrow-select.svg"
                />
              </SelectButton>
              <CategoryContainer activeCategories={categorieActive}>
                {categories.map((category) => {
                  return (
                    <React.Fragment key={category.slug}>
                      <TagCategory
                        categoryName={category.name}
                        link={`/blog/${category.slug}`}
                      />
                    </React.Fragment>
                  );
                })}
              </CategoryContainer>

              <Button
                heightButton="51px"
                widthButton="100%"
                textButton="Fale com um especialista"
                radius={6}
                typeButton="especialista"
                backgroundButton="#F5426C"
              />
            </ContainerMenuMobile>
            {/*  ======== MENU MOBILE ======== */}

            <OverlayMobile activePopup={activePopupRecebeConteudos}>
              <ContainerPopupMobile
                activePopup={activePopupRecebeConteudos}
                activeCategories={categorieActive}
              >
                <ClosePopup onClick={() => activePopupReceber()}>
                  <Image
                    width={30}
                    height={30}
                    alt="Close icon novo esfera energia"
                    src="/images/icons/close.svg"
                  />
                </ClosePopup>
                <h3>O que você busca?</h3>
                <SearchComponent
                  widthIcon="40px"
                  widthInput="100%"
                  heightInput="52px"
                  placeholder="Encontre um artigo"
                  typeInput="search"
                />

                <SelectButton
                  onClick={() => activeCategory()}
                  activeCategories={categorieActive}
                >
                  Categorias{' '}
                  <Image
                    width={16}
                    height={8}
                    alt="Arrow cinza"
                    src="/images/icons/arrow-select.svg"
                  />
                </SelectButton>

                <div>
                  {categories.map((category) => {
                    return (
                      <React.Fragment key={category.slug}>
                        <TagCategory
                          categoryName={category.name}
                          link={`/blog/${category.slug}`}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>

                <ContainerButtonBuscar>
                  <Button
                    textButton="Buscar"
                    widthButton="152px"
                    heightButton="44px"
                    typeButton="buscar"
                  />
                </ContainerButtonBuscar>
              </ContainerPopupMobile>
            </OverlayMobile>
          </div>
        </HeaderElement>
      </ContainerMobile>
    </>
  );
}

export default Header;
