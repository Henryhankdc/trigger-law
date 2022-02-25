import { Html, Head, Main, NextScript } from 'next/document'
{/*
Add: lang attribute
https://dev.to/cassidoo/adding-a-lang-attribute-to-your-nextjs-site-22db
*/}
export default function Document() {
  return (
    <Html lang="en"> {/* Add whichever language you want here */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
