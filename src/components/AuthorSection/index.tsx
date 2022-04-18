import React from 'react';
import Image from 'next/image';
import { Container } from './styled';
import Link from 'next/link';

interface AuthorSectionProps {
  imageURL: string;
  name: string;
  about: string;
}

export const AuthorSection = ({
  imageURL,
  name,
  about,
}: AuthorSectionProps) => {
  return (
    <Container>
      <div className="profilePicWrapper">
        <Image src={imageURL} layout="fill" alt={name} />
      </div>
      <div className="authorHeader">
        <span>Escrito por:</span>
        <h1>{name}</h1>
      </div>
      <p>{about}</p>
      <div className="linksSection">
        <Link href="" passHref>
          <div className="socialIcon">
            <Image
              src="/images/icons/facebook-logo.svg"
              alt="facebook"
              layout="fill"
            />
          </div>
        </Link>
        <Link href="" passHref>
          <div className="socialIcon">
            <Image
              src="/images/icons/linkedin-logo.svg"
              alt="linkedin"
              layout="fill"
            />
          </div>
        </Link>
        <Link href="" passHref>
          <div className="socialIcon">
            <Image
              src="/images/icons/twitter-logo.svg"
              alt="twitter"
              layout="fill"
            />
          </div>
        </Link>
      </div>
    </Container>
  );
};
