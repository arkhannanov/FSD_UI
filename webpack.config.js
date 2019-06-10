const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, './src'),
}

module.exports = {
  entry: {
    app: './src/index.js',
    indexFirstPage: './src/pages/first-page/index-first-page.js',
    indexSecondPage: './src/pages/second-page/index-second-page.js',
    indexThirdPage: './src/pages/third-page/index-third-page.js',
    indexFourthPage: './src/pages/fourth-page/index-fourth-page.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  module: {
    rules: [
      { 
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
            pretty: true
                }
      },
      {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
      }, 
      {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
        }, {
          loader: 'resolve-url-loader'
        }, {
          loader: 'sass-loader',
          options: { 
            sourceMap: true,
            data: '@import "globals.scss";',
            includePaths: [path.join(__dirname, './src')] 
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
        }
      ]
    },

    {
      test: /\.(eot|woff|ttf|svg)$/,
      use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
          }
      }]
    },
    {
			test: /\.(png|jpg|gif|svg)$/,
			loader: 'file-loader',
			exclude: [/fonts/],
			options: {
        name: '[name].[ext]',
        outputPath: 'img/'
			}
		}
  ]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.pug',
        inject: true,
        chunks: ['app']

    }),
    new HtmlWebpackPlugin({
      filename: 'index-first-page.html',
      template: 'src/pages/first-page/index-first-page.pug',
      inject: true,
      chunks: ['indexFirstPage']
  }),
    new HtmlWebpackPlugin({
    filename: 'index-second-page.html',
    template: 'src/pages/second-page/index-second-page.pug',
    inject: true,
    chunks: ['indexSecondPage']
}),
    new HtmlWebpackPlugin({
    filename: 'index-third-page.html',
    template: 'src/pages/third-page/index-third-page.pug',
    inject: true,
    chunks: ['indexThirdPage']
}),
new HtmlWebpackPlugin({
  filename: 'index-fourth-page.html',
  template: 'src/pages/fourth-page/index-fourth-page.pug',
  inject: true,
  chunks: ['indexFourthPage']
}),
    new CopyWebpackPlugin([
      { from: PATHS.src + '/img', to: `img` },
      { from: PATHS.src + '/video', to: `video`},
      { from: PATHS.src + '/img/favicons', to: `img/favicons` }
    ]), 
  ]
}