const webpack = require('webpack');
const helpers = require('./helpers');
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');
const AOT = helpers.hasNpmFlag('aot');
const METADATA = { isDevServer: helpers.isWebpackDevServer() };

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    entry: {
      'polyfills': './src/polyfills.browser.ts', // 依赖项
      'main': AOT ? './src/main.browser.aot.ts' : './src/main.browser.ts' // 主程序
    },
    resolve: {
      extensions: ['.ts', '.js', '.json'], // 自动解析确定的扩展
      modules: [helpers.root('src'), helpers.root('node_modules')], // 解析模块时应搜索的目录
    },
    module: {
      rules: [
        {
          test: /\.ts$/, // 匹配特定的条件
          use: [
            { loader: 'ng-router-loader', options: { loader: 'async-import',genDir: 'compiled',aot: AOT } }, // 使用loader以及传入的规则
            { loader: 'awesome-typescript-loader', options: { configFileName: 'tsconfig.webpack.json' } }, // 使用loader以及传入的规则
            { loader: 'angular2-template-loader' } // 使用loader以及传入的规则
          ],
          exclude: [/\.(spec|e2e)\.ts$/] // 排除特定的条件
        },
        { test: /\.json$/, use: 'json-loader' }, // 使用loader以及传入的规则
        { test: /\.css$/, use: ['to-string-loader', 'css-loader'], exclude: [helpers.root('src', 'styles'), helpers.root('src', 'app/yeui')] }, // 使用loader以及传入的规则
        { test: /\.html$/, use: 'raw-loader', exclude: [helpers.root('src/index.html')] }, // 使用loader以及传入的规则
        { test: /\.(jpg|png|gif)$/, use: 'file-loader' }, // 使用loader以及传入的规则
        { test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/, use: 'file-loader' } // 使用loader以及传入的规则
      ],
    },
    plugins: [ // 使用的插件列表 可重叠
      new AssetsPlugin({ path: helpers.root('wwwroot/dll'), filename: 'webpack-assets.json', prettyPrint: true }), // 生成一个manifest文件帮助渲染最终html
      new CheckerPlugin(), // ts loader的插件
      new CommonsChunkPlugin({ name: 'polyfills', chunks: ['polyfills'] }), // 拆分多个lib 这里指定polyfills的chunk打包到polyfills
      new CommonsChunkPlugin({ name: 'vendor', chunks: ['main'],
        minChunks: module => /node_modules/.test(module.resource) }), // 指定main chunk和node_modules的依赖打包到vendor
      new CommonsChunkPlugin({name: ['polyfills', 'vendor'].reverse()}), // 将两个包反转(尚不明确)
      new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, helpers.root('src'), { }),
      new CopyWebpackPlugin([{ from: 'src/assets', to: 'assets' }]), // 用于复制src中的指定资源目录到目标dist(wwwroot)目录下
      new HtmlWebpackPlugin({ // 最终使用webpack帮助生成index.html, 在此传入生成的配置
        template: 'src/index.html', // 模板源
        title: METADATA.title, // title
        chunksSortMode: 'dependency', // chunk的排序规则
        metadata: METADATA, // 指定的元数据 可以再模板源中使用就像JSP语法一样
        inject: 'head' // 打包脚本注入到head中
      }),
      new ScriptExtHtmlWebpackPlugin({ defaultAttribute: 'defer' }), // 给脚本加一个defer标识
      new LoaderOptionsPlugin({}), // 用于从webpack1迁移到2
      new NormalModuleReplacementPlugin(/facade(\\|\/)async/, helpers.root('node_modules/@angular/core/src/facade/async.js')), // 指定资源替换规则
      new NormalModuleReplacementPlugin(/facade(\\|\/)collection/, helpers.root('node_modules/@angular/core/src/facade/collection.js')), // 指定资源替换规则
      new NormalModuleReplacementPlugin(/facade(\\|\/)errors/, helpers.root('node_modules/@angular/core/src/facade/errors.js')), // 指定资源替换规则
      new NormalModuleReplacementPlugin(/facade(\\|\/)lang/, helpers.root('node_modules/@angular/core/src/facade/lang.js')), // 指定资源替换规则
      new NormalModuleReplacementPlugin(/facade(\\|\/)math/, helpers.root('node_modules/@angular/core/src/facade/math.js')), // 指定资源替换规则
      new ngcWebpack.NgcWebpackPlugin({ disabled: !AOT, tsConfig: helpers.root('tsconfig.webpack.json'),
        resourceOverride: helpers.root('config/resource-override.js') }) // 指定资源替换规则
    ],
    node: { // 配置node全局变量 帮助node环境下的代码在其他环境(浏览器)运行
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
