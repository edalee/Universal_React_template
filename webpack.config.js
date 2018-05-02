const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals');

const browserConfig = {
    entry: './src/browser/index.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js',
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    // babelrc: false,
                    presets: ["react"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { importLoaders: 1}
                        },
                        {
                            loader: 'postcss-loader',
                            options: { plugins: [autoprefixer()]}
                        },
                    ]
                })
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
    plugins: [
        new ExtractTextPlugin({
            filename: 'public/css/[name].css'
        }),
        new webpack.BannerPlugin({
            banner: "__isBrowser__ = true;",
            raw: true,
            include: /\.js$/
        })
    ]
}


const serverConfig = {
    entry: './src/server/index.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: __dirname,
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["react"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'css-loader/locals',
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
                            emit: false
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
    plugins: [
        new webpack.BannerPlugin({
          banner: "__isBrowser__ = false;",
          raw: true,
          include: /\.js$/
        })
    ]
};

module.exports = [browserConfig, serverConfig];
