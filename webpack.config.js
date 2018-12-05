/* globals module, require, __dirname */
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/main/js');
const BUILD_DIR = path.resolve(__dirname, 'dist');

let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'Webpack 4',
    filename: 'index.html'
});

module.exports = {
    entry: APP_DIR + '/main.js',
    output: {
        path: BUILD_DIR,
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: false,
                    collapseWhiteSpace: true
                }
            }
        }]
    },
    plugins: [HtmlWebpackPluginConfig]
};
