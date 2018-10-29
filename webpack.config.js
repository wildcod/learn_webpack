const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // to show the error 
const CleanWebpackPlugin = require('clean-webpack-plugin');// to clear the unused file.js in dist
const webpack = require('webpack');

module.exports = {
   entry: {
     app: './src/index.js',
   },
   devtool: 'inline-source-map',
   devServer: {
         contentBase: './dist',
         hot: true
      },
   plugins: [
         new CleanWebpackPlugin(['dist']),  
         new HtmlWebpackPlugin({
           title: 'Output Management'
         }),
         new webpack.HotModuleReplacementPlugin()
      ],
  output: {
     filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};