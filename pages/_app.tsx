import { AppProps } from "next/app";
import "@/styles/global.css";
import { useEffect, useState } from "react";
import { store } from "@/store/index";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild || typeof window === "undefined") {
    return null;
  } else {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}
