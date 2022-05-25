import GlobalStyle from "../styles/global";
import Theme from "../styles/theme";
import { AppContextProvider } from "../hooks/AppContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </AppContextProvider>
  );
}

export default MyApp;
