/**
 * Created by Wu Jian Ping on - 2017/11/13.
 */

import bless from 'bless'
import {RawSource, SourceMapSource} from 'webpack-sources'

const CSS_REGEXP = /\.css$/

const createBlessedFileName = (filenameWithoutExtension, index) => {
  return index === 0 ? `${filenameWithoutExtension}.css` : `${filenameWithoutExtension}-partial${index}.css`
}

const addImports = (parsedData, filenameWithoutExtension) => {
  const lastChunk = parsedData.data.pop()
  parsedData.data = [lastChunk].concat(parsedData.data)

  const sourceToInjectIndex = 0
  let addImports = ''

  parsedData.data.map((fileContents, index) => { // eslint-disable-line max-nested-callbacks
    if (index !== sourceToInjectIndex) {
      const filename = createBlessedFileName(filenameWithoutExtension, index)
      // E.g. @import url(app-blessed1.css);
      addImports += `@import url(${filename});\n`
    }
    return fileContents
  })

  parsedData.data[sourceToInjectIndex] = `${addImports}\n${parsedData.data[sourceToInjectIndex]}`

  return parsedData
}

export default class BlessWebpackPlugin {
  constructor(options) {
    options = options || {
      sourceMap: false,
      addImports: false
    }
    this.options = options
  }

  apply(compiler) {
    compiler.plugin('compilation', compilation => {
      compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
        chunks.forEach(chunk => {
          chunk.files
            .filter(filename => filename.match(CSS_REGEXP))
            .forEach(cssFileName => {
              const asset = compilation.assets[cssFileName]
              let input = {}

              if (this.options.sourceMap) {
                if (asset.sourceAndMap) {
                  input = asset.sourceAndMap()
                } else {
                  input.map = asset.map()
                  input.source = asset.source()
                }
              } else {
                input.source = asset.source()
              }

              const filenameWithoutExtension = cssFileName.replace(CSS_REGEXP, '')

              let parsedData = bless.chunk(input.source, {
                sourcemaps: this.options.sourceMap,
                source: this.options.sourceMap ? input.map.sources[0] : null
              })

              if (parsedData.data.length > 1) {
                if (this.options.addImports) {
                  parsedData = addImports(parsedData, filenameWithoutExtension)
                }
                parsedData.data.forEach((fileContents, index) => { // eslint-disable-line max-nested-callbacks
                  const filename = createBlessedFileName(filenameWithoutExtension, index)
                  const outputSourceMap = parsedData.maps[index]
                  if (outputSourceMap) {
                    compilation.assets[filename] = new SourceMapSource(fileContents, filename, outputSourceMap, input.source, input.map)
                  } else {
                    compilation.assets[filename] = new RawSource(fileContents)
                  }
                  if (index > 0 && !this.options.addImports) {
                    chunk.files.push(filename)
                  }
                })
              }
            })
        })
        callback()
      })
    })
  }
}
