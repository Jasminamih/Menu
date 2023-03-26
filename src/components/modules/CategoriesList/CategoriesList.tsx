import { MainContext } from "@/context/MainContext";
import React, { FC, useContext, useState } from "react";

import CategoryCard from "../../elements/CategoryCard/CategoryCard";
import Banner from "../CompanyDetails/CompanyDetails";
import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";

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
    <ListWrapperLayout>
      <Banner handleButtonClick={handleButtonClick} />

      {filteredItems?.map((item, index) => {
        return <CategoryCard index={index} category={item} />;
      })}
    </ListWrapperLayout>
  );
};

export default CategoriesList;
