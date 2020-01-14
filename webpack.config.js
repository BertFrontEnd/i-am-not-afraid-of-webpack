const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        use: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    argv.mode === 'development' ? new HtmlWebpackPlugin() : null,
  ].filter(plugin => !!plugin),
});
