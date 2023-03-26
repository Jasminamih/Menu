import { useRouter } from "next/router";
import React, { FC } from "react";
import { MdArrowBack } from "react-icons/md";

import styles from "./BackBtn.module.scss";

const BackBtn: FC = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push({
      pathname: "/",
    });
  };

  return (
    <button onClick={handleClick} className={styles.btn}>
      <MdArrowBack className={styles.backIcon} />
    </button>
  );
};

export default BackBtn;
