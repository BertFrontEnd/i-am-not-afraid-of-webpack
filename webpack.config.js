const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => ({
  devtool: 'source-map',
  module: {
    rules: require('./module.rules')(env, argv),
  },
  plugins: [
    argv.mode === 'development' ? new HtmlWebpackPlugin() : null,
    argv.mode === 'production'
      ? new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        })
      : null,
  ].filter(plugin => !!plugin),
});
