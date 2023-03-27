import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";
import { MainContext } from "@/context/MainContext";
import React, { FC, useContext } from "react";

import ItemCard from "../../elements/ProductCard/ProductCard";

const ProductsList: FC = () => {
  const { products } = useContext(MainContext);

  return (
    <>
      {products?.map((item) => {
        return <ItemCard category={item} key={item.id + " product card"} />;
      })}
    </>
  );
};

export default ProductsList;
