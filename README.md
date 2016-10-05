# auto-module-name-loader
Overwrites module id with module name in webpack module magic object

```javascript
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'auto-module-name' }
    ]
  }
}
```
