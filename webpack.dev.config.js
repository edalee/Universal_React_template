const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // devtool: 'inline-source-map',
    entry: './src/browser/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: './[name].bundle.js',
        publicPath: './public'
    },
    devServer: {
      contentBase: "./dist",
      publicPath: "./public"
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/img/[name].[ext]',
                            publicPath: url => url.replace(/public/, ''),
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
}
