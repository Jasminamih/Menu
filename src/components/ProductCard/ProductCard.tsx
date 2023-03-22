import React, { FC, useState } from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { F_Roboto } from "@/fonts";

export interface Categories {
  id: number;
  categorie_id: number;
  nameProduct: string;
  description: string;
  productPicturePath: string;
  price: string;
}

interface Props {
  category: Categories;
}
const ItemCard: FC<Props> = ({ category }) => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  return (
    <div className={styles.card}>
      <Image
        onClick={() => setIsImageOpen(true)}
        className={styles.image}
        width={660}
        height={410}
        src={`${IMAGES_URL}/${category.productPicturePath}`}
        alt={"item"}
      />

      {isImageOpen && (
        <div className={styles.overlay} onClick={() => setIsImageOpen(false)}>
          <div className={styles.overlayInner}>
            <Image
              className={styles.imageOverlay}
              width={660}
              height={410}
              src={`${IMAGES_URL}/${category.productPicturePath}`}
              alt={"item"}
            />
          </div>
        </div>
      )}
      <div className={`${styles.cardText} ${F_Roboto.className}`}>
        <h2 className={styles.title}>{category.nameProduct}</h2>
        <p>{category.description}</p>
        <span className={styles.weight}>150g</span>
        <span className={styles.price}>{category.price}$</span>
      </div>
    </div>
  );
};

export default ItemCard;
