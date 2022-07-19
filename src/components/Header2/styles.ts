import styled from "styled-components";

interface HeaderContainerProps {
  isPostPage: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: #fff;
  
  .headerContentWrapper {
    display: flex;
    max-width: 1181px;
    width: 100%;
    padding: 0 2rem;
    justify-content: space-between;

    .logoWrapper {
      position: relative;
      display: flex;
      max-width: 273px;
      width: 100%;
      height: 96px;
    }

    ul {
      display: flex;
      list-style: none;
      margin: auto 0;
      gap: 40px;

      li {
        cursor: pointer;
        font: 700 14px/24px "Open-sans", sans-serif;
       
        &.dropdown {
          position: relative;
          span {
            display: flex;
            gap: 5px;
            img {
              transition: all 0.3s ease;
            }
          }

          div {
            position: absolute;
            top: calc(100%);
            left: 0;
            max-height: 0;
            padding: 0;
            overflow: hidden;
            transition: all 0.3s ease-in-out;
          }
          
          &:hover {
            span img {
              transform: rotate(180deg);
            }
            
            div {
              max-height: 1000px;
              padding-top: 28px;
            }
          }
          
          &.categories .submenu {
            display: flex;
            left: 50%;
            transform: translateX(-50%);
            
            ul {
              position: relative;
              background: #F5F5F5;
              padding: 22px 18px;
              display: grid;
              grid-template-columns: repeat(2, auto);
              gap: 16px;

              &::before {
                content: '';
                position: absolute;
                bottom: 100%;
                left: 50%;
                transform: translate(-50%);
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-bottom: 10px solid #F5F5F5;
              }

              li {
                display: flex;

                a {
                  padding: 2px 5px;
                  border-radius: 5px;
                  font-family: 'Open Sans';
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 12px;
                  text-transform: uppercase;
                  color: var(--pink-500);
                  border: 1px solid var(--pink-500);
                  background-color: #FFF;
                  white-space: nowrap;
                  transition: all 0.3s ease;

                  &:hover {
                    background: var(--pink-500);
                    color: #FFF;
                  }
                }
              }
            }
            
          }

          &.solucoes .submenu {
            display: flex;

            ul {
              display: flex;
              flex-direction: column;
              gap: 4px;
              
              li a {
                width: 100%;
                display: flex;
                align-items: center;
                background: #FF8F00;
                padding: 4px 15px;
                border-radius: 20px;
                font: 600 15px/24px "Nexa", sans-serif;
                color: #FFF;
                white-space: nowrap;

                &:hover {
                  background: #e68100;
                }
              }
            }
          }
        }

      }
    }

    .searchContainer, .ctaContainer {
      display: none;
    }

    &.scrolled {
      justify-content: flex-start;
      
      .logoWrapper {
        max-width: 56px;
        margin-right: 48px;
        
        img {
          object-fit: contain;
        }
      }

      ul {
        li {
          &.noScroll {
            display: none;
          }
        }
      }

      .searchContainer {
        display: flex;
        align-items: center;
        flex: 1;
        margin-left: 112px;

        label {
          width: 100%;
        }

      }

      .ctaContainer {
        display: flex;
        align-items: center;
        margin-left: 40px;
      }
    }
  }

  .headerContentWrapper__mbl {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    justify-content: space-between;
    background-color: #FFF;

    .logoWrapper {
      position: relative;
      display: flex;
      max-width: 220px;
      width: 100%;
      height: 45px;
    }

    .headerButtons {
      display: flex;
      align-items: center;
      padding-right: 11px;
      gap: 24px;

      > button, .searchButton > button {
        position: relative;
        display: flex;
        width: 24px;
        height: 24px;
        background: transparent;
        border: none;

        span {
          pointer-events: none;
        }
      }
    }

    .searchContainer {
      display: flex;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      &.show {
        opacity: 1;
        visibility: visible;
      }
      
      .searchOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: -1;
      }

      .searchModal {
        width: 100%;
        margin: auto 1rem;
        padding: 40px 2rem;
        background-color: #fff;
        border-radius: 8px;
        z-index: 1;
        
        h3 {
          font: 600 18px/25px 'Open Sans', sans-serif;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
`

export const CategorySelector = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 1.5rem;
  z-index: 100;

  button {
    display: flex;
    padding: 13px 1rem;
    background: #FFFFFF;
    border: 1px solid #4F5151;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    z-index: 2;

    span {
      font: 300 14px/24px 'Open Sans', sans-serif;
    }
  } 

  .categoriesWrapper {
    display: flex;
    background: #F5F5F5;
    border: 1px solid #4F5151;
    border-radius: 5px;
    height: 100%;
    overflow: scroll;
    margin-top: -10px;
    z-index: 1;
    max-height: 0;
    
    &.drop {
      max-height: 150px;
    }

    ul { 
      padding: 22px 18px;
      display: grid;
      grid-template-columns: repeat(2, auto);
      gap: 16px;

      li {
        display: flex;
        height: fit-content;
        align-self: center;

        a {
          padding: 2px 5px;
          border-radius: 5px;
          font-family: 'Open Sans';
          font-weight: 700;
          font-size: 12px;
          line-height: 12px;
          text-transform: uppercase;
          color: var(--pink-500);
          border: 1px solid var(--pink-500);
          background-color: #FFF;
          display: flex;
          text-align: left;
          height: min-content;
          align-items: center;
          justify-self: center;
          transition: all 0.3s ease;

          &:hover {
            background: var(--pink-500);
            color: #FFF;
          }
        }
      }
    }
  }
  



`

