const path = require('path')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')
const withFonts = require('next-fonts')
const { parsed: Env } = require('dotenv').config()

module.exports = withSass(
    withFonts({
        webpack: (config, { dev, defaultLoaders, isServer }) => {
            if (!isServer) {
                config.node = {
                    fs: 'empty',
                }
            }
            config.module.rules.push({
                test: /\.+(js)$/,
                loader: defaultLoaders.babel,
                include: path.resolve(__dirname, '../src'),
            })

            config.plugins.push(
                new FilterWarningsPlugin({
                    exclude: /mini-css-extract-plugin[^]*Conflicting order between:/,
                })
            )

            config.plugins.push(
                new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                })
            )

            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            })

            config.plugins.push(new webpack.EnvironmentPlugin(Env))

            return config
        },
    })
)
