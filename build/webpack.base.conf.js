'use strict'
// 引入依赖模块
const path = require('path') // 使用 NodeJS 自带的文件路径工具
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// const webpack = require('webpack')

// 拼接出绝对路径
function resolve (dir) {
  // __dirname，就是当前webpack.config.js文件所在的绝对路径
  return path.join(__dirname, '..', dir)
}

// eslint rules
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
  // context: webpack 的主目录, entry 和 module.rules.loader 选项相对于此目录解析
  context: path.resolve(__dirname, '../'), // path.resolve([from ...], to) 将to参数解析为绝对路径
  // entry: 入口配置，路径相对于本文件所在的位置，可以写成字符串、数组、对象
  // entry: {
  //   app: './src/main.js'
  // },
  // 安装babel-polyfill
  entry: ['babel-polyfill', './src/main.js'],
  // output: 输出配置
  output: {
    path: config.build.assetsRoot, // webpack编译输出的静态资源根路径（例如：/dist）
    filename: '[name].js', // 编译输出的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath // 正式发布环境下编译输出的上线路径的根路径
      : config.dev.assetsPublicPath
  },
  // resolve：其他解决方案
  resolve: {
    // require/import时省略的扩展名
    extensions: ['.js', '.vue', '.json'],
    // 模块别名：把原导入路径映射成一个新的导入路径
    alias: {
      // 在给定对象的键后的末尾添加$，以表示精准匹配
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
      // 调用components下组件可以使用 import 'components/confirm'
      'components': resolve('src/components'),
      // 引入本地jquery设置别名: import $ from 'jquery'
      // 'jquery': resolve('static/js/jquery.js'),
    },
    // modules：配置Webpack 去哪些目录下寻找第三方模块，默认是只会去node_modules目录下寻找
    modules: ['./src/components', 'node_modules'] // 调用components下组件可以使用 import 'confirm'
  },
  // module: 模块加载器，处理那些非 JavaScript 文件
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      // 使用vue-loader 加载 .vue 结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig//对vueloader的一些额外处理
      },
      // js文件需要通过babel-loader进行编译成es5文件以及压缩等操作
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]//必须包含src和test文件夹
      },
      // 图片、音像、字体都使用url-loader转换为base64格式，以减少网络请求，提前加载图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,//图片小于10000字节，会转换为base64格式
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,//媒体文件小于10000字节，会转换为base64格式
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,//字体文件小于10000字节，会转换为base64格式
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  // plugins: 配置插件项
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: 'jquery' //不想用$可以使用其他关键字，如jQuery: 'jquery'
    // })
  ],
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
  // externals：表示不打包这些模块，而是在运行时从环境中请求他们，例如从 CDN 引入 jQuery，而不把它打包
  // externals: {
  //   'jquery': 'jQuery'
  // }
}
