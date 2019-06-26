'use strict'
// 引入依赖模块
const path = require('path') // 使用 NodeJS 自带的文件路径工具
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 拼接出绝对路径
function resolve (dir) {
  // __dirname，就是当前webpack.config.js文件所在的绝对路径
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'), // path.resolve([from ...], to) 将to参数解析为绝对路径
  // 配置webpack编译入口：路径相对于本文件所在的位置，可以写成字符串、数组、对象
  // entry: {
  //   app: './src/main.js'
  // },
  // 安装babel-polyfill
  entry: ['babel-polyfill', './src/main.js'],
  // 输出配置
  output: {
    path: config.build.assetsRoot, // webpack编译输出的静态资源根路径（例如：/dist）
    filename: '[name].js', // 编译输出的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath // 正式发布环境下编译输出的上线路径的根路径
  },
  // 其他解决方案
  resolve: {
    // require时省略的扩展名
    extensions: ['.js', '.vue', '.json'],
    // 模块别名地址，有了别名之后引用模块更方便
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      // 引入jquery设置别名: import $ from 'jquery'
      'jquery': resolve('static/js/jquery.js'),
    }
  },
  // 模块加载器
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      // 使用vue-loader 加载 .vue 结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      // js文件需要通过babel-loader进行编译成es5文件以及压缩等操作
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      // 图片、音像、字体都使用url-loader进行处理，超过10000会编译成base64
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // 配置插件项
  plugins: [],
  // 以下选项是Node.js全局变量或模块，这里主要是防止webpack注入一些Node.js的东西到vue中
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  // externals: {
  //   'jquery': 'jQuery'
  // }
}
