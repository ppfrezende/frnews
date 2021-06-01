import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@300&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <title>fr.news</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
