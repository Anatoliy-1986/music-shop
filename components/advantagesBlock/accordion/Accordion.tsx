import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";

import styles from "./Accordion.module.scss";

interface IAccordion {
  id: number;
  text: string;
  subText: string;
}

export const Accordion = ({ id, text, subText }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  const tabWrapper = clsx(styles.tabWrapper, {
    [styles.tabWrapperOpened]: isOpen,
  });

  return (
    <li className={tabWrapper}>
      <button
        className={styles.tabButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image
          width={20}
          height={20}
          src="/assets/images/arrow.svg"
          alt="arrow"
          className={styles.arrow}
        />
        <span className={styles.textButton}>{text}</span>
      </button>
      <p className={styles.text}>{subText}</p>
    </li>
  );
};
