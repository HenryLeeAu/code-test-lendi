const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),  
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].bundle.js'
  }, 
  devServer: {
    contentBase: path.resolve(__dirname, "dist/assets/media"),
    stats: 'errors-only',
    open: true,
    port: 8080,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          } 
        }
      }, {
        test: /\.html$/, 
        use: ['html-loader']
      }, {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          "css-loader"
        ]
      }
    ]
  }
}

module.exports = config;