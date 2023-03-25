import React, { FC } from "react";

import styles from "./ProductTemplate.module.scss";
import BackBtn from "@/components/BackBtn/BackBtn";
import Logo from "@/components/LogoBanner/LogoBanner";
import ProductsList from "@/components/ProductsList/ProductsList";

const ProductTemplate: FC = () => {
  return (
    <div className={styles.productsWrapper}>
      <Logo />
      <BackBtn />
      <ProductsList />
    </div>
  );
};

export default ProductTemplate;
