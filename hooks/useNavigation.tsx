import { createContext, createRef, useContext, useRef } from "react";
import type { MutableRefObject } from "react";

interface IProps {
  children: JSX.Element;
}

type TContextProps = {
  homeRef: MutableRefObject<HTMLDivElement | null>;
  productsRef: MutableRefObject<HTMLDivElement | null>;
  aboutRef: MutableRefObject<HTMLDivElement | null>;
  handleScroll: (ref: MutableRefObject<HTMLDivElement | null>) => void;
};

export const NavigationContext = createContext<TContextProps>({
  homeRef: createRef(),
  productsRef: createRef(),
  aboutRef: createRef(),
  handleScroll: () => null,
});

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }: IProps) => {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const handleScroll = (ref: MutableRefObject<HTMLDivElement | null>) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavigationContext.Provider
      value={{
        homeRef,
        productsRef,
        aboutRef,
        handleScroll,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
