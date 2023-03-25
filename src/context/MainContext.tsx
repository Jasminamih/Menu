import { CategoryInterface } from "@/interfaces/CategoryInterface";
import { CompanyInterface } from "@/interfaces/CompanyInterface";
import { ProductsInterface } from "@/interfaces/ProductsInterface";
import { createContext, useState } from "react";

interface MainContextProps {
  company: CompanyInterface | null;
  categories: CategoryInterface[] | null;
  products: ProductsInterface[] | null;
  setCompany: (company: CompanyInterface | null) => void;
  setCategories: (categories: CategoryInterface[] | null) => void;
  setProducts: (products: ProductsInterface[] | null) => void;
}

export const MainContext = createContext<MainContextProps>({
  company: null,
  categories: null,
  products: null,
  setCompany: () => {},
  setCategories: () => {},
  setProducts: () => {},
});

export const MainContextProvider = ({ children }: any) => {
  const [company, setCompany] = useState<CompanyInterface | null>(null);
  const [categories, setCategories] = useState<CategoryInterface[] | null>(null);
  const [products, setProducts] = useState<ProductsInterface[] | null>(null)

  const initialContextValue = {
    company,
    categories,
    products,
    setCompany,
    setCategories,
    setProducts
  };

  return (
    <MainContext.Provider value={initialContextValue}>
      {children}
    </MainContext.Provider>
  );
};
