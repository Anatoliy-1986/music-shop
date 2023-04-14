import Image from "next/image";

import styles from "./Footer.module.scss";
import { ButtonImage, IButtonImage, IFooterBook } from "./imageButtonList";
import { Button } from "../button";
import { useNavLinks } from "@/hooks/useNavLinks";
import { useContext } from "react";
import { MenuListContext } from "@/hooks/useMenuList";

export const Footer = () => {
  const { handleNavLinkClick } = useNavLinks();
  const { menu } = useContext(MenuListContext);

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
          {menu.map(({ id, title, href = "home" }: IFooterBook) => {
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
