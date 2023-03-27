import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";
import { MainContext } from "@/context/MainContext";
import React, { FC, useContext } from "react";

import ItemCard from "../../elements/ProductCard/ProductCard";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

const ProductsList: FC = () => {
  const { products } = useContext(MainContext);

  return (
    <ListWrapperLayout>
      <CompanyDetails/>

      {products?.map((item) => {
        return <ItemCard category={item} key={item.id + " product card"} />;
      })}
    </ListWrapperLayout>
  );
};

export default ProductsList;
