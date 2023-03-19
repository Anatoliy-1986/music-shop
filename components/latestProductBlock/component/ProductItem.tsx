import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { IProduct } from "@/store/product/product.type";

import styles from "./ProductItem.module.scss";

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
  const { id, src, name, color, stars, mark, price } = product;
  const { addItem } = useActions();

  const { cart } = useTypedSelector((state) => state);

  const isExistsInCart = cart.some((p) => p.id === id);
  const cartButtonClassName = clsx(styles.cartButton, {
    [styles.cartButton_added]: isExistsInCart,
  });

  return (
    <section>
      <div
        className={clsx(styles.imageWrapper, styles[`imageWrapper_${color}`])}
      >
        <button
          className={cartButtonClassName}
          aria-label={isExistsInCart ? "cart is empty" : "product in cart"}
          onClick={() => !isExistsInCart && addItem(product)}
        >
          <Image
            width={26}
            height={26}
            src="/assets/images/latestProduct/basket.svg"
            alt=""
          />
        </button>
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
            {stars.map((star: number) => (
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
};
