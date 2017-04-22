const path = require('path');
const webpack = require('webpack');

const ServerFavicon = require('serve-favicon');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


webpackConfig = {
  context: path.join(__dirname, 'src'),
  entry  : {
    app: [
      './app.js',
      '../node_modules/css-reset-and-normalize-sass/css/reset-and-normalize.min.css',
    ]

  },


  output: {
    path      : path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename  : '[name].bundle.js',
    //library   : '[name]'
  },

  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  devServer: {
    contentBase: __dirname + '/public/',  // New
    //contentBase: path.join(__dirname, 'src'),
    //lazy: true,
    //compress: true,
    //filename: "app.bundle.js",
    //host       : 'localhost',
    //publicPath : '/public/',
    stats      : "errors-only",
    port       : 3030
  },

  devtool  : '#cheap-module-inline-eval-source-map',

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
    /*  {
        test: /\.(pug|jade)$/,
        use: [
          'raw-loader',
          'pug-html-loader'
        ]
      },*/
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
      name     : 'commons',
      filename : 'commons.js',
      minChunks: 2,
    }),
    new ExtractTextPlugin({
      filename : "css/[name].css",
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
    }),
  ],

};


module.exports = webpackConfig;
