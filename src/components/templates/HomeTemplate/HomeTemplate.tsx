import ListWrapperLayout from "@/components/layouts/ListWrapperLayout/ListWrapperLayout";
import CategoriesList from "@/components/modules/CategoriesList/CategoriesList";
import CompanyDetails from "@/components/modules/CompanyDetails/CompanyDetails";
import Logo from "@/components/modules/LogoBanner/LogoBanner";
import React, { FC } from "react";

import styles from "./HomeTemplate.module.scss";

const HomeTemplate: FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <Logo />
      <ListWrapperLayout>
        <CompanyDetails />
        <CategoriesList />
      </ListWrapperLayout>
    </div>
  );
};

export default HomeTemplate;
