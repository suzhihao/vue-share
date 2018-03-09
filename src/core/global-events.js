/**
 * Created by Wu Jian Ping on - 2017/12/04.
 */

import EventEmmiter from 'events'

class GlobalEvents extends EventEmmiter {
  constructor() {
    super()

    this.on('responsive', () => {
      this.emit('responsive-callback')
    })
  }
}

const globalEvents = new GlobalEvents()

export default globalEvents
