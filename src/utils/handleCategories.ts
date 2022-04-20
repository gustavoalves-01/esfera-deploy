import { CategoryInterface } from '../entities/Category';

export default function handleCategory(
  rawCategory: number,
  categories: CategoryInterface[]
) {
  const category = categories.find((category) => category.id === rawCategory);

  return category ? category.name : 'Artigo';
}
