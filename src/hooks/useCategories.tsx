import { CategoryInterface } from './../entities/Category';
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';

interface CategoriesProviderProps {
  children: ReactNode;
}

interface CategoriesContextData {
  categories: CategoryInterface[];
}

export const CategoriesContext = createContext<CategoriesContextData>({} as CategoriesContextData);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<CategoryInterface[]>([])

  useEffect(() => {
    fetch(`https://esferaenergia.com.br/wp-json/wp/v2/categories?_fields=id,name,slug`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
  }, []);

  return (
    <CategoriesContext.Provider
      value={{
        categories
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  return context;
}
