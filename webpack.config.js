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
    alfa: './src/pages/alfa/alfa.js',
    betta: './src/pages/betta/betta.js',
    gamma: './src/pages/gamma/gamma.js',
    sigma: './src/pages/sigma/sigma.js'
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
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
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
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
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
      filename: 'alfa.html',
      template: 'src/pages/alfa/alfa.pug',
      inject: true,
      chunks: ['alfa']
  }),
    new HtmlWebpackPlugin({
    filename: 'betta.html',
    template: 'src/pages/betta/betta.pug',
    inject: true,
    chunks: ['betta']
}),
    new HtmlWebpackPlugin({
    filename: 'gamma.html',
    template: 'src/pages/gamma/gamma.pug',
    inject: true,
    chunks: ['gamma']
}),
new HtmlWebpackPlugin({
  filename: 'sigma.html',
  template: 'src/pages/sigma/sigma.pug',
  inject: true,
  chunks: ['sigma']
}),
    new CopyWebpackPlugin([
      { from: PATHS.src + '/video', to: `video`},
      { from: PATHS.src + '/images/favicons', to: `images/favicons` }
    ]), 
  ]
}