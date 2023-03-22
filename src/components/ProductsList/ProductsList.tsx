import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import Banner, { CompanyInterface } from "../CompanyDetails/CompanyDetails";
import { CategoryInterface } from "../CategoryCard/CategoryCard";
import ItemCard, { Categories } from "../ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";

interface Props {
  categories: Categories[];
  menu: CategoryInterface[];
  company: CompanyInterface;
}
const ItemsList: FC<Props> = ({ categories, menu, company }) => {
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
        categories={menu}
        handleButtonClick={handleButtonClick}
        company={company}
      />
      {categories.map((item) => {
        return <ItemCard category={item} />;
      })}
    </div>
  );
};

export default ItemsList;
