const path = require('path');
const webpack = require('webpack');

//const moduleRuleOne = require("./src/modules/module-rule-one");
//import moduleRuleOne from './src/modules/module-rule-one';

const ExtractTextPlugin = require('extract-text-webpack-plugin');



webpackConfig = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].bundle.js',
    library: '[name]'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  devServer: {
    contentBase: __dirname + '/src/',  // New
  },
  devtool: '#cheap-module-inline-eval-source-map',

  module: {
    rules: [
        {
            test: /\.js$|\.jsx$/,
            use : [{
                loader: 'babel-loader',
            }],
        },
        {
            test  : /\.css$/,
            loader: ExtractTextPlugin.extract({
                loader: 'css-loader?importLoaders=1',
            }),
        },
        {
            test: /\.(sass|scss)$/,
            use : [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        },
        {
            test: /\.svg$|\.png|\.jpe?g|\.gif$/,
            use : [
                'url-loader?limit=10000&name=images/[name].[hash].[ext]'
            ],
        },
        {
            test: /\.woff2?$|\.svg$|\.ttf$|\.eot$/,
            use : 'file-loader?name=fonts/[name].[ext]',
        },
    ],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      allChunks: true,
    }),

  ],

};


module.exports= webpackConfig;
