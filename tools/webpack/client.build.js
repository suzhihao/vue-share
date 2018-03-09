/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import config from '../config'
import sharedClientConfig from './client.shared'
import styleLoaderConfig from './style-loader-config'
import Bless from '../plugins/bless-plugin'

export default Object.assign({}, sharedClientConfig, {
  output: {
    publicPath: '/',
    path: path.join(process.cwd(), config.dist, 'public'),
    filename: '[name].[hash:8].js'
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    unsafeCache: true,
    symlinks: false
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'vue-loader',
            options: require('./vue-loader-options')
          }
        ]
      },

      {
        test: /\.scss$/,
        use: styleLoaderConfig.scss
      },

      {
        test: /\.less$/,
        use: styleLoaderConfig.less
      },

      {
        test: /\.css$/,
        use: styleLoaderConfig.css
      },

      {
        test: /\.(ico|gif|png|jpg|jpeg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      },

      {
        test: /\.(woff2?|ttf|eot|svg)(\?[\s\S])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      '__BROWSER__': true,
      '__BUILD__': true
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.[hash:8].js'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    }),

    new Bless({addImports: true}),

    new ExtractTextPlugin({
      filename: '[name].[hash:8].css'
    }),

    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 1024 * 100
    }),

    new webpack.optimize.UglifyJsPlugin({
      // 0.4.6
      comments: false,
      compress: {
        sequences: true, // join consecutive statemets with the “comma operator”
        properties: true, // optimize property access: a["foo"] → a.foo
        dead_code: true, // discard unreachable code
        drop_debugger: true, // discard “debugger” statements
        drop_console: true,
        unsafe: false, // some unsafe optimizations (see below)
        conditionals: true, // optimize if-s and conditional expressions
        comparisons: true, // optimize comparisons
        evaluate: true, // evaluate constant expressions
        booleans: true, // optimize boolean expressions
        loops: true, // optimize loops
        unused: true, // drop unused variables/functions
        hoist_funs: true, // hoist function declarations
        hoist_vars: false, // hoist variable declarations
        if_return: true, // optimize if-s followed by return/continue
        join_vars: true, // join var declarations
        cascade: true, // try to cascade `right` into `left` in sequences
        side_effects: true, // drop side-effect-free statements
        warnings: false // warn about potentially dangerous optimizations/code
      }
      // mangle: false

      // beta
      // uglifyOptions: {
      //   comments: false,
      //   compress: {
      //     warnings: false,
      //     drop_debugger: true,
      //     drop_console: true
      //   }
      //   // mangle: false
      // }
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  ],
  stats: {
    colors: true,
    warnings: true
  }
})
