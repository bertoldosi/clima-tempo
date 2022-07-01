import React from "react";
import GlobalStyle from "../styles/global";
import Theme from "../styles/theme";
import { AppContextProvider } from "../hooks/AppContextProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Theme>
        <GlobalStyle />
        <Head>
          <title>Clima Tempo || Bertoldo</title>
          <link
            rel="icon"
            type="image/jpg"
            href="https://cdn-icons-png.flaticon.com/512/1821/1821978.png"
          />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </AppContextProvider>
  );
}

export default MyApp;
