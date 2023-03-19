import { useGetProductsQuery } from "@/store/product/product.api";

import { ProductItem } from "./component/ProductItem";

import styles from "./LatestProductBlock.module.scss";

export const LatestProductBlock = () => {
  const { data, isLoading, error } = useGetProductsQuery(3);

  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Our Latest Product</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        facilisis nunc ipsum aliquam, ante.
      </p>

      {isLoading ? (
        "Loading..."
      ) : error ? (
        <div>error</div>
      ) : (
        <div className={styles.cardsWrapper}>
          {data?.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </div>
      )}
    </section>
  );
};
