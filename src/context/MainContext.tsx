import { CategoryInterface } from "@/interfaces/CategoryInterface";
import { CompanyInterface } from "@/interfaces/CompanyInterface";
import { ProductsInterface } from "@/interfaces/ProductsInterface";
import { createContext, useState } from "react";

interface MainContextProps {
  company: CompanyInterface | null;
  categories: CategoryInterface[] | null;
  products: ProductsInterface[] | null;
  selectedCategoryId: number | null;
  setCompany: (company: CompanyInterface | null) => void;
  setCategories: (categories: CategoryInterface[] | null) => void;
  setProducts: (products: ProductsInterface[] | null) => void;
  setSelectedCategoryId: (categoryId: number | null) => void;
}

export const MainContext = createContext<MainContextProps>({
  company: null,
  categories: null,
  products: null,
  selectedCategoryId: null,
  setCompany: () => {},
  setCategories: () => {},
  setProducts: () => {},
  setSelectedCategoryId: () => {}
});

export const MainContextProvider = ({ children }: any) => {
  const [company, setCompany] = useState<CompanyInterface | null>(null);
  const [categories, setCategories] = useState<CategoryInterface[] | null>(null);
  const [products, setProducts] = useState<ProductsInterface[] | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const initialContextValue = {
    company,
    categories,
    products,
    selectedCategoryId,
    setCompany,
    setCategories,
    setProducts,
    setSelectedCategoryId,
  };

  return (
    <MainContext.Provider value={initialContextValue}>
      {children}
    </MainContext.Provider>
  );
};
