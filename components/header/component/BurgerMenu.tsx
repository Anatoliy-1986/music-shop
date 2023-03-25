import { footerLink, IFooterBook } from "@/components/footer/imageButtonList";
import { useNavLinks } from "@/hooks/useNavLinks";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import styles from "./BurgerMenu.module.scss";

interface IBurgerMenu {
  onClick: () => void;
}

export const BurgerMenu = ({ onClick }: IBurgerMenu) => {
  const rootRef = useRef(null);

  useOnClickOutside(rootRef, onClick);
  const { handleNavLinkClick } = useNavLinks();

  const handleClick = (href: string) => {
    handleNavLinkClick(href);
    onClick();
  };

  return (
    <section className={styles.burgerMenu} ref={rootRef}>
      <nav className={styles.nav}>
        <ul>
          {footerLink.map(({ id, title, href = "home" }: IFooterBook) => {
            return (
              <li key={id} className={styles.item}>
                <a className={styles.link} onClick={() => handleClick(href)}>
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
};
