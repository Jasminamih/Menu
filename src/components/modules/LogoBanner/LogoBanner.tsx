import { MainContext } from "@/context/MainContext";
import { F_Roboto } from "@/fonts";
import Image from "next/image";
import React, { FC, useContext, useState } from "react";

import styles from "./LogoBanner.module.scss";
import { LanguageContext } from "@/context/LanguageContext";

const Logo: FC = () => {
  const { company } = useContext(MainContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  return (
    <div className={`${styles.logoWrapper} ${F_Roboto.className}`}>
      <Image
        fill
        src={`${IMAGES_URL}/${company?.logoPath}`}
        alt={"Company logo"}
        priority
      />
      <select
        className={styles.language}
        value={language}
        name=""
        id=""
        onChange={(e: any) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="macedonian">Macedonian</option>
        <option value="english">English</option>
      </select>
    </div>
  );
};

export default Logo;
