import Image from "next/image";
import clsx from "clsx";

import styles from "./Slider.module.scss";
import { collection } from "../sliderCollection";
import { useSlider } from "./useSlider";

export const Slider = () => {
  const { previousSlide, nextSlide, slideName, slide } = useSlider(
    collection.length
  );

  return (
    <div className={styles.slider}>
      {collection.map((item, index) => {
        return (
          <div
            key={item.id}
            className={clsx(styles.imageWrapper, [
              styles[`imageWrapper_${slideName(index)}`],
            ])}
          >
            <Image
              layout="fill"
              objectFit="cover"
              src={item.src}
              alt={item.title || ""}
            />
          </div>
        );
      })}

      <button
        aria-label="previous slide"
        className={clsx(styles.prevButton, styles.previousSlide)}
        onClick={previousSlide}
      />

      <button
        aria-label="next slide"
        className={clsx(styles.prevButton, styles.nextSlide)}
        onClick={nextSlide}
      />
    </div>
  );
};
