'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : require('../config/prod.env')

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true
    })
  },
  // 开启source-map，生产环境下推荐使用cheap-source-map或source-map，后者得到的.map文件体积比较大，但是能够完全还原以前的js代码
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    // 非主入口的文件名，即未被列在entry中，却又需要被打包出来的文件命名配置
    // 可以在 hash 后加 :6 决定使用几位 hash 值
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    // DefinePlugin：允许你创建可在编译时配置的全局常量
    new webpack.DefinePlugin({
      'process.env': env // 位于生产环境下
    }),
    // UglifyJsPlugin：压缩js代码
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: { //压缩配置
          warnings: false,
          // drop_debugger: true,
          // drop_console: true // 去掉控制台打印
        }
      },
      sourceMap: config.build.productionSourceMap,//生成sourceMap文件
      parallel: true
    }),
    // extract css into its own file
    // ExtractTextPlugin：从 bundle 中提取文本（CSS）到单独的文件；比如打包之后的index页面有style插入，就是这个插件抽取出来的，减少请求
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true,
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    // OptimizeCSSPlugin：压缩提取的CSS，并解决ExtractTextPlugin分离出的js重复的问题（多个文件引入同一CSS文件）
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
        ? {safe: true, map: {inline: false}}
        : {safe: true}
    }),
    // (function () {
    //   return Object.assign({}, {
    //     apply: function (compiler) {
    //       compiler.plugin('compilation', function (compilation) {
    //         compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
    //           htmlPluginData.assets.js.splice(1, 0, config.build.dllDest + '.js')
    //           htmlPluginData.assets.css.unshift(config.build.dllDest + '.css')
    //           callback(null, htmlPluginData);
    //         });
    //       });
    //     }
    //   })
    // })(),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    // HtmlWebpackPlugin：生成HTML文件的插件，引入CSS文件和js文件，用于服务器访问（如果创建多个HtmlWebpackPlugin的实例，就会生成多个页面）
    new HtmlWebpackPlugin({
      // title:'vue-project', //用于生成的HTML文档的标题
      // favicon: "", //指定页面图标
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index, // 生成的模板文件的名字 默认index.html
      template: 'index.html', //模板来源文件
      //js文件注入位置(body|true|head|false)
      inject: true,
      // 是否生成hash添加在引入文件地址的末尾，类似于我们常用的时间戳，这个可以避免缓存带来的麻烦
      // 添加hash形式如下所示：html <script type="text/javascript" src="common.js?a3e1396b501cdd9041be"></script>
      // hash: false,
      // 打包后压缩配置
      minify: {
        removeComments: true, // 打包后删除HTML中的注释
        collapseWhitespace: true, // 打包后删除HTML中空白符与换行
        removeAttributeQuotes: true // 删除HTML元素中属性的引号
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      // 引入模块的排序方式：dependency表示按照dependency的顺序引入
      chunksSortMode: 'dependency'
    }),
    // keep module.id stable when vender modules does not change
    // HashedModuleIdsPlugin：热更新插件
    new webpack.HashedModuleIdsPlugin(),
    // enable scope hoisting
    new webpack.optimize.ModuleConcatenationPlugin(),
    // split vendor js into its own file
    // CommonsChunkPlugin：提取入口文件里面的第三方库和公共模块
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',//文件名
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        // 如果模块有一个路径，而且在路径中有 js 文件，并且这个模块是属于 node_modules 中的模块, 那这个模块就会被抽离出来放进 vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    // This instance extracts shared chunks from code splitted chunks and bundles them
    // in a separate chunk, similar to the vendor chunk
    // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),
    // copy custom static assets
    // CopyWebpackPlugin: //将单个文件或整个目录复制到构建目录
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'), //将static里的文件复制到打包目录
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

// 额外配置
if (config.build.productionGzip) {//配置文件开启了gzip压缩
  //引入压缩文件的组件，该插件会对生成的文件进行压缩，生成一个.gz文件
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    // CompressionWebpackPlugin: 预先提供带 Content-Encoding 编码的压缩版本的资源
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',//目标文件名
      algorithm: 'gzip',//使用gzip压缩
      test: new RegExp(//满足正则表达式的文件会被压缩
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,//资源文件大于10240B = 10KB大小才会被压缩
      minRatio: 0.8//最小压缩比达到0.8时才会被压缩
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
