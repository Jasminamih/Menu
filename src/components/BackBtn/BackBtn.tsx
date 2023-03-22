import React, { FC } from "react";
import styles from "./BackBtn.module.scss";
import { MdArrowBack } from "react-icons/Md";
import { useRouter } from "next/router";

const BackBtn: FC = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push({
      pathname: "/",
    });
  };

  return (
    <div>
      <button onClick={handleClick} className={styles.btn}>
        <MdArrowBack />
      </button>
    </div>
  );
};

export default BackBtn;
