const ExtractPluginText = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + '/dist',
    publicPath: __dirname + '/dist'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ExtractPluginText.extract({use:['css-loader', 'less-loader']}) // compiles Less to CSS
    }]
  },
  plugins: [
    new ExtractPluginText({filename:"styles.css"})
  ]
};
