import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { NavigationProvider } from "@/hooks/useNavigation";
import { MenuListProvider } from "@/hooks/useMenuList";
import { menu } from "@/config/menu";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavigationProvider>
        <MenuListProvider menu={menu}>
          <Component {...pageProps} />
        </MenuListProvider>
      </NavigationProvider>
    </Provider>
  );
}
