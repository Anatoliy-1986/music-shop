import Image from "next/image";
import { lazy } from "react";

import styles from "./HeadphoneParameters.module.scss";
import { listParameters } from "./listParameters";

export const HeadphoneParameters = () => {
  return (
    <section className={styles.root}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>
          Good headphones
          <br />
          and loud music is all
          <br />
          you need
        </h2>

        {listParameters.map((item) => {
          return (
            <section key={item.id} className={styles.wrapperParameters}>
              <div className={styles.circle}>
                <Image
                  width={35}
                  height={35}
                  src={item.src}
                  alt={item.sibTitle}
                />
              </div>
              <div className={styles.textWrapper}>
                <h6 className={styles.subTitle}>{item.sibTitle}</h6>
                <p className={styles.description}>{item.discription}</p>
                <a className={styles.link}>{item.link}</a>
              </div>
            </section>
          );
        })}
      </div>
      <div className={styles.imageWrapper}>
        <Image
          width={332}
          height={474}
          src="/assets/images/headphoneParam/headphone.png"
          alt="headphone"
        />
        <Image
          className={styles.sound_left}
          width={199}
          height={191}
          src="/assets/images/headphoneParam/sound.png"
          alt="notes"
        />
        <Image
          className={styles.sound_right}
          width={199}
          height={191}
          src="/assets/images/headphoneParam/sound.png"
          alt="notes"
        />
        <Image
          className={styles.notes}
          width={308}
          height={355}
          src="/assets/images/headphoneParam/notes.png"
          alt="notes"
        />
      </div>
    </section>
  );
};
