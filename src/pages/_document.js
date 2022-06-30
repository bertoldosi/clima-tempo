import { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <title>Clima Tempo || Bertoldo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/jpg"
          href="https://cdn-icons-png.flaticon.com/512/1821/1821978.png"
        />

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
