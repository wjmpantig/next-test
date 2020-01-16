import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="/test.css" type="text/css" />
        </Head>
        <body>
          <div>test content</div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
