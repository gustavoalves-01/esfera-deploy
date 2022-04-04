import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import InputComponent from '../InputComponent';
import SearchComponent from '../SearchComponent';
import TagCategory from '../TagCategory';
import {
  ClosePopup,
  ContainerButton,
  ContainerButtonBuscar,
  ContainerInput,
  ContainerPopupMobile,
  HeaderElement, Line, MaxContainer,
  OverlayMobile,
  PopupConteudos,
  PrincipalList,
  SelectButton,
  SublistInUl
} from './styles';

interface Category {
  name: string;
  slug: string;
}

interface CategoryProps {
  categories: Category[];
}
function Header({ categories }: CategoryProps) {
  //fazer map da parada (categories)
  const [verifyHeaderActive, setVerifyHeaderActive] = useState(true);
  const [activePopupRecebeConteudos, setActivePopupRecebeConteudos] =
    useState(false);

  const [positionHeader, setPositionHeader] = useState('relative');
  const [numberResponsive, setNumberResponsive] = useState(false);
  const [categorieActive, setCategorieActive] = useState(false);

  const [widthLine, setWidthLine] = useState(0)

  useEffect(() => {
    if (window) {
      if (window.innerWidth >= 1200) {
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
    }
  });


  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setNumberResponsive(true);
    } else if (window.innerWidth < 1200) {
      setNumberResponsive(false);//verificar essa linha
      setPositionHeader('fixed');
    }
  }, []);

  function activeCategory() {
    setCategorieActive(!categorieActive);
  }

  function activePopupReceber() {
    setActivePopupRecebeConteudos(!activePopupRecebeConteudos);
  }






  if (numberResponsive) {
    return (
      <HeaderElement myPosition={positionHeader}>
        <MaxContainer>
          {verifyHeaderActive ? (
            <Image
              width={240}
              height={48}
              alt="Logo novo esfera energia"
              src="/images/logo__esfera.svg"
            />
          ) : (
            <Image
              width={50}
              height={48}
              alt="Logo novo esfera energia"
              src="/images/logo_mini_esfera.svg"
            />
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
                          link={`/blog/${category.slug}`}
                        />
                      </React.Fragment>
                    );
                  })}
                </div>
              </SublistInUl>

              <SublistInUl>
                <li>
                  Materiais gratuitos{' '}
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
                  <p>Material 1</p>
                </div>
              </SublistInUl>

              <SublistInUl>
                <li>
                  Soluções{' '}
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
                  <p>Soluções</p>
                </div>
              </SublistInUl>
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

              <SublistInUl>
                <li>
                  Materiais gratuitos{' '}
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
                  <p>Material 1</p>
                </div>
              </SublistInUl>

              <SublistInUl>
                <li>
                  Soluções{' '}
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
                  <p>Soluções</p>
                </div>
              </SublistInUl>
              <ContainerInput>
                <SearchComponent
                  typeInput="search"
                  widthInput="192px"
                  heightInput="40px"
                  placeholder="Encontre um artigo"
                />
              </ContainerInput>

              <ContainerButton>
                <span onClick={() => activePopupReceber()}>
                  <Button
                    textButton="Receber conteúdos"
                    widthButton="186px"
                    heightButton="40px"
                    typeButton=""
                  />
                </span>

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
                    Os conteúdos são 100% gratuitos e você pode parar de receber
                    quando quiser.
                  </span>
                </PopupConteudos>
              </ContainerButton>

              <ContainerButton>
                <Button
                  textButton="Fale com um especialista"
                  widthButton="244px"
                  heightButton="40px"
                  backgroundButton="#BB2F55"
                  radius={39}
                  typeButton="especialista"
                />
              </ContainerButton>

              <Line myWidth={widthLine}>a</Line>

            </PrincipalList>
          )}
        </MaxContainer>
      </HeaderElement>
    );
  } else {
    return (
      <HeaderElement myPosition={positionHeader}>
        <Image
          width={175}
          height={37}
          alt="Logo novo esfera energia"
          src="/images/logo__esfera.svg"
        />
        <div>
          <span onClick={() => activePopupReceber()}>
            <Image
              width={24}
              height={24}
              alt="Logo novo esfera energia"
              src="/images/icons/search-rosa.svg"
            />
          </span>
          <span>
            <Image
              width={24}
              height={24}
              alt="Logo novo esfera energia"
              src="/images/icons/hamburger.svg"
            />
          </span>

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
    );
  }
}

export default Header;
