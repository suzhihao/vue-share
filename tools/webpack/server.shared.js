/**
 * Created by Wu Jian Ping on - 2017/09/06.
 */

import path from 'path'
import config from '../config'

export default {
  target: 'node',
  entry: './src/server.js',

  output: {
    path: path.join(process.cwd(), config.dist),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },

  resolveLoader: {
    modules: ['tools/loaders', 'node_modules']
  },

  node: {
    __filename: false,
    __dirname: false
  }
}
