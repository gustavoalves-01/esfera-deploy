import Link from 'next/link';
import React from 'react';
import MaterialPreview from './MaterialPreview';

import { Container } from './styles';

interface MaterialPreviewSectionInterface {
  title: string;
  materials: any;
}

const MaterialPreviewSection = ({
  title,
  materials,
}: MaterialPreviewSectionInterface) => {
  return (
    <Container>
      <h2 className="titleBlog">{title}</h2>

      <div className="cardsWrapper">
        {materials.length > 0 &&
          materials.map((material: any, index: number) =>
            index !== 2 ? (
              material.highlight ? (
                <MaterialPreview key={material.id} material={material} isWide />
              ) : (
                <MaterialPreview key={material.id} material={material} />
              )
            ) : (
              <React.Fragment key={material.id}>
                <div className="intermissionContainer">
                  <h2>
                    A conta de luz da sua empresa é maior que 50 mil reais por
                    mês?
                  </h2>
                  <h3>
                    Economize até 35% da sua conta de energia todos os meses com
                    a gestão da Esfera Energia.
                  </h3>
                  <Link href="https://esferaenergia.com.br/" passHref>
                    <a>Receba o contato de um consultor especialista</a>
                  </Link>
                </div>
                <MaterialPreview material={material} />
              </React.Fragment>
            )
          )}
      </div>
    </Container>
  );
};

export default MaterialPreviewSection;
