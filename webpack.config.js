var path = require('path');

module.exports = {
  entry: [
    __dirname + '/src/index.js'
  ],
  output: {
    path: path.join(__dirname, '/public/assets'),
    publicPath: path.join(__dirname, '/public/assets'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};