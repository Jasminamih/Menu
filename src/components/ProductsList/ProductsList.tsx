import { MainContext } from "@/context/MainContext";
import { useRouter } from "next/router";
import React, { FC, useContext, useState } from "react";

import Banner from "../CompanyDetails/CompanyDetails";
import ItemCard from "../ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";

const ItemsList: FC = () => {
  const {products} = useContext(MainContext)
  const [selectedCategory, setSelectedCategory] = useState();
  const { push } = useRouter();

  const handleButtonClick = (category: any) => {
    setSelectedCategory(category);
    push({
      pathname: "/",
    });
  };

  return (
    <div className={styles.wrapper}>
      <Banner handleButtonClick={handleButtonClick} />
      {products?.map((item) => {
        return <ItemCard category={item} />;
      })}
    </div>
  );
};

export default ItemsList;
