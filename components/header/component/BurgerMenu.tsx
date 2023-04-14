import { MenuListContext, IMenu } from "@/hooks/useMenuList";
import { useNavLinks } from "@/hooks/useNavLinks";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useContext, useRef } from "react";
import styles from "./BurgerMenu.module.scss";

interface IBurgerMenu {
  onClick: () => void;
}

export const BurgerMenu = ({ onClick }: IBurgerMenu) => {
  const rootRef = useRef(null);
  const { menu } = useContext(MenuListContext);

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
          {menu.map(({ id, title, href = "home" }: IMenu) => {
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
