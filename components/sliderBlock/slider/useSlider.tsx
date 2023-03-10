import { useState } from "react";

export const useSlider = (arrLenght: number) => {
  const [slide, setSlide] = useState(1);

  const nextSlide = () => {
    if (slide < arrLenght - 1) {
      return setSlide((prev) => (prev += 1));
    }
    setSlide(() => 0);
  };

  const previousSlide = () => {
    if (slide > 0) {
      return setSlide((prev) => (prev -= 1));
    }
    setSlide(() => arrLenght - 1);
  };

  const slideStatus = (index: number) => {
    switch (true) {
      case index === slide:
        return "active";

      case index === slide - 1 || (slide === 0 && index === arrLenght - 1):
        return "last";

      default:
        return "next";
    }
  };

  return { slide, nextSlide, previousSlide, slideStatus };
};
