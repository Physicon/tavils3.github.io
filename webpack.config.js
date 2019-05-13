
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers:['ie >= 10']
                })
              ],
              sourceMap: true
            }
          },
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ]
  },
  devServer: {
    lazy: true,
    filename: './dist/bundle.js'
  }
}