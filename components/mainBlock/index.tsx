import Image from "next/image";
import { Button } from "../button";

import styles from "./MainBlock.module.scss";

export const MainBlock = () => {
  return (
    <section className={styles.root}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            className={styles.notesImage}
            src="/assets/images/notes.png"
            width={812}
            height={632}
            alt="notes"
          />
          <Image
            className={styles.headphones}
            src="/assets/images/headphones.png"
            width={570}
            height={583}
            alt="headphones"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.subTitle}>Hear it. Feel it</p>
          <h1 className={styles.title}>
            Move
            <br /> with the
            <br /> music
          </h1>
          <div className={styles.priceWrapper}>
            <p className={styles.price}>$ 435</p>
            <p className={styles.oldPrice}>$ 465</p>
          </div>
          <Button className={styles.buyButton}>Buy now</Button>
        </div>
      </div>
    </section>
  );
};
