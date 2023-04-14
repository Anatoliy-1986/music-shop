import { createContext, useContext } from "react";

export interface IMenu {
  id: number;
  title: string;
  href?: string;
}

type MenuListContextProps = {
  menu: IMenu[];
};

export const MenuListContext = createContext<MenuListContextProps>({
  menu: [],
});

interface IProps {
  menu: IMenu[];
  children: JSX.Element;
}

export const useMenuList = () => useContext(MenuListContext);

export const MenuListProvider = ({ children, menu }: IProps) => {
  return (
    <MenuListContext.Provider value={{ menu: menu }}>
      {children}
    </MenuListContext.Provider>
  );
};
