import { useActions } from "@/hooks/useActions";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useRef } from "react";
import Image from "next/image";

import styles from "./Cart.module.scss";
import { IProduct } from "@/store/product/product.type";

interface ICart {
  products: IProduct[];
  onClick: () => void;
}

export const Cart = ({ onClick, products }: ICart) => {
  const rootRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(rootRef, onClick);

  const { removeItem } = useActions();

  return (
    <div className={styles.root} ref={rootRef}>
      {products.length ? (
        <>
          <h2 className={styles.title}>Products in the cart</h2>
          {products.map((item) => (
            <div key={item.id} className={styles.itemProduct}>
              <div className={styles.productWrapper}>
                <Image
                  className={styles.headphoneImage}
                  width={56}
                  height={65}
                  src={item.src}
                  alt={item.name}
                />
                <div className={styles.textWrapper}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.price}>{item.price}</span>
                </div>
              </div>
              <button
                className={styles.removeProduct}
                onClick={() => removeItem({ id: item.id })}
              >
                <Image
                  className={styles.notesImage}
                  src="/assets/images/garbage.png"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          ))}
          <button className={styles.orderButton} onClick={onClick}>
            Place order
          </button>
        </>
      ) : (
        <h2 className={styles.title}>Cart is Empty</h2>
      )}
    </div>
  );
};
