import React, { useState } from 'react'
import Image from "next/image"
import styled from 'styled-components'
import { Container, ContainerComment } from './styles'
import { api } from '../../services/api';

interface ICommentsProps {
  postId: number;
}

function Comments({ postId }: ICommentsProps) {
  const [name, setName] = useState<string>();
  const [content, setContent] = useState<string>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSendComment = () => {
    if (!name || !content || name.length <= 0 || content.length <= 0) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
    }

    if (!isError) {
      // recaptcha
      const data = JSON.stringify({
        author_name: name,
        content,
        post: postId,
      })

      fetch("https://esferaenergia.com.br/wp-json/wp/v2/comments", {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      })
        .then(() => {
          setIsSuccess(true)
          setIsError(false)
        })
        .catch(() => {
          setIsSuccess(false);
          setIsError(true)
        });
    }
  }
  return (
    <Container>
      <h3>Deixe um comentário:</h3>

      <ContainerComment>
        <span className="imagemComment">
          <Image
            width={46}
            height={46}
            src="/images/profile_default.png"
            alt="usuário"
          />
        </span>

        <div className={isError ? "errored" : (isSuccess ? "success" : "")}>
          <input type="text" name="name" id="name" placeholder='Digite seu nome' onChange={(ev) => setName(ev.target.value)} />
          <textarea name="content" id="content" placeholder="Escreva seu comentário...." onChange={(ev) => setContent(ev.target.value)} />
          <button type='button' onClick={() => handleSendComment()}>Enviar</button>
        </div>
      </ContainerComment>
    </Container>
  )
}

export default Comments

