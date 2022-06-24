import { CategoryInterface } from '../entities/Category';

export default function handleCategory(
  rawCategory: number,
  categories: any,
) {
  const category = categories.find((category: any) => category.id === rawCategory);

  return category ? category : {name: 'Artigo', slug: 'artigo'};
}
