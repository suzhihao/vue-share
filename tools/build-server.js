/**
 * Created by Wu Jian Ping on 2017/3/20.
 */

import webpack from 'webpack'
import chalk from 'chalk'
import config from './config'
import webpackConfig from './webpack/server.build'
import { getPublicPath, logger, getEnv, createEnvDefinePlugin, getClient, createClientDefinePlugin } from './libs/utils'
import { writeFile } from './libs/fs'

async function build(env) {
  env = env || getEnv()
  webpackConfig.output.publicPath = (env === 'dev' ? '/' : getPublicPath(env))

  // setup env config
  webpackConfig.plugins.push(createEnvDefinePlugin(env))

  // setup customer client
  webpackConfig.plugins.push(createClientDefinePlugin(getClient()))

  logger.chalk(`${chalk.blue('Enviroment: ')}${chalk.bgRed(env)}`)
  logger.chalk(`${chalk.blue('Server public path: ')}${webpackConfig.output.publicPath}`)
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        console.log(stats.toString(webpackConfig.stats)) //eslint-disable-line
        let statsJson = stats.toJson()
        if (statsJson.errors && statsJson.errors.length) {
          reject(statsJson.errors)
        } else {
          writeFile(`${config.dist}/webpack-server-stats.json`, JSON.stringify(statsJson))
          resolve()
        }
      }
    })
  })
}

export default {
  name: 'build server',
  func: build
}
