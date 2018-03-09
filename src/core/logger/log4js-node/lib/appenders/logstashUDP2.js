/**
 * Created by Wu Jian Ping on - 2017/07/23.
 */
import dgram from 'dgram'
import util from 'util'
import _ from 'lodash'

const output = console

let sendLog = (udp, host, port, logObject) => {
  const buffer = Buffer.from(JSON.stringify(logObject))

  /* eslint no-unused-vars:0 */
  udp.send(buffer, 0, buffer.length, port, host, (err, bytes) => {
    if (err) {
      output.error('log4js.logstashUDP2 - %s:%p Error: %s', host, port, util.inspect(err)) // eslint-disable-line
    }
  })
}


let logstashUDP2 = (config, layout) => {
  const udp = dgram.createSocket('udp4')
  const type = config.logType ? config.logType : config.category

  if (!config.fields) {
    config.fields = {}
  }

  function log(loggingEvent) {
    let data = {}
    const logObject = {
      '@version': '1',
      '@timestamp': (new Date(loggingEvent.startTime)).toISOString(),
      type: type
    }

    const keys = Object.keys(config.fields)
    for (let i = 0, length = keys.length; i < length; i += 1) {
      data[keys[i]] = config.fields[keys[i]]
    }

    // 处理第一个
    let firstEventData = loggingEvent.data[0]
    if (_.isError(firstEventData)) {
      logObject.message = firstEventData.message
      data['stack'] = firstEventData.stack
    } else if (_.isString(firstEventData)) {
      logObject.message = firstEventData
    } else if (_.isPlainObject(firstEventData)) {
      logObject.message = ''
      Object.keys(firstEventData).forEach((key) => {
        data[key] = firstEventData[key]
      })
    }

    // 处理剩下的
    if (loggingEvent.data.length > 1) {
      for (let i = 1; i < loggingEvent.data.length; ++i) {
        let eventData = loggingEvent.data[i]
        if (_.isError(eventData)) {
          data['stack'] = eventData.stack
        } else if (_.isString(eventData)) {
          data[`message${i}`] = eventData
        } else if (_.isPlainObject(eventData)) {
          Object.keys(eventData).forEach((key) => {
            data[key] = eventData[key]
          })
        }
      }
    }

    data.level = loggingEvent.level.levelStr
    data.category = loggingEvent.categoryName

    logObject.fields = _.assign({}, config.fields, data)

    sendLog(udp, config.host, config.port, logObject)
  }

  log.shutdown = function (cb) {
    udp.close(cb)
  }

  return log
}

let configure = (config, layouts) => {
  let layout
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout)
  } else {
    layout = layouts.dummyLayout
  }

  return logstashUDP2(config, layout)
}

module.exports.configure = configure
