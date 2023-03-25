import React, { FC} from "react";
import styles from "./CompanyDetails.module.scss";
import { F_Roboto } from "@/fonts";
import { TfiLocationPin } from "react-icons/Tfi";
import { TbPhone } from "react-icons/Tb";
import { FaWifi } from "react-icons/Fa";
import { CategoryInterface } from "@/interfaces/CategoryInterface";
import { CompanyInterface } from "@/interfaces/CompanyInterface";

interface Props {
  categories: CategoryInterface[];
  handleButtonClick: (item: any) => void;
  company: CompanyInterface;
}
const CompanyDetails: FC<Props> = ({ categories, handleButtonClick, company }) => {
  return (
    <div className={`${styles.bannerText} ${F_Roboto.className}`}>
      <h1 className={styles.title}> {company.name} Menu</h1>
      <p className={styles.address}>
        {" "}
        <TfiLocationPin className={styles.icon} /> {company.address}
      </p>
      <p className={styles.phone}>
        {" "}
        <TbPhone className={styles.icon} /> {company.phoneNumber}
      </p>
      <p className={styles.wifi}>
        <FaWifi className={styles.icon} /> WiFi_Password123
      </p>
      <div>
        {categories.map((item) => {
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
