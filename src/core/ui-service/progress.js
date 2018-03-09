let progress = {
  start: () => {},
  done: () => {}
}

if (__BROWSER__) {
  let nprogress = require('nprogress')
  let pending = 0
  $(function() {
    nprogress.configure({ showSpinner: false })
  })
  progress.start = () => {
    pending++
    if (pending === 1) {
      nprogress.start()
    }
  }
  progress.done = () => {
    pending--
    if (pending === 0) {
      nprogress.done()
    }
  }
}

export default progress
