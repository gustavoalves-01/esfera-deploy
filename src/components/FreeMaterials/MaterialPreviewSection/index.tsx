import React from 'react';
import MaterialPreview from './MaterialPreview';

import { Container } from './styles';

interface MaterialPreviewSectionInterface {
  title: string;
  materials: any;
}

const PostPreviewSection = ({
  title,
  materials,
}: MaterialPreviewSectionInterface) => {
  return (
    <Container>
      <h2 className="titleBlog">Título</h2>

      <div className="cardsWrapper">
        {materials.length > 0 &&
          materials.map((material: any) =>
            material.highlight ? (
              <MaterialPreview key={material.id} material={material} isWide />
            ) : (
              <MaterialPreview key={material.id} material={material} />
            )
          )}
      </div>
    </Container>
  );
};

export default PostPreviewSection;
