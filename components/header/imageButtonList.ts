export interface IButtonImage {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
}

export const buttonImage = [
  {
    id: 1,
    src: "/assets/images/header/search.png",
    width: 18,
    height: 18,
    alt: "search",
  },
  {
    id: 2,
    src: "/assets/images/header/basket.png",
    width: 18,
    height: 20,
    alt: "basket",
  },
  {
    id: 3,
    src: "/assets/images/header/client.png",
    width: 16,
    height: 18,
    alt: "client",
  },
];
