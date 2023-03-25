import { MainContext } from "@/context/MainContext";
import React, { FC, useContext, useState } from "react";

import CategoryCard from "../CategoryCard/CategoryCard";
import Banner from "../CompanyDetails/CompanyDetails";
import styles from "./CategoriesList.module.scss";

const CategoriesList: FC = () => {
  const { categories } = useContext(MainContext);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const filteredItems = categories?.filter(
    (categories) => categories.id === selectedCategory
  );

  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.wrapper}>
      <Banner handleButtonClick={handleButtonClick} />

      {filteredItems?.map((item, index) => {
        return <CategoryCard index={index} category={item} />;
      })}
    </div>
  );
};

export default CategoriesList;
