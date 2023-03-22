import { CategoryInterface } from "@/interfaces/CategoryInterface";
import { CompanyInterface } from "@/interfaces/CompanyInterface";
import { ProductsInterface } from "@/interfaces/ProductsInterface";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Banner from "../CompanyDetails/CompanyDetails";
import ItemCard from "../ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";

interface Props {
  products: ProductsInterface[];
  category: CategoryInterface[];
  company: CompanyInterface;
}
const ItemsList: FC<Props> = ({ category, products, company }) => {
  const [selectedCategory, setSelectedCategory] = useState();
const{ push}= useRouter()
  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
      push({
        pathname: "/",
      });
    
  };
  return (
    <div className={styles.wrapper}>
      <Banner
        categories={category}
        handleButtonClick={handleButtonClick}
        company={company}
      />
      {products.map((item) => {
        return <ItemCard category={item}  />;
      })}
    </div>
  );
};

export default ItemsList;
