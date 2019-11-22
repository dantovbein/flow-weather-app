
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtract = require('mini-css-extract-plugin');

const basePath = __dirname;
const distPath = 'dist/client';

const indextInput = './public/index.html';
const indexOutput = 'index.html';

const rules = [
  {
    test: /\.js/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: ['babel-loader'] // 'ts-loader' 
  },
  {
    test: /\.css$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          sourceMap: true,
        }
      },
      {
        loader: 'postcss-loader',
        options: { sourceMap: true }
      },
    ],
    include: /\.css$/
  },
  { 
    test: /\.scss$/, 
    use: [ "style-loader", "css-loader", "sass-loader" ]
  },
  {
    test: /\.(png|jpg|gif|ttf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
          publicPath: 'images/',
        },
      },
    ],
  },
];

const config = {
  target: 'web',
  mode: 'development', 
  entry: ['@babel/polyfill', './src/client/index.tsx'],
  output: {
    path: path.join(basePath, distPath),
    filename: '[chunkhash][name].js',
    publicPath: '/'
  },
  module: { rules },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: './',
    port: 5053,
    historyApiFallback: true
  },
  plugins: [
    new MiniCSSExtract({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HTMLWebpackPlugin({
      filename: indexOutput, 
      template: indextInput,
    })
  ]
}

module.exports = config;