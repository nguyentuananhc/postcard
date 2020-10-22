import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import Store from 'store'
// import Header from 'components/Header'

const MyApp = (props) => {
    const { Component, pageProps, store } = props

    if (typeof window === 'undefined') {
        global.window = {}
    }

    return (
        <Provider store={store}>
            <div className="wrapper">
                {/* <Header /> */}
                <Component {...pageProps} />
            </div>
        </Provider>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    return {
        pageProps: {
            ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}),
        },
    }
}

export default withRedux(Store)(MyApp)
