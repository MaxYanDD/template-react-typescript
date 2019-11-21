// webpack.base.conf.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 文件命名
              name: '[name]-[hash:5].[ext]',
              // 输出路径
              outputPath: 'images/',
              // 小于 10k 的图片转成 base64 编码
              limit: 10240 // 大于10k的会调用file-loader
            }
          }
        ]
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[hash:5].[ext]',
              limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
              publicPath: 'fonts/',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'movie',
      inject: true,
      minify: {
        // 压缩 HTML 文件
        removeComments: true, // 移除 HTML 中的注释
        collapseWhitespace: false, // 删除空白符与换行符
        minifyCSS: true // 压缩内联 css
      },
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html')
    }),
    // 导入全局变量，不用一个一个的import
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        VUE_BASE_URL: JSON.stringify('http://www.baidu.com')
      }
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../public/dll/vendor.manifest')
    }),
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(__dirname, '../public/dll/dll_vendor.js'),
        outputPath: 'dll',
        publicPath: 'dll',
        includeSourcemap: false
      }
    ])
  ]
}
