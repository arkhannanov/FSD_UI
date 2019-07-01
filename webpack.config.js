const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, './src'),
};

module.exports = {
    entry: {
        app: './src/index.js',
        socialNetwork: './src/pages/social-network/social-network.js',
        job: './src/pages/job/job.js',
        interior: './src/pages/interior/interior.js',
        rentAuto: './src/pages/rent-auto/rent-auto.js',
    },
    output: {
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'postcss.config.js' } },
                    }, {
                        loader: 'resolve-url-loader',
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            data: '@import "globals.scss";',
                            includePaths: [path.join(__dirname, './src')],
                        },
                    },
                ],
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true, config: { path: 'postcss.config.js' } },
                    },
                ],
            },

            {
                test: /\.(eot|woff|ttf|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                    },
                }],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                exclude: [/fonts/],
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image/',
                },
            },
        ],
    },
    devServer: {
        overlay: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.pug',
            inject: true,
            chunks: ['app'],

        }),
        new HtmlWebpackPlugin({
            filename: 'social-network.html',
            template: 'src/pages/social-network/social-network.pug',
            inject: true,
            chunks: ['socialNetwork'],
        }),
        new HtmlWebpackPlugin({
            filename: 'job.html',
            template: 'src/pages/job/job.pug',
            inject: true,
            chunks: ['job'],
        }),
        new HtmlWebpackPlugin({
            filename: 'interior.html',
            template: 'src/pages/interior/interior.pug',
            inject: true,
            chunks: ['interior'],
        }),
        new HtmlWebpackPlugin({
            filename: 'rent-auto.html',
            template: 'src/pages/rent-auto/rent-auto.pug',
            inject: true,
            chunks: ['rentAuto'],
        }),
        new CopyWebpackPlugin([
            { from: `${PATHS.src}/video`, to: 'video' },
            { from: `${PATHS.src}/images/favicons`, to: 'images/favicons' },
        ]),
    ],
};
