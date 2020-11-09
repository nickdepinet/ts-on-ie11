const path = require('path');
const webpack = require('webpack');

module.exports = {
 entry: './dist/index.js',
  output: {
   filename: './dist/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      join: ['join'],
    }),
  ],
};