import BackBtn from "@/components/elements/BackBtn/BackBtn";
import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";
import CompanyDetails from "@/components/modules/CompanyDetails/CompanyDetails";
import Logo from "@/components/modules/LogoBanner/LogoBanner";
import ProductsList from "@/components/modules/ProductsList/ProductsList";
import React, { FC } from "react";

import styles from "./ProductTemplate.module.scss";

const ProductTemplate: FC = () => {
  return (
    <div className={styles.productsWrapper}>
      <Logo />
      <BackBtn />
      <ListWrapperLayout>
        <CompanyDetails />
        <ProductsList/>
      </ListWrapperLayout>
    </div>
  );
};

export default ProductTemplate;
