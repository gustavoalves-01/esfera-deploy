import React, { SyntheticEvent, useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

import { CategorySelector, HeaderContainer } from './styles';
import { useCategories } from '../../hooks/useCategories';
import SearchComponent from '../SearchComponent';
import Button from '../Button';


interface HeaderProps {
  isPostPage?: boolean;
}

const Header = ({ isPostPage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(false);
  const [isSelectorOpened, setIsSelectorOpened] = useState<boolean>(false);
  const [isSolutionsDropped, setIsSolutionsDropped] = useState<boolean>(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);

  const { categories } = useCategories();

  useEffect(() => {
    if (window.innerWidth >= 1100) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      });
    }
  }, []);

  const verifyMobile = () => {
    if (window.innerWidth <= 990) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    verifyMobile();
    window.addEventListener('resize', () => {
      verifyMobile
    })
  }, []);

  const handleOpenSearch = (ev: any) => {
    if (ev.target.classList.contains('searchButtonElement')) {
      setIsSearchOpened(true);
    } else if (ev.target.classList.contains('searchOverlay')) {
      setIsSearchOpened(false);
    }
  }

  const handleOpenSelector = () => {
    setIsSelectorOpened(!isSelectorOpened)
  }

  const handleDropSolutions = () => {
    setIsSolutionsDropped(!isSolutionsDropped);
  }

  const handleOpenMobileMenu = (ev: any) => {
    if (ev.target.classList.contains('menuButtonElement')) {
      setIsMobileMenuOpened(true);
    }
  }

  return (
    <HeaderContainer isPostPage={isPostPage || false}>
      <div className="progress-container">
        <div className="progress-bar" id="js-barraDeLeitura"></div>
      </div>

      {
        !isMobile ?
          <div className={`headerContentWrapper ${isScrolled ? 'scrolled' : ''}`}>

            <Link href="/" passHref>
              <div className="logoWrapper">
                {
                  !isScrolled ?
                    <Image src="/images/logo__esfera.svg" alt="Esfera Energia" layout="fill" />
                    :
                    <Image src="/images/logo_mini_esfera.svg" alt="Esfera Energia" layout="fill" />
                }
              </div>
            </Link>

            <ul>
              <li className="dropdown categories">
                <span>
                  Categorias
                  <Image
                    src="/images/icons/arrow-list.svg"
                    alt=""
                    width={7}
                    height={7}
                  />
                </span>

                <div className="submenu">
                  <ul>
                    {
                      categories &&
                      categories.map((category) => <li key={category.id}><a href={`/${category.slug}`}>{category.name}</a></li>)
                    }
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/materiais">
                  <a>Materiais gratuitos</a>
                </Link>
              </li>
              <li className="dropdown solucoes">
                <span>
                  Soluções
                  <Image
                    src="/images/icons/arrow-list.svg"
                    alt=""
                    width={7}
                    height={7}
                  /></span>
                <div className="submenu">
                  <ul>
                    <li><a target="_blank" href="https://esferaenergia.com.br/mercado-livre/consumidores-livres/" rel="noreferrer">Estou no Mercado Livre de Energia</a></li>
                    <li><a target="_blank" href="https://esferaenergia.com.br/mercado-livre/consumidores-cativos/" rel="noreferrer">Não estou no Mercado Livre de Energia</a></li>
                    <li><a target="_blank" href="https://esferaenergia.com.br/mercado-livre/usinas-geradoras/" rel="noreferrer">Usinas Geradoras</a></li>
                    <li><a target="_blank" href="https://esferaenergia.com.br/geracaodistribuida" rel="noreferrer">Para minha Residência</a></li>
                  </ul>
                </div>
              </li>
              <li className='noScroll'>
                <Link href="https://esferaenergia.com.br/sobre-nos/">
                  <a>Sobre nós</a>
                </Link>
              </li>
              <li className='noScroll'>
                <Link href="https://esferaenergia.com.br/mercado-livre">
                  <a>O Mercado Livre de Energia</a>
                </Link>
              </li>
            </ul>

            <div className="searchContainer">
              <SearchComponent
                widthInput="100%"
                heightInput="40px"
                widthIcon="40px"
                typeInput="search"
                placeholder="Encontre um artigo"
              />
            </div>

            <div className="ctaContainer">
              <Button
                textButton="Fale com um especialista"
                widthButton="244px"
                heightButton="40px"
                backgroundButton="#F5426C"
                typeButton="especialista"
              />
            </div>
          </div>
          :
          <div className="headerContentWrapper__mbl">
            <Link href="/" passHref>
              <div className="logoWrapper">
                <Image src="/images/logo__esfera.svg" alt="Esfera Energia" layout="fill" />
              </div>
            </Link>

            <div className="headerButtons">
              <div className="searchButton" onClick={(ev: any) => handleOpenSearch(ev)}>
                <button className="searchButtonElement">
                  <Image src="/images/icons/search-rosa.svg" alt="" layout="fill" />
                  <div className={`searchContainer ${isSearchOpened ? 'show' : ''}`} >
                    <div className="searchOverlay" />
                    <div className="searchModal">
                      <h3>O que você busca?</h3>
                      <SearchComponent
                        widthInput="100%"
                        heightInput="52px"
                        widthIcon="40px"
                        typeInput="search"
                        placeholder="Encontre um artigo"
                      />
                      <CategorySelector>
                        <button onClick={() => handleOpenSelector()}>
                          <span>Categorias</span>
                          <Image src="/images/icons/arrow-select.svg" width={16} height={8} alt="" />
                        </button>
                        <div className={`categoriesWrapper ${isSelectorOpened ? 'drop' : ''}`}>
                          <ul>
                            {
                              categories &&
                              categories.map((category) => <li key={category.id}><a href={`/${category.slug}`}>{category.name}</a></li>)
                            }
                          </ul>
                        </div>
                      </CategorySelector>
                    </div>
                  </div>
                </button>
              </div>
              <div className="menuButton" onClick={(ev) => handleOpenMobileMenu(ev)}>
                <button className="menuButtonElement">
                  <Image src="/images/icons/hamburger.svg" alt="" layout="fill" />
                  <div className={`menuContainer ${isMobileMenuOpened ? 'show' : ''}`}>
                    <button className="closeMblMenu" onClick={() => setIsMobileMenuOpened(false)}>
                      <Image src="/images/icons/arrow-right-rosa.svg" width={16} height={16} alt="" />
                    </button>
                    <ul>
                      <li>
                        <Link href=""><a>Materiais Gratuitos</a></Link>
                      </li>
                      <li className="dropdown solucoes">
                        <a onClick={() => handleDropSolutions()}>
                          Soluções
                          <Image
                            src="/images/icons/arrow-list.svg"
                            alt=""
                            width={7}
                            height={7}
                          /></a>
                        <div className={`submenu ${isSolutionsDropped ? 'drop' : ''}`}>
                          <ul>
                            <li><a target="_blank" href="https://esferaenergia.com.br/mercado-livre/consumidores-livres/" rel="noreferrer">Estou no Mercado Livre de Energia</a></li>
                            <li><a target="_blank" href="https://esferaenergia.com.br/mercado-livre/consumidores-cativos/" rel="noreferrer">Não estou no Mercado Livre de Energia</a></li>
                            <li><a target="_blank" href="https://esferaenergia.com.br/mercado-livre/usinas-geradoras/" rel="noreferrer">Usinas Geradoras</a></li>
                            <li><a target="_blank" href="https://esferaenergia.com.br/geracaodistribuida" rel="noreferrer">Para minha Residência</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="https://esferaenergia.com.br/sobre-nos/">
                          <a>Sobre nós</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://esferaenergia.com.br/mercado-livre">
                          <a>O Mercado Livre de Energia</a>
                        </Link>
                      </li>
                    </ul>

                    <SearchComponent
                      widthInput="100%"
                      heightInput="52px"
                      widthIcon="40px"
                      typeInput="search"
                      placeholder="Encontre um artigo"
                    />
                    <CategorySelector>
                      <button onClick={() => handleOpenSelector()}>
                        <span>Categorias</span>
                        <Image src="/images/icons/arrow-select.svg" width={16} height={8} alt="" />
                      </button>
                      <div className={`categoriesWrapper ${isSelectorOpened ? 'drop' : ''}`}>
                        <ul>
                          {
                            categories &&
                            categories.map((category) => <li key={category.id}><a href={`/${category.slug}`}>{category.name}</a></li>)
                          }
                        </ul>
                      </div>
                    </CategorySelector>
                    <div className="ctaContainer">
                      <Button
                        textButton="Fale com um especialista"
                        widthButton="100%"
                        heightButton="40px"
                        backgroundButton="#F5426C"
                        typeButton="especialista"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
      }
    </HeaderContainer>
  )
}

export default Header;