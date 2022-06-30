import { CategoryInterface } from "../entities/Category";
import { MaterialPreviewInterface, RawMaterialPreview } from "../entities/Material";
import handleCategory from "./handleCategories";

const handleMaterialPreview = (data: any, categories: CategoryInterface[]) => {
  const materialList: MaterialPreviewInterface[] = data.map(
    (material: RawMaterialPreview) => {
      return {
        id: material.id,
        date: new Date(material.date).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        title: material.title.rendered,
        excerpt: material.descricao,
        slug: material.slug,
        tags: String(material.tags),
        link: material.link,
        imageURL: `/${material.imagem_do_material}`,
        categories: handleCategory(material.categories[0], categories)?.name,
      };
    }
  );

  return materialList;
};

export default handleMaterialPreview;