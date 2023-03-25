import Image from "next/image";

import styles from "./Footer.module.scss";
import {
  ButtonImage,
  IButtonImage,
  IFooterBook,
  footerLink,
} from "./imageButtonList";
import { Button } from "../button";
import { useNavigation } from "@/hooks/useNavigation";
import { useNavLinks } from "@/hooks/useNavLinks";

export const Footer = () => {
  const { handleNavLinkClick } = useNavLinks();

  return (
    <section className={styles.root}>
      <div className={styles.contentWrapper}>
        <Image
          className={styles.logo}
          src="/assets/images/logo.png"
          width={73}
          height={66}
          alt="logo"
        />
        <div className={styles.linkWrapper}>
          {footerLink.map(({ id, title, href = "home" }: IFooterBook) => {
            return (
              <a
                key={id}
                className={styles.link}
                onClick={() => handleNavLinkClick(href)}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className={styles.buttonWrapper}>
          {ButtonImage.map(
            ({ id, src, width, height, alt, href }: IButtonImage) => {
              return (
                <a href={href} key={id} className={styles.socialLink}>
                  <Button className={styles.socialButton}>
                    <Image src={src} width={width} height={height} alt={alt} />
                  </Button>
                </a>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};
