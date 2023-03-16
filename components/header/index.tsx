import Image from "next/image";
import { Button } from "../button";

import styles from "./Header.module.scss";
import { buttonImage, IButtonImage } from "./imageButtonList";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.headerWrapper}>
        <Image
          src="/assets/images/logo.png"
          width={73}
          height={66}
          alt="logo"
        />
        <div className={styles.buttonWrapper}>
          {buttonImage.map(({ id, src, width, height, alt }: IButtonImage) => {
            return (
              <Button key={id} className={styles.headerButton}>
                <Image src={src} width={width} height={height} alt={alt} />
              </Button>
            );
          })}
        </div>
        <button className={styles.burgerBtn} aria-label="burger menu">
          <div className={styles.burger} />
        </button>
      </div>
    </header>
  );
};
