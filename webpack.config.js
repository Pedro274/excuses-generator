const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "production",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      { 
        test: /\.html$/, 
        use: [
                {
                    loader: "html-loader", 
                    options: {minimize: true}
                }
             ] 
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env']}
        }
      }]
  },

  plugins: [new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
  })]
};