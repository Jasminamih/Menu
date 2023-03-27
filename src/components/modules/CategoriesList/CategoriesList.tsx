import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";
import { MainContext } from "@/context/MainContext";
import React, { FC, useContext, useState } from "react";

import CategoryCard from "../../elements/CategoryCard/CategoryCard";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

const CategoriesList: FC = () => {
  const { categories, selectedCategoryId } = useContext(MainContext);

  const filteredItems = categories?.filter(
    (categories) => categories.id === selectedCategoryId
  );

  return (
    <ListWrapperLayout>
      <CompanyDetails/>

      {filteredItems?.map((item, index) => {
        return (
          <CategoryCard
            index={index}
            category={item}
            key={item.id + "category card"}
          />
        );
      })}
    </ListWrapperLayout>
  );
};

export default CategoriesList;
