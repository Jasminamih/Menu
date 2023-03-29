import { MainContext } from "@/context/MainContext";
import { F_Roboto } from "@/fonts";
import Image from "next/image";
import React, { FC, useContext } from "react";

import styles from "./LogoBanner.module.scss";

const Logo: FC = () => {
  const { company } = useContext(MainContext);
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  return (
    <div className={`${styles.logoWrapper} ${F_Roboto.className}`}>
      <Image fill src={`${IMAGES_URL}/${company?.logoPath}`} alt={"Company logo"} priority />
      <select className={styles.language} name="" id="">
        <option value="">English</option>
        <option value="">Macedonian</option>
        <option value="">Albanian</option>
      </select>
    </div>
  );
};

export default Logo;
