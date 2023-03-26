import React, { FC, useState } from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import { F_Roboto } from "@/fonts";
import { ProductsInterface } from "@/interfaces/ProductsInterface";

interface Props {
  category: ProductsInterface;
}
const ItemCard: FC<Props> = ({ category }) => {
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const IMAGES_URL = process.env.NEXT_PUBLIC_IMAGES_URL;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image
            onClick={() => setIsImageOpen(true)}
            className={styles.image}
            fill
            src={`${IMAGES_URL}/${category.productPicturePath}`}
            alt={"item"}
          />
        </div>
        <div className={`${styles.cardText} ${F_Roboto.className}`}>
          <h2 className={styles.title}>{category.nameProduct}</h2>
          <p className={styles.description}>{category.description}</p>
          <span className={styles.weight}>150g</span>
          <span className={styles.price}>{category.price}$</span>
        </div>
      </div>


      {isImageOpen && (
        <div className={styles.overlay} onClick={() => setIsImageOpen(false)}>
          <div className={styles.openImgWrapper}>
            <Image
              className={styles.imageOverlay}
              fill
              src={`${IMAGES_URL}/${category.productPicturePath}`}
              alt={"item"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCard;
