import CategoriesList from "@/components/modules/CategoriesList/CategoriesList";
import Logo from "@/components/modules/LogoBanner/LogoBanner";
import React, { FC } from "react";

import styles from "./HomeTemplate.module.scss";

const HomeTemplate: FC = () => {
  return (
    <div className={styles.homeWrapper}>
      <Logo />
      <CategoriesList />
    </div>
  );
};

export default HomeTemplate;
