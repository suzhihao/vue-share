'use strict'

const output = console

const consoleLog = output.log.bind(output)

function consoleAppender(layout, timezoneOffset) {
  return (loggingEvent) => {
    consoleLog(layout(loggingEvent, timezoneOffset))
  }
}

function configure(config, layouts) {
  let layout = layouts.colouredLayout
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout)
  }
  return consoleAppender(layout, config.timezoneOffset)
}

module.exports.configure = configure
