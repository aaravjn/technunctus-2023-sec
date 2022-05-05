import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="/static/logo.png?v=2" />
                <meta charSet="UTF-8" />
                <meta name="description" content="The IIT Jammu family takes immense pleasure in inviting you all to the third edition of our Annual Tech Fest, Technunctus’21, which is scheduled from 17th-18th April 2021 in complete Online Mode" />
                <meta name="keywords" content="TECHFEST, spider8019, IIT JAMMU, TECHNUNCTUS" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}