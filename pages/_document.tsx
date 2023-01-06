import { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default function Document() {
  const sheet = new ServerStyleSheet();
  const main = sheet.collectStyles(<Main />);

  return (
    <Html>
      <Head />
      <body>
        {main}
        <NextScript />
      </body>
    </Html>
  );
}

