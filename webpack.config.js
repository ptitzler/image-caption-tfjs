const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
		    { test: /\.jpg$/, use: { loader: "file-loader" }},
		    { test: /\.(html)$/, use: { loader: 'html-loader'}}
      ]
    },
    plugins: [
     new HtmlWebpackPlugin({
     	template: 'src/index.html'
     })
    ]
  };
