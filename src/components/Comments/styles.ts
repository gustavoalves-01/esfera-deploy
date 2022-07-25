import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 851px;
    margin-top:56px ;

    h3{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 33px;
        /* identical to box height */
        color: #181818;
        margin-bottom: 40px;
    }
   

    @media(max-width: 1100px){
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
    }
`

export const ContainerComment = styled.div`
    display: flex;
    align-items: flex-start;

    
    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
      padding-left: 1rem;
      
      input {
        font: 400 16px/22px 'Open Sans';
        padding: 0.5rem 1rem;
      }
      
      textarea {
        height: 144px;
        font: 400 16px/22px 'Open Sans';
        padding: 0.5rem 1rem;
        width: 100%;
      }
        
      button{
        margin-left: auto;
        padding: 8px 57px;
        font: 600 1rem/1.5rem "Nexa", "Open Sans", sans-serif;
        color: #fff;
        background: #F5426C;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }

      &.errored {
        position: relative;
        
        &::after {
          content: 'Erro ao enviar comentário.';
          color: #F5426C;
          position: absolute;
          bottom: 1rem;
          left: 1rem;
        }
      }

      &.success {
        position: relative;
        
        &::after {
          content: 'Comentário enviado!';
          color: #65B32B;
          position: absolute;
          bottom: 1rem;
          left: 1rem;
        }
      }
    }


     @media(max-width: 1100px){
        .imagemComment{
            display: none;
        }

        div{
            margin-left: 0;
            padding: 0;
        }
    }
`