/**
 * Created by Wu Jian Ping on 2017/3/23.
 */

import { makeDir, copyDir, writeFile, copyFile } from './libs/fs'
import pkg from '../package.json'
import config from './config'
import { getClient } from './libs/utils'
import rimraf from 'rimraf'

export const copyPkg = { // eslint-disable-line
  name: 'generate package.json',
  func: async() => {
    await makeDir(`${config.dist}`)
    // generate package.json
    await writeFile(`${config.dist}/package.json`, JSON.stringify({
      name: pkg.name,
      private: true,
      engines: pkg.engines,
      dependencies: pkg.dependencies,
      scripts: {
        start: 'node server.js'
      }
    }, null, 2))
  }
}

export const copyPublic = { // eslint-disable-line
  name: 'copy static assets in public folder',
  func: async() => {
    await makeDir(`${config.dist}`)
    await copyDir('public', `${config.dist}/public`)
  }
}

export const copyFavicon = { // eslint-disable-line
  name: 'copy favicon to public folder',
  func: async() => {
    let client = getClient()
    await copyFile(`${config.dist}/public/favicons/${client}.ico`, `${config.dist}/public/favicon.ico`)
    await rimraf(`${config.dist}/public/favicons`, () => {})
  }
}
