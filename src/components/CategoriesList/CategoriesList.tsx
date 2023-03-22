import React, { FC, useEffect, useState } from "react";
import Banner from "../CompanyDetails/CompanyDetails";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./CategoriesList.module.scss";
import { CompanyInterface } from "@/interfaces/CompanyInterface";
import { CategoryInterface } from "@/interfaces/CategoryInterface";

interface Props {
  category: CategoryInterface[];
  company: CompanyInterface;
}

const CategoriesList: FC<Props> = ({ category, company }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const filteredItems = category.filter(
    (category) => category.id === selectedCategory
  );

  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.wrapper}>
      <Banner
        categories={category}
        handleButtonClick={handleButtonClick}
        company={company}
      />

      {filteredItems.map((item, i) => {
        return <CategoryCard index={i} category={item} />;
      })}
    </div>
  );
};

export default CategoriesList;
