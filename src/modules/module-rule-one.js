//module-rule-one.js  14-02-2017

const moduleRuleOne = [
  {
    test: /\.js$|\.jsx$/,
    use: [{
      loader: "babel-loader",
    }],
  },
  {
    test: /\.css$/,
    use: [
      "style-loader",
      { loader: "css-loader", options: { modules: true } }
    ],
  },
  {
    test: /\.svg$|\.png|\.jpe?g|\.gif$/,
    use: [
      'url-loader?limit=10000&name=images/[hash:12].[ext]'
    ],
  },
  {
    test: /\.(sass|scss)$/,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ]
  } ,
  {
    test: /\.woff2?$|\.ttf$|\.eot$/,
    use: ['file-loader'],
  },
];


export default moduleRuleOne;
