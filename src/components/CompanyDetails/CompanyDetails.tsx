import { MainContext } from "@/context/MainContext";
import { F_Roboto } from "@/fonts";
import React, { FC, useContext } from "react";
import { FaWifi } from "react-icons/Fa";
import { TbPhone } from "react-icons/Tb";
import { TfiLocationPin } from "react-icons/Tfi";

import styles from "./CompanyDetails.module.scss";

interface Props {
  handleButtonClick: (item: any) => void;
}

const CompanyDetails: FC<Props> = ({  handleButtonClick }) => {
  const { categories, company } = useContext(MainContext);

  return (
    <div className={`${styles.bannerText} ${F_Roboto.className}`}>
      <h1 className={styles.title}> {company?.name} Menu</h1>
      <p className={styles.address}>
        {" "}
        <TfiLocationPin className={styles.icon} /> {company?.address}
      </p>
      <p className={styles.phone}>
        {" "}
        <TbPhone className={styles.icon} /> {company?.phoneNumber}
      </p>
      <p className={styles.wifi}>
        <FaWifi className={styles.icon} /> WiFi_Password123
      </p>
      <div>
        {categories?.map((item) => {
          return (
            <button
              className={styles.btn}
              onClick={() => handleButtonClick(item.id)}
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
