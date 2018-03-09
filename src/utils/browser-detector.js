/**
 * Created by Wu Jian Ping on - 2017/12/05.
 */

const isIE = () => {
  let agent = navigator.userAgent.toLowerCase()
  return agent.indexOf('msie') !== -1 || agent.indexOf('trident') !== -1 || agent.indexOf(' edge/') !== -1
}

export default {
  isIE
}
