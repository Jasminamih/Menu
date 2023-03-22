import React, { FC } from "react";
import styles from "./LogoBanner.module.scss";
import Image from "next/image";
import { F_Roboto } from "@/fonts";
import { CompanyInterface } from "../CompanyDetails/CompanyDetails";

interface Props {
  company: CompanyInterface;
}
const Logo: FC<Props> = ({ company }) => {
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  return (
    <div className={`${styles.logoWrapper} ${F_Roboto.className}`}>
      <Image fill src={`${IMAGES_URL}/${company.logoPath}`} alt={""} />
      <select className={styles.language} name="" id="">
        <option value="">English</option>
        <option value="">Macedonian</option>
        <option value="">Albanian</option>
      </select>
    </div>
  );
};

export default Logo;
