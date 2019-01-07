const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const minimize = mode === 'production';

module.exports = {
  mode,
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, 'index.js'),
  ],
  optimization: {
    minimize,
  },
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
