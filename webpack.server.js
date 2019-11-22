const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  node: false,
  entry: {
    server: './src/server/server.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist/server'),
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',// 'ts-loader',
        ],
        include: [
          path.resolve(__dirname, "src/server"),
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
  },
  externals: [nodeExternals()],
};
