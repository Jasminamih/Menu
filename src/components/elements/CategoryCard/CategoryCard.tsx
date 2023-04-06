import { F_Roboto } from "@/fonts";
import { CategoryInterface } from "@/interfaces/CategoryInterface";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useContext, useEffect, useState } from "react";
import styles from "./CategoryCard.module.scss";
import { LanguageContext } from "@/context/LanguageContext";

interface Props {
  index: number;
  category: CategoryInterface;
}

const CategoryCard: FC<Props> = ({ index, category }) => {
  const [show, setShow] = useState(false);
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  const { language } = useContext(LanguageContext);

  const categories = category.categorie.map((data) => {
    return data;
  });

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, index * 300);
  }, []);

  return (
    <>
      {categories.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/products/${item.id}`}
            className={`${styles.card}  ${show ? styles.showCard : ""}`}
          >
            <div className={styles.overlay} />
            <h1 className={`${styles.title} ${F_Roboto.className}`}>
              {language === "english" ? item.nameCategoryEn : item.nameCategory}
            </h1>
            <Image
              className={styles.image}
              width={660}
              height={220}
              src={`${IMAGES_URL}/${item.categoryPicturePath}`}
              alt={"category"}
            />
          </Link>
        );
      })}
    </>
  );
};

export default CategoryCard;
