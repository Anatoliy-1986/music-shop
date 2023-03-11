import Image from "next/image";
import { useState } from "react";
import { Accordion } from "./accordion/Accordion";

import styles from "./AdvantagesBlock.module.scss";
import { advantagesList } from "./advantegesList";

export const AdvantagesBlock = () => {
  return (
    <section className={styles.root}>
      <Image
        className={styles.foldableHeadphones}
        width={662}
        height={577}
        src="/assets/images/foldable headphones.png"
        alt="headphone"
      />
      <div>
        <h2 className={styles.title}>
          Whatever you get
          <br /> in the box
        </h2>
        <ul>
          {advantagesList.map((item) => {
            return <Accordion key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};
