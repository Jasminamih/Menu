import { MainContext } from "@/context/MainContext";
import { F_Roboto } from "@/fonts";
import { useRouter } from "next/router";
import React, { FC, useContext, useEffect } from "react";
import { FaWifi } from "react-icons/fa";
import { TbPhone } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";

import styles from "./CompanyDetails.module.scss";

const CompanyDetails: FC = () => {
  const { categories, company, selectedCategoryId, setSelectedCategoryId } =
    useContext(MainContext);
  const { push } = useRouter();

  return (
    <div className={`${styles.bannerText} ${F_Roboto.className}`}>
      <h1 className={styles.title}> {company?.name} Menu</h1>
      <p className={`${styles.contactDetail}`}>
        <TfiLocationPin className={styles.icon} />
        <span>{company?.address}</span>
      </p>
      <p className={`${styles.contactDetail}`}>
        <TbPhone className={styles.icon} />
        <span>{company?.phoneNumber}</span>
      </p>
      <p className={`${styles.contactDetail}`}>
        <FaWifi className={styles.icon} />
        <span>{company?.wifiPass}</span>
      </p>
      <div>
        {categories?.map((item) => {
          return (
            <button
              className={`${styles.btn} ${
                item.id === selectedCategoryId ? styles.active : ""
              }`}
              onClick={() => {
                setSelectedCategoryId(item.id);
                push("/");
              }}
              key={item.id + "category button"}
            >
              {item.categorieMenu}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyDetails;
