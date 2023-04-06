import { LanguageContextProvider } from "@/context/LanguageContext";
import { MainContextProvider } from "@/context/MainContext";

import "@/styles/globals.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
   <LanguageContextProvider>
      <MainContextProvider>
        <Component {...pageProps} />
      </MainContextProvider>
      </LanguageContextProvider>
    </>
  );
}
