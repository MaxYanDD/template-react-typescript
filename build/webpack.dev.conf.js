// webpack.dev.conf.js
const webpack = require("webpack")
const merge = require("webpack-merge")
const commonConfig = require("./webpack.base.conf")
const path = require("path")

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [require("autoprefixer")]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "../public"),
    port: 8000, // 本地服务器端口号
    hot: true, // 热重载
    overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
    inline: true,
    host: "localhost",
    compress: true,
    open: true,
    proxy: {
      // '/api': {
      //   target: 'https://online/api',
      //   changeOrign: true,
      //   logLevel: 'debug',
      //   headers: {
      //     Cookie: ''
      //   }
      // }
    },
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "/index.html" }]
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
})
