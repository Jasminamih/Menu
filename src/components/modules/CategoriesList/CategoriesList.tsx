import { MainContext } from "@/context/MainContext";
import React, { FC, useContext } from "react";

import CategoryCard from "../../elements/CategoryCard/CategoryCard";

const CategoriesList: FC = () => {
  const { categories, selectedCategoryId } = useContext(MainContext);

  const filteredItems = categories?.filter(
    (categories) => categories.id === selectedCategoryId
  );

  return (
    <>
      {filteredItems?.map((item, index) => {
        return (
          <CategoryCard
            index={index}
            category={item}
            key={item.id + "category card"}
          />
        );
      })}
    </>
  );
};

export default CategoriesList;
