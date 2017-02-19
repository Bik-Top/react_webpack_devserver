
### Webpack v.2  webpack-dev-server  Babel  React  SASS
 To build I used Webpack v.2
Extract text plugin for it need v.2

- will be deprecated

```
// before
modules: {
  loaders: [...]
}

// after
modules: {
  rules: [...]
}

```

```

// before
resolve: {
  modulesDirectories: [...],
}

// after
resolve: {
  modules: [...],
}
```

```
module: {
  rules: [{
    test: /\.scss$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          plugins: ...
        }
      },
      'sass-loader'
    ]
  }]
}
```


```
// Webpack 1
ExtractTextPlugin.extract(
  'style-loader',
  'css-loader!postcss-loader!sass-loader'
);

// Webpack 1
ExtractTextPlugin.extract(
  'style-loader',
  'css-loader?modules-true!postcss-loader!sass-loader'
);



// Webpack 2
var loaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true
    }
  },
  {
    loader: 'postcss-loader'
  },
  {
    loader: 'sass-loader'
  }
]



// Webpack 2
ExtractTextPlugin.extract({
  fallbackLoader: 'style-loader',
  loader: loaders,
})
```
