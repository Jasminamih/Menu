import React, { FC, useEffect, useState } from "react";
import Banner, { CompanyInterface } from "../CompanyDetails/CompanyDetails";
import CategoryCard, { CategoryInterface } from "../CategoryCard/CategoryCard";
import styles from "./CategoriesList.module.scss";

interface Props {
  menu: CategoryInterface[];
  company: CompanyInterface;
}

const CategoriesList: FC<Props> = ({ menu, company }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const filteredItems = menu.filter(
    (category) => category.id === selectedCategory
  );

  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.wrapper}>
      <Banner
        categories={menu}
        handleButtonClick={handleButtonClick}
        company={company}
      />

      {filteredItems.map((item, i) => {
        console.log(i);

        return <CategoryCard index={i} categories={item} />;
      })}
    </div>
  );
};

export default CategoriesList;
