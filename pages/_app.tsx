import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { NavigationProvider } from "@/hooks/useNavigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavigationProvider>
        <Component {...pageProps} />
      </NavigationProvider>
    </Provider>
  );
}
