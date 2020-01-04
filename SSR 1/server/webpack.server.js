const path = require('path')
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin-legacy')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const config = {
    // inform webpack that we're building a bundle 
    // for nodejs, rather than for the browser
    target: 'node',

    // tell webpack the root of our
    // server application
    entry: './src/index.js',
    // tell webpack where to put the output file

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()],
    // plugins: [
    // Terser plugin digunakan untuk proses production
    // new TerserPlugin({
    //     exclude: /(node_modules|bower_components)/,
    // }),
    // new WebpackBar({ name: "server", color: "green", basic: true, fancy: true }),
    // new CleanWebpackPlugin()
    // ]

}
module.exports = merge(baseConfig, config)