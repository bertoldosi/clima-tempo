import React from "react";
import GlobalStyle from "../styles/global";
import Theme from "../styles/theme";
import { AppContextProvider } from "../hooks/AppContextProvider";
import Head from "next/head";

import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <ToastContainer />
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
