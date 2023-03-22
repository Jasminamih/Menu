import React, { FC, useEffect, useState } from "react";
import styles from "./CategoryCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { F_Roboto } from "@/fonts";
import "animate.css";
import Link from "next/link";
import { CategoryInterface } from "@/interfaces/CategoryInterface";

interface Props {
  index: number;
  category: CategoryInterface;
}

const CategoryCard: FC<Props> = ({ index, category }) => {
  const [show, setShow] = useState(false);
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

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
