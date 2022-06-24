// Framework
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import TagCategory from '../../../TagCategory';

// Styles
import { MaterialContainer } from './styles';
import { MaterialPreviewInterface } from '../../../../entities/Material';

interface PostPreviewProps {
  material: MaterialPreviewInterface;
  isWide?: boolean;
}

const MaterialPreview = ({ material, isWide }: PostPreviewProps) => {
  return (
    <MaterialContainer isWide={isWide}>
      <div className="materialHeader mobile">
        <TagCategory categoryName={material.categories[0]} />
        <span className="materialDate">{material.date}</span>
      </div>

      <div className="imageWrapper">
        <Image
          src={material.imageURL}
          alt=""
          layout="fill"
          className="materialImage"
        />
      </div>
      <div className="contentWrapper">
        {isWide && (
          <div className="materialHeader wide">
            <TagCategory categoryName={material.categories[0]} />
            <span className="materialDate">{material.date}</span>
          </div>
        )}

        <h1>{material.title}</h1>
        <p>{material.excerpt}</p>

        <div className="materialFooter">
          <Link href="/" passHref>
            <button>Acessar material</button>
          </Link>
        </div>
      </div>
    </MaterialContainer>
  );
};

export default MaterialPreview;
