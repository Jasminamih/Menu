import React, { FC, useEffect, useState } from "react";
import styles from "./CategoryCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { F_Roboto } from "@/fonts";
import "animate.css";
import Link from "next/link";

export interface CategoryInterface {
  id: number;
  categorieMenu: string;
  categorie: {
    id: number;
    menu_id: number;
    nameCategory: string;
    categoryPicturePath: string;
  }[];
}

interface Props {
  index: number;
  categories: CategoryInterface;
}

const CategoryCard: FC<Props> = ({ index, categories }) => {
  const [show, setShow] = useState(false);


  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  const categori = categories.categorie.map((data) => {
    return data;
  });

  console.log(categori);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, (index) * 300);
  }, []);

  console.log(index)
  return (
    <>
      {categori.map((item) => {
        return (
          <Link 
            href={`/products/${item.id}`}
            className={`${styles.card}  ${show ? styles.showCard : ""}`}
          >
            <div className={styles.overlay} />
            <h1 className={`${styles.title} ${F_Roboto.className}`}>
              {item.nameCategory}
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
