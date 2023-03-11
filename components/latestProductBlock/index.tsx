import clsx from "clsx";
import Image from "next/image";

import styles from "./LatestProductBlock.module.scss";
import { latestProductList } from "./latestProductList";

export const LatestProductBlock = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Our Latest Product</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        facilisis nunc ipsum aliquam, ante.
      </p>
      <div className={styles.cardsWrapper}>
        {latestProductList.map((item) => {
          const { id, src, name, color, stars, mark, price } = item;
          return (
            <section key={id}>
              <div
                className={clsx(
                  styles.imageWrapper,
                  styles[`imageWrapper_${color}`]
                )}
              >
                <Image
                  className={styles.headphoneImage}
                  width={262}
                  height={353}
                  src={src}
                  alt={name}
                />
              </div>
              <div>
                <div className={styles.starWrapper}>
                  <div>
                    {stars.map((star) => (
                      <Image
                        key={star}
                        className={styles.star}
                        width={30}
                        height={30}
                        src="/assets/images/latestProduct/star.png"
                        alt="star"
                      />
                    ))}
                  </div>
                  <span className={styles.mark}>{mark}</span>
                </div>
                <div className={styles.textWrapper}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.price}>{price}</span>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
};
