import GlobalStyle from "../styles/global";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
