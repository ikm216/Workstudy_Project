const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Apply loaders for CSS files
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader', // Add postcss-loader here
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // For handling image files
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
};


