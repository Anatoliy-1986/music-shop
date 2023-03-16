export interface IButtonImage {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string;
}

export interface IFooterBook {
  id: number;
  title: string;
  href?: string;
}

export const footerLink = [
  {
    id: 1,
    title: "Home",
    href: "",
  },
  {
    id: 2,
    title: "About",
    href: "",
  },
  {
    id: 3,
    title: "Product",
    href: "",
  },
];

export const ButtonImage = [
  {
    id: 1,
    src: "/assets/images/footer/instagram.png",
    width: 20,
    height: 20,
    alt: "instagram",
    href: "https://instagram.com/",
  },
  {
    id: 2,
    src: "/assets/images/footer/twitter.png",
    width: 22,
    height: 18,
    alt: "twitter",
    href: "https://hca.twimg.com/",
  },
  {
    id: 3,
    src: "/assets/images/footer/facebook.png",
    width: 11,
    height: 20,
    alt: "facebook",
    href: "https://www.facebook.com/",
  },
];
