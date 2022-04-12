import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container } from './styles';

interface ShareContainerProps {
  slug: string;
}

export default function ShareContainer({ slug }: ShareContainerProps) {
  const postURL = `${process.env.BASE_URL}blog/${slug}`;

  return (
    <Container>
      <span>Compartilhe esse post:</span>

      <div className="linksContainer">
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${postURL}`}
          passHref
        >
          <div className="socialIcon">
            <Image
              src="/images/icons/facebook-logo.svg"
              alt="facebook"
              layout="fill"
            />
          </div>
        </Link>

        <Link
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${postURL}`}
          passHref
        >
          <div className="socialIcon">
            <Image
              src="/images/icons/linkedin-logo.svg"
              alt="linkedin"
              layout="fill"
            />
          </div>
        </Link>
        <Link
          href={`https://twitter.com/intent/tweet?text=${postURL}`}
          passHref
        >
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
}
