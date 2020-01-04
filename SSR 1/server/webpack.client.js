const path = require('path')
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin-legacy')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = {
    // tell webpack the root of our
    // server application
    entry: './src/client/client.js',
    // tell webpack where to put the output file

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // plugins: [
    // Terser plugin digunakan untuk proses production
    // new TerserPlugin({
    //     exclude: /(node_modules|bower_components)/,
    // }),
    // new WebpackBar({ name: "client", color: "blue", basic: true, fancy: true }),
    // new CleanWebpackPlugin()
    // ]

}
module.exports = merge(baseConfig, config)