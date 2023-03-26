import { MainContext } from "@/context/MainContext";
import { useRouter } from "next/router";
import React, { FC, useContext, useState } from "react";

import Banner from "../CompanyDetails/CompanyDetails";
import ItemCard from "../../elements/ProductCard/ProductCard";
import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";

const ProductsList: FC = () => {
  const { products } = useContext(MainContext);
  const [selectedCategory, setSelectedCategory] = useState();
  const { push } = useRouter();

  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
    push({
      pathname: "/",
    });
  };

  return (
    <ListWrapperLayout>
      <Banner handleButtonClick={handleButtonClick} />

      {products?.map((item) => {
        return <ItemCard category={item} />;
      })}
    </ListWrapperLayout>
  );
};

export default ProductsList;
