export interface MaterialPreviewInterface {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tags: Array<string>;
  imageURL: string;
  slug: string,
  link: string,
  categories: string;
}

export interface RawMaterialPreview {
  id: string;
  date: string,
  title: {
    rendered: string;
  };
  descricao: string;
  slug: string;
  tags: Array<number>;
  link: string;
  imagem_do_material: string;
  categories: Array<number>;
}