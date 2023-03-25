import { useNavigation } from "./useNavigation";

export const useNavLinks = () => {
  const { handleScroll, homeRef, productsRef, aboutRef } = useNavigation();

  const makeNavRef = (name: string) => {
    switch (name) {
      case "home":
        return homeRef;
      case "products":
        return productsRef;
      case "about":
        return aboutRef;
      default:
        return homeRef;
    }
  };

  const handleNavLinkClick = (name: string) => {
    const makeRef = makeNavRef(name);
    handleScroll(makeRef);
  };

  return { handleNavLinkClick };
};
