import styles from "./SliderCollection.module.scss";
import { Slider } from "./slider/Slider";

export const SliderCollection = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>
        Our Latest
        <br /> colour collection 2021
      </h2>
      <Slider />
    </section>
  );
};
