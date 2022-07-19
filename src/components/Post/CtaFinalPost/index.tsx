import Image from 'next/image';
import React from 'react'
import { Container } from './styles';
interface PropsCtaFinalProps {
  title: string;
  subtitle: string;
  textButton: string;
  photoUrl: string;
  depoiment: string;
}

function CtaFinalPost({ title, subtitle, textButton, photoUrl, depoiment }: PropsCtaFinalProps) {
  return (
    <Container>
      <div className="content">
        <div className="ctaWrapper">
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <button>{textButton}</button>
        </div>
        <div className="depoimentWrapper">
          <div className="imgWrapper">
            <Image src={photoUrl} alt="Person photo" width="115" height="115" />
          </div>
          <p>{depoiment}</p>
        </div>
      </div>
    </Container >
  )
}

export default CtaFinalPost;

