const path = require('path');
const webpack = require("webpack");

//const moduleRuleOne = require("./src/modules/module-rule-one");
//import moduleRuleOne from './src/modules/module-rule-one';

const ExtractTextPlugin = require("extract-text-webpack-plugin");



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
 /* module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: ["babel-loader"]
      },
 /!*     {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        exclude: /node_modules/,
        //options: {
        //  name: '[path][name].[ext]',
        //},
      },*!/
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader'
      },
   /!*   {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=10000&name=images/[hash:12].[ext]',
        exclude: /node_modules/
      },*!/
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ],

    plugins: [
      new ExtractTextPlugin('styles.css', {
        allChunks: true
      })
    ]
  },*/

  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      /*
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ],
      },
      */
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.svg$|\.png|\.jpe?g|\.gif$/,
        use: [
          'url-loader?limit=10000&name=images/[hash:12].[ext]'
        ],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        use: ['file-loader'],
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
