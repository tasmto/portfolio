import { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheetDocument } from 'next-sanity/studio'

class MyDocument extends ServerStyleSheetDocument {
  static async getInitialProps(ctx: DocumentContext) {
    // You can still override renderPage:
    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) =>
          function (props) {
            return <App {...props} />
          },
      })

    const initialProps = await ServerStyleSheetDocument.getInitialProps(ctx)

    // const extraStyles = await getStyles()
    return {
      ...initialProps,
      // Add to the default styles if you want
      styles: [initialProps.styles /*extraStyles*/],
    }
  }
  render() {
    return (
      <Html lang='en' data-theme='fa'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='allow'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
