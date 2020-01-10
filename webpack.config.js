const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      argv.mode === 'development' ? new HtmlWebPackPlugin() : null,
    ].filter(plugin => !!plugin),
  };
};
