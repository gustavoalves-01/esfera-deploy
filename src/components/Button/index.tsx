import React from 'react';
import { useRouter } from 'next/router';
import { useBuscar } from '../../providers/buscarContext';

interface ButtonProps {
  typeButton: 'receber' | 'especialista' | 'buscar' | '';
  textButton: string;
  widthButton: string;
  heightButton: string;
  backgroundButton?: string;
  radius?: number;
}

import { ButtonElement } from './styles';

function Button({
  textButton,
  widthButton,
  heightButton,
  backgroundButton,
  radius,
  typeButton,
}: ButtonProps) {
  const { inputEncontreArtigo, inputEmail, enviarEmail } = useBuscar();
  const router = useRouter();

  function buscarArtigo() {
    // inputEncontreArtigo é o valor digitado no input
    router.push(`/wp-json/wp/v2/posts?search=${inputEncontreArtigo}`);
  }

  function falarComEspecialista() {
    router.push('/especialista');
  }

  function sendEmailForContext() {
    enviarEmail(inputEmail);
  }

  if (typeButton === 'buscar') {
    return (
      <ButtonElement
        buttonHeight={heightButton}
        buttonBackground={backgroundButton}
        buttonWidth={widthButton}
        buttonRadius={radius}
        onClick={() => buscarArtigo()}
      >
        {textButton}
      </ButtonElement>
    );
  } else if (typeButton === 'especialista') {
    return (
      <ButtonElement
        buttonHeight={heightButton}
        buttonBackground={backgroundButton}
        buttonWidth={widthButton}
        buttonRadius={radius}
        onClick={() => falarComEspecialista()}
      >
        {textButton}
      </ButtonElement>
    );
  } else if (typeButton === 'receber') {
    return (
      <ButtonElement
        buttonHeight={heightButton}
        buttonBackground={backgroundButton}
        buttonWidth={widthButton}
        buttonRadius={radius}
        onClick={() => sendEmailForContext()}
      >
        {textButton}
      </ButtonElement>
    );
  }
  return (
    <ButtonElement
      buttonHeight={heightButton}
      buttonBackground={backgroundButton}
      buttonWidth={widthButton}
      buttonRadius={radius}
    >
      {textButton}
    </ButtonElement>
  );
}

export default Button;
