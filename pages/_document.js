import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <title>NRQuiz</title>
                    <meta charSet="utf-8" />
                    <meta content="IE=edge" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto:500"
                        rel="stylesheet"
                    ></link>
                    <link
                        rel="stylesheet"
                        href="/static/css/bootstrap.min.css"
                    />
                    <link
                        href="/static/css/wrapper.css"
                        rel="stylesheet"
                        type="text/css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
