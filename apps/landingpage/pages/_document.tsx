import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import GlobalStyle from '../components/atoms/GlobalStyle'

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(
              <>
                <App {...props} />
                <GlobalStyle />
              </>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content={`width=device-width, initial-scale=1,
            maximum-scale=1, user-scalable=no`}
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="LosK Landing" />
          <meta property="og:description" content="Landing Page" />
          <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
          <title>LosK Landing</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal" />
        </body>
      </Html>
    )
  }
}
