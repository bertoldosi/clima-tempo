import { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kadwa:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="//db.onlinewebfonts.com/c/84cb021d5f9af287ffff84b61beef6dc?family=clockicons"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
