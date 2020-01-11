const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => ({
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: argv.mode === 'development',
            },
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
});
