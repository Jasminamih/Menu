import React, { FC } from "react";

import styles from "./ProductTemplate.module.scss";
import BackBtn from "@/components/elements/BackBtn/BackBtn";
import Logo from "@/components/modules/LogoBanner/LogoBanner";
import ProductsList from "@/components/modules/ProductsList/ProductsList";

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
