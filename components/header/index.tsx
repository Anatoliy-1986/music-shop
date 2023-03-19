import { useTypedSelector } from "@/hooks/useTypedSelector";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../button";
import { Cart } from "./component/Cart";

import styles from "./Header.module.scss";
import { buttonImage, IButtonImage } from "./imageButtonList";

export const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart } = useTypedSelector((state) => state);

  const toggleCart = () => setShowCart(!showCart);

  const headerButton = (name: string) => {
    switch (true) {
      case name === "search":
        return toggleCart();
      case name === "basket":
        return toggleCart();
      case name === "client":
        return toggleCart();
    }
  };
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
              <Button
                key={id}
                className={styles.headerButton}
                onClick={() => headerButton(alt)}
              >
                {!!cart.length && alt === "basket" && (
                  <span className={styles.productsInCart}>{cart.length}</span>
                )}
                <Image src={src} width={width} height={height} alt={alt} />
              </Button>
            );
          })}
        </div>
        <button className={styles.burgerBtn} aria-label="burger menu">
          <div className={styles.burger} />
        </button>
      </div>
      {showCart && <Cart onClick={toggleCart} products={cart} />}
    </header>
  );
};
